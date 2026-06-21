import test from "node:test";
import assert from "node:assert/strict";
import {
  buildBlogSitemapEntries,
  formatSitemapLastMod,
  serializeSitemapXml,
} from "../lib/sitemap-blog";

test("formatSitemapLastMod uses YYYY-MM-DD date format", () => {
  assert.equal(
    formatSitemapLastMod(new Date("2026-07-15T00:00:00.000Z")),
    "2026-07-15"
  );
});

test("buildBlogSitemapEntries includes blog index and post URLs", () => {
  const entries = buildBlogSitemapEntries("https://www.purplestock.com.br", [
    {
      slug: "abc-curva-abc-estoque-pme",
      title: "Curva ABC",
      excerpt: "Excerpt",
      date: "2026-07-15",
      author: "Time Purple Stock",
      readingTime: "6 min",
      tags: ["Estoque"],
    },
  ]);

  assert.equal(entries.length, 2);
  assert.equal(entries[0].url, "https://www.purplestock.com.br/blog");
  assert.equal(
    entries[1].url,
    "https://www.purplestock.com.br/blog/abc-curva-abc-estoque-pme"
  );
});

test("serializeSitemapXml emits valid urlset with lastmod dates", () => {
  const xml = serializeSitemapXml([
    {
      url: "https://www.purplestock.com.br/blog/demo",
      lastModified: new Date("2026-06-21T00:00:00.000Z"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ]);

  assert.match(xml, /<urlset/);
  assert.match(xml, /<lastmod>2026-06-21<\/lastmod>/);
});

test("sitemap_blog route returns blog-only XML", async () => {
  const { GET } = await import("../app/sitemap_blog.xml/route");
  const response = await GET();
  const xml = await response.text();

  assert.equal(response.status, 200);
  assert.match(xml, /\/blog\//);
  assert.match(xml, /<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/);
  assert.doesNotMatch(xml, /\/features\//);
});
