# Diário SEO — 2026-09-09

Fonte: GSC export `purplestock.com.br-Performance-on-Search-2026-09-09.zip` + auditoria live de `www.purplestock.com.br` + SERP BR.

**Leia isto antes de qualquer próximo sprint de SEO.** O ZIP **não** é do produto. É de uma página só.

---

## 1. O que o GSC realmente mediu

Filtros do export:

| Filtro | Valor                                                    |
| ------ | -------------------------------------------------------- |
| Tipo   | Web                                                      |
| Janela | Últimos 28 dias (10/08–06/09/2026)                       |
| Página | `https://www.purplestock.com.br/codigo-de-barras-gratis` |

Totais da **landing do gerador**, não da homepage:

| Métrica       | Valor |
| ------------- | ----- |
| Cliques       | 66    |
| Impressões    | 2.906 |
| CTR           | 2,27% |
| Posição média | 10,68 |

Dispositivos (soma 35 cliques — GSC anonimiza parte das dimensões):

| Device     | Cliques | Imp.  | CTR       | Pos.  |
| ---------- | ------- | ----- | --------- | ----- |
| Computador | 31      | 1.278 | 2,43%     | 12,56 |
| Celular    | 4       | 723   | **0,55%** | 11,46 |

Celular rankeia **melhor** e converte **4× pior**. Não é posição. É snippet + primeira tela do gerador.

Tendência 14 vs 14 dias: impressões 1.893 → 1.013 (−46%). Posição ponderada 10,12 → 11,74. CTR sobe porque sobra query mais quente. Volume do gerador está caindo.

**Não use estes números para decidir homepage, `/precos` ou verticais.** Exporte o GSC **sem filtro de página** antes do próximo ciclo.

---

## 2. Diagnóstico (o que importa para cliente)

### O produto não compete em “sistema de estoque”

SERP BR de _sistema de estoque_ (top 8, 09/09/2026): GestãoClick, vhsys, Omie, EstoqueNuvem, Conta Azul, Capterra. ERPs com NFe/financeiro. Purple Stock **não é isso** (`/precos` já diz: sem NFC-e, PDV, WMS).

O H1 da home (_Sistema de estoque com QR Code_) joga o site nessa fila.

### Onde o site já ganha

- Blog `/blog/como-usar-qr-code-controle-estoque` aparece no topo de _controle de estoque com qr code_.
- Verticais profundas (copy operacional, ~800–900 palavras):
  - `/industrias/audiovisual`
  - `/industrias/events`
  - `/industrias/telecomunicacoes`
  - `/industrias/odontologico`
  - `/industrias/automotivo`
  - `/industrias/construction`
- Preço público simples: R$ 59 / equipe, 7 dias, sem fidelidade.

### Onde o site se sabota

1. Hero pedia **cartão no primeiro segundo** — PME de canteiro/set não converte assim.
2. Nav destacava **gerador grátis** como se fosse o produto.
3. Hub `/industrias` listava varejo/food/logística/farmácia/restaurante com copy de template e **claim de PDV** (falso).
4. Features `/features/*` em slug inglês, copy genérica (~350–440 palavras vs mínimo 800).
5. Sem `/clientes`, `/compare`, vs planilha, vs ERP (blogs existem; não estão empacotados como money page).
6. Mock da home: UI em inglês (`CURRENT STOCK`) + item “vestido”, texto rotaciona “Eventos”.
7. Marca: _purple stock_ colide com Purple Innovation (PRPL, colchão). Sem o recorte “estoque / QR / check-in”, a SERP de marca é ruído.

### Gerador (contexto, não prioridade)

- Posição ~9–10 em _gerador de codigo de barras_ (810 imp, CTR 1,23%). Fora do top 8 ao vivo.
- Concorrentes: invertexto, 11zon, Labeljoy, barcode-generator.de (180+), Pacdora, TEC-IT, Canva, Nuvemshop.
- Mobile: input ~3 telas abaixo da dobra. OG herdado da homepage de estoque.
- Apex `purplestock.com.br` → www estava **302** em medição avulsa (há commit posterior de 301 no crawl graph — revalidar no ar).
- **Não otimizar o gerador como se fosse o produto.** Ele é ímã de curiosos.

---

## 3. O que este PR entrega (ship 09/09/2026)

Código em `Purple-Stock/new_lp`. Testes: `pnpm test` (148 pass).

