import Link from "next/link";
import { siteContent } from "@/data/site-content";

export function Chrome({ minimal = false }: { minimal?: boolean }) {
  const { masthead } = siteContent;
  return (
    <header className="chrome" aria-label="Site header">
      <Link className="chrome-brand" href="/" aria-label="yeziii — 写作">
        <span className="chrome-script">{masthead.script}</span>
      </Link>

      {minimal && (
        <Link className="chrome-back" href="/">
          ← 写作 / WRITING
        </Link>
      )}
    </header>
  );
}
