import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { IndustryDetailView } from "@/components/industry-detail-view";
import {
  getIndustryBySlug,
  industriesData,
  isIndexableIndustry,
} from "@/lib/industries-data";
import {
  buildDefaultIndustrySerpCopy,
  getIndustrySerpCopy,
} from "@/lib/industry-page-seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return buildPageMetadata({
      title: "Solucoes por Setor",
      description:
        "Veja como o Purple Stock adapta o controle de estoque para diferentes operacoes e segmentos.",
      path: "/industrias",
    });
  }

  const customMetadata = getIndustrySerpCopy(industry.slug);

  const robots = isIndexableIndustry(industry.slug)
    ? undefined
    : { index: false, follow: true };

  if (customMetadata) {
    return buildPageMetadata({
      title: customMetadata.title,
      description: customMetadata.description,
      path: `/industrias/${industry.slug}`,
      robots,
    });
  }

  return buildPageMetadata({
    title: buildDefaultIndustrySerpCopy(industry.name).title,
    description: industry.description,
    path: `/industrias/${industry.slug}`,
    robots,
  });
}

export function generateStaticParams() {
  return industriesData.map((industry) => ({ slug: industry.slug }));
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  // FAQ accordion stays in IndustryDetailView; FAQPage JSON-LD omitted
  // (rich results largely limited outside gov/health).

  return (
    <>
      <Navbar />
      <IndustryDetailView industry={industry} />
      <Footer />
    </>
  );
}
