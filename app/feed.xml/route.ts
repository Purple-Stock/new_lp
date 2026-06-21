import { getAllPosts } from "@/lib/blog";
import { getSiteUrl, SITE_NAME } from "@/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const baseUrl = getSiteUrl();
  const posts = (await getAllPosts()).slice(0, 20);
  const items = posts
    .map(
      (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${SITE_NAME} Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Artigos sobre controle de estoque e almoxarifado</description>
    <language>pt-BR</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
}
