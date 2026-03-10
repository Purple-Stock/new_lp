import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/metadata"

export const metadata = buildPageMetadata({
  title: "Controle de Estoque em Tempo Real",
  description:
    "Centralize entradas, saidas, inventario e rastreabilidade com um sistema de controle de estoque em nuvem.",
  path: "/features/inventory-control",
})

export default function InventoryControlLayout({ children }: { children: ReactNode }) {
  return children
}
