# Portfolio Website — Design Spec

**Date:** 2026-10-28
**Owner:** Souhaib Ferdjallah
**Status:** Approved (awaiting implementation plan)

## 1. Goal

A single-page portfolio that, in under 10 seconds, tells a visitor who Souhaib is, what he does, and why his work is worth a closer look — and gives them one clear way to reach him or view his LinkedIn.

**Primary audience:** recruiters and hiring managers in logistics/operations and in tech (data tooling, internal apps), plus potential collaborators.

**Success criteria:**
- Loads fast (Lighthouse ≥ 90 on Performance, Accessibility, Best Practices, SEO).
- Works on mobile, tablet, desktop.
- Bilingual (French default, English toggle) with no layout breakage.
- Real project screenshots, not placeholders.
- Deployed at a public URL and linked from the LinkedIn profile.

## 2. Positioning

Souhaib is a logistics & fleet-monitoring specialist who builds the tools he needs. Prism is the proof, not a side hobby. The site should read as "operator who ships software," not "developer who lists skills."

## 3. Scope

**In scope (v1):**
- One page with 7 sections: Hero, About, Experience, Skills, Projects, Education & Languages, Contact.
- French default + English toggle, persisted in `localStorage`.
- Light default + dark toggle.
- Real screenshots of Prism, Naftal Fleet, Tafweej.
- Deploy to GitHub Pages via GitHub Actions.
- Instructions for linking the site from the LinkedIn profile.

**Out of scope (v1):**
- Blog / writing section.
- Contact form (email link + LinkedIn only).
- Custom domain (can be added later; plan for it).
- CMS or admin UI.
- Analytics beyond basic (optional later).

## 4. Content model

All copy lives in `src/content.ts`, typed:

```ts
type Content = {
  meta: { title: string; description: string };
  nav: { ... };
  hero: { name; headline; sub; ctaPrimary; ctaSecondary };
  about: { title; paragraphs: string[] };
  experience: { title; items: { role; org; location; period; bullets: string[] }[] };
  skills: { title; groups: { name; items: string[] }[] };
  projects: { title; items: { name; tag; description; tech: string[]; image; links?: { demo?; repo? } }[] };
  education: { title; items: { degree; school; period }[] };
  languages: { title; items: { name; level }[] };
  contact: { title; email; linkedin; location; cvLabel? };
};
```

Both `fr` and `en` objects conform to `Content`. A language context selects the active one.

**Content source:** CV (French) provided by the owner. Position data from the CV is authoritative; the pending LinkedIn data export may enrich details but does not gate the build.

**CV edit requested:** In the experience entry for the current role, remove the word "Amouda" — i.e. use "Opérations de transport Ciment" instead of "Opérations de transport Amouda Ciment".

## 5. Architecture & stack

- **Framework:** Next.js 15, App Router, TypeScript.
- **Styling:** Tailwind CSS v4.
- **Rendering:** Static export (`output: 'export'`) — required for GitHub Pages.
- **Images:** `next/image` with `unoptimized: true` (GitHub Pages has no image optimizer) OR plain `<img>` with optimized assets. Use `next/image` with unoptimized for convenience.
- **State:** React context for language + theme; no external state library.
- **i18n:** Hand-rolled dictionary (no heavy library) — two objects + a context. Keeps bundle small.
- **Lint/format:** ESLint (Next default) + Prettier.
- **Repo location:** `C:\Users\Souhaib\portfolio`.

## 6. Page structure

Single route `/`. Sections in order:

1. **Hero** — name, headline ("Spécialiste du suivi de flotte et de la logistique | Analyse de données & développement d'outils métier"), one-sentence value prop, two CTAs: "Voir sur LinkedIn" (external) and "Me contacter" (mailto).
2. **About** — 2 short paragraphs from the CV profile, rewritten for web.
3. **Experience** — vertical timeline, 4 entries with role, org, location, period, bullets.
4. **Skills** — 3 groups: Logistique et opérations / Données et automatisation / Développement d'applications assisté par IA.
5. **Projects** — Prism (flagship, larger card with screenshot + tech chips + "En savoir plus"), Naftal Fleet, Tafweej.
6. **Education & Languages** — 3 degrees + 3 languages with levels.
7. **Contact** — email, LinkedIn button, location, optional "Télécharger le CV (PDF)".

