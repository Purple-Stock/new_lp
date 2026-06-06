export type IndustryRecord = {
  name: string;
  slug: string;
  image: string;
  description: string;
  benefits: string[];
  features: string[];
};

export const industryStats: Record<string, { value: string; label: string }> = {
  varejo: { value: "40%", label: "Redução de perdas" },
  manufatura: { value: "35%", label: "Aumento de eficiência" },
  logistica: { value: "50%", label: "Redução de custos" },
  food: { value: "60%", label: "Redução de perdas" },
  pharmaceutical: { value: "45%", label: "Melhoria na precisão" },
  automotivo: { value: "30%", label: "Redução de tempo" },
  construction: { value: "55%", label: "Redução de desperdícios" },
  technology: { value: "40%", label: "Aumento de produtividade" },
  audiovisual: { value: "45%", label: "Redução de perdas" },
  events: { value: "50%", label: "Aumento de eficiência" },
  restaurantes: { value: "55%", label: "Redução de desperdícios" },
  electrical: { value: "45%", label: "Aumento de produtividade" },
};

export const industriesData: IndustryRecord[] = [
  {
    name: "Atacado",
    slug: "atacado",
    image: "/images/pexels-photo-4483610.webp",
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
    image: "/images/pexels-photo-264507.jpeg",
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
    image: "/images/pexels-photo-1145434.jpeg",
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
    image: "/images/pexels-photo-1267338.jpeg",
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
    name: "Automotivo",
    slug: "automotivo",
    image: "/images/pexels-photo-4483610.webp",
    description:
      "Transforme sua gestão de peças automotivas com o Purple Stock. Nossa solução é projetada especificamente para concessionárias, oficinas mecânicas, distribuidoras de peças e empresas do setor automotivo que precisam de controle total sobre peças, componentes e equipamentos.",
    benefits: [
      "Controle completo de peças e componentes automotivos",
      "Gestão eficiente de fornecedores e distribuidores",
      "Rastreamento de peças por marca e modelo",
      "Redução de perdas e danos em peças",
      "Otimização do uso de recursos automotivos",
      "Controle de manutenção preventiva e corretiva",
      "Gestão de garantias e seguros de peças",
      "Integração com sistemas de gestão automotiva",
    ],
    features: [
      "Controle de peças por categoria (motor, transmissão, freios, suspensão)",
      "Sistema de check-in/check-out para peças",
      "Rastreamento de componentes com códigos QR personalizados",
      "Gestão de fornecedores e distribuidores",
      "Controle de condições de armazenamento",
      "Alertas para reposição de peças populares",
      "Relatórios de utilização por peça e veículo",
      "Gestão de fornecedores e serviços técnicos",
      "Controle de versões e atualizações de peças",
      "Integração com sistemas de orçamento e faturamento",
      "Dashboard específico para peças críticas",
      "Sistema de backup para dados de peças",
    ],
  },
  {
    name: "Moda",
    slug: "fashion",
    image: "/images/pexels-photo-994523.webp",
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
    slug: "food",
    image: "/images/pexels-photo-1640777.jpeg",
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
    name: "Restaurantes",
    slug: "restaurantes",
    image: "/images/pexels-photo-1640777.jpeg",
    description:
      "Transforme a gestão do seu restaurante com o Purple Stock. Nossa plataforma oferece controle completo de ingredientes, estoque de alimentos e gestão de fornecedores para otimizar suas operações culinárias.",
    benefits: [
      "Controle preciso de ingredientes e estoque de alimentos",
      "Gestão eficiente de fornecedores e entregas",
      "Controle rigoroso de datas de validade e frescor",
      "Rastreabilidade FIFO para ingredientes perecíveis",
      "Redução significativa de desperdícios alimentares",
      "Otimização do planejamento de cardápios",
      "Controle de custos por prato e ingrediente",
      "Integração com sistemas de pedidos e delivery",
    ],
    features: [
      "Gestão de receitas com lista de ingredientes detalhada",
      "Controle de estoque por tipo de ingrediente (frescos, congelados, secos)",
      "Alertas automáticos para produtos próximos ao vencimento",
      "Sistema de check-in/check-out para ingredientes",
      "Controle de temperatura e condições de armazenamento",
      "Gestão de fornecedores e horários de entrega",
      "Relatórios de consumo por prato e período",
      "Controle de alérgenos e restrições alimentares",
      "Dashboard específico para chefes e gerentes",
      "Integração com sistemas de faturamento e contabilidade",
      "Controle de múltiplas unidades e franquias",
      "Sistema de backup para dados críticos de receitas",
    ],
  },
  {
    name: "Elétrico",
    slug: "electrical",
    image: "/images/pexels-photo-4481259.webp",
    description:
      "Otimize a gestão do seu negócio elétrico com o Purple Stock. Nossa plataforma oferece controle completo de equipamentos elétricos, componentes, ferramentas e materiais para maximizar a eficiência operacional.",
    benefits: [
      "Controle preciso de equipamentos elétricos e componentes",
      "Gestão eficiente de ferramentas e instrumentos de medição",
      "Rastreamento de componentes por especificação técnica",
      "Controle de manutenção preventiva e corretiva",
      "Redução de tempo de inatividade em equipamentos",
      "Otimização do uso de recursos elétricos",
      "Controle de garantias e certificações de equipamentos",
      "Integração com sistemas de gestão técnica",
    ],
    features: [
      "Gestão de equipamentos por categoria (transformadores, painéis, cabos)",
      "Sistema de check-in/check-out para ferramentas e equipamentos",
      "Rastreamento de componentes com códigos QR personalizados",
      "Controle de especificações técnicas e certificações",
      "Alertas para manutenção preventiva de equipamentos",
      "Relatórios de utilização por equipamento e projeto",
      "Gestão de fornecedores e serviços técnicos",
      "Controle de versões e atualizações de equipamentos",
      "Dashboard específico para técnicos e engenheiros",
      "Integração com sistemas de orçamento e faturamento",
      "Controle de múltiplas instalações e projetos",
      "Sistema de backup para dados críticos de equipamentos",
    ],
  },
  {
    name: "Construção",
    slug: "construction",
    image: "/images/building-800x600.webp",
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
    slug: "pharmaceutical",
    image: "/images/medical-appointment-doctor-healthcare-40568.webp",
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
    slug: "beauty",
    image: "/images/pexels-photo-3985298.webp",
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
    slug: "commerce",
    image: "/images/commerce-800x600.webp",
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
    slug: "education",
    image: "/images/pexels-photo-256541.webp",
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
    name: "Tecnologia",
    slug: "technology",
    image: "/images/pexels-photo-256541.webp",
    description:
      "Transforme sua gestão de equipamentos tecnológicos com o Purple Stock. Nossa solução é projetada especificamente para empresas de tecnologia, startups, e departamentos de TI que precisam de controle total sobre equipamentos, componentes e ativos tecnológicos.",
    benefits: [
      "Controle completo de equipamentos de TI e componentes",
      "Gestão eficiente de licenças de software",
      "Rastreamento de ativos tecnológicos",
      "Redução de perdas e danos em equipamentos",
      "Otimização do uso de recursos tecnológicos",
      "Controle de manutenção preventiva e corretiva",
      "Gestão de garantias e seguros de equipamentos",
      "Integração com sistemas de gestão de ativos",
    ],
    features: [
      "Controle de equipamentos por categoria (servidores, desktops, laptops, periféricos)",
      "Sistema de check-in/check-out para equipamentos",
      "Rastreamento de componentes com códigos QR personalizados",
      "Gestão de licenças de software e assinaturas",
      "Controle de condições de armazenamento",
      "Alertas para manutenção preventiva de equipamentos",
      "Relatórios de utilização por equipamento e usuário",
      "Gestão de fornecedores e serviços técnicos",
      "Controle de versões e atualizações de firmware",
      "Integração com sistemas de orçamento e faturamento",
      "Dashboard específico para equipamentos críticos",
      "Sistema de backup para dados de equipamentos",
    ],
  },
  {
    name: "Produção Audiovisual",
    slug: "audiovisual",
    image: "/images/audio-visual-1.jpg",
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
  {
    name: "Eventos",
    slug: "events",
    image: "/images/events-2.jpg",
    description:
      "Transforme sua gestão de eventos com o Purple Stock. Nossa solução é projetada especificamente para empresas de eventos, organizadores de festas, casamentos, conferências e profissionais do setor que precisam de controle total sobre equipamentos, materiais e recursos.",
    benefits: [
      "Controle completo de equipamentos de eventos (som, iluminação, mobiliário)",
      "Gestão eficiente de materiais e decorações",
      "Rastreamento de recursos por evento e projeto",
      "Redução de perdas e danos em equipamentos",
      "Otimização do uso de recursos por evento",
      "Controle de manutenção preventiva e corretiva",
      "Gestão de seguros e garantias de equipamentos",
      "Integração com sistemas de agendamento e eventos",
    ],
    features: [
      "Controle de equipamentos por categoria (som, iluminação, mobiliário, decorações)",
      "Sistema de check-in/check-out para eventos e projetos",
      "Rastreamento de materiais com códigos QR personalizados",
      "Gestão de consumíveis e acessórios",
      "Controle de condições de armazenamento",
      "Alertas para manutenção preventiva de equipamentos",
      "Relatórios de utilização por equipamento e evento",
      "Gestão de fornecedores e serviços técnicos",
      "Controle de versões e atualizações de equipamentos",
      "Integração com sistemas de orçamento e faturamento",
      "Dashboard específico para equipamentos críticos",
      "Sistema de backup para dados de equipamentos",
    ],
  },
];

export function getIndustryBySlug(slug: string): IndustryRecord | undefined {
  return industriesData.find((industry) => industry.slug === slug);
}

export function getRelatedIndustries(
  slug: string,
  limit = 3
): IndustryRecord[] {
  const index = industriesData.findIndex((industry) => industry.slug === slug);
  if (index === -1) {
    return industriesData.slice(0, limit);
  }

  const related: IndustryRecord[] = [];
  for (
    let offset = 1;
    related.length < limit && offset < industriesData.length;
    offset += 1
  ) {
    const candidate = industriesData[(index + offset) % industriesData.length];
    if (candidate.slug !== slug) {
      related.push(candidate);
    }
  }

  return related;
}
