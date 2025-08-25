"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { 
  Utensils, 
  CheckCircle, 
  ArrowRight, 
  TrendingUp, 
  Shield, 
  Clock, 
  Users, 
  Zap, 
  Play, 
  ChefHat, 
  ShoppingCart, 
  Calendar,
  Thermometer,
  AlertTriangle,
  BarChart3,
  Truck,
  FileText,
  Smartphone,
  Building2,
  Star
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function RestaurantesPage() {
  const { language } = useLanguage()
  const t = translations[language]

  const benefits = [
    {
      icon: ChefHat,
      title: "Gestão de Receitas",
      description: "Controle preciso de ingredientes por prato com listas detalhadas e custos calculados automaticamente"
    },
    {
      icon: ShoppingCart,
      title: "Controle de Fornecedores",
      description: "Gestão eficiente de fornecedores, horários de entrega e qualidade dos ingredientes"
    },
    {
      icon: Calendar,
      title: "Controle de Validade",
      description: "Alertas automáticos para produtos próximos ao vencimento e gestão FIFO rigorosa"
    },
    {
      icon: Thermometer,
      title: "Controle de Temperatura",
      description: "Monitoramento de condições de armazenamento para ingredientes frescos e congelados"
    },
    {
      icon: AlertTriangle,
      title: "Gestão de Alérgenos",
      description: "Controle rigoroso de alérgenos e restrições alimentares para segurança dos clientes"
    },
    {
      icon: BarChart3,
      title: "Análise de Consumo",
      description: "Relatórios detalhados de consumo por prato, período e sazonalidade"
    }
  ]

  const features = [
    {
      icon: Truck,
      title: "Gestão de Entregas",
      description: "Controle de horários de entrega, qualidade dos produtos e gestão de fornecedores"
    },
    {
      icon: FileText,
      title: "Relatórios Detalhados",
      description: "Análise de custos por prato, consumo de ingredientes e performance do estoque"
    },
    {
      icon: Smartphone,
      title: "App Mobile",
      description: "Controle de estoque em tempo real diretamente na cozinha e no depósito"
    },
    {
      icon: Building2,
      title: "Múltiplas Unidades",
      description: "Gestão centralizada para restaurantes com múltiplas filiais ou franquias"
    }
  ]

  const stats = [
    { value: "55%", label: "Redução de Desperdícios" },
    { value: "40%", label: "Economia em Compras" },
    { value: "30%", label: "Melhoria na Eficiência" },
    { value: "99.9%", label: "Controle de Qualidade" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-emerald-50/30">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden pt-24 pb-16">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-medium mb-8">
            <Utensils className="w-4 h-4 mr-2" />
            {language === "pt" ? "Soluções para Restaurantes" : language === "en" ? "Restaurant Solutions" : "Solutions pour Restaurants"}
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-emerald-800 to-gray-900 bg-clip-text text-transparent">
              {language === "pt" ? "Gestão de Estoque para Restaurantes" : language === "en" ? "Inventory Management for Restaurants" : "Gestion des Stocks pour Restaurants"}
            </span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            {language === "pt" 
              ? "Transforme a gestão do seu restaurante com controle preciso de ingredientes, estoque de alimentos e gestão de fornecedores. Reduza desperdícios e otimize seus custos."
              : language === "en"
              ? "Transform your restaurant management with precise control of ingredients, food inventory, and supplier management. Reduce waste and optimize your costs."
              : "Transformez la gestion de votre restaurant avec un contrôle précis des ingrédients, des stocks alimentaires et de la gestion des fournisseurs. Réduisez les déchets et optimisez vos coûts."
            }
          </p>

          {/* Stats Overview */}
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.value}</div>
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
              {language === "pt" ? "Benefícios para Restaurantes" : language === "en" ? "Benefits for Restaurants" : "Avantages pour les Restaurants"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "pt" 
                ? "Soluções específicas para as necessidades únicas da indústria de restaurantes e alimentação."
                : language === "en"
                ? "Specific solutions for the unique needs of the restaurant and food service industry."
                : "Solutions spécifiques aux besoins uniques de l'industrie de la restauration et des services alimentaires."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-green-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-emerald-600" />
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
                ? "Ferramentas essenciais para otimizar a gestão do seu restaurante."
                : language === "en"
                ? "Essential tools to optimize your restaurant management."
                : "Outils essentiels pour optimiser la gestion de votre restaurant."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center">
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
      <div className="py-20 bg-gradient-to-br from-emerald-600 to-green-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {language === "pt" ? "Pronto para otimizar seu restaurante?" : language === "en" ? "Ready to optimize your restaurant?" : "Prêt à optimiser votre restaurant ?"}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {language === "pt" 
              ? "Junte-se a centenas de restaurantes que já transformaram suas operações com o Purple Stock."
              : language === "en"
              ? "Join hundreds of restaurants that have already transformed their operations with Purple Stock."
              : "Rejoignez des centaines de restaurants qui ont déjà transformé leurs opérations avec Purple Stock."
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/coming-soon">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-emerald-700 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl">
                <Zap className="w-5 h-5 mr-2" />
                {language === "pt" ? "Começar Teste Gratuito" : language === "en" ? "Start Free Trial" : "Commencer l'Essai Gratuit"}
              </Button>
            </Link>
            
            <Link href="/coming-soon">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl">
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
