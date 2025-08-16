"use client"

import { Check, ArrowRight, Star, Zap, Shield, Clock, Link as LinkIcon } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface FeatureProps {
  title: string
  subtitle: string
  description: string[]
  image: string
  bgColor: string
  textColor: string
  icon: React.ComponentType<{ className?: string }>
  gradient: string
  language: string
}

function Feature({ title, subtitle, description, image, bgColor, textColor, icon: Icon, gradient, language }: FeatureProps) {
  return (
    <div className={`py-24 ${bgColor} relative overflow-hidden`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 right-20 w-96 h-96 ${gradient} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob`}></div>
        <div className={`absolute bottom-20 left-20 w-96 h-96 ${gradient} rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000`}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            {/* Feature Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm font-medium border border-gray-200/50 shadow-sm">
              <Icon className={`w-4 h-4 mr-2 ${textColor}`} />
              {subtitle}
            </div>
            
            {/* Feature Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              {title}
            </h2>
            
            {/* Feature Description */}
            <div className="space-y-6">
              {description.map((item, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className={`w-8 h-8 rounded-full ${textColor} bg-white/80 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform duration-200`}>
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-200">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            
            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/coming-soon">
                <Button size="lg" className={`bg-gradient-to-r ${gradient} hover:shadow-xl text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 rounded-xl`}>
                  {language === "pt" ? "Saiba Mais" : language === "en" ? "Learn More" : "En Savoir Plus"}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group">
              {/* Decorative background elements */}
              <div className={`absolute inset-0 ${gradient} rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20`}></div>
              <div className={`absolute inset-0 ${gradient} rounded-3xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500 opacity-10`}></div>
              
              {/* Main image container */}
              <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <Image 
                  src={image || "/placeholder.svg"} 
                  alt={title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Floating feature highlight */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-100/50 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 ${textColor} rounded-full animate-pulse`}></div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{language === "pt" ? "Funcionalidade Ativa" : language === "en" ? "Feature Active" : "Fonctionnalité Active"}</p>
                      <p className="text-xs text-gray-500">{language === "pt" ? "Disponível agora" : language === "en" ? "Available now" : "Disponible maintenant"}</p>
                    </div>
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

export function Features() {
  const { language } = useLanguage()
  const t = translations[language].features

  const features = [
    {
      ...t.orderManagement,
      image: "/images/pexels-photo-4483610.webp",
      bgColor: "bg-gradient-to-br from-pink-50 via-white to-rose-50",
      textColor: "text-pink-600",
      icon: Star,
      gradient: "from-pink-500 to-rose-600",
      language: language
    },
    {
      ...t.barcode,
      image: "/images/pexels-photo-4481259.webp",
      bgColor: "bg-gradient-to-br from-blue-50 via-white to-indigo-50",
      textColor: "text-blue-600",
      icon: Zap,
      gradient: "from-blue-500 to-indigo-600",
      language: language
    },
    {
      ...t.security,
      image: "/images/security-protection-anti-virus-software-60504.webp",
      bgColor: "bg-gradient-to-br from-cyan-50 via-white to-teal-50",
      textColor: "text-cyan-600",
      icon: Shield,
      gradient: "from-cyan-500 to-teal-600",
      language: language
    },
    {
      ...t.realTime,
      image: "/images/pexels-photo-8201187.webp",
      bgColor: "bg-gradient-to-br from-violet-50 via-white to-purple-50",
      textColor: "text-violet-600",
      icon: Clock,
      gradient: "from-violet-500 to-purple-600",
      language: language
    },
    {
      ...t.inventoryLink,
      image: "/images/pexels-photo-7654989.webp",
      bgColor: "bg-gradient-to-br from-green-50 via-white to-emerald-50",
      textColor: "text-green-600",
      icon: LinkIcon,
      gradient: "from-green-500 to-emerald-600",
      language: language
    },
  ]

  return (
    <div className="relative">
      {/* Section Header */}
      <div className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            {language === "pt" ? "Funcionalidades Principais" : language === "en" ? "Core Features" : "Fonctionnalités Principales"}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {language === "pt" ? "Tudo que você precisa para" : language === "en" ? "Everything you need to" : "Tout ce dont vous avez besoin pour"}
            </span>
            <br />
            <span className="text-gray-900">
              {language === "pt" ? "gerenciar seu estoque" : language === "en" ? "manage your inventory" : "gérer votre inventaire"}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {language === "pt" 
              ? "Descubra como o Purple Stock pode transformar sua gestão de inventário com funcionalidades poderosas e intuitivas."
              : language === "en"
              ? "Discover how Purple Stock can transform your inventory management with powerful and intuitive features."
              : "Découvrez comment Purple Stock peut transformer votre gestion d'inventaire avec des fonctionnalités puissantes et intuitives."
            }
          </p>
        </div>
      </div>
      
      {/* Features List */}
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </div>
  )
}

