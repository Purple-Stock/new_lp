import { getAllPosts, type BlogPostMeta } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site";
import { serializeSitemapXml, SITEMAP_CACHE_HEADERS } from "@/lib/sitemap-xml";

export type SitemapEntry = {
  url: string;
  lastModified: Date;
  changeFrequency: "daily" | "weekly" | "monthly";
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

export async function buildBlogSitemapResponse(): Promise<Response> {
  const baseUrl = getSiteUrl();
  const posts = await getAllPosts();
  const entries = buildBlogSitemapEntries(baseUrl, posts);
  const xml = serializeSitemapXml(entries);

  return new Response(xml, { headers: SITEMAP_CACHE_HEADERS });
}
