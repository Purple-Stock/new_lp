/**
 * Copy for the free barcode tool page (hero chips + below-the-fold SEO).
 * Kept out of the 1.5k-line client page so agents can edit SEO without paging the generator UI.
 */

import {
  TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT,
  TEAM_PLAN_TRIAL_DAYS,
} from "@/lib/pricing";

export type BarcodeToolLocale = "pt" | "en" | "fr";

export type BarcodeFormatCard = {
  title: string;
  body: string;
};

export type BarcodeToolFaqItem = {
  question: string;
  answer: string;
};

export type BarcodeToolSeoCopy = {
  badge: string;
  benefitChips: string[];
  howToTitle: string;
  howToBody: string;
  formatCards: BarcodeFormatCard[];
  longTailTitle: string;
  longTailBody: string;
  faqTitle: string;
  faqItems: BarcodeToolFaqItem[];
  ctaTitle: string;
  ctaBody: string;
  trialLabel: string;
  pricingLabel: string;
  implementLabel: string;
  checklistLabel: string;
  inventoryAppLabel: string;
};

const PT: BarcodeToolSeoCopy = {
  badge: "PNG grátis · EAN / Code 128 / QR · teste 7 dias",
  benefitChips: [
    "PNG grátis",
    "EAN-13 e Code 128",
    "QR Code incluso",
    "Teste 7 dias no estoque",
  ],
  howToTitle: "Como usar o gerador de código de barras grátis",
  howToBody:
    "Escolha o formato (EAN-13, Code 128 ou QR), digite o valor, personalize tamanho e cores e baixe em PNG. Depois, teste o Purple Stock 7 dias para controlar o estoque com essas etiquetas.",
  formatCards: [
    {
      title: "EAN-13 grátis",
      body: "Padrão de varejo para produtos. Use 12 dígitos e complete o verificador se precisar. Ideal para etiquetas de prateleira e PDV.",
    },
    {
      title: "Gerador Code 128",
      body: "Ideal para almoxarifado e logística: aceita letras, números e SKUs internos. Gere Code 128 grátis e imprima no estoque.",
    },
    {
      title: "QR Code",
      body: "Bom para URL, localização, equipamento ou link de ficha no sistema de estoque — inclusive check-in/check-out de ativos.",
    },
  ],
  longTailTitle: "EAN, Code 128 e QR no mesmo gerador online",
  longTailBody:
    "Gere EAN-13, Code 128 e QR em PNG para etiquetas internas, inventário e almoxarifado. Isto não cria um GTIN registrado na GS1: um EAN-13 gerado aqui não substitui código oficial de produto. Depois de gerar, use o mesmo padrão no fluxo de entrada, saída e contagem com o Purple Stock.",
  faqTitle: "Perguntas frequentes sobre código de barras grátis",
  faqItems: [
    {
      question: "O gerador de código de barras é grátis?",
      answer:
        "Sim. Você gera EAN-13, Code 128 e QR Code online e baixa em PNG. Para controlar entrada, saída e inventário com essas etiquetas, teste o Purple Stock 7 dias.",
    },
    {
      question: "Quando usar Code 128 em vez de EAN-13?",
      answer:
        "Use Code 128 para SKUs internos, lotes e códigos alfanuméricos de almoxarifado. Use EAN-13 quando o produto precisa do padrão de varejo de 13 dígitos.",
    },
    {
      question: "Posso usar o PNG gerado no controle de estoque?",
      answer:
        "Sim. Imprima a etiqueta, cole no item ou localização e leia no celular. No Purple Stock o mesmo código entra no histórico de movimentação.",
    },
    {
      question: "O gerador cria código de barras 128 e QR Code?",
      answer:
        "Sim. Há formatos Code 128 e QR Code além de EAN-13. Escolha o tipo, digite o valor e baixe a imagem.",
    },
  ],
  ctaTitle: "Use código de barras no estoque de verdade",
  ctaBody: `Gerou a etiqueta? No Purple Stock você imprime, lê no celular e registra entrada, saída e inventário com histórico por item — a partir de ${TEAM_PLAN_MONTHLY_PRICE_DISPLAY_PT} por equipe, com ${TEAM_PLAN_TRIAL_DAYS} dias grátis.`,
  trialLabel: "Testar Purple Stock grátis",
  pricingLabel: "Ver preços",
  implementLabel: "Como implementar no estoque",
  checklistLabel: "Checklist para PME",
  inventoryAppLabel: "App de controle de estoque",
};

