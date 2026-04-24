import Image from "next/image";
import type { CSSProperties } from "react";
import { Header } from "@/components/Header";
import { Reveal } from "@/components/Reveal";
import {
  CardLabel,
  Eyebrow,
  LinkArrow,
  NoteLines,
  SectionHeader,
  Tags,
} from "@/components/ui";
import { siteContent } from "@/data/site-content";

export function HomePage() {
  return (
    <div className="site-shell" id="top">
      <div className="paper-grain" aria-hidden="true" />
      <Header />

      <main className="site-main">
        <section className="hero" aria-labelledby="hero-title">
          <Reveal className="hero-copy" immediate>
            <Eyebrow>{siteContent.hero.eyebrow}</Eyebrow>
            <h1 className="hero-title" id="hero-title">
              {siteContent.hero.title}
            </h1>
            <p className="hero-lede">{siteContent.hero.lede}</p>

            <div className="hero-actions">
              <a className="button" href="#work">
                <span>{siteContent.hero.primaryCta}</span> <LinkArrow />
              </a>
              <a className="text-link" href="#writing">
                <span>{siteContent.hero.secondaryCta}</span> <LinkArrow />
              </a>
            </div>

            <dl className="hero-meta">
              {siteContent.hero.meta.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.text}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <ArtifactPanel />
        </section>

        <WorkSection />
        <NotesSection />
        <ContactSection />

        <footer className="footer">
          <span>yeziii / night sea notes</span>
          <span>{siteContent.footerMeta}</span>
        </footer>
      </main>
    </div>
  );
}

function ArtifactPanel() {
  const { artifact } = siteContent;

  return (
    <Reveal
      as="aside"
      className="artifact"
      ariaLabel="Current workspace note"
      immediate
    >
      <span className="paperclip" aria-hidden="true">
        <Image src="/assets/pin.svg" alt="" width={180} height={240} />
      </span>
      <div className="artifact-grid">
        <article className="artifact-block">
          <span className="artifact-label">{artifact.focusLabel}</span>
          <h2>{artifact.focusTitle}</h2>
          <p>{artifact.focusText}</p>
        </article>

        <div className="artifact-block artifact-sketch" aria-hidden="true">
          <div className="sea-embed">
            <iframe
              className="sea-frame"
              src="/experiments/night-sea-clawd.html"
              title="Clawd night sea animation"
              tabIndex={-1}
              loading="eager"
              sandbox="allow-scripts"
            />
            <span className="corner-blur" aria-hidden="true" />
          </div>
        </div>

        <article className="artifact-block">
          <span className="artifact-label">{artifact.noteLabel}</span>
          <p className="working-note">
            <NoteLines lines={artifact.noteLines} />
          </p>
        </article>

        <article className="artifact-block">
          <span className="artifact-label">{artifact.todayLabel}</span>
          <ul className="today-list">
            {artifact.today.map((item) => (
              <li className={item.isOpen ? "is-open" : undefined} key={item.text}>
                {item.text}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </Reveal>
  );
}

function WorkSection() {
  const { work, writing } = siteContent;

  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <Reveal>
        <SectionHeader
          eyebrow={work.eyebrow}
          title={work.title}
          copy={work.copy}
          titleId="work-title"
        />
      </Reveal>

      <div className="desk-grid">
        <Reveal as="article" className="work-feature">
          <div className="work-preview" aria-hidden="true">
            <div
              className="mini-browser"
              style={
                {
                  "--preview-copy": `"${work.preview}"`,
                } as CSSProperties
              }
            />
          </div>
          <div className="work-copy">
            <CardLabel>{work.caseLabel}</CardLabel>
            <h3>{work.caseTitle}</h3>
            <p>{work.caseText}</p>
            <Tags tags={work.tags} />
          </div>
        </Reveal>

        <Reveal as="aside" className="writing-panel" id="writing">
          <CardLabel>{writing.label}</CardLabel>
          <div className="writing-list">
            {writing.posts.map((post) => (
              <article className="writing-row" key={`${post.date}-${post.title}`}>
                <span className="writing-date">{post.date}</span>
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.text}</p>
                </div>
                <LinkArrow />
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NotesSection() {
  const { notes } = siteContent;

  return (
    <section className="section" id="notes" aria-labelledby="notes-title">
      <Reveal>
        <SectionHeader
          eyebrow={notes.eyebrow}
          title={notes.title}
          copy={notes.copy}
          titleId="notes-title"
        />
      </Reveal>

      <div className="thread-grid">
        {notes.cards.map((card) => (
          <Reveal as="article" className="thread-card" key={card.label}>
            <CardLabel>{card.label}</CardLabel>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const { contact } = siteContent;

  return (
    <section className="section" id="contact" aria-labelledby="contact-title">
      <Reveal className="contact-panel">
        <div>
          <Eyebrow>{contact.eyebrow}</Eyebrow>
          <h2 id="contact-title">{contact.title}</h2>
          <p>{contact.copy}</p>
        </div>
        <a className="button" href="mailto:hi@yourdomain.com">
          <span>{contact.cta}</span> <LinkArrow />
        </a>
      </Reveal>
    </section>
  );
}
