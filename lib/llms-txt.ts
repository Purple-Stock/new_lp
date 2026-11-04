/**
 * /llms.txt and /llm.txt body.
 * Written for citation (definition + facts), not as a framework résumé.
 */

import { getAllPosts } from "@/lib/blog";
import {
  TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT,
  TEAM_PLAN_TRIAL_DAYS,
} from "@/lib/pricing";
import { SITE_CONTACT, SITE_NAME, SITE_SAME_AS } from "@/lib/site";

export async function buildLlmsTxtMarkdown(): Promise<string> {
  const posts = await getAllPosts();
  const blogLinks = posts
    .map((post) => `- [${post.title}](/blog/${post.slug})`)
    .join("\n");

  return `# ${SITE_NAME}

> ${SITE_NAME} é um sistema de estoque com QR Code para PME: entrada, saída, check-in e almoxarifado no celular, a partir de ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe.

## Fatos

- ${SITE_NAME} é um sistema de estoque com QR Code, não um ERP de construtora e não um caixa de loja.
- Preço público: ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe/mês, ${TEAM_PLAN_TRIAL_DAYS} dias grátis, sem fidelidade.
- Faz: entrada, saída, transferência, inventário, check-in de equipamento e saldo por local.
- Não faz: nota fiscal, caixa de frente de loja, galpão de operador logístico.
- Sede: ${SITE_CONTACT.addressLocality}, ${SITE_CONTACT.addressCountry}. E-mail: ${SITE_CONTACT.email}.
- Perfis: ${SITE_SAME_AS.join(", ")}.

## Sobre

- [Início](/): ${SITE_NAME} é um sistema de estoque com QR Code no celular, a partir de ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe.
- [O que é o aplicativo](/recursos/aplicativo-de-estoque): QR, entrada, saída e saldo no celular.
- [Purple Stock vs planilha](/purple-stock-vs-planilha): quando sair do Excel.
- [Indústrias](/industrias): audiovisual, eventos, telecom, odontológico, autopeças e almoxarifado de obra.
- [Gerador de código de barras grátis](/codigo-de-barras-gratis): EAN-13, Code 128 e QR em PNG.

## Funcionalidades Principais

### Gestão de Estoque
- [Controle de Inventário](/features/inventory-control): produtos, materiais e saldo
- [Aplicativo para controle de estoque](/recursos/aplicativo-de-estoque): QR Code, entrada, saída e saldo no celular
- [Purple Stock vs planilha](/purple-stock-vs-planilha): quando sair do Excel
- [Controle de Almoxarifado](/recursos/controle-de-almoxarifado): suprimentos e materiais

### Códigos e Rastreamento
- [Gestão de QR Code](/features/qr-code-management): QR em equipamento e localização
- [Códigos de Barras](/features/barcoding): EAN e Code 128 no cadastro
- [Código de Barras Gratuito](/codigo-de-barras-gratis): gerador EAN-13, Code 128 e QR

### Gestão de Equipamentos
- [Gestão de Equipamentos](/features/equipment-management): check-in e check-out
- [Gestão de Fábrica](/features/factory-management): materiais na operação
- [Analytics e Relatórios](/features/analytics-reporting): movimentação e saldo
- [Compra e Venda](/features/purchase-sales): entrada ligada à operação

## Indústrias Atendidas

- [Audiovisual](/industrias/audiovisual): check-in/check-out para produtoras e locadoras
- [Eventos](/industrias/events): som, luz e material por evento
- [Odontológico](/industrias/odontologico): kits e instrumentais
- [Telecomunicações](/industrias/telecomunicacoes): ONT, rádio e kits de campo
- [Autopeças e Motos](/industrias/automotivo): SKU no balcão
- [Construção](/industrias/construction): almoxarifado de obra com QR no canteiro

## Recursos e Ferramentas

- [Aplicativo para controle de estoque](/recursos/aplicativo-de-estoque): operação no celular
- [Purple Stock vs planilha](/purple-stock-vs-planilha): migração do Excel
- [Controle de Almoxarifado](/recursos/controle-de-almoxarifado): suprimentos
- [Glossário de almoxarifado de obra](/glossario/almoxarifado-de-obra): o que é o estoque do canteiro
- [Gerador de código de barras grátis](/codigo-de-barras-gratis): etiqueta em PNG

## Artigos e Conteúdo

- [Blog](/blog): controle de estoque, almoxarifado e QR Code
${blogLinks}

## Institucional

- [Sobre](/sobre): o que a Purple Stock faz
- [Contato](/contato): e-mail e WhatsApp
- [Preços](/precos): ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe
- [Glossário](/glossario): termos de estoque e almoxarifado
- [Documentação](/documentacao): guias de uso

## Informações Técnicas

- Plano único por equipe, não por assento
- Aplicativo web, iOS e Android
- QR Code e código de barras lidos na câmera do celular

## Tecnologias

- Landing em Next.js e React; aplicativo web, iOS e Android com leitura de QR Code

## Suporte e Contato

- E-mail: ${SITE_CONTACT.email}
- Telefone: ${SITE_CONTACT.phone}
- [Contato](/contato)
`;
}
