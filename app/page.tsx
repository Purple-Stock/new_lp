import { buildPageMetadata } from "@/lib/metadata"
import { DesktopLanding } from "@/components/desktop-landing"

export const metadata = buildPageMetadata({
  title: "Purple Stock | Controle De Estoque Com QR Code",
  description:
    "Sistema de controle de estoque em nuvem para PMEs com QR Code, rastreabilidade e operacao em tempo real.",
  path: "/",
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <DesktopLanding />
    </main>
  )
}
