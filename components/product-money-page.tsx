import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { ProductMoneyCta } from "@/components/product-money-cta";
import { buildSoftwareLandingGraph } from "@/lib/structured-data";
import type {
  CompareRow,
  MoneyPageFaq,
  MoneyPageSection,
} from "@/lib/product-money-pages";
import { TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT } from "@/lib/pricing";

type RelatedLink = {
  href: string;
  label: string;
};

type ProductMoneyPageProps = {
  path: string;
  h1: string;
  lede: string;
  queryCluster: string;
  whatsappText: string;
  sections: MoneyPageSection[];
  faqs: MoneyPageFaq[];
  relatedLinks: RelatedLink[];
  compareRows?: CompareRow[];
  schemaName: string;
  schemaDescription: string;
  breadcrumbName: string;
};

export function ProductMoneyPage({
  path,
  h1,
  lede,
  queryCluster,
  whatsappText,
  sections,
  faqs,
  relatedLinks,
  compareRows,
  schemaName,
  schemaDescription,
  breadcrumbName,
}: ProductMoneyPageProps) {
  const graph = buildSoftwareLandingGraph({
    path,
    name: schemaName,
    description: schemaDescription,
    breadcrumbName,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <JsonLd data={graph} />
      <Navbar />

      <section className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 pt-24 pb-16">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white md:text-5xl">{h1}</h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90 md:text-xl">
            {lede}
          </p>
          <ProductMoneyCta
            queryCluster={queryCluster}
            whatsappText={whatsappText}
          />
          <p className="mt-4 text-sm text-white/80">
            {relatedLinks.map((link, index) => (
              <span key={link.href}>
                {index > 0 ? " · " : null}
                <Link href={link.href} className="font-semibold underline">
                  {link.label}
                </Link>
              </span>
            ))}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        {sections.map((section) => (
          <section key={section.title} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900">
              {section.title}
            </h2>
            {section.paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 40)}
                className="mt-4 text-lg text-gray-700"
              >
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        {compareRows ? (
          <section className="mb-12 overflow-x-auto">
            <h2 className="text-2xl font-bold text-gray-900">
              Planilha vs Purple Stock
            </h2>
            <table className="mt-6 min-w-full divide-y divide-gray-200 text-left text-sm">
              <thead>
                <tr className="text-gray-600">
                  <th className="py-3 pr-4">Critério</th>
                  <th className="py-3 pr-4">Planilha</th>
                  <th className="py-3">Purple Stock</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label} className="border-t border-gray-100">
                    <td className="py-3 pr-4 font-medium text-gray-900">
                      {row.label}
                    </td>
                    <td className="py-3 pr-4 text-gray-600">{row.planilha}</td>
                    <td className="py-3 text-gray-900">{row.purple}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        ) : null}

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900">
            Perguntas frequentes
          </h2>
          <div className="mt-6 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.q}
                className="rounded-xl border border-gray-200 bg-white p-5"
              >
                <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
                <p className="mt-2 text-gray-600">{faq.a}</p>
              </article>
            ))}
          </div>
        </section>
      </article>

      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Teste 7 dias na sua operação
          </h2>
          <p className="mt-4 text-white/90">
            {TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe, sem fidelidade.
            Comece pelo que some ou pelo que precisa voltar com responsável.
          </p>
          <ProductMoneyCta
            queryCluster={queryCluster}
            whatsappText={whatsappText}
            pageSection="money_footer"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}
