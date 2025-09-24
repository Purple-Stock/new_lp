"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Clock, 
  Users, 
  Play, 
  Wrench, 
  Settings, 
  Gauge,
  AlertTriangle,
  BarChart3,
  Truck,
  FileText,
  Smartphone,
  Building2,
  Star,
  Cpu
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ElectricalPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const benefits = [
    {
      icon: Cpu,
      title: "Gestão de Equipamentos",
      description: "Controle preciso de equipamentos elétricos, transformadores, painéis e componentes técnicos"
    },
    {
      icon: Wrench,
      title: "Controle de Ferramentas",
      description: "Gestão eficiente de ferramentas, instrumentos de medição e equipamentos de teste"
    },
    {
      icon: Settings,
      title: "Manutenção Preventiva",
      description: "Alertas automáticos para manutenção preventiva e controle de garantias"
    },
    {
      icon: Gauge,
      title: "Especificações Técnicas",
      description: "Controle rigoroso de especificações técnicas, certificações e padrões de qualidade"
    },
    {
      icon: AlertTriangle,
      title: "Controle de Qualidade",
      description: "Rastreamento de componentes por especificação técnica e conformidade"
    },
    {
      icon: BarChart3,
      title: "Análise de Performance",
      description: "Relatórios detalhados de utilização por equipamento, projeto e período"
    }
  ]

  const features = [
    {
      icon: Truck,
      title: "Gestão de Fornecedores",
      description: "Controle de fornecedores, serviços técnicos e qualidade dos componentes"
    },
    {
      icon: FileText,
      title: "Relatórios Técnicos",
      description: "Análise de custos por projeto, utilização de equipamentos e performance técnica"
    },
    {
      icon: Smartphone,
      title: "App Mobile",
      description: "Controle de estoque em tempo real diretamente no campo e nas instalações"
    },
    {
      icon: Building2,
      title: "Múltiplas Instalações",
      description: "Gestão centralizada para empresas com múltiplas instalações ou projetos"
    }
  ]

  const stats = [
    { value: "45%", label: "Aumento de Produtividade" },
    { value: "60%", label: "Redução de Tempo de Inatividade" },
    { value: "35%", label: "Melhoria na Eficiência" },
    { value: "99.9%", label: "Controle de Qualidade" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-yellow-50/30">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 pb-16">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4 mr-2" />
            {language === "pt" ? "Soluções para Setor Elétrico" : language === "en" ? "Electrical Industry Solutions" : "Solutions pour l'Industrie Électrique"}
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-yellow-800 to-gray-900 bg-clip-text text-transparent">
              {language === "pt" ? "Gestão de Estoque para Setor Elétrico" : language === "en" ? "Inventory Management for Electrical Industry" : "Gestion des Stocks pour l'Industrie Électrique"}
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            {language === "pt" 
              ? "Otimize a gestão do seu negócio elétrico com controle preciso de equipamentos, componentes e ferramentas. Maximize a eficiência operacional e reduza o tempo de inatividade."
              : language === "en"
              ? "Optimize your electrical business management with precise control of equipment, components, and tools. Maximize operational efficiency and reduce downtime."
              : "Optimisez la gestion de votre entreprise électrique avec un contrôle précis des équipements, composants et outils. Maximisez l'efficacité opérationnelle et réduisez les temps d'arrêt."
            }
          </p>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-yellow-600 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === "pt" ? "Benefícios para o Setor Elétrico" : language === "en" ? "Benefits for the Electrical Industry" : "Avantages pour l'Industrie Électrique"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "pt" 
                ? "Soluções específicas para as necessidades únicas da indústria elétrica e de automação."
                : language === "en"
                ? "Specific solutions for the unique needs of the electrical and automation industry."
                : "Solutions spécifiques aux besoins uniques de l'industrie électrique et d'automatisation."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === "pt" ? "Funcionalidades Principais" : language === "en" ? "Key Features" : "Fonctionnalités Principales"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "pt" 
                ? "Ferramentas essenciais para otimizar a gestão do seu negócio elétrico."
                : language === "en"
                ? "Essential tools to optimize your electrical business management."
                : "Outils essentiels pour optimiser la gestion de votre entreprise électrique."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-yellow-600 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {language === "pt" ? "Pronto para otimizar seu negócio elétrico?" : language === "en" ? "Ready to optimize your electrical business?" : "Prêt à optimiser votre entreprise électrique ?"}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {language === "pt" 
              ? "Junte-se a centenas de empresas elétricas que já transformaram suas operações com o Purple Stock."
              : language === "en"
              ? "Join hundreds of electrical companies that have already transformed their operations with Purple Stock."
              : "Rejoignez des centaines d'entreprises électriques qui ont déjà transformé leurs opérations avec Purple Stock."
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Link href="/coming-soon"> */}
            <Link href="https://app.purplestock.com.br/">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-yellow-700 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl">
                <Zap className="w-5 h-5 mr-2" />
                {language === "pt" ? "Começar Teste Gratuito" : language === "en" ? "Start Free Trial" : "Commencer l'Essai Gratuit"}
              </Button>
            </Link>
            
            {/* <Link href="/coming-soon"> */}
            <Link href="https://app.purplestock.com.br/">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl">
                <Play className="w-5 h-5 mr-2" />
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
