import { buildWhatsAppUrl } from "@/lib/contact";
import { HOME_PAGE_H1_PT } from "@/lib/seo-page-copy";

/** Core landing/i18n strings for pt (nav, hero, features list, pricing, etc.). */
export const corePt = {
  nav: {
    resources: "Recursos",
    pricing: "Planos",
    industries: "Setores",
    freeBarcode: "Código de Barras Grátis",
    login: "Entrar",
    blog: "Blog",
    articles: "Artigos",
    features: {
      title: "Recursos",
      inventoryControl: "Controle de Inventário",
      barcoding: "Código de Barras",
      purchaseSales: "Compras & Vendas",
      analyticsReporting: "Análises & Relatórios",
      warehouseControl: "Controle de Almoxarifado",
      qrCodeManagement: "Gestão QR Code",
      clothingManufacturing: "Sistemas para Confecção",
      equipmentManagement:
        "Sistema de Gerenciamento de Equipamentos por QR Code",
      factoryManagement: "Gestão de Facção",
      inventoryApp: "Aplicativo para Controle de Estoque",
    },
  },
  hero: {
    title: HOME_PAGE_H1_PT,
    description:
      "Organize entrada, saída e inventário com QR Code no celular. Menos erro de saldo, rastreio por item e operação que o time realmente usa.",
    cta: "Começar teste grátis de 7 dias",
    subtitle: "Começa Com",
    subtitleHighlight: "Purple Stock",
    description2:
      "Centralize o inventário com fluxo rastreável: quem mexeu, quando e onde. Saia da planilha sem virar um projeto gigante de sistema.",
  },
  industries: {
    title: "Software de Inventário para Sua Indústria",
    description:
      "A solução de gestão de inventário da Purple Stock ajuda pequenas empresas de todos os setores a economizar tempo e dinheiro valiosos quando se trata de organizar inventário e ativos físicos.",
    industries: {
      retail: "Varejo",
      manufacturing: "Manufatura",
      logistics: "Logística",
      food: "Alimentício",
      pharmaceutical: "Farmacêutico",
      automotive: "Autopeças e Motos",
      construction: "Construção",
      technology: "Tecnologia",
      audiovisual: "Produção Audiovisual",
      events: "Eventos",
      odontologico: "Odontológico",
      telecomunicacoes: "Telecomunicações",
      restaurantes: "Restaurantes",
      electrical: "Elétrico",
      fashion: "Moda",
      beauty: "Beleza",
      commerce: "Comércio",
      education: "Educação",
    },
  },
  trustedBy: {
    title: "Confiado por Líderes do Mercado",
    description:
      "De varejistas a fabricantes, ajudamos empresas a otimizar seu controle de estoque e impulsionar o crescimento.",
  },
  footer: {
    purpleStock: "Purple Stock",
    blog: "Blog",
    glossary: "Glossário",
    industries: "Setores",
    resources: "Recursos",
    status: "Status",
  },
  features: {
    orderManagement: {
      title: "Gestão de Pedidos Simplificada",
      subtitle: "Otimize Seus Processos de Compra e Venda",
      description: [
        "Crie pedidos de compra, vendas e faturas diretamente no aplicativo",
        "Planejamento inteligente com informações de estoque em tempo real",
        "Atualize o status do inventário com apenas um clique",
      ],
    },
    barcode: {
      title: "Escaneamento de Código de Barras",
      subtitle: "Agilize Suas Operações",
      description: [
        "Entrada e saída de estoque com um simples 'beep'!",
        "Gere e imprima códigos de barras personalizados no Purple Stock",
      ],
    },
    security: {
      title: "Segurança Avançada",
      subtitle: "Controle de Acesso Personalizado",
      description: [
        "Atribua funções com acesso escalonado aos dados de inventário",
        "Proteja informações sensíveis e previna erros com controle de acesso",
      ],
    },
    realTime: {
      title: "Visibilidade em Tempo Real",
      subtitle: "Colaboração Instantânea",
      description: [
        "Acesse informações de inventário de qualquer dispositivo",
        "Dados atualizados em tempo real para decisões precisas",
        "Uma única fonte de verdade para todos os seus dados de estoque",
      ],
    },
    inventoryLink: {
      title: "Compartilhamento Seguro",
      subtitle: "Conecte-se com Parceiros",
      description: [
        "Compartilhe informações selecionadas de inventário com segurança",
        "Melhore a eficiência compartilhando dados em tempo real",
        "Acesse o status do inventário de qualquer lugar, a qualquer momento",
      ],
    },
  },
  testimonials: [
    {
      quote:
        "O Purple Stock revolucionou nossa gestão de estoque. Agora temos controle total sobre nosso inventário.",
      company: "Loja de Moda Feminina",
      companyName: "Purchase Store",
    },
    {
      quote:
        "Com o Purple Stock, nossa produção ficou muito mais organizada e eficiente. Um game-changer!",
      company: "Fabricante de Portas Premium",
      companyName: "Concrem Portas",
    },
  ],
  glossary: {
    title: "Glossario de Gestao de Estoque para PMEs",
    description:
      "Este glossario reune os termos mais usados em estoque, almoxarifado e operacao para ajudar sua equipe a falar a mesma lingua e decidir mais rapido.",
    learnMore: {
      title:
        "Quer aprender mais sobre estratégias de crescimento e melhores práticas de gestão de estoque?",
      description: "Confira o Blog do Purple Stock abaixo:",
      link: "Blog Purple Stock",
    },
  },
  pricing: {
    title: "Planos e Preços",
    subtitle: "Escolha o plano perfeito para o seu negócio",
    plans: [
      {
        name: "Gratuito",
        price: "R$ 0,00",
        description: "Para começar",
        features: ["Até 10 itens", "Análises básicas", "Suporte por email"],
        buttonText: "Começar Agora",
        buttonLink: "https://app.purplestock.com.br/",
      },
      {
        name: "Pro",
        price: "R$ 150,00",
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
        description: "Para grandes empresas",
        features: [
          "Itens ilimitados",
          "Análises avançadas",
          "Suporte prioritário 24/7",
          "Relatórios personalizados",
          "API disponível",
          "Suporte por email e telefone",
          "Treinamento da equipe",
          "SLA garantido",
        ],
        buttonText: "Fale com Vendas",
        buttonLink: buildWhatsAppUrl(
          "Olá! Gostaria de saber mais sobre o plano Empresarial do Purple Stock."
        ),
      },
    ],
  },
} as const;
