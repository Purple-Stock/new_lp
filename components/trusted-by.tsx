"use client"

import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import { Shield, Users, Award } from "lucide-react"

export function TrustedBy() {
  const { language } = useLanguage()
  const t = translations[language].trustedBy

  const companies = [
    {
      name: "Purchase Moda Feminina",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/purchase-store-NQGRoDh4DB7dqjID69qG15TOHLcR3M.png",
      width: 180,
      height: 50,
      industry: language === "pt" ? "Moda Feminina" : language === "en" ? "Women's Fashion" : "Mode Féminine"
    },
    {
      name: "Concrem Portas Premium",
      logo: "/images/concrem-logo-64x16.webp",
      width: 64,
      height: 16,
      industry: language === "pt" ? "Construção" : language === "en" ? "Construction" : "Construction"
    },
  ]

  const stats = [
    {
      icon: Users,
      value: "500+",
      label: language === "pt" ? "Empresas Atendidas" : language === "en" ? "Companies Served" : "Entreprises Servies",
      color: "text-blue-600"
    },
    {
      icon: Shield,
      value: "99.9%",
      label: language === "pt" ? "Taxa de Sucesso" : language === "en" ? "Success Rate" : "Taux de Réussite",
      color: "text-green-600"
    },
    {
      icon: Award,
      value: "4.9/5",
      label: language === "pt" ? "Avaliação dos Clientes" : language === "en" ? "Customer Rating" : "Évaluation Client",
      color: "text-purple-600"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
            <Shield className="w-4 h-4 mr-2" />
            {language === "pt" ? "Empresas que Confiam" : language === "en" ? "Companies that Trust" : "Entreprises qui Font Confiance"}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t.description}
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-50 mb-6`}>
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Companies Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {language === "pt" ? "Empresas Líderes em Seus Setores" : language === "en" ? "Leading Companies in Their Industries" : "Entreprises Leaders dans Leurs Secteurs"}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {language === "pt" 
                  ? "Nossa solução é utilizada por empresas de diversos tamanhos e setores, desde pequenas oficinas até grandes indústrias, demonstrando a versatilidade e eficácia do Purple Stock."
                  : language === "en"
                  ? "Our solution is used by companies of various sizes and industries, from small workshops to large industries, demonstrating the versatility and effectiveness of Purple Stock."
                  : "Notre solution est utilisée par des entreprises de différentes tailles et secteurs, des petits ateliers aux grandes industries, démontrant la polyvalence et l'efficacité de Purple Stock."
                }
              </p>
            </div>

            {/* Testimonial Preview */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  P
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">Purchase Moda</div>
                  <div className="text-sm text-gray-500">{language === "pt" ? "Moda Feminina" : language === "en" ? "Women's Fashion" : "Mode Féminine"}</div>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "{language === "pt" 
                  ? "O Purple Stock revolucionou nosso controle de estoque. Agora temos visibilidade total e controle preciso."
                  : language === "en"
                  ? "Purple Stock revolutionized our inventory control. Now we have total visibility and precise control."
                  : "Purple Stock a révolutionné notre contrôle des stocks. Maintenant nous avons une visibilité totale et un contrôle précis."
                }"
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {companies.map((company, index) => (
              <div key={company.name} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl flex items-center justify-center">
                      <Image
                        src={company.logo || "/placeholder.svg"}
                        alt={company.name}
                        width={company.width}
                        height={company.height}
                        className="w-auto h-8 object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{company.name}</h4>
                      <p className="text-sm text-gray-500">{company.industry}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-purple-600">✓</div>
                    <div className="text-xs text-gray-400">{language === "pt" ? "Ativo" : language === "en" ? "Active" : "Actif"}</div>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {language === "pt" ? "Controle de estoque otimizado" : language === "en" ? "Optimized inventory control" : "Contrôle des stocks optimisé"}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                    {language === "pt" ? "Relatórios automatizados" : language === "en" ? "Automated reports" : "Rapports automatisés"}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                    {language === "pt" ? "Integração com QR Code" : language === "en" ? "QR Code integration" : "Intégration QR Code"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

