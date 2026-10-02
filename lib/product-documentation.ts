export const DOCUMENTATION_LOCALES = ["pt", "en", "fr"] as const;

export type DocumentationLocale = (typeof DOCUMENTATION_LOCALES)[number];

export type DocumentationTopicKey =
  | "acesso"
  | "equipes"
  | "itens"
  | "movimentos"
  | "relatorios"
  | "qr";

export type DocumentationShot = {
  src: string;
  alt: string;
  caption: string;
  appPath: string;
};

export type DocumentationTopic = {
  key: DocumentationTopicKey;
  id: string;
  title: string;
  navLabel: string;
  description: string;
  steps: string[];
  actions: string[];
  highlights: string[];
  image: DocumentationShot & {
    extras?: DocumentationShot[];
  };
};

export type ProductDocumentation = {
  badge: string;
  title: string;
  subtitle: string;
  highlightsLabel: string;
  actionsTitle: string;
  enlargeLabel: string;
  extraShotsLabel: string;
  topics: DocumentationTopic[];
};

const SCREENSHOTS: Record<
  DocumentationTopicKey,
  {
    src: string;
    appPath: string;
    extras?: { src: string; appPath: string }[];
  }
> = {
  acesso: {
    src: "/images/docs/app-home.png",
    appPath: "/",
    extras: [{ src: "/images/docs/app-signup.png", appPath: "/signup" }],
  },
  equipes: {
    src: "/images/docs/app-team-selection.png",
    appPath: "/team_selection",
  },
  itens: {
    src: "/images/docs/app-items.png",
    appPath: "/teams/:id/items",
    extras: [
      {
        src: "/images/docs/app-locations.png",
        appPath: "/teams/:id/locations",
      },
    ],
  },
  movimentos: {
    src: "/images/docs/app-movements.png",
    appPath: "/teams/:id/stock-in",
    extras: [
      {
        src: "/images/docs/app-transactions.png",
        appPath: "/teams/:id/transactions",
      },
    ],
  },
  relatorios: {
    src: "/images/docs/app-reports.png",
    appPath: "/teams/:id/reports",
  },
  qr: {
    src: "/images/docs/app-labels.png",
    appPath: "/teams/:id/labels",
  },
};

type TopicCopy = {
  title: string;
  navLabel: string;
  description: string;
  steps: [string, string, string];
  actions: [string, string, string];
  highlights: [string, string, string];
  imageAlt: string;
  imageCaption: string;
  extraAlts?: string[];
  extraCaptions?: string[];
};

type LocaleCopy = {
  badge: string;
  title: string;
  subtitle: string;
  highlightsLabel: string;
  actionsTitle: string;
  enlargeLabel: string;
  extraShotsLabel: string;
  topics: Record<DocumentationTopicKey, TopicCopy>;
};

