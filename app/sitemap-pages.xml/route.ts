import { getSiteUrl } from "@/lib/site";
import { buildPagesSitemapEntries } from "@/lib/sitemap-pages";
import { serializeSitemapXml, SITEMAP_CACHE_HEADERS } from "@/lib/sitemap-xml";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = getSiteUrl();
  const entries = await buildPagesSitemapEntries(baseUrl);

  return new Response(serializeSitemapXml(entries), {
    headers: SITEMAP_CACHE_HEADERS,
  });
}
