const test = require("node:test");
const assert = require("node:assert/strict");
const { parseCurlTimings, isTtfbWithinBudget } = require("../scripts/lib/ttfb");

test("parseCurlTimings extracts starttransfer seconds", () => {
  const parsed = parseCurlTimings("time_starttransfer: 0.043470\n");
  assert.equal(parsed.ttfbMs, 43);
});

test("isTtfbWithinBudget passes under 800ms", () => {
  assert.equal(isTtfbWithinBudget(400, 800), true);
  assert.equal(isTtfbWithinBudget(1200, 800), false);
});
