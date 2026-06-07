"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackSeoCtaClick } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/contact";
import { getAppSignupUrl } from "@/lib/app";

type BlogPostCtaProps = {
  slug: string;
};

export function BlogPostCta({ slug }: BlogPostCtaProps) {
  const ctaBySlug = {
    "como-usar-qr-code-controle-estoque": {
      primaryLabel: "Ver demo de QR Code no estoque",
      secondaryLabel: "Falar sobre implantação",
      whatsappText:
        "Ol%C3%A1!%20Vim%20do%20guia%20de%20QR%20Code%20e%20quero%20entender%20como%20implantar%20o%20Purple%20Stock%20no%20estoque.",
    },
    "open-erp-o-que-e-e-quando-usar": {
      primaryLabel: "Comparar com uma operação mais simples",
      secondaryLabel: "Falar sobre ERP + estoque",
      whatsappText:
        "Ol%C3%A1!%20Vim%20do%20artigo%20sobre%20Open%20ERP%20e%20quero%20avaliar%20uma%20camada%20de%20estoque%20mais%20simples.",
    },
    "aplicativo-para-controle-de-estoque": {
      primaryLabel: "Testar um app de estoque na prática",
      secondaryLabel: "Tirar dúvidas sobre escolha",
      whatsappText:
        "Ol%C3%A1!%20Vim%20do%20artigo%20sobre%20aplicativo%20de%20estoque%20e%20quero%20comparar%20o%20Purple%20Stock%20com%20minha%20opera%C3%A7%C3%A3o.",
    },
    "vmi-vs-estoque-proprio-comparativo": {
      primaryLabel: "Ver como o Purple Stock gerencia VMI",
      secondaryLabel: "Falar sobre modelo de estoque",
      whatsappText:
        "Ol%C3%A1!%20Vim%20do%20artigo%20sobre%20VMI%20vs%20estoque%20pr%C3%B3prio%20e%20quero%20entender%20como%20o%20Purple%20Stock%20suporta%20VMI.",
    },
    "como-reduzir-ruptura-de-estoque": {
      primaryLabel: "Testar controle de estoque em tempo real",
      secondaryLabel: "Falar sobre redução de ruptura",
      whatsappText:
        "Ol%C3%A1!%20Vim%20do%20artigo%20de%20redu%C3%A7%C3%A3o%20de%20ruptura%20e%20quero%20testar%20o%20Purple%20Stock%20para%20minha%20opera%C3%A7%C3%A3o.",
    },
    "estoque-terceirizado-3pl-guia-completo": {
      primaryLabel: "Ver integração com 3PL no Purple Stock",
      secondaryLabel: "Falar sobre estoque terceirizado",
      whatsappText:
        "Ol%C3%A1!%20Vim%20do%20guia%20sobre%203PL%20e%20quero%20entender%20como%20integrar%20meu%20estoque%20com%20um%20operador%20log%C3%ADstico.",
    },
    "guia-completo-sistema-de-estoque": {
      primaryLabel: "Testar Purple Stock grátis",
      secondaryLabel: "Falar sobre sistema de estoque",
      whatsappText:
        "Ol%C3%A1!%20Vim%20do%20guia%20completo%20de%20sistema%20de%20estoque%20e%20quero%20testar%20o%20Purple%20Stock.",
    },
    "sistema-de-estoque-vs-planilha-excel-2026": {
      primaryLabel: "Migrar da planilha para o Purple Stock",
      secondaryLabel: "Tirar dúvidas sobre migração",
      whatsappText:
        "Ol%C3%A1!%20Vim%20do%20artigo%20de%20migra%C3%A7%C3%A3o%20planilha%20vs%20sistema%20e%20quero%20come%C3%A7ar%20a%20migrar%20com%20o%20Purple%20Stock.",
    },
    "como-escolher-sistema-de-estoque-2026": {
      primaryLabel: "Ver checklist do Purple Stock",
      secondaryLabel: "Comparar opções de sistema",
      whatsappText:
        "Ol%C3%A1!%20Vim%20do%20guia%20de%20como%20escolher%20sistema%20de%20estoque%20e%20quero%20avaliar%20o%20Purple%20Stock.",
    },
  } as const;

  const cta = ctaBySlug[slug as keyof typeof ctaBySlug] ?? {
    primaryLabel: "Testar Purple Stock",
    secondaryLabel: "Falar com especialista",
    whatsappText:
      "Ol%C3%A1!%20Vim%20do%20blog%20e%20quero%20entender%20como%20implantar%20o%20Purple%20Stock.",
  };

  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <Link
        href={getAppSignupUrl()}
        className="w-full sm:w-auto"
        onClick={() =>
          trackSeoCtaClick({
            cta_name: "blog_post_primary_trial",
            cta_target: "app",
            page_section: "blog_header",
            query_cluster: slug,
          })
        }
      >
        <Button className="ps-btn-primary w-full sm:w-auto">
          {cta.primaryLabel}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
      <Link
        href={buildWhatsAppUrl(decodeURIComponent(cta.whatsappText))}
        className="w-full sm:w-auto"
        onClick={() =>
          trackSeoCtaClick({
            cta_name: "blog_post_secondary_whatsapp",
            cta_target: "whatsapp",
            page_section: "blog_header",
            query_cluster: slug,
          })
        }
      >
        <Button variant="outline" className="ps-btn-outline w-full sm:w-auto">
          <MessageCircle className="mr-2 h-4 w-4" />
          {cta.secondaryLabel}
        </Button>
      </Link>
    </div>
  );
}
