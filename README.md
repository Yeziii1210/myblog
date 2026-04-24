# yeziii blog

Personal homepage rebuilt with Next.js App Router and reusable React components.

## Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Structure

- `app/` contains the Next.js routes and global styles.
- `components/` contains reusable UI and page sections.
- `data/site-content.ts` contains the Chinese site copy used by the components.
- `docs/` contains design principles and project documentation.
- `styles/` contains global CSS split by responsibility and imported by `app/globals.css`.
- `public/assets/` contains static image assets.
- `public/experiments/night-sea-clawd.html` keeps the canvas animation isolated from the homepage bundle.
