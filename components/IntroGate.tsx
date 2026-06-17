"use client";

import { useCallback, useEffect, useState } from "react";
import { siteContent } from "@/data/site-content";

const STORAGE_KEY = "yz-entered";

export function IntroGate() {
  const { masthead, posters, chrome } = siteContent;
  const [entered, setEntered] = useState(false);

  // On mount: if we've already entered this session, skip the gate.
  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen) {
      setEntered(true);
      return;
    }
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const enter = useCallback(() => {
    setEntered(true);
    document.body.style.overflow = "";
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  return (
    <div
      className="gate"
      data-entered={entered}
      aria-hidden={entered}
      role="dialog"
      aria-label="封面"
    >
      <div className="gate-collage" aria-hidden="true">
        {posters.map((word, i) => (
          <span key={`${word}-${i}`} className="poster-tile" data-v={i % 5}>
            {word}
          </span>
        ))}
      </div>
      <div className="gate-veil" aria-hidden="true" />

      <div className="gate-badge">
        <span className="gate-seal" aria-hidden="true" />
        <span className="gate-script">{masthead.script}</span>
        <span className="gate-presents">{masthead.presents}</span>
        <h1 className="gate-title">{masthead.title}</h1>
        <span className="gate-sub">{masthead.titleSub}</span>
        <button
          type="button"
          className="gate-enter"
          onClick={enter}
          autoFocus
        >
          进入 / ENTER
        </button>
        <span className="gate-foot">{chrome.issue}</span>
      </div>
    </div>
  );
}
