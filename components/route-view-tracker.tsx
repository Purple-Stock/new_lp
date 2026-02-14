"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import { trackEvent } from "@/lib/analytics"

const ORGANIC_LANDING_PREFIXES = [
  "/blog",
  "/glossario",
  "/industrias",
  "/features",
  "/precos",
]

export function RouteViewTracker() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) {
      return
    }

    trackEvent("page_view", {
      page_path: pathname,
      page_type: pathname === "/" ? "home" : "content",
    })

    const isLanding = pathname === "/" || ORGANIC_LANDING_PREFIXES.some((prefix) => pathname.startsWith(prefix))
    if (isLanding) {
      trackEvent("view_landing", {
        page_path: pathname,
      })
    }
  }, [pathname])

  return null
}

