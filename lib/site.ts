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
  "Sistema de estoque com QR Code no celular: menos erro de saldo, rastreio por item. Teste 7 dias · a partir de R$ 59 por equipe para PME.";

export const SITE_LOGO_PATH = "/logo.png";
export const SITE_LOGO_WIDTH = 512;
export const SITE_LOGO_HEIGHT = 512;

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
