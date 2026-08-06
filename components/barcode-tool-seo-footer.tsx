import Link from "next/link";
import type { BarcodeToolSeoCopy } from "@/lib/barcode-tool-seo-content";

type BarcodeToolSeoFooterProps = {
  copy: BarcodeToolSeoCopy;
};

/**
 * Below-the-fold SEO + soft product CTA for /codigo-de-barras-gratis.
 * Kept separate from the generator UI so SERP copy edits stay greppable.
 */
export function BarcodeToolSeoFooter({ copy }: BarcodeToolSeoFooterProps) {
  return (
    <section className="relative z-[1] border-t border-brand-border-soft bg-white/90 px-4 py-12 sm:px-8">
      <div className="mx-auto max-w-3xl space-y-10">
        <div className="text-center">
          <h2 className="ps-display mb-3 text-xl font-semibold text-brand-ink md:text-2xl">
            {copy.howToTitle}
          </h2>
          <p className="text-sm text-slate-600 md:text-base">
            {copy.howToBody}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {copy.formatCards.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-brand-border-soft bg-white p-4 text-left shadow-sm"
            >
              <h3 className="mb-1 text-base font-semibold text-brand-ink">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600">{card.body}</p>
            </div>
          ))}
        </div>

        <div className="text-left">
          <h2 className="ps-display mb-3 text-xl font-semibold text-brand-ink md:text-2xl">
            {copy.longTailTitle}
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 md:text-base">
            {copy.longTailBody}
          </p>
        </div>

        <div className="text-left">
          <h2 className="ps-display mb-4 text-xl font-semibold text-brand-ink md:text-2xl">
            {copy.faqTitle}
          </h2>
          <dl className="space-y-4">
            {copy.faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-xl border border-brand-border-soft bg-white p-4"
              >
                <dt className="text-sm font-semibold text-brand-ink md:text-base">
                  {item.question}
                </dt>
                <dd className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl border border-brand-border-soft bg-brand-ui-primary/5 p-6 text-center">
          <h2 className="ps-display mb-2 text-xl font-semibold text-brand-ink md:text-2xl">
            {copy.ctaTitle}
          </h2>
          <p className="mb-5 text-sm text-slate-600 md:text-base">
            {copy.ctaBody}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-medium">
            <Link
              href="https://app.purplestock.com.br/"
              className="rounded-full bg-brand-ui-primary px-4 py-2 text-white transition hover:opacity-90"
            >
              {copy.trialLabel}
            </Link>
            <Link
              href="/precos"
              className="rounded-full border border-brand-border-soft bg-white px-4 py-2 text-brand-ui-primary transition hover:border-brand-ui-primary"
            >
              {copy.pricingLabel}
            </Link>
            <Link
              href="/blog/codigo-de-barras-no-estoque-como-implementar"
              className="rounded-full border border-brand-border-soft bg-white px-4 py-2 text-brand-ui-primary transition hover:border-brand-ui-primary"
            >
              {copy.implementLabel}
            </Link>
            <Link
              href="/blog/checklist-codigo-barras-pme"
              className="rounded-full border border-brand-border-soft bg-white px-4 py-2 text-brand-ui-primary transition hover:border-brand-ui-primary"
            >
              {copy.checklistLabel}
            </Link>
            <Link
              href="/blog/aplicativo-para-controle-de-estoque"
              className="rounded-full border border-brand-border-soft bg-white px-4 py-2 text-brand-ui-primary transition hover:border-brand-ui-primary"
            >
              {copy.inventoryAppLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
