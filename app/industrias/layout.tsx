import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Sistema de Controle de Estoque por Setor para PMEs",
  description:
    "Veja como indústria, varejo, logística e serviços usam Purple Stock para rastrear estoque em tempo real e reduzir perdas operacionais.",
  alternates: {
    canonical: "https://www.purplestock.com.br/industrias",
  },
  openGraph: {
    type: "website",
    title: "Sistema de Controle de Estoque por Setor para PMEs | Purple Stock",
    description:
      "Veja como indústria, varejo, logística e serviços usam Purple Stock para rastrear estoque em tempo real e reduzir perdas operacionais.",
    url: "/industrias",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema de Controle de Estoque por Setor para PMEs | Purple Stock",
    description:
      "Veja como indústria, varejo, logística e serviços usam Purple Stock para rastrear estoque em tempo real e reduzir perdas operacionais.",
  },
}

export default function IndustriasLayout({ children }: { children: ReactNode }) {
  return children
}
