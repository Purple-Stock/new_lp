import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { SITE_FAVICON_SVG_DATA_URL } from "../lib/site";

test("root layout renders explicit RSS alternate link in head", () => {
  const source = readFileSync(join(process.cwd(), "app/layout.tsx"), "utf8");

  assert.match(source, /rel="alternate"/);
  assert.match(source, /type="application\/rss\+xml"/);
  assert.match(source, /getBlogRssFeedHref/);
  assert.doesNotMatch(source, /v0\.dev/);
  assert.match(source, /strategy="lazyOnload"/);
  assert.doesNotMatch(source, /beforeInteractive/);
  assert.match(source, /SITE_FAVICON_SVG_DATA_URL/);
  assert.doesNotMatch(source, /url: "\/logo\.png"/);
});

test("favicon is the app hexagon SVG, not the rounded-square logo.png", () => {
  assert.match(SITE_FAVICON_SVG_DATA_URL, /image\/svg\+xml/);
  assert.match(SITE_FAVICON_SVG_DATA_URL, /7D3C98/);
  assert.doesNotMatch(SITE_FAVICON_SVG_DATA_URL, /rx=/);
});
