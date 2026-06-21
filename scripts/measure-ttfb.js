#!/usr/bin/env node

const { execSync } = require("node:child_process");
const { parseCurlTimings, isTtfbWithinBudget } = require("./lib/ttfb");

const BASE = process.env.TTFB_BASE_URL || "https://www.purplestock.com.br";
const BUDGET_MS = Number(process.env.TTFB_BUDGET_MS || 800);
const PATHS = (process.env.TTFB_PATHS || "/,/blog,/sobre").split(",");

let failed = false;

for (const path of PATHS) {
  const url = `${BASE}${path}`;
  const out = execSync(
    `curl -sS -o /dev/null -w "time_starttransfer: %{time_starttransfer}\\n" "${url}"`,
    { encoding: "utf8" }
  );
  const { ttfbMs } = parseCurlTimings(out);
  const ok = isTtfbWithinBudget(ttfbMs, BUDGET_MS);
  console.log(
    `${ok ? "✅" : "❌"} ${url} — TTFB ${ttfbMs}ms (budget ${BUDGET_MS}ms)`
  );
  if (!ok) failed = true;
}

process.exitCode = failed ? 1 : 0;
