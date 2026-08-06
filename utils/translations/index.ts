import { corePt } from "./core-pt";
import { coreEn } from "./core-en";
import { coreFr } from "./core-fr";
import {
  featurePagesPt,
  featurePagesEn,
  featurePagesFr,
} from "./feature-pages";
import {
  barcodeGeneratorPt,
  barcodeGeneratorEn,
  barcodeGeneratorFr,
} from "./barcode-generator";

export const translations = {
  pt: {
    ...corePt,
    featurePages: featurePagesPt,
    barcodeGenerator: barcodeGeneratorPt,
  },
  en: {
    ...coreEn,
    featurePages: featurePagesEn,
    barcodeGenerator: barcodeGeneratorEn,
  },
  fr: {
    ...coreFr,
    featurePages: featurePagesFr,
    barcodeGenerator: barcodeGeneratorFr,
  },
} as const;

export type TranslationLocale = keyof typeof translations;
