"use client"

import { Check, Star, Zap, Crown, ArrowRight, Shield, Users, Clock, TrendingUp, Globe, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { translations } from "@/utils/translations"
import { useLanguage } from "@/contexts/LanguageContext"
import { useState } from "react"
import { trackCtaClick } from "@/lib/analytics"

interface Plan {
  name: string
  price: string
  description: string
  features: string[]
  buttonText: string
  buttonLink: string
  popular?: boolean
  icon: React.ComponentType<{ className?: string }>
  color: string
  gradient: string
}

interface PricingTranslation {
  title: string
  subtitle: string
  plans: Plan[]
}

export default function PricingPage() {
  const { language } = useLanguage()
  const t = translations[language as keyof typeof translations].pricing
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  // Enhanced plans with additional properties
  const enhancedPlans: Plan[] = [
    {
      ...t.plans[0],
      popular: false,
      icon: Star,
      color: "text-green-600",
      gradient: "from-green-500 to-emerald-600"
    },
    {
      ...t.plans[1],
      popular: true,
      icon: Zap,
      color: "text-purple-600",
      gradient: "from-purple-500 to-blue-600"
    },
    {
      ...t.plans[2],
      popular: false,
      icon: Crown,
      color: "text-amber-600",
      gradient: "from-amber-500 to-orange-600"
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: language === "pt" ? "Segurança Garantida" : language === "en" ? "Guaranteed Security" : "Sécurité Garantie",
      description: language === "pt" ? "Seus dados estão protegidos com criptografia de nível bancário" : language === "en" ? "Your data is protected with bank-level encryption" : "Vos données sont protégées avec un chiffrement de niveau bancaire"
    },
    {
      icon: Users,
      title: language === "pt" ? "Suporte 24/7" : language === "en" ? "24/7 Support" : "Support 24/7",
      description: language === "pt" ? "Nossa equipe está sempre disponível para ajudar" : language === "en" ? "Our team is always available to help" : "Notre équipe est toujours disponible pour vous aider"
    },
    {
      icon: Clock,
      title: language === "pt" ? "Setup em 5 Minutos" : language === "en" ? "5-Minute Setup" : "Configuration en 5 Minutes",
      description: language === "pt" ? "Comece a usar em menos de 5 minutos" : language === "en" ? "Start using in less than 5 minutes" : "Commencez à utiliser en moins de 5 minutes"
    },
    {
      icon: TrendingUp,
      title: language === "pt" ? "Escalabilidade" : language === "en" ? "Scalability" : "Évolutivité",
      description: language === "pt" ? "Cresça sem limites com nossa solução flexível" : language === "en" ? "Grow without limits with our flexible solution" : "Grandissez sans limites avec notre solution flexible"
    }
  ]

  const faqs = [
    {
      question: language === "pt" ? "Posso cancelar a qualquer momento?" : language === "en" ? "Can I cancel anytime?" : "Puis-je annuler à tout moment ?",
      answer: language === "pt" ? "Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas adicionais." : language === "en" ? "Yes! You can cancel your subscription anytime without additional fees." : "Oui ! Vous pouvez annuler votre abonement à tout moment sans frais supplémentaires."
    },
    {
      question: language === "pt" ? "Há um período de teste gratuito?" : language === "en" ? "Is there a free trial period?" : "Y a-t-il une période d'essai gratuite ?",
      answer: language === "pt" ? "Sim! Oferecemos um teste gratuito de 7 dias para todos os planos pagos." : language === "en" ? "Yes! We offer a 7-day free trial for all paid plans." : "Oui ! Nous offrons un essai gratuit de 7 jours pour tous les forfaits payants."
    },
    {
      question: language === "pt" ? "Posso mudar de plano?" : language === "en" ? "Can I change plans?" : "Puis-je changer de forfait ?",
      answer: language === "pt" ? "Absolutamente! Você pode fazer upgrade ou downgrade a qualquer momento." : language === "en" ? "Absolutely! You can upgrade or downgrade at any time." : "Absolument ! Vous pouvez faire une mise à niveau ou une rétrogradation à tout moment."
    }
  ]

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(129,117,224,0.15),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(221,171,255,0.22),transparent_52%),radial-gradient(circle_at_50%_80%,rgba(147,112,219,0.1),transparent_40%),linear-gradient(180deg,#f8f6ff,#f3ede7)]">
      <div className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2720%27 height=%2720%27 fill=%27none%27 viewBox=%270 0 20 20%27%3E%3Cpath d=%27M0 19h20M19 0v20%27 stroke=%27%239c88ff12%27 stroke-width=%271%27/%3E%3C/svg%3E')] opacity-70" />
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 h-full w-full rounded-full bg-gradient-to-br from-purple-200/20 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 h-full w-full rounded-full bg-gradient-to-tl from-pink-200/15 to-transparent blur-3xl" />
      </div>
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-16">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/60 bg-white/80 p-8 shadow-[0_25px_100px_-30px_rgba(59,7,100,0.35),0_10px_40px_-20px_rgba(0,0,0,0.1)] backdrop-blur-2xl md:p-12">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-8">
              <Star className="w-4 h-4 mr-2" />
              {language === "pt" ? "Planos e Preços" : language === "en" ? "Plans & Pricing" : "Plans et Tarifs"}
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                {t.title}
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              {t.subtitle}
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white rounded-full p-1 shadow-lg border border-gray-200 mb-2">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  billingCycle === 'monthly'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {language === "pt" ? "Mensal" : language === "en" ? "Monthly" : "Mensuel"}
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  billingCycle === 'yearly'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {language === "pt" ? "Anual" : language === "en" ? "Yearly" : "Annuel"}
                <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                  {language === "pt" ? "-20%" : language === "en" ? "-20%" : "-20%"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-8">
          {enhancedPlans.map((plan, index) => (
            <div key={plan.name} className={`relative ${plan.popular ? 'lg:-mt-8 lg:mb-8' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    {language === "pt" ? "Mais Popular" : language === "en" ? "Most Popular" : "Plus Populaire"}
                  </div>
                </div>
              )}
              
              <div className={`rounded-2xl bg-white/90 shadow-xl backdrop-blur-xl border-2 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 ${
                plan.popular ? 'border-purple-200 shadow-2xl' : 'border-gray-100 hover:border-purple-100'
              }`}>
                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.gradient} mb-4`}>
                      <plan.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h2>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      {plan.price !== "Preço Personalizado" && plan.price !== "Custom Price" && plan.price !== "Prix Personnalisé" && (
                        <span className="text-lg font-normal text-gray-500 ml-2">
                          /{language === 'pt' ? 'mês' : language === 'en' ? 'month' : 'mois'}
                        </span>
                      )}
                    </div>
                    {billingCycle === 'yearly' && plan.price !== "Preço Personalizado" && plan.price !== "Custom Price" && plan.price !== "Prix Personnalisé" && (
                      <p className="text-sm text-green-600 font-medium mt-2">
                        {language === "pt" ? "Economia de R$ 360/ano" : language === "en" ? "Save $300/year" : "Économisez 300€/an"}
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`w-6 h-6 rounded-full ${plan.color} bg-purple-50 flex items-center justify-center flex-shrink-0 mr-3 mt-0.5`}>
                          <Check className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link
                    href={plan.buttonLink}
                    onClick={() =>
                      trackCtaClick({
                        cta_name: `pricing_plan_${plan.name.toLowerCase()}`,
                        cta_target: plan.buttonLink.includes("app.purplestock.com.br") ? "app" : "contact",
                        page_section: "pricing_card",
                        plan_name: plan.name,
                      })
                    }
                  >
                    <Button className={`w-full bg-gradient-to-r ${plan.gradient} hover:shadow-xl text-white py-4 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 rounded-xl`}>
                      {plan.buttonText}
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === "pt" ? "Por que escolher o Purple Stock?" : language === "en" ? "Why choose Purple Stock?" : "Pourquoi choisir Purple Stock ?"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === "pt" 
                ? "Nossa plataforma oferece tudo que você precisa para gerenciar seu inventário de forma eficiente e profissional."
                : language === "en"
                ? "Our platform offers everything you need to manage your inventory efficiently and professionally."
                : "Notre plateforme offre tout ce dont vous avez besoin pour gérer votre inventaire efficacement et professionnellement."
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="group rounded-2xl border border-white/60 bg-white/80 p-6 text-center shadow-sm backdrop-blur-md">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {language === "pt" ? "Perguntas Frequentes" : language === "en" ? "Frequently Asked Questions" : "Questions Fréquemment Posées"}
            </h2>
            <p className="text-xl text-gray-600">
              {language === "pt" 
                ? "Tire suas dúvidas sobre nossos planos e serviços"
                : language === "en"
                ? "Get answers to your questions about our plans and services"
                : "Obtenez des réponses à vos questions sur nos forfaits et services"
              }
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl border border-white/60 bg-white/85 p-6 shadow-sm backdrop-blur-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {language === "pt" ? "Pronto para começar?" : language === "en" ? "Ready to get started?" : "Prêt à commencer ?"}
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            {language === "pt" 
              ? "Junte-se a milhares de empresas que já transformaram sua gestão de inventário com o Purple Stock."
              : language === "en"
              ? "Join thousands of companies that have already transformed their inventory management with Purple Stock."
              : "Rejoignez des milliers d'entreprises qui ont déjà transformé leur gestion des stocks avec Purple Stock."
            }
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* <Link href="/coming-soon"> */}
            <Link
              href="https://app.purplestock.com.br/"
              onClick={() =>
                trackCtaClick({
                  cta_name: "pricing_bottom_start_trial",
                  cta_target: "app",
                  page_section: "pricing_bottom_cta",
                })
              }
            >
              <Button size="lg" className="bg-white hover:bg-gray-100 text-purple-700 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl">
                <Zap className="w-5 h-5 mr-2" />
                {language === "pt" ? "Começar Teste Gratuito" : language === "en" ? "Start Free Trial" : "Commencer l'Essai Gratuit"}
              </Button>
            </Link>
            
            {/* <Link href="/coming-soon"> */}
            <Link
              href="https://app.purplestock.com.br/"
              onClick={() =>
                trackCtaClick({
                  cta_name: "pricing_bottom_talk_expert",
                  cta_target: "app",
                  page_section: "pricing_bottom_cta",
                })
              }
            >
              <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-xl backdrop-blur-sm">
                <MessageCircle className="w-5 h-5 mr-2" />
                {language === "pt" ? "Falar com Especialista" : language === "en" ? "Talk to Expert" : "Parler à un Expert"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
