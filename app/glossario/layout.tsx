import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/metadata"

export const metadata = buildPageMetadata({
  title: "Glossario de Estoque e Almoxarifado para PMEs",
  description:
    "Entenda termos de estoque, logistica e almoxarifado com definicoes diretas para aplicar no dia a dia da operacao.",
  path: "/glossario",
})

export default function GlossarioLayout({ children }: { children: ReactNode }) {
  return children
}
