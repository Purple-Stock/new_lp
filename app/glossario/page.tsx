"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import { translations } from "@/utils/translations"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Search, BookOpen, TrendingUp, Building2, Truck, Calculator, Database, Globe, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Glossario() {
  const { language } = useLanguage()
  const t = translations[language]
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Define categories for terms
  const categories = [
    { id: "all", label: "Todos", icon: Globe, color: "bg-gray-100 text-gray-700" },
    { id: "inventory", label: "Inventário", icon: Database, color: "bg-blue-100 text-blue-700" },
    { id: "logistics", label: "Logística", icon: Truck, color: "bg-green-100 text-green-700" },
    { id: "finance", label: "Finanças", icon: Calculator, color: "bg-purple-100 text-purple-700" },
    { id: "management", label: "Gestão", icon: Building2, color: "bg-orange-100 text-orange-700" },
    { id: "technology", label: "Tecnologia", icon: TrendingUp, color: "bg-red-100 text-red-700" }
  ]

  // Categorize terms
  const categorizedTerms = {
    inventory: ["inventory-management", "inventory-count", "inventory-turnover", "inventory-financing", "sku", "stockout", "overstock", "safety-stock"],
    logistics: ["logistics", "supply-chain", "lead-time", "reverse-logistics", "picking-error", "wms", "3pl", "vmi"],
    finance: ["accounts-payable", "accounts-receivable", "current-assets", "current-liabilities", "cogs", "working-capital", "ccc", "inflation"],
    management: ["5s", "80-20", "demand-forecasting", "jit", "moq", "eoq", "recommerce", "bullwhip"],
    technology: ["barcode", "rfid", "erp", "itam", "dropshipping"]
  }

  const terms = [
    {
      id: "3pl",
      pt: {
        term: "3PL (Logística Terceirizada)",
        definition: "Refere-se à terceirização de funções logísticas e de cadeia de suprimentos para provedores externos. Envolve a contratação de uma empresa para lidar com inventário, armazenagem, envio e até gerenciamento de estoque para reduzir custos e expandir negócios."
      },
      en: {
        term: "3PL (Third-Party Logistics)",
        definition: "Refers to the outsourcing of logistics and supply chain functions to external providers. Involves hiring a company to handle inventory, warehousing, shipping, and even inventory management to reduce costs and expand business."
      },
      fr: {
        term: "3PL (Logistique Tierce Partie)",
        definition: "Fait référence à l'externalisation des fonctions logistiques et de la chaîne d'approvisionnement vers des prestataires externes. Implique l'embauche d'une entreprise pour gérer l'inventaire, l'entrepôt, l'expédition et même la gestion des stocks pour réduire les coûts et développer l'activité."
      }
    },
    {
      id: "5s",
      pt: {
        term: "Metodologia 5S",
        definition: "Um conjunto de diretrizes usadas para organizar e manter um ambiente de trabalho limpo, eficiente e produtivo. Originária do Japão, é uma abordagem sistemática que agrupa cinco 'pilares' comportamentais: Seiri (Organização), Seiton (Arrumação), Seiso (Limpeza), Seiketsu (Padronização) e Shitsuke (Disciplina)."
      },
      en: {
        term: "5S Methodology",
        definition: "A set of guidelines used to organize and maintain a clean, efficient, and productive work environment. Originating from Japan, it's a systematic approach that groups five behavioral 'pillars': Seiri (Sort), Seiton (Set in Order), Seiso (Shine), Seiketsu (Standardize), and Shitsuke (Sustain)."
      },
      fr: {
        term: "Méthodologie 5S",
        definition: "Un ensemble de directives utilisées pour organiser et maintenir un environnement de travail propre, efficace et productif. Originaire du Japon, c'est une approche systématique qui regroupe cinq 'piliers' comportementaux : Seiri (Trier), Seiton (Ranger), Seiso (Nettoyer), Seiketsu (Standardiser) et Shitsuke (Maintenir)."
      }
    },
    {
      id: "80-20",
      pt: {
        term: "Regra 80/20",
        definition: "Também conhecida como Princípio de Pareto, refere-se à noção de que 80% dos efeitos vêm de 20% das causas. No contexto de gestão de estoque, envolve identificar os itens ou fatores mais importantes (20%) que contribuem para a maioria dos resultados de vendas de uma empresa (80%)."
      },
      en: {
        term: "80/20 Rule",
        definition: "Also known as the Pareto Principle, refers to the notion that 80% of effects come from 20% of causes. In the context of inventory management, it involves identifying the most important items or factors (20%) that contribute to the majority of a company's sales results (80%)."
      },
      fr: {
        term: "Règle 80/20",
        definition: "Également connue sous le nom de Principe de Pareto, fait référence à la notion selon laquelle 80% des effets proviennent de 20% des causes. Dans le contexte de la gestion des stocks, elle implique d'identifier les articles ou facteurs les plus importants (20%) qui contribuent à la majorité des résultats de vente d'une entreprise (80%)."
      }
    },
    {
      id: "accounts-payable",
      pt: {
        term: "Contas a Pagar",
        definition: "Refere-se ao dinheiro que a empresa deve aos seus fornecedores e credores. Na contabilidade, está na categoria de 'Passivos Circulantes'."
      },
      en: {
        term: "Accounts Payable",
        definition: "Refers to the money that the company owes to its suppliers and creditors. In accounting, it falls under the 'Current Liabilities' category."
      },
      fr: {
        term: "Comptes Fournisseurs",
        definition: "Fait référence à l'argent que l'entreprise doit à ses fournisseurs et créanciers. En comptabilité, cela relève de la catégorie 'Passifs Courants'."
      }
    },
    {
      id: "accounts-receivable",
      pt: {
        term: "Contas a Receber",
        definition: "Refere-se ao dinheiro devido à empresa pelos clientes por bens ou serviços entregues. Na contabilidade, está na categoria de 'Ativos Circulantes'."
      },
      en: {
        term: "Accounts Receivable",
        definition: "Refers to the money owed to the company by customers for delivered goods or services. In accounting, it falls under the 'Current Assets' category."
      },
      fr: {
        term: "Comptes Clients",
        definition: "Fait référence à l'argent dû à l'entreprise par les clients pour des biens ou services livrés. En comptabilité, cela relève de la catégorie 'Actifs Courants'."
      }
    },
    {
      id: "b2b",
      pt: {
        term: "B2B",
        definition: "Business-to-business, ou B2B, refere-se às transações, relacionamentos e serviços entre empresas, como entre um fabricante e um atacadista, ou entre um atacadista e um varejista."
      },
      en: {
        term: "B2B",
        definition: "Business-to-business, or B2B, refers to transactions, relationships, and services between businesses, such as between a manufacturer and a wholesaler, or between a wholesaler and a retailer."
      },
      fr: {
        term: "B2B",
        definition: "Business-to-business, ou B2B, fait référence aux transactions, relations et services entre entreprises, comme entre un fabricant et un grossiste, ou entre un grossiste et un détaillant."
      }
    },
    {
      id: "barcode",
      pt: {
        term: "Sistema de Código de Barras",
        definition: "Uma ferramenta essencial para empresas que buscam uma transformação digital na gestão de estoque. Códigos de barras são símbolos compostos por uma combinação de barras pretas e espaços brancos que representam informações sobre um produto."
      },
      en: {
        term: "Barcode System",
        definition: "An essential tool for companies seeking digital transformation in inventory management. Barcodes are symbols composed of a combination of black bars and white spaces that represent information about a product."
      },
      fr: {
        term: "Système de Code-barres",
        definition: "Un outil essentiel pour les entreprises qui cherchent une transformation numérique dans la gestion des stocks. Les codes-barres sont des symboles composés d'une combinaison de barres noires et d'espaces blancs qui représentent des informations sur un produit."
      }
    },
    {
      id: "bom",
      pt: {
        term: "Lista de Materiais (BOM)",
        definition: "Uma lista detalhada que inclui os custos de materiais, peças e componentes necessários para fabricar produtos específicos. Fornece diretrizes para criar produtos, especificando as quantidades e relações entre diferentes peças."
      },
      en: {
        term: "Bill of Materials (BOM)",
        definition: "A detailed list that includes the costs of materials, parts, and components needed to manufacture specific products. Provides guidelines for creating products, specifying quantities and relationships between different parts."
      },
      fr: {
        term: "Nomenclature (BOM)",
        definition: "Une liste détaillée qui inclut les coûts des matériaux, pièces et composants nécessaires à la fabrication de produits spécifiques. Fournit des directives pour créer des produits, en spécifiant les quantités et les relations entre les différentes pièces."
      }
    },
    {
      id: "bullwhip",
      pt: {
        term: "Efeito Chicote",
        definition: "Fenômeno onde pequenas flutuações na demanda no nível de varejo podem causar flutuações progressivamente maiores na demanda nos níveis de atacado, distribuidor, fabricante e fornecedor de matérias-primas."
      },
      en: {
        term: "Bullwhip Effect",
        definition: "A phenomenon where small fluctuations in demand at the retail level can cause progressively larger fluctuations in demand at the wholesale, distributor, manufacturer, and raw material supplier levels."
      },
      fr: {
        term: "Effet Bullwhip",
        definition: "Phénomène où de petites fluctuations de la demande au niveau du détail peuvent provoquer des fluctuations progressivement plus importantes de la demande aux niveaux du gros, du distributeur, du fabricant et du fournisseur de matières premières."
      }
    },
    {
      id: "ccc",
      pt: {
        term: "Ciclo de Conversão de Caixa (CCC)",
        definition: "Mede o tempo que leva para uma empresa converter seus investimentos em estoque em fluxo de caixa das vendas. Uma gestão eficaz de estoque pode encurtar o CCC, melhorando o fluxo de caixa."
      },
      en: {
        term: "Cash Conversion Cycle (CCC)",
        definition: "Measures the time it takes for a company to convert its inventory investments into cash flow from sales. Effective inventory management can shorten the CCC, improving cash flow."
      },
      fr: {
        term: "Cycle de Conversion de Trésorerie (CCC)",
        definition: "Mesure le temps nécessaire à une entreprise pour convertir ses investissements en stocks en flux de trésorerie provenant des ventes. Une gestion efficace des stocks peut raccourcir le CCC, améliorant ainsi le flux de trésorerie."
      }
    },
    {
      id: "current-assets",
      pt: {
        term: "Ativos Circulantes",
        definition: "Incluem dinheiro, contas a receber, estoque e outros ativos que se espera que sejam convertidos em dinheiro dentro de um ano."
      },
      en: {
        term: "Current Assets",
        definition: "Include cash, accounts receivable, inventory, and other assets that are expected to be converted into cash within a year."
      },
      fr: {
        term: "Actifs Courants",
        definition: "Incluent la trésorerie, les comptes clients, les stocks et autres actifs qui devraient être convertis en espèces dans un délai d'un an."
      }
    },
    {
      id: "current-liabilities",
      pt: {
        term: "Passivos Circulantes",
        definition: "São obrigações que a empresa precisa pagar dentro de um ano, como contas a pagar, empréstimos de curto prazo e outras dívidas de curto prazo."
      },
      en: {
        term: "Current Liabilities",
        definition: "Are obligations that the company needs to pay within a year, such as accounts payable, short-term loans, and other short-term debts."
      },
      fr: {
        term: "Passifs Courants",
        definition: "Sont des obligations que l'entreprise doit payer dans un délai d'un an, comme les comptes fournisseurs, les prêts à court terme et autres dettes à court terme."
      }
    },
    {
      id: "cogs",
      pt: {
        term: "Custo das Mercadorias Vendidas (CMV)",
        definition: "Refere-se ao custo total de produção ou compra dos bens que uma empresa vende em um período específico. Inclui custos diretos como o custo de matérias-primas e mão de obra de fabricação."
      },
      en: {
        term: "Cost of Goods Sold (COGS)",
        definition: "Refers to the total cost of producing or purchasing the goods that a company sells in a specific period. Includes direct costs such as raw material costs and manufacturing labor."
      },
      fr: {
        term: "Coût des Marchandises Vendues (CMV)",
        definition: "Fait référence au coût total de production ou d'achat des biens qu'une entreprise vend sur une période spécifique. Inclut les coûts directs comme le coût des matières premières et la main-d'œuvre de fabrication."
      }
    },
    {
      id: "demand-forecasting",
      pt: {
        term: "Previsão de Demanda",
        definition: "O processo de prever quanto de um produto ou serviço os clientes desejarão no futuro. As empresas estimam a demanda futura coletando dados, analisando tendências e fazendo previsões para tomar melhores decisões de negócios."
      },
      en: {
        term: "Demand Forecasting",
        definition: "The process of predicting how much of a product or service customers will want in the future. Companies estimate future demand by collecting data, analyzing trends, and making forecasts to make better business decisions."
      },
      fr: {
        term: "Prévision de la Demande",
        definition: "Le processus de prévision de la quantité d'un produit ou service que les clients voudront dans le futur. Les entreprises estiment la demande future en collectant des données, en analysant les tendances et en faisant des prévisions pour prendre de meilleures décisions commerciales."
      }
    },
    {
      id: "dropshipping",
      pt: {
        term: "Dropshipping",
        definition: "Um modelo de varejo no qual uma loja vende produtos aos clientes sem manter os itens em estoque. Em vez disso, a empresa faz parceria com um fornecedor que lida com o gerenciamento de estoque e o envio diretamente ao cliente."
      },
      en: {
        term: "Dropshipping",
        definition: "A retail model where a store sells products to customers without keeping items in stock. Instead, the company partners with a supplier who handles inventory management and shipping directly to the customer."
      },
      fr: {
        term: "Dropshipping",
        definition: "Un modèle de vente au détail où un magasin vend des produits aux clients sans garder les articles en stock. Au lieu de cela, l'entreprise s'associe à un fournisseur qui gère l'inventaire et l'expédition directement au client."
      }
    },
    {
      id: "eoq",
      pt: {
        term: "Quantidade Econômica de Pedido (EOQ)",
        definition: "Uma fórmula usada na gestão de estoque para determinar o tamanho ideal de pedido que minimiza os custos totais de estoque, incluindo custos de pedido e manutenção."
      },
      en: {
        term: "Economic Order Quantity (EOQ)",
        definition: "A formula used in inventory management to determine the optimal order size that minimizes total inventory costs, including ordering and holding costs."
      },
      fr: {
        term: "Quantité Économique de Commande (QEC)",
        definition: "Une formule utilisée dans la gestion des stocks pour déterminer la taille optimale de commande qui minimise les coûts totaux des stocks, y compris les coûts de commande et de possession."
      }
    },
    {
      id: "erp",
      pt: {
        term: "Planejamento de Recursos Empresariais (ERP)",
        definition: "Um tipo de software que ajuda as empresas a gerenciar seus processos principais e atividades diárias, incluindo RH, contabilidade e cadeia de suprimentos."
      },
      en: {
        term: "Enterprise Resource Planning (ERP)",
        definition: "A type of software that helps companies manage their core processes and daily activities, including HR, accounting, and supply chain."
      },
      fr: {
        term: "Planification des Ressources d'Entreprise (ERP)",
        definition: "Un type de logiciel qui aide les entreprises à gérer leurs processus principaux et activités quotidiennes, y compris les RH, la comptabilité et la chaîne d'approvisionnement."
      }
    },
    {
      id: "fifo",
      pt: {
        term: "Primeiro a Entrar, Primeiro a Sair (PEPS)",
        definition: "Um método comum de avaliação de estoque usado para gerenciar custos de estoque e calcular o custo das mercadorias vendidas. No PEPS, os itens de estoque mais antigos são vendidos primeiro."
      },
      en: {
        term: "First In, First Out (FIFO)",
        definition: "A common inventory valuation method used to manage inventory costs and calculate the cost of goods sold. In FIFO, the oldest inventory items are sold first."
      },
      fr: {
        term: "Premier Entré, Premier Sorti (PEPS)",
        definition: "Une méthode courante d'évaluation des stocks utilisée pour gérer les coûts des stocks et calculer le coût des marchandises vendues. En PEPS, les articles de stock les plus anciens sont vendus en premier."
      }
    },
    {
      id: "inflation",
      pt: {
        term: "Inflação",
        definition: "A taxa na qual os preços de bens e serviços aumentam, levando a uma diminuição no poder de compra de uma moeda. É importante considerar os efeitos da inflação no custo das mercadorias vendidas e nos métodos de avaliação de estoque."
      },
      en: {
        term: "Inflation",
        definition: "The rate at which the prices of goods and services increase, leading to a decrease in the purchasing power of a currency. It's important to consider the effects of inflation on the cost of goods sold and inventory valuation methods."
      },
      fr: {
        term: "Inflation",
        definition: "Le taux auquel les prix des biens et services augmentent, entraînant une diminution du pouvoir d'achat d'une monnaie. Il est important de considérer les effets de l'inflation sur le coût des marchandises vendues et les méthodes d'évaluation des stocks."
      }
    },
    {
      id: "inventory-count",
      pt: {
        term: "Contagem de Estoque",
        definition: "Também conhecida como auditoria de estoque, refere-se ao processo de contar e verificar fisicamente as quantidades de itens em mãos em um ponto específico no tempo."
      },
      en: {
        term: "Inventory Count",
        definition: "Also known as inventory audit, refers to the process of physically counting and verifying the quantities of items on hand at a specific point in time."
      },
      fr: {
        term: "Comptage des Stocks",
        definition: "Également connue sous le nom d'audit des stocks, fait référence au processus de comptage physique et de vérification des quantités d'articles en main à un moment précis."
      }
    },
    {
      id: "inventory-management",
      pt: {
        term: "Gestão de Estoque",
        definition: "O processo de gerenciar e organizar o estoque de uma empresa, rastreando níveis de estoque e pedidos para atender à demanda do cliente enquanto minimiza os custos."
      },
      en: {
        term: "Inventory Management",
        definition: "The process of managing and organizing a company's inventory, tracking inventory levels and orders to meet customer demand while minimizing costs."
      },
      fr: {
        term: "Gestion des Stocks",
        definition: "Le processus de gestion et d'organisation des stocks d'une entreprise, en suivant les niveaux de stock et les commandes pour répondre à la demande des clients tout en minimisant les coûts."
      }
    },
    {
      id: "inventory-financing",
      pt: {
        term: "Financiamento de Estoque",
        definition: "Uma forma de as empresas obterem dinheiro para comprar ou gerenciar seu estoque por meio de um empréstimo de curto prazo ou linha de crédito."
      },
      en: {
        term: "Inventory Financing",
        definition: "A way for companies to obtain money to purchase or manage their inventory through a short-term loan or line of credit."
      },
      fr: {
        term: "Financement des Stocks",
        definition: "Un moyen pour les entreprises d'obtenir de l'argent pour acheter ou gérer leurs stocks par le biais d'un prêt à court terme ou d'une ligne de crédit."
      }
    },
    {
      id: "inventory-turnover",
      pt: {
        term: "Índice de Rotatividade de Estoque",
        definition: "Avalia quão eficientemente uma empresa gerencia seu estoque, dividindo o custo das mercadorias vendidas pelo estoque médio mantido durante um período específico."
      },
      en: {
        term: "Inventory Turnover Ratio",
        definition: "Evaluates how efficiently a company manages its inventory by dividing the cost of goods sold by the average inventory held during a specific period."
      },
      fr: {
        term: "Taux de Rotation des Stocks",
        definition: "Évalue l'efficacité avec laquelle une entreprise gère ses stocks en divisant le coût des marchandises vendues par le stock moyen détenu pendant une période spécifique."
      }
    },
    {
      id: "itam",
      pt: {
        term: "Gestão de Ativos de TI (ITAM)",
        definition: "A prática de gerenciar e otimizar os ativos de TI de uma organização, incluindo hardware, software e dados digitais."
      },
      en: {
        term: "IT Asset Management (ITAM)",
        definition: "The practice of managing and optimizing an organization's IT assets, including hardware, software, and digital data."
      },
      fr: {
        term: "Gestion des Actifs Informatiques (ITAM)",
        definition: "La pratique de gestion et d'optimisation des actifs informatiques d'une organisation, y compris le matériel, les logiciels et les données numériques."
      }
    },
    {
      id: "jit",
      pt: {
        term: "Just-In-Time (JIT)",
        definition: "Uma estratégia de gestão para otimizar os níveis de estoque e reduzir o desperdício, recebendo mercadorias apenas quando necessárias no processo de produção."
      },
      en: {
        term: "Just-In-Time (JIT)",
        definition: "A management strategy to optimize inventory levels and reduce waste by receiving goods only when needed in the production process."
      },
      fr: {
        term: "Juste-à-Temps (JIT)",
        definition: "Une stratégie de gestion pour optimiser les niveaux de stock et réduire le gaspillage en recevant les marchandises uniquement lorsqu'elles sont nécessaires dans le processus de production."
      }
    },
    {
      id: "lifo",
      pt: {
        term: "Último a Entrar, Primeiro a Sair (UEPS)",
        definition: "Um método comum de avaliação de estoque usado para gerenciar custos de estoque e calcular o custo das mercadorias vendidas. No UEPS, os itens de estoque comprados mais recentemente são vendidos primeiro."
      },
      en: {
        term: "Last In, First Out (LIFO)",
        definition: "A common inventory valuation method used to manage inventory costs and calculate the cost of goods sold. In LIFO, the most recently purchased inventory items are sold first."
      },
      fr: {
        term: "Dernier Entré, Premier Sorti (DEPS)",
        definition: "Une méthode courante d'évaluation des stocks utilisée pour gérer les coûts des stocks et calculer le coût des marchandises vendues. En DEPS, les articles de stock achetés le plus récemment sont vendus en premier."
      }
    },
    {
      id: "lead-time",
      pt: {
        term: "Tempo de Espera",
        definition: "Refere-se ao tempo de fabricação do produto do início ao fim. Mede o tempo que leva para um pedido ser atendido desde o momento em que é feito."
      },
      en: {
        term: "Lead Time",
        definition: "Refers to the product manufacturing time from start to finish. Measures the time it takes for an order to be fulfilled from the moment it is placed."
      },
      fr: {
        term: "Délai de Livraison",
        definition: "Fait référence au temps de fabrication du produit du début à la fin. Mesure le temps nécessaire pour qu'une commande soit exécutée à partir du moment où elle est passée."
      }
    },
    {
      id: "logistics",
      pt: {
        term: "Logística",
        definition: "O processo pelo qual bens, serviços ou informações se movem dos fabricantes ou distribuidores para os consumidores."
      },
      en: {
        term: "Logistics",
        definition: "The process by which goods, services, or information move from manufacturers or distributors to consumers."
      },
      fr: {
        term: "Logistique",
        definition: "Le processus par lequel les biens, services ou informations se déplacent des fabricants ou distributeurs vers les consommateurs."
      }
    },
    {
      id: "moq",
      pt: {
        term: "Quantidade Mínima de Pedido (MOQ)",
        definition: "Refere-se ao menor número de unidades ou produtos que um fornecedor está disposto a vender a um comprador em um único pedido."
      },
      en: {
        term: "Minimum Order Quantity (MOQ)",
        definition: "Refers to the smallest number of units or products that a supplier is willing to sell to a buyer in a single order."
      },
      fr: {
        term: "Quantité Minimale de Commande (QMC)",
        definition: "Fait référence au plus petit nombre d'unités ou de produits qu'un fournisseur est prêt à vendre à un acheteur dans une seule commande."
      }
    },
    {
      id: "picking-error",
      pt: {
        term: "Erro de Separação",
        definition: "Ocorre quando os itens errados são selecionados ou separados durante o processo de atendimento de pedidos, geralmente devido a um layout de armazém ruim e registros de estoque imprecisos."
      },
      en: {
        term: "Picking Error",
        definition: "Occurs when wrong items are selected or picked during the order fulfillment process, usually due to poor warehouse layout and inaccurate inventory records."
      },
      fr: {
        term: "Erreur de Préparation",
        definition: "Se produit lorsque de mauvais articles sont sélectionnés ou prélevés pendant le processus d'exécution des commandes, généralement en raison d'une mauvaise disposition de l'entrepôt et de registres d'inventaire inexacts."
      }
    },
    {
      id: "overstock",
      pt: {
        term: "Excesso de Estoque",
        definition: "Refere-se a ter mais estoque em mãos do que é necessário para atender à demanda atual. Pode levar a custos aumentados e várias ineficiências operacionais para uma empresa."
      },
      en: {
        term: "Overstock",
        definition: "Refers to having more inventory on hand than is necessary to meet current demand. Can lead to increased costs and various operational inefficiencies for a company."
      },
      fr: {
        term: "Surstock",
        definition: "Fait référence au fait d'avoir plus de stock en main que nécessaire pour répondre à la demande actuelle. Peut entraîner des coûts accrus et diverses inefficacités opérationnelles pour une entreprise."
      }
    },
    {
      id: "recommerce",
      pt: {
        term: "Re-comércio",
        definition: "Refere-se à tendência do consumidor em que as pessoas compram e vendem produtos previamente possuídos ou usados."
      },
      en: {
        term: "Re-commerce",
        definition: "Refers to the consumer trend where people buy and sell previously owned or used products."
      },
      fr: {
        term: "Re-commerce",
        definition: "Fait référence à la tendance des consommateurs où les gens achètent et vendent des produits précédemment possédés ou utilisés."
      }
    },
    {
      id: "reverse-logistics",
      pt: {
        term: "Logística Reversa",
        definition: "Refere-se ao processo logístico de devolução de produtos dos clientes de volta aos fornecedores, organizações ou empresas que originalmente os produziram."
      },
      en: {
        term: "Reverse Logistics",
        definition: "Refers to the logistics process of returning products from customers back to suppliers, organizations, or companies that originally produced them."
      },
      fr: {
        term: "Logistique Inverse",
        definition: "Fait référence au processus logistique de retour des produits des clients vers les fournisseurs, organisations ou entreprises qui les ont initialement produits."
      }
    },
    {
      id: "rfid",
      pt: {
        term: "RFID (Identificação por Radiofrequência)",
        definition: "Refere-se à tecnologia usada para identificar e rastrear itens usando ondas de rádio. Em termos simples, é como um código de barras moderno que usa sinais de rádio para rastrear e gerenciar estoque ou ativos."
      },
      en: {
        term: "RFID (Radio Frequency Identification)",
        definition: "Refers to technology used to identify and track items using radio waves. Simply put, it's like a modern barcode that uses radio signals to track and manage inventory or assets."
      },
      fr: {
        term: "RFID (Identification par Radiofréquence)",
        definition: "Fait référence à la technologie utilisée pour identifier et suivre des articles à l'aide d'ondes radio. En termes simples, c'est comme un code-barres moderne qui utilise des signaux radio pour suivre et gérer les stocks ou les actifs."
      }
    },
    {
      id: "safety-stock",
      pt: {
        term: "Estoque de Segurança",
        definition: "Representa o estoque extra mantido para prevenir escassez imprevista de estoque. Ajuda as empresas a não ficarem sem produtos para atender à demanda do consumidor, mantendo estoque extra na retaguarda."
      },
      en: {
        term: "Safety Stock",
        definition: "Represents the extra inventory maintained to prevent unexpected stock shortages. Helps companies avoid running out of products to meet consumer demand by keeping extra inventory in reserve."
      },
      fr: {
        term: "Stock de Sécurité",
        definition: "Représente le stock supplémentaire maintenu pour prévenir les pénuries de stock imprévues. Aide les entreprises à éviter de manquer de produits pour répondre à la demande des consommateurs en gardant un stock supplémentaire en réserve."
      }
    },
    {
      id: "sku",
      pt: {
        term: "Unidade de Manutenção de Estoque (SKU)",
        definition: "Um código ou identificador único e alfanumérico que distingue produtos no estoque de uma empresa. Revela características do item como tamanho, cor, fabricante, e é usado para auxiliar na simplificação do controle de estoque e otimização do sortimento de produtos."
      },
      en: {
        term: "Stock Keeping Unit (SKU)",
        definition: "A unique alphanumeric code or identifier that distinguishes products in a company's inventory. Reveals item characteristics such as size, color, manufacturer, and is used to help simplify inventory control and optimize product assortment."
      },
      fr: {
        term: "Unité de Gestion des Stocks (UGS)",
        definition: "Un code ou identifiant unique alphanumérique qui distingue les produits dans le stock d'une entreprise. Révèle les caractéristiques de l'article comme la taille, la couleur, le fabricant, et est utilisé pour aider à simplifier le contrôle des stocks et optimiser l'assortiment de produits."
      }
    },
    {
      id: "stockout",
      pt: {
        term: "Ruptura de Estoque",
        definition: "Ocorre na gestão de estoque quando uma empresa fica sem um item específico necessário para atender à demanda do cliente. Pode levar a vendas perdidas, diminuição da satisfação do cliente e interrupções na produção."
      },
      en: {
        term: "Stockout",
        definition: "Occurs in inventory management when a company runs out of a specific item needed to meet customer demand. Can lead to lost sales, decreased customer satisfaction, and production disruptions."
      },
      fr: {
        term: "Rupture de Stock",
        definition: "Se produit dans la gestion des stocks lorsqu'une entreprise manque d'un article spécifique nécessaire pour répondre à la demande des clients. Peut entraîner des ventes perdues, une diminution de la satisfaction des clients et des interruptions de production."
      }
    },
    {
      id: "supply-chain",
      pt: {
        term: "Cadeia de Suprimentos",
        definition: "Refere-se aos processos envolvidos na produção e entrega de um bem, desde as matérias-primas até o cliente final. O termo abrange vários componentes, como fornecimento, fabricação, armazenagem e distribuição."
      },
      en: {
        term: "Supply Chain",
        definition: "Refers to the processes involved in the production and delivery of a good, from raw materials to the end customer. The term covers various components such as supply, manufacturing, warehousing, and distribution."
      },
      fr: {
        term: "Chaîne d'Approvisionnement",
        definition: "Fait référence aux processus impliqués dans la production et la livraison d'un bien, des matières premières au client final. Le terme couvre divers composants tels que l'approvisionnement, la fabrication, l'entrepôt et la distribution."
      }
    },
    {
      id: "vmi",
      pt: {
        term: "Estoque Gerenciado pelo Fornecedor (VMI)",
        definition: "Refere-se à aliança estratégica onde os fornecedores gerenciam e repõem o estoque com base em dados em tempo real compartilhados pelos clientes."
      },
      en: {
        term: "Vendor Managed Inventory (VMI)",
        definition: "Refers to the strategic alliance where suppliers manage and replenish inventory based on real-time data shared by customers."
      },
      fr: {
        term: "Gestion des Stocks par le Fournisseur (VMI)",
        definition: "Fait référence à l'alliance stratégique où les fournisseurs gèrent et réapprovisionnent les stocks sur la base de données en temps réel partagées par les clients."
      }
    },
    {
      id: "wms",
      pt: {
        term: "Sistema de Gerenciamento de Armazém (WMS)",
        definition: "Um aplicativo de software para ajudar a gerenciar e otimizar as operações de armazém, incluindo o movimento e armazenamento de mercadorias dentro de um armazém e o processamento das transações (ou seja, recebimento, separação, embalagem e envio)."
      },
      en: {
        term: "Warehouse Management System (WMS)",
        definition: "A software application to help manage and optimize warehouse operations, including the movement and storage of goods within a warehouse and the processing of transactions (i.e., receiving, picking, packing, and shipping)."
      },
      fr: {
        term: "Système de Gestion d'Entrepôt (WMS)",
        definition: "Une application logicielle pour aider à gérer et optimiser les opérations d'entrepôt, y compris le mouvement et le stockage des marchandises dans un entrepôt et le traitement des transactions (c'est-à-dire, réception, préparation, emballage et expédition)."
      }
    },
    {
      id: "wac",
      pt: {
        term: "Custo Médio Ponderado (WAC)",
        definition: "O método de custo médio ponderado é uma forma de calcular o custo médio dos itens de estoque e determinar o custo das mercadorias vendidas. É usado para descobrir quanto cada item no estoque custa em média, considerando os custos do estoque antigo e novo."
      },
      en: {
        term: "Weighted Average Cost (WAC)",
        definition: "The weighted average cost method is a way to calculate the average cost of inventory items and determine the cost of goods sold. It's used to find out how much each item in inventory costs on average, considering the costs of old and new inventory."
      },
      fr: {
        term: "Coût Moyen Pondéré (CMP)",
        definition: "La méthode du coût moyen pondéré est une façon de calculer le coût moyen des articles en stock et de déterminer le coût des marchandises vendues. Elle est utilisée pour déterminer combien coûte en moyenne chaque article en stock, en tenant compte des coûts des stocks anciens et nouveaux."
      }
    },
    {
      id: "working-capital",
      pt: {
        term: "Capital de Giro",
        definition: "É a diferença entre ativos circulantes e passivos circulantes, e é uma medida da saúde financeira de curto prazo de uma empresa. Representa os fundos disponíveis para atender às despesas operacionais do dia a dia."
      },
      en: {
        term: "Working Capital",
        definition: "It's the difference between current assets and current liabilities, and is a measure of a company's short-term financial health. Represents the funds available to meet day-to-day operating expenses."
      },
      fr: {
        term: "Fonds de Roulement",
        definition: "C'est la différence entre les actifs courants et les passifs courants, et c'est une mesure de la santé financière à court terme d'une entreprise. Représente les fonds disponibles pour faire face aux dépenses d'exploitation quotidiennes."
      }
    }
  ]

  // Filter terms based on search and category
  let filteredTerms = terms

  if (selectedCategory !== "all") {
    const categoryTermIds = categorizedTerms[selectedCategory as keyof typeof categorizedTerms] || []
    filteredTerms = filteredTerms.filter((term) => categoryTermIds.includes(term.id))
  }

  if (searchTerm) {
    filteredTerms = filteredTerms.filter(
      (term) =>
        term[language].term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        term[language].definition.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-6">
            <BookOpen className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            {t.glossary.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.glossary.description}
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Buscar termos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-3 text-lg border-purple-200 focus:border-purple-500 focus:ring-purple-500"
              />
            </div>
            <Button
              variant="outline"
              className="border-purple-200 hover:border-purple-300 hover:bg-purple-50"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-purple-600 text-white shadow-lg scale-105"
                      : `${category.color} hover:scale-105 hover:shadow-md`
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-center">
          <p className="text-gray-600">
            {filteredTerms.length} {filteredTerms.length === 1 ? "termo encontrado" : "termos encontrados"}
          </p>
        </div>

        {/* Terms Grid */}
        <div className="grid gap-6 mb-12">
          {filteredTerms.map((term) => {
            // Find which category this term belongs to
            const termCategory = Object.entries(categorizedTerms).find(([_, termIds]) => 
              termIds.includes(term.id)
            )?.[0]
            const categoryInfo = categories.find(cat => cat.id === termCategory)
            
            return (
              <Card key={term.id} className="hover:shadow-lg transition-all duration-300 border-purple-100 hover:border-purple-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-gray-900 mb-2">
                        {term[language].term}
                      </CardTitle>
                      {categoryInfo && (
                        <Badge className={`${categoryInfo.color} border-0`}>
                          {categoryInfo.label}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-700 text-base leading-relaxed">
                    {term[language].definition}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* No Results */}
        {filteredTerms.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">Nenhum termo encontrado</h3>
            <p className="text-gray-600 mb-4">
              Tente ajustar sua busca ou selecionar uma categoria diferente
            </p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("all")
              }}
              variant="outline"
              className="border-purple-200 hover:border-purple-300 hover:bg-purple-50"
            >
              Limpar filtros
            </Button>
          </div>
        )}

        {/* Learn More Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardContent className="py-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.glossary.learnMore.title}
              </h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                {t.glossary.learnMore.description}
              </p>
              <Link href="/blog">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  {t.glossary.learnMore.link}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  )
}
