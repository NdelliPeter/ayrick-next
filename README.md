# Ayrick Architecture Global

Build a corporate website for Ayrick Architecture, an international architecture firm. The tone must be mature, authoritative, and design-led — think heavy industry credibility, not a startup or agency. Draw visual and structural inspiration from usa.skanska.com, kiewit.com, turnerconstruction.com, and bechtel.com: confident full-bleed photography, strong editorial grid systems, generous whitespace, restrained corporate color palette (deep navy, steel grey, concrete/off-white, a single accent color), and disciplined typography with a clear hierarchy (large serif or grotesk headlines, clean sans body text).

STRICT DESIGN RULES

- Border radius: use none, or as close to none as possible, across the entire site — buttons, images, containers, form fields, nav elements. Sharp, squared-off corners everywhere. This is non-negotiable and should read as a deliberate brand choice, not an oversight.

- Cards: minimize card-style components almost entirely. Prefer flat, edge-to-edge layouts, horizontal rules/dividers, split-screen sections, and typographic lists instead of boxed cards with shadows or backgrounds. Where a "card-like" grouping is unavoidable (e.g. a services grid), use a thin 1px border or a simple divider line instead of an elevated/rounded card.

- No decorative gradients, no glassmorphism, no playful iconography. Precision and scale over cuteness.

SITE STRUCTURE (matches content plan)

1. Homepage — full-bleed hero with a large project image, headline + one-line positioning statement, a stats/track-record strip (years in operation, projects delivered, countries, etc.), a featured-projects section pulling 3–4 highlighted projects, a services overview strip, and a closing CTA to Contact.

2. Studio / About — company story, mission, leadership/team section, values, and international presence (offices/markets served).

3. Portfolio — the main project archive. Grid or list view (not cards) filterable by category (Residential / Commercial / Hospitality / Public / Mixed-Use). Each project entry links to a full project detail page.

4. Services — breakdown of service lines, each with a short description.

5. Journal / Blog — news/insights listing page + individual article template.

6. Contact — office locations, contact form, map placeholder.

7. Global Assets — treat this as the source for logo, brand colors, and typography; leave a clearly marked placeholder logo (Ayrick Architecture wordmark, no icon) and a placeholder color/typography config that's easy to swap.

PROJECT DATA MODEL (use this exact structure for every project, in Portfolio and anywhere else projects appear)

- Project Name

- Category (Residential / Commercial / Hospitality / Public / Mixed-Use)

- Location (City, Country)

- Year (or "In Progress")

- Client Type (Private / Corporate / Government / NGO)

- Scope of Work

- Size / Area

- Key Materials

- Project Description (short paragraph)

- Design Highlights (2–3 bullet points)

- Hero Image (one large landscape image)

- Gallery Images (5–10 supporting images)

IMAGE PROVISION — IMPORTANT

Real project photography has not been delivered yet and will be added after the design is built. Everywhere a project image would appear — homepage featured projects, the Portfolio grid, individual project detail pages (hero + gallery), and any other project preview module — build a clearly labeled placeholder image block (neutral grey/concrete-toned rectangle with a subtle "Image Placeholder" or project name label) sized and positioned exactly where the final photo will go, so images can be dropped in later without any layout rework. Do the same for the logo in the header/footer and any team headshots on the Studio page.

LANGUAGE

Every project has both an English and French description in the source content. Build the site with an EN/FR language toggle in the header, and make all project/page copy structured so it can hold both language versions cleanly (default to English content, with French as a switchable variant).

Populate all placeholder text (headlines, service descriptions, about copy, 8–12 sample portfolio entries using the data model above) with realistic architecture-industry placeholder content so the layout can be reviewed before real content is dropped in.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://ayrick-architects-forge.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/adfb8822-2e1b-4327-94bd-181a3537cd72).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
