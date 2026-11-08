import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";
import {
  CONTAESTOQUE_COMPARE_PAGE_DESCRIPTION,
  CONTAESTOQUE_COMPARE_PAGE_TITLE,
  CONTAESTOQUE_COMPARE_PATH,
} from "@/lib/seo-page-copy";

export const metadata = buildPageMetadata({
  title: CONTAESTOQUE_COMPARE_PAGE_TITLE,
  description: CONTAESTOQUE_COMPARE_PAGE_DESCRIPTION,
  path: CONTAESTOQUE_COMPARE_PATH,
});

export default function ContaestoqueCompareLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
