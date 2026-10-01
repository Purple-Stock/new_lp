import { ProductMoneyPage } from "@/components/product-money-page";
import {
  APLICATIVO_ESTOQUE_FAQS,
  APLICATIVO_ESTOQUE_H1,
  APLICATIVO_ESTOQUE_LEDE,
  APLICATIVO_ESTOQUE_SECTIONS,
} from "@/lib/product-money-pages";
import {
  APLICATIVO_DE_ESTOQUE_PAGE_DESCRIPTION,
  APLICATIVO_DE_ESTOQUE_PAGE_TITLE,
  APLICATIVO_DE_ESTOQUE_PATH,
  VS_PLANILHA_PATH,
} from "@/lib/seo-page-copy";

export default function AplicativoDeEstoquePage() {
  return (
    <ProductMoneyPage
      path={APLICATIVO_DE_ESTOQUE_PATH}
      h1={APLICATIVO_ESTOQUE_H1}
      lede={APLICATIVO_ESTOQUE_LEDE}
      queryCluster="aplicativo-de-estoque"
      whatsappText="Olá! Quero ver o aplicativo para controle de estoque no celular."
      sections={APLICATIVO_ESTOQUE_SECTIONS}
      faqs={APLICATIVO_ESTOQUE_FAQS}
      relatedLinks={[
        { href: "/precos", label: "preços" },
        { href: VS_PLANILHA_PATH, label: "planilha vs sistema" },
        { href: "/industrias", label: "setores" },
        {
          href: "/blog/aplicativo-para-controle-de-estoque",
          label: "guia de escolha",
        },
      ]}
      schemaName={APLICATIVO_DE_ESTOQUE_PAGE_TITLE}
      schemaDescription={APLICATIVO_DE_ESTOQUE_PAGE_DESCRIPTION}
      breadcrumbName="Aplicativo de estoque"
    />
  );
}
