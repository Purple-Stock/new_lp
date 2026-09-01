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

/** Same hexagon mark as the Purple Stock app favicon — not the rounded-square logo.png. */
export const SITE_FAVICON_SVG_DATA_URL =
  "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cg transform='translate(16,16) scale(0.12)'%3E%3Cpath fill='%237D3C98' d='M0,-100 L86,-50 L86,50 L0,100 L-86,50 L-86,-50 Z'/%3E%3Cpath fill='white' d='M30,-50 L-15,10 H15 L-10,55 L40,0 H15 Z'/%3E%3C/g%3E%3C/svg%3E";

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
