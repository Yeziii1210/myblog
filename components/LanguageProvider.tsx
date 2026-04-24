"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { type Language, siteContent } from "@/data/site-content";

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  content: (typeof siteContent)[Language];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const STORAGE_KEY = "yeziii-language";

function isLanguage(value: string | null): value is Language {
  return value === "zh" || value === "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("zh");

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", siteContent[language].metaDescription);
  }, [language]);

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      content: siteContent[language],
    }),
    [language, setLanguage],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useSiteLanguage() {
  const value = useContext(LanguageContext);

  if (!value) {
    throw new Error("useSiteLanguage must be used inside LanguageProvider.");
  }

  return value;
}
