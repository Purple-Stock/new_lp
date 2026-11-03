import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";
import {
  GLOSSARIO_PAGE_DESCRIPTION,
  GLOSSARIO_PAGE_TITLE,
  GLOSSARIO_PATH,
} from "@/lib/seo-page-copy";

export const metadata = buildPageMetadata({
  title: GLOSSARIO_PAGE_TITLE,
  description: GLOSSARIO_PAGE_DESCRIPTION,
  path: GLOSSARIO_PATH,
});

export default function GlossarioLayout({ children }: { children: ReactNode }) {
  return children;
}
