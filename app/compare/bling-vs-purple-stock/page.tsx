import { ProductMoneyPage } from "@/components/product-money-page";
import {
  BLING_COMPARE_FAQS,
  BLING_COMPARE_H1,
  BLING_COMPARE_LEDE,
  BLING_COMPARE_ROWS,
  BLING_COMPARE_SECTIONS,
} from "@/lib/product-compare-pages";
import {
  APLICATIVO_DE_ESTOQUE_PATH,
  BARCODE_TOOL_PATH,
  BLING_COMPARE_PAGE_DESCRIPTION,
  BLING_COMPARE_PAGE_TITLE,
  BLING_COMPARE_PATH,
  VS_PLANILHA_PATH,
} from "@/lib/seo-page-copy";

export default function BlingVsPurpleStockPage() {
  return (
    <ProductMoneyPage
      path={BLING_COMPARE_PATH}
      h1={BLING_COMPARE_H1}
      lede={BLING_COMPARE_LEDE}
      queryCluster="compare-bling"
      whatsappText="Olá! Quero ver o Purple Stock como alternativa ao Bling na locação."
      sections={BLING_COMPARE_SECTIONS}
      faqs={BLING_COMPARE_FAQS}
      compareRows={BLING_COMPARE_ROWS}
      compareTitle="Bling vs Purple Stock"
      compareLeftLabel="Bling"
      compareRightLabel="Purple Stock"
      relatedLinks={[
        { href: BARCODE_TOOL_PATH, label: "gerador de código de barras" },
        { href: VS_PLANILHA_PATH, label: "vs planilha" },
        { href: APLICATIVO_DE_ESTOQUE_PATH, label: "aplicativo de estoque" },
        { href: "/precos", label: "preços" },
      ]}
      schemaName={BLING_COMPARE_PAGE_TITLE}
      schemaDescription={BLING_COMPARE_PAGE_DESCRIPTION}
      breadcrumbName="vs Bling"
    />
  );
}
