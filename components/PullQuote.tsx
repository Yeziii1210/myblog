import type { CSSProperties } from "react";
import type { PullQuote as PullQuoteData } from "@/data/site-content";

function Highlighted({
  text,
  highlight,
}: {
  text: string;
  highlight?: string[];
}) {
  if (!highlight || highlight.length === 0) return <>{text}</>;
  const escaped = highlight.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const re = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(re);
  return (
    <>
      {parts.map((part, i) =>
        highlight.includes(part) ? (
          <mark key={i} className="q-mark">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

export function PullQuote({
  quote,
  rotate = 0,
  parallax,
  align = "left",
}: {
  quote: PullQuoteData;
  rotate?: number;
  parallax?: number;
  align?: "left" | "right" | "center";
}) {
  const style = { "--rot": `${rotate}deg` } as CSSProperties;
  return (
    <figure
      className="pullquote"
      data-align={align}
      style={style}
      {...(parallax ? { "data-parallax": String(parallax) } : {})}
    >
      <blockquote className="pullquote-text">
        <span className="pullquote-mark" aria-hidden="true">
          “
        </span>
        <Highlighted text={quote.text} highlight={quote.highlight} />
      </blockquote>
      {quote.cite && (
        <figcaption className="pullquote-cite">— {quote.cite}</figcaption>
      )}
    </figure>
  );
}
