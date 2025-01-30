"use client"

import { useState, useEffect } from "react"

const questions = [
  "Cansado de perder vendas por falta de estoque?",
  "Quer ter controle total do seu inventário em tempo real?",
  "Pronto para eliminar erros de contagem manual?",
]

export function RotatingQuestionsAndCTA() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentQuestion((prev) => (prev + 1) % questions.length)
        setIsAnimating(false)
      }, 500)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16 h-32 relative">
          {questions.map((question, index) => (
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
          Controle de Estoque Inteligente
          <br />
          Começa Com <span className="text-[#9333E9]">Purple Stock</span>
        </h2>

        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Centralize seu inventário em uma plataforma poderosa e intuitiva. Com Purple Stock, tenha visibilidade total e
          controle preciso do seu estoque em qualquer dispositivo, a qualquer momento.
        </p>
      </div>
    </section>
  )
}

