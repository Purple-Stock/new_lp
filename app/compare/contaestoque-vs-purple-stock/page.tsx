import { ProductMoneyPage } from "@/components/product-money-page";
import {
  CONTAESTOQUE_COMPARE_FAQS,
  CONTAESTOQUE_COMPARE_H1,
  CONTAESTOQUE_COMPARE_LEDE,
  CONTAESTOQUE_COMPARE_ROWS,
  CONTAESTOQUE_COMPARE_SECTIONS,
} from "@/lib/product-compare-pages";
import {
  APLICATIVO_DE_ESTOQUE_PATH,
  BARCODE_TOOL_PATH,
  CONTAESTOQUE_COMPARE_PAGE_DESCRIPTION,
  CONTAESTOQUE_COMPARE_PAGE_TITLE,
  CONTAESTOQUE_COMPARE_PATH,
  VS_PLANILHA_PATH,
} from "@/lib/seo-page-copy";

export default function ContaestoqueVsPurpleStockPage() {
  return (
    <ProductMoneyPage
      path={CONTAESTOQUE_COMPARE_PATH}
      h1={CONTAESTOQUE_COMPARE_H1}
      lede={CONTAESTOQUE_COMPARE_LEDE}
      queryCluster="compare-contaestoque"
      whatsappText="Olá! Quero comparar ContaEstoque e Purple Stock na locação."
      sections={CONTAESTOQUE_COMPARE_SECTIONS}
      faqs={CONTAESTOQUE_COMPARE_FAQS}
      compareRows={CONTAESTOQUE_COMPARE_ROWS}
      compareTitle="ContaEstoque vs Purple Stock"
      compareLeftLabel="ContaEstoque"
      compareRightLabel="Purple Stock"
      relatedLinks={[
        { href: BARCODE_TOOL_PATH, label: "gerador de código de barras" },
        { href: VS_PLANILHA_PATH, label: "vs planilha" },
        { href: APLICATIVO_DE_ESTOQUE_PATH, label: "aplicativo de estoque" },
        { href: "/precos", label: "preços" },
      ]}
      schemaName={CONTAESTOQUE_COMPARE_PAGE_TITLE}
      schemaDescription={CONTAESTOQUE_COMPARE_PAGE_DESCRIPTION}
      breadcrumbName="vs ContaEstoque"
    />
  );
}
