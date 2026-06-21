import { SITE_NAME } from "@/lib/site";

export const BLOG_RSS_PATH = "/feed.xml";

export function getBlogRssFeedTitle(): string {
  return `${SITE_NAME} Blog RSS`;
}

export function getBlogRssFeedHref(siteUrl: string): string {
  return new URL(BLOG_RSS_PATH, siteUrl).toString();
}
