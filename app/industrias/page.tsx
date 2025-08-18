"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { 
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
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"

type IndustryId = "retail" | "manufacturing" | "logistics" | "food" | "pharmaceutical" | "automotive" | "construction" | "technology" | "audiovisual"

interface Industry {
  id: IndustryId
  image: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  gradient: string
  description: string
  benefits: string[]
  stats: {
    value: string
    label: string
  }
}

const industries: Industry[] = [
  {
    id: "retail",
    image: "/images/pexels-photo-264507.jpeg",
    icon: Store,
    color: "text-blue-600",
    gradient: "from-blue-500 to-blue-600",
    description: "Otimize suas operações de varejo com controle de estoque em tempo real e integração com PDV.",
    benefits: ["Controle em tempo real", "Integração PDV", "Gestão de promoções", "Análise de vendas"],
    stats: { value: "40%", label: "Redução de perdas" }
  },
  {
    id: "manufacturing",
    image: "/images/pexels-photo-1145434.jpeg",
    icon: Factory,
    color: "text-purple-600",
    gradient: "from-purple-500 to-purple-600",
    description: "Controle preciso de matérias-primas, produtos em processo e produtos acabados.",
    benefits: ["Controle de BOM", "Rastreamento de lotes", "Integração MRP/ERP", "Controle de qualidade"],
    stats: { value: "35%", label: "Aumento de eficiência" }
  },
  {
    id: "logistics",
    image: "/images/pexels-photo-1267338.jpeg",
    icon: Truck,
    color: "text-green-600",
    gradient: "from-green-500 to-green-600",
    description: "Visibilidade completa e controle sobre toda a cadeia de suprimentos.",
    benefits: ["Rastreamento em tempo real", "Otimização de rotas", "Gestão de armazéns", "Controle de transportadoras"],
    stats: { value: "50%", label: "Redução de custos" }
  },
  {
    id: "food",
    image: "/images/pexels-photo-1640777.jpeg",
    icon: Utensils,
    color: "text-orange-600",
    gradient: "from-orange-500 to-orange-600",
    description: "Controle rigoroso de datas de validade, lotes e rastreabilidade alimentar.",
    benefits: ["Controle de validade", "Rastreabilidade FIFO", "Gestão de alérgenos", "Conformidade sanitária"],
    stats: { value: "60%", label: "Redução de perdas" }
  },
  {
    id: "pharmaceutical",
    image: "/images/medical-appointment-doctor-healthcare-40568.webp",
    icon: Pill,
    color: "text-red-600",
    gradient: "from-red-500 to-red-600",
    description: "Controle rigoroso de medicamentos, equipamentos e suprimentos médicos.",
    benefits: ["Controle de medicamentos", "Rastreabilidade de lotes", "Conformidade regulatória", "Gestão de equipamentos"],
    stats: { value: "45%", label: "Melhoria na precisão" }
  },
  {
    id: "automotive",
    image: "/images/pexels-photo-4483610.webp",
    icon: Car,
    color: "text-indigo-600",
    gradient: "from-indigo-500 to-indigo-600",
    description: "Gestão eficiente de peças, componentes e equipamentos automotivos.",
    benefits: ["Controle de peças", "Rastreamento de componentes", "Gestão de fornecedores", "Controle de qualidade"],
    stats: { value: "30%", label: "Redução de tempo" }
  },
  {
    id: "construction",
    image: "/images/construction-site-build-construction-work-159358.jpeg",
    icon: Building2,
    color: "text-amber-600",
    gradient: "from-amber-500 to-amber-600",
    description: "Controle de materiais, ferramentas e equipamentos por obra ou projeto.",
    benefits: ["Controle por projeto", "Gestão de ferramentas", "Alocação de materiais", "Controle de fornecedores"],
    stats: { value: "55%", label: "Redução de desperdícios" }
  },
  {
    id: "technology",
    image: "/images/pexels-photo-256541.webp",
    icon: Cpu,
    color: "text-cyan-600",
    gradient: "from-cyan-500 to-cyan-600",
    description: "Gestão de equipamentos, componentes e ativos tecnológicos.",
    benefits: ["Controle de equipamentos", "Gestão de licenças", "Rastreamento de ativos", "Controle de manutenção"],
    stats: { value: "40%", label: "Aumento de produtividade" }
  },
  {
    id: "audiovisual",
    image: "/images/audio-visual-2.jpg",
    icon: Video,
    color: "text-pink-600",
    gradient: "from-pink-500 to-pink-600",
    description: "Controle de equipamentos de filmagem, iluminação, áudio e acessórios para produção audiovisual.",
    benefits: ["Controle de equipamentos", "Gestão de locações", "Rastreamento de acessórios", "Controle de manutenção"],
    stats: { value: "45%", label: "Redução de perdas" }
  },
]

