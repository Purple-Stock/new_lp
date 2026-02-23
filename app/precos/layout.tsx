import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Preços Purple Stock: R$ 29,90 por time",
  description:
    "Plano único da Purple Stock: R$ 29,90 por time por mês, com 7 dias grátis, sem fidelidade e operação com QR Code.",
  alternates: {
    canonical: "/precos",
  },
  openGraph: {
    type: "website",
    title: "Preços Purple Stock: R$ 29,90 por time",
    description:
      "Plano único da Purple Stock: R$ 29,90 por time por mês, com 7 dias grátis, sem fidelidade e operação com QR Code.",
    url: "/precos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preços Purple Stock: R$ 29,90 por time",
    description:
      "Plano único da Purple Stock: R$ 29,90 por time por mês, com 7 dias grátis, sem fidelidade e operação com QR Code.",
  },
}

export default function PrecosLayout({ children }: { children: ReactNode }) {
  return children
}
