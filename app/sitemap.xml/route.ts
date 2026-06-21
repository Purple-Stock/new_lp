import { getSiteUrl } from "@/lib/site";
import {
  serializeSitemapIndexXml,
  SITEMAP_CACHE_HEADERS,
} from "@/lib/sitemap-xml";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = getSiteUrl();
  const xml = serializeSitemapIndexXml([
    `${baseUrl}/sitemap-pages.xml`,
    `${baseUrl}/blog/sitemap.xml`,
    `${baseUrl}/sitemap_blog.xml`,
  ]);

  return new Response(xml, { headers: SITEMAP_CACHE_HEADERS });
}