const EN: BarcodeToolSeoCopy = {
  badge: "Free PNG · EAN / Code 128 / QR · 7-day trial",
  benefitChips: [
    "Free PNG",
    "EAN-13 and Code 128",
    "QR Code included",
    "7-day inventory trial",
  ],
  howToTitle: "How to use the free barcode generator",
  howToBody:
    "Pick a format, enter the value, customize size and colors, then download PNG. After that, try Purple Stock for 7 days to control stock with those labels.",
  formatCards: [
    {
      title: "Free EAN-13",
      body: "Retail product standard. Use 12 digits and complete the check digit when needed.",
    },
    {
      title: "Code 128 generator",
      body: "Best for warehouse and logistics: supports letters, numbers and internal SKUs.",
    },
    {
      title: "QR Code",
      body: "Useful for URLs, locations, assets or inventory item links.",
    },
  ],
  longTailTitle: "EAN, Code 128 and QR in one free generator",
  longTailBody:
    "Need a free barcode generator, Code 128 generator or free EAN? Generate EAN-13, Code 128 and QR as PNG for labels and inventory counts.",
  faqTitle: "Free barcode generator FAQ",
  faqItems: [
    {
      question: "Is the barcode generator free?",
      answer:
        "Yes. Generate EAN-13, Code 128 and QR Code online and download PNG. To track inbound, outbound and counts with those labels, try Purple Stock for 7 days.",
    },
    {
      question: "When should I use Code 128 instead of EAN-13?",
      answer:
        "Use Code 128 for internal SKUs and alphanumeric warehouse codes. Use EAN-13 for standard 13-digit retail products.",
    },
    {
      question: "Can I use the PNG in inventory control?",
      answer:
        "Yes. Print the label, stick it on the item or bin, and scan on mobile. Purple Stock can track movements with the same code.",
    },
    {
      question: "Does it generate Code 128 and QR Code?",
      answer:
        "Yes. Choose Code 128 or QR Code (or EAN-13), enter the value, and download the image.",
    },
  ],
  ctaTitle: "Use barcodes in real inventory ops",
  ctaBody:
    "Label ready? With Purple Stock, scan on mobile and track inbound, outbound and counts.",
  trialLabel: "Start free trial",
  pricingLabel: "See pricing",
  implementLabel: "How to implement barcodes",
  checklistLabel: "Barcode checklist for SMBs",
  inventoryAppLabel: "Inventory control app",
};

const FR: BarcodeToolSeoCopy = {
  badge: "PNG gratuit · EAN / Code 128 / QR · essai 7 jours",
  benefitChips: [
    "PNG gratuit",
    "EAN-13 et Code 128",
    "QR Code inclus",
    "Essai stock 7 jours",
  ],
  howToTitle: "Comment utiliser le générateur gratuit",
  howToBody:
    "Choisissez le format, saisissez la valeur, personnalisez et téléchargez en PNG. Ensuite, essayez Purple Stock 7 jours pour gérer le stock avec ces étiquettes.",
  formatCards: EN.formatCards,
  longTailTitle: EN.longTailTitle,
  longTailBody: EN.longTailBody,
  faqTitle: EN.faqTitle,
  faqItems: EN.faqItems,
  ctaTitle: "Utilisez les codes-barres en stock",
  ctaBody:
    "Étiquette prête ? Avec Purple Stock, lisez au téléphone et suivez entrées, sorties et inventaire.",
  trialLabel: "Start free trial",
  pricingLabel: "See pricing",
  implementLabel: "How to implement barcodes",
  checklistLabel: "Barcode checklist for SMBs",
  inventoryAppLabel: "Application de stock",
};

export function getBarcodeToolSeoCopy(
  locale: BarcodeToolLocale
): BarcodeToolSeoCopy {
  if (locale === "pt") return PT;
  if (locale === "fr") return FR;
  return EN;
}

export function resolveBarcodeToolLocale(language: string): BarcodeToolLocale {
  if (language === "pt" || language === "fr" || language === "en") {
    return language;
  }
  return "en";
}
