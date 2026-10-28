# Portfolio — Souhaib Ferdjallah

Single-page portfolio for Souhaib Ferdjallah: fleet & logistics monitoring specialist, data analysis and custom business tooling.

Built with Next.js (App Router), TypeScript and Tailwind CSS. Exported as a static site and deployed to GitHub Pages.

## Stack

- **Next.js 16** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4**
- **GitHub Pages** + GitHub Actions

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export to ./out
npm run typecheck
npm run lint
```

In development the site is served from `/`. Production builds use the base path `/portfolio` (see `next.config.ts`), which matches the GitHub Pages project URL.

## Content

All copy lives in `src/content.ts` as two typed objects, `fr` and `en`. Edit those to change text, roles, projects, skills or links. The `Content` type is in `src/types.ts`.

Screenshots live in `public/projects/`. Replace the SVG placeholders with real captures (1200×750 or similar) and update the file names in `src/content.ts` if needed.

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which lints, typechecks, builds and publishes `out/` to GitHub Pages.

One-time setup on GitHub:

1. Create a public repository named `portfolio`.
2. Push this repository to it.
3. Repository **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Push to `main` (or run the workflow manually).

The site is then available at `https://<username>.github.io/portfolio/`.

If the repository is named differently, update `basePath` in `next.config.ts` and `metadataBase` in `src/app/layout.tsx`.

## Linking from LinkedIn

1. Open your LinkedIn profile → **Me** → **View Profile**.
2. Click **Contact info** (pencil icon).
3. Under **Website**, choose **Other**, paste the site URL and set the label to "Portfolio".
4. **Save**.

Optional: add the same URL to the **Featured** section and the closing line of your **About**.
