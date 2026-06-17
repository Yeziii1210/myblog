import { Reveal } from "@/components/Reveal";
import { PolaroidCard } from "@/components/PolaroidCard";
import { PullQuote } from "@/components/PullQuote";
import { PolaroidDeck } from "@/components/PolaroidDeck";
import { siteContent } from "@/data/site-content";
import { getAllPosts } from "@/lib/writing";
import type { PostMeta } from "@/lib/writing";

function metaOf(post: PostMeta) {
  return [post.date, post.tag].filter(Boolean).join(" · ");
}

export function MagazineFeed() {
  const posts = getAllPosts();
  const { masthead, tagline, pullQuotes, fragments, deck } = siteContent;
  const [feat0, feat1, feat2] = posts;

  return (
    <div className="feed-wrap">
      {/* ---------- Masthead ---------- */}
      <section className="feed-hero" aria-labelledby="masthead-title">
        <Reveal className="masthead" immediate>
          <span className="masthead-script">{masthead.script}</span>
          <span className="masthead-presents">{masthead.presents}</span>
          <h1 className="masthead-title" id="masthead-title">
            {masthead.title}
          </h1>
          <span className="masthead-sub">{masthead.titleSub}</span>
          <p className="masthead-tagline">{tagline}</p>
        </Reveal>
      </section>

      {/* ---------- Scattered feature canvas ---------- */}
      <section className="feed" id="index" aria-label="特写">
        <span className="feed-watermark" aria-hidden="true">
          {masthead.script}
        </span>

        <div className="feed-band feed-band--1">
          {feat0 && (
            <Reveal className="feed-slot slot--a">
              <PolaroidCard
                feature
                kicker={feat0.kicker}
                title={feat0.title}
                caption={feat0.excerpt}
                meta={metaOf(feat0)}
                note={feat0.note}
                href={`/writing/${feat0.slug}`}
                rotate={-2.4}
                parallax={0.05}
                accent="paper"
              />
            </Reveal>
          )}
          <Reveal className="feed-slot slot--b">
            <PullQuote quote={pullQuotes[0]} rotate={1.4} parallax={0.1} />
          </Reveal>
        </div>

        <div className="feed-band feed-band--2">
          <Reveal className="feed-slot slot--c">
            <PullQuote
              quote={pullQuotes[1]}
              rotate={-1}
              parallax={0.06}
              align="left"
            />
          </Reveal>
          {feat1 && (
            <Reveal className="feed-slot slot--d">
              <PolaroidCard
                feature
                kicker={feat1.kicker}
                title={feat1.title}
                caption={feat1.excerpt}
                meta={metaOf(feat1)}
                note={feat1.note}
                href={`/writing/${feat1.slug}`}
                rotate={2.6}
                parallax={0.03}
                accent="cream"
              />
            </Reveal>
          )}
          {fragments[0] && (
            <Reveal className="feed-slot slot--e">
              <PolaroidCard
                kicker={fragments[0].kicker}
                title={fragments[0].title}
                note={fragments[0].note}
                meta={fragments[0].meta}
                rotate={-3.2}
                parallax={0.12}
                accent="sepia"
              />
            </Reveal>
          )}
        </div>

        <div className="feed-band feed-band--3">
          {fragments[1] && (
            <Reveal className="feed-slot slot--f">
              <PolaroidCard
                kicker={fragments[1].kicker}
                title={fragments[1].title}
                note={fragments[1].note}
                meta={fragments[1].meta}
                rotate={3}
                parallax={0.11}
                accent="paper"
              />
            </Reveal>
          )}
          {feat2 && (
            <Reveal className="feed-slot slot--g">
              <PolaroidCard
                feature
                kicker={feat2.kicker}
                title={feat2.title}
                caption={feat2.excerpt}
                meta={metaOf(feat2)}
                note={feat2.note}
                href={`/writing/${feat2.slug}`}
                rotate={-1.6}
                parallax={0.04}
                accent="sepia"
              />
            </Reveal>
          )}
          <Reveal className="feed-slot slot--h">
            <PullQuote quote={pullQuotes[2]} rotate={1.1} parallax={0.08} />
          </Reveal>
        </div>

        <div className="feed-band feed-band--deck">
          <Reveal>
            <PolaroidDeck
              label={deck.label}
              title={deck.title}
              cards={deck.cards}
            />
          </Reveal>
        </div>
      </section>

      {/* ---------- Editorial index ---------- */}
      <section className="contents" id="writing" aria-labelledby="contents-label">
        <Reveal>
          <header className="contents-head">
            <span className="contents-kicker" id="contents-label">
              写作 / WRITING
            </span>
            <span className="contents-count">全 {posts.length} 篇</span>
          </header>
          <ol className="contents-list">
            {posts.map((post, i) => (
              <li key={post.slug} className="contents-item">
                <a href={`/writing/${post.slug}`} className="contents-link">
                  <span className="contents-no">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="contents-body">
                    <span className="contents-title">{post.title}</span>
                    {post.excerpt && (
                      <span className="contents-excerpt">{post.excerpt}</span>
                    )}
                  </span>
                  <span className="contents-meta">{metaOf(post)}</span>
                  <span className="contents-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </Reveal>
      </section>
    </div>
  );
}
