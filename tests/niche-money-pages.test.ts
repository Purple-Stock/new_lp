import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import {
  APLICATIVO_ESTOQUE_FAQS,
  APLICATIVO_ESTOQUE_SECTIONS,
  countCopyWords,
} from "../lib/product-money-pages";
import {
  CODIGO_BARRAS_FAQS,
  CODIGO_BARRAS_H1,
  CODIGO_BARRAS_SECTIONS,
} from "../lib/money-pages/codigo-de-barras";
import {
  FERRAMENTAS_FAQS,
  FERRAMENTAS_H1,
  FERRAMENTAS_SECTIONS,
} from "../lib/money-pages/ferramentas";
import {
  SISTEMA_FAQS,
  SISTEMA_H1,
  SISTEMA_SECTIONS,
} from "../lib/money-pages/sistema";
import { LOJA_FAQS, LOJA_H1, LOJA_SECTIONS } from "../lib/money-pages/loja";
import {
  CONTROLE_CODIGO_BARRAS_PAGE_DESCRIPTION,
  CONTROLE_CODIGO_BARRAS_PAGE_TITLE,
  CONTROLE_CODIGO_BARRAS_PATH,
  CONTROLE_FERRAMENTAS_PAGE_DESCRIPTION,
  CONTROLE_FERRAMENTAS_PAGE_TITLE,
  CONTROLE_FERRAMENTAS_PATH,
  SISTEMA_CONTROLE_ESTOQUE_PAGE_DESCRIPTION,
  SISTEMA_CONTROLE_ESTOQUE_PAGE_TITLE,
  SISTEMA_CONTROLE_ESTOQUE_PATH,
  SISTEMA_ESTOQUE_LOJA_PAGE_DESCRIPTION,
  SISTEMA_ESTOQUE_LOJA_PAGE_TITLE,
  SISTEMA_ESTOQUE_LOJA_PATH,
} from "../lib/seo-page-copy";
import { buildPagesSitemapEntries } from "../lib/sitemap-pages";
import { featureHref } from "../lib/feature-paths";
import { getPostBySlug } from "../lib/blog";
import { buildLlmsTxtMarkdown } from "../lib/llms-txt";

function blobOf(
  sections: { title: string; paragraphs: string[] }[],
  faqs: { q: string; a: string }[]
): string {
  return [
    ...sections.flatMap((section) => [section.title, ...section.paragraphs]),
    ...faqs.flatMap((faq) => [faq.q, faq.a]),
  ].join(" ");
}

function assertSerpTitle(title: string) {
  assert.ok(title.length >= 30, `title too short (${title.length}): ${title}`);
  assert.ok(title.length <= 60, `title too long (${title.length}): ${title}`);
}

function assertSerpDescription(description: string) {
  assert.ok(
    description.length >= 120,
    `description too short (${description.length}): ${description}`
  );
  assert.ok(
    description.length <= 160,
    `description too long (${description.length}): ${description}`
  );
}

function assertProductRecorte(blob: string) {
  assert.match(blob, /QR/i);
  assert.match(blob, /R\$ 99/);
  assert.doesNotMatch(blob.toLowerCase(), /pdv/);
  assert.doesNotMatch(blob.toLowerCase(), /nfc-e/);
  assert.doesNotMatch(blob.toLowerCase(), /wms de galpão|wms de galpao/);
  assert.doesNotMatch(blob.toLowerCase(), /milhares de empresas/);
}

test("barcode money page SERP matches the 0-100 query", () => {
  assert.equal(
    CONTROLE_CODIGO_BARRAS_PATH,
    "/recursos/controle-de-estoque-com-codigo-de-barras"
  );
  assert.equal(
    CONTROLE_CODIGO_BARRAS_PAGE_TITLE,
    "Controle de Estoque com Código de Barras"
  );
  assertSerpTitle(CONTROLE_CODIGO_BARRAS_PAGE_TITLE);
  assert.match(CONTROLE_CODIGO_BARRAS_PAGE_DESCRIPTION, /código de barras/i);
  assert.match(CONTROLE_CODIGO_BARRAS_PAGE_DESCRIPTION, /99/);
  assertSerpDescription(CONTROLE_CODIGO_BARRAS_PAGE_DESCRIPTION);
  assert.match(CODIGO_BARRAS_H1, /código de barras/i);
  assert.match(CODIGO_BARRAS_H1, /celular/i);
});

