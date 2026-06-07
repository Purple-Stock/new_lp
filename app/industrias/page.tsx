"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/utils/translations";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Box,
  Store,
  Factory,
  Truck,
  Utensils,
  Pill,
  Car,
  Building2,
  Cpu,
  Video,
  Star,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Users,
  Shield,
  Clock,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackSeoCtaClick } from "@/lib/analytics";
import { getAppSignupUrl } from "@/lib/app";

type IndustryId =
  | "varejo"
  | "manufatura"
  | "logistica"
  | "food"
  | "pharmaceutical"
  | "automotivo"
  | "construction"
  | "technology"
  | "audiovisual"
  | "events"
  | "restaurantes"
  | "electrical";

type IndustryTranslationKey =
  | "retail"
  | "manufacturing"
  | "logistics"
  | "food"
  | "pharmaceutical"
  | "automotive"
  | "construction"
  | "technology"
  | "audiovisual"
  | "events"
  | "restaurantes"
  | "electrical";

interface Industry {
  id: IndustryId;
  translationKey: IndustryTranslationKey;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  gradient: string;
  description: string;
  benefits: string[];
  stats: {
    value: string;
    label: string;
  };
}

const industries: Industry[] = [
  {
    id: "varejo",
    translationKey: "retail",
    image: "/images/pexels-photo-264507.jpeg",
    icon: Store,
    color: "text-blue-600",
    gradient: "from-blue-500 to-blue-600",
    description:
      "Otimize suas operações de varejo com controle de estoque em tempo real e integração com PDV.",
    benefits: [
      "Controle em tempo real",
      "Integração PDV",
      "Gestão de promoções",
      "Análise de vendas",
    ],
    stats: { value: "40%", label: "Redução de perdas" },
  },
  {
    id: "manufatura",
    translationKey: "manufacturing",
    image: "/images/pexels-photo-1145434.jpeg",
    icon: Factory,
    color: "text-purple-600",
    gradient: "from-purple-500 to-purple-600",
    description:
      "Controle preciso de matérias-primas, produtos em processo e produtos acabados.",
    benefits: [
      "Controle de BOM",
      "Rastreamento de lotes",
      "Integração MRP/ERP",
      "Controle de qualidade",
    ],
    stats: { value: "35%", label: "Aumento de eficiência" },
  },
  {
    id: "logistica",
    translationKey: "logistics",
    image: "/images/pexels-photo-1267338.jpeg",
    icon: Truck,
    color: "text-green-600",
    gradient: "from-green-500 to-green-600",
    description:
      "Visibilidade completa e controle sobre toda a cadeia de suprimentos.",
    benefits: [
      "Rastreamento em tempo real",
      "Otimização de rotas",
      "Gestão de armazéns",
      "Controle de transportadoras",
    ],
    stats: { value: "50%", label: "Redução de custos" },
  },
  {
    id: "food",
    translationKey: "food",
    image: "/images/pexels-photo-1640777.jpeg",
    icon: Utensils,
    color: "text-orange-600",
    gradient: "from-orange-500 to-orange-600",
    description:
      "Controle rigoroso de datas de validade, lotes e rastreabilidade alimentar.",
    benefits: [
      "Controle de validade",
      "Rastreabilidade FIFO",
      "Gestão de alérgenos",
      "Conformidade sanitária",
    ],
    stats: { value: "60%", label: "Redução de perdas" },
  },
  {
    id: "pharmaceutical",
    translationKey: "pharmaceutical",
    image: "/images/medical-appointment-doctor-healthcare-40568.webp",
    icon: Pill,
    color: "text-red-600",
    gradient: "from-red-500 to-red-600",
    description:
      "Controle rigoroso de medicamentos, equipamentos e suprimentos médicos.",
    benefits: [
      "Controle de medicamentos",
      "Rastreabilidade de lotes",
      "Conformidade regulatória",
      "Gestão de equipamentos",
    ],
    stats: { value: "45%", label: "Melhoria na precisão" },
  },
  {
    id: "automotivo",
    translationKey: "automotive",
    image: "/images/pexels-photo-4483610.webp",
    icon: Car,
    color: "text-indigo-600",
    gradient: "from-indigo-500 to-indigo-600",
    description:
      "Gestão eficiente de peças, componentes e equipamentos automotivos.",
    benefits: [
      "Controle de peças",
      "Rastreamento de componentes",
      "Gestão de fornecedores",
      "Controle de qualidade",
    ],
    stats: { value: "30%", label: "Redução de tempo" },
  },
  {
    id: "construction",
    translationKey: "construction",
    image: "/images/construction-site-build-construction-work-159358.jpeg",
    icon: Building2,
    color: "text-amber-600",
    gradient: "from-amber-500 to-amber-600",
    description:
      "Controle de materiais, ferramentas e equipamentos por obra ou projeto.",
    benefits: [
      "Controle por projeto",
      "Gestão de ferramentas",
      "Alocação de materiais",
      "Controle de fornecedores",
    ],
    stats: { value: "55%", label: "Redução de desperdícios" },
  },
  {
    id: "technology",
    translationKey: "technology",
    image: "/images/pexels-photo-256541.webp",
    icon: Cpu,
    color: "text-cyan-600",
    gradient: "from-cyan-500 to-cyan-600",
    description: "Gestão de equipamentos, componentes e ativos tecnológicos.",
    benefits: [
      "Controle de equipamentos",
      "Gestão de licenças",
      "Rastreamento de ativos",
      "Controle de manutenção",
    ],
    stats: { value: "40%", label: "Aumento de produtividade" },
  },
  {
    id: "audiovisual",
    translationKey: "audiovisual",
    image: "/images/audio-visual-2.jpg",
    icon: Video,
    color: "text-pink-600",
    gradient: "from-pink-500 to-pink-600",
    description:
      "Controle de equipamentos de filmagem, iluminação, áudio e acessórios para produção audiovisual.",
    benefits: [
      "Controle de equipamentos",
      "Gestão de locações",
      "Rastreamento de acessórios",
      "Controle de manutenção",
    ],
    stats: { value: "45%", label: "Redução de perdas" },
  },
  {
    id: "events",
    translationKey: "events",
    image: "/images/events-1.jpg",
    icon: Star,
    color: "text-yellow-600",
    gradient: "from-yellow-500 to-yellow-600",
    description:
      "Gestão completa de equipamentos, materiais e recursos para eventos, festas e cerimônias.",
    benefits: [
      "Controle de equipamentos",
      "Gestão de materiais",
      "Rastreamento de recursos",
      "Controle de locações",
    ],
    stats: { value: "50%", label: "Aumento de eficiência" },
  },
  {
    id: "restaurantes",
    translationKey: "restaurantes",
    image: "/images/pexels-photo-1640777.jpeg",
    icon: Utensils,
    color: "text-emerald-600",
    gradient: "from-emerald-500 to-emerald-600",
    description:
      "Controle completo de ingredientes, estoque de alimentos e gestão de fornecedores para restaurantes.",
    benefits: [
      "Controle de ingredientes",
      "Gestão de fornecedores",
      "Controle de validade",
      "Rastreabilidade FIFO",
    ],
    stats: { value: "55%", label: "Redução de desperdícios" },
  },
  {
    id: "electrical",
    translationKey: "electrical",
    image: "/images/pexels-photo-4481259.webp",
    icon: Zap,
    color: "text-yellow-600",
    gradient: "from-yellow-500 to-yellow-600",
    description:
      "Gestão eficiente de equipamentos elétricos, componentes e ferramentas para o setor elétrico.",
    benefits: [
      "Controle de equipamentos",
      "Gestão de componentes",
      "Rastreamento de ferramentas",
      "Controle de manutenção",
    ],
    stats: { value: "45%", label: "Aumento de produtividade" },
  },
];

