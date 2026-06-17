# Design Principles — Dark Minimal (Personal Writing Site)

> AI implementation reference. The Chinese version lives in `design-principles.zh.md`.
>
> This site evolved twice: first from a "warm paper-and-ink blog" to a "darkroom
> personal magazine," then collapsed — by request, "minimal to the extreme" — into its
> current form: **a dark, restrained personal writing site.** The former magazine
> pieces (intro gate, polaroid cards, scattered layout, deck, parallax) were removed;
> see git history if needed.

## 1. Current form

- **Home** = nothing but the "写作 / WRITING" article index, vertically centered on a
  pure-black canvas.
- **Article pages** = dark but reading-first long-form: a cursive `yeziii` mark + back
  link top-left (`Chrome`), a polaroid-style header, light-ink body.
- "Simple content is the best self-introduction" — no self-statement, no decorative
  modules; the list and the writing itself are the introduction.

## 2. Color (`styles/tokens.css`)

- Canvas: pure black `--bg #060606`, plus a very faint film grain + vignette.
- On-dark text: `--fg #f5f2ea`, muted via `--fg-muted / --fg-faint / --fg-ghost`.
- Warm gold accent: `--gold #c8a25a`, `--cream #efe7d6` — for section labels, the
  number hover, links, blockquotes only.
- Gold is rare so it stays powerful; build hierarchy with value / weight / spacing.

## 3. Type (free approximations — `styles/fonts.css` + tokens)

| Role | Variable | Font |
|---|---|---|
| Big index numerals | `--font-display` | Anton |
| List titles (Latin) | `--font-name` | Archivo 700 |
| Article titles (CJK) | `--font-cjk-display` | Smiley Sans 得意黑 (CDN, falls back to Noto Serif SC 700) |
| Labels / dates / tags | `--font-mono` | Space Mono |
| Serif italic (excerpt) | `--font-serif-italic` | Fraunces italic |
| Script (mark / note) | `--font-script` | Caveat |
| Body | `--font-cjk` | Noto Serif SC |

Monospace carries all metadata; serif carries the body for long-form readability.

## 4. Structure

- `components/WritingIndex.tsx` — the home article index (number + title + excerpt +
  date·tag + arrow).
- `components/Chrome.tsx` — article pages only (`minimal`): cursive mark + back link.
- `components/Reveal.tsx` — lightweight scroll reveal (IntersectionObserver).
- `app/writing/[slug]/page.tsx` + `styles/post.css` — dark, readable long-form page,
  remark pipeline preserved.
- Article frontmatter may carry optional `kicker` / `note` for the article header.

## 5. Do / Don't

Do: keep it minimal (home is just the list); keep gold rare; let mono carry metadata;
keep the reading page readable above all; honor `prefers-reduced-motion`.

Don't: add a cover / cards / modules back to the home; use a light theme; write generic
self-statement copy; let styling compromise long-form readability.
