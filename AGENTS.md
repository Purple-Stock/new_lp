# AGENTS.md — purple-stock/new_lp

Landing SEO-first da Purple Stock (Next.js App Router).

## Commands

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm test         # headless unit tests (tsx --test)
pnpm lint
pnpm format:check
pnpm validate-sitemap
pnpm validate-llms
```

## Layout (grep before inventing paths)

| Path | Responsibility |
|------|----------------|
| `app/` | Routes, layouts, metadata |
| `components/` | UI (one concern per file; split >500 lines) |
| `content/blog/` | MDX posts (`title`/`excerpt` = SERP) |
| `lib/site.ts` | Site URL, name, default description |
| `lib/seo-page-copy.ts` | High-impression page titles/descriptions |
| `lib/pricing.ts` | Team plan price (schema + FAQ) |
| `lib/structured-data.ts` | JSON-LD builders |
| `lib/barcode-tool-seo-content.ts` | Free barcode tool SEO copy |
| `tests/` | Mirrors lib concerns (`*.test.ts`) |

## Code style (agents)

- Functions: 4–20 lines. Files: under 500 lines; split by SRP.
- Names: unique and greppable. Avoid `data`, `handler`, `Manager`, `utils`.
- Types: explicit. No `any` on public surfaces.
- DRY: SERP titles → `lib/seo-page-copy.ts`; price → `lib/pricing.ts`.
- Early returns; max 2 control-flow indent levels.
- Errors: include received value and expected shape.
- WHY comments only; keep provenance on non-obvious constraints.

## SEO edit map

| Change | Edit |
|--------|------|
| Home title/meta | `lib/seo-page-copy.ts` + `lib/site.ts` (`SITE_DESCRIPTION`) |
| Home H1 (PT) | `utils/translations.ts` + `components/desktop-landing.tsx` |
| Barcode tool SERP | `lib/seo-page-copy.ts` + layout `app/codigo-de-barras-gratis/` |
| Barcode tool body copy | `lib/barcode-tool-seo-content.ts` |
| Public price | `lib/pricing.ts` only |
| Blog SERP | MDX frontmatter `title` / `excerpt` |
| Industry SERP/H1 | `app/industrias/[slug]/page.tsx` + optional `seoHeadline` in `lib/industries-data.ts` |
| Glossary MOQ SERP | `data/glossary.ts` + special-case in `app/glossario/[slug]/page.tsx` |
| Sitemap index | `app/sitemap.xml/route.ts` (blog child only once; legacy alias keeps route) |

Do **not** emit FAQPage JSON-LD for marketing pages (Google limits FAQ rich results). Keep FAQ visible in HTML.

## Tests

- One command: `pnpm test`.
- New pure helpers get a test in `tests/`.
- Bug fixes get a regression test.
- F.I.R.S.T.; no interactive secrets.

## Structure rules

- Next.js App Router conventions.
- Prefer small modules over growing `app/**/page.tsx` god files.
- Generator UI stays in `app/codigo-de-barras-gratis/page.tsx`; SEO chrome outside it.

## Formatting

- Prettier via `pnpm format` / `pnpm format:check`. Do not bikeshed style.

## Logging

- Structured fields for analytics (`lib/analytics.ts`). No noisy console in product paths.
