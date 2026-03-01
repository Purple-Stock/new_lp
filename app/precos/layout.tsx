import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Preço de Sistema de Estoque para PME: R$ 29,90 por Time",
  description:
    "Compare o preço da Purple Stock para controle de estoque: R$ 29,90 por time/mês, 7 dias grátis, sem fidelidade e ativação rápida.",
  alternates: {
    canonical: "https://www.purplestock.com.br/precos",
  },
  openGraph: {
    type: "website",
    title: "Preço de Sistema de Estoque para PME: R$ 29,90 por Time",
    description:
      "Compare o preço da Purple Stock para controle de estoque: R$ 29,90 por time/mês, 7 dias grátis, sem fidelidade e ativação rápida.",
    url: "/precos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preço de Sistema de Estoque para PME: R$ 29,90 por Time",
    description:
      "Compare o preço da Purple Stock para controle de estoque: R$ 29,90 por time/mês, 7 dias grátis, sem fidelidade e ativação rápida.",
  },
}

export default function PrecosLayout({ children }: { children: ReactNode }) {
  return children
}