const PT: LocaleCopy = {
  badge: "Guia de uso",
  title: "Como usar o Purple Stock no dia a dia",
  subtitle:
    "Tutorial com prints reais do sistema: login, times, itens, movimentação, relatórios e etiquetas QR.",
  highlightsLabel: "Passo a passo",
  actionsTitle: "O que você consegue fazer nesta tela",
  enlargeLabel: "Clique para ampliar o print",
  extraShotsLabel: "Outras telas deste passo",
  topics: {
    acesso: {
      title: "1. Entrar no sistema",
      navLabel: "1. Login",
      description:
        "O ponto de partida é o login. Cada pessoa da operação entra com o próprio e-mail e cai no ambiente da empresa.",
      steps: [
        "Abra app.purplestock.com.br e informe o e-mail da sua conta.",
        "Digite a senha e clique em Entrar.",
        "Se ainda não tiver conta, use Criar conta e preencha empresa, e-mail e senha.",
      ],
      actions: [
        "Entrar com e-mail e senha da empresa.",
        "Trocar o idioma da interface (PT, EN ou FR).",
        "Criar a primeira conta da operação.",
      ],
      highlights: [
        "Acesso no celular ou no computador",
        "Mesmo ambiente para todo o time",
        "Começo no mesmo dia",
      ],
      imageAlt: "Tela de login do Purple Stock em português",
      imageCaption:
        "Login limpo, sem alerta de erro: e-mail, senha e o atalho para criar conta.",
      extraAlts: ["Tela de cadastro da empresa no Purple Stock"],
      extraCaptions: [
        "Cadastro pede nome da empresa, e-mail e senha com confirmação.",
      ],
    },
    equipes: {
      title: "2. Escolher o time",
      navLabel: "2. Times",
      description:
        "Cada time é um contexto isolado: galpão, van, filial ou cliente. Quem entra escolhe onde vai operar naquele momento.",
      steps: [
        "Depois do login, abra a lista de times da empresa.",
        "Clique no time que você vai operar (por exemplo, Galpão Central).",
        "Use Criar Time quando a operação precisar de um contexto novo.",
      ],
      actions: [
        "Ver os times já criados.",
        "Abrir o estoque de um time.",
        "Criar, editar ou remover um time.",
      ],
      highlights: [
        "Separação clara por operação",
        "Responsabilidades bem definidas",
        "Menos erro por acesso indevido",
      ],
      imageAlt:
        "Lista de times do Purple Stock com Galpão Central e Van de set",
      imageCaption:
        "Times prontos, sem spinner: cada card mostra itens e movimentações daquele contexto.",
    },
    itens: {
      title: "3. Cadastrar itens e locais",
      navLabel: "3. Itens",
      description:
        "O estoque só fica confiável com nome, SKU, QR e local. Cadastre o material uma vez e use o mesmo registro em toda a operação.",
      steps: [
        "Abra Lista de Itens e clique em Adicionar Item.",
        "Preencha nome, SKU, tipo e o local onde o item começa.",
        "Em Localizações, crie os pontos reais: almoxarifado, estúdio, van.",
      ],
      actions: [
        "Cadastrar e buscar itens com QR e SKU.",
        "Ver saldo e local de cada material.",
        "Editar, duplicar ou excluir um item.",
      ],
      highlights: [
        "Base única de inventário",
        "Saldo visível por item",
        "Localização rápida dos materiais",
      ],
      imageAlt:
        "Lista de itens do Purple Stock com equipamentos e código QR de cada um",
      imageCaption:
        "Itens com QR, SKU, tipo, saldo e local — a lista que o time usa no dia a dia.",
      extraAlts: ["Lista de localizações do estoque no Purple Stock"],
      extraCaptions: [
        "Locais cadastrados (Almoxarifado, Estúdio, Van de set) para o saldo não misturar.",
      ],
    },
    movimentos: {
      title: "4. Registrar entrada, saída e transferência",
      navLabel: "4. Movimentos",
      description:
        "Toda peça que entra, sai ou muda de local precisa de um lançamento. É isso que mantém saldo e histórico iguais ao físico.",
      steps: [
        "Abra Entrada de Estoque (ou Saída, Mover, Ajustar).",
        "Escolha o local, busque o item e informe a quantidade.",
        "Revise a tabela, acrescente uma nota se precisar e confirme.",
      ],
      actions: [
        "Lançar entrada, saída, transferência, ajuste e contagem.",
        "Buscar item por nome, SKU ou código de barras.",
        "Ver o histórico em Transações depois do lançamento.",
      ],
      highlights: [
        "Histórico completo da operação",
        "Saldo atualizado na hora",
        "Rastreio para conferência",
      ],
      imageAlt:
        "Tela de entrada de estoque do Purple Stock com itens selecionados e quantidade",
      imageCaption:
        "Entrada com itens na tabela e quantidade preenchida — não é a tela vazia.",
      extraAlts: ["Histórico de transações de estoque no Purple Stock"],
      extraCaptions: [
        "Cada lançamento fica no histórico com tipo, quantidade, local e data.",
      ],
    },
    relatorios: {
      title: "5. Ler relatórios e decidir",
      navLabel: "5. Relatórios",
      description:
        "Os números mostram o que repor, onde o saldo está e o que moveu no período. Use o filtro de datas antes de decidir compra ou ajuste.",
      steps: [
        "Abra Relatórios no menu do time.",
        "Filtre o período se quiser um recorte específico.",
        "Leia totais, valor de estoque e movimentações recentes para priorizar a ação.",
      ],
      actions: [
        "Ver totais de itens, locais e transações.",
        "Filtrar por data inicial e final.",
        "Enxergar valor de estoque e o que precisa de reposição.",
      ],
      highlights: [
        "Prioridade de reposição",
        "Leitura rápida de perdas",
        "Decisão com dado real",
      ],
      imageAlt:
        "Painel de relatórios do Purple Stock com totais de itens, locais e valor de estoque",
      imageCaption:
        "Relatório carregado: cards com totais, valor e movimentação — sem “carregando”.",
    },
    qr: {
      title: "6. Imprimir etiquetas e conferir no celular",
      navLabel: "6. Etiquetas",
      description:
        "A etiqueta cola o item no mundo físico. Imprima QR e código de barras, cole no material e escaneie na conferência.",
      steps: [
        "Abra Etiquetas e marque os itens que vão para a impressão.",
        "Escolha quantas etiquetas por página e o que entra no rótulo (QR, nome, SKU).",
        "Gere o PDF, imprima e use o celular para escanear na próxima contagem.",
      ],
      actions: [
        "Selecionar itens e gerar PDF de etiquetas.",
        "Incluir QR, código de barras, nome e SKU.",
        "Conferir no celular em vez de digitar código.",
      ],
      highlights: [
        "Inventário ágil em campo",
        "Mais precisão na conferência",
        "Menos retrabalho operacional",
      ],
      imageAlt:
        "Tela de etiquetas do Purple Stock com itens marcados para impressão de QR",
      imageCaption:
        "Preview da etiqueta com QR, nome e SKU — o PDF sai pronto para colar no material.",
    },
  },
};

