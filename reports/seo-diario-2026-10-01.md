# Diário SEO — 2026-10-01

Fonte: GSC export `purplestock.com.br-Performance-on-Search-2026-10-01.zip` (propriedade inteira, Web, últimos 28 dias) + código em `Purple-Stock/new_lp`.

**Leia o diário de 09/09 antes.** Aquele ZIP era só do gerador. Este ZIP é a property. As decisões travadas de 09/09 continuam: recorte QR + check-in + almoxarifado; sem NFC-e / PDV / WMS; sem FAQPage/HowTo.

**Pedido deste ciclo:** olhar o SEO do produto e atrair cliente para o sistema. **Ignorar código de barras.**

---

## 1. O que o GSC mediu (01/09–28/09/2026)

Filtros do export:

| Filtro | Valor               |
| ------ | ------------------- |
| Tipo   | Web                 |
| Janela | Últimos 28 dias     |
| Página | (nenhum — property) |

Totais do gráfico:

| Métrica    | Valor            |
| ---------- | ---------------- |
| Cliques    | 94               |
| Impressões | 3.730            |
| Janela     | 01/09–28/09/2026 |

Dispositivos (property inteira, inclui gerador):

| Device     | Cliques | Imp.  | CTR   | Pos.  |
| ---------- | ------- | ----- | ----- | ----- |
| Computador | 65      | 2.447 | 2,66% | 11,14 |
| Celular    | 29      | 1.268 | 2,29% | 8,34  |
| Tablet     | 0       | 15    | 0%    | 10,07 |

Brasil: 89 cliques / 3.361 imp. O gerador continua o ímã (`/codigo-de-barras-gratis`: 36 cliques / 1.402 imp). **Os números abaixo excluem essa página e as queries de gerador.**

---

## 2. Páginas de produto que já rankeiam (sem código de barras)

| Página                                                   | Cliques | Imp. | CTR    | Pos.  |
| -------------------------------------------------------- | ------- | ---- | ------ | ----- |
| `/blog/almoxarifado-de-obra-controle-materiais-canteiro` | 5       | 338  | 1,48%  | 6,95  |
| `/industrias/audiovisual`                                | 1       | 187  | 0,53%  | 16,25 |
| `/blog/como-usar-qr-code-controle-estoque`               | 2       | 159  | 1,26%  | 8,19  |
| `/glossario/almoxarifado-de-obra`                        | 0       | 151  | 0%     | 8,31  |
| `/blog/aplicativo-para-controle-de-estoque`              | 0       | 145  | 0%     | 7,85  |
| `/` (marca)                                              | 28      | 128  | 21,88% | 3,52  |
| `/blog/organizar-almoxarifado-qr-code`                   | 7       | 121  | 5,79%  | 5,27  |
| `/blog/planilha-de-estoque-vs-app`                       | 0       | 23   | 0%     | 12,13 |
| `/features/inventory-app`                                | 2       | 23   | 8,70%  | 7,00  |
| `/precos`                                                | 0       | 18   | 0%     | 3,56  |
| `/industrias/construction`                               | 0       | 8    | 0%     | 6,38  |
| `/recursos/controle-de-almoxarifado`                     | 0       | 6    | 0%     | 13,00 |

Leitura:

1. **Home converte marca.** 28/128, CTR 21,88%. Não é o problema.
2. **Canteiro já rankeia e quase não clica.** Blog de almoxarifado de obra: 338 imp, pos ~7, CTR 1,48%. Glossário irmão: 151 imp, 0 clique. Vertical `/industrias/construction` só 8 imp — o Google escolheu o blog, não a vertical.
3. **Audiovisual tem volume na vertical, não no blog.** 187 imp, pos 16, CTR 0,53%. Queries de cinema (abaixo) batem nessa URL.
4. **Blog de aplicativo já está na página 1 com CTR 0.** 145 imp, pos 7,85. A URL em inglês `/features/inventory-app` tem só 23 imp, mas **CTR 8,7%** — a única money page de app que já converte clique.
5. **Preço rankeia e não é clicado.** 18 imp, pos 3,56, 0 clique. Volume baixo; snippet precisa do recorte, não de “sistema de estoque”.
6. **Planilha vs app existe como blog (pos 12) e ainda não como money page.**

---

## 3. Queries de produto (gerador fora)

Agrupadas. Cliques de produto no export de consultas ≈ 21, quase todos marca (`purple stock` 19/22, `purplestock` 2/18).

| Cluster   | Query exemplo                                                        | Imp.    | Pos.      | Clique |
| --------- | -------------------------------------------------------------------- | ------- | --------- | ------ |
| Canteiro  | almoxarifado de obra                                                 | 56      | 7,64      | 0      |
| Canteiro  | almoxarifado de obras / almoxarifado obra / canteiro                 | 13+12+6 | ~8–10     | 0      |
| Cinema AV | equipamentos audiovisuais para empresas de cinema                    | 27      | 5,74      | 0      |
| Cinema AV | …empresa de cinema / operação de equipamentos audiovisuais           | 26+26   | 6,81 / 13 | 0      |
| App       | aplicativo para controle de estoque / aplicativo controle de estoque | 1+1     | 17–20     | 0      |
| Planilha  | substituição de planilhas por sistemas de gestão                     | 1       | 77        | 0      |
| Marca     | purple stock                                                         | 22      | 1,09      | 19     |

O cluster de app no GSC de **consultas** é ralo (queries raras, 1 imp cada). O cluster de **página** não é: o post já aparece 145 vezes. Título/description do post é o alavanca de CTR; a money page PT é o destino de quem clica querendo o sistema.

