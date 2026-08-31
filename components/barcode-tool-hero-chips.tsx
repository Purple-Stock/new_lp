import { BarChart3 } from "lucide-react";
import type { BarcodeToolSeoCopy } from "@/lib/barcode-tool-seo-content";

type BarcodeToolHeroChipsProps = {
  copy: BarcodeToolSeoCopy;
  title: string;
  description: string;
};

/** Stable H1 + benefit chips above the free barcode generator. */
export function BarcodeToolHeroChips({
  copy,
  title,
  description,
}: BarcodeToolHeroChipsProps) {
  return (
    <div className="mb-12 text-center">
      <div className="ps-badge-violet mb-4 inline-flex max-w-full flex-wrap items-center justify-center px-4 py-2 text-sm normal-case tracking-normal">
        <BarChart3 className="mr-2 h-4 w-4" />
        {copy.badge}
      </div>
      <h1 className="ps-display mb-4 text-2xl sm:text-4xl md:text-5xl">
        {title}
      </h1>
      <p className="ps-lead mx-auto max-w-3xl text-base sm:text-xl">
        {description}
      </p>
      <ul className="mx-auto mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2 text-sm text-slate-600">
        {copy.benefitChips.map((item) => (
          <li
            key={item}
            className="rounded-full border border-brand-border-soft bg-white/80 px-3 py-1.5"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
