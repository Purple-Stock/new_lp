import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Controle de Estoque por Setor",
  description:
    "Conheça as soluções da Purple Stock por setor: indústria, varejo, logística e mais, com rastreabilidade e operação em tempo real.",
  alternates: {
    canonical: "/industrias",
  },
  openGraph: {
    type: "website",
    title: "Controle de Estoque por Setor | Purple Stock",
    description:
      "Conheça as soluções da Purple Stock por setor: indústria, varejo, logística e mais, com rastreabilidade e operação em tempo real.",
    url: "/industrias",
  },
  twitter: {
    card: "summary_large_image",
    title: "Controle de Estoque por Setor | Purple Stock",
    description:
      "Conheça as soluções da Purple Stock por setor: indústria, varejo, logística e mais, com rastreabilidade e operação em tempo real.",
  },
}

export default function IndustriasLayout({ children }: { children: ReactNode }) {
  return children
}
