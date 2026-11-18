# Diário SEO — 2026-11-18

Fonte: Keyword Planner faixa **50** (balde 0–100) × GSC `sc-domain:purplestock.com.br` 19/10–16/11 × LP live `www.purplestock.com.br`.

**Pedido deste ciclo:** planejar as palavras nichadas (0–100). Recorte travado em 09/09 e 01/10 continua: QR + check-in + almoxarifado; sem NFC-e / PDV / WMS; sem FAQPage/HowTo; sem terceira URL de almoxarifado de obra; sem money page de QR; gerador no ar, fora da nav.

Preço na copy: `R$ 99,00` / equipe, 7 dias (`lib/pricing.ts`).

Não abri página neste arquivo. É o mapa. Ship é outro pedido.

---

## 1. O que a LP já cobre

| URL live                                                 | Title                                                            | Query que ela come                               |
| -------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------ |
| `/`                                                      | Sistema de estoque com QR Code                                   | marca + head genérica                            |
| `/recursos/aplicativo-de-estoque`                        | Aplicativo para Controle de Estoque com QR                       | aplicativo / app (500 e 50)                      |
| `/recursos/controle-de-almoxarifado`                     | Controle de Almoxarifado com QR no celular                       | almoxarifado genérico                            |
| `/purple-stock-vs-planilha`                              | Purple Stock vs Planilha: quando migrar o estoque                | planilha / excel (ponte)                         |
| `/industrias/construction`                               | Almoxarifado de Obra: QR Code no canteiro                        | almoxarifado de obra (vertical)                  |
| `/blog/almoxarifado-de-obra-controle-materiais-canteiro` | Almoxarifado de Obra: QR e saldo no canteiro                     | mesma query; Google escolhe o blog               |
| `/blog/controle-ferramentas-obra-check-in-canteiro`      | Controle de Ferramentas de Obra com Check-in no Canteiro         | ferramentas **de obra**                          |
| `/blog/codigo-de-barras-no-estoque-como-implementar`     | Código de Barras no Estoque: Como Implementar em 5 Passos [2026] | HowTo, não o sistema                             |
| `/features/barcoding`                                    | Código de Barras no Estoque: Gere, Leia e Controle em Segundos   | slug EN, H1 “Código de Barras”, cheira a gerador |
| `/codigo-de-barras-gratis`                               | Gerador de código de barras grátis                               | PNG; 70 cliques / 3.849 impr. nesta janela       |

Money pages PT que convertem: **três**. As nichadas de 50 ou não têm URL, ou caíram em slug inglês / blog HowTo.

---

## 2. Palavras de 50 → uma URL cada

| Palavra                                                     | Comp. Planner | Lance    | Destino                                              | Ação                                                                 |
| ----------------------------------------------------------- | ------------- | -------- | ---------------------------------------------------- | -------------------------------------------------------------------- |
| controle de estoque com código de barras                    | LOW           | R$ 7–31  | `/recursos/controle-de-estoque-com-codigo-de-barras` | **abrir**. 308 `/features/barcoding` → esta.                         |
| controle ferramental / ferramentaria / controle ferramentas | LOW           | R$ 5–15  | `/recursos/controle-de-ferramentas`                  | **abrir**. Irmãs no mesmo HTML.                                      |
| controle de empréstimo de ferramentas                       | LOW           | —        | a mesma de ferramentas                               | H2 + FAQ. Sem URL nova.                                              |
| sistema de controle de estoque online                       | HIGH\*        | R$ 16–40 | `/recursos/sistema-de-controle-de-estoque`           | **abrir**. H1 com “online” (50). Irmã a head de 5 mil no mesmo HTML. |
| sistema de estoque para loja                                | HIGH\*        | R$ 9–53  | `/recursos/sistema-de-estoque-para-loja`             | **abrir**. Recorte saldo/QR. Sem caixa, sem NF-e.                    |
| sistema de entrada e saída de mercadoria                    | HIGH\*        | R$ 9–30  | aplicativo + pilar online                            | H2 nas duas. Sem URL nova.                                           |
| aplicativo para gestão de estoque                           | HIGH\*        | R$ 7–19  | `/recursos/aplicativo-de-estoque`                    | **apertar**. Irmã “gestão” no H2.                                    |
| almoxarifado de obra                                        | —             | —        | blog + glossário + `/industrias/construction`        | **não abrir**. Pos ~4,5 nesta janela.                                |

\*HIGH no Planner é anúncio pago. Volume 50 ainda é cauda.

---

## 3. Fila de ship (uma URL por PR)

### 01 — `/recursos/controle-de-estoque-com-codigo-de-barras`

A mais fácil de rankear: LOW, comercial, produto. Hoje o Google tem o gerador e um HowTo.

