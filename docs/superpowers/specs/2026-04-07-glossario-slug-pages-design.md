# Design: Páginas Individuais do Glossário (`/glossario/[slug]`)

**Data:** 2026-04-07  
**Status:** Aprovado

---

## Objetivo

Transformar o glossário monolítico atual (uma única página com ~60 termos renderizados via estado do cliente) em páginas individuais indexáveis por termo, capturando tráfego de cauda longa (ex: "o que é SKU", "como calcular lead time", "efeito chicote logística").

---

## Arquitetura

### Novos arquivos

| Arquivo                          | Responsabilidade                                         |
| -------------------------------- | -------------------------------------------------------- |
| `/data/glossary.ts`              | Array de objetos `GlossaryTerm` — fonte única de verdade |
| `/app/glossario/[slug]/page.tsx` | Página estática individual por termo                     |

### Arquivos modificados

| Arquivo                   | Mudança                                        |
| ------------------------- | ---------------------------------------------- |
| `/app/glossario/page.tsx` | Cards passam a linkar para `/glossario/{slug}` |
| `/app/sitemap.ts`         | Importa termos e gera rotas dinamicamente      |

---

## Estrutura de Dados

```typescript
// /data/glossary.ts

export interface GlossaryTerm {
  slug: string; // ex: "sku", "lead-time", "efeito-chicote"
  term: string; // ex: "SKU (Stock Keeping Unit)"
  category: "inventory" | "logistics" | "finance" | "management" | "technology";
  shortDefinition: string; // ~50 palavras — card da listagem + meta description
  definition: string; // ~300 palavras — seção principal da página
  example: string; // ~200 palavras — caso prático concreto
  formula?: string; // expressão/texto quando aplicável
  formulaExplanation?: string; // explicação dos componentes da fórmula
  faq: [
    // exatamente 3 perguntas por termo
    { question: string; answer: string },
    { question: string; answer: string },
    { question: string; answer: string },
  ];
  relatedTerms: string[]; // slugs de outros termos no glossário
  relatedFeatures?: string[]; // ex: ['inventory-control', 'barcoding']
  relatedIndustries?: string[]; // ex: ['varejo', 'logistica']
}

export const glossaryTerms: GlossaryTerm[] = [
  // ... um objeto por termo
];
```

Os slugs são derivados do nome do termo em português, lowercase e hifenizado. Os campos `definition`, `example` e `faq[].answer` são placeholders a serem preenchidos pelo time de conteúdo.

---

## Template da Página Individual

**Rota:** `/app/glossario/[slug]/page.tsx`  
**Geração:** `generateStaticParams` — página estática em build time  
**Idioma:** Português (BR) exclusivamente

### Seções (ordem)

1. **Hero** — nome do termo + badge de categoria + `shortDefinition`
2. **Definição completa** — `definition` com H2 "O que é {term}?"
3. **Exemplo prático** — `example` com H2 "Exemplo prático"
4. **Fórmula** _(condicional — só aparece se `formula` existir)_ — bloco destacado com fórmula + `formulaExplanation`
5. **Termos relacionados** — cards com link para `/glossario/{slug}` dos `relatedTerms`
6. **Features relacionadas** _(condicional)_ — links para `/features/{slug}` dos `relatedFeatures`
7. **Indústrias relacionadas** _(condicional)_ — links para `/industrias/{slug}` dos `relatedIndustries`
8. **FAQ** — accordion com as 3 perguntas/respostas
9. **CTA** — banner de cadastro Purple Stock (reutilizar padrão do blog)

### SEO automático

```typescript
// generateMetadata
title: `{term} — Glossário de Estoque | Purple Stock`
description: term.shortDefinition
canonical: `https://www.purplestock.com.br/glossario/{slug}`

// JSON-LD Schema
{
  "@type": "DefinedTerm",
  "name": term.term,
  "description": term.shortDefinition,
  "inDefinedTermSet": "https://www.purplestock.com.br/glossario"
}

// Breadcrumb Schema
Home → Glossário → {term}
```

---

## Listagem (`/glossario/page.tsx`)

- Cada card recebe `href="/glossario/{slug}"`
- O filtro por categoria e busca por texto continuam funcionando exatamente como hoje
- Nenhuma mudança visual — só adiciona navegação

---

## Sitemap

```typescript
// /app/sitemap.ts — adicionar:
import { glossaryTerms } from "@/data/glossary";

const glossaryRoutes = glossaryTerms.map((term) => ({
  url: `${baseUrl}/glossario/${term.slug}`,
  lastModified: new Date("2026-04-07"),
  changeFrequency: "monthly" as const,
  priority: 0.6,
}));
```

---

## Scaffolding de Dados

A implementação cria o array `glossaryTerms` com todos os termos já existentes no `glossario/page.tsx`, com os campos estruturais preenchidos (slug, term, category, relatedTerms, relatedFeatures, relatedIndustries) e os campos de conteúdo longo como strings vazias marcadas com `// TODO: conteúdo`:

```typescript
{
  slug: "sku",
  term: "SKU (Stock Keeping Unit)",
  category: "inventory",
  shortDefinition: "", // TODO: ~50 palavras
  definition: "",      // TODO: ~300 palavras
  example: "",         // TODO: ~200 palavras
  faq: [
    { question: "", answer: "" }, // TODO
    { question: "", answer: "" }, // TODO
    { question: "", answer: "" }, // TODO
  ],
  relatedTerms: ["estoque-de-seguranca", "giro-de-estoque"],
  relatedFeatures: ["inventory-control"],
  relatedIndustries: ["varejo", "manufatura"],
}
```

A página individual renderiza graciosamente quando os campos de conteúdo estão vazios (seções não aparecem), permitindo deploy incremental conforme o conteúdo é preenchido.

---

## Termos a migrar

Os seguintes slugs serão gerados a partir do `glossario/page.tsx` atual:

`3pl`, `5s`, `80-20`, `contas-a-pagar`, `contas-a-receber`, `b2b`, `sistema-de-codigo-de-barras`, `lista-de-materiais`, `efeito-chicote`, `ciclo-de-conversao-de-caixa`, `ativos-circulantes`, `passivos-circulantes`, `custo-das-mercadorias-vendidas`, `ciclo-de-tempo`, `dropshipping`, `sku`, `estoque-de-seguranca`, `giro-de-estoque`, `ruptura-de-estoque`, `excesso-de-estoque`, `financiamento-de-estoque`, `gestao-de-estoque`, `inventario-fisico`, `just-in-time`, `kanban`, `lead-time`, `logistica`, `picking`, `ponto-de-reposicao`, `logistica-reversa`, `wms`, `vmi`, `cadeia-de-suprimentos`, `capital-de-giro`, `inflacao`

_(~35 termos identificados — validar contagem final na leitura do arquivo)_

---

## Critérios de conclusão

- [ ] `/data/glossary.ts` criado com todos os termos scaffolded
- [ ] `/app/glossario/[slug]/page.tsx` renderiza cada seção condicionalmente
- [ ] Cards da listagem linkam para `/glossario/{slug}`
- [ ] Sitemap inclui todas as rotas do glossário
- [ ] Schema `DefinedTerm` e Breadcrumb presentes em cada página
- [ ] Campos vazios não quebram a página (renderização condicional)