---

## 4. O que este ship entrega

Código em `Purple-Stock/new_lp`. Testes novos: `tests/gsc-product-serp.test.ts`, `tests/product-money-pages.test.ts`.

| Mudança                                                                                                                     | Por quê                                                | Onde                                                                |
| --------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------- |
| Money page `/recursos/aplicativo-de-estoque` (≥800 palavras, SoftwareApplication, CTA trial + WhatsApp no hero e no rodapé) | Blog rankeia com CTR 0; URL EN já converte             | `lib/product-money-pages.ts`, `app/recursos/aplicativo-de-estoque/` |
| Redirect permanente `/features/inventory-app` → money page PT (Next 308); some do sitemap                                   | Preserva o clique que já existe, canônica em português | `next.config.mjs`, `lib/sitemap-pages.ts`                           |
| Money page `/purple-stock-vs-planilha` (tabela + 15 dias de migração)                                                       | P1 de 09/09; blog vs-app na pos 12                     | `app/purple-stock-vs-planilha/`                                     |
| SERP do blog aplicativo / QR / almoxarifado / organizar / cinema                                                            | Páginas já na SERP, snippet não pedia o teste          | `content/blog/*.mdx`                                                |
| SERP glossário `almoxarifado-de-obra` + CTA de canteiro                                                                     | 151 imp, título de definição, 0 clique                 | `lib/glossary-term-seo.ts`                                          |
| SERP `/industrias/audiovisual` e `/industrias/construction`                                                                 | Cinema pos ~6 com CTR 0; canteiro alinhado ao blog     | `lib/industry-page-seo.ts`                                          |
| Nav + playbook da home: app e vs-planilha no lugar do gerador                                                               | Site parece produto                                    | `components/navbar.tsx`, `desktop-landing-playbook-sections.tsx`    |
| Hub `/recursos` lidera com app + vs-planilha; gerador fora da lista                                                         | Hub deixou de empurrar código de barras                | `app/recursos/page.tsx`                                             |
| `llms.txt` / `llm.txt` citam as URLs PT                                                                                     | Crawler de IA não fica no slug inglês morto            | `app/llms.txt/route.ts`                                             |
| CTA do post de almoxarifado de obra                                                                                         | 338 imp precisam de caminho pro app                    | `components/blog-post-cta.tsx`                                      |

Títulos SERP (antes do sufixo `| Purple Stock`, salvo vs-planilha que já traz a marca e usa `absolute`):

| Superfície         | Title                                             | Chars |
| ------------------ | ------------------------------------------------- | ----- |
| App money          | Aplicativo para Controle de Estoque com QR        | 42    |
| vs planilha        | Purple Stock vs Planilha: quando migrar o estoque | 49    |
| Glossário canteiro | Almoxarifado de Obra: estoque do canteiro         | 41    |
| Vertical cinema    | Equipamentos audiovisuais para cinema             | 37    |
| Vertical obra      | Almoxarifado de Obra: QR Code no canteiro         | 41    |

Preço na copy: `R$ 59,00` por equipe, 7 dias, fonte `lib/pricing.ts`. Sem NFC-e, PDV, WMS.

---

## 5. Decisões deste ciclo (não reabrir sem GSC novo)

1. **Não criar terceira URL de almoxarifado de obra.** Blog + glossário já comem a query. Vertical de construção ganha snippet e perde disputa de canibalização.
2. **Não criar money page de QR.** O post `/blog/como-usar-qr-code-controle-estoque` já rankeia; outra URL come o clique.
3. **Sim criar money page de aplicativo em PT.** Exceção à regra 09/09 de “não disputar app de estoque com a Play Store”: o recorte é QR + celular + PME, e a URL EN já convertia. Destino canônico: `/recursos/aplicativo-de-estoque`.
4. **Gerador continua no ar, some da nav primária e do hub `/recursos`.** Pedido explícito deste ciclo.
5. **Home permanece WhatsApp primeiro.** Money pages de alta intenção (app, vs planilha) têm trial no botão primário e WhatsApp no secundário — o cartão não entra na dobra da home.
6. **Sem `/purple-stock-vs-erp` neste ciclo.** Volume GSC irrelevante; vs planilha cobre a migração que a PME realmente busca.

---

## 6. O que medir depois do deploy (7–14 dias)

GSC **sem filtro de página**, comparar com esta janela:

- CTR de `/blog/almoxarifado-de-obra-controle-materiais-canteiro` (hoje 1,48%) e `/glossario/almoxarifado-de-obra` (hoje 0%).
- CTR de `/blog/aplicativo-para-controle-de-estoque` (hoje 0%) e impressões da money page nova.
- 301: cliques de `/features/inventory-app` devem aparecer em `/recursos/aplicativo-de-estoque`.
- Query `equipamentos audiovisuais para empresas de cinema`: clique na vertical.
- Eventos `aplicativo-de-estoque_hero_primary` / `_secondary` e `vs-planilha_hero_*`.

### Ainda fora (P0 de 09/09 que o GSC não resolve)

1. Print PT do fluxo real por vertical.
2. 1 case com número (`/clientes/...`).
3. OG próprio por money page (hoje herda o da home).

---

## 7. Como continuar

Próxima entrada: data + GSC property + o que o 301 e as money pages fizeram no clique. Um arquivo por data em `reports/seo-diario-YYYY-MM-DD.md`. Gerador em parágrafo separado, ou nem entra.
