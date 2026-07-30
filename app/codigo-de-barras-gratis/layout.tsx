import type { ReactNode } from "react";
import { JsonLd } from "@/components/json-ld";
import { buildPageMetadata } from "@/lib/metadata";
import {
  BARCODE_TOOL_PAGE_DESCRIPTION,
  BARCODE_TOOL_PAGE_TITLE,
  BARCODE_TOOL_PATH,
} from "@/lib/seo-page-copy";
import { buildBarcodeToolSchema } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: BARCODE_TOOL_PAGE_TITLE,
  description: BARCODE_TOOL_PAGE_DESCRIPTION,
  path: BARCODE_TOOL_PATH,
});

export default function BarcodeGeneratorLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <JsonLd data={buildBarcodeToolSchema()} />
      {children}
    </>
  );
}
