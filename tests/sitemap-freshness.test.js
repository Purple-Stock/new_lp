const test = require("node:test");
const assert = require("node:assert/strict");
const { analyzeBlogFreshness } = require("../scripts/lib/sitemap-freshness");

test("analyzeBlogFreshness passes when a post is within maxAgeDays", () => {
  const result = analyzeBlogFreshness(
    [{ date: new Date().toISOString().slice(0, 10) }],
    60
  );
  assert.equal(result.ok, true);
});

test("analyzeBlogFreshness fails when all posts are stale", () => {
  const result = analyzeBlogFreshness([{ date: "2024-01-01" }], 60);
  assert.equal(result.ok, false);
});
