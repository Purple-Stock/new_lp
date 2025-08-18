"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { ArrowRight, CheckCircle, Star, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function RotatingQuestionsAndCTA() {
  const { language } = useLanguage()
  const t = translations[language]
  
  const questions = {
    pt: [
      "Cansado de perder vendas por falta de estoque?",
      "Quer ter controle total do seu inventário em tempo real?",
      "Pronto para eliminar erros de contagem manual?",
    ],
    en: [
      "Tired of losing sales due to stockouts?",
      "Want total control of your inventory in real-time?",
      "Ready to eliminate manual counting errors?",
    ],
    fr: [
      "Fatigué de perdre des ventes par manque de stock ?",
      "Vous voulez un contrôle total de votre inventaire en temps réel ?",
      "Prêt à éliminer les erreurs de comptage manuel ?",
    ],
  }

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentQuestion((prev) => (prev + 1) % questions[language].length)
        setIsAnimating(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [language])

  return (
    <section className="py-24 bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rotating Questions Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-8">
            <Star className="w-4 h-4 mr-2" />
            {language === "pt" ? "Perguntas Frequentes" : language === "en" ? "Frequently Asked" : "Questions Fréquentes"}
          </div>
          
          <div className="mb-16 h-40 relative">
            {questions[language].map((question, index) => (
              <div
                key={index}
                className={`transition-all duration-700 absolute left-0 right-0 ${
                  index === currentQuestion
                    ? "opacity-100 transform translate-y-0 scale-100"
                    : "opacity-0 transform -translate-y-full scale-95"
                }`}
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {question}
                  </h3>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-2000"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse animation-delay-4000"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA Section */}
        <div className="text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
              {t.hero.title}
            </span>
            <br />
            <span className="text-gray-900">
              {t.hero.subtitle}
            </span> 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t.hero.subtitleHighlight}
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            {t.hero.description2}
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {language === "pt" ? "Controle Total" : language === "en" ? "Total Control" : "Contrôle Total"}
              </h4>
              <p className="text-gray-600 text-sm">
                {language === "pt" 
                  ? "Visibilidade completa do seu inventário em tempo real"
                  : language === "en"
                  ? "Complete visibility of your inventory in real-time"
                  : "Visibilité complète de votre inventaire en temps réel"
                }
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {language === "pt" ? "Automação Inteligente" : language === "en" ? "Smart Automation" : "Automatisation Intelligente"}
              </h4>
              <p className="text-gray-600 text-sm">
                {language === "pt" 
                  ? "Processos automatizados que economizam tempo e reduzem erros"
                  : language === "en"
                  ? "Automated processes that save time and reduce errors"
                  : "Processus automatisés qui économisent du temps et réduisent les erreurs"
                }
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {language === "pt" ? "Relatórios Avançados" : language === "en" ? "Advanced Reports" : "Rapports Avancés"}
              </h4>
              <p className="text-gray-600 text-sm">
                {language === "pt" 
                  ? "Insights valiosos para tomada de decisões estratégicas"
                  : language === "en"
                  ? "Valuable insights for strategic decision making"
                  : "Aperçus précieux pour la prise de décisions stratégiques"
                }
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/coming-soon">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-10 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl">
                <Star className="w-6 h-6 mr-3" />
                {language === "pt" ? "Começar Agora" : language === "en" ? "Get Started Now" : "Commencer Maintenant"}
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
            
            <Link href="/coming-soon">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-6 text-xl font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl">
                <Play className="w-6 h-6 mr-3" />
                {language === "pt" ? "Ver Demonstração" : language === "en" ? "Watch Demo" : "Voir la Démo"}
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 mb-4">
              {language === "pt" ? "Já confiado por milhares de empresas:" : language === "en" ? "Already trusted by thousands of companies:" : "Déjà approuvé par des milliers d'entreprises:"}
            </p>
            <div className="flex items-center justify-center space-x-8 text-center">
              <div>
                <div className="text-2xl font-bold text-blue-600">99.9%</div>
                <div className="text-xs text-gray-500">{language === "pt" ? "Uptime" : language === "en" ? "Uptime" : "Disponibilité"}</div>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div>
                <div className="text-2xl font-bold text-green-600">4.9/5</div>
                <div className="text-xs text-gray-500">{language === "pt" ? "Avaliação" : language === "en" ? "Rating" : "Évaluation"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

