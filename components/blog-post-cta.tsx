"use client"

import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackSeoCtaClick } from "@/lib/analytics"

type BlogPostCtaProps = {
  slug: string
}

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
  } as const

  const cta = ctaBySlug[slug as keyof typeof ctaBySlug] ?? {
    primaryLabel: "Testar Purple Stock",
    secondaryLabel: "Falar com especialista",
    whatsappText:
      "Ol%C3%A1!%20Vim%20do%20blog%20e%20quero%20entender%20como%20implantar%20o%20Purple%20Stock.",
  }

  return (
    <div className="mt-6 flex flex-col gap-3 sm:flex-row">
      <Link
        href="https://app.purplestock.com.br/"
        onClick={() =>
          trackSeoCtaClick({
            cta_name: "blog_post_primary_trial",
            cta_target: "app",
            page_section: "blog_header",
            query_cluster: slug,
          })
        }
      >
        <Button className="bg-purple-700 text-white hover:bg-purple-800">
          {cta.primaryLabel}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
      <Link
        href={`https://wa.me/5511995597242?text=${cta.whatsappText}`}
        onClick={() =>
          trackSeoCtaClick({
            cta_name: "blog_post_secondary_whatsapp",
            cta_target: "whatsapp",
            page_section: "blog_header",
            query_cluster: slug,
          })
        }
      >
        <Button variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50">
          <MessageCircle className="mr-2 h-4 w-4" />
          {cta.secondaryLabel}
        </Button>
      </Link>
    </div>
  )
}
