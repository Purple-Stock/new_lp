import React from "react"
import { cn } from "@/lib/utils"

interface MacOSFolderIconProps {
  className?: string
  color?: string
}

const folderColors = {
  blue: {
    bodyStart: "#8FD0FF",
    bodyMid: "#56AAFF",
    bodyEnd: "#2D82F6",
    tabStart: "#9ED7FF",
    tabEnd: "#53A8FF",
    lipHighlight: "rgba(255,255,255,0.9)",
    bodyHighlight: "rgba(255,255,255,0.55)",
    bodyShadow: "rgba(32, 73, 142, 0.35)",
    baseShadow: "rgba(37, 99, 235, 0.28)",
  },
  purple: {
    bodyStart: "#D4B6FF",
    bodyMid: "#A67CFF",
    bodyEnd: "#7C3AED",
    tabStart: "#E6D4FF",
    tabEnd: "#B38CFF",
    lipHighlight: "rgba(255,255,255,0.92)",
    bodyHighlight: "rgba(255,255,255,0.55)",
    bodyShadow: "rgba(91, 33, 182, 0.35)",
    baseShadow: "rgba(124, 58, 237, 0.28)",
  },
  green: {
    bodyStart: "#9AF3C3",
    bodyMid: "#4ED19E",
    bodyEnd: "#1A9C6F",
    tabStart: "#B9F7D8",
    tabEnd: "#60E0B0",
    lipHighlight: "rgba(255,255,255,0.92)",
    bodyHighlight: "rgba(255,255,255,0.55)",
    bodyShadow: "rgba(16, 95, 70, 0.35)",
    baseShadow: "rgba(5, 150, 105, 0.28)",
  },
  yellow: {
    bodyStart: "#FFE7A3",
    bodyMid: "#F9C25C",
    bodyEnd: "#E08B02",
    tabStart: "#FFF2C9",
    tabEnd: "#F9C863",
    lipHighlight: "rgba(255,255,255,0.92)",
    bodyHighlight: "rgba(255,255,255,0.55)",
    bodyShadow: "rgba(151, 87, 7, 0.35)",
    baseShadow: "rgba(217, 119, 6, 0.28)",
  },
  red: {
    bodyStart: "#FFB2B2",
    bodyMid: "#F87373",
    bodyEnd: "#E23B3B",
    tabStart: "#FFD6D6",
    tabEnd: "#FF8B8B",
    lipHighlight: "rgba(255,255,255,0.92)",
    bodyHighlight: "rgba(255,255,255,0.55)",
    bodyShadow: "rgba(148, 28, 28, 0.35)",
    baseShadow: "rgba(220, 38, 38, 0.28)",
  },
  orange: {
    bodyStart: "#FFD0A6",
    bodyMid: "#FF9E53",
    bodyEnd: "#EC6A13",
    tabStart: "#FFE2C7",
    tabEnd: "#FFB37A",
    lipHighlight: "rgba(255,255,255,0.92)",
    bodyHighlight: "rgba(255,255,255,0.55)",
    bodyShadow: "rgba(156, 63, 12, 0.35)",
    baseShadow: "rgba(234, 88, 12, 0.28)",
  },
}

