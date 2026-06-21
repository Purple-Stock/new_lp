function daysBetween(dateIso, now = new Date()) {
  const parsed = new Date(dateIso);
  if (Number.isNaN(parsed.getTime())) return null;
  const diffMs = now.getTime() - parsed.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

function analyzeBlogFreshness(posts, maxAgeDays) {
  if (posts.length === 0) {
    return {
      ok: false,
      newestDate: null,
      daysSinceNewest: null,
      maxAgeDays,
    };
  }

  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const newestDate = sorted[0].date;
  const daysSinceNewest = daysBetween(newestDate);

  return {
    ok: typeof daysSinceNewest === "number" && daysSinceNewest <= maxAgeDays,
    newestDate,
    daysSinceNewest,
    maxAgeDays,
  };
}

module.exports = { analyzeBlogFreshness, daysBetween };
