import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "Sistema de Estoque por Setor: Audiovisual, Eventos, Odontológico e Indústria",
  description:
    "Controle de equipamentos com QR Code: produtoras, eventos, equipamentos dentários e indústria. Check-in/check-out, menos perda e rastreio em tempo real.",
  alternates: {
    canonical: "https://www.purplestock.com.br/industrias",
  },
  openGraph: {
    type: "website",
    title:
      "Sistema de Estoque por Setor: Audiovisual, Eventos, Odontológico | Purple Stock",
    description:
      "Controle de equipamentos com QR Code: produtoras, eventos, equipamentos dentários e indústria. Check-in/check-out, menos perda e rastreio em tempo real.",
    url: "/industrias",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sistema de Estoque por Setor: Audiovisual, Eventos, Odontológico | Purple Stock",
    description:
      "Controle de equipamentos com QR Code: produtoras, eventos, equipamentos dentários e indústria. Check-in/check-out, menos perda e rastreio em tempo real.",
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
