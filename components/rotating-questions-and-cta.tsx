"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"

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
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16 h-32 relative">
          {questions[language].map((question, index) => (
            <h3
              key={index}
              className={`text-2xl transition-all duration-500 absolute left-0 right-0 ${
                index === currentQuestion
                  ? "opacity-100 transform translate-y-0"
                  : "opacity-0 transform -translate-y-full"
              } ${index === currentQuestion ? "bg-white rounded-xl shadow-sm border p-6" : "text-gray-400"}`}
            >
              {question}
            </h3>
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-6">
          {t.hero.title}
          <br />
          {t.hero.subtitle} <span className="text-[#9333E9]">{t.hero.subtitleHighlight}</span>
        </h2>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {t.hero.description2}
        </p>
      </div>
    </section>
  )
}

