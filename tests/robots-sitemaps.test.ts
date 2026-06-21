import test from "node:test";
import assert from "node:assert/strict";
import robots from "../app/robots";

test("robots declares sitemap index", () => {
  const config = robots();
  const sitemap = String(config.sitemap);

  assert.match(sitemap, /\/sitemap\.xml$/);
});