test("barcode money page copy is operational and not the generator", () => {
  const blob = blobOf(CODIGO_BARRAS_SECTIONS, CODIGO_BARRAS_FAQS);
  const wordCount = countCopyWords(blob);
  assert.ok(wordCount >= 800, `wordCount=${wordCount}`);
  assertProductRecorte(blob);
  assert.match(blob, /código de barras/i);
  assert.match(blob, /etiqueta/i);
  assert.match(blob, /entrada/i);
  assert.match(blob, /saída|saida/i);
  assert.match(blob, /câmera|camera/i);
  assert.doesNotMatch(blob.toLowerCase(), /gerador/);
  assert.doesNotMatch(blob, /PNG/);
  assert.doesNotMatch(blob.toLowerCase(), /download/);
});

test("ferramentas money page SERP is check-in, not the canteiro blog", () => {
  assert.equal(CONTROLE_FERRAMENTAS_PATH, "/recursos/controle-de-ferramentas");
  assert.equal(
    CONTROLE_FERRAMENTAS_PAGE_TITLE,
    "Controle de Ferramentas com Check-in e QR"
  );
  assertSerpTitle(CONTROLE_FERRAMENTAS_PAGE_TITLE);
  assert.match(CONTROLE_FERRAMENTAS_PAGE_DESCRIPTION, /ferramental|ferrament/i);
  assert.match(CONTROLE_FERRAMENTAS_PAGE_DESCRIPTION, /99/);
  assertSerpDescription(CONTROLE_FERRAMENTAS_PAGE_DESCRIPTION);
  assert.match(FERRAMENTAS_H1, /ferramental/i);
  assert.match(FERRAMENTAS_H1, /empréstimo|emprestimo/i);
});

test("ferramentas money page covers ferramental, empréstimo and check-in", () => {
  const blob = blobOf(FERRAMENTAS_SECTIONS, FERRAMENTAS_FAQS);
  const wordCount = countCopyWords(blob);
  assert.ok(wordCount >= 800, `wordCount=${wordCount}`);
  assertProductRecorte(blob);
  assert.match(blob, /ferramental/i);
  assert.match(blob, /ferramentaria/i);
  assert.match(blob, /empréstimo|emprestimo/i);
  assert.match(blob, /check-in/i);
  assert.match(blob, /check-out/i);
  assert.match(blob, /furadeira|serra/i);
  assert.ok(
    FERRAMENTAS_SECTIONS.some((section) =>
      /empréstimo de ferramentas/i.test(section.title)
    ),
    "expected an H2 for empréstimo de ferramentas"
  );
});

test("online inventory system SERP keeps the 50-query in the H1", () => {
  assert.equal(
    SISTEMA_CONTROLE_ESTOQUE_PATH,
    "/recursos/sistema-de-controle-de-estoque"
  );
  assert.equal(
    SISTEMA_CONTROLE_ESTOQUE_PAGE_TITLE,
    "Sistema de Controle de Estoque Online"
  );
  assertSerpTitle(SISTEMA_CONTROLE_ESTOQUE_PAGE_TITLE);
  assert.match(SISTEMA_CONTROLE_ESTOQUE_PAGE_DESCRIPTION, /online/i);
  assert.match(SISTEMA_CONTROLE_ESTOQUE_PAGE_DESCRIPTION, /99/);
  assertSerpDescription(SISTEMA_CONTROLE_ESTOQUE_PAGE_DESCRIPTION);
  assert.match(SISTEMA_H1, /sistema de controle de estoque online/i);
  assert.match(SISTEMA_H1, /QR/i);
});

