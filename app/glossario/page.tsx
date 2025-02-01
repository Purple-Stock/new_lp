import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Glossario() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">Glossário de Termos para Pequenas Empresas</h1>
        <p className="text-lg mb-8">
          Nosso glossário explica termos e siglas importantes de gestão de estoque e contabilidade, fornecendo às
          pequenas empresas o conhecimento necessário para otimizar processos de inventário, controlar custos e
          aprimorar suas finanças.
        </p>

        <div className="space-y-8">
          {glossaryTerms.map((term) => (
            <div key={term.term} className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-2">{term.term}</h2>
              <p className="text-gray-700">{term.definition}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">
            Quer aprender mais sobre estratégias de crescimento e melhores práticas de gestão de estoque?
          </h2>
          <p className="text-lg mb-4">Confira o Blog do Purple Stock abaixo:</p>
          <Link href="https://blog.purplestock.com.br" className="text-purple-600 hover:text-purple-800 font-semibold">
            Blog Purple Stock
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

const glossaryTerms = [
  {
    term: "3PL (Logística Terceirizada)",
    definition:
      "Refere-se à terceirização de funções logísticas e de cadeia de suprimentos para provedores externos. Envolve a contratação de uma empresa para lidar com inventário, armazenagem, envio e até gerenciamento de estoque para reduzir custos e expandir negócios.",
  },
  {
    term: "Metodologia 5S",
    definition:
      "Um conjunto de diretrizes usadas para organizar e manter um ambiente de trabalho limpo, eficiente e produtivo. Originária do Japão, é uma abordagem sistemática que agrupa cinco 'pilares' comportamentais: Seiri (Organização), Seiton (Arrumação), Seiso (Limpeza), Seiketsu (Padronização) e Shitsuke (Disciplina).",
  },
  {
    term: "Regra 80/20",
    definition:
      "Também conhecida como Princípio de Pareto, refere-se à noção de que 80% dos efeitos vêm de 20% das causas. No contexto de gestão de estoque, envolve identificar os itens ou fatores mais importantes (20%) que contribuem para a maioria dos resultados de vendas de uma empresa (80%).",
  },
  {
    term: "Contas a Pagar",
    definition:
      "Refere-se ao dinheiro que a empresa deve aos seus fornecedores e credores. Na contabilidade, está na categoria de 'Passivos Circulantes'.",
  },
  {
    term: "Contas a Receber",
    definition:
      "Refere-se ao dinheiro devido à empresa pelos clientes por bens ou serviços entregues. Na contabilidade, está na categoria de 'Ativos Circulantes'.",
  },
  {
    term: "B2B",
    definition:
      "Business-to-business, ou B2B, refere-se às transações, relacionamentos e serviços entre empresas, como entre um fabricante e um atacadista, ou entre um atacadista e um varejista.",
  },
  {
    term: "Sistema de Código de Barras",
    definition:
      "Uma ferramenta essencial para empresas que buscam uma transformação digital na gestão de estoque. Códigos de barras são símbolos compostos por uma combinação de barras pretas e espaços brancos que representam informações sobre um produto.",
  },
  {
    term: "Lista de Materiais (BOM)",
    definition:
      "Uma lista detalhada que inclui os custos de materiais, peças e componentes necessários para fabricar produtos específicos. Fornece diretrizes para criar produtos, especificando as quantidades e relações entre diferentes peças.",
  },
  {
    term: "Efeito Chicote",
    definition:
      "Fenômeno onde pequenas flutuações na demanda no nível de varejo podem causar flutuações progressivamente maiores na demanda nos níveis de atacado, distribuidor, fabricante e fornecedor de matérias-primas.",
  },
  {
    term: "Ciclo de Conversão de Caixa (CCC)",
    definition:
      "Mede o tempo que leva para uma empresa converter seus investimentos em estoque em fluxo de caixa das vendas. Uma gestão eficaz de estoque pode encurtar o CCC, melhorando o fluxo de caixa.",
  },
  {
    term: "Ativos Circulantes",
    definition:
      "Incluem dinheiro, contas a receber, estoque e outros ativos que se espera que sejam convertidos em dinheiro dentro de um ano.",
  },
  {
    term: "Passivos Circulantes",
    definition:
      "São obrigações que a empresa precisa pagar dentro de um ano, como contas a pagar, empréstimos de curto prazo e outras dívidas de curto prazo.",
  },
  {
    term: "Custo das Mercadorias Vendidas (CMV)",
    definition:
      "Refere-se ao custo total de produção ou compra dos bens que uma empresa vende em um período específico. Inclui custos diretos como o custo de matérias-primas e mão de obra de fabricação.",
  },
  {
    term: "Previsão de Demanda",
    definition:
      "O processo de prever quanto de um produto ou serviço os clientes desejarão no futuro. As empresas estimam a demanda futura coletando dados, analisando tendências e fazendo previsões para tomar melhores decisões de negócios.",
  },
  {
    term: "Dropshipping",
    definition:
      "Um modelo de varejo no qual uma loja vende produtos aos clientes sem manter os itens em estoque. Em vez disso, a empresa faz parceria com um fornecedor que lida com o gerenciamento de estoque e o envio diretamente ao cliente.",
  },
  {
    term: "Quantidade Econômica de Pedido (EOQ)",
    definition:
      "Uma fórmula usada na gestão de estoque para determinar o tamanho ideal de pedido que minimiza os custos totais de estoque, incluindo custos de pedido e manutenção.",
  },
  {
    term: "Planejamento de Recursos Empresariais (ERP)",
    definition:
      "Um tipo de software que ajuda as empresas a gerenciar seus processos principais e atividades diárias, incluindo RH, contabilidade e cadeia de suprimentos.",
  },
  {
    term: "Primeiro a Entrar, Primeiro a Sair (PEPS)",
    definition:
      "Um método comum de avaliação de estoque usado para gerenciar custos de estoque e calcular o custo das mercadorias vendidas. No PEPS, os itens de estoque mais antigos são vendidos primeiro.",
  },
  {
    term: "Inflação",
    definition:
      "A taxa na qual os preços de bens e serviços aumentam, levando a uma diminuição no poder de compra de uma moeda. É importante considerar os efeitos da inflação no custo das mercadorias vendidas e nos métodos de avaliação de estoque.",
  },
  {
    term: "Contagem de Estoque",
    definition:
      "Também conhecida como auditoria de estoque, refere-se ao processo de contar e verificar fisicamente as quantidades de itens em mãos em um ponto específico no tempo.",
  },
  {
    term: "Gestão de Estoque",
    definition:
      "O processo de gerenciar e organizar o estoque de uma empresa, rastreando níveis de estoque e pedidos para atender à demanda do cliente enquanto minimiza os custos.",
  },
  {
    term: "Financiamento de Estoque",
    definition:
      "Uma forma de as empresas obterem dinheiro para comprar ou gerenciar seu estoque por meio de um empréstimo de curto prazo ou linha de crédito.",
  },
  {
    term: "Índice de Rotatividade de Estoque",
    definition:
      "Avalia quão eficientemente uma empresa gerencia seu estoque, dividindo o custo das mercadorias vendidas pelo estoque médio mantido durante um período específico.",
  },
  {
    term: "Gestão de Ativos de TI (ITAM)",
    definition:
      "A prática de gerenciar e otimizar os ativos de TI de uma organização, incluindo hardware, software e dados digitais.",
  },
  {
    term: "Just-In-Time (JIT)",
    definition:
      "Uma estratégia de gestão para otimizar os níveis de estoque e reduzir o desperdício, recebendo mercadorias apenas quando necessárias no processo de produção.",
  },
  {
    term: "Último a Entrar, Primeiro a Sair (UEPS)",
    definition:
      "Um método comum de avaliação de estoque usado para gerenciar custos de estoque e calcular o custo das mercadorias vendidas. No UEPS, os itens de estoque comprados mais recentemente são vendidos primeiro.",
  },
  {
    term: "Tempo de Espera",
    definition:
      "Refere-se ao tempo de fabricação do produto do início ao fim. Mede o tempo que leva para um pedido ser atendido desde o momento em que é feito.",
  },
  {
    term: "Logística",
    definition:
      "O processo pelo qual bens, serviços ou informações se movem dos fabricantes ou distribuidores para os consumidores.",
  },
  {
    term: "Quantidade Mínima de Pedido (MOQ)",
    definition:
      "Refere-se ao menor número de unidades ou produtos que um fornecedor está disposto a vender a um comprador em um único pedido.",
  },
  {
    term: "Erro de Separação",
    definition:
      "Ocorre quando os itens errados são selecionados ou separados durante o processo de atendimento de pedidos, geralmente devido a um layout de armazém ruim e registros de estoque imprecisos.",
  },
  {
    term: "Excesso de Estoque",
    definition:
      "Refere-se a ter mais estoque em mãos do que é necessário para atender à demanda atual. Pode levar a custos aumentados e várias ineficiências operacionais para uma empresa.",
  },
  {
    term: "Re-comércio",
    definition:
      "Refere-se à tendência do consumidor em que as pessoas compram e vendem produtos previamente possuídos ou usados.",
  },
  {
    term: "Logística Reversa",
    definition:
      "Refere-se ao processo logístico de devolução de produtos dos clientes de volta aos fornecedores, organizações ou empresas que originalmente os produziram.",
  },
  {
    term: "RFID (Identificação por Radiofrequência)",
    definition:
      "Refere-se à tecnologia usada para identificar e rastrear itens usando ondas de rádio. Em termos simples, é como um código de barras moderno que usa sinais de rádio para rastrear e gerenciar estoque ou ativos.",
  },
  {
    term: "Estoque de Segurança",
    definition:
      "Representa o estoque extra mantido para prevenir escassez imprevista de estoque. Ajuda as empresas a não ficarem sem produtos para atender à demanda do consumidor, mantendo estoque extra na retaguarda.",
  },
  {
    term: "Unidade de Manutenção de Estoque (SKU)",
    definition:
      "Um código ou identificador único e alfanumérico que distingue produtos no estoque de uma empresa. Revela características do item como tamanho, cor, fabricante, e é usado para auxiliar na simplificação do controle de estoque e otimização do sortimento de produtos.",
  },
  {
    term: "Ruptura de Estoque",
    definition:
      "Ocorre na gestão de estoque quando uma empresa fica sem um item específico necessário para atender à demanda do cliente. Pode levar a vendas perdidas, diminuição da satisfação do cliente e interrupções na produção.",
  },
  {
    term: "Cadeia de Suprimentos",
    definition:
      "Refere-se aos processos envolvidos na produção e entrega de um bem, desde as matérias-primas até o cliente final. O termo abrange vários componentes, como fornecimento, fabricação, armazenagem e distribuição.",
  },
  {
    term: "Estoque Gerenciado pelo Fornecedor (VMI)",
    definition:
      "Refere-se à aliança estratégica onde os fornecedores gerenciam e repõem o estoque com base em dados em tempo real compartilhados pelos clientes.",
  },
  {
    term: "Sistema de Gerenciamento de Armazém (WMS)",
    definition:
      "Um aplicativo de software para ajudar a gerenciar e otimizar as operações de armazém, incluindo o movimento e armazenamento de mercadorias dentro de um armazém e o processamento das transações (ou seja, recebimento, separação, embalagem e envio).",
  },
  {
    term: "Custo Médio Ponderado (WAC)",
    definition:
      "O método de custo médio ponderado é uma forma de calcular o custo médio dos itens de estoque e determinar o custo das mercadorias vendidas. É usado para descobrir quanto cada item no estoque custa em média, considerando os custos do estoque antigo e novo.",
  },
  {
    term: "Capital de Giro",
    definition:
      "É a diferença entre ativos circulantes e passivos circulantes, e é uma medida da saúde financeira de curto prazo de uma empresa. Representa os fundos disponíveis para atender às despesas operacionais do dia a dia.",
  },
]

