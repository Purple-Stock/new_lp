import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";
import {
  PRICING_PAGE_DESCRIPTION,
  PRICING_PAGE_TITLE,
} from "@/lib/seo-page-copy";

export const metadata = buildPageMetadata({
  title: PRICING_PAGE_TITLE,
  description: PRICING_PAGE_DESCRIPTION,
  path: "/precos",
});

export default function PrecosLayout({ children }: { children: ReactNode }) {
  return children;
}
