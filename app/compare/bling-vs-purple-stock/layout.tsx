import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";
import {
  BLING_COMPARE_PAGE_DESCRIPTION,
  BLING_COMPARE_PAGE_TITLE,
  BLING_COMPARE_PATH,
} from "@/lib/seo-page-copy";

export const metadata = buildPageMetadata({
  title: BLING_COMPARE_PAGE_TITLE,
  description: BLING_COMPARE_PAGE_DESCRIPTION,
  path: BLING_COMPARE_PATH,
});

export default function BlingCompareLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
