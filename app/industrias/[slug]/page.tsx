import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Box,
  Check,
  Star,
  Users,
  TrendingUp,
  Shield,
  Clock,
  Zap,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCalendlyUrl } from "@/lib/contact";

// This would typically come from a database or API
const industriesData = [
  {
    name: "Atacado",
    slug: "atacado",
    image: "/images/pexels-photo-4483610.webp",
    description:
      "Otimize a gestão de estoque para operações de atacado com o Purple Stock. Nossa solução é ideal para empresas que lidam com grandes volumes de produtos e precisam de controle preciso do inventário.",
    benefits: [
      "Controle de estoque em múltiplos locais",
      "Gestão eficiente de grandes volumes de produtos",
      "Rastreamento de lotes e datas de validade",
      "Integração com sistemas de compra e venda",
      "Relatórios detalhados para tomada de decisões",
    ],
    features: [
      "Escaneamento de código de barras para entrada e saída rápida",
      "Alertas de estoque baixo e reposição automática",
      "Controle de acesso por função e departamento",
      "Histórico completo de movimentações",
      "Dashboards personalizados para análise de desempenho",
    ],
  },
  {
    name: "Varejo",
    slug: "varejo",
    image: "/images/pexels-photo-264507.jpeg",
    description:
      "Transforme sua operação de varejo com o Purple Stock. Nossa plataforma oferece as ferramentas necessárias para gerenciar seu estoque com precisão e atender seus clientes com eficiência.",
    benefits: [
      "Controle de estoque em tempo real",
      "Integração com PDV e e-commerce",
      "Gestão de promoções e descontos",
      "Análise de tendências de vendas",
      "Experiência de compra aprimorada para clientes",
    ],
    features: [
      "Interface intuitiva para operações diárias",
      "Escaneamento rápido de produtos",
      "Gestão de devoluções e trocas",
      "Relatórios de vendas e estoque",
      "Controle de múltiplas lojas",
    ],
  },
  {
    name: "Manufatura",
    slug: "manufatura",
    image: "/images/pexels-photo-1145434.jpeg",
    description:
      "Otimize sua produção e controle de materiais com o Purple Stock. Nossa solução é projetada para atender às necessidades específicas da indústria de manufatura.",
    benefits: [
      "Controle preciso de matérias-primas",
      "Rastreamento de produtos em processo",
      "Gestão de produtos acabados",
      "Redução de desperdícios",
      "Planejamento eficiente da produção",
    ],
    features: [
      "Lista de materiais (BOM) detalhada",
      "Rastreamento de lotes e números de série",
      "Integração com sistemas MRP/ERP",
      "Controle de qualidade e conformidade",
      "Gestão de fornecedores",
    ],
  },
  {
    name: "Logística",
    slug: "logistica",
    image: "/images/pexels-photo-1267338.jpeg",
    description:
      "Simplifique suas operações logísticas com o Purple Stock. Nossa plataforma oferece visibilidade completa e controle sobre toda a cadeia de suprimentos.",
    benefits: [
      "Rastreamento em tempo real de mercadorias",
      "Otimização de rotas e entregas",
      "Redução de custos operacionais",
      "Melhoria na satisfação do cliente",
      "Gestão eficiente de armazéns",
    ],
    features: [
      "Controle de recebimento e expedição",
      "Gestão de transportadoras",
      "Rastreamento de entregas",
      "Organização de armazéns por zonas",
      "Relatórios de desempenho logístico",
    ],
  },
  {
    name: "Automotivo",
    slug: "automotivo",
    image: "/images/pexels-photo-4483610.webp",
    description:
      "Transforme sua gestão de peças automotivas com o Purple Stock. Nossa solução é projetada especificamente para concessionárias, oficinas mecânicas, distribuidoras de peças e empresas do setor automotivo que precisam de controle total sobre peças, componentes e equipamentos.",
    benefits: [
      "Controle completo de peças e componentes automotivos",
      "Gestão eficiente de fornecedores e distribuidores",
      "Rastreamento de peças por marca e modelo",
      "Redução de perdas e danos em peças",
      "Otimização do uso de recursos automotivos",
      "Controle de manutenção preventiva e corretiva",
      "Gestão de garantias e seguros de peças",
      "Integração com sistemas de gestão automotiva",
    ],
    features: [
      "Controle de peças por categoria (motor, transmissão, freios, suspensão)",
      "Sistema de check-in/check-out para peças",
      "Rastreamento de componentes com códigos QR personalizados",
      "Gestão de fornecedores e distribuidores",
      "Controle de condições de armazenamento",
      "Alertas para reposição de peças populares",
      "Relatórios de utilização por peça e veículo",
      "Gestão de fornecedores e serviços técnicos",
      "Controle de versões e atualizações de peças",
      "Integração com sistemas de orçamento e faturamento",
      "Dashboard específico para peças críticas",
      "Sistema de backup para dados de peças",
    ],
  },
  {
    name: "Moda",
    slug: "fashion",
    image: "/images/pexels-photo-994523.webp",
    description:
      "Gerencie coleções, tamanhos, cores e estilos com facilidade usando o Purple Stock. Nossa solução é ideal para o setor de moda e vestuário.",
    benefits: [
      "Controle de estoque por atributos (tamanho, cor, estilo)",
      "Gestão de coleções sazonais",
      "Rastreamento de tendências de vendas",
      "Redução de sobras de estoque",
      "Integração com e-commerce de moda",
    ],
    features: [
      "Matriz de tamanhos e cores",
      "Gestão de etiquetas e códigos de barras",
      "Controle de estoque em lojas físicas e online",
      "Alertas para reposição de itens populares",
      "Relatórios de desempenho por coleção",
    ],
  },
  {
    name: "Alimentos & Bebidas",
    slug: "food",
    image: "/images/pexels-photo-1640777.jpeg",
    description:
      "Controle seu estoque de alimentos e bebidas com eficiência usando o Purple Stock. Nossa plataforma ajuda a gerenciar datas de validade, lotes e rastreabilidade.",
    benefits: [
      "Controle rigoroso de datas de validade",
      "Rastreabilidade de lotes e fornecedores",
      "Gestão FIFO (primeiro a entrar, primeiro a sair)",
      "Redução de perdas por vencimento",
      "Conformidade com normas sanitárias",
    ],
    features: [
      "Alertas automáticos para produtos próximos ao vencimento",
      "Controle de temperatura e condições de armazenamento",
      "Gestão de receitas e ingredientes",
      "Rastreamento de alérgenos",
      "Relatórios de perdas e desperdícios",
    ],
  },
  {
    name: "Restaurantes",
    slug: "restaurantes",
    image: "/images/pexels-photo-1640777.jpeg",
    description:
      "Transforme a gestão do seu restaurante com o Purple Stock. Nossa plataforma oferece controle completo de ingredientes, estoque de alimentos e gestão de fornecedores para otimizar suas operações culinárias.",
    benefits: [
      "Controle preciso de ingredientes e estoque de alimentos",
      "Gestão eficiente de fornecedores e entregas",
      "Controle rigoroso de datas de validade e frescor",
      "Rastreabilidade FIFO para ingredientes perecíveis",
      "Redução significativa de desperdícios alimentares",
      "Otimização do planejamento de cardápios",
      "Controle de custos por prato e ingrediente",
      "Integração com sistemas de pedidos e delivery",
    ],
    features: [
      "Gestão de receitas com lista de ingredientes detalhada",
      "Controle de estoque por tipo de ingrediente (frescos, congelados, secos)",
      "Alertas automáticos para produtos próximos ao vencimento",
      "Sistema de check-in/check-out para ingredientes",
      "Controle de temperatura e condições de armazenamento",
      "Gestão de fornecedores e horários de entrega",
      "Relatórios de consumo por prato e período",
      "Controle de alérgenos e restrições alimentares",
      "Dashboard específico para chefes e gerentes",
      "Integração com sistemas de faturamento e contabilidade",
      "Controle de múltiplas unidades e franquias",
      "Sistema de backup para dados críticos de receitas",
    ],
  },
  {
    name: "Elétrico",
    slug: "electrical",
    image: "/images/pexels-photo-4481259.webp",
    description:
      "Otimize a gestão do seu negócio elétrico com o Purple Stock. Nossa plataforma oferece controle completo de equipamentos elétricos, componentes, ferramentas e materiais para maximizar a eficiência operacional.",
    benefits: [
      "Controle preciso de equipamentos elétricos e componentes",
      "Gestão eficiente de ferramentas e instrumentos de medição",
      "Rastreamento de componentes por especificação técnica",
      "Controle de manutenção preventiva e corretiva",
      "Redução de tempo de inatividade em equipamentos",
      "Otimização do uso de recursos elétricos",
      "Controle de garantias e certificações de equipamentos",
      "Integração com sistemas de gestão técnica",
    ],
    features: [
      "Gestão de equipamentos por categoria (transformadores, painéis, cabos)",
      "Sistema de check-in/check-out para ferramentas e equipamentos",
      "Rastreamento de componentes com códigos QR personalizados",
      "Controle de especificações técnicas e certificações",
      "Alertas para manutenção preventiva de equipamentos",
      "Relatórios de utilização por equipamento e projeto",
      "Gestão de fornecedores e serviços técnicos",
      "Controle de versões e atualizações de equipamentos",
      "Dashboard específico para técnicos e engenheiros",
      "Integração com sistemas de orçamento e faturamento",
      "Controle de múltiplas instalações e projetos",
      "Sistema de backup para dados críticos de equipamentos",
    ],
  },
  {
    name: "Construção",
    slug: "construction",
    image: "/images/building-800x600.webp",
    description:
      "Gerencie materiais de construção, ferramentas e equipamentos com o Purple Stock. Nossa solução é ideal para construtoras e empresas do setor.",
    benefits: [
      "Controle de materiais por obra ou projeto",
      "Rastreamento de ferramentas e equipamentos",
      "Redução de perdas e desperdícios",
      "Planejamento eficiente de compras",
      "Gestão de fornecedores e entregas",
    ],
    features: [
      "Alocação de materiais por projeto",
      "Controle de empréstimo de ferramentas",
      "Gestão de estoque em canteiros de obras",
      "Relatórios de consumo por fase da obra",
      "Integração com sistemas de orçamento",
    ],
  },
  {
    name: "Médico",
    slug: "pharmaceutical",
    image: "/images/medical-appointment-doctor-healthcare-40568.webp",
    description:
      "Controle medicamentos, equipamentos e suprimentos médicos com precisão usando o Purple Stock. Nossa plataforma atende às necessidades específicas do setor de saúde.",
    benefits: [
      "Controle rigoroso de medicamentos e insumos",
      "Rastreabilidade de lotes e validades",
      "Gestão de equipamentos médicos",
      "Conformidade com normas regulatórias",
      "Redução de perdas por vencimento",
    ],
    features: [
      "Alertas de estoque baixo para itens críticos",
      "Controle de produtos controlados",
      "Rastreamento de equipamentos e manutenções",
      "Gestão de temperatura para medicamentos",
      "Relatórios para auditoria e conformidade",
    ],
  },
  {
    name: "Beleza",
    slug: "beauty",
    image: "/images/pexels-photo-3985298.webp",
    description:
      "Gerencie produtos de beleza, cosméticos e equipamentos com o Purple Stock. Nossa solução é ideal para salões, spas e lojas de cosméticos.",
    benefits: [
      "Controle de produtos por linha e marca",
      "Gestão de datas de validade",
      "Rastreamento de uso de produtos em serviços",
      "Análise de produtos mais vendidos",
      "Integração com sistemas de agendamento",
    ],
    features: [
      "Controle de estoque por categoria",
      "Gestão de produtos para revenda",
      "Controle de produtos usados em serviços",
      "Alertas para reposição automática",
      "Relatórios de desempenho por linha",
    ],
  },
  {
    name: "Comércio",
    slug: "commerce",
    image: "/images/commerce-800x600.webp",
    description:
      "Otimize suas operações comerciais com o Purple Stock. Nossa plataforma oferece as ferramentas necessárias para gerenciar seu estoque com eficiência.",
    benefits: [
      "Controle de estoque em tempo real",
      "Gestão de múltiplos fornecedores",
      "Análise de giro de estoque",
      "Redução de custos operacionais",
      "Melhoria na experiência do cliente",
    ],
    features: [
      "Interface intuitiva para operações diárias",
      "Escaneamento rápido de produtos",
      "Gestão de preços e promoções",
      "Relatórios de vendas e estoque",
      "Integração com sistemas de PDV",
    ],
  },
  {
    name: "Educação",
    slug: "education",
    image: "/images/pexels-photo-256541.webp",
    description:
      "Gerencie materiais didáticos, equipamentos e suprimentos escolares com o Purple Stock. Nossa solução é ideal para escolas, universidades e instituições de ensino.",
    benefits: [
      "Controle de materiais didáticos",
      "Gestão de equipamentos e laboratórios",
      "Rastreamento de empréstimos de livros e materiais",
      "Redução de perdas e desperdícios",
      "Planejamento eficiente de compras",
    ],
    features: [
      "Controle de estoque por departamento",
      "Gestão de empréstimos de equipamentos",
      "Rastreamento de livros e materiais",
      "Alertas para reposição de materiais",
      "Relatórios de consumo por período letivo",
    ],
  },
  {
    name: "Tecnologia",
    slug: "technology",
    image: "/images/pexels-photo-256541.webp",
    description:
      "Transforme sua gestão de equipamentos tecnológicos com o Purple Stock. Nossa solução é projetada especificamente para empresas de tecnologia, startups, e departamentos de TI que precisam de controle total sobre equipamentos, componentes e ativos tecnológicos.",
    benefits: [
      "Controle completo de equipamentos de TI e componentes",
      "Gestão eficiente de licenças de software",
      "Rastreamento de ativos tecnológicos",
      "Redução de perdas e danos em equipamentos",
      "Otimização do uso de recursos tecnológicos",
      "Controle de manutenção preventiva e corretiva",
      "Gestão de garantias e seguros de equipamentos",
      "Integração com sistemas de gestão de ativos",
    ],
    features: [
      "Controle de equipamentos por categoria (servidores, desktops, laptops, periféricos)",
      "Sistema de check-in/check-out para equipamentos",
      "Rastreamento de componentes com códigos QR personalizados",
      "Gestão de licenças de software e assinaturas",
      "Controle de condições de armazenamento",
      "Alertas para manutenção preventiva de equipamentos",
      "Relatórios de utilização por equipamento e usuário",
      "Gestão de fornecedores e serviços técnicos",
      "Controle de versões e atualizações de firmware",
      "Integração com sistemas de orçamento e faturamento",
      "Dashboard específico para equipamentos críticos",
      "Sistema de backup para dados de equipamentos",
    ],
  },
  {
    name: "Produção Audiovisual",
    slug: "audiovisual",
    image: "/images/audio-visual-1.jpg",
    description:
      "Transforme sua gestão de equipamentos audiovisuais com o Purple Stock. Nossa solução é projetada especificamente para produtoras, estúdios de filmagem, empresas de eventos e profissionais do setor audiovisual que precisam de controle total sobre câmeras, iluminação, áudio e acessórios.",
    benefits: [
      "Controle completo de equipamentos de filmagem e fotografia",
      "Gestão eficiente de locações e projetos",
      "Rastreamento de acessórios e consumíveis",
      "Redução de perdas e danos em equipamentos",
      "Otimização do uso de recursos por projeto",
      "Controle de manutenção preventiva e corretiva",
      "Gestão de seguros e garantias de equipamentos",
      "Integração com sistemas de agendamento e produção",
    ],
    features: [
      "Controle de equipamentos por categoria (câmeras, lentes, iluminação, áudio)",
      "Sistema de check-in/check-out para locações e projetos",
      "Rastreamento de acessórios com códigos QR personalizados",
      "Gestão de baterias, cartões de memória e consumíveis",
      "Controle de temperatura e condições de armazenamento",
      "Alertas para manutenção preventiva de equipamentos",
      "Relatórios de utilização por equipamento e projeto",
      "Gestão de fornecedores e serviços técnicos",
      "Controle de versões e atualizações de firmware",
      "Integração com sistemas de orçamento e faturamento",
      "Dashboard específico para equipamentos críticos",
      "Sistema de backup para dados de equipamentos",
    ],
  },
  {
    name: "Eventos",
    slug: "events",
    image: "/images/events-2.jpg",
    description:
      "Transforme sua gestão de eventos com o Purple Stock. Nossa solução é projetada especificamente para empresas de eventos, organizadores de festas, casamentos, conferências e profissionais do setor que precisam de controle total sobre equipamentos, materiais e recursos.",
    benefits: [
      "Controle completo de equipamentos de eventos (som, iluminação, mobiliário)",
      "Gestão eficiente de materiais e decorações",
      "Rastreamento de recursos por evento e projeto",
      "Redução de perdas e danos em equipamentos",
      "Otimização do uso de recursos por evento",
      "Controle de manutenção preventiva e corretiva",
      "Gestão de seguros e garantias de equipamentos",
      "Integração com sistemas de agendamento e eventos",
    ],
    features: [
      "Controle de equipamentos por categoria (som, iluminação, mobiliário, decorações)",
      "Sistema de check-in/check-out para eventos e projetos",
      "Rastreamento de materiais com códigos QR personalizados",
      "Gestão de consumíveis e acessórios",
      "Controle de condições de armazenamento",
      "Alertas para manutenção preventiva de equipamentos",
      "Relatórios de utilização por equipamento e evento",
      "Gestão de fornecedores e serviços técnicos",
      "Controle de versões e atualizações de equipamentos",
      "Integração com sistemas de orçamento e faturamento",
      "Dashboard específico para equipamentos críticos",
      "Sistema de backup para dados de equipamentos",
    ],
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData.find((ind) => ind.slug === slug);

  if (!industry) {
    return buildPageMetadata({
      title: "Solucoes por Setor",
      description:
        "Veja como o Purple Stock adapta o controle de estoque para diferentes operacoes e segmentos.",
      path: "/industrias",
    });
  }

  if (industry.slug === "audiovisual") {
    return buildPageMetadata({
      title: "Controle de Equipamentos Audiovisuais para Produtoras e Eventos",
      description:
        "Controle câmeras, lentes, iluminação e áudio com check-in/check-out, manutenção e rastreabilidade para produtoras e locadoras.",
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
  const industry = industriesData.find((ind) => ind.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="relative pt-24 pb-20">
        <section className="pb-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="ps-panel overflow-hidden">
              <div className="ps-panel-chrome relative flex items-center justify-between px-4 py-2.5 sm:px-5">
                <div className="flex items-center gap-[6px]" aria-hidden="true">
                  <span className="h-[12px] w-[12px] rounded-full bg-[#e86a63] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12)]" />
                  <span className="h-[12px] w-[12px] rounded-full bg-[#e9b54c] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12)]" />
                  <span className="h-[12px] w-[12px] rounded-full bg-[#4ab96a] shadow-[inset_0_0_0_0.5px_rgba(0,0,0,0.12)]" />
                </div>

                <div className="absolute left-1/2 flex -translate-x-1/2 items-center gap-2">
                  <div className="flex h-4 w-4 items-center justify-center rounded bg-brand-ui-primary shadow-sm">
                    <Box className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-[12px] font-semibold tracking-wide text-slate-600">
                    Purple Stock · {industry.name}
                  </span>
                </div>

                <span className="text-[10px] font-medium text-slate-400">
                  Solução especializada
                </span>
              </div>

              <div className="relative h-[420px] overflow-hidden">
                <Image
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.name}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />

                <div className="absolute inset-0 flex items-end">
                  <div className="w-full p-6 md:p-10">
                    <Link
                      href="/industrias"
                      className="group mb-6 inline-flex items-center text-sm font-semibold text-white/90 transition-colors hover:text-white"
                    >
                      <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                      Voltar para Indústrias
                    </Link>

                    <div className="ps-badge-violet mb-4 inline-flex items-center border-white/20 bg-white/15 px-4 py-2 text-sm normal-case tracking-normal text-white">
                      <Star className="mr-2 h-4 w-4" />
                      Solução Especializada
                    </div>

                    <h1 className="ps-display max-w-4xl text-4xl text-white md:text-5xl lg:text-6xl">
                      {industry.name}
                    </h1>

                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-white/90 md:text-xl">
                      {industry.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Benefits Section */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h2 className="ps-display mb-4 text-3xl md:text-4xl">
                    Benefícios para {industry.name}
                  </h2>
                  <p className="ps-lead text-lg">
                    Descubra como o Purple Stock pode transformar suas operações
                    e impulsionar o crescimento do seu negócio.
                  </p>
                </div>

                <div className="space-y-4">
                  {industry.benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="ps-proof-card flex items-start gap-4 p-4"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-ui-primary">
                        <Check className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="text-base font-semibold text-brand-ink">
                        {benefit}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h2 className="ps-display mb-4 text-3xl md:text-4xl">
                    Recursos Principais
                  </h2>
                  <p className="ps-lead text-lg">
                    Funcionalidades avançadas projetadas especificamente para
                    atender às necessidades do seu setor.
                  </p>
                </div>

                <div className="space-y-4">
                  {industry.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-lg border border-brand-border-soft bg-brand-surface-soft/50 p-4"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-surface-soft">
                        <Star className="h-5 w-5 text-brand-ui-primary" />
                      </div>
                      <p className="text-base leading-relaxed text-slate-700">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="ps-display text-3xl md:text-4xl">
                Resultados Comprovados
              </h2>
              <p className="ps-lead mx-auto mt-4 max-w-3xl text-lg">
                Empresas do setor de {industry.name} já estão transformando suas
                operações com o Purple Stock.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                {
                  icon: TrendingUp,
                  value: "40%",
                  label: "Aumento na Eficiência",
                },
                { icon: Shield, value: "99.9%", label: "Precisão no Controle" },
                { icon: Clock, value: "24/7", label: "Disponibilidade" },
                { icon: Users, value: "100%", label: "Satisfação" },
              ].map((stat) => (
                <div key={stat.label} className="ps-card p-6 text-center">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-surface-soft">
                    <stat.icon className="h-7 w-7 text-brand-ui-primary" />
                  </div>
                  <div className="mb-2 text-3xl font-bold text-brand-ui-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="ps-display text-3xl md:text-4xl">
                Casos de Sucesso
              </h2>
              <p className="ps-lead mx-auto mt-4 max-w-3xl text-lg">
                Empresas do setor de {industry.name} que transformaram suas
                operações com o Purple Stock.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="ps-card p-8">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-ui-primary">
                    <Star className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-ink">
                      Empresa de {industry.name}
                    </h3>
                    <p className="text-slate-600">Setor: {industry.name}</p>
                  </div>
                </div>
                <blockquote className="mb-6 text-lg leading-relaxed text-slate-700">
                  &ldquo;O Purple Stock revolucionou nossa gestão de estoque.
                  Conseguimos reduzir perdas em 30% e aumentar a eficiência
                  operacional significativamente.&rdquo;
                </blockquote>
                <div className="flex items-center text-sm text-slate-500">
                  <div className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                  Cliente desde 2023
                </div>
              </div>

              <div className="ps-card p-8">
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-ui-primary">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-ink">
                      Empresa de {industry.name}
                    </h3>
                    <p className="text-slate-600">Setor: {industry.name}</p>
                  </div>
                </div>
                <blockquote className="mb-6 text-lg leading-relaxed text-slate-700">
                  &ldquo;A implementação do Purple Stock foi rápida e os
                  resultados foram imediatos. Nossa equipe adorou a facilidade
                  de uso e a interface intuitiva.&rdquo;
                </blockquote>
                <div className="flex items-center text-sm text-slate-500">
                  <div className="mr-2 h-2 w-2 rounded-full bg-emerald-500" />
                  Cliente desde 2023
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-brand-violet/15 py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-[#2d2248] via-brand-chrome-graphite to-[#1a2f4f]"
          />
          <div
            aria-hidden="true"
            className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand-violet/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-brand-link-blue/25 blur-3xl"
          />

          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="ps-display text-4xl text-white md:text-5xl">
              Transforme sua gestão de estoque hoje
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-lg text-violet-100/90">
              Junte-se a milhares de empresas que já otimizaram suas operações
              com o Purple Stock e descubra como podemos ajudar sua empresa do
              setor de {industry.name}.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="https://app.purplestock.com.br/">
                <Button
                  size="lg"
                  className="ps-btn-primary px-8 py-4 text-lg shadow-[0_8px_28px_rgba(139,92,246,0.4)]"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Começar Teste Gratuito
                </Button>
              </Link>

              <Link href={getCalendlyUrl()}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm hover:border-white/55 hover:bg-white/15"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Agendar Demonstração
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
