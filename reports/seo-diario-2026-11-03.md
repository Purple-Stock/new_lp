# Diário SEO — 2026-11-03

Fonte: GSC export `purplestock.com.br-Performance-on-Search-2026-11-03 (1).zip` (propriedade inteira, Web, últimos 28 dias: 05/10–01/11/2026) + código em `Purple-Stock/new_lp` `origin/main` @ `4ed7830`.

**Leia os diários de 09/09 e 01/10 antes.** Recorte travado continua: QR + check-in + almoxarifado; sem NFC-e / PDV / WMS; sem FAQPage/HowTo. Home de marca não se mexe. Título do gerador não se mexe.

**Pedido deste ciclo:** o ZIP vs as estratégias da LP pra atrair cliente. O gerador cresceu. As money pages de produto quase não converteram clique. Este ship puxa o ímã do gerador para o produto e reescreve snippet das URLs que já rankeiam com CTR ~0.

---

## 1. O que o GSC mediu (05/10–01/11/2026)

| Métrica    | Valor            |
| ---------- | ---------------- |
| Cliques    | 111              |
| Impressões | 4.498            |
| Janela     | 05/10–01/11/2026 |

Comparado ao diário de 01/10 (01/09–28/09: 94 / 3.730):

| Página / cluster                               | Set 28d        | Out 28d        | Leitura                                    |
| ---------------------------------------------- | -------------- | -------------- | ------------------------------------------ |
| `/codigo-de-barras-gratis`                     | 36 / 1.402     | 57 / 2.625     | Ímã funcionou. Título não se mexe.         |
| `/` marca                                      | 28 / 128       | 22 / ~100      | CTR ~22%. Não mexer.                       |
| `/recursos/aplicativo-de-estoque` (ship 01/10) | —              | 3 / 16 pos 5,7 | Money page existe; volume ainda minúsculo. |
| `/precos`                                      | 0 / 18 pos 3,6 | 0 / 25 pos 11  | Snippet genérico; posição piorou.          |
| `/glossario`                                   | —              | 1 / 156        | Hub rankeia e não clica.                   |
| `/glossario/almoxarifado-de-obra`              | 0 / 151        | 0 / 72 pos 5,8 | Título sem QR.                             |
| `/blog/organizar-almoxarifado-qr-code`         | 7 / 121        | 0 / 74         | Excerpt sem trial/preço.                   |
| Query `codigo de barras`                       | —              | 2 / 433        | Fat-head Wikipedia. Fora deste ciclo.      |
| `/industrias/construction` e audiovisual       | volume         | colapso        | Ranking, não snippet. Fora deste ciclo.    |
| P0 19/10 (CTA trial → `/signup`) 14d vs 14d    | —              | 55 vs 56       | Não moveu clique orgânico de produto.      |

Signups recentes (Imperial / DGR) vieram outbound. Orgânico do gerador continua dump: o footer do gerador apontava o “App de controle de estoque” para o **blog**, não para `/recursos/aplicativo-de-estoque`. O modal pós-download só oferecia signup.

---

## 2. O que este ship entrega

Branch `feat/gsc-ctr-nov` no worktree `purple-stock-lp/feat-gsc-ctr`. Testes: `tests/gsc-product-serp.test.ts`, `tests/barcode-download-bridge.test.ts`, `tests/barcode-tool-seo-content.test.ts`, `tests/seo-page-copy.test.ts`. Suite `pnpm test`: 194 pass.

| Mudança                                                                      | Por quê                                          | Onde                                                                        |
| ---------------------------------------------------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------------- |
| Footer do gerador: app → `/recursos/aplicativo-de-estoque`; link vs-planilha | 57 cliques/mês no ímã iam para o blog            | `components/barcode-tool-seo-footer.tsx`, `lib/barcode-tool-seo-content.ts` |
| Modal pós-PNG: botão “Ver o app de estoque” além do trial                    | Quem baixa etiqueta e não quer criar conta agora | `lib/barcode-download-bridge.ts`, `components/barcode-download-bridge.tsx`  |
| Glossário canteiro: título com QR                                            | 72 imp, pos 5,8, 0 clique                        | `lib/glossary-term-seo.ts`                                                  |
| Hub `/glossario` SERP no `seo-page-copy.ts` (PME + QR)                       | 156 imp, 1 clique                                | `lib/seo-page-copy.ts`, `app/glossario/layout.tsx`                          |
| Excerpt organizar almoxarifado: celular + 7 dias + R$ 99                     | 74 imp, 0 clique                                 | `content/blog/organizar-almoxarifado-qr-code.mdx`                           |
| Description `/precos`: QR, almoxarifado, check-in                            | 25 imp, 0 clique, pos 11                         | `lib/seo-page-copy.ts`                                                      |

Títulos SERP (antes do sufixo `| Purple Stock`):

| Superfície         | Title                                            | Chars      |
| ------------------ | ------------------------------------------------ | ---------- |
| Glossário canteiro | Almoxarifado de Obra: saldo no canteiro com QR   | 47         |
| Hub glossário      | Glossário de Estoque para PME: almoxarifado e QR | 48         |
| Gerador            | Gerador de código de barras grátis \| EAN e QR   | (intocado) |

Preço na copy: `R$ 99,00` por equipe, 7 dias, fonte `lib/pricing.ts`. Sem NFC-e, PDV, WMS.

---

## 3. Decisões deste ciclo (não reabrir sem GSC novo)

1. **Não mexer no title do gerador.** 57 cliques. CTR do ímã é o que funciona.
2. **Não mexer na home.** Marca, CTR ~22%.
3. **Não brigar com Wikipedia em `codigo de barras`.** 433 imp, 2 cliques.
4. **Não recuperar volume de construção/AV neste PR.** É ranking, não snippet.
5. **Não criar página nova.** O recorte é copy/CTA no que já rankeia + ponte gerador → money page.
6. **Footer do gerador deixa de apontar o blog de aplicativo.** Destino canônico de “app de estoque” é `/recursos/aplicativo-de-estoque`.

---

## 4. O que medir depois do deploy (7–14 dias)

GSC **sem filtro de página**, comparar com 05/10–01/11:

- Cliques em `/recursos/aplicativo-de-estoque` e `/purple-stock-vs-planilha` (hoje 3 e ~0).
- CTR de `/glossario/almoxarifado-de-obra` (hoje 0%), `/glossario` (hoje ~0,6%), `/blog/organizar-almoxarifado-qr-code` (hoje 0%), `/precos` (hoje 0%).
- Eventos `barcode_download_modal_product` e cliques no footer `inventoryApp` / vs-planilha.
- Gerador continua ≥50 cliques; se cair, o title não foi este PR.

### Ainda fora

1. Print PT do fluxo real por vertical.
2. 1 case com número (`/clientes/...`).
3. Recuperar cluster construção/AV (conteúdo + links, não snippet).
