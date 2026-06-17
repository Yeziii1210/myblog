import { IntroGate } from "@/components/IntroGate";
import { Chrome } from "@/components/Chrome";
import { MagazineFeed } from "@/components/MagazineFeed";
import { ScrollFx } from "@/components/ScrollFx";

export function HomePage() {
  return (
    <div className="site-shell" id="top">
      <IntroGate />
      <div className="vignette" aria-hidden="true" />
      <div className="film-grain" aria-hidden="true" />
      <Chrome />
      <main className="site-main">
        <MagazineFeed />
      </main>
      <ScrollFx />
    </div>
  );
}
