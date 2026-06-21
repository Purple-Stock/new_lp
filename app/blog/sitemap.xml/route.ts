import { buildBlogSitemapResponse } from "@/lib/sitemap-blog";

export const dynamic = "force-static";

export async function GET() {
  return buildBlogSitemapResponse();
}
