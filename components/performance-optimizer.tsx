"use client"

import { useEffect } from 'react'

// Performance optimization component
export function PerformanceOptimizer() {
  useEffect(() => {
    // Preload critical resources
    const preloadCriticalResources = () => {
      const criticalImages = [
        '/images/hero-photo-900x600.webp'
      ]
      
      criticalImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }

    // Defer non-critical scripts
    const deferNonCriticalScripts = () => {
      // Remove legacy polyfills if not needed
      const scripts = document.querySelectorAll('script[src*="polyfill"]')
      scripts.forEach(script => {
        if (script.parentNode) {
          script.parentNode.removeChild(script)
        }
      })
    }

    // Optimize third-party scripts
    const optimizeThirdPartyScripts = () => {
      // Add performance optimizations for third-party content
      if (typeof window !== 'undefined') {
        // Defer Google Fonts loading
        const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]')
        fontLinks.forEach(link => {
          const linkElement = link as HTMLLinkElement
          linkElement.media = 'print'
          linkElement.onload = () => {
            linkElement.media = 'all'
          }
        })
      }
    }

    // Run optimizations
    preloadCriticalResources()
    deferNonCriticalScripts()
    optimizeThirdPartyScripts()

    // Cleanup on unmount
    return () => {
      // Remove preloaded resources if needed
    }
  }, [])

  return null
}