const industryNames: Record<IndustryId, string> = {
  varejo: "Controle de Estoque para Varejo",
  manufatura: "Controle de Estoque para Manufatura",
  logistica: "Controle de Estoque para Logistica",
  food: "Controle de Estoque para Alimentos e Bebidas",
  pharmaceutical: "Controle de Estoque para Farmaceutico",
  automotivo: "Controle de Estoque para Automotivo",
  construction: "Controle de Estoque para Construcao",
  technology: "Controle de Estoque para Tecnologia",
  audiovisual: "Controle de Equipamentos Audiovisuais",
  events: "Controle de Estoque para Eventos",
  restaurantes: "Controle de Estoque para Restaurantes",
  electrical: "Controle de Estoque para Setor Eletrico",
};

const globalBenefits = [
  {
    icon: TrendingUp,
    title: "Eficiência Operacional",
    description:
      "Reduza tempo e custos com processos automatizados e otimizados",
  },
  {
    icon: Shield,
    title: "Segurança e Conformidade",
    description:
      "Proteção de dados e conformidade com regulamentações do setor",
  },
  {
    icon: Clock,
    title: "Tempo Real",
    description:
      "Visibilidade instantânea do seu inventário em qualquer dispositivo",
  },
  {
    icon: Users,
    title: "Colaboração em Equipe",
    description:
      "Múltiplos usuários com diferentes níveis de acesso e permissões",
  },
];

