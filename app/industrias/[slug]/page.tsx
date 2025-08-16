import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Star, Users, TrendingUp, Shield, Clock, Zap, ArrowRight, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a database or API
const industriesData = [
  {
    name: "Atacado",
    slug: "atacado",
    image:
      "/images/pexels-photo-4483610.webp",
    description:
      "Otimize a gestão de estoque para operações de atacado com o Purple Stock. Nossa solução é ideal para empresas que lidam com grandes volumes de produtos e precisam de controle preciso do inventário.",
    benefits: [
      "Controle de estoque em múltiplos locais",
      "Gestão eficiente de grandes volumes de produtos",
      "Rastreamento de lotes e datas de validade",
      "Integração com sistemas de compra e venda",
      "Relatórios detalhados para tomada de decisões",
    ],
    features: [
      "Escaneamento de código de barras para entrada e saída rápida",
      "Alertas de estoque baixo e reposição automática",
      "Controle de acesso por função e departamento",
      "Histórico completo de movimentações",
      "Dashboards personalizados para análise de desempenho",
    ],
  },
  {
    name: "Varejo",
    slug: "varejo",
    image:
      "/images/pexels-photo-264507.jpeg",
    description:
      "Transforme sua operação de varejo com o Purple Stock. Nossa plataforma oferece as ferramentas necessárias para gerenciar seu estoque com precisão e atender seus clientes com eficiência.",
    benefits: [
      "Controle de estoque em tempo real",
      "Integração com PDV e e-commerce",
      "Gestão de promoções e descontos",
      "Análise de tendências de vendas",
      "Experiência de compra aprimorada para clientes",
    ],
    features: [
      "Interface intuitiva para operações diárias",
      "Escaneamento rápido de produtos",
      "Gestão de devoluções e trocas",
      "Relatórios de vendas e estoque",
      "Controle de múltiplas lojas",
    ],
  },
  {
    name: "Manufatura",
    slug: "manufatura",
    image:
      "/images/pexels-photo-1145434.jpeg",
    description:
      "Otimize sua produção e controle de materiais com o Purple Stock. Nossa solução é projetada para atender às necessidades específicas da indústria de manufatura.",
    benefits: [
      "Controle preciso de matérias-primas",
      "Rastreamento de produtos em processo",
      "Gestão de produtos acabados",
      "Redução de desperdícios",
      "Planejamento eficiente da produção",
    ],
    features: [
      "Lista de materiais (BOM) detalhada",
      "Rastreamento de lotes e números de série",
      "Integração com sistemas MRP/ERP",
      "Controle de qualidade e conformidade",
      "Gestão de fornecedores",
    ],
  },
  {
    name: "Logística",
    slug: "logistica",
    image:
      "/images/pexels-photo-1267338.jpeg",
    description:
      "Simplifique suas operações logísticas com o Purple Stock. Nossa plataforma oferece visibilidade completa e controle sobre toda a cadeia de suprimentos.",
    benefits: [
      "Rastreamento em tempo real de mercadorias",
      "Otimização de rotas e entregas",
      "Redução de custos operacionais",
      "Melhoria na satisfação do cliente",
      "Gestão eficiente de armazéns",
    ],
    features: [
      "Controle de recebimento e expedição",
      "Gestão de transportadoras",
      "Rastreamento de entregas",
      "Organização de armazéns por zonas",
      "Relatórios de desempenho logístico",
    ],
  },
  {
    name: "Moda",
    slug: "moda",
    image:
      "/images/pexels-photo-994523.webp",
    description:
      "Gerencie coleções, tamanhos, cores e estilos com facilidade usando o Purple Stock. Nossa solução é ideal para o setor de moda e vestuário.",
    benefits: [
      "Controle de estoque por atributos (tamanho, cor, estilo)",
      "Gestão de coleções sazonais",
      "Rastreamento de tendências de vendas",
      "Redução de sobras de estoque",
      "Integração com e-commerce de moda",
    ],
    features: [
      "Matriz de tamanhos e cores",
      "Gestão de etiquetas e códigos de barras",
      "Controle de estoque em lojas físicas e online",
      "Alertas para reposição de itens populares",
      "Relatórios de desempenho por coleção",
    ],
  },
  {
    name: "Alimentos & Bebidas",
    slug: "alimentos-bebidas",
    image:
      "/images/pexels-photo-1640777.jpeg",
    description:
      "Controle seu estoque de alimentos e bebidas com eficiência usando o Purple Stock. Nossa plataforma ajuda a gerenciar datas de validade, lotes e rastreabilidade.",
    benefits: [
      "Controle rigoroso de datas de validade",
      "Rastreabilidade de lotes e fornecedores",
      "Gestão FIFO (primeiro a entrar, primeiro a sair)",
      "Redução de perdas por vencimento",
      "Conformidade com normas sanitárias",
    ],
    features: [
      "Alertas automáticos para produtos próximos ao vencimento",
      "Controle de temperatura e condições de armazenamento",
      "Gestão de receitas e ingredientes",
      "Rastreamento de alérgenos",
      "Relatórios de perdas e desperdícios",
    ],
  },
  {
    name: "Construção",
    slug: "construcao",
    image:
      "/images/building-800x600.webp",
    description:
      "Gerencie materiais de construção, ferramentas e equipamentos com o Purple Stock. Nossa solução é ideal para construtoras e empresas do setor.",
    benefits: [
      "Controle de materiais por obra ou projeto",
      "Rastreamento de ferramentas e equipamentos",
      "Redução de perdas e desperdícios",
      "Planejamento eficiente de compras",
      "Gestão de fornecedores e entregas",
    ],
    features: [
      "Alocação de materiais por projeto",
      "Controle de empréstimo de ferramentas",
      "Gestão de estoque em canteiros de obras",
      "Relatórios de consumo por fase da obra",
      "Integração com sistemas de orçamento",
    ],
  },
  {
    name: "Médico",
    slug: "medico",
    image:
      "/images/medical-appointment-doctor-healthcare-40568.webp",
    description:
      "Controle medicamentos, equipamentos e suprimentos médicos com precisão usando o Purple Stock. Nossa plataforma atende às necessidades específicas do setor de saúde.",
    benefits: [
      "Controle rigoroso de medicamentos e insumos",
      "Rastreabilidade de lotes e validades",
      "Gestão de equipamentos médicos",
      "Conformidade com normas regulatórias",
      "Redução de perdas por vencimento",
    ],
    features: [
      "Alertas de estoque baixo para itens críticos",
      "Controle de produtos controlados",
      "Rastreamento de equipamentos e manutenções",
      "Gestão de temperatura para medicamentos",
      "Relatórios para auditoria e conformidade",
    ],
  },
  {
    name: "Beleza",
    slug: "beleza",
    image:
      "/images/pexels-photo-3985298.webp",
    description:
      "Gerencie produtos de beleza, cosméticos e equipamentos com o Purple Stock. Nossa solução é ideal para salões, spas e lojas de cosméticos.",
    benefits: [
      "Controle de produtos por linha e marca",
      "Gestão de datas de validade",
      "Rastreamento de uso de produtos em serviços",
      "Análise de produtos mais vendidos",
      "Integração com sistemas de agendamento",
    ],
    features: [
      "Controle de estoque por categoria",
      "Gestão de produtos para revenda",
      "Controle de produtos usados em serviços",
      "Alertas para reposição automática",
      "Relatórios de desempenho por linha",
    ],
  },
  {
    name: "Comércio",
    slug: "comercio",
    image:
      "/images/commerce-800x600.webp",
    description:
      "Otimize suas operações comerciais com o Purple Stock. Nossa plataforma oferece as ferramentas necessárias para gerenciar seu estoque com eficiência.",
    benefits: [
      "Controle de estoque em tempo real",
      "Gestão de múltiplos fornecedores",
      "Análise de giro de estoque",
      "Redução de custos operacionais",
      "Melhoria na experiência do cliente",
    ],
    features: [
      "Interface intuitiva para operações diárias",
      "Escaneamento rápido de produtos",
      "Gestão de preços e promoções",
      "Relatórios de vendas e estoque",
      "Integração com sistemas de PDV",
    ],
  },
  {
    name: "Educação",
    slug: "educacao",
    image:
      "/images/pexels-photo-256541.webp",
    description:
      "Gerencie materiais didáticos, equipamentos e suprimentos escolares com o Purple Stock. Nossa solução é ideal para escolas, universidades e instituições de ensino.",
    benefits: [
      "Controle de materiais didáticos",
      "Gestão de equipamentos e laboratórios",
      "Rastreamento de empréstimos de livros e materiais",
      "Redução de perdas e desperdícios",
      "Planejamento eficiente de compras",
    ],
    features: [
      "Controle de estoque por departamento",
      "Gestão de empréstimos de equipamentos",
      "Rastreamento de livros e materiais",
      "Alertas para reposição de materiais",
      "Relatórios de consumo por período letivo",
    ],
  },
  {
    name: "Produção Audiovisual",
    slug: "audiovisual",
    image:
      "/images/audio-visual-1.jpg",
    description:
      "Transforme sua gestão de equipamentos audiovisuais com o Purple Stock. Nossa solução é projetada especificamente para produtoras, estúdios de filmagem, empresas de eventos e profissionais do setor audiovisual que precisam de controle total sobre câmeras, iluminação, áudio e acessórios.",
    benefits: [
      "Controle completo de equipamentos de filmagem e fotografia",
      "Gestão eficiente de locações e projetos",
      "Rastreamento de acessórios e consumíveis",
      "Redução de perdas e danos em equipamentos",
      "Otimização do uso de recursos por projeto",
      "Controle de manutenção preventiva e corretiva",
      "Gestão de seguros e garantias de equipamentos",
      "Integração com sistemas de agendamento e produção",
    ],
    features: [
      "Controle de equipamentos por categoria (câmeras, lentes, iluminação, áudio)",
      "Sistema de check-in/check-out para locações e projetos",
      "Rastreamento de acessórios com códigos QR personalizados",
      "Gestão de baterias, cartões de memória e consumíveis",
      "Controle de temperatura e condições de armazenamento",
      "Alertas para manutenção preventiva de equipamentos",
      "Relatórios de utilização por equipamento e projeto",
      "Gestão de fornecedores e serviços técnicos",
      "Controle de versões e atualizações de firmware",
      "Integração com sistemas de orçamento e faturamento",
      "Dashboard específico para equipamentos críticos",
      "Sistema de backup para dados de equipamentos",
    ],
  },
]

