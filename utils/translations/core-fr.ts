import { buildWhatsAppUrl } from "@/lib/contact";

/** Core landing/i18n strings for fr (nav, hero, features list, pricing, etc.). */
export const coreFr = {
  nav: {
    resources: "Ressources",
    pricing: "Tarification",
    industries: "Industries",
    freeBarcode: "Code-barres Gratuit",
    login: "Connexion",
    blog: "Blog",
    articles: "Articles",
    features: {
      title: "Fonctionnalités",
      inventoryControl: "Contrôle des Stocks",
      barcoding: "Code-barres",
      purchaseSales: "Achats & Ventes",
      analyticsReporting: "Analyses & Rapports",
      warehouseControl: "Gestion d'Entrepôt",
      qrCodeManagement: "Gestion QR Code",
      clothingManufacturing: "Systèmes pour Confection",
      equipmentManagement: "Système de Gestion d'Équipements par QR Code",
      factoryManagement: "Gestion d'Usine",
      inventoryApp: "Application de Contrôle des Stocks",
    },
  },
  hero: {
    title: "Arretez de perdre des ventes parce que le stock ne correspond pas",
    description:
      "Organisez entrees, sorties et inventaires avec QR Code sur mobile. Moins d'erreurs de solde, tracabilite par article et un flux que l'equipe utilise vraiment.",
    cta: "Essai gratuit de 7 jours",
    subtitle: "Commence Avec",
    subtitleHighlight: "Purple Stock",
    description2:
      "Centralisez l'inventaire avec un flux tracable: qui a bouge, quand et ou. Quittez les tableurs sans un gros projet systeme.",
  },
  industries: {
    title: "Logiciel d'Inventaire pour Votre Industrie",
    description:
      "La solution de gestion d'inventaire de Purple Stock aide les petites entreprises de tous les secteurs à économiser du temps et de l'argent précieux lorsqu'il s'agit d'organiser l'inventaire et les actifs physiques.",
    industries: {
      retail: "Commerce",
      manufacturing: "Fabrication",
      logistics: "Logistique",
      food: "Alimentaire",
      pharmaceutical: "Pharmaceutique",
      automotive: "Pièces auto et moto",
      construction: "Construction",
      technology: "Technologie",
      audiovisual: "Production Audiovisuelle",
      events: "Événements",
      odontologico: "Équipements dentaires",
      telecomunicacoes: "Télécommunications",
      restaurantes: "Restaurants",
      electrical: "Électrique",
      fashion: "Mode",
      beauty: "Beauté",
      commerce: "Commerce",
      education: "Éducation",
    },
  },
  trustedBy: {
    title: "Fiable par les Leaders du Marché",
    description:
      "Des détaillants aux fabricants, nous aidons les entreprises à optimiser leur contrôle des stocks et à stimuler la croissance.",
  },
  footer: {
    purpleStock: "Purple Stock",
    blog: "Blog",
    glossary: "Glossaire",
    industries: "Secteurs",
    resources: "Ressources",
    status: "Statut",
  },
  features: {
    orderManagement: {
      title: "Gestion des Commandes Simplifiée",
      subtitle: "Optimisez Vos Processus d'Achat et de Vente",
      description: [
        "Créez des commandes d'achat, de vente et des factures directement dans l'application",
        "Planification intelligente avec informations de stock en temps réel",
        "Mettez à jour le statut du stock en un seul clic",
      ],
    },
    barcode: {
      title: "Scan de Code-barres",
      subtitle: "Accélérez Vos Opérations",
      description: [
        "Entrée et sortie de stock avec un simple 'bip' !",
        "Générez et imprimez des codes-barres personnalisés dans Purple Stock",
      ],
    },
    security: {
      title: "Sécurité Avancée",
      subtitle: "Contrôle d'Accès Personnalisé",
      description: [
        "Attribuez des rôles avec accès échelonné aux données de stock",
        "Protégez les informations sensibles et prévenez les erreurs avec le contrôle d'accès",
      ],
    },
    realTime: {
      title: "Visibilité en Temps Réel",
      subtitle: "Collaboration Instantanée",
      description: [
        "Accédez aux informations de stock depuis n'importe quel appareil",
        "Données mises à jour en temps réel pour des décisions précises",
        "Une seule source de vérité pour toutes vos données de stock",
      ],
    },
    inventoryLink: {
      title: "Partage Sécurisé",
      subtitle: "Connectez-vous avec des Partenaires",
      description: [
        "Partagez en toute sécurité des informations sélectionnées de stock",
        "Améliorez l'efficacité en partageant des données en temps réel",
        "Accédez au statut du stock de n'importe où, à tout moment",
      ],
    },
  },
  testimonials: [
    {
      quote:
        "Purple Stock a révolutionné notre gestion des stocks. Nous avons maintenant un contrôle total sur notre inventaire.",
      company: "Magasin de Mode Féminine",
      companyName: "Purchase Store",
    },
    {
      quote:
        "Avec Purple Stock, notre production est devenue beaucoup plus organisée et efficace. Un véritable changement !",
      company: "Fabricant de Portes Premium",
      companyName: "Concrem Portas",
    },
  ],
  glossary: {
    title: "Glossaire des Termes pour les Petites Entreprises",
    description:
      "Notre glossaire explique les termes et acronymes importants de la gestion des stocks et de la comptabilité, fournissant aux petites entreprises les connaissances nécessaires pour optimiser les processus d'inventaire, contrôler les coûts et améliorer leurs finances.",
    learnMore: {
      title:
        "Vous souhaitez en savoir plus sur les stratégies de croissance et les meilleures pratiques de gestion des stocks ?",
      description: "Consultez le Blog Purple Stock ci-dessous :",
      link: "Blog Purple Stock",
    },
  },
  pricing: {
    title: "Plans et Tarifs",
    subtitle: "Choisissez le plan parfait pour votre entreprise",
    plans: [
      {
        name: "Gratuit",
        price: "0,00 €",
        description: "Pour commencer",
        features: [
          "Jusqu'à 10 articles",
          "Analyses de base",
          "Support par email",
        ],
        buttonText: "Commencer",
        buttonLink: "https://app.purplestock.com.br/",
      },
      {
        name: "Pro",
        price: "$25.00",
        description: "Populaire",
        features: [
          "Jusqu'à 100 articles",
          "Analyses avancées",
          "Support prioritaire",
          "Rapports personnalisés",
          "Support par email",
        ],
        buttonText: "Mettre à Niveau",
        buttonLink: "https://app.purplestock.com.br/",
      },
      {
        name: "Entreprise",
        price: "Prix Personnalisé",
        description: "Pour les grandes opérations",
        features: [
          "Tout du Pro",
          "Articles illimités",
          "Support dédié",
          "Intégration personnalisée",
          "Garantie SLA",
          "Accès API",
        ],
        buttonText: "Parler aux Ventes",
        buttonLink: buildWhatsAppUrl(
          "Bonjour! Je souhaiterais en savoir plus sur le plan entreprise."
        ),
      },
    ],
  },
} as const;
