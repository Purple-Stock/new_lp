import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Preço do Sistema de Estoque: R$ 59/time e 7 Dias Grátis",
  description:
    "Teste grátis o sistema de controle de estoque Purple Stock. R$ 59,00 por time, sem fidelidade e ativação rápida para PMEs.",
  alternates: {
    canonical: "https://www.purplestock.com.br/precos",
  },
  openGraph: {
    type: "website",
    title: "Preço do Sistema de Estoque: R$ 59/time e 7 Dias Grátis",
    description:
      "Teste grátis o sistema de controle de estoque Purple Stock. R$ 59,00 por time, sem fidelidade e ativação rápida para PMEs.",
    url: "/precos",
  },
  twitter: {
    card: "summary_large_image",
    title: "Preço do Sistema de Estoque: R$ 59/time e 7 Dias Grátis",
    description:
      "Teste grátis o sistema de controle de estoque Purple Stock. R$ 59,00 por time, sem fidelidade e ativação rápida para PMEs.",
  },
};

export default function PrecosLayout({ children }: { children: ReactNode }) {
  return children;
}
