# Redirect Audit - Blog Migration

Date: 2026-02-14
Branch: codex/seo-technical-hardening
Scope: `blog.purplestock.com.br/*` migration to `https://www.purplestock.com.br/blog/*`

## 1) Redirect Rules Implemented

File: `next.config.mjs`

- Apex to www:
  - `purplestock.com.br/:path*` -> `https://www.purplestock.com.br/:path*`
- Blog subdomain to /blog:
  - `blog.purplestock.com.br/blog/:path*` -> `https://www.purplestock.com.br/blog/:path*`
  - `blog.purplestock.com.br/:path*` -> `https://www.purplestock.com.br/blog/:path*`
- Legacy slug mapping (critical URLs from GSC/backlog):
  - `/blog/controle-de-estoque-por-qr-code-versus-gerenciamento-de-estoque-tradicional` -> `/blog/como-usar-qr-code-controle-estoque`
  - `/blog/aplicativo-para-controle-de-estoque-com-qr-code` -> `/blog/aplicativo-para-controle-de-estoque`
  - `/blog/open-erp-o-que-e-como-funciona` -> `/blog/open-erp-o-que-e-e-quando-usar`
  - `/blog/open-erp-o-que-e` -> `/blog/open-erp-o-que-e-e-quando-usar`
  - `/blog/sistema-de-controle-de-almoxarifado` -> `/recursos/controle-de-almoxarifado`
  - `/blog/como-implementar-um-controle-de-faccao-eficiente-estrategias-para-otimizar-a-producao-na-confeccao` -> `/features/clothing-manufacturing`

## 2) Local Validation (next start + Host header)

Environment used:
- `npm run build`
- `PORT=4010 npm run start`

Sample checks:

```bash
curl -I -H 'Host: purplestock.com.br' http://127.0.0.1:4010/precos
curl -I -H 'Host: blog.purplestock.com.br' http://127.0.0.1:4010/open-erp-o-que-e-como-funciona
curl -I -H 'Host: blog.purplestock.com.br' http://127.0.0.1:4010/blog/controle-de-estoque-por-qr-code-versus-gerenciamento-de-estoque-tradicional
curl -I -H 'Host: blog.purplestock.com.br' http://127.0.0.1:4010/blog/slug-qualquer
```

Observed:
- All tested cases returned permanent redirect (`308` in Next.js; SEO-equivalent to 301 for migration intent).
- Generic `blog.*` paths redirect directly to canonical `https://www.purplestock.com.br/blog/*`.
- Some legacy mapped slugs may perform an intermediate hop before reaching final canonical host.

## 3) Production Recommendation

To eliminate intermediate hops for legacy slugs, apply edge-level one-hop redirects (Cloudflare/ALB/Nginx) using the same mapping table.

## 4) Acceptance Criteria

- Redirect coverage for high-value legacy slugs: implemented.
- Canonical target host (`www`) enforced: implemented.
- No 404 in mapped legacy URLs: expected after deploy.

## 5) Post-Deploy Verification Set (must run)

```bash
# Canonical host
curl -I https://purplestock.com.br/precos

# Blog host generic
curl -I https://blog.purplestock.com.br/qualquer-url

# Legacy mapped slugs
curl -I https://blog.purplestock.com.br/open-erp-o-que-e-como-funciona
curl -I https://blog.purplestock.com.br/blog/controle-de-estoque-por-qr-code-versus-gerenciamento-de-estoque-tradicional
curl -I https://www.purplestock.com.br/blog/open-erp-o-que-e-como-funciona
```

Expected:
- Permanent redirect status.
- Final location on `https://www.purplestock.com.br/...`.
