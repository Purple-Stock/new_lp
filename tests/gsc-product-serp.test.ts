import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { getPostBySlug } from "../lib/blog";
import {
  APLICATIVO_DE_ESTOQUE_PAGE_DESCRIPTION,
  APLICATIVO_DE_ESTOQUE_PAGE_TITLE,
  APLICATIVO_DE_ESTOQUE_PATH,
  VS_PLANILHA_PAGE_DESCRIPTION,
  VS_PLANILHA_PAGE_TITLE,
  VS_PLANILHA_PATH,
} from "../lib/seo-page-copy";
import {
  buildGlossaryTermDescription,
  buildGlossaryTermTitle,
} from "../lib/glossary-term-seo";
import { getIndustrySerpCopy } from "../lib/industry-page-seo";

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

test("aplicativo money page SERP matches the GSC query", () => {
  assert.equal(APLICATIVO_DE_ESTOQUE_PATH, "/recursos/aplicativo-de-estoque");
  assert.match(
    APLICATIVO_DE_ESTOQUE_PAGE_TITLE,
    /Aplicativo para Controle de Estoque/i
  );
  assert.match(APLICATIVO_DE_ESTOQUE_PAGE_TITLE, /QR/i);
  assertSerpTitle(APLICATIVO_DE_ESTOQUE_PAGE_TITLE);
  assert.match(APLICATIVO_DE_ESTOQUE_PAGE_DESCRIPTION, /celular/i);
  assert.match(APLICATIVO_DE_ESTOQUE_PAGE_DESCRIPTION, /59/);
  assertSerpDescription(APLICATIVO_DE_ESTOQUE_PAGE_DESCRIPTION);
});

test("vs planilha money page SERP is a migration query", () => {
  assert.equal(VS_PLANILHA_PATH, "/purple-stock-vs-planilha");
  assert.match(VS_PLANILHA_PAGE_TITLE, /Planilha/i);
  assert.match(VS_PLANILHA_PAGE_TITLE, /migrar/i);
  assertSerpTitle(VS_PLANILHA_PAGE_TITLE);
  assert.match(VS_PLANILHA_PAGE_DESCRIPTION, /planilha/i);
  assert.match(VS_PLANILHA_PAGE_DESCRIPTION, /59/);
  assertSerpDescription(VS_PLANILHA_PAGE_DESCRIPTION);
});

test("blog aplicativo SERP uses the query people already see in GSC", async () => {
  const post = await getPostBySlug("aplicativo-para-controle-de-estoque");
  assert.ok(post);
  assert.match(post.meta.title, /Aplicativo para Controle de Estoque/i);
  assertSerpTitle(post.meta.title);
  assertSerpDescription(post.meta.excerpt);
  assert.match(post.content, /\/recursos\/aplicativo-de-estoque/);
  assert.match(post.content, /\/purple-stock-vs-planilha/);
});

test("blog almoxarifado de obra snippet sells the canteiro flow", async () => {
  const post = await getPostBySlug(
    "almoxarifado-de-obra-controle-materiais-canteiro"
  );
  assert.ok(post);
  assert.match(post.meta.title, /Almoxarifado de Obra/i);
  assert.match(post.meta.excerpt, /QR/i);
  assert.match(post.meta.excerpt, /7 dias|equipe/i);
  assertSerpTitle(post.meta.title);
  assertSerpDescription(post.meta.excerpt);
});

test("blog QR SERP names controle de estoque com QR Code", async () => {
  const post = await getPostBySlug("como-usar-qr-code-controle-estoque");
  assert.ok(post);
  assert.match(post.meta.title, /Controle de Estoque com QR Code/i);
  assertSerpTitle(post.meta.title);
  assertSerpDescription(post.meta.excerpt);
});

test("blog organizar almoxarifado title fits the SERP", async () => {
  const post = await getPostBySlug("organizar-almoxarifado-qr-code");
  assert.ok(post);
  assert.match(post.meta.title, /Organizar Almoxarifado/i);
  assert.match(post.meta.title, /QR Code/i);
  assertSerpTitle(post.meta.title);
  assertSerpDescription(post.meta.excerpt);
});

test("glossary almoxarifado-de-obra title is clickable, not only a definition", () => {
  const title = buildGlossaryTermTitle(
    "Almoxarifado de Obra",
    "almoxarifado-de-obra"
  );
  assert.match(title, /Almoxarifado de Obra/i);
  assert.match(title, /canteiro/i);
  assert.doesNotMatch(title, /o que é/i);
  assertSerpTitle(title.replace(/\s*\|\s*Purple Stock$/, ""));
  const description = buildGlossaryTermDescription({
    slug: "almoxarifado-de-obra",
    term: "Almoxarifado de Obra",
    category: "inventory",
    shortDefinition: "should not win",
    definition: "definition body",
    example: "example body",
    formula: "",
    formulaExplanation: "",
    faq: [
      { question: "q1", answer: "a1" },
      { question: "q2", answer: "a2" },
      { question: "q3", answer: "a3" },
    ],
    relatedTerms: [],
    relatedFeatures: [],
    relatedIndustries: [],
  });
  assert.match(description, /QR/i);
  assertSerpDescription(description);
});

test("audiovisual SERP matches empresas de cinema", () => {
  const copy = getIndustrySerpCopy("audiovisual");
  assert.ok(copy);
  assert.match(copy.title, /audiovisuais/i);
  assert.match(copy.title, /cinema/i);
  assertSerpTitle(copy.title.replace(/\s*\|\s*Purple Stock$/, ""));
  assert.match(copy.description, /empresas de cinema/i);
  assertSerpDescription(copy.description);
});

test("construction SERP title stays short enough for the brand suffix", () => {
  const copy = getIndustrySerpCopy("construction");
  assert.ok(copy);
  assert.match(copy.title, /Almoxarifado de Obra/i);
  assert.match(copy.title, /QR Code/i);
  assert.ok(copy.title.length <= 45, copy.title);
  assertSerpDescription(copy.description);
});

test("nav and home playbook send product queries, not the barcode magnet", () => {
  const nav = readFileSync(
    join(process.cwd(), "components/navbar.tsx"),
    "utf8"
  );
  const primaryBlock = nav.slice(
    nav.indexOf("const PRIMARY_FEATURE_LINKS"),
    nav.indexOf("const SECONDARY_FEATURE_LINKS")
  );
  assert.match(primaryBlock, /\/recursos\/aplicativo-de-estoque/);
  assert.doesNotMatch(primaryBlock, /\/features\/barcoding/);

  const playbook = readFileSync(
    join(process.cwd(), "components/desktop-landing-playbook-sections.tsx"),
    "utf8"
  );
  const aplicativoAt = playbook.indexOf("/recursos/aplicativo-de-estoque");
  const vsPlanilhaAt = playbook.indexOf("/purple-stock-vs-planilha");
  const barcodeAt = playbook.indexOf("/codigo-de-barras-gratis");
  assert.ok(aplicativoAt > 0);
  assert.ok(vsPlanilhaAt > 0);
  assert.equal(barcodeAt, -1);
});
