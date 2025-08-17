"use client"

import { useEffect, useState, useRef } from "react"

export function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  const rafId = useRef<number>()

  useEffect(() => {
    let ticking = false

    const updateProgress = () => {
      if (!ticking) {
        rafId.current = requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          const scrollPercent = (scrollTop / docHeight) * 100
          setProgress(Math.min(scrollPercent, 100))
          ticking = false
        })
        ticking = true
      }
    }

    const handleScroll = () => {
      updateProgress()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    updateProgress() // Initial calculation

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId.current) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