export default function IndustriasPage() {
  const { language } = useLanguage();
  const t = translations[language];
  const industriesSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Solucoes por Setor | Purple Stock",
    description:
      "Pagina com solucoes de controle de estoque por setor, incluindo industria, varejo, logistica, restaurantes e audiovisual.",
    url: "https://www.purplestock.com.br/industrias",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: industries.map((industry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.purplestock.com.br/industrias/${industry.id}`,
        name: industryNames[industry.id],
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesSchema) }}
      />
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
                    Purple Stock · Setores
                  </span>
                </div>

                <span className="text-[10px] font-medium text-slate-400">
                  {language === "pt"
                    ? "Soluções por setor"
                    : language === "fr"
                      ? "Solutions par secteur"
                      : "Industry solutions"}
                </span>
              </div>

              <div className="p-8 text-center md:p-12">
                <div className="ps-badge-violet mb-6 inline-flex items-center px-4 py-2 text-sm normal-case tracking-normal">
                  <Star className="mr-2 h-4 w-4" />
                  {language === "pt"
                    ? "Soluções por Setor"
                    : language === "en"
                      ? "Industry Solutions"
                      : "Solutions par Secteur"}
                </div>

                <h1 className="ps-display text-4xl md:text-5xl lg:text-6xl">
                  {t.industries.title}
                </h1>

                <p className="ps-lead mx-auto mt-6 max-w-4xl text-xl lg:text-2xl">
                  {t.industries.description}
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Link
                    href={getAppSignupUrl()}
                    onClick={() =>
                      trackSeoCtaClick({
                        cta_name: "industries_hero_primary",
                        cta_target: "app",
                        page_section: "industries_hero",
                        query_cluster: "controle-de-estoque-por-setor",
                      })
                    }
                  >
                    <Button className="ps-btn-primary">
                      Começar teste de 7 dias
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link
                    href="/precos"
                    onClick={() =>
                      trackSeoCtaClick({
                        cta_name: "industries_hero_secondary",
                        cta_target: "internal_pricing",
                        page_section: "industries_hero",
                        query_cluster: "controle-de-estoque-por-setor",
                      })
                    }
                  >
                    <Button variant="outline" className="ps-btn-outline">
                      Ver preço por time
                    </Button>
                  </Link>
                </div>

                <Link
                  href="/recursos/controle-de-almoxarifado"
                  onClick={() =>
                    trackSeoCtaClick({
                      cta_name: "industries_hero_supporting_link",
                      cta_target: "internal_resource",
                      page_section: "industries_hero",
                      query_cluster: "controle-de-estoque-por-setor",
                    })
                  }
                  className="ps-link-editorial mt-4 inline-block text-sm font-semibold"
                >
                  Ver guia de controle de almoxarifado
                </Link>

                <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-3">
                  <div className="ps-card p-6">
                    <div className="mb-2 text-3xl font-bold text-brand-ui-primary">
                      12
                    </div>
                    <div className="text-sm text-slate-600">
                      {language === "pt"
                        ? "Setores Principais"
                        : language === "en"
                          ? "Main Industries"
                          : "Secteurs Principaux"}
                    </div>
                  </div>
                  <div className="ps-card p-6">
                    <div className="mb-2 text-3xl font-bold text-brand-ui-primary">
                      99.9%
                    </div>
                    <div className="text-sm text-slate-600">
                      {language === "pt"
                        ? "Uptime"
                        : language === "en"
                          ? "Uptime"
                          : "Disponibilité"}
                    </div>
                  </div>
                  <div className="ps-card p-6">
                    <div className="mb-2 text-3xl font-bold text-brand-ui-primary">
                      24/7
                    </div>
                    <div className="text-sm text-slate-600">
                      {language === "pt"
                        ? "Suporte"
                        : language === "en"
                          ? "Support"
                          : "Support"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="ps-display text-3xl md:text-4xl">
                {language === "pt"
                  ? "Soluções Especializadas por Setor"
                  : language === "en"
                    ? "Specialized Solutions by Industry"
                    : "Solutions Spécialisées par Secteur"}
              </h2>
              <p className="ps-lead mx-auto mt-4 max-w-3xl text-lg">
                {language === "pt"
                  ? "Cada setor tem necessidades únicas. Descubra como o Purple Stock se adapta ao seu negócio."
                  : language === "en"
                    ? "Each industry has unique needs. Discover how Purple Stock adapts to your business."
                    : "Chaque secteur a des besoins uniques. Découvrez comment Purple Stock s'adapte à votre entreprise."}
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry, index) => (
                <Link
                  key={index}
                  href={`/industrias/${industry.id}`}
                  className="ps-card group overflow-hidden transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={industry.image || "/placeholder.svg"}
                      alt={t.industries.industries[industry.translationKey]}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    <div className="absolute right-4 top-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-ui-primary shadow-sm">
                        <industry.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <div className="rounded-lg border border-brand-border-soft bg-white/95 px-3 py-2 shadow-sm backdrop-blur-sm">
                        <div className="text-lg font-bold text-brand-ink">
                          {industry.stats.value}
                        </div>
                        <div className="text-xs text-slate-600">
                          {industry.stats.label}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-semibold text-brand-ink transition-colors duration-200 group-hover:text-brand-ui-primary">
                      {t.industries.industries[industry.translationKey]}
                    </h3>

                    <p className="mb-4 text-sm leading-relaxed text-slate-600">
                      {industry.description}
                    </p>

                    <div className="mb-4 space-y-2">
                      {industry.benefits
                        .slice(0, 2)
                        .map((benefit, benefitIndex) => (
                          <div
                            key={benefitIndex}
                            className="flex items-center text-sm text-slate-600"
                          >
                            <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-brand-ui-primary" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-brand-ui-primary">
                        {language === "pt"
                          ? `Ver solução para ${t.industries.industries[industry.translationKey]}`
                          : language === "en"
                            ? `View solution for ${t.industries.industries[industry.translationKey]}`
                            : `Voir la solution pour ${t.industries.industries[industry.translationKey]}`}
                      </span>
                      <ArrowRight className="h-4 w-4 text-brand-ui-primary transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="pb-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="ps-display text-3xl md:text-4xl">
                {language === "pt"
                  ? "Benefícios para Todos os Setores"
                  : language === "en"
                    ? "Benefits for All Industries"
                    : "Avantages pour Tous les Secteurs"}
              </h2>
              <p className="ps-lead mx-auto mt-4 max-w-3xl text-lg">
                {language === "pt"
                  ? "Independente do seu setor, o Purple Stock oferece benefícios universais que transformam sua gestão de inventário."
                  : language === "en"
                    ? "Regardless of your industry, Purple Stock offers universal benefits that transform your inventory management."
                    : "Quel que soit votre secteur, Purple Stock offre des avantages universels qui transforment votre gestion des stocks."}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {globalBenefits.map((benefit, index) => (
                <div key={index} className="ps-card p-6 text-center">
                  <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-surface-soft">
                    <benefit.icon className="h-8 w-8 text-brand-ui-primary" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-brand-ink">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
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
              {language === "pt"
                ? "Pronto para transformar seu setor?"
                : language === "en"
                  ? "Ready to transform your industry?"
                  : "Prêt à transformer votre secteur ?"}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-violet-100/90">
              {language === "pt"
                ? "Junte-se a centenas de empresas que já otimizaram suas operações com soluções específicas para seu setor."
                : language === "en"
                  ? "Join hundreds of companies that have already optimized their operations with industry-specific solutions."
                  : "Rejoignez des centaines d'entreprises qui ont déjà optimisé leurs opérations avec des solutions spécifiques à leur secteur."}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link href={getAppSignupUrl()}>
                <Button
                  size="lg"
                  className="ps-btn-primary px-8 py-4 text-lg shadow-[0_8px_28px_rgba(139,92,246,0.4)]"
                >
                  <Zap className="mr-2 h-5 w-5" />
                  {language === "pt"
                    ? "Começar Teste Gratuito"
                    : language === "en"
                      ? "Start Free Trial"
                      : "Commencer l'Essai Gratuit"}
                </Button>
              </Link>
              <Link href="/precos">
                <Button
                  variant="outline"
                  size="lg"
                  className="border border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm hover:border-white/55 hover:bg-white/15"
                >
                  Ver preço por time
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
