import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sistema de Estoque por Setor: Indústria, Varejo e Serviços",
  description:
    "Veja como cada setor usa a Purple Stock para controlar estoque com QR Code, rastrear itens e reduzir perdas operacionais.",
  alternates: {
    canonical: "https://www.purplestock.com.br/industrias",
  },
  openGraph: {
    type: "website",
    title:
      "Sistema de Estoque por Setor: Indústria, Varejo e Serviços | Purple Stock",
    description:
      "Veja como cada setor usa a Purple Stock para controlar estoque com QR Code, rastrear itens e reduzir perdas operacionais.",
    url: "/industrias",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sistema de Estoque por Setor: Indústria, Varejo e Serviços | Purple Stock",
    description:
      "Veja como cada setor usa a Purple Stock para controlar estoque com QR Code, rastrear itens e reduzir perdas operacionais.",
  },
};

export default function IndustriasLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
