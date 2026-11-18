import { ProductMoneyPage } from "@/components/product-money-page";
import {
  CODIGO_BARRAS_FAQS,
  CODIGO_BARRAS_H1,
  CODIGO_BARRAS_LEDE,
  CODIGO_BARRAS_SECTIONS,
} from "@/lib/money-pages/codigo-de-barras";
import {
  APLICATIVO_DE_ESTOQUE_PATH,
  CONTROLE_CODIGO_BARRAS_PAGE_DESCRIPTION,
  CONTROLE_CODIGO_BARRAS_PAGE_TITLE,
  CONTROLE_CODIGO_BARRAS_PATH,
  SISTEMA_CONTROLE_ESTOQUE_PATH,
} from "@/lib/seo-page-copy";

export default function ControleCodigoBarrasPage() {
  return (
    <ProductMoneyPage
      path={CONTROLE_CODIGO_BARRAS_PATH}
      h1={CODIGO_BARRAS_H1}
      lede={CODIGO_BARRAS_LEDE}
      queryCluster="controle-codigo-barras"
      whatsappText="Olá! Quero controle de estoque com código de barras no celular."
      sections={CODIGO_BARRAS_SECTIONS}
      faqs={CODIGO_BARRAS_FAQS}
      relatedLinks={[
        { href: "/precos", label: "preços" },
        { href: APLICATIVO_DE_ESTOQUE_PATH, label: "aplicativo de estoque" },
        {
          href: SISTEMA_CONTROLE_ESTOQUE_PATH,
          label: "sistema de controle de estoque",
        },
        {
          href: "/blog/codigo-de-barras-no-estoque-como-implementar",
          label: "como implementar",
        },
      ]}
      schemaName={CONTROLE_CODIGO_BARRAS_PAGE_TITLE}
      schemaDescription={CONTROLE_CODIGO_BARRAS_PAGE_DESCRIPTION}
      breadcrumbName="Código de barras"
    />
  );
}
