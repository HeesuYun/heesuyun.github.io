# heesuyun.github.io

Personal site for **Heesu Yun** — React, TypeScript, and Vite — hosted on [GitHub Pages](https://docs.github.com/en/pages).

## Development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173/`).

## Project layout

- **`src/pages/`** — One component per page: `HomePage` (`/`, portrait, bio, research interests), `PublicationsPage` (`/publications`), `ContactPage` (`/contact`, contact details and CV download). Old URLs (`/cv`, and section hashes such as `/#publications`) redirect to the matching page in `App.tsx`.
- **`src/data/publications.ts`** — Publication entries (title, authors, venue, link), grouped by section.
- **`src/components/`** — Layout (`SiteHeader`, `SiteFooter`, `SiteLayout`, `PrimaryNav`, `PageMain`, …) plus feature folders (`about/`, `publications/`).
- **`src/constants/links.ts`** — Shared outbound URLs, contact email, and the CV's last-updated date.
- **`src/hooks/useTheme.ts`** + **`src/components/ThemeToggle.tsx`** — Light/dark theme: follows the system until the visitor picks one with the header toggle (saved in `localStorage`; `index.html` applies it before first paint). Colours are tokens at the top of `src/index.css`.
- **`src/hooks/useScrollOnNavigate.ts`** — Scroll to the top on a page change, or to the section named in the URL hash.
- **`docs/`** — Production build output (committed so GitHub Pages can serve from **Branch → `/docs`** without Actions).

## Production build

```bash
npm run build
```

Output is written to **`docs/`** (includes `404.html` for client-side routes). Preview locally with `npm run preview`.

After changing the site, run **`npm run build`**, commit the updated **`docs/`** folder, and push.

## GitHub Pages (fix blank site)

The root `index.html` is only for **Vite dev** (it loads `/src/main.tsx`). GitHub must **not** publish repo root alone for production.

1. Open the repo on GitHub → **Settings** → **Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Set **Branch** to `main` and **Folder** to **`/docs`** (not `/ (root)`).
4. Save, wait a minute, then reload `https://heesuyun.github.io/`.

### Optional: GitHub Actions instead

If you prefer Actions-only hosting (no committed `docs/`), you can set Pages source to **GitHub Actions** and use [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml), which publishes the same `docs/` build artifact.
