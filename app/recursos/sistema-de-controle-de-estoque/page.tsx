import { ProductMoneyPage } from "@/components/product-money-page";
import {
  SISTEMA_FAQS,
  SISTEMA_H1,
  SISTEMA_LEDE,
  SISTEMA_SECTIONS,
} from "@/lib/money-pages/sistema";
import {
  APLICATIVO_DE_ESTOQUE_PATH,
  SISTEMA_CONTROLE_ESTOQUE_PAGE_DESCRIPTION,
  SISTEMA_CONTROLE_ESTOQUE_PAGE_TITLE,
  SISTEMA_CONTROLE_ESTOQUE_PATH,
  SISTEMA_ESTOQUE_LOJA_PATH,
  VS_PLANILHA_PATH,
} from "@/lib/seo-page-copy";

export default function SistemaControleEstoquePage() {
  return (
    <ProductMoneyPage
      path={SISTEMA_CONTROLE_ESTOQUE_PATH}
      h1={SISTEMA_H1}
      lede={SISTEMA_LEDE}
      queryCluster="sistema-controle-estoque"
      whatsappText="Olá! Quero um sistema de controle de estoque online com QR no celular."
      sections={SISTEMA_SECTIONS}
      faqs={SISTEMA_FAQS}
      relatedLinks={[
        { href: "/precos", label: "preços" },
        { href: APLICATIVO_DE_ESTOQUE_PATH, label: "aplicativo de estoque" },
        { href: VS_PLANILHA_PATH, label: "planilha vs sistema" },
        { href: SISTEMA_ESTOQUE_LOJA_PATH, label: "estoque para loja" },
      ]}
      schemaName={SISTEMA_CONTROLE_ESTOQUE_PAGE_TITLE}
      schemaDescription={SISTEMA_CONTROLE_ESTOQUE_PAGE_DESCRIPTION}
      breadcrumbName="Sistema de controle de estoque"
    />
  );
}
