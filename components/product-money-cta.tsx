"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackSeoCtaClick } from "@/lib/analytics";
import { buildWhatsAppUrl } from "@/lib/contact";

type ProductMoneyCtaProps = {
  queryCluster: string;
  whatsappText: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  pageSection?: "money_hero" | "money_footer";
};

export function ProductMoneyCta({
  queryCluster,
  whatsappText,
  primaryLabel = "Começar teste grátis",
  secondaryLabel = "Falar no WhatsApp",
  pageSection = "money_hero",
}: ProductMoneyCtaProps) {
  const ctaSlot = pageSection === "money_footer" ? "footer" : "hero";

  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      <Link
        href="https://app.purplestock.com.br/?utm_source=site&utm_medium=organic&utm_campaign=product_money"
        onClick={() =>
          trackSeoCtaClick({
            cta_name: `${queryCluster}_${ctaSlot}_primary`,
            cta_target: "app",
            page_section: pageSection,
            query_cluster: queryCluster,
          })
        }
      >
        <Button className="bg-white text-purple-700 hover:bg-gray-100">
          {primaryLabel}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
      <Link
        href={buildWhatsAppUrl(whatsappText)}
        onClick={() =>
          trackSeoCtaClick({
            cta_name: `${queryCluster}_${ctaSlot}_secondary`,
            cta_target: "whatsapp",
            page_section: pageSection,
            query_cluster: queryCluster,
          })
        }
      >
        <Button
          variant="outline"
          className="border-white/50 text-white hover:bg-white/10"
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          {secondaryLabel}
        </Button>
      </Link>
    </div>
  );
}
