import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";
import {
  CONTROLE_FERRAMENTAS_PAGE_DESCRIPTION,
  CONTROLE_FERRAMENTAS_PAGE_TITLE,
  CONTROLE_FERRAMENTAS_PATH,
} from "@/lib/seo-page-copy";

export const metadata = buildPageMetadata({
  title: CONTROLE_FERRAMENTAS_PAGE_TITLE,
  description: CONTROLE_FERRAMENTAS_PAGE_DESCRIPTION,
  path: CONTROLE_FERRAMENTAS_PATH,
});

export default function ControleFerramentasLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
