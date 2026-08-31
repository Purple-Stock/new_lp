"use client";

import Link from "next/link";
import type {
  LandingLanguage,
  LandingPlaybook,
} from "@/lib/desktop-landing-copy";

type DesktopLandingPlaybookSectionsProps = {
  language: LandingLanguage;
  playbook: LandingPlaybook;
};

function pick(
  language: LandingLanguage,
  pt: string,
  en: string,
  fr: string
): string {
  if (language === "pt") return pt;
  if (language === "en") return en;
  return fr;
}

export function DesktopLandingPlaybookSections({
  language,
  playbook,
}: DesktopLandingPlaybookSectionsProps) {
  return (
    <>
      <section className="ps-card mb-12 p-6 sm:p-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
            {playbook.howItWorksTitle}
          </h2>
          <p className="mt-2 text-slate-600">{playbook.howItWorksSubtitle}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {playbook.steps.map((step) => (
            <div
              key={step.title}
              className="rounded-lg border border-brand-border-soft bg-brand-surface-soft p-4"
            >
              <h3 className="font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="ps-card mb-12 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {playbook.compareTitle}
        </h2>
        <p className="mt-2 text-slate-600">{playbook.compareSubtitle}</p>
        <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200">
          <table className="min-w-full bg-white text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-600">
                  {pick(language, "Criterio", "Criteria", "Critere")}
                </th>
                <th className="px-4 py-3 font-semibold text-purple-700">
                  Purple Stock
                </th>
                <th className="px-4 py-3 font-semibold text-slate-600">
                  {pick(
                    language,
                    "ERP tradicional",
                    "Traditional ERP",
                    "ERP traditionnel"
                  )}
                </th>
              </tr>
            </thead>
            <tbody>
              {playbook.compareRows.map((row) => (
                <tr key={row.label} className="border-t border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-900">
                    {row.label}
                  </td>
                  <td className="px-4 py-3 text-slate-700">{row.purple}</td>
                  <td className="px-4 py-3 text-slate-600">{row.erp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 text-sm text-slate-600">
          {pick(language, "Leia também: ", "Also read: ", "Lire aussi : ")}
          <Link
            className="ps-link-editorial font-semibold"
            href="/codigo-de-barras-gratis"
          >
            {pick(
              language,
              "gerador de código de barras grátis",
              "free barcode generator",
              "generateur de code-barres gratuit"
            )}
          </Link>
          {", "}
          <Link
            className="ps-link-editorial font-semibold"
            href="/recursos/controle-de-almoxarifado"
          >
            {pick(
              language,
              "controle de almoxarifado",
              "warehouse control",
              "controle d'entrepot"
            )}
          </Link>
          {", "}
          <Link
            className="ps-link-editorial font-semibold"
            href="/documentacao"
          >
            {pick(language, "documentação", "documentation", "documentation")}
          </Link>
          {pick(language, " e ", " and ", " et ")}
          <Link className="ps-link-editorial font-semibold" href="/precos">
            {pick(language, "preços", "pricing", "tarifs")}
          </Link>
          .
        </p>
      </section>

      <section className="ps-section-surface mb-12 p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl">
          {playbook.objectionsTitle}
        </h2>
        <div className="mt-5 space-y-4">
          {playbook.objections.map((item) => (
            <div key={item.q} className="ps-card p-4">
              <p className="font-semibold text-slate-900">{item.q}</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
