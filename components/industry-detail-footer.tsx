import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCalendlyUrl } from "@/lib/contact";
import type { IndustryRecord } from "@/lib/industries-data";
import {
  isEquipmentIndustry,
  resolveMidCtaHeadline,
} from "@/lib/industry-detail-helpers";

type IndustryDetailFooterProps = {
  industry: IndustryRecord;
  relatedIndustries: IndustryRecord[];
};

export function IndustryDetailFooter({
  industry,
  relatedIndustries,
}: IndustryDetailFooterProps) {
  const isEquipmentVertical = isEquipmentIndustry(industry.slug);
  const ctaHeadline = resolveMidCtaHeadline(industry, isEquipmentVertical);

  return (
    <>
      <section className="pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="ps-callout flex flex-col items-start justify-between gap-6 p-6 sm:flex-row sm:items-center sm:p-8">
            <div>
              <h2 className="text-xl font-bold text-brand-ink sm:text-2xl">
                {ctaHeadline}
              </h2>
              <p className="mt-2 max-w-xl text-slate-600">
                R$ 59,00 por equipe, 7 dias grátis e implantação rápida. Sem
                matriz confusa de funcionalidades.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="https://app.purplestock.com.br/">
                <Button className="ps-btn-primary whitespace-nowrap">
                  Começar teste grátis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/precos">
                <Button
                  variant="outline"
                  className="ps-btn-outline whitespace-nowrap"
                >
                  Ver plano
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="ps-display text-2xl md:text-3xl">
                Outros setores
              </h2>
              <p className="mt-2 text-slate-600">
                Explore soluções para operações parecidas.
              </p>
            </div>
            <Link
              href="/industrias"
              className="hidden text-sm font-semibold text-brand-ui-primary sm:inline-flex"
            >
              Ver todos
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {relatedIndustries.map((related) => (
              <Link
                key={related.slug}
                href={`/industrias/${related.slug}`}
                className="ps-card group overflow-hidden transition hover:border-brand-ui-primary/40"
              >
                <div className="relative h-36 w-full">
                  <Image
                    src={related.image}
                    alt={related.name}
                    fill
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-brand-ink">
                    {related.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-sm text-slate-600">
                    {related.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <a
            href={getCalendlyUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-brand-ui-primary"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Prefere falar com o time? Agende uma conversa
          </a>
        </div>
      </section>
    </>
  );
}
