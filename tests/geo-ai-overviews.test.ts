import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { HOME_FAQ_PT } from "../lib/home-faq";
import {
  BARCODE_WHAT_IS_BODY,
  BARCODE_WHAT_IS_TITLE,
  CITABLE_PASSAGE_MAX_WORDS,
  CITABLE_PASSAGE_MIN_WORDS,
  GEO_CONTENT_UPDATED_AT,
  HOME_WHAT_IS_BODY,
  HOME_WHAT_IS_TITLE,
  countPassageWords,
  splitPassageParagraphs,
} from "../lib/geo-answer-blocks";
import { getBarcodeToolSeoCopy } from "../lib/barcode-tool-seo-content";
import { getLandingPlaybook } from "../lib/desktop-landing-copy";
import { APLICATIVO_ESTOQUE_FAQS } from "../lib/product-money-pages";
import {
  buildBarcodeToolSchema,
  buildHomePageGraph,
} from "../lib/structured-data";
import { TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT } from "../lib/pricing";
import robots from "../app/robots";
import { translations } from "../utils/translations";

function assertCitablePassage(body: string, label: string) {
  const words = countPassageWords(body);
  assert.ok(
    words >= CITABLE_PASSAGE_MIN_WORDS && words <= CITABLE_PASSAGE_MAX_WORDS,
    `${label} has ${words} words; expected ${CITABLE_PASSAGE_MIN_WORDS}-${CITABLE_PASSAGE_MAX_WORDS}`
  );
}

function mdxBody(slug: string): string {
  const raw = readFileSync(
    join(process.cwd(), "content/blog", `${slug}.mdx`),
    "utf8"
  );
  const parts = raw.split("---");
  return parts.slice(2).join("---");
}

function robotsUserAgents(): string[] {
  const config = robots();
  const rules = Array.isArray(config.rules) ? config.rules : [config.rules];
  return rules.flatMap((rule) => {
    if (!rule?.userAgent) return [];
    return Array.isArray(rule.userAgent) ? rule.userAgent : [rule.userAgent];
  });
}

test("home what-is block is a self-contained AI citation passage", () => {
  assert.equal(HOME_WHAT_IS_TITLE, "O que é Purple Stock?");
  assert.match(HOME_WHAT_IS_BODY, /^Purple Stock é um sistema de estoque/i);
  assert.match(HOME_WHAT_IS_BODY, /QR Code/i);
  assert.match(HOME_WHAT_IS_BODY, /check-in/i);
  assert.match(HOME_WHAT_IS_BODY, /R\$ 99/);
  assert.match(HOME_WHAT_IS_BODY, /7 dias|sete dias/i);
  assert.doesNotMatch(HOME_WHAT_IS_BODY, /plataforma avançada/i);
  assert.doesNotMatch(HOME_WHAT_IS_BODY.toLowerCase(), /nfc-e/);
  assert.doesNotMatch(HOME_WHAT_IS_BODY.toLowerCase(), /\bpdv\b/);
  assertCitablePassage(HOME_WHAT_IS_BODY, "HOME_WHAT_IS_BODY");
  assert.equal(splitPassageParagraphs(HOME_WHAT_IS_BODY).length, 3);
});

test("barcode what-is block answers gerador de código de barras without GS1 registration", () => {
  assert.match(BARCODE_WHAT_IS_TITLE, /gerador de código de barras/i);
  assert.match(BARCODE_WHAT_IS_BODY, /gerador de código de barras grátis é/i);
  assert.match(BARCODE_WHAT_IS_BODY, /EAN-13/i);
  assert.match(BARCODE_WHAT_IS_BODY, /Code 128/i);
  assert.match(BARCODE_WHAT_IS_BODY, /GS1|GTIN/i);
  assert.match(BARCODE_WHAT_IS_BODY, /Purple Stock/);
  assertCitablePassage(BARCODE_WHAT_IS_BODY, "BARCODE_WHAT_IS_BODY");
  assert.equal(splitPassageParagraphs(BARCODE_WHAT_IS_BODY).length, 3);
});

test("PT barcode SEO copy exposes the definition block used on the page", () => {
  const copy = getBarcodeToolSeoCopy("pt");
  assert.equal(copy.definitionTitle, BARCODE_WHAT_IS_TITLE);
  assert.equal(copy.definitionBody, BARCODE_WHAT_IS_BODY);
  assert.match(
    copy.faqItems[0].question,
    /O que é um gerador de código de barras/i
  );
});

