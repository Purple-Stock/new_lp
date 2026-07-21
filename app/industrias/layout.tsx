import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sistema de Estoque por Setor: Varejo, Indústria e Serviços",
  description:
    "Controle de estoque com QR Code por setor: audiovisual, varejo, confecção, construção e mais. Menos perda e mais rastreabilidade para PME.",
  alternates: {
    canonical: "https://www.purplestock.com.br/industrias",
  },
  openGraph: {
    type: "website",
    title:
      "Sistema de Estoque por Setor: Varejo, Indústria e Serviços | Purple Stock",
    description:
      "Controle de estoque com QR Code por setor: audiovisual, varejo, confecção, construção e mais. Menos perda e mais rastreabilidade para PME.",
    url: "/industrias",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sistema de Estoque por Setor: Varejo, Indústria e Serviços | Purple Stock",
    description:
      "Controle de estoque com QR Code por setor: audiovisual, varejo, confecção, construção e mais. Menos perda e mais rastreabilidade para PME.",
  },
};

export default function IndustriasLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="ps-landing-canvas relative min-h-screen overflow-x-hidden">
      <div className="ps-landing-bg" aria-hidden="true">
        <div className="ps-landing-bg-glow" />
        <div className="ps-landing-bg-lines" />
      </div>
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}
