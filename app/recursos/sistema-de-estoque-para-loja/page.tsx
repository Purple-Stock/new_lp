import { ProductMoneyPage } from "@/components/product-money-page";
import {
  LOJA_FAQS,
  LOJA_H1,
  LOJA_LEDE,
  LOJA_SECTIONS,
} from "@/lib/money-pages/loja";
import {
  APLICATIVO_DE_ESTOQUE_PATH,
  SISTEMA_ESTOQUE_LOJA_PAGE_DESCRIPTION,
  SISTEMA_ESTOQUE_LOJA_PAGE_TITLE,
  SISTEMA_ESTOQUE_LOJA_PATH,
  VS_PLANILHA_PATH,
} from "@/lib/seo-page-copy";

export default function SistemaEstoqueLojaPage() {
  return (
    <ProductMoneyPage
      path={SISTEMA_ESTOQUE_LOJA_PATH}
      h1={LOJA_H1}
      lede={LOJA_LEDE}
      queryCluster="sistema-estoque-loja"
      whatsappText="Olá! Quero sistema de estoque para loja: saldo no celular, sem caixa."
      sections={LOJA_SECTIONS}
      faqs={LOJA_FAQS}
      relatedLinks={[
        { href: "/precos", label: "preços" },
        { href: APLICATIVO_DE_ESTOQUE_PATH, label: "aplicativo de estoque" },
        { href: VS_PLANILHA_PATH, label: "planilha vs sistema" },
        { href: "/industrias/automotivo", label: "autopeças" },
      ]}
      schemaName={SISTEMA_ESTOQUE_LOJA_PAGE_TITLE}
      schemaDescription={SISTEMA_ESTOQUE_LOJA_PAGE_DESCRIPTION}
      breadcrumbName="Estoque para loja"
    />
  );
}
