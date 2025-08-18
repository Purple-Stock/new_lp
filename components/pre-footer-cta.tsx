"use client"

import { Zap, ArrowRight, CheckCircle, Star, Users, Clock, Play } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PreFooterCTA() {
  const { language } = useLanguage()
  const title = language === "pt" ? "Simplifique sua Gestão de Inventário" : language === "en" ? "Simplify your Inventory Management" : "Simplifiez votre Gestion d'Inventaire"
  const subtitle = language === "pt" ? "Transforme seu negócio com o sistema mais inteligente de controle de estoque" : language === "en" ? "Transform your business with the smartest inventory control system" : "Transformez votre entreprise avec le système de contrôle des stocks le plus intelligent"
  const buttonText = language === "pt" ? "Teste gratuito de 7 dias" : language === "en" ? "7-day free trial" : "Essai gratuit de 7 jours"

  const benefits = [
    {
      icon: CheckCircle,
      text: language === "pt" ? "Configuração em 5 minutos" : language === "en" ? "Setup in 5 minutes" : "Configuration en 5 minutes",
      color: "text-green-400"
    },
    {
      icon: Users,
      text: language === "pt" ? "Suporte 24/7 incluído" : language === "en" ? "24/7 support included" : "Support 24/7 inclus",
      color: "text-blue-400"
    },
    {
      icon: Clock,
      text: language === "pt" ? "Resultados imediatos" : language === "en" ? "Immediate results" : "Résultats immédiats",
      color: "text-yellow-400"
    }
  ]

  return (
    <section className="relative overflow-hidden py-24">
      {/* Background with enhanced gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-600" />
      
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-8 border border-white/30">
            <Star className="w-4 h-4 mr-2" />
            {language === "pt" ? "Oferta Limitada" : language === "en" ? "Limited Offer" : "Offre Limitée"}
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          
          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
            {subtitle}
          </p>
          
          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20">
                <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                <span className="text-white text-sm font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/coming-soon">
              <Button size="lg" className="bg-white hover:bg-gray-100 text-purple-700 px-10 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl">
                <Zap className="w-6 h-6 mr-3" />
                {buttonText}
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
            
            <Link href="/coming-soon">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl">
                <Play className="w-6 h-6 mr-3" />
                {language === "pt" ? "Ver Demonstração" : language === "en" ? "Watch Demo" : "Voir la Démo"}
              </Button>
            </Link>
          </div>
          
          <p className="text-white/70 text-sm mt-4">
            {language === "pt" 
              ? "Sem cartão de crédito • Cancelamento a qualquer momento • Suporte completo incluído"
              : language === "en"
              ? "No credit card • Cancel anytime • Full support included"
              : "Pas de carte de crédit • Annulation à tout moment • Support complet inclus"
            }
          </p>
        </div>

        {/* Platform Preview */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative group">
            {/* Decorative elements around the image */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-3xl transform -rotate-2 group-hover:-rotate-3 transition-transform duration-500"></div>
            
            {/* Main image container */}
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
              <Image
                src="/images/app-items-list.png"
                alt="Purple Stock Platform Interface"
                width={1200}
                height={600}
                className="w-full h-auto rounded-2xl shadow-lg group-hover:scale-105 transition-transform duration-700"
                priority
              />
              
              {/* Floating stats overlay */}
              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100/50 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">99.9%</div>
                  <div className="text-xs text-gray-600">{language === "pt" ? "Uptime" : language === "en" ? "Uptime" : "Disponibilité"}</div>
                </div>
              </div>
              

            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <p className="text-white/70 text-sm mb-6">
            {language === "pt" ? "Já confiado por empresas líderes:" : language === "en" ? "Already trusted by leading companies:" : "Déjà approuvé par des entreprises leaders:"}
          </p>
          <div className="flex items-center justify-center space-x-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white">4.9/5</div>
              <div className="text-xs text-white/70">{language === "pt" ? "Avaliação" : language === "en" ? "Rating" : "Évaluation"}</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div>
              <div className="text-2xl font-bold text-white">24/7</div>
              <div className="text-xs text-white/70">{language === "pt" ? "Suporte" : language === "en" ? "Support" : "Support"}</div>
            </div>
            <div className="w-px h-8 bg-white/30"></div>
            <div>
              <div className="text-2xl font-bold text-white">5min</div>
              <div className="text-xs text-white/70">{language === "pt" ? "Setup" : language === "en" ? "Setup" : "Configuration"}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