const globalBenefits = [
  {
    icon: TrendingUp,
    title: "Eficiência Operacional",
    description: "Reduza tempo e custos com processos automatizados e otimizados"
  },
  {
    icon: Shield,
    title: "Segurança e Conformidade",
    description: "Proteção de dados e conformidade com regulamentações do setor"
  },
  {
    icon: Clock,
    title: "Tempo Real",
    description: "Visibilidade instantânea do seu inventário em qualquer dispositivo"
  },
  {
    icon: Users,
    title: "Colaboração em Equipe",
    description: "Múltiplos usuários com diferentes níveis de acesso e permissões"
  }
]

export default function IndustriasPage() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 pb-16">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2" />
            {language === "pt" ? "Soluções por Setor" : language === "en" ? "Industry Solutions" : "Solutions par Secteur"}
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
              {t.industries.title}
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            {t.industries.description}
          </p>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-blue-600 mb-2">9</div>
              <div className="text-sm text-gray-600">{language === "pt" ? "Setores Principais" : language === "en" ? "Main Industries" : "Secteurs Principaux"}</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
              <div className="text-sm text-gray-600">{language === "pt" ? "Uptime" : language === "en" ? "Uptime" : "Disponibilité"}</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">{language === "pt" ? "Suporte" : language === "en" ? "Support" : "Support"}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            {language === "pt" ? "Soluções Especializadas por Setor" : language === "en" ? "Specialized Solutions by Industry" : "Solutions Spécialisées par Secteur"}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === "pt" 
              ? "Cada setor tem necessidades únicas. Descubra como o Purple Stock se adapta ao seu negócio."
              : language === "en"
              ? "Each industry has unique needs. Discover how Purple Stock adapts to your business."
              : "Chaque secteur a des besoins uniques. Découvrez comment Purple Stock s'adapte à votre entreprise."
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Link
              key={index}
              href={`/industrias/${industry.id}`}
              className="group relative bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Industry Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={industry.image || "/placeholder.svg"}
                  alt={t.industries.industries[industry.id]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Industry Icon */}
                <div className="absolute top-4 right-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.gradient} flex items-center justify-center shadow-lg`}>
                    <industry.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Stats Badge */}
                <div className="absolute bottom-4 left-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <div className="text-lg font-bold text-gray-900">{industry.stats.value}</div>
                    <div className="text-xs text-gray-600">{industry.stats.label}</div>
                  </div>
                </div>
              </div>

              {/* Industry Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-200">
                  {t.industries.industries[industry.id]}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {industry.description}
                </p>

                {/* Benefits Preview */}
                <div className="space-y-2 mb-4">
                  {industry.benefits.slice(0, 2).map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-purple-600 font-medium group-hover:text-purple-700 transition-colors duration-200">
                    {language === "pt" ? "Saiba Mais" : language === "en" ? "Learn More" : "En Savoir Plus"}
                  </span>
                  <ArrowRight className="w-4 h-4 text-purple-600 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Global Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === "pt" ? "Benefícios para Todos os Setores" : language === "en" ? "Benefits for All Industries" : "Avantages pour Tous les Secteurs"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "pt" 
                ? "Independente do seu setor, o Purple Stock oferece benefícios universais que transformam sua gestão de inventário."
                : language === "en"
                ? "Regardless of your industry, Purple Stock offers universal benefits that transform your inventory management."
                : "Quel que soit votre secteur, Purple Stock offre des avantages universels qui transforment votre gestion des stocks."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {globalBenefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {language === "pt" ? "Pronto para transformar seu setor?" : language === "en" ? "Ready to transform your industry?" : "Prêt à transformer votre secteur ?"}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {language === "pt" 
              ? "Junte-se a centenas de empresas que já otimizaram suas operações com soluções específicas para seu setor."
              : language === "en"
              ? "Join hundreds of companies that have already optimized their operations with industry-specific solutions."
              : "Rejoignez des centaines d'entreprises qui ont déjà optimisé leurs opérations avec des solutions spécifiques à leur secteur."
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/coming-soon">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-purple-700 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl">
                <Zap className="w-5 h-5 mr-2" />
                {language === "pt" ? "Começar Teste Gratuito" : language === "en" ? "Start Free Trial" : "Commencer l'Essai Gratuit"}
              </Button>
            </Link>
            
            <Link href="/coming-soon">
              <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-xl backdrop-blur-sm">
                {language === "pt" ? "Ver Demonstração" : language === "en" ? "Watch Demo" : "Voir la Démo"}
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

