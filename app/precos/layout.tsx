import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "Sistema de Controle de Estoque: Preço por Time, Teste Grátis e Implantação Rápida",
  description:
    "Veja o preço do sistema de controle de estoque da Purple Stock: R$ 29,90 por time, 7 dias grátis, sem fidelidade e ativação rápida para PMEs.",
  alternates: {
    canonical: "https://www.purplestock.com.br/precos",
  },
  openGraph: {
    type: "website",
    title:
      "Sistema de Controle de Estoque: Preço por Time, Teste Grátis e Implantação Rápida",
    description:
      "Veja o preço do sistema de controle de estoque da Purple Stock: R$ 29,90 por time, 7 dias grátis, sem fidelidade e ativação rápida para PMEs.",
    url: "/precos",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sistema de Controle de Estoque: Preço por Time, Teste Grátis e Implantação Rápida",
    description:
      "Veja o preço do sistema de controle de estoque da Purple Stock: R$ 29,90 por time, 7 dias grátis, sem fidelidade e ativação rápida para PMEs.",
  },
};

export default function PrecosLayout({ children }: { children: ReactNode }) {
  return children;
}
