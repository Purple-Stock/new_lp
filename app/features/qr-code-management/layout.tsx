import type { ReactNode } from "react"
import { buildPageMetadata } from "@/lib/metadata"

export const metadata = buildPageMetadata({
  title: "Gestao de Estoque com QR Code",
  description:
    "Rastreie produtos e ativos com QR Code para ganhar velocidade operacional e visibilidade em tempo real.",
  path: "/features/qr-code-management",
})

export default function QrCodeManagementLayout({ children }: { children: ReactNode }) {
  return children
}
