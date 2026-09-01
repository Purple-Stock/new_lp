import test from "node:test";
import assert from "node:assert/strict";
import { getIndustrySocialProof } from "../data/industry-social-proof";
import {
  getIndustryBySlug,
  getRelatedIndustries,
} from "../lib/industries-data";

test("events proof does not reuse audiovisual cinema copy", () => {
  const events = getIndustrySocialProof("events");
  const audiovisual = getIndustrySocialProof("audiovisual");
  const eventsBlob = JSON.stringify(events);
  const audiovisualFaqs = audiovisual.faqs.map((item) => item.q).join(" ");

  assert.notEqual(events.faqs.map((item) => item.q).join("|"), audiovisualFaqs);
  assert.doesNotMatch(eventsBlob, /cinema/i);
  assert.doesNotMatch(eventsBlob, /corpos, lentes/i);
  assert.match(eventsBlob, /carga|descarga|caminh[aã]o|d[ée]cor/i);
});

test("events industry has a long-tail headline", () => {
  const industry = getIndustryBySlug("events");
  assert.ok(industry?.seoHeadline);
  assert.match(String(industry?.seoHeadline), /evento/i);
  assert.notEqual(industry?.seoHeadline, industry?.name);
});

test("construction proof uses canteiro language and not default copy", () => {
  const construction = getIndustrySocialProof("construction");
  const fallback = getIndustrySocialProof("varejo");
  const blob = JSON.stringify(construction);

  assert.notEqual(
    construction.faqs.map((item) => item.q).join("|"),
    fallback.faqs.map((item) => item.q).join("|")
  );
  assert.match(blob, /canteiro|almoxarifado de obra|construtora/i);
  assert.match(blob, /ferramenta/i);
  assert.doesNotMatch(blob, /cinema|produtora audiovisual/i);
  assert.equal(
    construction.relatedBlogHref,
    "/blog/almoxarifado-de-obra-controle-materiais-canteiro"
  );
  assert.equal(construction.relatedPosts?.length, 3);
});

test("construction related industries prefer electrical and manufatura", () => {
  const slugs = getRelatedIndustries("construction").map((item) => item.slug);
  assert.ok(slugs.includes("electrical"));
  assert.ok(slugs.includes("manufatura"));
  assert.ok(!slugs.includes("construction"));
});

test("construction industry has a long-tail headline", () => {
  const industry = getIndustryBySlug("construction");
  assert.ok(industry?.seoHeadline);
  assert.match(String(industry?.seoHeadline), /almoxarifado de obra/i);
  assert.match(String(industry?.description), /canteiro/i);
  assert.notEqual(industry?.seoHeadline, industry?.name);
  assert.ok(industry?.imageAlt);
  assert.match(String(industry?.imageAlt), /canteiro|obras/i);
});
