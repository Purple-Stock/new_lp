import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "Controle de Almoxarifado: Como Organizar Entradas, Saídas e Inventário",
  description:
    "Aprenda como organizar o almoxarifado com entrada e saída, inventário cíclico e rastreabilidade para reduzir perdas e rupturas.",
  alternates: {
    canonical:
      "https://www.purplestock.com.br/recursos/controle-de-almoxarifado",
  },
  openGraph: {
    type: "website",
    title:
      "Controle de Almoxarifado: Como Organizar Entradas, Saídas e Inventário | Purple Stock",
    description:
      "Aprenda como organizar o almoxarifado com entrada e saída, inventário cíclico e rastreabilidade para reduzir perdas e rupturas.",
    url: "/recursos/controle-de-almoxarifado",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Controle de Almoxarifado: Como Organizar Entradas, Saídas e Inventário | Purple Stock",
    description:
      "Aprenda como organizar o almoxarifado com entrada e saída, inventário cíclico e rastreabilidade para reduzir perdas e rupturas.",
  },
};

export default function ControleAlmoxarifadoLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
