"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { type Language } from "@/data/site-content";
import { useSiteLanguage } from "@/components/LanguageProvider";

const languageOptions: Array<{ value: Language; label: string }> = [
  { value: "zh", label: "中文" },
  { value: "en", label: "EN" },
];

export function Header() {
  const { content, language, setLanguage } = useSiteLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const syncHeader = () => setIsScrolled(window.scrollY > 10);

    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });

    return () => window.removeEventListener("scroll", syncHeader);
  }, []);

  return (
    <div className={`site-header-shell${isScrolled ? " is-scrolled" : ""}`}>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="yeziii home">
          <Image
            className="brand-mark"
            src="/assets/logo.svg"
            alt=""
            width={120}
            height={50}
            priority
          />
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          {content.nav.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-tools">
          <div className="language-switch" aria-label="Language switch">
            {languageOptions.map((option) => (
              <button
                className="lang-button"
                type="button"
                key={option.value}
                aria-pressed={language === option.value}
                onClick={() => setLanguage(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
          <Image
            className="brand-avatar"
            src="/assets/avatar.jpeg"
            alt=""
            width={64}
            height={64}
            priority
          />
        </div>
      </header>
    </div>
  );
}
