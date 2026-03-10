import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/metadata"

export const metadata = buildPageMetadata({
  title: "Controle de Equipamentos e Ativos",
  description:
    "Gerencie equipamentos, ferramentas e ativos com rastreabilidade, historico de uso e menos perdas operacionais.",
  path: "/features/equipment-management",
})

export default function EquipmentManagementLayout({ children }: { children: ReactNode }) {
  return children
}
