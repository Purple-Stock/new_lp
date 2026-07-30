import { DesktopLanding } from "@/components/desktop-landing";
import { HomeBlogTeaser } from "@/components/home-blog-teaser";
import { JsonLd } from "@/components/json-ld";
import { getLatestPosts } from "@/lib/blog";
import { HOME_FAQ_PT } from "@/lib/home-faq";
import { buildPageMetadata } from "@/lib/metadata";
import { HOME_PAGE_DESCRIPTION, HOME_PAGE_TITLE } from "@/lib/seo-page-copy";
import { buildHomePageGraph } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: HOME_PAGE_TITLE,
  description: HOME_PAGE_DESCRIPTION,
  path: "/",
});

export default async function Home() {
  const latestPosts = await getLatestPosts(3);

  return (
    <>
      <JsonLd data={buildHomePageGraph({ faqs: HOME_FAQ_PT })} />
      <DesktopLanding beforeFooter={<HomeBlogTeaser posts={latestPosts} />} />
    </>
  );
}
