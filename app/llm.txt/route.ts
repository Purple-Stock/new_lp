export const dynamic = 'force-static';

export async function GET() {
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

- [Varejo](/industrias/retail): Otimização de operações de varejo
- [Manufatura](/industrias/manufacturing): Controle de produção e materiais
- [Logística](/industrias/logistics): Gestão de cadeia de suprimentos
- [Alimentação](/industrias/food): Controle de validade e rastreabilidade
- [Farmacêutica](/industrias/pharmaceutical): Gestão de medicamentos e equipamentos
- [Automotiva](/industrias/automotive): Controle de peças e componentes
- [Construção](/industrias/construction): Gestão de materiais de construção
- [Tecnologia](/industrias/technology): Controle de equipamentos tecnológicos
- [Audiovisual](/industrias/audiovisual): Gestão de equipamentos de mídia

## Recursos e Ferramentas

- [Códigos de Barras](/recursos/codigo-de-barras): Soluções completas de código de barras
- [Controle de Almoxarifado](/recursos/controle-de-almoxarifado): Gestão de suprimentos
- [Gestão de Equipamentos com QR Code](/recursos/gerenciamento-equipamentos-qr-code): Sistema integrado
- [Gestão de Estoque](/recursos/gestao-de-estoque): Estratégias e melhores práticas

## Artigos e Conteúdo

- [Como Usar QR Code no Controle de Estoque](/artigos/como-usar-qr-code-controle-estoque): Guia completo de implementação
- [Organizar Almoxarifado com QR Code](/artigos/organizar-almoxarifado-qr-code): Dicas e estratégias práticas

## Informações Técnicas

- [Preços](/precos): Planos e valores dos serviços
- [Glossário](/glossario): Termos técnicos e definições
- [API](/api): Documentação da API para integrações

## Tecnologias

- Next.js 15.1.0
- React 18.2.0
- TypeScript
- Tailwind CSS
- Sistema de QR Code integrado
- API RESTful
- Banco de dados otimizado para performance

## Suporte e Contato

- Documentação técnica completa
- Suporte especializado para indústrias
- Treinamento e implementação
- Integração com sistemas existentes

## Licença

Solução proprietária da PurpleStock para gestão empresarial.

---

*Este arquivo é otimizado para LLMs e sistemas de IA para compreensão da estrutura e funcionalidades da plataforma PurpleStock.*`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