| Mudança                                         | Por quê                             | Arquivos                                                                 |
| ----------------------------------------------- | ----------------------------------- | ------------------------------------------------------------------------ |
| Hero: WhatsApp primeiro, trial secundário       | PME fala antes de pôr cartão        | `components/desktop-landing-hero.tsx`, `lib/desktop-landing-playbook.ts` |
| Tira “teste com cartão” da dobra                | Fricção na primeira tela            | hero + `pre-footer-cta.tsx` (pre-footer mentia “sem cartão”)             |
| Nav: Planos no topo, gerador dentro de Recursos | Site parece produto, não ferramenta | `components/navbar.tsx`                                                  |
| Hub `/industrias` só as 6 verticais indexáveis  | Para de vender ERP de loja          | `app/industrias/page.tsx`                                                |
| Remove PDV / e-commerce da copy                 | Claim falso vs `/precos`            | `lib/industries-data.ts`                                                 |
| Meta da home: check-in + almoxarifado + saldo   | Sai da SERP genérica de Omie        | `lib/site.ts`                                                            |
| `llms.txt` lista só ICP                         | Crawler de IA não cita varejo/PDV   | `app/llms.txt/route.ts`                                                  |

Já existia (não refeito aqui): `INDEXABLE_INDUSTRY_SLUGS` + `noindex` nas páginas-template. Este PR **para de linká-las no hub**.

FAQ do trial **continua** dizendo que o app pode pedir cartão. Só saiu do hero.

---

## 4. Decisões travadas (não reabrir sem dado novo)

1. **Não disputar “sistema de estoque” / “app de estoque”** com Omie, vhsys, Play Store. Recorte: QR + check-in + almoxarifado de campo.
2. **Não fabricar verticais** (cidade, varejo, food) até a copy ser tão específica quanto audiovisual.
3. **Não marcar FAQPage / HowTo** (SaaS comercial; HowTo morto desde 2023).
4. **Não prometer PDV, NFe, WMS, e-commerce.**
5. **Um pilar para o gerador.** Sem `/gerador-ean`, `/code-128` finos. Só split se nascer feature real (lote, print A4).
6. GSC do gerador ≠ GSC do produto. Sempre filtrar por página na análise.

---

## 5. Próximas decisões (ordem)

Medir **depois do deploy** (7–14 dias, GSC sem filtro de página):

- Cliques/imp em `/`, `/precos`, `/industrias/*`, blog QR.
- CTR mobile da home.
- Conversões: WhatsApp / Calendly vs trial (evento `desktop_whatsapp_primary` vs `desktop_trial_secondary`).

### P0 — ainda não está neste PR

1. **Print PT do fluxo real** por vertical (câmera/kit/canteiro). O WebP atual contradiz o hero.
2. **1 case com número** (`/clientes/vhs` ou DPS): responsável, QR, antes/depois.
3. Export GSC **property inteira** (queries + páginas) para saber se a home rankeia alguma coisa.

### P1 — SEO que fecha venda

4. `/purple-stock-vs-planilha` e `/purple-stock-vs-erp` a partir dos blogs 2026 já escritos.
5. Reescrever 3 features em PT operacional + 301 `/features/inventory-control` → `/recursos/...`.
6. Internamente: cada post → vertical → `/precos` → WhatsApp.

### P2 — só se P0/P1 andarem

7. Gerador: input na primeira tela mobile + OG próprio (não o da home).
8. Revalidar apex 301, LCP mobile da home, INP do gerador (JsBarcode no load).
9. Cases das outras 5 verticais.

### Queries-alvo (produto)

| Query                                       | Destino                        |
| ------------------------------------------- | ------------------------------ |
| controle de estoque com qr code             | home + blog que já rankeia     |
| almoxarifado de obra                        | `/industrias/construction`     |
| check-in equipamentos eventos / audiovisual | verticais                      |
| controle de equipamentos odontológicos      | `/industrias/odontologico`     |
| kit de campo telecom / ISP                  | `/industrias/telecomunicacoes` |
| estoque autopeças código de barras          | `/industrias/automotivo`       |
| sistema de estoque vs planilha              | compare (ainda não existe)     |

---

## 6. Riscos deste ship

- Menos tráfego de curiosos do gerador na nav (intencional).
- Hub com 6 cards em vez de 14 — visual mais vazio, ICP mais claro.
- WhatsApp como CTA #1: volume de conversa sobe; trial com cartão pode cair. Olhar os dois eventos no analytics.
- Meta da home mudou: CTR da query _sistema de estoque com QR Code_ pode oscilar 2–4 semanas.

---

## 7. Como continuar o diário

Próxima entrada: data + o que mediu no GSC **sem filtro** + o que mudou no código + o que **não** vai fazer. Um arquivo por data em `reports/seo-diario-YYYY-MM-DD.md`. Não misturar gerador e produto no mesmo parágrafo de métrica.