export function MacOSFolderIcon({ className, color = "blue" }: MacOSFolderIconProps) {
  const validColor = color && color in folderColors ? (color as keyof typeof folderColors) : "blue"
  const colors = folderColors[validColor]

  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-full w-full", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
      style={{
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
        filter: "drop-shadow(0px 10px 25px rgba(12, 24, 48, 0.18))",
      }}
    >
      <defs>
        <linearGradient id={`folder-body-${validColor}`} x1="18" y1="16" x2="50" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={colors.bodyStart} />
          <stop offset="55%" stopColor={colors.bodyMid} />
          <stop offset="100%" stopColor={colors.bodyEnd} />
        </linearGradient>
        <linearGradient id={`folder-tab-${validColor}`} x1="12" y1="14" x2="40" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={colors.tabStart} />
          <stop offset="100%" stopColor={colors.tabEnd} />
        </linearGradient>
        <linearGradient id={`folder-highlight-${validColor}`} x1="16" y1="32" x2="48" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={colors.bodyHighlight} stopOpacity="0.9" />
          <stop offset="100%" stopColor={colors.bodyHighlight} stopOpacity="0.0" />
        </linearGradient>
        <linearGradient id={`folder-edge-${validColor}`} x1="8" y1="27" x2="54" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(255,255,255,0.95)" stopOpacity="0.8" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.2)" stopOpacity="0.2" />
        </linearGradient>
        <radialGradient id={`folder-shadow-${validColor}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(32 55) scale(20 6)">
          <stop offset="0%" stopColor={colors.baseShadow} stopOpacity="0.55" />
          <stop offset="100%" stopColor={colors.baseShadow} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Base soft shadow */}
      <ellipse cx="32" cy="55" rx="18" ry="6" fill={`url(#folder-shadow-${validColor})`} />

      {/* Folder Tab */}
      <path
        d="M13.5 21.2C13.5 18.9 15.33 17 17.64 17H27.6C28.6 17 29.55 17.44 30.22 18.2L32.9 21.2H49.2C51.4 21.2 53.2 23 53.2 25.2V28.8H13.5V21.2Z"
        fill={`url(#folder-tab-${validColor})`}
      />

      {/* Tab lip highlight */}
      <path
        d="M19.4 17.6C18.2 17.6 17.2 18.6 17.2 19.8V22.4C17.2 23.6 18.2 24.6 19.4 24.6H27.8C28.6 24.6 29.4 24.26 29.98 23.68L33.1 20.6H32.4C31.7 20.6 31 20.32 30.5 19.82L28.2 17.52C27.7 17.02 27.02 16.74 26.32 16.74H19.4Z"
        fill={colors.lipHighlight}
        opacity="0.55"
      />

      {/* Folder Body */}
      <path
        d="M8.8 28.6C8.8 24.99 11.72 22 15.33 22H49.2C52.47 22 55.2 24.73 55.2 28V47.6C55.2 52.2 51.47 56 46.87 56H16.6C11.64 56 8 52.2 8 47.6V30.2C8 29.32 8.72 28.6 9.6 28.6H8.8Z"
        fill={`url(#folder-body-${validColor})`}
        stroke="rgba(255,255,255,0.25)"
        strokeWidth="0.6"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />

      {/* Inner Body */}
      <path
        d="M12.8 31.1C12.8 29.75 13.9 28.6 15.25 28.6H48.6C49.95 28.6 51.05 29.75 51.05 31.1V46C51.05 48.76 48.81 51 46.05 51H17.1C14.34 51 12.1 48.76 12.1 46V32C12.1 31.48 12.48 31.1 13 31.1H12.8Z"
        fill="rgba(255,255,255,0.12)"
      />

      {/* Body top edge highlight */}
      <path
        d="M9.2 29.4C9.2 28.62 9.82 28 10.6 28H53.2V32.1C53.2 33.62 51.97 34.85 50.46 34.85H13.36C11.85 34.85 10.6 33.62 10.6 32.1V29.4H9.2Z"
        fill={`url(#folder-edge-${validColor})`}
        opacity="0.55"
      />

      {/* Body sheen highlight */}
      <path
        d="M14.8 33.4H48.6C50.1 33.4 51.3 34.6 51.3 36.1C51.3 37.6 50.1 38.8 48.6 38.8H14.8C13.3 38.8 12.1 37.6 12.1 36.1C12.1 34.6 13.3 33.4 14.8 33.4Z"
        fill={`url(#folder-highlight-${validColor})`}
      />

      {/* Lower shadow band */}
      <path
        d="M12.2 41.6H50.4C51.8 41.6 52.95 42.74 52.95 44.15V44.6C52.95 47.48 50.62 49.8 47.74 49.8H14.86C11.98 49.8 9.65 47.48 9.65 44.6V44.15C9.65 42.74 10.8 41.6 12.2 41.6Z"
        fill={colors.bodyShadow}
        opacity="0.22"
      />
    </svg>
  )
}

