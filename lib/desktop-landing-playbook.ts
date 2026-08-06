/**
 * Desktop landing playbook copy (how-it-works, compare, FAQ) by language.
 */
import { HOME_FAQ_PT } from "@/lib/home-faq";
import {
  formatTeamPlanPriceFaqEn,
  formatTeamPlanPriceFaqFr,
} from "@/lib/pricing";

export type LandingLanguage = "pt" | "en" | "fr";

export type LandingPlaybook = {
  uvpBadge: string;
  uvpText: string;
  howItWorksTitle: string;
  howItWorksSubtitle: string;
  steps: { title: string; body: string }[];
  proofTitle: string;
  proofItems: { metric: string; detail: string }[];
  compareTitle: string;
  compareSubtitle: string;
  compareRows: { label: string; purple: string; erp: string }[];
  objectionsTitle: string;
  objections: { q: string; a: string }[];
};

const PLAYBOOK_BY_LANGUAGE: Record<LandingLanguage, LandingPlaybook> = {
  pt: {
    uvpBadge:
      "Para empresas que já cansaram de perder venda por falta de produto, erro de contagem ou estoque sumido no almoxarifado.",
    uvpText:
      "Purple Stock organiza entrada, saída, transferência, ajuste e inventário em um único fluxo rastreável, para qualquer pessoa do time saber o que tem, onde está e quem mexeu, sem virar um projeto gigante de sistema.",
    howItWorksTitle:
      "Como funciona o sistema de controle de estoque na prática",
    howItWorksSubtitle:
      "Do cadastro ao relatório, em um fluxo único e rastreável.",
    steps: [
      {
        title: "1. Estruture seu time e seus locais",
        body: "Crie o time, convide usuários e organize localizações para separar operação e responsabilidade.",
      },
      {
        title: "2. Cadastre itens com rastreabilidade",
        body: "Registre itens e categorias uma vez e acompanhe saldo, movimentações e histórico por contexto.",
      },
      {
        title: "3. Execute movimentos operacionais",
        body: "Lance entradas, saídas, transferências, ajustes e contagens com consistência e atualização em tempo real.",
      },
      {
        title: "4. Decida com relatórios consolidados",
        body: "Acompanhe perdas, reposição e desempenho para agir rápido sem consolidação manual.",
      },
    ],
    proofTitle: "O que a equipe consegue auditar no dia a dia",
    proofItems: [
      {
        metric: "Rastreabilidade por item",
        detail:
          "Quem movimentou, quando movimentou e em qual local a operação aconteceu.",
      },
      {
        metric: "Histórico único de movimentações",
        detail:
          "Entrada, saída, transferência, ajuste e contagem no mesmo fluxo operacional.",
      },
      {
        metric: "Conferência por localização",
        detail:
          "Consulta de saldo e inventário por local sem consolidar planilhas manualmente.",
      },
    ],
    compareTitle: "Purple Stock vs ERP tradicional",
    compareSubtitle:
      "Quando o foco é operação de estoque rápida, o modelo de implantação faz diferença.",
    compareRows: [
      {
        label: "Implantação",
        purple: "Setup leve e progressivo",
        erp: "Projeto mais extenso em média",
      },
      {
        label: "Curva de uso para operação",
        purple: "Fluxo direto para almoxarifado",
        erp: "Treinamento mais extenso em média",
      },
      {
        label: "Operação no celular + QR",
        purple: "Nativo no fluxo diário",
        erp: "Geralmente depende de módulo extra",
      },
      {
        label: "Foco inicial",
        purple: "Controle de estoque e rastreabilidade",
        erp: "Suite ampla com escopo maior",
      },
    ],
    objectionsTitle: "Perguntas frequentes: dúvidas antes de contratar",
    objections: HOME_FAQ_PT,
  },
  en: {
    uvpBadge: "For SMB teams that cannot lose sales due to stock mistakes",
    uvpText:
      "Purple Stock keeps inbound, outbound, transfer, adjustment, and count workflows in one traceable system. Teams can leave spreadsheets and standardize operations in days.",
    howItWorksTitle: "How the inventory control system works in practice",
    howItWorksSubtitle: "From setup to reporting in one traceable flow.",
    steps: [
      {
        title: "1. Set up teams and locations",
        body: "Create teams, invite users, and organize locations to structure responsibility.",
      },
      {
        title: "2. Register items with traceability",
        body: "Set up items and categories once, then track balance and movement history.",
      },
      {
        title: "3. Execute operational movements",
        body: "Run stock in, stock out, move, adjust, and count with real-time updates.",
      },
      {
        title: "4. Decide with consolidated reports",
        body: "Track losses, replenishment, and team performance without manual consolidation.",
      },
    ],
    proofTitle: "What teams can audit in daily operations",
    proofItems: [
      {
        metric: "Item-level traceability",
        detail: "Who moved stock, when it happened, and where it happened.",
      },
      {
        metric: "Single movement history",
        detail:
          "Inbound, outbound, transfer, adjustment, and count in one operational flow.",
      },
      {
        metric: "Location-based checks",
        detail:
          "Review stock and inventory by location without manual spreadsheet consolidation.",
      },
    ],
    compareTitle: "Purple Stock vs traditional ERP",
    compareSubtitle:
      "For fast inventory operations, implementation model matters.",
    compareRows: [
      {
        label: "Implementation",
        purple: "Light, progressive setup",
        erp: "Usually a longer rollout project",
      },
      {
        label: "Operational learning curve",
        purple: "Direct warehouse workflows",
        erp: "Usually longer training period",
      },
      {
        label: "Mobile + QR daily usage",
        purple: "Native in core flow",
        erp: "Often depends on add-on modules",
      },
      {
        label: "Initial focus",
        purple: "Inventory control and traceability",
        erp: "Broader suite with larger scope",
      },
    ],
    objectionsTitle: "Questions teams ask before buying",
    objections: [
      {
        q: "Can we start without a heavy migration?",
        a: "Yes. You can begin with core setup and expand in phases without stopping operations.",
      },
      {
        q: "Are data secure and separated by team?",
        a: "Yes. The system runs with active team context and user permissions, keeping operations separated.",
      },
      {
        q: "Does it work on mobile for daily operations?",
        a: "Yes. Inbound, outbound, transfer, and counting flows are direct and mobile-friendly.",
      },
      {
        q: "Can we test without long-term lock-in?",
        a: "Yes. The trial requires a credit card, and you can cancel anytime during the trial period.",
      },
      {
        q: "What is the starting cost?",
        a: formatTeamPlanPriceFaqEn(),
      },
    ],
  },
  fr: {
    uvpBadge:
      "Pour les PME qui ne peuvent pas perdre des ventes a cause du stock",
    uvpText:
      "Purple Stock regroupe entrees, sorties, transferts, ajustements et inventaires dans un flux tracable. Les equipes quittent les tableurs et standardisent l'operation en quelques jours.",
    howItWorksTitle: "Comment fonctionne le systeme de gestion de stock",
    howItWorksSubtitle:
      "Du parametrage au rapport dans un flux unique et tracable.",
    steps: [
      {
        title: "1. Structurez equipes et emplacements",
        body: "Creez les equipes, invitez les utilisateurs et organisez les emplacements operationnels.",
      },
      {
        title: "2. Enregistrez les articles avec tracabilite",
        body: "Configurez articles et categories puis suivez soldes et historique des mouvements.",
      },
      {
        title: "3. Executez les mouvements quotidiens",
        body: "Gerez stock in, stock out, move, adjust et count avec mise a jour en temps reel.",
      },
      {
        title: "4. Pilotez avec des rapports consolides",
        body: "Suivez pertes, reassort et performance sans consolidation manuelle.",
      },
    ],
    proofTitle: "Ce que l'equipe peut auditer au quotidien",
    proofItems: [
      {
        metric: "Tracabilite par article",
        detail: "Qui a bouge le stock, quand et dans quel emplacement.",
      },
      {
        metric: "Historique unique des mouvements",
        detail:
          "Entree, sortie, transfert, ajustement et comptage dans le meme flux operationnel.",
      },
      {
        metric: "Controle par emplacement",
        detail:
          "Lecture de stock et inventaire par emplacement sans consolidation manuelle des tableurs.",
      },
    ],
    compareTitle: "Purple Stock vs ERP traditionnel",
    compareSubtitle:
      "Pour une operation stock rapide, le modele de deploiement compte.",
    compareRows: [
      {
        label: "Deploiement",
        purple: "Setup leger et progressif",
        erp: "Projet de deploiement plus long en moyenne",
      },
      {
        label: "Courbe d'apprentissage",
        purple: "Flux direct pour magasin",
        erp: "Formation plus longue en moyenne",
      },
      {
        label: "Mobile + QR au quotidien",
        purple: "Natif dans le flux principal",
        erp: "Souvent via module additionnel",
      },
      {
        label: "Focus initial",
        purple: "Controle stock et tracabilite",
        erp: "Suite large avec scope plus vaste",
      },
    ],
    objectionsTitle: "Questions avant de choisir la plateforme",
    objections: [
      {
        q: "Peut-on commencer sans migration lourde?",
        a: "Oui. Vous pouvez debuter avec le socle et evoluer par etapes sans arreter l'operation.",
      },
      {
        q: "Les donnees sont-elles securisees et separees par equipe?",
        a: "Oui. Le systeme fonctionne par equipes avec contexte actif et permissions par utilisateur.",
      },
      {
        q: "Est-ce utilisable sur mobile au quotidien?",
        a: "Oui. Les flux entree, sortie, transfert et comptage sont simples et mobiles.",
      },
      {
        q: "Peut-on tester sans engagement long?",
        a: "Oui. L'essai demande une carte bancaire et vous pouvez annuler a tout moment pendant la periode d'essai.",
      },
      {
        q: "Quel est le cout de depart?",
        a: formatTeamPlanPriceFaqFr(),
      },
    ],
  },
};

export function getLandingPlaybook(language: LandingLanguage): LandingPlaybook {
  return PLAYBOOK_BY_LANGUAGE[language];
}

export function getLandingPrimaryHeroCta(
  language: LandingLanguage,
  usePainCta: boolean
): string {
  if (language === "pt") {
    return usePainCta
      ? "Quero parar de perder vendas agora"
      : "Começar teste grátis de 7 dias";
  }
  if (language === "fr") {
    return usePainCta
      ? "Je veux arreter de perdre des ventes maintenant"
      : "Commencer l'essai gratuit de 7 jours";
  }
  return usePainCta
    ? "I want to stop losing sales now"
    : "Start 7-day free trial";
}