- Title (≤60): `Controle de Estoque com Código de Barras`
- H1: `Controle de estoque com código de barras no celular`
- Copy: cadastro + etiqueta + leitura na entrada/saída. Câmera, sem coletor. QR e barras no mesmo item.
- Fora: “gerador”, “PNG”, “grátis download”, EAN avulso.
- 308: `/features/barcoding` → esta (mesmo padrão do `inventory-app`).
- Ponte: rodapé do gerador aponta para cá. Blog HowTo aponta para cá, não para o gerador.
- CTA: trial 7 dias + WhatsApp.

### 02 — `/recursos/controle-de-ferramentas`

LOW, ICP locação/oficina/obra. Blog atual é só canteiro; query genérica (`controle ferramental`) não tem money page.

- Title: `Controle de Ferramentas com Check-in e QR`
- H1: `Controle ferramental: empréstimo com responsável`
- Irmãs no HTML: controle de ferramentas, ferramentaria, empréstimo de ferramentas.
- Copy: check-out / check-in, furadeira/serra/nível, oficina e canteiro. Ferramenta volta; material consome.
- Blog `/blog/controle-ferramentas-obra-check-in-canteiro` ganha CTA para esta money page. Vertical construção continua no cluster de 01/10.
- `/features/equipment-management` fica com AV/ativo (câmera, LED). Não 308 ainda — intenção diferente.

### 03 — `/recursos/sistema-de-controle-de-estoque`

Entrada na família de 5 mil. H1 nichada; a head sobe na mesma URL.

- Title: `Sistema de Controle de Estoque Online`
- H1: `Sistema de controle de estoque online com QR no celular`
- Irmãs: sistema de controle de estoque / sistema para / sistemas de.
- Copy: software (não Excel), saldo ao vivo, time no celular. Sem PDV, sem NF-e.
- Interno: home, `/recursos`, blogs de QR e vs-planilha apontam para cá.
- Esta é a única URL nova da head. Não abrir `/recursos/gestao-de-estoque` neste ciclo.

### 04 — `/recursos/sistema-de-estoque-para-loja`

ICP default (loja). Query de 50, lance alto. Risco: SERP de PDV.

- Title: `Sistema de Estoque para Loja com QR`
- H1: `Sistema de estoque para loja: saldo no celular, sem caixa`
- Copy: estoque de trás, SKU, ruptura, conferência. Uma frase explícita: não substitui PDV nem nota.
- Fora: loja de roupas, gôndola, NFC-e, Bling, Tiny.
- Vertical autopeças (`/industrias/automotivo`) aponta para cá; não o contrário.

### 05 — apertar o que já rankeia

| URL                                                      | Fazer                                                                                                        |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `/recursos/aplicativo-de-estoque`                        | H2 “aplicativo para gestão de estoque” + “entrada e saída de mercadoria”. Queries canônicas ainda pos 12–17. |
| `/blog/aplicativo-para-controle-de-estoque`              | Já linka a money page. Manter.                                                                               |
| `/blog/almoxarifado-de-obra-controle-materiais-canteiro` | Snippet + CTA para aplicativo e pilar online. Sem URL nova.                                                  |
| `/recursos` hub                                          | Incluir as 4 money pages novas no topo. Gerador continua fora.                                               |
| Home playbook / nav                                      | App + vs-planilha + pilar online. Ferramentas e barras no hub `/recursos`.                                   |

---

## 4. O que não abrir

1. Money page de QR — blog `/blog/como-usar-qr-code-controle-estoque` já na ~5.
2. Terceira URL de almoxarifado de obra — 01/10.
3. `/recursos/gestao-de-estoque` — mesma família do pilar 03.
4. `/recursos/entrada-e-saida-de-mercadoria` — H2 no app e no pilar.
5. Split EAN / Code-128 / gerador-lote.
6. PDV, NFC-e, WMS, loja de roupas, restaurante.

---

## 5. Interno (depois que a URL existir)

```
gerador  →  money código de barras  →  pilar sistema online  →  trial
blog HowTo barras  →  money código de barras
blog ferramentas de obra  →  money ferramentas  →  construction
blog QR  →  pilar sistema online  (já rankeia; só CTA)
aplicativo  ↔  pilar  ↔  vs-planilha
loja  →  aplicativo + vs-planilha
```

---

## 6. Como medir (14 dias após o 01)

GSC property, gerador num recorte separado:

- Query `controle de estoque com código de barras` — impressão na money page nova, não no gerador.
- Query `controle de ferramentas` / `ferramental` — money page, não só o blog de obra.
- Query `sistema de controle de estoque` — primeira impressão (hoje 0).
- `/recursos/aplicativo-de-estoque` — queries de 12 → página 1.

---

## 7. Como continuar

Próxima entrada: data + o que o PR fez no GSC. Um arquivo por data em `reports/seo-diario-YYYY-MM-DD.md`.

## 8. Ship (mesmo dia)

Pedido “resolve essa parte do nicho”: as quatro URLs + 308 de `/features/barcoding` + hub + H2s no aplicativo saíram na branch `feat/nicho-money-pages` (worktree a partir de `origin/main`). Gerador continua ímã; sem terceira URL de almoxarifado de obra.