const EN: LocaleCopy = {
  badge: "How-to guide",
  title: "How to use Purple Stock day to day",
  subtitle:
    "A tutorial with real product screenshots: login, teams, items, movements, reports, and QR labels.",
  highlightsLabel: "Step by step",
  actionsTitle: "What you can do on this screen",
  enlargeLabel: "Click to enlarge the screenshot",
  extraShotsLabel: "More screens in this step",
  topics: {
    acesso: {
      title: "1. Sign in",
      navLabel: "1. Login",
      description:
        "Start at login. Each person signs in with their email and lands in the company workspace.",
      steps: [
        "Open app.purplestock.com.br and enter your email.",
        "Type your password and click Sign in.",
        "If you do not have an account yet, use Create account.",
      ],
      actions: [
        "Sign in with company email and password.",
        "Switch the interface language.",
        "Create the first company account.",
      ],
      highlights: [
        "Works on phone and desktop",
        "One workspace for the team",
        "Same-day start",
      ],
      imageAlt: "Purple Stock login screen",
      imageCaption: "Clean login: email, password, and a create-account link.",
      extraAlts: ["Purple Stock company signup screen"],
      extraCaptions: ["Signup asks for company name, email, and password."],
    },
    equipes: {
      title: "2. Choose the team",
      navLabel: "2. Teams",
      description:
        "Each team is an isolated context: warehouse, van, branch, or client. Pick where you will operate.",
      steps: [
        "After login, open the company team list.",
        "Click the team you will operate.",
        "Use Create team when you need a new context.",
      ],
      actions: [
        "See existing teams.",
        "Open a team’s inventory.",
        "Create, edit, or remove a team.",
      ],
      highlights: [
        "Clear split by operation",
        "Defined responsibilities",
        "Fewer access mistakes",
      ],
      imageAlt: "Purple Stock team list with warehouse and set van teams",
      imageCaption:
        "Loaded teams, no spinner: each card shows items and movements.",
    },
    itens: {
      title: "3. Register items and locations",
      navLabel: "3. Items",
      description:
        "Reliable stock starts with name, SKU, QR, and location. Register once and reuse the same record.",
      steps: [
        "Open Items and click Add item.",
        "Fill name, SKU, type, and starting location.",
        "In Locations, create the real places: warehouse, studio, van.",
      ],
      actions: [
        "Create and search items with QR and SKU.",
        "See quantity and location per item.",
        "Edit, duplicate, or delete an item.",
      ],
      highlights: [
        "Single item catalog",
        "Visible on-hand quantity",
        "Fast location lookup",
      ],
      imageAlt: "Purple Stock item list with equipment and QR codes",
      imageCaption: "Items with QR, SKU, type, stock, and location.",
      extraAlts: ["Purple Stock locations list"],
      extraCaptions: ["Locations keep balances from mixing across places."],
    },
    movimentos: {
      title: "4. Post inbound, outbound, and transfers",
      navLabel: "4. Movements",
      description:
        "Every piece that moves needs a posting. That is what keeps the system aligned with the shelf.",
      steps: [
        "Open Stock in (or Stock out, Move, Adjust).",
        "Pick the location, search the item, and enter quantity.",
        "Review the table, add a note if needed, and confirm.",
      ],
      actions: [
        "Post inbound, outbound, transfer, adjust, and count.",
        "Search by name, SKU, or barcode.",
        "Read the history in Transactions after posting.",
      ],
      highlights: [
        "Full movement history",
        "Balance updates immediately",
        "Audit trail for checks",
      ],
      imageAlt:
        "Purple Stock inbound screen with selected items and quantities",
      imageCaption:
        "Inbound with items already on the table — not an empty state.",
      extraAlts: ["Purple Stock stock transaction history"],
      extraCaptions: ["Each posting keeps type, quantity, location, and date."],
    },
    relatorios: {
      title: "5. Read reports and decide",
      navLabel: "5. Reports",
      description:
        "The numbers show what to replenish, where stock sits, and what moved in the period.",
      steps: [
        "Open Reports in the team menu.",
        "Filter the date range if you need a specific window.",
        "Read totals, stock value, and recent movements before you act.",
      ],
      actions: [
        "See item, location, and transaction totals.",
        "Filter by start and end date.",
        "Spot stock value and replenishment needs.",
      ],
      highlights: [
        "Replenishment priority",
        "Faster loss reading",
        "Decisions from live data",
      ],
      imageAlt: "Purple Stock reports dashboard with totals and stock value",
      imageCaption: "Loaded reports with totals — not a loading spinner.",
    },
    qr: {
      title: "6. Print labels and scan on mobile",
      navLabel: "6. Labels",
      description:
        "The label ties the item to the physical world. Print QR codes, stick them on, and scan during counts.",
      steps: [
        "Open Labels and select the items to print.",
        "Choose layout and which fields go on the label.",
        "Generate the PDF, print, and scan on the next count.",
      ],
      actions: [
        "Select items and generate a label PDF.",
        "Include QR, barcode, name, and SKU.",
        "Check items on the phone instead of typing codes.",
      ],
      highlights: [
        "Faster field inventory",
        "More accurate counts",
        "Less manual rework",
      ],
      imageAlt: "Purple Stock labels screen with a live QR label preview",
      imageCaption:
        "Live label preview with QR, name, and SKU, ready to print as PDF.",
    },
  },
};

