import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Sistema de Controle de Estoque: Preço, Teste Grátis e Planos",
  description:
    "Veja os planos da Purple Stock para PME: a partir de R$ 29,90 por time, 7 dias grátis, sem fidelidade e implantação rápida.",
  alternates: {
    canonical: "https://www.purplestock.com.br/precos",
  },
  openGraph: {
    type: "website",
    title: "Sistema de Controle de Estoque: Preço, Teste Grátis e Planos",
    description:
      "Veja os planos da Purple Stock para PME: a partir de R$ 29,90 por time, 7 dias grátis, sem fidelidade e implantação rápida.",
    url: "/precos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sistema de Controle de Estoque: Preço, Teste Grátis e Planos",
    description:
      "Veja os planos da Purple Stock para PME: a partir de R$ 29,90 por time, 7 dias grátis, sem fidelidade e implantação rápida.",
  },
}

export default function PrecosLayout({ children }: { children: ReactNode }) {
  return children
}
