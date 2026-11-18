import { ProductMoneyPage } from "@/components/product-money-page";
import {
  FERRAMENTAS_FAQS,
  FERRAMENTAS_H1,
  FERRAMENTAS_LEDE,
  FERRAMENTAS_SECTIONS,
} from "@/lib/money-pages/ferramentas";
import {
  APLICATIVO_DE_ESTOQUE_PATH,
  CONTROLE_FERRAMENTAS_PAGE_DESCRIPTION,
  CONTROLE_FERRAMENTAS_PAGE_TITLE,
  CONTROLE_FERRAMENTAS_PATH,
} from "@/lib/seo-page-copy";

export default function ControleFerramentasPage() {
  return (
    <ProductMoneyPage
      path={CONTROLE_FERRAMENTAS_PATH}
      h1={FERRAMENTAS_H1}
      lede={FERRAMENTAS_LEDE}
      queryCluster="controle-ferramentas"
      whatsappText="Olá! Quero controle de ferramentas com check-in e responsável."
      sections={FERRAMENTAS_SECTIONS}
      faqs={FERRAMENTAS_FAQS}
      relatedLinks={[
        { href: "/precos", label: "preços" },
        { href: APLICATIVO_DE_ESTOQUE_PATH, label: "aplicativo de estoque" },
        { href: "/industrias/construction", label: "almoxarifado de obra" },
        {
          href: "/blog/controle-ferramentas-obra-check-in-canteiro",
          label: "guia de canteiro",
        },
      ]}
      schemaName={CONTROLE_FERRAMENTAS_PAGE_TITLE}
      schemaDescription={CONTROLE_FERRAMENTAS_PAGE_DESCRIPTION}
      breadcrumbName="Controle de ferramentas"
    />
  );
}
