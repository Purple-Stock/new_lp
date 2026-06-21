import { getAllPosts } from "@/lib/blog";
import { getSiteUrl } from "@/lib/site";
import {
  buildBlogSitemapEntries,
  serializeSitemapXml,
} from "@/lib/sitemap-blog";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = getSiteUrl();
  const posts = await getAllPosts();
  const entries = buildBlogSitemapEntries(baseUrl, posts);
  const xml = serializeSitemapXml(entries);

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control":
        "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
