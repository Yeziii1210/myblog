import Link from "next/link";
import { siteContent } from "@/data/site-content";

export function Chrome({ minimal = false }: { minimal?: boolean }) {
  const { chrome, masthead } = siteContent;
  return (
    <header className="chrome" aria-label="Site header">
      <Link className="chrome-brand" href="/" aria-label="yeziii — 封面">
        <span className="chrome-script">{masthead.script}</span>
        <span className="chrome-badge">{chrome.badge}</span>
      </Link>

      {minimal ? (
        <Link className="chrome-back" href="/">
          ← 返回封面 / COVER
        </Link>
      ) : (
        <nav className="chrome-nav" aria-label="Sections">
          {chrome.nav.map((link) => (
            <a key={link.href} href={link.href} className="chrome-link">
              {link.label}
            </a>
          ))}
          <span className="chrome-issue" aria-hidden="true">
            {chrome.issue}
          </span>
        </nav>
      )}
    </header>
  );
}