export default function IndustryPage({ params }: { params: { slug: string } }) {
  // Find the industry data based on the slug
  const industry = industriesData.find((ind) => ind.slug === params.slug) || industriesData[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <Navbar />

      <div className="pt-20">
        {/* Enhanced Hero Section */}
        <div className="relative h-[500px] overflow-hidden">
          <Image src={industry.image || "/placeholder.svg"} alt={industry.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
          
          {/* Navigation and Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <Link href="/industrias" className="inline-flex items-center text-white mb-6 hover:text-purple-200 transition-colors duration-200 group">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                Voltar para Indústrias
              </Link>
              
              <div className="max-w-4xl">
                <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium mb-6 border border-white/30">
                  <Star className="w-4 h-4 mr-2" />
                  Solução Especializada
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  {industry.name}
                </h1>
                
                <p className="text-xl lg:text-2xl text-white/90 max-w-3xl leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Benefits Section */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Benefícios para {industry.name}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Descubra como o Purple Stock pode transformar suas operações e impulsionar o crescimento do seu negócio.
                </p>
              </div>

              <div className="space-y-6">
                {industry.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-110 transition-transform duration-200">
                      <Check className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                        {benefit}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Features Section */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Recursos Principais
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Funcionalidades avançadas projetadas especificamente para atender às necessidades do seu setor.
                </p>
              </div>

              <div className="space-y-6">
                {industry.features.map((feature, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 mr-4 group-hover:scale-110 transition-transform duration-200">
                      <Star className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-colors duration-200">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Resultados Comprovados
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empresas do setor de {industry.name} já estão transformando suas operações com o Purple Stock.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                <div className="text-gray-600">Aumento na Eficiência</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-gray-600">Precisão no Controle</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-100 to-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Clock className="w-10 h-10 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-gray-600">Disponibilidade</div>
              </div>
              
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                <div className="text-gray-600">Empresas Atendidas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Case Studies Section */}
        <div className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Casos de Sucesso
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Empresas do setor de {industry.name} que transformaram suas operações com o Purple Stock.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mr-4">
                    <Star className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Empresa de {industry.name}</h3>
                    <p className="text-gray-600">Setor: {industry.name}</p>
                  </div>
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "O Purple Stock revolucionou nossa gestão de estoque. Conseguimos reduzir perdas em 30% e aumentar a eficiência operacional significativamente."
                </blockquote>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Cliente desde 2023
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mr-4">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Empresa de {industry.name}</h3>
                    <p className="text-gray-600">Setor: {industry.name}</p>
                  </div>
                </div>
                <blockquote className="text-lg text-gray-700 mb-6 leading-relaxed">
                  "A implementação do Purple Stock foi rápida e os resultados foram imediatos. Nossa equipe adorou a facilidade de uso e a interface intuitiva."
                </blockquote>
                <div className="flex items-center text-sm text-gray-500">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Cliente desde 2023
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <div className="py-20 bg-gradient-to-br from-purple-600 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Transforme sua gestão de estoque hoje
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Junte-se a milhares de empresas que já otimizaram suas operações com o Purple Stock e descubra como podemos ajudar sua empresa do setor de {industry.name}.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/coming-soon">
                <Button size="lg" className="bg-white hover:bg-gray-100 text-purple-700 px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl">
                  <Zap className="w-5 h-5 mr-2" />
                  Começar Teste Gratuito
                </Button>
              </Link>
              
              <Link href="/coming-soon">
                <Button variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold transition-all duration-300 rounded-xl backdrop-blur-sm">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Agendar Demonstração
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

