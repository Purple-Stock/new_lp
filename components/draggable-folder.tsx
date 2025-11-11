"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import { cn } from "@/lib/utils"
import { MacOSFolderIcon } from "@/components/macos-folder-icon"
import type { ComponentType } from "react"

interface DraggableFolderProps {
  label: string
  folderColor: "blue" | "purple" | "green" | "yellow" | "red" | "orange"
  icon?: ComponentType<{ className?: string; color?: string }>
  onDoubleClick?: () => void
  onClick?: () => void
  initialPosition?: { x: number; y: number }
  storageKey?: string
  isSelected?: boolean
}

export function DraggableFolder({
  label,
  folderColor,
  icon: Icon = MacOSFolderIcon,
  onDoubleClick,
  onClick,
  initialPosition,
  storageKey,
  isSelected: externalSelected,
}: DraggableFolderProps) {
  const [position, setPosition] = useState(() => {
    if (storageKey && typeof window !== "undefined") {
      const saved = localStorage.getItem(`folder-${storageKey}`)
      if (saved) {
        try {
          return JSON.parse(saved)
        } catch {
          // Fallback to initial position
        }
      }
    }
    return initialPosition || { x: 100, y: 100 }
  })

  const [isDragging, setIsDragging] = useState(false)
  const [internalSelected, setInternalSelected] = useState(false)
  const isSelected = externalSelected !== undefined ? externalSelected : internalSelected
  const [dragStart, setDragStart] = useState<{ x: number; y: number; offsetX: number; offsetY: number } | null>(null)
  const folderRef = useRef<HTMLDivElement>(null)
  const clickTimeoutRef = useRef<NodeJS.Timeout>()
  const actuallyDraggedRef = useRef(false)

  const handleMouseDown = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.button !== 0) return // Only handle left mouse button
      
      // Reset drag flag
      actuallyDraggedRef.current = false
      
      if (externalSelected === undefined) {
        setInternalSelected(true)
      }
      const rect = folderRef.current?.getBoundingClientRect()
      const container = folderRef.current?.parentElement
      if (rect && container) {
        const containerRect = container.getBoundingClientRect()
        setDragStart({
          x: e.clientX,
          y: e.clientY,
          offsetX: e.clientX - rect.left,
          offsetY: e.clientY - rect.top,
        })
      }
    },
    [externalSelected],
  )

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragStart) return

      const container = folderRef.current?.parentElement
      if (!container) return

      const containerRect = container.getBoundingClientRect()
      const deltaX = e.clientX - dragStart.x
      const deltaY = e.clientY - dragStart.y

      // Check if mouse moved enough to start dragging
      const threshold = 5
      const hasMoved = Math.abs(deltaX) > threshold || Math.abs(deltaY) > threshold
      
      if (!isDragging && hasMoved) {
        setIsDragging(true)
        actuallyDraggedRef.current = true
        // Prevent text selection and default behavior when dragging starts
        e.preventDefault()
      }

      if (isDragging || hasMoved) {
        const newX = position.x + deltaX
        const newY = position.y + deltaY

        // Constrain to container bounds
        const maxX = containerRect.width - 80
        const maxY = containerRect.height - 100

        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        })

        setDragStart({
          x: e.clientX,
          y: e.clientY,
          offsetX: dragStart.offsetX,
          offsetY: dragStart.offsetY,
        })
      }
    },
    [dragStart, isDragging, position],
  )

  const handleMouseUp = useCallback(() => {
    const wasDragging = actuallyDraggedRef.current
    
    if (wasDragging) {
      // Save position to localStorage if storageKey is provided
      if (storageKey && typeof window !== "undefined") {
        localStorage.setItem(`folder-${storageKey}`, JSON.stringify(position))
      }
      // Reset drag flag
      actuallyDraggedRef.current = false
    } else {
      // Handle click (not a drag) - only if we didn't drag
      if (clickTimeoutRef.current) {
        clearTimeout(clickTimeoutRef.current)
        clickTimeoutRef.current = undefined
        // Double click detected
        if (onDoubleClick) {
          onDoubleClick()
        }
      } else {
        // Single click - set timeout to detect double click
        clickTimeoutRef.current = setTimeout(() => {
          if (onClick) {
            onClick()
          }
          clickTimeoutRef.current = undefined
        }, 300)
      }
    }

    setIsDragging(false)
    setDragStart(null)
    
    // Don't reset selection immediately - let it persist for visual feedback
    // Selection will be reset by parent component or on next click
  }, [position, storageKey, onClick, onDoubleClick])

  // Add global mouse event listeners
  useEffect(() => {
    if (dragStart !== null) {
      const handleGlobalMouseMove = (e: MouseEvent) => handleMouseMove(e)
      const handleGlobalMouseUp = () => handleMouseUp()

      window.addEventListener("mousemove", handleGlobalMouseMove)
      window.addEventListener("mouseup", handleGlobalMouseUp)

      return () => {
        window.removeEventListener("mousemove", handleGlobalMouseMove)
        window.removeEventListener("mouseup", handleGlobalMouseUp)
      }
    }
  }, [dragStart, handleMouseMove, handleMouseUp])

  return (
    <div
      ref={folderRef}
      className={cn(
        "absolute cursor-move select-none transition-all",
        isDragging && "z-50 cursor-grabbing",
        isSelected && !isDragging && "z-40 cursor-grab",
        !isSelected && "z-30",
      )}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: `${isDragging ? "scale(1.1)" : isSelected ? "scale(1.05)" : "scale(1)"} translateZ(0)`,
        userSelect: "none",
        WebkitUserSelect: "none",
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        willChange: "transform",
      }}
      onMouseDown={handleMouseDown}
      onDragStart={(e) => e.preventDefault()}
    >
      <div
        className={cn(
          "flex flex-col items-center gap-1 p-2 rounded-lg transition-all",
          isSelected && !isDragging && "bg-blue-500/20 ring-2 ring-blue-400/50",
          isDragging && "shadow-2xl",
        )}
      >
        <div
          className={cn(
            "transition-transform",
            isDragging && "scale-110",
            isSelected && !isDragging && "scale-105",
          )}
        >
          <Icon color={folderColor} className="h-16 w-16" style={{ shapeRendering: "geometricPrecision" }} />
        </div>
        <span
          className={cn(
            "text-xs font-medium text-white text-center px-2 py-0.5 rounded transition-all max-w-[80px] truncate",
            isSelected && !isDragging && "bg-blue-500/40 shadow-lg ring-1 ring-blue-300/30",
            "text-shadow-sm",
          )}
          style={{
            textShadow: "0 1px 2px rgba(0,0,0,0.8), 0 0 4px rgba(0,0,0,0.5)",
          }}
        >
          {label}
        </span>
      </div>
    </div>
  )
}

