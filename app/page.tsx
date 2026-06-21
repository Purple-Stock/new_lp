import { DesktopLanding } from "@/components/desktop-landing";
import { HomeBlogTeaser } from "@/components/home-blog-teaser";
import { JsonLd } from "@/components/json-ld";
import { getLatestPosts } from "@/lib/blog";
import { HOME_FAQ_PT } from "@/lib/home-faq";
import { buildPageMetadata } from "@/lib/metadata";
import { buildHomePageGraph } from "@/lib/structured-data";

export const metadata = buildPageMetadata({
  title: "Purple Stock | Sistema de Controle de Estoque com QR Code",
  description:
    "Controle estoque, almoxarifado e inventario com QR Code no celular. Reduza erros, acompanhe movimentacoes e evite perder vendas por saldo incorreto.",
  path: "/",
});

export default async function Home() {
  const latestPosts = await getLatestPosts(3);

  return (
    <>
      <JsonLd data={buildHomePageGraph({ faqs: HOME_FAQ_PT })} />
      <DesktopLanding beforeFooter={<HomeBlogTeaser posts={latestPosts} />} />
    </>
  );
}
