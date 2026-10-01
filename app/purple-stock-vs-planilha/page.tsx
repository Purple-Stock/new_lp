import { ProductMoneyPage } from "@/components/product-money-page";
import {
  VS_PLANILHA_COMPARE_ROWS,
  VS_PLANILHA_FAQS,
  VS_PLANILHA_H1,
  VS_PLANILHA_LEDE,
  VS_PLANILHA_SECTIONS,
} from "@/lib/product-money-pages";
import {
  APLICATIVO_DE_ESTOQUE_PATH,
  VS_PLANILHA_PAGE_DESCRIPTION,
  VS_PLANILHA_PAGE_TITLE,
  VS_PLANILHA_PATH,
} from "@/lib/seo-page-copy";

export default function PurpleStockVsPlanilhaPage() {
  return (
    <ProductMoneyPage
      path={VS_PLANILHA_PATH}
      h1={VS_PLANILHA_H1}
      lede={VS_PLANILHA_LEDE}
      queryCluster="vs-planilha"
      whatsappText="Olá! Quero sair da planilha de estoque e ver se o Purple Stock encaixa."
      sections={VS_PLANILHA_SECTIONS}
      faqs={VS_PLANILHA_FAQS}
      compareRows={VS_PLANILHA_COMPARE_ROWS}
      relatedLinks={[
        { href: APLICATIVO_DE_ESTOQUE_PATH, label: "aplicativo de estoque" },
        { href: "/precos", label: "preços" },
        {
          href: "/blog/planilha-de-estoque-vs-app",
          label: "artigo planilha vs app",
        },
        { href: "/recursos/controle-de-almoxarifado", label: "almoxarifado" },
      ]}
      schemaName={VS_PLANILHA_PAGE_TITLE}
      schemaDescription={VS_PLANILHA_PAGE_DESCRIPTION}
      breadcrumbName="vs Planilha"
    />
  );
}
