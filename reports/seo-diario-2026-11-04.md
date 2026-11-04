# Diário SEO — 2026-11-04 (IA generativa / GEO)

Fonte: GSC export `purplestock.com.br-Performance-on-Search-Generative-AI-Features-2026-11-04.zip` (propriedade inteira, Web, **Search Generative AI Features**, últimos 28 dias: 06/10–02/11/2026) + código em `Purple-Stock/new_lp` `origin/main` @ `c0db88e` (merge do PR #62, o ship de CTR de 03/11).

**Leia os diários de 09/09, 01/10 e 03/11 antes.** Recorte travado continua: QR + check-in + almoxarifado; sem NFC-e / PDV / WMS; sem FAQPage/HowTo JSON-LD. Home de marca não se mexe. Título do gerador não se mexe. Sem URL nova.

**Pedido deste ciclo:** o ZIP de **Performance on Search Generative AI Features**. O Google já cita o domínio em AI Overviews / AI Mode. Este ship deixa as páginas citadas extraíveis (“X é…”, 134–167 palavras, H2 em pergunta, `llms.txt` alinhado, crawlers de IA no `robots.txt`) e puxa a citação para o produto (sistema de estoque), sem brigar pelo clique clássico do gerador.

Este relatório do GSC **não tem cliques**. Só impressões em features generativas.

---

## 1. O que o GSC mediu (06/10–02/11/2026)

Filtros do export:

| Filtro  | Valor                         |
| ------- | ----------------------------- |
| Tipo    | Web (com base em texto)       |
| Recorte | Search Generative AI Features |
| Janela  | Últimos 28 dias               |
| Página  | (nenhum — property)           |

Totais do gráfico (soma dos dias):

| Métrica       | Valor               |
| ------------- | ------------------- |
| Impressões AI | 592                 |
| Cliques       | (o export não traz) |
| Janela        | 06/10–02/11/2026    |

Países: Brasil 574. Resto: Portugal 7, Angola 2, Colômbia 2, Reino Unido 2, e 1 em Guiné-Bissau / Itália / Japão / Paraguai / EUA.

Dispositivos: computador 474, celular 118.

### Páginas que o Google já escolhe para IA

| Página                                          | Imp. AI | %   | Leitura                                                |
| ----------------------------------------------- | ------- | --- | ------------------------------------------------------ |
| `/codigo-de-barras-gratis`                      | 267     | 45% | Ímã também na IA. Título SERP intocado.                |
| `/blog/como-usar-qr-code-controle-estoque`      | 40      | 7%  | Guia citado. Abria em copy de processo, sem definição. |
| `/`                                             | 35      | 6%  | Marca. H1/title intocados. Faltava bloco “O que é”.    |
| `/blog/organizar-almoxarifado-qr-code`          | 23      | 4%  | Guia citado.                                           |
| `/blog/como-implantar-qr-code-no-almoxarifado`  | 21      | 4%  | Guia citado.                                           |
| `/blog/estoque-autopecas-pecas-moto-controle`   | 19      | 3%  | Fora deste PR (volume menor que o trio QR).            |
| `/glossario`                                    | 15      | 3%  | Hub. Lede era brochure.                                |
| `/industrias/automotivo`                        | 14      | 2%  | Fora deste PR.                                         |
| `/blog/transferencia-materiais-entre-canteiros` | 13      | 2%  | Fora deste PR.                                         |
| `/blog/aplicativo-para-controle-de-estoque`     | 12      | 2%  | Blog, não a money page.                                |
| `/glossario/almoxarifado-de-obra`               | 12      | 2%  | Já tem definição no termo.                             |
| `/recursos/aplicativo-de-estoque`               | 6       | 1%  | Money page quase invisível na IA.                      |
| `/precos`                                       | 4       | <1% |                                                        |
| `/purple-stock-vs-planilha`                     | 1       | ~0% |                                                        |

Leitura:

1. **A IA cita o gerador, como o Search clássico.** 45% das impressões generativas caem em `/codigo-de-barras-gratis`. O risco é o Overview responder “gerador de código de barras” com a ferramenta e parar aí.
2. **Home de marca já entra no Overview (35 imp).** Sem bloco “Purple Stock é um sistema de estoque…”, a IA extrai o H1 de saldo ou o hero rotativo.
3. **Os três blogs de QR/almoxarifado somam 84 imp.** Terceiro maior cluster. Definição na primeira frase vira passage citável.
4. **Money pages quase não existem nesse relatório.** `/recursos/aplicativo-de-estoque` 6, vs-planilha 1. O ímã não transfere citação para o produto sozinho.
5. **`llms.txt` descrevia “Plataforma avançada” + stack.** `/llm.txt` era cópia paralela e podia divergir. Crawler de ChatGPT/Claude/Perplexity caía nisso.

---

## 2. O que este ship entrega

Branch `feat/seo-geo-ai-overviews` no worktree `~/.config/superpowers/worktrees/purple-stock-lp/feat-seo-geo-ai`. Testes: `tests/geo-ai-overviews.test.ts`. Suite `pnpm test`: **207 pass, 0 fail**. Preview local `http://127.0.0.1:8792` (SSR com User-Agent GPTBot): definição, H2 pergunta, `dateModified`, `llms.txt` e `robots.txt` no HTML/texto inicial.

Passages citáveis (janela GEO 134–167 palavras):

| Bloco                          | Palavras | Primeira frase                           |
| ------------------------------ | -------- | ---------------------------------------- |
| Home `HOME_WHAT_IS_BODY`       | 160      | Purple Stock é um sistema de estoque…    |
| Gerador `BARCODE_WHAT_IS_BODY` | 166      | Um gerador de código de barras grátis é… |

| Mudança                                                                                                              | Por quê                                               | Onde                                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Bloco “O que é Purple Stock?” (3 parágrafos, PT)                                                                     | Home já aparece na IA sem definição extraível         | `lib/geo-answer-blocks.ts`, `components/desktop-landing-playbook-sections.tsx`                                                            |
| FAQ da home começa com a mesma pergunta                                                                              | AI Overviews lê Q&A visível; sem FAQPage              | `lib/home-faq.ts`                                                                                                                         |
| H2 “Como funciona o sistema de estoque com QR Code?”                                                                 | Heading em pergunta casa com query                    | `lib/desktop-landing-playbook.ts`                                                                                                         |
| Definição do gerador **antes** do how-to                                                                             | 45% das citações IA; GS1/GTIN explícito               | `lib/barcode-tool-seo-content.ts`, `components/barcode-tool-seo-footer.tsx`                                                               |
| FAQ PT do gerador: “O que é um gerador…?”                                                                            | Mesma query da feature                                | `lib/barcode-tool-seo-content.ts`                                                                                                         |
| FAQ money: “O que é um aplicativo para controle de estoque?”                                                         | Única money page já no relatório (6 imp)              | `lib/product-money-pages.ts`                                                                                                              |
| Primeira frase-definição nos 3 blogs citados                                                                         | 84 imp AI no cluster QR                               | `content/blog/como-usar-qr-code-controle-estoque.mdx`, `organizar-almoxarifado-qr-code.mdx`, `como-implantar-qr-code-no-almoxarifado.mdx` |
| Lede do hub `/glossario` vira definição                                                                              | 15 imp AI, brochure antigo                            | `utils/translations/core-pt.ts`                                                                                                           |
| `/llms.txt` e `/llm.txt` no mesmo builder                                                                            | Alias não pode envelhecer; some “Plataforma avançada” | `lib/llms-txt.ts`, `app/llms.txt/route.ts`, `app/llm.txt/route.ts`                                                                        |
| `robots.txt` lista GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended | Crawler de busca de IA                                | `app/robots.ts`                                                                                                                           |
| `dateModified: 2026-11-04` no WebPage da home e no WebApplication do gerador                                         | Sinal de frescor para Overview                        | `lib/structured-data.ts`                                                                                                                  |
| Validator `llms` exige “Purple Stock é um sistema de estoque”                                                        | Impede regressão para stack dump                      | `scripts/lib/validators.js`                                                                                                               |

Títulos SERP e H1 (intocados):

| Superfície | Title / H1                                            | Chars      |
| ---------- | ----------------------------------------------------- | ---------- |
| Home       | Sistema de estoque com QR Code \| Purple Stock        | (intocado) |
| Home H1    | Sistema de estoque com QR Code: pare de errar o saldo | (intocado) |
| Gerador    | Gerador de código de barras grátis \| EAN e QR        | (intocado) |

Preço na copy: `R$ 99,00` por equipe, 7 dias, fonte `lib/pricing.ts`. Sem NFC-e, PDV, WMS no bloco novo. Sem FAQPage.

`llms.txt` agora abre:

```
# Purple Stock
> Purple Stock é um sistema de estoque com QR Code para PME: entrada, saída, check-in e almoxarifado no celular, a partir de R$ 99,00 por equipe.

## Fatos
```

---

## 3. Decisões deste ciclo (não reabrir sem GSC AI novo)

1. **Não mexer no title/H1 do gerador nem da home.** O ímã clássico (diário 03/11) e a citação IA (267 + 35) já escolhem essas URLs.
2. **Não brigar com Wikipedia em `codigo de barras`.** O bloco do gerador declara que EAN gerado aqui não é GTIN GS1.
3. **Não criar página nova.** GEO neste ciclo é passage + `llms` + robots nas URLs que a IA já cita.
4. **FAQ continua HTML, sem FAQPage/HowTo.** Google limita rich result; a skill GEO pede Q&A visível.
5. **Bloco “O que é” da home só em PT.** EN/FR ficam com o playbook antigo; o relatório é BR (574/592).
6. **`/llm.txt` deixa de ter corpo próprio.** Qualquer crawler que ainda peça o alias lê o mesmo markdown.
7. **Não gastar este PR no blog de autopeças (19) nem em `/industrias/automotivo` (14).** Próximo ZIP AI, se o trio QR + gerador + home já citarem o produto.

---

## 4. O que medir depois do deploy (14–28 dias)

GSC **Search Generative AI Features**, mesma janela de 28 dias, comparar com 06/10–02/11:

- Imp. de `/` e `/recursos/aplicativo-de-estoque` (hoje 35 e 6). Queremos a home citada como sistema de estoque, não só marca.
- Imp. de `/codigo-de-barras-gratis` continua o ímã; o Overview deve passar a mencionar Purple Stock / estoque / GS1 na mesma citação.
- Imp. dos 3 blogs de QR: se cair, a primeira frase definição é o suspeito (não o title).
- `llms.txt` fetch: GPTBot / PerplexityBot no log do Cleat, se existir.

Search clássico (diário 03/11) continua o placar de clique. Este ZIP não substitui aquele.

### Ainda fora

1. Wikipedia / Wikidata da marca (ChatGPT cita Wikipedia em ~48% das respostas).
2. Definição no blog de autopeças e na vertical automotivo (19+14 imp AI).
3. Case com número (`/clientes/...`) — citação com dado único.
4. RSL 1.0.
5. Print PT do fluxo real por vertical (já estava fora em 03/11).
