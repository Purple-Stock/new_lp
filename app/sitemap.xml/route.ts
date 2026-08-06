import { getSiteUrl } from "@/lib/site";
import {
  serializeSitemapIndexXml,
  SITEMAP_CACHE_HEADERS,
} from "@/lib/sitemap-xml";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = getSiteUrl();
  // Canonical blog child is /blog/sitemap.xml. Keep /sitemap_blog.xml as a
  // legacy alias route (same payload) but do not list it twice in the index.
  const xml = serializeSitemapIndexXml([
    `${baseUrl}/sitemap-pages.xml`,
    `${baseUrl}/blog/sitemap.xml`,
  ]);

  return new Response(xml, { headers: SITEMAP_CACHE_HEADERS });
}
