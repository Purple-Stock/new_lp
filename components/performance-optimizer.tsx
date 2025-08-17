"use client"

import { useEffect, useState } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'

interface PerformanceOptimizerProps {
  children: React.ReactNode
  disableAnimationsOnMobile?: boolean
  reduceShadowsOnMobile?: boolean
  optimizeImagesOnMobile?: boolean
}

export function PerformanceOptimizer({
  children,
  disableAnimationsOnMobile = true,
  reduceShadowsOnMobile = true,
  optimizeImagesOnMobile = true,
}: PerformanceOptimizerProps) {
  const isMobile = useIsMobile()
  const [isOptimized, setIsOptimized] = useState(false)

  useEffect(() => {
    if (isMobile) {
      // Apply mobile-specific optimizations
      if (disableAnimationsOnMobile) {
        document.documentElement.style.setProperty('--animation-duration', '0s')
        document.documentElement.style.setProperty('--transition-duration', '0s')
      }
      
      if (reduceShadowsOnMobile) {
        document.documentElement.style.setProperty('--shadow-intensity', '0.1')
      }
      
      if (optimizeImagesOnMobile) {
        // Reduce image quality on mobile for better performance
        const images = document.querySelectorAll('img')
        images.forEach(img => {
          if (img.dataset.mobileOptimized !== 'true') {
            img.style.imageRendering = 'optimizeSpeed'
            img.dataset.mobileOptimized = 'true'
          }
        })
      }
      
      setIsOptimized(true)
    } else {
      // Reset to desktop settings
      document.documentElement.style.removeProperty('--animation-duration')
      document.documentElement.style.removeProperty('--transition-duration')
      document.documentElement.style.removeProperty('--shadow-intensity')
      setIsOptimized(false)
    }
  }, [isMobile, disableAnimationsOnMobile, reduceShadowsOnMobile, optimizeImagesOnMobile])

  // Add CSS variables for dynamic optimization
  useEffect(() => {
    if (isMobile) {
      const style = document.createElement('style')
      style.textContent = `
        :root {
          --animation-duration: ${disableAnimationsOnMobile ? '0s' : 'inherit'};
          --transition-duration: ${disableAnimationsOnMobile ? '0s' : 'inherit'};
          --shadow-intensity: ${reduceShadowsOnMobile ? '0.1' : '1'};
        }
        
        @media (max-width: 768px) {
          .animate-blob,
          .animate-pulse,
          .group-hover\\:scale-105,
          .group-hover\\:rotate-6,
          .group-hover\\:-rotate-6 {
            animation-duration: var(--animation-duration) !important;
            transition-duration: var(--transition-duration) !important;
          }
          
          .shadow-lg,
          .shadow-xl,
          .shadow-2xl {
            box-shadow: 0 2px 4px rgba(0, 0, 0, calc(0.1 * var(--shadow-intensity))) !important;
          }
        }
      `
      document.head.appendChild(style)
      
      return () => {
        document.head.removeChild(style)
      }
    }
  }, [isMobile, disableAnimationsOnMobile, reduceShadowsOnMobile])

  return <>{children}</>
}

// Hook for performance monitoring
export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    fcp: 0,
    lcp: 0,
    fid: 0,
    cls: 0,
  })

  useEffect(() => {
    if (typeof window !== 'undefined' && 'PerformanceObserver' in window) {
      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fcp = entries[0] as PerformanceEntry
        setMetrics(prev => ({ ...prev, fcp: fcp.startTime }))
      })
      fcpObserver.observe({ entryTypes: ['paint'] })

      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lcp = entries[entries.length - 1] as PerformanceEntry
        setMetrics(prev => ({ ...prev, lcp: lcp.startTime }))
      })
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

      // First Input Delay
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const fid = entries[0] as PerformanceEntry
        setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }))
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0
        for (const entry of list.getEntries()) {
          if (!entry.hadRecentInput) {
            clsValue += (entry as any).value
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }))
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      return () => {
        fcpObserver.disconnect()
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
      }
    }
  }, [])

  return metrics
}
