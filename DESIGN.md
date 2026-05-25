---
name: Purple Stock
description: Landing institucional e SEO-first para controle de estoque com QR Code.
colors:
  brand-violet: "#9333e9"
  brand-violet-deep: "#7928ca"
  ui-primary: "#8b5cf6"
  ink: "#0a0a0a"
  canvas: "#ffffff"
  surface-soft: "#f5f5f5"
  border-soft: "#e5e5e5"
  muted-ink: "#737373"
  link-blue: "#1f5c99"
  editorial-wash: "#f5f8fc"
  editorial-rule: "#7aa4ca"
  chrome-graphite: "#2a2a2a"
  chrome-steel: "#3d3d3d"
typography:
  display:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(3rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Poppins, sans-serif"
    fontSize: "clamp(1.7rem, 2.3vw, 2.05rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Poppins, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Poppins, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.2
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  pill: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "64px"
components:
  button-primary:
    backgroundColor: "{colors.ui-primary}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    typography: "{typography.label}"
    height: "40px"
  button-outline:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.brand-violet-deep}"
    rounded: "{rounded.md}"
    padding: "8px 16px"
    typography: "{typography.label}"
    height: "40px"
  card-default:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "24px"
  input-default:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "8px 12px"
    typography: "{typography.body}"
    height: "40px"
  badge-primary:
    backgroundColor: "{colors.ui-primary}"
    textColor: "{colors.canvas}"
    rounded: "{rounded.pill}"
    padding: "2px 10px"
    typography: "{typography.label}"
---

# Design System: Purple Stock

## 1. Overview

**Creative North Star: "The Operational Control Room"**

Purple Stock deve parecer uma ferramenta de controle operacional traduzida para uma marca de aquisição: precisa, confiável e pragmática. A interface vende clareza de estoque, rastreabilidade e redução de erro, não uma ideia vaga de inovação. O tom visual mais fiel aqui é industrial leve, limpo e legível, com violeta como assinatura e neutros muito claros para manter leitura rápida.

A base do sistema mistura dois registros. O produto e as CTAs usam Poppins, superfícies claras, raio moderado e violeta direto. O conteúdo editorial e SEO abre uma segunda voz, mais calma e explicativa, com blocos de leitura longos, fundo branco e apoio em azul técnico para links e citações. A combinação funciona quando a landing continua orientada a operação e o blog continua orientado a compreensão.

O sistema rejeita explicitamente o que o PRODUCT.md já rejeita: SaaS genérico de marketing com gradientes chamativos, promessas vagas e métricas decorativas; estética de fintech, startup de IA ou dashboard neon; e linguagem enterprise burocrática que afasta operações menores.

**Key Characteristics:**

- Clareza operacional acima de espetáculo visual.
- Violeta como assinatura, não como néon dominante.
- Conteúdo longo com ritmo editorial, navegação e CTA com vocabulário de produto.
- Superfícies claras, legíveis e densidade moderada.
- Confiança construída por contexto de uso, não por exuberância gráfica.

## 2. Colors

A paleta atual é clara, simples e utilitária: um violeta forte como cor de ação, neutros limpos como base, azul técnico para conteúdo editorial e grafite para cromos mais densos como a barra superior.

### Primary

- **Operational Violet** (`#9333e9`): assinatura principal de marca. Aparece em CTAs, elementos promocionais e pontos de reconhecimento rápido.
- **Active Violet** (`#8b5cf6`): token primário da camada UI. Sustenta botões, badges, focus ring e estados principais da biblioteca base.
- **Deep Violet** (`#7928ca`): usado em hover e gradientes de reforço, quando a ação precisa ganhar densidade sem parecer neon.

### Secondary

- **Technical Blue** (`#1f5c99`): cor editorial para links, ênfase informativa e trechos de conteúdo em que a voz precisa ficar menos promocional e mais instrutiva.

### Neutral

- **Clear Canvas** (`#ffffff`): fundo principal do site e das superfícies.
- **Soft Surface** (`#f5f5f5`): apoio para componentes secundários e estados suaves da biblioteca base.
- **Soft Border** (`#e5e5e5`): contorno discreto para inputs, cards e separações leves.
- **Ink** (`#0a0a0a`): texto principal e contraste estrutural.
- **Muted Ink** (`#737373`): texto auxiliar, placeholders e descrições.
- **Chrome Graphite** (`#2a2a2a`): base escura da barra superior no padrão desktop.
- **Chrome Steel** (`#3d3d3d`): gradiente superior e estados de chrome mais altos.
- **Editorial Wash** (`#f5f8fc`): fundo de blockquote e apoio de leitura longa.
- **Editorial Rule** (`#7aa4ca`): borda de citação e detalhe editorial de apoio.

### Named Rules

**The Violet Means Action Rule.** O violeta deve sinalizar ação, estado ativo e reconhecimento de marca. Ele não deve inundar telas inteiras nem virar fundo dominante da experiência.

**The Clean Floor Rule.** A maior parte da interface deve respirar sobre branco e neutros claros. Confiança aqui vem de legibilidade e ordem visual.

## 3. Typography

**Display Font:** Poppins (com fallback `sans-serif`)
**Body Font:** Poppins (com fallback `sans-serif`)
**Label/Mono Font:** Poppins para labels; o projeto não expõe uma família mono própria como linguagem de marca.

**Character:** A tipografia principal é geométrica, limpa e comercial, adequada para benefício direto e navegação orientada a tarefa. Em conteúdo editorial existe uma exceção importante: textos de blog usam Merriweather para leitura longa, o que reduz o tom promocional e aumenta a sensação de autoridade explicativa.

