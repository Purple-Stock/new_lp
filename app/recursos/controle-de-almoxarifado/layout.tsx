import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Controle de Almoxarifado para PME: Guia Prático com Checklist",
  description:
    "Aprenda a estruturar controle de almoxarifado com entrada/saída, inventário cíclico e rastreabilidade para reduzir ruptura e custo operacional.",
  alternates: {
    canonical: "https://www.purplestock.com.br/recursos/controle-de-almoxarifado",
  },
  openGraph: {
    type: "website",
    title: "Controle de Almoxarifado para PME: Guia Prático com Checklist | Purple Stock",
    description:
      "Aprenda a estruturar controle de almoxarifado com entrada/saída, inventário cíclico e rastreabilidade para reduzir ruptura e custo operacional.",
    url: "/recursos/controle-de-almoxarifado",
  },
  twitter: {
    card: "summary_large_image",
    title: "Controle de Almoxarifado para PME: Guia Prático com Checklist | Purple Stock",
    description:
      "Aprenda a estruturar controle de almoxarifado com entrada/saída, inventário cíclico e rastreabilidade para reduzir ruptura e custo operacional.",
  },
}

export default function ControleAlmoxarifadoLayout({ children }: { children: ReactNode }) {
  return children
}
