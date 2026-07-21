import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { IndustryDetailView } from "@/components/industry-detail-view";
import { JsonLd } from "@/components/json-ld";
import { getIndustryBySlug } from "@/lib/industries-data";
import { getIndustrySocialProof } from "@/data/industry-social-proof";
import { buildFaqPageSchema } from "@/lib/structured-data";

const INDUSTRY_METADATA: Record<
  string,
  { title: string; description: string }
> = {
  audiovisual: {
    title:
      "Sistema para Produtoras: Controle de Equipamentos Audiovisuais com QR Code",
    description:
      "Check-in/check-out de câmeras, lentes, iluminação e áudio com QR Code. Menos perda e mais rastreio para produtoras e locadoras. Teste grátis.",
  },
  events: {
    title:
      "Sistema para Empresas de Eventos: Equipamentos com Check-in/Check-out",
    description:
      "Controle som, luz, mobiliário e materiais por evento com QR Code. Saiba o que saiu, com quem está e o que voltou. Teste grátis Purple Stock.",
  },
  odontologico: {
    title: "Controle de Equipamentos Odontológicos com QR Code e Check-in",
    description:
      "Gestão de equipamentos dentários, kits e instrumentais: check-in/check-out, responsável e histórico. Para clínicas, labs e prestadores de serviço. Teste grátis.",
  },
  telecomunicacoes: {
    title: "Controle de Equipamentos de Telecom e Kits de Campo com QR Code",
    description:
      "Check-in/check-out de ONT, roteador, rádio e kits de instalação. Saiba o que cada técnico levou e o que voltou ao depósito. Para ISPs e integradoras. Teste grátis.",
  },
  pharmaceutical: {
    title: "Controle de Estoque e Equipamentos para o Setor de Saúde",
    description:
      "Rastreie medicamentos, insumos e equipamentos médicos com QR Code. Menos perda por validade e mais controle operacional. Teste grátis Purple Stock.",
  },
  automotivo: {
    title:
      "Estoque para Autopeças e Peças de Moto: Controle com Código de Barras",
    description:
      "Sistema de estoque para lojas de peças de carro e moto. SKU, código de barras/QR, reposição e menos ruptura no balcão. Teste grátis Purple Stock.",
  },
  restaurantes: {
    title: "Gestão de Estoque para Restaurantes",
    description:
      "Reduza desperdício e controle ingredientes, validade e fornecedores com um sistema de estoque para restaurantes.",
  },
  electrical: {
    title: "Gestão de Estoque para Setor Elétrico",
    description:
      "Controle equipamentos, componentes e ferramentas do setor elétrico com mais rastreabilidade e eficiência operacional.",
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

  const socialProof = getIndustrySocialProof(industry.slug);
  const faqSchema = buildFaqPageSchema(socialProof.faqs);

  return (
    <>
      <JsonLd data={faqSchema} />
      <Navbar />
      <IndustryDetailView industry={industry} />
      <Footer />
    </>
  );
}
