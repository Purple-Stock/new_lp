"use client"

import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackSeoCtaClick } from "@/lib/analytics"

type BlogPostCtaProps = {
  slug: string
}

export function BlogPostCta({ slug }: BlogPostCtaProps) {
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
          Testar Purple Stock
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
      <Link
        href="https://wa.me/5511995597242?text=Ol%C3%A1!%20Vim%20do%20blog%20e%20quero%20entender%20como%20implantar%20o%20Purple%20Stock."
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
          Falar com especialista
        </Button>
      </Link>
    </div>
  )
}
