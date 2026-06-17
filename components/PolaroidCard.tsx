import type { CSSProperties } from "react";

export type PolaroidCardProps = {
  kicker?: string;
  title: string;
  meta?: string;
  caption?: string;
  note?: string;
  href?: string;
  rotate?: number;
  accent?: "paper" | "cream" | "sepia";
  parallax?: number;
  feature?: boolean;
  tape?: boolean;
  className?: string;
};

export function PolaroidCard({
  kicker,
  title,
  meta,
  caption,
  note,
  href,
  rotate = 0,
  accent = "paper",
  parallax,
  feature = false,
  tape = true,
  className,
}: PolaroidCardProps) {
  const style = { "--rot": `${rotate}deg` } as CSSProperties;
  const inner = (
    <>
      {tape && <span className="polaroid-tape" aria-hidden="true" />}
      <span className="polaroid-photo">
        {kicker && <span className="polaroid-kicker">{kicker}</span>}
        <span className="polaroid-title">{title}</span>
        {caption && <span className="polaroid-caption">{caption}</span>}
      </span>
      <span className="polaroid-strip">
        {meta && <span className="polaroid-meta">{meta}</span>}
        {note && <span className="polaroid-note">{note}</span>}
      </span>
      {href && (
        <span className="polaroid-arrow" aria-hidden="true">
          →
        </span>
      )}
    </>
  );

  const classes = [
    "polaroid",
    feature ? "polaroid--feature" : "",
    className || "",
  ]
    .filter(Boolean)
    .join(" ");

  const dataProps = {
    "data-accent": accent,
    "data-feature": feature ? "true" : undefined,
    ...(parallax ? { "data-parallax": String(parallax) } : {}),
  };

  if (href) {
    return (
      <a href={href} className={classes} style={style} {...dataProps}>
        {inner}
      </a>
    );
  }
  return (
    <article className={classes} style={style} {...dataProps}>
      {inner}
    </article>
  );
}
