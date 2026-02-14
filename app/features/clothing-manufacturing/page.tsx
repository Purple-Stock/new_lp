"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Scissors, Users, Package, TrendingUp, ArrowRight, Sparkles, Zap, Target, Calendar, Package as PackageIcon, BarChart3 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"

export default function ClothingManufacturingPage() {
  const { language } = useLanguage()
  const t = translations[language].featurePages.clothingManufacturing

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-rose-50 to-red-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2 text-pink-600" />
                Sistemas para Confecção
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-pink-800 to-gray-900 bg-clip-text text-transparent">
                  {t.title}
                </h1>
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl">
                  {t.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                {/* <Link href="/coming-soon"> */}
                <Link href="https://app.purplestock.com.br/">
                  <Button size="lg" className="bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                <div className="relative h-full w-full">
                  <Image
                    src="/images/sewing_woman.png"
                    alt="Clothing Manufacturing System"
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
            <div className="inline-flex items-center px-4 py-2 bg-rose-100 text-rose-800 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Funcionalidades Principais
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-pink-800 to-gray-900 bg-clip-text text-transparent">
              {t.features.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.features.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Scissors className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Gestão de Produção</h3>
              <p className="text-gray-600 leading-relaxed">Controle todo o processo de confecção desde o corte até a finalização</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Gestão de Equipe</h3>
              <p className="text-gray-600 leading-relaxed">Organize e acompanhe o trabalho de costureiras e operadores</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Package className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Controle de Estoque</h3>
            <p className="text-gray-600 leading-relaxed">Gerencie tecidos, aviamentos e produtos em processo</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Relatórios de Produção</h3>
              <p className="text-gray-600 leading-relaxed">Acompanhe produtividade e eficiência da confecção</p>
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
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-pink-800 to-gray-900 bg-clip-text text-transparent">
                  {t.benefits.title}
                </h2>
              </div>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Aumento da Produtividade</h3>
                    <p className="text-gray-600 leading-relaxed">Otimize processos e aumente a eficiência da produção</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Controle de Qualidade</h3>
                    <p className="text-gray-600 leading-relaxed">Garanta padrões de qualidade em todas as etapas</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Gestão de Prazos</h3>
                    <p className="text-gray-600 leading-relaxed">Cumpra entregas e mantenha clientes satisfeitos</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Redução de Custos</h3>
                    <p className="text-gray-600 leading-relaxed">Minimize desperdícios e otimize o uso de materiais</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="relative h-[500px] group">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-rose-500/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative h-full w-full">
                  <Image
                    src="/images/sewing.png"
                    alt="Clothing Manufacturing Benefits"
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
      <div className="py-20 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-pink-600">40%</div>
              <div className="text-lg font-semibold text-gray-900">Mais Produtividade</div>
              <div className="text-gray-600">Na confecção</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-rose-600">60%</div>
              <div className="text-lg font-semibold text-gray-900">Menos Desperdício</div>
              <div className="text-gray-600">De materiais</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-red-600">100%</div>
              <div className="text-lg font-semibold text-gray-900">Controle</div>
              <div className="text-gray-600">Da produção</div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ + Internal Links */}
      <div className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-pink-100 bg-pink-50/40 p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              FAQ: Controle de Faccao
            </h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Qual o principal erro no controle de faccao?</h3>
                <p className="mt-2">Falta de rastreabilidade por etapa, que gera atrasos, retrabalho e perda de previsibilidade de entrega.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Quais indicadores devo acompanhar?</h3>
                <p className="mt-2">Lead time por etapa, taxa de retrabalho, pecas em atraso e produtividade por faccao.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Planilha ainda resolve para confeccao?</h3>
                <p className="mt-2">No inicio pode ajudar, mas perde eficiencia quando aumenta volume, equipe e parceiros externos.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Quanto tempo para ver resultado?</h3>
                <p className="mt-2">Com fluxo minimo definido, em 2 a 4 semanas ja e comum reduzir gargalos visiveis.</p>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/precos">
                <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-100">Ver planos e precos</Button>
              </Link>
              <Link href="/blog">
                <Button variant="outline" className="border-pink-300 text-pink-700 hover:bg-pink-100">Ler guias no blog</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-600 via-pink-700 to-pink-800"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-rose-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
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
                <Button size="lg" className="bg-white hover:bg-gray-100 text-pink-700 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
