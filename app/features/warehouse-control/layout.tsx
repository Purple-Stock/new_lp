import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/metadata"

export const metadata = buildPageMetadata({
  title: "Controle de Almoxarifado e Armazem",
  description:
    "Organize recebimento, armazenagem e expedicao com controle de almoxarifado e armazem mais eficiente.",
  path: "/features/warehouse-control",
})

export default function WarehouseControlLayout({ children }: { children: ReactNode }) {
  return children
}