test("online inventory system copy is software, not Excel or checkout", () => {
  const blob = blobOf(SISTEMA_SECTIONS, SISTEMA_FAQS);
  const wordCount = countCopyWords(blob);
  assert.ok(wordCount >= 800, `wordCount=${wordCount}`);
  assertProductRecorte(blob);
  assert.match(blob, /sistema de controle de estoque/i);
  assert.match(blob, /online/i);
  assert.match(blob, /entrada e saída de mercadoria/i);
  assert.ok(
    SISTEMA_SECTIONS.some((section) =>
      /entrada e saída de mercadoria/i.test(section.title)
    ),
    "expected an H2 for entrada e saída de mercadoria"
  );
});

test("loja money page SERP sells back-room stock without a till", () => {
  assert.equal(
    SISTEMA_ESTOQUE_LOJA_PATH,
    "/recursos/sistema-de-estoque-para-loja"
  );
  assert.equal(
    SISTEMA_ESTOQUE_LOJA_PAGE_TITLE,
    "Sistema de Estoque para Loja com QR"
  );
  assertSerpTitle(SISTEMA_ESTOQUE_LOJA_PAGE_TITLE);
  assert.match(SISTEMA_ESTOQUE_LOJA_PAGE_DESCRIPTION, /loja/i);
  assert.match(SISTEMA_ESTOQUE_LOJA_PAGE_DESCRIPTION, /99/);
  assertSerpDescription(SISTEMA_ESTOQUE_LOJA_PAGE_DESCRIPTION);
  assert.match(LOJA_H1, /sistema de estoque para loja/i);
  assert.match(LOJA_H1, /sem caixa/i);
});

test("loja money page copy stays on SKU and saldo, not checkout or NF-e", () => {
  const blob = blobOf(LOJA_SECTIONS, LOJA_FAQS);
  const wordCount = countCopyWords(blob);
  assert.ok(wordCount >= 800, `wordCount=${wordCount}`);
  assertProductRecorte(blob);
  assert.match(blob, /SKU/i);
  assert.match(blob, /sem caixa/i);
  assert.match(blob, /não substitui/i);
  assert.doesNotMatch(blob.toLowerCase(), /bling/);
  assert.doesNotMatch(blob.toLowerCase(), /tiny/);
  assert.doesNotMatch(blob.toLowerCase(), /gôndola|gondola/);
});

test("aplicativo money page gains gestão and entrada/saída H2s", () => {
  assert.ok(
    APLICATIVO_ESTOQUE_SECTIONS.some((section) =>
      /gestão de estoque/i.test(section.title)
    ),
    "expected an H2 for aplicativo para gestão de estoque"
  );
  assert.ok(
    APLICATIVO_ESTOQUE_SECTIONS.some((section) =>
      /entrada e saída de mercadoria/i.test(section.title)
    ),
    "expected an H2 for entrada e saída de mercadoria"
  );
  const blob = blobOf(APLICATIVO_ESTOQUE_SECTIONS, APLICATIVO_ESTOQUE_FAQS);
  assert.match(blob, /aplicativo para gestão de estoque/i);
});

test("pages sitemap lists the four niche URLs and drops /features/barcoding", async () => {
  const entries = await buildPagesSitemapEntries(
    "https://www.purplestock.com.br"
  );
  const urls = entries.map((entry) => entry.url);
  assert.ok(
    urls.includes(
      "https://www.purplestock.com.br/recursos/controle-de-estoque-com-codigo-de-barras"
    )
  );
  assert.ok(
    urls.includes(
      "https://www.purplestock.com.br/recursos/controle-de-ferramentas"
    )
  );
  assert.ok(
    urls.includes(
      "https://www.purplestock.com.br/recursos/sistema-de-controle-de-estoque"
    )
  );
  assert.ok(
    urls.includes(
      "https://www.purplestock.com.br/recursos/sistema-de-estoque-para-loja"
    )
  );
  assert.ok(
    !urls.includes("https://www.purplestock.com.br/features/barcoding")
  );
});

test("barcoding 308s to the Portuguese barcode money page", () => {
  const source = readFileSync(join(process.cwd(), "next.config.mjs"), "utf8");
  assert.match(source, /source: "\/features\/barcoding"/);
  assert.match(
    source,
    /destination: "\/recursos\/controle-de-estoque-com-codigo-de-barras"/
  );
});

test("featureHref sends barcoding to the Portuguese money page", () => {
  assert.equal(
    featureHref("barcoding"),
    "/recursos/controle-de-estoque-com-codigo-de-barras"
  );
});

