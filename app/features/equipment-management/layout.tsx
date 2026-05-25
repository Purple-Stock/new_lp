import type { ReactNode } from "react";
import { buildPageMetadata } from "@/lib/metadata";

export const metadata = buildPageMetadata({
  title: "Gestão de Equipamentos e Ativos com QR Code: Rastreie Tudo",
  description:
    "Controle de equipamentos e ativos com QR Code: histórico de uso, manutenção preventiva e localização em tempo real. Reduza perdas em até 60%. Teste grátis.",
  path: "/features/equipment-management",
});

export default function EquipmentManagementLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
