import { buildPageMetadata } from "@/lib/metadata";
import { DesktopLanding } from "@/components/desktop-landing";

export const metadata = buildPageMetadata({
  title: "Purple Stock | Controle De Estoque Com QR Code",
  description:
    "Controle estoque, almoxarifado e inventario com QR Code no celular. Reduza erros, acompanhe movimentacoes e evite perder vendas por saldo incorreto.",
  path: "/",
});

export default function Home() {
  return <DesktopLanding />;
}
