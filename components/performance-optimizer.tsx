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
  const [isClient, setIsClient] = useState(false)

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !isMobile) {
      return
    }

    try {
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
    } catch (error) {
      console.warn('Performance optimization failed:', error)
    }
  }, [isClient, isMobile, disableAnimationsOnMobile, reduceShadowsOnMobile, optimizeImagesOnMobile])

  // Add CSS variables for dynamic optimization
  useEffect(() => {
    if (!isClient || !isMobile) {
      return
    }

    try {
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
        try {
          document.head.removeChild(style)
        } catch (error) {
          console.warn('Failed to remove style:', error)
        }
      }
    } catch (error) {
      console.warn('Failed to add performance styles:', error)
    }
  }, [isClient, isMobile, disableAnimationsOnMobile, reduceShadowsOnMobile])

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
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || typeof window === 'undefined' || !('PerformanceObserver' in window)) {
      return
    }

    try {
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
        const fid = entries[0] as any // Using any for FirstInputEntry
        if (fid.processingStart && fid.startTime) {
          setMetrics(prev => ({ ...prev, fid: fid.processingStart - fid.startTime }))
        }
      })
      fidObserver.observe({ entryTypes: ['first-input'] })

      // Cumulative Layout Shift
      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as any // Using any for LayoutShiftEntry
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value || 0
          }
        }
        setMetrics(prev => ({ ...prev, cls: clsValue }))
      })
      clsObserver.observe({ entryTypes: ['layout-shift'] })

      return () => {
        try {
          fcpObserver.disconnect()
          lcpObserver.disconnect()
          fidObserver.disconnect()
          clsObserver.disconnect()
        } catch (error) {
          console.warn('Failed to disconnect observers:', error)
        }
      }
    } catch (error) {
      console.warn('Performance monitoring failed:', error)
    }
  }, [isClient])

  return metrics
}
