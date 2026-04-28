const DEFAULT_WHATSAPP_URL = "https://wa.me/5511995597242"
const DEFAULT_CALENDLY_URL = "https://calendly.com/matheus-puppe/purple-stock"

function normalizeUrl(url: string): string {
  return url.trim().replace(/\/+$/, "")
}

function getPublicUrl(value: string | undefined, fallback: string): string {
  if (!value) return fallback

  try {
    return normalizeUrl(new URL(value).toString())
  } catch {
    return fallback
  }
}

export function getCalendlyUrl(): string {
  return getPublicUrl(process.env.NEXT_PUBLIC_CALENDLY_URL, DEFAULT_CALENDLY_URL)
}

export function getWhatsAppUrl(): string {
  return getPublicUrl(process.env.NEXT_PUBLIC_WHATSAPP_URL, DEFAULT_WHATSAPP_URL)
}

export function buildWhatsAppUrl(message?: string): string {
  const baseUrl = getWhatsAppUrl()

  if (!message) return baseUrl

  try {
    const url = new URL(baseUrl)
    url.searchParams.set("text", message)
    return url.toString()
  } catch {
    const url = new URL(DEFAULT_WHATSAPP_URL)
    url.searchParams.set("text", message)
    return url.toString()
  }
}
