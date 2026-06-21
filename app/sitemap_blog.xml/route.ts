import { getAllPosts } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site";
import { buildBlogSitemapEntries } from "@/lib/sitemap-blog";
import { serializeSitemapXml, SITEMAP_CACHE_HEADERS } from "@/lib/sitemap-xml";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = getSiteUrl();
  const posts = await getAllPosts();
  const entries = buildBlogSitemapEntries(baseUrl, posts);
  const xml = serializeSitemapXml(entries);

  return new Response(xml, { headers: SITEMAP_CACHE_HEADERS });
}
