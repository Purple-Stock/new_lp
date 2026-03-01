"use client"

type Primitive = string | number | boolean | null | undefined
type EventPayload = Record<string, Primitive>

export type SeoAnalyticsPayload = {
  page_path?: string
  page_type?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  query_cluster?: string
  locale?: string
  device_type?: string
} & EventPayload

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>
    gtag?: (...args: unknown[]) => void
  }
}

function getDeviceType(): string {
  if (typeof window === "undefined") {
    return "unknown"
  }

  const width = window.innerWidth
  if (width < 768) return "mobile"
  if (width < 1024) return "tablet"
  return "desktop"
}

function getDefaultPayload(payload: SeoAnalyticsPayload = {}): SeoAnalyticsPayload {
  if (typeof window === "undefined") {
    return payload
  }

  const url = new URL(window.location.href)
  const localeFromDocument = document.documentElement.lang || "pt-BR"

  return {
    page_path: payload.page_path ?? window.location.pathname,
    page_type: payload.page_type ?? (window.location.pathname === "/" ? "home" : "content"),
    utm_source: payload.utm_source ?? url.searchParams.get("utm_source") ?? "direct",
    utm_medium: payload.utm_medium ?? url.searchParams.get("utm_medium") ?? "none",
    utm_campaign: payload.utm_campaign ?? url.searchParams.get("utm_campaign") ?? "none",
    query_cluster: payload.query_cluster ?? "unknown",
    locale: payload.locale ?? localeFromDocument,
    device_type: payload.device_type ?? getDeviceType(),
    ...payload,
  }
}

export function trackEvent(eventName: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") {
    return
  }

  const event = {
    event: eventName,
    ...payload,
  }

  if (Array.isArray(window.dataLayer)) {
    window.dataLayer.push(event)
  }

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, payload)
  }
}

export function trackSeoLandingView(payload: SeoAnalyticsPayload = {}) {
  const normalized = getDefaultPayload(payload)
  trackEvent("seo_landing_view", normalized)
  // Legacy event for dashboard compatibility during migration sprint
  trackEvent("view_landing", normalized)
}

export function trackSeoCtaClick(payload: SeoAnalyticsPayload = {}) {
  const normalized = getDefaultPayload(payload)
  trackEvent("seo_cta_click", normalized)
  // Legacy event for dashboard compatibility during migration sprint
  trackEvent("click_cta", normalized)
}

export function trackSignupStarted(payload: SeoAnalyticsPayload = {}) {
  trackEvent("signup_started", getDefaultPayload(payload))
}

export function trackTrialActivated(payload: SeoAnalyticsPayload = {}) {
  trackEvent("trial_activated", getDefaultPayload(payload))
}

export function trackCheckoutStarted(payload: SeoAnalyticsPayload = {}) {
  trackEvent("checkout_started", getDefaultPayload(payload))
}

export function trackPaidConversion(payload: SeoAnalyticsPayload = {}) {
  trackEvent("paid_conversion", getDefaultPayload(payload))
}

// Backwards-compatible helper kept for existing CTA usages.
export function trackCtaClick(payload: SeoAnalyticsPayload = {}) {
  trackSeoCtaClick(payload)
}
