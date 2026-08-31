import test from "node:test";
import assert from "node:assert/strict";
import { buildPagesSitemapEntries } from "../lib/sitemap-pages";

test("pages sitemap omits noindex tags and the blog hub", async () => {
  const entries = await buildPagesSitemapEntries(
    "https://www.purplestock.com.br"
  );
  const urls = entries.map((entry) => entry.url);

  assert.ok(urls.includes("https://www.purplestock.com.br"));
  assert.ok(urls.includes("https://www.purplestock.com.br/precos"));
  assert.ok(
    urls.includes("https://www.purplestock.com.br/politica-de-privacidade")
  );
  assert.ok(urls.includes("https://www.purplestock.com.br/termos-de-uso"));
  assert.ok(!urls.some((url) => url.includes("/blog/tag/")));
  assert.ok(!urls.includes("https://www.purplestock.com.br/blog"));
  assert.ok(urls.includes("https://www.purplestock.com.br/features"));
  assert.ok(urls.includes("https://www.purplestock.com.br/recursos"));
  assert.ok(
    urls.includes("https://www.purplestock.com.br/industrias/audiovisual")
  );
  assert.ok(!urls.includes("https://www.purplestock.com.br/industrias/beauty"));
  assert.ok(
    !urls.includes("https://www.purplestock.com.br/features/warehouse-control")
  );
  assert.ok(
    !urls.includes("https://www.purplestock.com.br/glossario/lead-time")
  );
});
