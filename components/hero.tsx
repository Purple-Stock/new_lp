"use client"

import { Sparkles, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
  const { language } = useLanguage()
  const t = translations[language].hero

  return (
    <div className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2 text-purple-600" />
              {language === "pt" ? "Sistema de Gestão Inteligente" : language === "en" ? "Smart Management System" : "Système de Gestion Intelligent"}
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                {t.title}
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                {t.description}
              </p>
            </div>

            {/* Key Benefits */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                <span className="text-lg">{language === "pt" ? "Controle total do inventário" : language === "en" ? "Complete inventory control" : "Contrôle total de l'inventaire"}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                <span className="text-lg">{language === "pt" ? "Relatórios em tempo real" : language === "en" ? "Real-time reporting" : "Rapports en temps réel"}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                <span className="text-lg">{language === "pt" ? "Integração com QR Code" : language === "en" ? "QR Code integration" : "Intégration QR Code"}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/coming-soon">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Sparkles className="w-5 h-5 mr-2" />
                  {t.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/coming-soon">
                <Button variant="outline" size="lg" className="border-2 border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg font-semibold transition-all duration-300">
                  {language === "pt" ? "Ver Demo" : language === "en" ? "Watch Demo" : "Voir la Démo"}
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4">
              <p className="text-sm text-gray-500 mb-3">{language === "pt" ? "Já confiado por empresas líderes:" : language === "en" ? "Already trusted by leading companies:" : "Déjà approuvé par des entreprises leaders:"}</p>
              <div className="flex items-center justify-center lg:justify-start space-x-6">
                <div className="text-2xl font-bold text-purple-600">500+</div>
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-2xl font-bold text-green-600">24/7</div>
              </div>
              <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
                <span>{language === "pt" ? "Clientes" : language === "en" ? "Clients" : "Clients"}</span>
                <span>{language === "pt" ? "Uptime" : language === "en" ? "Uptime" : "Disponibilité"}</span>
                <span>{language === "pt" ? "Suporte" : language === "en" ? "Support" : "Support"}</span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Main Image Container */}
            <div className="relative h-[400px] lg:h-[600px] group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500"></div>
              <div className="relative h-full w-full">
                <Image
                  src="/images/hero-photo-900x600-compressed.webp"
                  alt="Warehouse worker using Purple Stock on a tablet"
                  fill
                  className="object-cover rounded-2xl shadow-2xl"
                  sizes="(max-width: 768px) 450px, (max-width: 1024px) 900px, 1800px"
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  fetchPriority="high"
                />
              </div>
              
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{language === "pt" ? "Estoque Atualizado" : language === "en" ? "Stock Updated" : "Stock Mis à Jour"}</p>
                    <p className="text-xs text-gray-500">{language === "pt" ? "Última atualização: 2 min atrás" : language === "en" ? "Last update: 2 min ago" : "Dernière mise à jour: il y a 2 min"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