Header: logo/name, language toggle (FR/EN), theme toggle, anchor nav. Footer: copyright + LinkedIn icon.

## 7. Design direction

- **Aesthetic:** clean, professional, "data" feel — generous whitespace, monospace accent for numbers/metrics, card grid for projects, subtle grid background.
- **Typography:** a clean sans for body (Inter or system), monospace (JetBrains Mono or system) for metrics/tech chips.
- **Color:** light default, dark toggle. Accent: deep teal/indigo (exact hex to be set in implementation; candidate `#0f766e` teal or `#4f46e5` indigo — decide in implementation). Neutral grays for text.
- **Motion:** subtle fade-in on scroll, no heavy animations. Respect `prefers-reduced-motion`.
- **Accessibility:** semantic HTML, skip link, visible focus rings, alt text on all images, color contrast AA.

## 8. LinkedIn linkage (both directions)

**Site → profile:** "Voir sur LinkedIn" button linking to the profile URL, `target="_blank"`, `rel="noopener noreferrer"`.

**Profile → site (manual, owner action):** step-by-step checklist:
1. Open your LinkedIn profile → **Me** → **View Profile**.
2. Click **Contact info** (pencil icon).
3. Under **Website**, choose **Other** and paste the site URL; set the label (e.g. "Portfolio").
4. **Save**. The link then appears in the contact info card on your profile.

**Optional:** add the site URL to the *Featured* section and to the *About* closing line.

## 9. Screenshots

Capture real screenshots from local folders rather than stock images:
- `prism-demo` or `prism0.9` → run dev server, capture dashboard view → `public/projects/prism.png`.
- `naftal-fleet` → capture main view → `public/projects/naftal-fleet.png`.
- `Tafweej` → capture main view → `public/projects/tafweej.png`.

If a project cannot be run, fall back to a styled placeholder card with the project name and tech chips (no fake screenshots).

## 10. Build, deploy & test

**Deployment:** GitHub Pages via GitHub Actions. Workflow: checkout → setup Node → `npm ci` → `npm run lint` → `npm run typecheck` → `npm run build` → upload artifact → deploy to Pages. Trigger on push to `main`.

**basePath:** set `basePath: '/portfolio'` (or repo name) in `next.config.ts` for project pages; revisit if a custom domain is added.

**Test plan:**
- `npm run build` succeeds with no errors.
- Lint + typecheck pass.
- Responsive check at 375 / 768 / 1280 px.
- FR and EN renders fully; toggle persists across reload.
- Light/dark renders; respects `prefers-color-scheme`.
- All links resolve (no 404).
- Keyboard navigation: skip link works, focus visible, tab order logical.
- Lighthouse ≥ 90 on all four categories (mobile + desktop).

## 11. Risks & mitigations

- **GitHub Pages + Next.js image optimization:** mitigated by `unoptimized: true`.
- **basePath mistakes breaking assets:** mitigated by using `next/link` and `next/image` with relative paths; verify in the deployed build.
- **Content drift between FR/EN:** mitigated by a single typed `Content` type; CI typecheck catches missing keys.
- **Screenshots stale:** re-capture on major UI changes; not blocking v1.

## 12. Deferred / future

- Custom domain.
- Project detail pages (case studies) for Prism.
- Blog.
- Contact form.
- Analytics.

## 13. Open items

- Confirm accent color (teal vs indigo) during implementation.
- Enrich content from the LinkedIn data export when it arrives (positions, education, skills, certifications, projects) — merge into `content.ts`; may add a Certifications section if present.
- Decide final GitHub username / repo name (affects `basePath` and URL).
