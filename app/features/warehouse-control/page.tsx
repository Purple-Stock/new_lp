"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Warehouse, Forklift, Box, MapPin, ArrowRight, Sparkles, Zap, Target, Calendar, Package, BarChart3 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"

export default function WarehouseControlPage() {
  const { language } = useLanguage()
  const t = translations[language].featurePages.warehouseControl

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2 text-orange-600" />
                Controle de Almoxarifado
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent">
                  {t.title}
                </h1>
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl">
                  {t.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Link href="/coming-soon"> */}
                <Link href="https://app.purplestock.com.br/">
                  <Button size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <Zap className="w-5 h-5 mr-2" />
                    {t.startTrial}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              {/* Enhanced Image Container */}
              <div className="relative h-[400px] lg:h-[500px] group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                <div className="relative h-full w-full">
                  <Image
                    src="/images/warehouse-control.png"
                    alt="Warehouse Control Management"
                    fill
                    className="object-cover rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 text-red-800 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Funcionalidades Principais
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent">
              {t.features.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.features.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Warehouse className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Gestão de Localização</h3>
              <p className="text-gray-600 leading-relaxed">Organize seu almoxarifado com sistema de endereçamento inteligente</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Forklift className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Controle de Movimentação</h3>
              <p className="text-gray-600 leading-relaxed">Rastreie todas as entradas, saídas e transferências de materiais</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Box className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Gestão de Estoque</h3>
              <p className="text-gray-600 leading-relaxed">Controle quantidades, lotes e datas de validade de todos os itens</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Rastreabilidade</h3>
              <p className="text-gray-600 leading-relaxed">Saiba exatamente onde está cada item e seu histórico completo</p>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                  <Check className="w-4 h-4 mr-2" />
                  Benefícios
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent">
                  {t.benefits.title}
                </h2>
              </div>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Organização Perfeita</h3>
                    <p className="text-gray-600 leading-relaxed">Elimine a desorganização e encontre qualquer item em segundos</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Controle Total</h3>
                    <p className="text-gray-600 leading-relaxed">Monitore todas as movimentações e mantenha o inventário sempre atualizado</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Eficiência Operacional</h3>
                    <p className="text-gray-600 leading-relaxed">Reduza tempo de busca e aumente a produtividade da equipe</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Prevenção de Perdas</h3>
                    <p className="text-gray-600 leading-relaxed">Identifique e previna perdas, vencimentos e obsolescência</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="relative h-[500px] group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative h-full w-full">
                  <Image
                    src="/images/technology-warehouse.png"
                    alt="Warehouse Control Benefits"
                    fill
                    className="object-cover rounded-3xl shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-orange-600">80%</div>
              <div className="text-lg font-semibold text-gray-900">Menos Tempo</div>
              <div className="text-gray-600">Para encontrar itens</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-red-600">95%</div>
              <div className="text-lg font-semibold text-gray-900">Precisão</div>
              <div className="text-gray-600">No controle de estoque</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-yellow-600">60%</div>
              <div className="text-lg font-semibold text-gray-900">Mais Eficiência</div>
              <div className="text-gray-600">Nas operações</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              {t.cta.title}
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t.cta.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="https://calendly.com/matheus-puppe">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-orange-700 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Calendar className="w-5 h-5 mr-2" />
                  {t.cta.scheduleDemo}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              {/* <Link href="/coming-soon"> */}
              <Link href="https://app.purplestock.com.br/">
                <Button size="lg" className="bg-transparent border-2 border-white hover:bg-white/10 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1">
                  <Zap className="w-5 h-5 mr-2" />
                  {t.cta.startTrial}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
} 