import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

const plans = [
  {
    name: "Básico",
    price: "R$99",
    description: "Ideal para pequenas empresas",
    features: [
      "Até 500 itens",
      "1 usuário",
      "Suporte por email",
      "Atualizações de estoque em tempo real",
      "Relatórios básicos",
    ],
  },
  {
    name: "Profissional",
    price: "R$199",
    description: "Perfeito para empresas em crescimento",
    features: [
      "Até 5.000 itens",
      "5 usuários",
      "Suporte prioritário",
      "Integração com e-commerce",
      "Relatórios avançados",
      "Previsão de demanda",
    ],
  },
  {
    name: "Empresarial",
    price: "R$399",
    description: "Para grandes operações",
    features: [
      "Itens ilimitados",
      "Usuários ilimitados",
      "Suporte 24/7",
      "API completa",
      "Personalização avançada",
      "Treinamento dedicado",
    ],
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-4xl font-bold text-center mb-4">Planos e Preços</h1>
        <p className="text-xl text-gray-600 text-center mb-12">Escolha o plano perfeito para o seu negócio</p>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div key={plan.name} className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <p className="text-4xl font-bold mb-4">
                {plan.price}
                <span className="text-lg font-normal text-gray-500">/mês</span>
              </p>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="mb-8 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-[#9333E9] mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/coming-soon">
                <Button className="w-full bg-[#9333E9] hover:bg-[#7928CA]">Começar Agora</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

