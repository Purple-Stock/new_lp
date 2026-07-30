const PRODUCTION_SITE_URL = "https://www.purplestock.com.br";

function normalizeUrl(url: string): string {
  return url.trim().replace(/\/+$/, "");
}

export function getSiteUrl(): string {
  const raw = normalizeUrl(
    process.env.NEXT_PUBLIC_BASE_URL || PRODUCTION_SITE_URL
  );

  try {
    const parsed = new URL(raw);
    if (parsed.hostname === "purplestock.com.br") {
      parsed.hostname = "www.purplestock.com.br";
      return normalizeUrl(parsed.toString());
    }
    return raw;
  } catch {
    return PRODUCTION_SITE_URL;
  }
}

export const SITE_NAME = "Purple Stock";

export const SITE_DESCRIPTION =
  "Controle estoque e almoxarifado com QR Code no celular. Menos erro de saldo, rastreio por item e teste grátis de 7 dias para PME.";

export const SITE_LOGO_PATH = "/og-image.png";

export const SITE_CONTACT = {
  email: "matheus.puppe@purplestock.com.br",
  phone: "+55-11-99559-7242",
  addressLocality: "São Paulo",
  addressCountry: "BR",
} as const;

export const SITE_SAME_AS = [
  "https://www.instagram.com/purplestockapp/",
  "https://www.youtube.com/@PurpleStock_",
  "https://www.linkedin.com/company/purple-stock",
] as const;
