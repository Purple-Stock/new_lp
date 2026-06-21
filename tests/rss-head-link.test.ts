import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join } from "node:path";

test("root layout renders explicit RSS alternate link in head", () => {
  const source = readFileSync(join(process.cwd(), "app/layout.tsx"), "utf8");

  assert.match(source, /rel="alternate"/);
  assert.match(source, /type="application\/rss\+xml"/);
  assert.match(source, /getBlogRssFeedHref/);
});
