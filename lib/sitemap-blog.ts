import type { BlogPostMeta } from "@/lib/blog";

export type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: "weekly" | "monthly";
  priority: number;
};

export function formatSitemapLastMod(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function buildBlogSitemapEntries(
  baseUrl: string,
  posts: BlogPostMeta[]
): SitemapEntry[] {
  const newestPostDate = posts[0]?.date ? new Date(posts[0].date) : new Date();

  return [
    {
      url: `${baseUrl}/blog`,
      lastModified: newestPostDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}

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
