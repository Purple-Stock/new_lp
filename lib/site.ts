const PRODUCTION_SITE_URL = "https://www.purplestock.com.br"

function normalizeUrl(url: string): string {
  return url.trim().replace(/\/+$/, "")
}

export function getSiteUrl(): string {
  const raw = normalizeUrl(process.env.NEXT_PUBLIC_BASE_URL || PRODUCTION_SITE_URL)

  try {
    const parsed = new URL(raw)
    if (parsed.hostname === "purplestock.com.br") {
      parsed.hostname = "www.purplestock.com.br"
      return normalizeUrl(parsed.toString())
    }
    return raw
  } catch {
    return PRODUCTION_SITE_URL
  }
}

export const SITE_NAME = "Purple Stock"
