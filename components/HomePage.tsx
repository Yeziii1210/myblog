import { WritingIndex } from "@/components/WritingIndex";

export function HomePage() {
  return (
    <div className="site-shell" id="top">
      <div className="vignette" aria-hidden="true" />
      <div className="film-grain" aria-hidden="true" />
      <main className="site-main">
        <WritingIndex />
      </main>
    </div>
  );
}
