# Portfolio Website — Implementation Plan

**Goal:** Build and deploy the single-page portfolio per the approved design spec.
**Spec:** `docs/superpowers/specs/2026-10-28-portfolio-website-design.md`
**Stack:** Next.js 15 (App Router) + TypeScript + Tailwind v4, static export, GitHub Pages.
**Repo:** `C:\Users\Souhaib\portfolio`

## File structure (target)

```
portfolio/
├── .github/workflows/deploy.yml
├── public/
│   ├── projects/{prism,naftal-fleet,tafweej}.png
│   └── cv.pdf (optional)
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx
│   │   └── ui/{Button,Card,Section,ThemeToggle,LangToggle}.tsx
│   ├── context/{LangContext,ThemeContext}.tsx
│   ├── content.ts
│   └── types.ts
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## Phase 0 — Scaffold

### Task 0.1: Initialize Next.js project
**Files:** project root
**Steps:**
1. `npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm` (answer no to Turbopack prompt defaults).
2. Verify `npm run dev` starts and `/` renders.
**Verify:** `npm run build` exits 0.

### Task 0.2: Configure static export
**Files:** `next.config.ts`
**Steps:** set
```ts
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/portfolio',
  trailingSlash: true,
};
export default nextConfig;
```
**Verify:** `npm run build` produces `out/` directory.

### Task 0.3: Add scripts
**Files:** `package.json`
**Steps:** add `"typecheck": "tsc --noEmit"` and `"lint": "next lint"` (already present). Add prettier + config.
**Verify:** `npm run typecheck` exits 0.

---

## Phase 1 — Content & types

### Task 1.1: Define types
**Files:** `src/types.ts`
**Steps:** define `Content` type per spec §4.
**Verify:** compiles.

### Task 1.2: Write content (FR + EN)
**Files:** `src/content.ts`
**Steps:** populate from CV. Apply the CV edit: "Opérations de transport Ciment" (remove "Amouda"). Structure per `Content`.
**Verify:** `tsc --noEmit` passes; both `fr` and `en` satisfy `Content`.

### Task 1.3: Context providers
**Files:** `src/context/LangContext.tsx`, `src/context/ThemeContext.tsx`
**Steps:** LangContext holds `lang`, `setLang`, reads/writes `localStorage('lang')`, default `fr`. ThemeContext holds `theme`, toggles `dark` class on `<html>`, persists `localStorage('theme')`, respects `prefers-color-scheme` on first load.
**Verify:** unit-ish manual check in dev.

---

## Phase 2 — Layout shell

### Task 2.1: Global styles
**Files:** `src/app/globals.css`
**Steps:** Tailwind directives; define CSS variables for accent; base typography; skip-link styles; reduced-motion guard.

### Task 2.2: Root layout
**Files:** `src/app/layout.tsx`
**Steps:** wrap children in providers; set metadata (title/description/OG); lang attribute reflects active lang; theme script to avoid FOUC.

### Task 2.3: Header
**Files:** `src/components/Header.tsx`
**Steps:** name/logo, anchor nav (About, Experience, Skills, Projects, Contact), LangToggle, ThemeToggle. Sticky, blur backdrop.

### Task 2.4: Footer
**Files:** `src/components/Footer.tsx`
**Steps:** copyright + LinkedIn icon link.

---

## Phase 3 — Sections

### Task 3.1: Hero
**Files:** `src/components/Hero.tsx`
**Steps:** name, headline, value prop, two CTAs ("Voir sur LinkedIn" external, "Me contacter" mailto).

### Task 3.2: About
**Files:** `src/components/About.tsx`
**Steps:** title + paragraphs from content.

### Task 3.3: Experience
**Files:** `src/components/Experience.tsx`
**Steps:** vertical timeline; each item: role, org, location, period, bullets.

### Task 3.4: Skills
**Files:** `src/components/Skills.tsx`
**Steps:** 3 groups as cards with chip lists.

### Task 3.5: Projects
**Files:** `src/components/Projects.tsx`
**Steps:** Prism flagship (larger, screenshot, tech chips, description), then Naftal Fleet + Tafweej. Image via `next/image` unoptimized.

### Task 3.6: Education & Languages
**Files:** `src/components/Education.tsx`
**Steps:** degrees list + languages with levels.

### Task 3.7: Contact
**Files:** `src/components/Contact.tsx`
**Steps:** email, LinkedIn button, location, optional CV download link.

### Task 3.8: Wire page
**Files:** `src/app/page.tsx`
**Steps:** render all sections in order with section ids.

---

## Phase 4 — UI primitives

### Task 4.1: Button, Card, Section
**Files:** `src/components/ui/{Button,Card,Section}.tsx`
**Steps:** reusable, accessible, variant support.

### Task 4.2: Toggles
**Files:** `src/components/ui/{ThemeToggle,LangToggle}.tsx`

---

## Phase 5 — Screenshots

### Task 5.1: Capture Prism screenshot
**Steps:** run `prism-demo` (or `prism0.9`) dev server, capture dashboard view → `public/projects/prism.png` (1200×800). Stop server.

### Task 5.2: Capture Naftal Fleet + Tafweej
**Steps:** run each dev server, capture main view → png. Fall back to placeholder card if a project can't run.

---

## Phase 6 — Quality

### Task 6.1: Accessibility pass
**Steps:** skip link, focus rings, alt text, heading order, color contrast check.

### Task 6.2: Responsive check
**Steps:** verify 375/768/1280; fix overflow.

### Task 6.3: Lighthouse
**Steps:** run Lighthouse on built `out/`; target ≥ 90 all four. Fix issues.

### Task 6.4: Link check
**Steps:** verify mailto, LinkedIn, CV link resolve.

---

## Phase 7 — Deploy

### Task 7.1: GitHub Actions workflow
**Files:** `.github/workflows/deploy.yml`
**Steps:**
```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: pages
  cancel-in-progress: true
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run lint
      - run: npm run typecheck
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: out }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/deploy-pages@v4
        id: deployment
```

### Task 7.2: Create GitHub repo & push
**Steps:** create repo `portfolio` (public), set remote, push `main`. Enable Pages (source: GitHub Actions).

### Task 7.3: Verify live URL
**Steps:** open `https://<user>.github.io/portfolio/`, smoke test.

---

## Phase 8 — LinkedIn linkage (owner action)

### Task 8.1: Add site URL to LinkedIn
**Steps:** follow checklist in spec §8 (Contact info → Website → Other → paste URL → Save). Optional: add to Featured and About.

### Task 8.2: Add "Download CV" (optional)
**Steps:** place PDF at `public/cv.pdf`, link from Contact + Hero.

---

## Done definition

- `npm run build` green; Lighthouse ≥ 90; deployed URL live; LinkedIn contact info updated; spec + plan committed.
