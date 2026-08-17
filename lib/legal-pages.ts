import { SITE_CONTACT, SITE_NAME } from "@/lib/site";

export const PRIVACY_PATH = "/politica-de-privacidade";
export const TERMS_PATH = "/termos-de-uso";

export const PRIVACY_PAGE_TITLE = "Política de Privacidade";
export const TERMS_PAGE_TITLE = "Termos de Uso";

export function getLegalControllerLine(): string {
  return `${SITE_NAME}, com atendimento em ${SITE_CONTACT.addressLocality}, ${SITE_CONTACT.addressCountry}, e-mail ${SITE_CONTACT.email}.`;
}
