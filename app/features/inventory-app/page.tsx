"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Smartphone, BarChart3, QrCode, TrendingUp, ArrowRight, Sparkles, Zap, Target, Calendar, Package, BarChart3 as Chart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"

export default function InventoryAppPage() {
  const { language } = useLanguage()
  const t = translations[language].featurePages.inventoryApp

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-violet-100 text-violet-800 rounded-full text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2 text-violet-600" />
                Aplicativo para Controle de Estoque
              </div>
              
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-violet-800 to-gray-900 bg-clip-text text-transparent">
                  {t.title}
                </h1>
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-2xl">
                  {t.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/coming-soon">
                  <Button size="lg" className="bg-gradient-to-r from-violet-600 to-violet-700 hover:from-violet-700 hover:to-violet-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
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
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                <div className="relative h-full w-full">
                  <Image
                    src="/images/inventory-app.png"
                    alt="Inventory App System"
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
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <Target className="w-4 h-4 mr-2" />
              Funcionalidades Principais
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-violet-800 to-gray-900 bg-clip-text text-transparent">
              {t.features.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t.features.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-violet-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Aplicativo Mobile</h3>
              <p className="text-gray-600 leading-relaxed">Controle seu estoque de qualquer lugar com o app mobile</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Relatórios em Tempo Real</h3>
              <p className="text-gray-600 leading-relaxed">Acompanhe seu estoque com dados sempre atualizados</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <QrCode className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Integração QR Code</h3>
              <p className="text-gray-600 leading-relaxed">Escaneie códigos para entrada e saída rápida de itens</p>
            </div>

            <div className="group bg-white p-8 rounded-2xl shadow-soft border border-gray-100 hover:shadow-medium transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Análise de Tendências</h3>
              <p className="text-gray-600 leading-relaxed">Identifique padrões e otimize seu estoque</p>
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
                <h2 className="text-4xl lg:text-5xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-violet-800 to-gray-900 bg-clip-text text-transparent">
                  {t.benefits.title}
                </h2>
              </div>
              
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Mobilidade Total</h3>
                    <p className="text-gray-600 leading-relaxed">Gerencie seu estoque de qualquer lugar, a qualquer momento</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Sincronização Automática</h3>
                    <p className="text-gray-600 leading-relaxed">Dados sempre atualizados entre todos os dispositivos</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Interface Intuitiva</h3>
                    <p className="text-gray-600 leading-relaxed">Fácil de usar, mesmo para usuários iniciantes</p>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Check className="h-6 w-6 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900">Segurança Avançada</h3>
                    <p className="text-gray-600 leading-relaxed">Proteção de dados com backup automático na nuvem</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="relative">
              <div className="relative h-[500px] group">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-purple-500/10 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative h-full w-full">
                  <Image
                    src="/images/app-benefits.png"
                    alt="Inventory App Benefits"
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
      <div className="py-20 bg-gradient-to-r from-violet-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-violet-600">24/7</div>
              <div className="text-lg font-semibold text-gray-900">Disponibilidade</div>
              <div className="text-gray-600">Do aplicativo</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-purple-600">100%</div>
              <div className="text-lg font-semibold text-gray-900">Sincronização</div>
              <div className="text-gray-600">Em tempo real</div>
            </div>
            <div className="space-y-4">
              <div className="text-4xl font-bold text-indigo-600">5x</div>
              <div className="text-lg font-semibold text-gray-900">Mais Rápido</div>
              <div className="text-gray-600">Que métodos manuais</div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-violet-700 to-violet-800"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        
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
                <Button size="lg" className="bg-white hover:bg-gray-100 text-violet-700 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Calendar className="w-5 h-5 mr-2" />
                  {t.cta.scheduleDemo}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/coming-soon">
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