### Hierarchy

- **Display** (700, `clamp(3rem, 6vw, 4.5rem)`, 1.05): heróis, manchetes de alta intenção e abertura de páginas de aquisição.
- **Headline** (700, `clamp(1.7rem, 2.3vw, 2.05rem)`, 1.2): subtítulos e seções principais, especialmente em conteúdo e páginas explicativas.
- **Title** (600, `1.5rem`, 1.2): títulos de cards, blocos e componentes de suporte.
- **Body** (400, `1rem`, 1.6): interface padrão, descrição de benefícios e navegação textual. Em conteúdo longo, a leitura sobe para cerca de `1.12rem` com linha mais solta; o alvo é manter 64ch a 72ch.
- **Label** (500, `0.875rem`, 1.2): botões, badges, navegação utilitária e pequenos rótulos de status.

### Named Rules

**The One Sans Rule.** Poppins domina toda a interface de produto e aquisição. Quebras para serif só devem acontecer em contextos editoriais explícitos, nunca em CTAs, menus ou UI operacional.

## 4. Elevation

O sistema é majoritariamente flat, com elevação usada como reforço de estado, não como decoração permanente. Cards base ficam em `shadow-sm`, o chrome superior usa um sombreado mais físico e insetado, e CTAs promocionais podem receber sombra roxa suave no hover. Quando existe profundidade, ela deve parecer resposta funcional, não glassmorphism ou vitrificação.

### Shadow Vocabulary

- **Surface Rest** (`0 1px 2px 0 rgb(0 0 0 / 0.05)`): sombra padrão de cards da biblioteca base.
- **Action Hover** (`0 4px 12px rgba(139, 92, 246, 0.3)`): sombra curta e colorida para hover de botão promocional.
- **Desktop Chrome** (`0 1px 0 rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)`): linguagem do topo inspirado em desktop para criar sensação de barra de sistema.

### Named Rules

**The Flat-by-Default Rule.** Superfícies descansam planas. Sombra só entra para estado, foco físico ou chrome estrutural.

## 5. Components

### Buttons

- **Shape:** raio moderado, confiável e utilitário (`6px` a `8px` nos botões da base; versões promocionais podem parecer maiores pelo padding, não pelo raio).
- **Primary:** violeta sobre branco (`#8b5cf6` ou `#9333e9` conforme a camada), altura de `40px` a `44px`, texto médio e direto.
- **Hover / Focus:** hover escurece o violeta ou reforça gradiente já existente; foco usa ring violeta de `2px`.
- **Secondary / Ghost / Tertiary:** outline branco com borda suave e texto violeta profundo para ações de menor prioridade.

### Chips

- **Style:** pills arredondadas (`9999px`), tipografia pequena e densa, preenchimento curto.
- **State:** o uso mais coerente é status ou categorização leve; se um chip carregar ação, ele deve manter o mesmo vocabulário do botão e não inventar uma terceira linguagem cromática.

### Cards / Containers

- **Corner Style:** `8px` para cards base, podendo subir visualmente com padding maior em blocos de destaque.
- **Background:** branco na maioria dos casos; fundos suaves só para separar contexto, nunca para montar mosaicos coloridos sem função.
- **Shadow Strategy:** `shadow-sm` em repouso, mais elevação apenas em hover ou destaque real.
- **Border:** borda fina clara (`#e5e5e5`) como delimitador principal.
- **Internal Padding:** `24px` como centro de gravidade da biblioteca base.

### Inputs / Fields

- **Style:** fundo branco, borda suave, raio `6px`, altura `40px`, padding lateral `12px`.
- **Focus:** ring violeta de `2px` com offset claro.
- **Error / Disabled:** erro usa o token destrutivo base; disabled reduz opacidade e bloqueia interação.

### Navigation

- **Style, typography, default/hover/active states, mobile treatment.**
  A navegação principal atual usa um chrome escuro, compacto e inspirado em barra de desktop. O ativo azul no dropdown cria contraste momentâneo, mas a linguagem base continua sóbria. Em mobile, o sistema deve preservar clareza e CTA, não a nostalgia do chrome.

### Editorial Prose

- **Description:** blocos de blog e glossário usam largura medida (`64ch`), espaçamento solto, links azuis técnicos e blockquotes com fundo azul pálido. Essa camada existe para ensinar e converter por entendimento, não por pressão visual.

## 6. Do's and Don'ts

### Do:

- **Do** usar branco e neutros claros como base dominante das telas.
- **Do** reservar o violeta para CTA, foco, badges e estados ativos de maior prioridade.
- **Do** manter textos de interface em Poppins e usar Merriweather apenas em leitura editorial longa.
- **Do** preferir benefícios concretos, contexto de operação e linguagem visual de rastreabilidade.
- **Do** manter contraste forte, foco visível e respeito a reduced motion como padrão.

### Don't:

- **Don't** transformar a landing em um SaaS genérico de marketing com gradientes chamativos, promessas vagas e métricas decorativas.
- **Don't** herdar estética de fintech, startup de IA ou dashboard neon.
- **Don't** soar ou parecer corporativo demais, com visual burocrático ou jargão enterprise.
- **Don't** usar o violeta como banho de tela, fundo dominante ou efeito neon contínuo.
- **Don't** introduzir glassmorphism, hero-metric template ou grids de cards idênticos sem função clara.