test("nav secondary and features hub point barcoding to the PT URL", () => {
  const nav = readFileSync(
    join(process.cwd(), "components/navbar.tsx"),
    "utf8"
  );
  const secondaryBlock = nav.slice(
    nav.indexOf("const SECONDARY_FEATURE_LINKS")
  );
  assert.match(
    secondaryBlock,
    /\/recursos\/controle-de-estoque-com-codigo-de-barras/
  );
  assert.doesNotMatch(secondaryBlock, /href: "\/features\/barcoding"/);

  const featuresIndex = readFileSync(
    join(process.cwd(), "app/features/page.tsx"),
    "utf8"
  );
  assert.match(
    featuresIndex,
    /\/recursos\/controle-de-estoque-com-codigo-de-barras/
  );
  assert.doesNotMatch(featuresIndex, /href: "\/features\/barcoding"/);
});

test("recursos hub lists the four niche money pages", () => {
  const hub = readFileSync(
    join(process.cwd(), "app/recursos/page.tsx"),
    "utf8"
  );
  assert.match(hub, /\/recursos\/controle-de-estoque-com-codigo-de-barras/);
  assert.match(hub, /\/recursos\/controle-de-ferramentas/);
  assert.match(hub, /\/recursos\/sistema-de-controle-de-estoque/);
  assert.match(hub, /\/recursos\/sistema-de-estoque-para-loja/);
});

test("home playbook links the online system pillar", () => {
  const playbook = readFileSync(
    join(process.cwd(), "components/desktop-landing-playbook-sections.tsx"),
    "utf8"
  );
  assert.match(playbook, /\/recursos\/sistema-de-controle-de-estoque/);
});

test("barcode generator footer sends traffic to the barcode money page", () => {
  const footer = readFileSync(
    join(process.cwd(), "components/barcode-tool-seo-footer.tsx"),
    "utf8"
  );
  assert.match(footer, /CONTROLE_CODIGO_BARRAS_PATH/);
});

test("HowTo barcode blog and ferramentas blog CTA the money pages", async () => {
  const howTo = await getPostBySlug(
    "codigo-de-barras-no-estoque-como-implementar"
  );
  assert.ok(howTo);
  assert.match(
    howTo.content,
    /\/recursos\/controle-de-estoque-com-codigo-de-barras/
  );
  assert.doesNotMatch(howTo.content, /\/features\/barcoding/);

  const ferramentas = await getPostBySlug(
    "controle-ferramentas-obra-check-in-canteiro"
  );
  assert.ok(ferramentas);
  assert.match(ferramentas.content, /\/recursos\/controle-de-ferramentas/);
});

test("llms.txt cites the four niche money pages", async () => {
  const content = await buildLlmsTxtMarkdown();
  assert.match(content, /\/recursos\/controle-de-estoque-com-codigo-de-barras/);
  assert.match(content, /\/recursos\/controle-de-ferramentas/);
  assert.match(content, /\/recursos\/sistema-de-controle-de-estoque/);
  assert.match(content, /\/recursos\/sistema-de-estoque-para-loja/);
});

test("each niche money page wires ProductMoneyPage with SERP constants", () => {
  const pages = [
    "app/recursos/controle-de-estoque-com-codigo-de-barras/page.tsx",
    "app/recursos/controle-de-ferramentas/page.tsx",
    "app/recursos/sistema-de-controle-de-estoque/page.tsx",
    "app/recursos/sistema-de-estoque-para-loja/page.tsx",
  ];
  for (const relative of pages) {
    const source = readFileSync(join(process.cwd(), relative), "utf8");
    assert.match(source, /ProductMoneyPage/);
  }

  const barcodeLayout = readFileSync(
    join(
      process.cwd(),
      "app/recursos/controle-de-estoque-com-codigo-de-barras/layout.tsx"
    ),
    "utf8"
  );
  assert.match(barcodeLayout, /CONTROLE_CODIGO_BARRAS_PAGE_TITLE/);
  assert.match(barcodeLayout, /CONTROLE_CODIGO_BARRAS_PATH/);
});
