import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { IndustryDetailView } from "@/components/industry-detail-view";
import { getIndustryBySlug } from "@/lib/industries-data";

const INDUSTRY_METADATA: Record<
  string,
  { title: string; description: string }
> = {
  audiovisual: {
    title: "Controle de Equipamentos Audiovisuais para Produtoras e Eventos",
    description:
      "Controle câmeras, lentes, iluminação e áudio com check-in/check-out, manutenção e rastreabilidade para produtoras e locadoras.",
  },
  restaurantes: {
    title: "Gestao de Estoque para Restaurantes",
    description:
      "Reduza desperdicio e controle ingredientes, validade e fornecedores com um sistema de estoque para restaurantes.",
  },
  electrical: {
    title: "Gestao de Estoque para Setor Eletrico",
    description:
      "Controle equipamentos, componentes e ferramentas do setor eletrico com mais rastreabilidade e eficiencia operacional.",
  },
};

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

  const customMetadata = INDUSTRY_METADATA[industry.slug];

  if (customMetadata) {
    return buildPageMetadata({
      title: customMetadata.title,
      description: customMetadata.description,
      path: `/industrias/${industry.slug}`,
    });
  }

  return buildPageMetadata({
    title: `Gestao de Estoque para ${industry.name}`,
    description: industry.description,
    path: `/industrias/${industry.slug}`,
  });
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

  return (
    <>
      <Navbar />
      <IndustryDetailView industry={industry} />
      <Footer />
    </>
  );
}
