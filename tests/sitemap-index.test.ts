import test from "node:test";
import assert from "node:assert/strict";
import { serializeSitemapIndexXml } from "../lib/sitemap-xml";

test("serializeSitemapIndexXml references pages and blog child sitemaps", () => {
  const xml = serializeSitemapIndexXml([
    "https://www.purplestock.com.br/sitemap-pages.xml",
    "https://www.purplestock.com.br/blog/sitemap.xml",
    "https://www.purplestock.com.br/sitemap_blog.xml",
  ]);

  assert.match(xml, /<sitemapindex/);
  assert.match(xml, /sitemap-pages\.xml/);
  assert.match(xml, /\/blog\/sitemap\.xml/);
  assert.match(xml, /sitemap_blog\.xml/);
});

test("sitemap index route lists child sitemaps", async () => {
  const { GET } = await import("../app/sitemap.xml/route");
  const response = await GET();
  const xml = await response.text();

  assert.equal(response.status, 200);
  assert.match(xml, /sitemap-pages\.xml/);
  assert.match(xml, /\/blog\/sitemap\.xml/);
  assert.match(xml, /sitemap_blog\.xml/);
});

test("blog sitemap route mirrors sitemap_blog.xml", async () => {
  const blogRoute = await import("../app/blog/sitemap.xml/route");
  const legacyRoute = await import("../app/sitemap_blog.xml/route");
  const [blogResponse, legacyResponse] = await Promise.all([
    blogRoute.GET(),
    legacyRoute.GET(),
  ]);

  assert.equal(await blogResponse.text(), await legacyResponse.text());
});
