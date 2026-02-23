import type { Metadata } from "next"
import type { ReactNode } from "react"

export const metadata: Metadata = {
  title: "Controle de Almoxarifado: Guia Prático para PMEs",
  description:
    "Entenda como estruturar controle de almoxarifado com entrada e saída, inventário cíclico e rastreabilidade para reduzir erros e custos.",
  alternates: {
    canonical: "/recursos/controle-de-almoxarifado",
  },
  openGraph: {
    type: "website",
    title: "Controle de Almoxarifado: Guia Prático para PMEs | Purple Stock",
    description:
      "Entenda como estruturar controle de almoxarifado com entrada e saída, inventário cíclico e rastreabilidade para reduzir erros e custos.",
    url: "/recursos/controle-de-almoxarifado",
  },
  twitter: {
    card: "summary_large_image",
    title: "Controle de Almoxarifado: Guia Prático para PMEs | Purple Stock",
    description:
      "Entenda como estruturar controle de almoxarifado com entrada e saída, inventário cíclico e rastreabilidade para reduzir erros e custos.",
  },
}

export default function ControleAlmoxarifadoLayout({ children }: { children: ReactNode }) {
  return children
}
