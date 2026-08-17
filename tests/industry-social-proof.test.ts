import test from "node:test";
import assert from "node:assert/strict";
import { getIndustrySocialProof } from "../data/industry-social-proof";
import { getIndustryBySlug } from "../lib/industries-data";

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
