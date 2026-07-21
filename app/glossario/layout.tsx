import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Glossário de Estoque: MOQ, EOQ, Ponto de Reposição e Mais",
  description:
    "Glossário de estoque e almoxarifado para PME: definições curtas, fórmulas e exemplos de MOQ, EOQ, ponto de reposição, ruptura e mais.",
  path: "/glossario",
});

export default function GlossarioLayout({ children }: { children: ReactNode }) {
  return children;
}
