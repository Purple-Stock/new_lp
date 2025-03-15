import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

// This would typically come from a database or API
const industriesData = [
  {
    name: "Atacado",
    slug: "atacado",
    image:
      "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-photo-1145434-nZlG4ZXNDfsvJBsMU0BlbkiSB9RiMB.jpeg",
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
      "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      "https://images.pexels.com/photos/3985298/pexels-photo-3985298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      "https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
      "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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
]

export default function IndustryPage({ params }: { params: { slug: string } }) {
  // Find the industry data based on the slug
  const industry = industriesData.find((ind) => ind.slug === params.slug) || industriesData[0]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[400px]">
          <Image src={industry.image || "/placeholder.svg"} alt={industry.name} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <Link href="/industrias" className="inline-flex items-center text-white mb-4 hover:underline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para Indústrias
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{industry.name}</h1>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Solução Purple Stock para {industry.name}</h2>
              <p className="text-lg text-gray-700 mb-8">{industry.description}</p>

              <h3 className="text-xl font-semibold mb-4">Benefícios</h3>
              <ul className="space-y-3 mb-8">
                {industry.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#9333E9] mr-2 flex-shrink-0 mt-1" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Recursos</h3>
              <ul className="space-y-3 mb-8">
                {industry.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-[#9333E9] mr-2 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mt-8">
                <h3 className="text-xl font-semibold mb-4">Pronto para transformar sua gestão de estoque?</h3>
                <p className="mb-6">
                  Experimente o Purple Stock gratuitamente por 7 dias e descubra como podemos ajudar sua empresa a
                  otimizar processos e reduzir custos.
                </p>
                <Button className="w-full bg-[#9333E9] hover:bg-[#7928CA]">Começar teste gratuito</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Casos de Sucesso</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <blockquote className="text-lg font-medium mb-4">
                  "O Purple Stock revolucionou nossa gestão de estoque. Conseguimos reduzir perdas em 30% e aumentar a
                  eficiência operacional."
                </blockquote>
                <p className="text-gray-600">Empresa de {industry.name}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <blockquote className="text-lg font-medium mb-4">
                  "A implementação do Purple Stock foi rápida e os resultados foram imediatos. Nossa equipe adorou a
                  facilidade de uso."
                </blockquote>
                <p className="text-gray-600">Empresa de {industry.name}</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#9333E9] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Transforme sua gestão de estoque hoje</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Junte-se a milhares de empresas que já otimizaram suas operações com o Purple Stock.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white hover:bg-gray-100 text-[#9333E9]">
                Agendar demonstração
              </Button>
              <Button size="lg" className="bg-transparent border-2 border-white hover:bg-white/10">
                Falar com consultor
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

