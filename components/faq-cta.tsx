"use client"
import { useState, useEffect } from "react"

export function FaqCta() {
  const phrases = [
    "O estoque baixo te pegou de surpresa?",
    "Perdeu o controle do seu inventário?",
    "Cansado de contagens manuais?",
    "Precisa de mais eficiência no estoque?",
    "Quer reduzir perdas de inventário?",
    "Busca automação no seu negócio?",
  ]

  const questions = [
    "Já considerou usar códigos de barras para gerenciar o inventário?",
    "Quer uma solução integrada para controle de estoque?",
    "Procurando uma alternativa para gerenciar o inventário manualmente?",
    "Deseja otimizar seu processo de gestão de inventário?",
  ]

  const [currentPhrase, setCurrentPhrase] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % phrases.length)
        setCurrentQuestion((prev) => (prev + 1) % questions.length)
        setIsAnimating(false)
      }, 500)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-24 px-4">
      <div className="max-w-4xl mx-auto text-center space-y-16">
        {/* FAQ Questions */}
        <div className="space-y-8 h-48">
          <h3
            className={`text-2xl text-gray-400 transition-all duration-500 absolute left-0 right-0 ${
              isAnimating ? "opacity-0 transform -translate-y-full" : "opacity-100 transform translate-y-0"
            }`}
          >
            {phrases[currentPhrase]}
          </h3>
          <h3
            className={`text-2xl text-gray-400 transition-all duration-500 absolute left-0 right-0 ${
              isAnimating ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-full"
            }`}
          >
            {phrases[(currentPhrase + phrases.length - 1) % phrases.length]}
          </h3>

          <div className="bg-white rounded-2xl shadow-sm border p-8 relative overflow-hidden h-32">
            <h4
              className={`text-2xl font-medium transition-all duration-500 absolute left-8 right-8 ${
                isAnimating ? "opacity-0 transform -translate-y-full" : "opacity-100 transform translate-y-0"
              }`}
            >
              {questions[currentQuestion]}
            </h4>
            <h4
              className={`text-2xl font-medium transition-all duration-500 absolute left-8 right-8 ${
                isAnimating ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-full"
              }`}
            >
              {questions[(currentQuestion + questions.length - 1) % questions.length]}
            </h4>
          </div>
        </div>

        {/* CTA Section */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            Gestão de Inventário Simplificada{" "}
            <span className="block">
              Começa Com{" "}<span className="text-[#9333E9]">Purple Stock</span>
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Rastreie e gerencie seu inventário em uma única plataforma. Use Purple Stock em seu celular, desktop ou tablet
            para sincronização automática e use todos os nossos recursos premium.
          </p>
        </div>
      </div>
    </section>
  )
}

