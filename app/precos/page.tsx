import { Check } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"

const plans = [
  {
    name: "Gratuito",
    price: "R$ 0,00",
    description: "Plano Atual",
    features: [
      "Até 10 itens",
      "Análises básicas",
    ],
    buttonText: "Plano Atual",
    buttonLink: "#",
  },
  {
    name: "Pro",
    price: "R$ 149,00",
    description: "Popular",
    features: [
      "Até 100 itens",
      "Análises avançadas",
      "Suporte prioritário",
      "Relatórios personalizados",
      "Suporte por email",
    ],
    buttonText: "Atualizar Agora",
    buttonLink: "https://app.purplestock.com.br/",
  },
  {
    name: "Empresarial",
    price: "Preço Personalizado",
    description: "Para grandes operações",
    features: [
      "Tudo do Pro",
      "Itens ilimitados",
      "Suporte dedicado",
      "Integração personalizada",
      "Garantia de SLA",
      "Acesso à API",
    ],
    buttonText: "Fale com Vendas",
    buttonLink: "https://api.whatsapp.com/send/?phone=5511995597242&text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+o+plano+empresarial.&type=phone_number&app_absent=0",
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
                {plan.price !== "Preço Personalizado" && <span className="text-lg font-normal text-gray-500">/mês</span>}
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
              <Link href={plan.buttonLink}>
                <Button className="w-full bg-[#9333E9] hover:bg-[#7928CA]">{plan.buttonText}</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

