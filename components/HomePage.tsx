import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import { siteContent } from "@/data/site-content";

export function HomePage() {
  return (
    <div className="site-shell" id="top">
      <div className="paper-grain" aria-hidden="true" />
      <Header />

      <main className="site-main">
        <section className="home-hero" aria-labelledby="home-statement">
          <Reveal className="voyage-panel" immediate>
            <div className="voyage-frame" aria-label="夜海航行图">
              <iframe
                className="voyage-sea"
                src="/experiments/night-sea-clawd.html"
                title="夜海航行图"
                loading="eager"
                sandbox="allow-scripts"
              />
              <div className="voyage-chart" aria-hidden="true">
                <span className="chart-ring chart-ring-a" />
                <span className="chart-ring chart-ring-b" />
                <span className="route-line route-line-a" />
                <span className="route-line route-line-b" />
                <span className="route-point route-point-a" />
                <span className="route-point route-point-b" />
                <span className="route-point route-point-c" />
              </div>
              <div className="glass-mask" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal as="article" className="self-copy" immediate>
            <h1 className="home-statement" id="home-statement">
              {siteContent.hero.statement}
            </h1>
            <p className="home-intro">{siteContent.hero.intro}</p>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
