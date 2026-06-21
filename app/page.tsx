import { DesktopLanding } from "@/components/desktop-landing";
import { JsonLd } from "@/components/json-ld";
import { HOME_FAQ_PT } from "@/lib/home-faq";
import { buildPageMetadata } from "@/lib/metadata";
import { buildHomePageGraph } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "Purple Stock | Sistema de Controle de Estoque com QR Code",
  description:
    "Controle estoque, almoxarifado e inventario com QR Code no celular. Reduza erros, acompanhe movimentacoes e evite perder vendas por saldo incorreto.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd data={buildHomePageGraph({ faqs: HOME_FAQ_PT })} />
      <DesktopLanding />
    </>
  );
}
