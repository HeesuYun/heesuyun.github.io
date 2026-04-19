# heesuyun.github.io

Personal site for **Heesu Yun** — React, TypeScript, and Vite — hosted on [GitHub Pages](https://docs.github.com/en/pages).

## Development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/`).

## Project layout

- **`src/pages/`** — Route-level screens (`HomePage`, `CvPage`, `ContactPage`).
- **`src/components/`** — Shared UI: `SiteHeader`, `SiteFooter`, `PrimaryNav`, `PageMain`, `ExternalLink`, `SkipLink`, and feature folders (`about/`, `cv/`, `contact/`).
- **`src/constants/links.ts`** — Shared outbound URLs and contact email.
- **`src/hooks/useDocumentTitle.ts`** — Sets `document.title` per route.

## Production build

```bash
npm run build
```

Output is in `dist/`. Preview locally with `npm run preview`.

## GitHub Pages

This repo includes [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), which builds with Node 20, copies `index.html` to `404.html` for client-side routing, and deploys `dist/` to Pages.

In the repository **Settings → Pages**, set **Build and deployment** source to **GitHub Actions** (not “Deploy from a branch”). After a successful run on `main`, the site is served at `https://heesuyun.github.io/`.
