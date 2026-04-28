# P0 Execution Report - 01/03/2026

## Escopo executado

- URLs foco: `/precos`, `/industrias`, `/blog/como-usar-qr-code-controle-estoque`, `/blog/aplicativo-para-controle-de-estoque`, `/recursos/controle-de-almoxarifado`
- Hardening técnico: metadata + redirects + validações
- Analytics: taxonomia PRD implementada no front com compatibilidade legada

## Antes vs Depois (metadata foco)

| URL                                  | Antes (title resumido)                           | Depois (title resumido)                                       |
| ------------------------------------ | ------------------------------------------------ | ------------------------------------------------------------- |
| `/precos`                            | Preços Purple Stock: R$ 29,90 por time           | Preço de Sistema de Estoque para PME: R$ 29,90 por Time       |
| `/industrias`                        | Controle de Estoque por Setor                    | Sistema de Controle de Estoque por Setor para PMEs            |
| `/recursos/controle-de-almoxarifado` | Controle de Almoxarifado: Guia Prático para PMEs | Controle de Almoxarifado para PME: Guia Prático com Checklist |

## Eventos implementados

| Evento             | Status          | Local principal                         |
| ------------------ | --------------- | --------------------------------------- |
| `seo_landing_view` | Implementado    | `route-view-tracker` + home landing     |
| `seo_cta_click`    | Implementado    | navbar, botões flutuantes, páginas foco |
| `signup_started`   | Contrato criado | wrapper em `lib/analytics.ts`           |
| `trial_activated`  | Contrato criado | wrapper em `lib/analytics.ts`           |
| `checkout_started` | Contrato criado | wrapper em `lib/analytics.ts`           |
| `paid_conversion`  | Contrato criado | wrapper em `lib/analytics.ts`           |

## Interlinking aplicado (P0)

- `/precos` -> `/industrias`, `/recursos/controle-de-almoxarifado`, app
- `/industrias` -> `/precos`, `/recursos/controle-de-almoxarifado`, app
- `/recursos/controle-de-almoxarifado` -> `/industrias`, `/precos`, app/whatsapp
- Posts alvo -> `/industrias` e `/precos`

## Redirect hardening

- Ajuste de destino absoluto para mapa legado em [next.config.mjs](/Users/matheuspuppe/Desktop/Projetos/PurpleStock/purple_stock_stack/new_lp/next.config.mjs)
- Objetivo: reduzir hops e forçar destino canônico em `https://www.purplestock.com.br/...`

## Evidências operacionais

- Build local: `npm run build` executado com sucesso em 01/03/2026.
- Validação de sitemap: `SITEMAP_URL=http://127.0.0.1:4010/sitemap.xml npm run validate-sitemap` com `61 URLs`, sem duplicatas.
- Testes de redirects com host header (amostra):
  - `blog.purplestock.com.br/open-erp-o-que-e-como-funciona` -> `308` para `https://www.purplestock.com.br/blog/open-erp-o-que-e-e-quando-usar`
  - `blog.purplestock.com.br/blog/aplicativo-para-controle-de-estoque-com-qr-code` -> `308` para `https://www.purplestock.com.br/blog/aplicativo-para-controle-de-estoque`
  - `blog.purplestock.com.br/blog/controle-de-estoque-por-qr-code-versus-gerenciamento-de-estoque-tradicional` -> `308` para `https://www.purplestock.com.br/blog/como-usar-qr-code-controle-estoque`
  - `purplestock.com.br/precos` -> `308` para `https://www.purplestock.com.br/precos`

## Validação (comandos)

```bash
cd /Users/matheuspuppe/Desktop/Projetos/PurpleStock/purple_stock_stack/new_lp
npm run build
npm run validate-sitemap

# após npm run start em porta local
curl -I -H 'Host: blog.purplestock.com.br' http://127.0.0.1:4010/open-erp-o-que-e-como-funciona
curl -I -H 'Host: blog.purplestock.com.br' http://127.0.0.1:4010/blog/aplicativo-para-controle-de-estoque-com-qr-code
curl -I -H 'Host: purplestock.com.br' http://127.0.0.1:4010/precos
```

## Próximo passo pós deploy

- T+1: validar indexação e eventos no dashboard
- T+7: comparar CTR das 5 URLs foco vs baseline