const FR: LocaleCopy = {
  badge: "Guide d’utilisation",
  title: "Comment utiliser Purple Stock au quotidien",
  subtitle:
    "Tutoriel avec de vrais captures : connexion, équipes, articles, mouvements, rapports et étiquettes QR.",
  highlightsLabel: "Étape par étape",
  actionsTitle: "Ce que vous pouvez faire sur cet écran",
  enlargeLabel: "Cliquer pour agrandir la capture",
  extraShotsLabel: "Autres écrans de cette étape",
  topics: {
    acesso: {
      title: "1. Se connecter",
      navLabel: "1. Connexion",
      description:
        "Tout commence par la connexion. Chaque personne entre avec son e-mail dans l’espace de l’entreprise.",
      steps: [
        "Ouvrez app.purplestock.com.br et saisissez votre e-mail.",
        "Entrez le mot de passe et cliquez sur Connexion.",
        "Sans compte, utilisez Créer un compte.",
      ],
      actions: [
        "Se connecter avec l’e-mail de l’entreprise.",
        "Changer la langue de l’interface.",
        "Créer le premier compte.",
      ],
      highlights: [
        "Usage mobile et ordinateur",
        "Un même espace pour l’équipe",
        "Démarrage le jour même",
      ],
      imageAlt: "Écran de connexion Purple Stock",
      imageCaption:
        "Connexion propre : e-mail, mot de passe et lien de création.",
      extraAlts: ["Écran d’inscription Purple Stock"],
      extraCaptions: [
        "L’inscription demande entreprise, e-mail et mot de passe.",
      ],
    },
    equipes: {
      title: "2. Choisir l’équipe",
      navLabel: "2. Équipes",
      description:
        "Chaque équipe est un contexte isolé : entrepôt, van, filiale ou client.",
      steps: [
        "Après connexion, ouvrez la liste des équipes.",
        "Cliquez sur l’équipe à opérer.",
        "Utilisez Créer une équipe pour un nouveau contexte.",
      ],
      actions: [
        "Voir les équipes existantes.",
        "Ouvrir le stock d’une équipe.",
        "Créer, modifier ou supprimer une équipe.",
      ],
      highlights: [
        "Séparation claire par opération",
        "Responsabilités définies",
        "Moins d’erreurs d’accès",
      ],
      imageAlt: "Liste des équipes Purple Stock",
      imageCaption:
        "Équipes chargées, sans spinner, avec articles et mouvements.",
    },
    itens: {
      title: "3. Enregistrer articles et emplacements",
      navLabel: "3. Articles",
      description: "Un stock fiable commence par nom, SKU, QR et emplacement.",
      steps: [
        "Ouvrez Articles et cliquez sur Ajouter un article.",
        "Renseignez nom, SKU, type et emplacement de départ.",
        "Dans Emplacements, créez les lieux réels.",
      ],
      actions: [
        "Créer et chercher des articles avec QR et SKU.",
        "Voir le solde et le lieu de chaque article.",
        "Modifier, dupliquer ou supprimer un article.",
      ],
      highlights: ["Catalogue unique", "Solde visible", "Localisation rapide"],
      imageAlt: "Liste d’articles Purple Stock avec QR",
      imageCaption: "Articles avec QR, SKU, type, stock et emplacement.",
      extraAlts: ["Liste des emplacements Purple Stock"],
      extraCaptions: ["Les emplacements évitent de mélanger les soldes."],
    },
    movimentos: {
      title: "4. Enregistrer entrées, sorties et transferts",
      navLabel: "4. Mouvements",
      description:
        "Chaque pièce qui bouge a besoin d’un mouvement. C’est ce qui aligne le système et le physique.",
      steps: [
        "Ouvrez Entrée de stock (ou Sortie, Déplacer, Ajuster).",
        "Choisissez le lieu, cherchez l’article et saisissez la quantité.",
        "Vérifiez le tableau, ajoutez une note si besoin, puis confirmez.",
      ],
      actions: [
        "Saisir entrée, sortie, transfert, ajustement et comptage.",
        "Chercher par nom, SKU ou code-barres.",
        "Lire l’historique dans Transactions.",
      ],
      highlights: [
        "Historique complet",
        "Solde mis à jour tout de suite",
        "Traçabilité pour le contrôle",
      ],
      imageAlt:
        "Écran d’entrée de stock Purple Stock avec articles sélectionnés",
      imageCaption: "Entrée avec articles dans le tableau — pas un écran vide.",
      extraAlts: ["Historique des transactions Purple Stock"],
      extraCaptions: ["Chaque mouvement garde type, quantité, lieu et date."],
    },
    relatorios: {
      title: "5. Lire les rapports et décider",
      navLabel: "5. Rapports",
      description:
        "Les chiffres montrent quoi réapprovisionner, où est le stock et ce qui a bougé.",
      steps: [
        "Ouvrez Rapports dans le menu de l’équipe.",
        "Filtrez la période si besoin.",
        "Lisez totaux, valeur de stock et mouvements récents.",
      ],
      actions: [
        "Voir les totaux d’articles, lieux et transactions.",
        "Filtrer par dates.",
        "Repérer la valeur du stock et les besoins de réassort.",
      ],
      highlights: [
        "Priorité de réassort",
        "Lecture rapide des pertes",
        "Décision sur données réelles",
      ],
      imageAlt: "Tableau de rapports Purple Stock",
      imageCaption: "Rapports chargés avec totaux — pas un état de chargement.",
    },
    qr: {
      title: "6. Imprimer les étiquettes et scanner",
      navLabel: "6. Étiquettes",
      description:
        "L’étiquette relie l’article au monde physique. Imprimez le QR, collez-le, scannez au contrôle.",
      steps: [
        "Ouvrez Étiquettes et cochez les articles à imprimer.",
        "Choisissez la mise en page et les champs de l’étiquette.",
        "Générez le PDF, imprimez et scannez au prochain inventaire.",
      ],
      actions: [
        "Sélectionner des articles et générer un PDF.",
        "Inclure QR, code-barres, nom et SKU.",
        "Contrôler au téléphone au lieu de taper le code.",
      ],
      highlights: [
        "Inventaire plus rapide",
        "Comptage plus précis",
        "Moins de retravail",
      ],
      imageAlt: "Écran d’étiquettes Purple Stock avec aperçu QR",
      imageCaption:
        "Aperçu de l’étiquette avec QR, nom et SKU, prêt à imprimer en PDF.",
    },
  },
};

