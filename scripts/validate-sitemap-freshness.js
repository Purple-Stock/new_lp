#!/usr/bin/env node

const fs = require("node:fs/promises");
const path = require("node:path");
const matter = require("gray-matter");
const { analyzeBlogFreshness } = require("./lib/sitemap-freshness");

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const MAX_AGE_DAYS = Number(process.env.SITEMAP_MAX_AGE_DAYS || 60);

async function loadPostDates() {
  const entries = await fs.readdir(BLOG_DIR, { withFileTypes: true });
  const mdxFiles = entries.filter(
    (entry) => entry.isFile() && entry.name.endsWith(".mdx")
  );

  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      const raw = await fs.readFile(path.join(BLOG_DIR, file.name), "utf8");
      const { data } = matter(raw);
      return { date: String(data.date ?? "") };
    })
  );

  return posts.filter((post) => post.date);
}

async function validateSitemapFreshness() {
  const posts = await loadPostDates();
  const result = analyzeBlogFreshness(posts, MAX_AGE_DAYS);

  if (result.ok) {
    console.log(
      `✅ Blog freshness OK — newest post ${result.newestDate} (${result.daysSinceNewest} days ago, budget ${MAX_AGE_DAYS}d)`
    );
    return true;
  }

  console.error(
    `❌ Blog freshness stale — newest post ${result.newestDate ?? "unknown"} (${result.daysSinceNewest ?? "?"} days ago, budget ${MAX_AGE_DAYS}d)`
  );
  return false;
}

if (require.main === module) {
  validateSitemapFreshness().then((ok) => {
    process.exitCode = ok ? 0 : 1;
  });
}

module.exports = { validateSitemapFreshness };