test("barcode footer renders the definition heading before how-to", () => {
  const source = readFileSync(
    join(process.cwd(), "components/barcode-tool-seo-footer.tsx"),
    "utf8"
  );
  const definitionAt = source.indexOf("definitionTitle");
  const howToAt = source.indexOf("howToTitle");
  assert.ok(definitionAt > 0, "expected definitionTitle in the footer");
  assert.ok(howToAt > definitionAt, "definition must appear before how-to");
});

test("home FAQ leads with what Purple Stock is and keeps the no-card trial", () => {
  assert.equal(HOME_FAQ_PT[0].q, "O que é Purple Stock?");
  assert.match(HOME_FAQ_PT[0].a, /sistema de estoque com QR Code/i);
  assert.ok(
    HOME_FAQ_PT[0].a.includes(TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT),
    HOME_FAQ_PT[0].a
  );
  const trialFaq = HOME_FAQ_PT.find((item) => /testar/i.test(item.q));
  assert.ok(trialFaq);
  assert.match(trialFaq!.a, /sem cartão/i);
});

test("home playbook renders the what-is passage and a question how-it-works heading", () => {
  const playbook = getLandingPlaybook("pt");
  assert.match(playbook.howItWorksTitle, /\?$/);
  assert.match(playbook.howItWorksTitle, /estoque/i);

  const sections = readFileSync(
    join(process.cwd(), "components/desktop-landing-playbook-sections.tsx"),
    "utf8"
  );
  assert.match(sections, /HOME_WHAT_IS_TITLE/);
  assert.match(sections, /HOME_WHAT_IS_BODY/);
});

test("aplicativo money FAQ answers what the inventory app is", () => {
  assert.match(
    APLICATIVO_ESTOQUE_FAQS[0].q,
    /O que é um aplicativo para controle de estoque/i
  );
  assert.match(APLICATIVO_ESTOQUE_FAQS[0].a, /QR Code/i);
  assert.match(APLICATIVO_ESTOQUE_FAQS[0].a, /celular/i);
});

test("llms.txt is a citable Purple Stock brief, not a stack dump", async () => {
  const { GET } = await import("../app/llms.txt/route");
  const content = await (await GET()).text();

  assert.match(content, /^# Purple Stock\n/m);
  assert.doesNotMatch(content, /^# PurpleStock/m);
  assert.doesNotMatch(content, /PurpleStock é/);
  assert.doesNotMatch(content, /Plataforma avançada/i);
  assert.match(content, /Purple Stock é um sistema de estoque/i);
  assert.match(content, /## Fatos/);
  assert.match(content, /R\$ 99/);
  assert.match(content, /\/codigo-de-barras-gratis/);
  assert.match(content, /\/recursos\/aplicativo-de-estoque/);
  assert.match(content, /\/industrias\/automotivo/);
  assert.match(content, /\/glossario\/almoxarifado-de-obra/);
  assert.doesNotMatch(content, /\/industrias\/varejo/);
  assert.doesNotMatch(content, /\/api\)/);
});

test("llm.txt aliases the same llms.txt brief", async () => {
  const llms = await import("../app/llms.txt/route");
  const llm = await import("../app/llm.txt/route");
  const a = await (await llms.GET()).text();
  const b = await (await llm.GET()).text();
  assert.equal(b, a);
});

test("robots explicitly allow AI search crawlers", () => {
  const agents = robotsUserAgents();
  for (const agent of [
    "GPTBot",
    "OAI-SearchBot",
    "ChatGPT-User",
    "ClaudeBot",
    "PerplexityBot",
    "Google-Extended",
  ]) {
    assert.ok(agents.includes(agent), `missing ${agent}`);
  }
});

test("home and barcode schemas carry dateModified for AI freshness", () => {
  const home = buildHomePageGraph();
  const page = home["@graph"].find((node) => node["@type"] === "WebPage") as {
    dateModified?: string;
  };
  assert.equal(page.dateModified, GEO_CONTENT_UPDATED_AT);

  const barcode = buildBarcodeToolSchema();
  assert.equal(barcode.dateModified, GEO_CONTENT_UPDATED_AT);
  assert.ok(!("FAQPage" in barcode));
});

test("AI-cited blog posts open with a definition sentence", () => {
  assert.match(
    mdxBody("como-usar-qr-code-controle-estoque"),
    /Controle de estoque com QR Code é/
  );
  assert.match(
    mdxBody("organizar-almoxarifado-qr-code"),
    /Organizar o almoxarifado com QR Code é/
  );
  assert.match(
    mdxBody("como-implantar-qr-code-no-almoxarifado"),
    /Implantar QR Code no almoxarifado é/
  );
});

test("glossary hub on-page lede is a definition, not a brochure", () => {
  assert.match(translations.pt.glossary.description, /Glossário de estoque é/i);
  assert.match(translations.pt.glossary.description, /almoxarifado/i);
});
