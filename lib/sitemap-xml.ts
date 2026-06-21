import type { SitemapEntry } from "@/lib/sitemap-blog";
import { formatSitemapLastMod } from "@/lib/sitemap-blog";

export function serializeSitemapXml(entries: SitemapEntry[]): string {
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${formatSitemapLastMod(entry.lastModified)}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}

export function serializeSitemapIndexXml(sitemapUrls: string[]): string {
  const items = sitemapUrls
    .map((url) => `  <sitemap>\n    <loc>${url}</loc>\n  </sitemap>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>`;
}

export const SITEMAP_CACHE_HEADERS = {
  "Content-Type": "application/xml; charset=utf-8",
  "Cache-Control":
    "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
} as const;
