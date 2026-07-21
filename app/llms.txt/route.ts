import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-static";

export async function GET() {
  const posts = await getAllPosts();
  const blogLinks = posts
    .map((post) => `- [${post.title}](/blog/${post.slug})`)
    .join("\n");

  const content = `# PurpleStock

> Plataforma avançada de gestão de estoque e controle de inventário para indústrias e empresas.

## Sobre

PurpleStock é uma solução completa de gestão de estoque que oferece controle em tempo real, rastreamento de produtos, gestão de equipamentos com QR Code, e análise avançada de dados para otimizar operações empresariais.

## Funcionalidades Principais

### Gestão de Estoque
- [Controle de Inventário](/features/inventory-control): Gestão completa de produtos e materiais
- [App de Inventário](/features/inventory-app): Aplicativo móvel para contagem e verificação
- [Controle de Almoxarifado](/recursos/controle-de-almoxarifado): Gestão de suprimentos e materiais

### Códigos e Rastreamento
- [Gestão de QR Code](/features/qr-code-management): Sistema completo de QR Codes para equipamentos
- [Códigos de Barras](/features/barcoding): Soluções de código de barras para produtos
- [Código de Barras Gratuito](/codigo-de-barras-gratis): Ferramentas gratuitas de código de barras

### Gestão de Equipamentos
- [Gestão de Equipamentos](/features/equipment-management): Controle e manutenção de máquinas
- [Gestão de Fábrica](/features/factory-management): Administração completa de operações fabris
- [Controle de Armazém](/features/warehouse-control): Otimização de armazenamento e logística

### Análise e Relatórios
- [Analytics e Relatórios](/features/analytics-reporting): Dashboards e métricas de performance
- [Compra e Venda](/features/purchase-sales): Gestão de transações comerciais

## Indústrias Atendidas

- [Audiovisual](/industrias/audiovisual): Check-in/check-out de equipamentos para produtoras e locadoras (vertical de alta conversão)
- [Eventos](/industrias/events): Controle de som, luz, mobiliário e materiais por evento
- [Odontológico](/industrias/odontologico): Equipamentos dentários, kits e instrumentais com check-in/check-out
- [Telecomunicações](/industrias/telecomunicacoes): ONT, rádio e kits de campo com check-in/check-out para ISPs
- [Varejo](/industrias/varejo): Otimização de operações de varejo
- [Manufatura](/industrias/manufatura): Controle de produção e materiais
- [Logística](/industrias/logistica): Gestão de cadeia de suprimentos
- [Alimentação](/industrias/food): Controle de validade e rastreabilidade
- [Farmacêutica](/industrias/pharmaceutical): Gestão de medicamentos e equipamentos
- [Automotiva](/industrias/automotivo): Controle de peças e componentes
- [Construção](/industrias/construction): Gestão de materiais de construção
- [Tecnologia](/industrias/technology): Controle de equipamentos tecnológicos

## Recursos e Ferramentas

- [Códigos de Barras](/codigo-de-barras-gratis): Soluções completas de código de barras
- [Controle de Almoxarifado](/recursos/controle-de-almoxarifado): Gestão de suprimentos
- [Gestão de Estoque](/features/inventory-control): Estratégias e melhores práticas

## Artigos e Conteúdo

- [Blog](/blog): Artigos sobre controle de estoque, almoxarifado e QR Code
${blogLinks}

## Institucional

- [Sobre](/sobre): História e proposta da Purple Stock
- [Contato](/contato): Canais de atendimento

## Informações Técnicas

- [Preços](/precos): Planos e valores dos serviços
- [Glossário](/glossario): Termos técnicos e definições
- [Documentação](/documentacao): Guias de uso do produto

## Tecnologias

- Next.js 16
- React 18
- TypeScript
- Tailwind CSS
- Sistema de QR Code integrado
- API RESTful

## Suporte e Contato

- E-mail: matheus.puppe@purplestock.com.br
- Telefone: +55 (11) 99559-7242
- [Contato](/contato): Formulários e canais de atendimento
- Documentação técnica completa
- Suporte especializado para indústrias
- Treinamento e implementação

## Licença

Solução proprietária da PurpleStock para gestão empresarial.

---

*Este arquivo é otimizado para LLMs e sistemas de IA para compreensão da estrutura e funcionalidades da plataforma PurpleStock.*`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
