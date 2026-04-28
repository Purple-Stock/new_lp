# Purple Stock `new_lp`

Landing page institucional e SEO-first da Purple Stock, construída em Next.js.
Este app concentra páginas de aquisição, páginas por funcionalidade e indústria,
blog, glossário, documentação do produto e assets públicos usados no site.

## Stack

- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Node.js test runner para validações utilitárias

## Requisitos

- Node.js 20+
- npm ou pnpm

## Setup local

```bash
cp .env.example .env.local
npm install
npm run dev
```

App local: `http://localhost:3000`

## Variáveis de ambiente

Copie `.env.example` para `.env.local`.

```env
NEXT_PUBLIC_BASE_URL=https://www.purplestock.com.br
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_URL=https://wa.me/5511995597242
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/matheus-puppe/purple-stock
```

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run test
npm run format
npm run format:check
npm run validate-sitemap
npm run validate-llms
```

## O que existe neste app

- Página principal em `app/page.tsx`
- Páginas por funcionalidade em `app/features/*`
- Páginas por indústria em `app/industrias/*`
- Blog com conteúdo em `content/blog/*.mdx`
- Glossário em `app/glossario/*` com dados em `data/glossary.ts`
- Documentação do produto em `app/documentacao/page.tsx`
- Página gratuita de código de barras em `app/codigo-de-barras-gratis/*`
- SEO técnico com `app/sitemap.ts`, `app/robots.ts` e `app/llms.txt/route.ts`

## Estrutura

```text
app/          rotas, layouts, metadata e páginas
components/   blocos visuais e seções reutilizáveis
content/      conteúdo editorial do blog em MDX
data/         datasets estáticos
hooks/        hooks de UI
lib/          utilitários de SEO, analytics, blog e contato
public/       imagens, logos e assets
scripts/      validações de sitemap e llms.txt
tests/        testes dos validadores
```

## Qualidade

Antes de abrir PR ou subir deploy, rode:

```bash
npm run format:check
npm run test
npm run lint
npm run build
```

Se mexer em sitemap ou `llms.txt`, rode também:

```bash
npm run validate-sitemap
npm run validate-llms
```

## Observações

- `NEXT_PUBLIC_BASE_URL` alimenta URLs canônicas, sitemap e metadados.
- URLs públicas de WhatsApp e Calendly têm fallback no código caso a env não
  esteja definida.
- O blog é lido do filesystem em tempo de build/runtime via `lib/blog.ts`.
