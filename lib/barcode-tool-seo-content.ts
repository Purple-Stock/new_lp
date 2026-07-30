/**
 * Copy for the free barcode tool page (hero chips + below-the-fold SEO).
 * Kept out of the 1.5k-line client page so agents can edit SEO without paging the generator UI.
 */

export type BarcodeToolLocale = "pt" | "en" | "fr";

export type BarcodeFormatCard = {
  title: string;
  body: string;
};

export type BarcodeToolSeoCopy = {
  badge: string;
  benefitChips: string[];
  howToTitle: string;
  howToBody: string;
  formatCards: BarcodeFormatCard[];
  ctaTitle: string;
  ctaBody: string;
  trialLabel: string;
  pricingLabel: string;
  implementLabel: string;
  checklistLabel: string;
};

const PT: BarcodeToolSeoCopy = {
  badge: "Sem cadastro · PNG · EAN / Code 128 / QR",
  benefitChips: [
    "Sem cadastro",
    "Download em PNG",
    "EAN-13 e Code 128",
    "QR Code incluso",
  ],
  howToTitle: "Como usar o gerador de código de barras grátis",
  howToBody:
    "Escolha o formato (EAN-13, Code 128 ou QR), digite o valor, personalize tamanho e cores e baixe em PNG. Não precisa criar conta.",
  formatCards: [
    {
      title: "EAN-13",
      body: "Padrão de varejo para produtos. Use 12 dígitos e complete o verificador se precisar.",
    },
    {
      title: "Code 128",
      body: "Ideal para almoxarifado e logística: aceita letras, números e SKUs internos.",
    },
    {
      title: "QR Code",
      body: "Bom para URL, localização, equipamento ou link de ficha no sistema de estoque.",
    },
  ],
  ctaTitle: "Use código de barras no estoque de verdade",
  ctaBody:
    "Gerou a etiqueta? No Purple Stock você imprime, lê no celular e registra entrada, saída e inventário com histórico por item — a partir de R$ 59/time, com 7 dias grátis.",
  trialLabel: "Testar Purple Stock grátis",
  pricingLabel: "Ver preços",
  implementLabel: "Como implementar no estoque",
  checklistLabel: "Checklist para PME",
};

const EN: BarcodeToolSeoCopy = {
  badge: "No signup · PNG · EAN / Code 128 / QR",
  benefitChips: [
    "No signup",
    "PNG download",
    "EAN-13 and Code 128",
    "QR Code included",
  ],
  howToTitle: "How to use the free barcode generator",
  howToBody:
    "Pick a format, enter the value, customize size and colors, then download PNG. No account required.",
  formatCards: [
    {
      title: "EAN-13",
      body: "Retail product standard. Use 12 digits and complete the check digit when needed.",
    },
    {
      title: "Code 128",
      body: "Best for warehouse and logistics: supports letters, numbers and internal SKUs.",
    },
    {
      title: "QR Code",
      body: "Useful for URLs, locations, assets or inventory item links.",
    },
  ],
  ctaTitle: "Use barcodes in real inventory ops",
  ctaBody:
    "Label ready? With Purple Stock, scan on mobile and track inbound, outbound and counts.",
  trialLabel: "Start free trial",
  pricingLabel: "See pricing",
  implementLabel: "How to implement barcodes",
  checklistLabel: "Barcode checklist for SMBs",
};

const FR: BarcodeToolSeoCopy = {
  badge: "Sans compte · PNG · EAN / Code 128 / QR",
  benefitChips: [
    "Sans inscription",
    "Téléchargement PNG",
    "EAN-13 et Code 128",
    "QR Code inclus",
  ],
  howToTitle: "Comment utiliser le générateur gratuit",
  howToBody:
    "Choisissez le format, saisissez la valeur, personnalisez et téléchargez en PNG. Aucun compte requis.",
  formatCards: EN.formatCards,
  ctaTitle: "Utilisez les codes-barres en stock",
  ctaBody:
    "Étiquette prête ? Avec Purple Stock, lisez au téléphone et suivez entrées, sorties et inventaire.",
  trialLabel: "Start free trial",
  pricingLabel: "See pricing",
  implementLabel: "How to implement barcodes",
  checklistLabel: "Barcode checklist for SMBs",
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
