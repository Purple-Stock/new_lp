import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/metadata"

export const metadata = buildPageMetadata({
  title: "Gestao de Estoque para Restaurantes",
  description:
    "Reduza desperdicio e controle ingredientes, validade e fornecedores com um sistema de estoque para restaurantes.",
  path: "/industrias/restaurantes",
})

export default function RestaurantesLayout({ children }: { children: ReactNode }) {
  return children
}
