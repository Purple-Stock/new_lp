import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { getPostBySlug } from "../lib/blog";
import { getBarcodeToolSeoCopy } from "../lib/barcode-tool-seo-content";
import { countCopyWords } from "../lib/product-money-pages";
import {
  BLING_COMPARE_FAQS,
  BLING_COMPARE_H1,
  BLING_COMPARE_ROWS,
  BLING_COMPARE_SECTIONS,
  CONTAESTOQUE_COMPARE_FAQS,
  CONTAESTOQUE_COMPARE_H1,
  CONTAESTOQUE_COMPARE_ROWS,
  CONTAESTOQUE_COMPARE_SECTIONS,
} from "../lib/product-compare-pages";
import {
  BARCODE_PRINT_PATH,
  BARCODE_TOOL_PAGE_DESCRIPTION,
  BLING_COMPARE_PAGE_TITLE,
  BLING_COMPARE_PATH,
  CONTAESTOQUE_COMPARE_PAGE_TITLE,
  CONTAESTOQUE_COMPARE_PATH,
} from "../lib/seo-page-copy";
import { buildPagesSitemapEntries } from "../lib/sitemap-pages";
import { barcodeGeneratorPt } from "../utils/translations/barcode-generator";

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

test("barcode SERP and H1 talk about printing labels", () => {
  assert.match(BARCODE_TOOL_PAGE_DESCRIPTION, /imprim/i);
  assert.match(BARCODE_TOOL_PAGE_DESCRIPTION, /A4|térmica/i);
  assertSerpDescription(BARCODE_TOOL_PAGE_DESCRIPTION);
  assert.match(barcodeGeneratorPt.title, /Imprimir/i);
});

test("barcode FAQ covers A4 sheet and thermal print without login", () => {
  const copy = getBarcodeToolSeoCopy("pt");
  const faq = copy.faqItems
    .map((item) => `${item.question} ${item.answer}`)
    .join(" ");
  assert.match(copy.benefitChips.join(" "), /imprim/i);
  assert.match(faq, /A4/i);
  assert.match(faq, /térmica|Zebra/i);
  assert.match(faq, /lote|CSV|Excel/i);
});

test("print aliases 301 to the ranking barcode URL", () => {
  assert.equal(BARCODE_PRINT_PATH, "/print");
  const source = readFileSync(join(process.cwd(), "next.config.mjs"), "utf8");
  assert.match(source, /source: "\/print"/);
  assert.match(source, /source: "\/imprimir-codigo-de-barras"/);
  assert.match(source, /codigo-de-barras-gratis#imprimir/);
});

test("print panel lives on the magnet page and prints the sheet", () => {
  const page = readFileSync(
    join(process.cwd(), "app/codigo-de-barras-gratis/page.tsx"),
    "utf8"
  );
  const panel = readFileSync(
    join(process.cwd(), "components/barcode-label-print-panel.tsx"),
    "utf8"
  );
  assert.match(page, /BarcodeLabelPrintPanel/);
  assert.match(panel, /id="imprimir"/);
  assert.match(panel, /window\.print/);
  assert.match(panel, /parseLabelCsv/);
  assert.doesNotMatch(panel, /login|cadastro obrigatório/i);
});

test("bling and contaestoque compare pages are money pages in the sitemap", async () => {
  assert.equal(BLING_COMPARE_PATH, "/compare/bling-vs-purple-stock");
  assert.equal(
    CONTAESTOQUE_COMPARE_PATH,
    "/compare/contaestoque-vs-purple-stock"
  );
  assertSerpTitle(BLING_COMPARE_PAGE_TITLE);
  assertSerpTitle(CONTAESTOQUE_COMPARE_PAGE_TITLE);
  assert.match(BLING_COMPARE_PAGE_TITLE, /Bling/i);
  assert.match(CONTAESTOQUE_COMPARE_PAGE_TITLE, /ContaEstoque/i);

  const urls = (
    await buildPagesSitemapEntries("https://www.purplestock.com.br")
  ).map((entry) => entry.url);
  assert.ok(
    urls.includes(`https://www.purplestock.com.br${BLING_COMPARE_PATH}`)
  );
  assert.ok(
    urls.includes(`https://www.purplestock.com.br${CONTAESTOQUE_COMPARE_PATH}`)
  );
});

test("bling compare copy is locação vs ERP de loja, with eight rows", () => {
  const blob = blobOf(BLING_COMPARE_SECTIONS, BLING_COMPARE_FAQS);
  assert.ok(countCopyWords(blob) >= 600, `bling words=${countCopyWords(blob)}`);
  assert.match(BLING_COMPARE_H1, /alternativa a Bling/i);
  assert.equal(BLING_COMPARE_ROWS.length, 8);
  assert.match(blob, /QR/i);
  assert.match(blob, /locação|locadora/i);
  assert.match(blob, /R\$ 99,00/);
  assert.doesNotMatch(blob.toLowerCase(), /nfc-e/);
  assert.doesNotMatch(blob, /30 dias/);
});

test("contaestoque compare copy is locação vs app de loja", () => {
  const blob = blobOf(CONTAESTOQUE_COMPARE_SECTIONS, CONTAESTOQUE_COMPARE_FAQS);
  assert.ok(
    countCopyWords(blob) >= 600,
    `contaestoque words=${countCopyWords(blob)}`
  );
  assert.match(CONTAESTOQUE_COMPARE_H1, /ContaEstoque/i);
  assert.equal(CONTAESTOQUE_COMPARE_ROWS.length, 8);
  assert.match(blob, /QR/i);
  assert.match(blob, /check-in|maleta|palco/i);
  assert.doesNotMatch(blob.toLowerCase(), /nfc-e/);
});

test("glossary-style posts link the magnet and carry a formula or GS1 rule", async () => {
  const posts = [
    {
      slug: "dias-de-estoque-na-mao-doh",
      title: /dias de estoque na mão|DOH/i,
      body: /estoque médio|CMV|365/i,
    },
    {
      slug: "sku-vs-qr-vs-codigo-de-barras",
      title: /SKU vs QR/i,
      body: /EAN|GS1/i,
    },
    {
      slug: "etiqueta-que-nao-le",
      title: /etiqueta que não lê/i,
      body: /quiet zone/i,
    },
  ] as const;

  for (const spec of posts) {
    const post = await getPostBySlug(spec.slug);
    assert.ok(post, `missing post ${spec.slug}`);
    assert.match(post.meta.title, spec.title);
    assertSerpTitle(post.meta.title);
    assertSerpDescription(post.meta.excerpt);
    assert.match(post.content, spec.body);
    assert.match(post.content, /\/codigo-de-barras-gratis/);
    assert.ok(
      countCopyWords(post.content) >= 800,
      `${spec.slug} words=${countCopyWords(post.content)}`
    );
  }
});
