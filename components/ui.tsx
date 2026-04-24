import type { SiteContent } from "@/data/site-content";
import type { ReactNode } from "react";

export function LinkArrow() {
  return (
    <span className="link-arrow" aria-hidden="true">
      →
    </span>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function CardLabel({ children }: { children: ReactNode }) {
  return <span className="card-label">{children}</span>;
}

export function SectionHeader({
  eyebrow,
  title,
  copy,
  titleId,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  titleId: string;
}) {
  return (
    <div className="section-header">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="section-title" id={titleId}>
          {title}
        </h2>
      </div>
      <p className="section-copy">{copy}</p>
    </div>
  );
}

export function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="tag-row">
      {tags.map((tag) => (
        <span className="tag" key={tag}>
          {tag}
        </span>
      ))}
    </div>
  );
}

export function NoteLines({
  lines,
}: {
  lines: SiteContent["artifact"]["noteLines"];
}) {
  return (
    <>
      {lines.map((line, index) => (
        <span key={`${line.emphasis ?? "plain"}-${index}`}>
          {line.emphasis ? <em>{line.emphasis}</em> : null}
          {line.text}
          {index < lines.length - 1 ? <br /> : null}
        </span>
      ))}
    </>
  );
}
