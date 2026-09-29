# Service Detail Pages (/services/$slug)

## Recommendation
Add one detail page per service line (5 pages). Current service copy is one paragraph — too thin for a standalone page — so each page gets:
1. **Expanded description** (2–3 short paragraphs, EN + FR) — drafted in the same mature, practical voice as the Studio page.
2. **Deliverables** — existing lists, restyled as a numbered editorial list with hairline rules.
3. **Where it fits in the process** — a short cross-reference to the 5-stage process (already on the site).
4. **Related projects** — 2–4 portfolio entries shown as the existing rule-divided `ProjectRow` list (no cards), linking to project detail pages. This is what keeps the page from feeling empty and ties services to proof of work.
5. Closing CTA to Contact.

## Changes

### 1. Content — `src/content/site.ts`
- Add `slug` (e.g. `concept-design`, `layout-plans`, `visualization`, `supervision`, `contract-management`) and `long: L<string[]>` (multi-paragraph body) to each of the 5 services. Write realistic EN + FR copy now; easy to replace later.

### 2. Project ↔ service link — `src/content/projects.ts`
- Add optional `services?: string[]` field to the `Project` type.
- Tag the 12 placeholder projects with the relevant service slugs (e.g. all get `concept-design`/`layout-plans`; visualization-heavy residential get `visualization`; the build-stage projects get `supervision`/`contract-management`).
- Each service page filters projects by tag; if fewer than 2 match, the section simply shows what exists (no empty-state UI needed).

### 3. New route — `src/routes/services.$slug.tsx`
- Layout: PageHero (service number + title + one-line body) → long description (two-column editorial) → deliverables list → related projects rows → CTA section (reuse the existing dark CTA pattern).
- `head()` with unique title/description/og per service; `notFound()` for unknown slugs.

### 4. Update existing pages
- `src/routes/services.tsx`: each service title and its "learn more" affordance link to its detail page; page keeps its current structure.
- `src/routes/index.tsx`: homepage service strip entries link to the detail pages.

### 5. Verify
- Build check via observability log.
- Playwright pass: open one service detail page, confirm description, deliverables, related-project links resolve to real portfolio slugs.

## Notes
- No backend or auth work — content-only, frontend routes.
- Real project data can replace placeholders later without layout changes.
