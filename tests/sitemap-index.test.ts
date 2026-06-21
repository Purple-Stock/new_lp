import test from "node:test";
import assert from "node:assert/strict";
import { serializeSitemapIndexXml } from "../lib/sitemap-xml";

test("serializeSitemapIndexXml references pages and blog child sitemaps", () => {
  const xml = serializeSitemapIndexXml([
    "https://www.purplestock.com.br/sitemap-pages.xml",
    "https://www.purplestock.com.br/sitemap_blog.xml",
  ]);

  assert.match(xml, /<sitemapindex/);
  assert.match(xml, /sitemap-pages\.xml/);
  assert.match(xml, /sitemap_blog\.xml/);
});

test("sitemap index route lists child sitemaps", async () => {
  const { GET } = await import("../app/sitemap.xml/route");
  const response = await GET();
  const xml = await response.text();

  assert.equal(response.status, 200);
  assert.match(xml, /sitemap-pages\.xml/);
  assert.match(xml, /sitemap_blog\.xml/);
});
