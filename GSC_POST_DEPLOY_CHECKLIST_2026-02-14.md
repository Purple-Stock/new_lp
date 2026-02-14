# GSC Post-Deploy Checklist - Blog Migration

Date: 2026-02-14
Goal: Validate SEO stability after `blog.` -> `/blog` consolidation.

## T+0 (same deploy day)

- [ ] Confirm `NEXT_PUBLIC_BASE_URL=https://www.purplestock.com.br` in production.
- [ ] Open `https://www.purplestock.com.br/robots.txt`.
- [ ] Open `https://www.purplestock.com.br/sitemap.xml`.
- [ ] Confirm sitemap URLs are on `https://www.purplestock.com.br`.
- [ ] Smoke-test 10 old blog URLs and confirm permanent redirects.

## T+1 day

- [ ] Submit/refresh sitemap in Google Search Console.
- [ ] Use URL Inspection for:
  - [ ] `https://www.purplestock.com.br/blog/open-erp-o-que-e-e-quando-usar`
  - [ ] `https://www.purplestock.com.br/blog/como-usar-qr-code-controle-estoque`
  - [ ] `https://www.purplestock.com.br/blog/aplicativo-para-controle-de-estoque`
- [ ] Check Coverage for spike in `404`, `soft 404`, `Redirect error`.

## T+3 to T+7 days

- [ ] Compare clicks/impressions for migrated URLs vs previous 7-day baseline.
- [ ] Track queries:
  - [ ] `open erp`
  - [ ] `controle de estoque`
  - [ ] `aplicativo para controle de estoque`
- [ ] Validate canonicals on top migrated pages.
- [ ] Confirm internal links from `/`, `/precos`, `/industrias` point to `/blog/*` (not `blog.*`).

## T+14 days

- [ ] Review CTR trend for 4 focus URLs.
- [ ] Check if any old `blog.*` URLs remain indexed; request recrawl/removal as needed.
- [ ] Check performance by device and country for regressions.

## KPI Gates (fail if below)

- [ ] Redirect accuracy >= 95% for sampled old URLs.
- [ ] No critical crawl errors in GSC Coverage.
- [ ] CTR of focus URLs not below pre-migration baseline for 2 consecutive weekly reads.
- [ ] Non-brand clicks flat or up vs pre-migration baseline (after week 2).

## Incident Playbook (if regression)

- [ ] If 404 spike: patch missing redirect map same day.
- [ ] If CTR drops >20%: review title/meta/H1 and re-request indexing.
- [ ] If impressions collapse >30%: inspect canonical/robots/sitemap immediately.
- [ ] If only one cluster drops: isolate by URL and rollback specific change.

## Weekly Ritual (every Friday)

- [ ] Export GSC pages + queries for last 7 days.
- [ ] Update board with: `continue`, `adjust`, or `stop` decision per experiment.
- [ ] Add next sprint actions with owner and deadline.
