# AGENTS.md — purple-stock/new_lp

Landing SEO-first da Purple Stock (Next.js App Router).

## Commands

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm test         # headless unit tests (tsx --test) — one command
pnpm lint
pnpm format:check
pnpm format
pnpm validate-sitemap
pnpm validate-llms
```

Pre-commit runs: `format:check` → `audit:deps` → `test` → `lint`.

## Layout (grep before inventing paths)

| Path | Responsibility |
|------|----------------|
| `app/` | Routes, layouts, metadata |
| `components/` | UI (one concern per file; split >500 lines) |
| `content/blog/` | MDX posts (`title`/`excerpt` = SERP) |
| `lib/site.ts` | Site URL, name, default description |
| `lib/seo-page-copy.ts` | High-impression page titles/descriptions + home H1 |
| `lib/glossary-term-seo.ts` | Glossary term SERP title/description |
| `lib/industry-page-seo.ts` | Per-industry SERP overrides |
| `lib/pricing.ts` | Team plan price (schema + FAQ) |
| `lib/structured-data.ts` | JSON-LD builders |
| `lib/barcode-tool-seo-content.ts` | Free barcode tool SEO copy |
| `tests/` | Mirrors lib concerns (`*.test.ts`) |

## Code style (agents)

- Functions: 4–20 lines. Files: under 500 lines; split by SRP.
- Names: unique and greppable. Avoid `data`, `handler`, `Manager`, `utils`.
- Types: explicit. No `any` on public surfaces.
- DRY: SERP titles → `lib/seo-page-copy.ts` / `lib/*-seo.ts`; price → `lib/pricing.ts`; home H1 PT → `HOME_PAGE_H1_PT` only.
- Early returns; max 2 control-flow indent levels.
- Errors: include received value and expected shape.
- WHY comments only; keep provenance on non-obvious constraints.
- Do not strip intent comments on refactor.

## SEO edit map

| Change | Edit |
|--------|------|
| Home title/meta | `lib/seo-page-copy.ts` + `lib/site.ts` (`SITE_DESCRIPTION`) |
| Home H1 (PT) | `HOME_PAGE_H1_PT` in `lib/seo-page-copy.ts` only |
| Barcode tool SERP | `lib/seo-page-copy.ts` + layout `app/codigo-de-barras-gratis/` |
| Barcode tool body copy | `lib/barcode-tool-seo-content.ts` |
| Public price | `lib/pricing.ts` only |
| Blog SERP | MDX frontmatter `title` / `excerpt` |
| Industry SERP | `lib/industry-page-seo.ts` |
| Industry page H1 | optional `seoHeadline` in `lib/industries-data.ts` |
| Glossary term SERP | `lib/glossary-term-seo.ts` (+ content in `data/glossary.ts`) |
| Sitemap index | `app/sitemap.xml/route.ts` (blog child only once; legacy alias keeps route) |

Do **not** emit FAQPage JSON-LD for marketing pages (Google limits FAQ rich results). Keep FAQ visible in HTML.

## God files — do not grow (split before adding)

| File | Status | Next split |
|------|--------|------------|
| `utils/translations/*` | **Split** (core + feature-pages + barcode) | keep feature pages per file |
| `components/desktop-landing*.tsx` | **Split** (orchestrator + chrome/hero/social/playbook) | keep sections thin |
| `lib/desktop-landing-playbook.ts` | ~310 | ok under 500; avoid more locales bulk |
| `data/glossary.ts` | ~1400 | by category or term batches |
| `components/industry-detail-view.tsx` | ~480 | section components |
| `app/glossario/[slug]/page.tsx` | ~440 | keep SERP in `lib/glossary-term-seo.ts` |

Import i18n from `@/utils/translations` (barrel). Edit copy under `utils/translations/`.

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
