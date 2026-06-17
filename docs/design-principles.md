# Design Principles — Dark Cinematic Editorial (Personal Magazine)

> AI implementation reference. The Chinese version lives in `design-principles.zh.md`.
>
> In 2025 this site moved from a "warm paper-and-ink blog" to a "personal magazine
> shot in a darkroom." The visual language follows `south-by-locals.wanderlustmagazine.com`:
> tilted, aged polaroid cards scattered on a pure-black canvas, display-type headlines,
> monospace sub-labels, a handwritten script watermark, scroll parallax, and an intro gate.
>
> The previous Anthropic/Claude warm-paper direction no longer applies — see git history if needed.

## 1. Core feeling

It should feel like a private publication leafed through in a darkroom — a deck of
instant photos with tape and handwritten notes on a black desk. It is a magazine of
one: the content *is* the introduction, so keep self-statement minimal.

It should NOT feel like a light SaaS landing page, a neon cyber AI site, or an
information-dense equal-weight card grid.

## 2. Color (`styles/tokens.css`)

- Canvas: pure black `--bg #060606` / `--bg-pure #000`, plus film grain + vignette.
- Paper cards: aged off-white `--paper #f4efe3`, dark ink `--paper-ink #1a1714`.
- On-dark text: `--fg #f5f2ea`, muted via `--fg-muted / --fg-faint / --fg-ghost`.
- Warm gold accent: `--gold #c8a25a`, `--cream #efe7d6` — for kickers, badges, quote
  highlights, and links only. Tape `--tape`; deep dark shadows `--shadow-card`.

Rule: gold is rare so it stays powerful. Build hierarchy with value / weight / spacing /
rotation, not stacked color.

## 3. Type (free approximations of the Adobe originals — `styles/fonts.css` + tokens)

| Role | Variable | Font |
|---|---|---|
| Display / poster / big numerals | `--font-display` | Anton |
| Card names (Latin) | `--font-name` | Archivo 700+ |
| CJK display titles | `--font-cjk-display` | Smiley Sans 得意黑 (CDN, falls back to Noto Serif SC 700) |
| Mono: labels / dates / tags / quotes | `--font-mono` | Space Mono |
| Serif italic accent | `--font-serif-italic` | Fraunces italic |
| Script: masthead / notes / watermark | `--font-script` | Caveat |
| CJK body | `--font-cjk` | Noto Serif SC |

Rule: monospace carries all "metadata"; display type shouts only on a few titles;
script is for signatures and notes — sparingly.

## 4. Signature components

- **Intro gate `IntroGate`** — aged typographic "poster" collage + a central gold seal
  (script masthead + giant issue title + ENTER). No audio. `sessionStorage` remembers
  entry so it doesn't replay on back-navigation.
- **Polaroid card `PolaroidCard`** — white paper frame + dark "photo" panel (kicker +
  display title + mono caption) + bottom white strip (date·tag + handwritten note) + tape.
  Slight rotation, straightens and lifts on hover. `accent`: paper / cream / sepia.
- **Pull quote `PullQuote`** — large CJK serif quote, key words gold-highlighted
  (`q-mark`), gold quotation mark, mono citation. Measure in `rem`, never `ch`
  (`ch` mis-computes against the small figure font under large display text).
- **Deck `PolaroidDeck`** — fans out on scroll-in, tap to raise a card; collapses to a
  readable vertical stack on mobile.
- **Chrome `Chrome`** + **Footer `FooterCta`** — script masthead badge left / nav + issue
  right; an "END OF ISSUE" closing banner at the bottom.

## 5. Layout & motion

- Desktop `MagazineFeed`: a 12-column grid of "bands" scatters cards / quotes / fragments
  (`slot--a..h` control column span, vertical offset, rotation), with a giant script
  watermark behind.
- Parallax: `ScrollFx` drives `[data-parallax]` via the independent `translate` property
  (so it never fights `transform` rotation); disabled on narrow screens / reduced motion.
- Reveal: reuse `Reveal` (IntersectionObserver fade-and-rise).
- Responsive: below 760px bands become a single centered column, the deck stacks
  vertically, parallax turns off — guarantee no horizontal overflow.
- Always honor `prefers-reduced-motion` (`styles/utilities.css`).

## 6. Reading page (`styles/post.css`)

Dark but reading-first: black background, light-ink body (`Noto Serif SC`, with contrast /
line-height / measure tuned for long-form comfort), a polaroid-style header, and dark
styling for blockquotes / code / links. Never trade readability for style.

## 7. Content

"Simple content is the best self-introduction." Keep self-statement minimal — masthead +
one tagline, then straight into the work. Articles are the magazine "features." A few
fragments / quotes add editorial texture but stay restrained, concrete, never generic.
Masthead / issue strings live in `data/site-content.ts`, editable in one place.

## 8. Do / Don't

Do: lean on the black-canvas vs aged-paper contrast; keep gold rare; let mono carry
metadata; give cards a slight handmade tilt; make motion breathe; keep the reading page
readable above all.

Don't: spread gold everywhere; size quotes with `ch`; let the scattered layout overflow
horizontally on mobile; let parallax/motion interrupt reading; ignore
`prefers-reduced-motion`; turn this back into another light portfolio template.
