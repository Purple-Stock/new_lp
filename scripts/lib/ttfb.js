function parseCurlTimings(stdout) {
  const match = stdout.match(/time_starttransfer:\s*([\d.]+)/);
  const seconds = match ? Number(match[1]) : NaN;
  return {
    ttfbMs: Number.isFinite(seconds) ? Math.round(seconds * 1000) : null,
  };
}

function isTtfbWithinBudget(ttfbMs, budgetMs) {
  return typeof ttfbMs === "number" && ttfbMs <= budgetMs;
}

module.exports = { parseCurlTimings, isTtfbWithinBudget };
