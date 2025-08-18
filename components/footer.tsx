"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, Youtube, Linkedin, Globe, Sparkles, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"

export function Footer() {
  const { language, setLanguage } = useLanguage()
  const t = translations[language].footer

  const navigation = {
    purplestock: [
      { name: t.industries, href: "/industrias" },
    ],
    resources: [
      { name: t.blog, href: "https://blog.purplestock.com.br/" },
      { name: t.glossary, href: "/glossario" },
    ],
    social: [
      { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/purplestockapp/" },
      { name: "Youtube", icon: Youtube, href: "https://www.youtube.com/@PurpleStock_" },
      { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/purple-stock" },
    ],
  }

  const contactInfo = [
    {
      icon: Mail,
      text: language === "pt" ? "matheus.puppe@purplestock.com.br" : language === "en" ? "contact@purplestock.com.br" : "contact@purplestock.com.br",
      href: "mailto:matheus.puppe@purplestock.com.br"
    },
    {
      icon: Phone,
      text: language === "pt" ? "+55 (11) 99559-7242" : language === "en" ? "+55 (11) 99559-7242" : "+55 (11) 99559-7242",
      href: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      text: language === "pt" ? "São Paulo, Brasil" : language === "en" ? "São Paulo, Brazil" : "São Paulo, Brésil",
      href: "#"
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-8">
            <Link href="/" className="block group">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 animate-pulse"></div>
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Purple Stock
                  </div>
                  <div className="text-xs text-gray-400 font-medium">
                    {language === "pt" ? "Gestão Inteligente" : language === "en" ? "Smart Management" : "Gestion Intelligente"}
                  </div>
                </div>
              </div>
            </Link>
            
            <p className="text-gray-300 leading-relaxed max-w-xs">
              {language === "pt" 
                ? "Transforme sua gestão de inventário com a solução mais inteligente e eficiente do mercado."
                : language === "en"
                ? "Transform your inventory management with the smartest and most efficient solution on the market."
                : "Transformez votre gestion d'inventaire avec la solution la plus intelligente et efficace du marché."
              }
            </p>
            
            <div className="flex space-x-4">
              {navigation.social.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 backdrop-blur-sm"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5 text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Purple Stock Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
              {t.purpleStock}
            </h3>
            <ul className="space-y-4">
              {navigation.purplestock.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <div className="w-1 h-1 bg-purple-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
              {t.resources}
            </h3>
            <ul className="space-y-4">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                    {...(item.name === t.blog ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-200"></div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Language */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
              {language === "pt" ? "Contato" : language === "en" ? "Contact" : "Contact"}
            </h3>
            
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center group-hover:bg-white/20 transition-colors duration-200">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </Link>
              ))}
            </div>
            

          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-white/10">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              {language === "pt" ? "Fique por dentro das novidades" : language === "en" ? "Stay up to date" : "Restez à jour"}
            </h3>
            <p className="text-gray-300 mb-6">
              {language === "pt" 
                ? "Receba as últimas atualizações e dicas sobre gestão de inventário"
                : language === "en"
                ? "Get the latest updates and tips on inventory management"
                : "Recevez les dernières mises à jour et conseils sur la gestion des stocks"
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder={language === "pt" ? "Seu e-mail" : language === "en" ? "Your email" : "Votre email"}
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent backdrop-blur-sm"
              />
              <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1">
                {language === "pt" ? "Inscrever" : language === "en" ? "Subscribe" : "S'abonner"}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <div className="flex items-center space-x-2 text-gray-400">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <p className="text-sm font-medium">Purple Stock</p>
            </div>
            <p className="text-sm text-gray-400 mt-4 md:mt-0 flex items-center">
              {language === "pt" ? "Feito com" : language === "en" ? "Made with" : "Fait avec"} 
              <span className="text-red-400 mx-2">♥️</span> 
              {language === "pt" ? "em São Paulo, Brasil" : language === "en" ? "in São Paulo, Brazil" : "à São Paulo, Brésil"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