const COPY: Record<DocumentationLocale, LocaleCopy> = {
  pt: PT,
  en: EN,
  fr: FR,
};

const TOPIC_KEYS: DocumentationTopicKey[] = [
  "acesso",
  "equipes",
  "itens",
  "movimentos",
  "relatorios",
  "qr",
];

function buildTopic(
  locale: DocumentationLocale,
  key: DocumentationTopicKey
): DocumentationTopic {
  const shot = SCREENSHOTS[key];
  const copy = COPY[locale].topics[key];
  const extras = (shot.extras ?? []).map((extra, index) => ({
    src: extra.src,
    appPath: extra.appPath,
    alt: copy.extraAlts?.[index] ?? copy.imageAlt,
    caption: copy.extraCaptions?.[index] ?? copy.imageCaption,
  }));

  return {
    key,
    id: `doc-${key}`,
    title: copy.title,
    navLabel: copy.navLabel,
    description: copy.description,
    steps: [...copy.steps],
    actions: [...copy.actions],
    highlights: [...copy.highlights],
    image: {
      src: shot.src,
      appPath: shot.appPath,
      alt: copy.imageAlt,
      caption: copy.imageCaption,
      extras: extras.length > 0 ? extras : undefined,
    },
  };
}

export function getProductDocumentation(
  locale: DocumentationLocale
): ProductDocumentation {
  const copy = COPY[locale];
  return {
    badge: copy.badge,
    title: copy.title,
    subtitle: copy.subtitle,
    highlightsLabel: copy.highlightsLabel,
    actionsTitle: copy.actionsTitle,
    enlargeLabel: copy.enlargeLabel,
    extraShotsLabel: copy.extraShotsLabel,
    topics: TOPIC_KEYS.map((key) => buildTopic(locale, key)),
  };
}
