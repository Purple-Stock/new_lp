import test from "node:test";
import assert from "node:assert/strict";
import robots from "../app/robots";

test("robots declares main and blog sitemaps", () => {
  const config = robots();
  const sitemaps = Array.isArray(config.sitemap)
    ? config.sitemap
    : [config.sitemap];

  assert.equal(sitemaps.length, 2);
  assert.match(String(sitemaps[0]), /\/sitemap\.xml$/);
  assert.match(String(sitemaps[1]), /\/sitemap_blog\.xml$/);
});
