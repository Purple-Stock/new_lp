import React from "react"
import { cn } from "@/lib/utils"

interface MacOSFolderIconProps {
  className?: string
  color?: "blue" | "purple" | "green" | "yellow" | "red" | "orange"
}

const folderColors = {
  blue: {
    main: "#4A90E2",
    light: "#6BA3E8",
    dark: "#357ABD",
    shadow: "rgba(53, 122, 189, 0.3)",
  },
  purple: {
    main: "#9B59B6",
    light: "#B07CC8",
    dark: "#7D3C98",
    shadow: "rgba(125, 60, 152, 0.3)",
  },
  green: {
    main: "#2ECC71",
    light: "#52D88A",
    dark: "#27AE60",
    shadow: "rgba(39, 174, 96, 0.3)",
  },
  yellow: {
    main: "#F1C40F",
    light: "#F4D03F",
    dark: "#D4AC0D",
    shadow: "rgba(212, 172, 13, 0.3)",
  },
  red: {
    main: "#E74C3C",
    light: "#EC7063",
    dark: "#C0392B",
    shadow: "rgba(192, 57, 43, 0.3)",
  },
  orange: {
    main: "#E67E22",
    light: "#EB984E",
    dark: "#D35400",
    shadow: "rgba(211, 84, 0, 0.3)",
  },
}

export function MacOSFolderIcon({ className, color = "blue" }: MacOSFolderIconProps) {
  const colors = folderColors[color]

  return (
    <svg
      viewBox="0 0 64 64"
      className={cn("h-full w-full", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
    >
      {/* Drop shadow */}
      <ellipse
        cx="32"
        cy="58"
        rx="24"
        ry="4"
        fill={colors.shadow}
        opacity="0.3"
      />
      
      {/* Main folder body with rounded corners */}
      <path
        d="M12 22C12 20.3431 13.3431 19 15 19H20.5858C21.1162 19 21.6249 19.2107 22 19.5858L25.4142 23H49C50.6569 23 52 24.3431 52 26V50C52 51.6569 50.6569 53 49 53H15C13.3431 53 12 51.6569 12 50V22Z"
        fill={colors.main}
      />
      
      {/* Folder tab with curved top */}
      <path
        d="M12 22C12 20.3431 13.3431 19 15 19H20.5858C21.1162 19 21.6249 19.2107 22 19.5858L25.4142 23H49C50.6569 23 52 24.3431 52 26V28H12V22Z"
        fill={colors.dark}
      />
      
      {/* Curved tab highlight */}
      <path
        d="M15 19C13.8954 19 13 19.8954 13 21V23C13 24.1046 13.8954 25 15 25H20.5858C21.1162 25 21.6249 24.7893 22 24.4142L25.4142 21H24.5858C24.0554 21 23.5467 20.7893 23.1716 20.4142L20.1716 17.4142C19.7965 17.0391 19.2878 16.8284 18.7574 16.8284H15C13.8954 16.8284 13 17.7238 13 18.8284V19H15Z"
        fill={colors.light}
        opacity="0.5"
      />
      
      {/* Inner shadow for depth */}
      <path
        d="M15 23H49C50.1046 23 51 23.8954 51 25V49C51 50.1046 50.1046 51 49 51H15C13.8954 51 13 50.1046 13 49V25C13 23.8954 13.8954 23 15 23Z"
        fill="black"
        opacity="0.15"
      />
      
      {/* Top edge highlight */}
      <path
        d="M12 22C12 20.3431 13.3431 19 15 19H20.5858C21.1162 19 21.6249 19.2107 22 19.5858L25.4142 23H49C50.6569 23 52 24.3431 52 26V26.5C52 24.567 50.433 23 48.5 23H25.4142C24.8838 23 24.3751 22.7893 24 22.4142L20.5858 19C20.0554 19 19.5467 18.7893 19.1716 18.4142L16.1716 15.4142C15.7965 15.0391 15.2878 14.8284 14.7574 14.8284H15C13.3431 14.8284 12 16.1715 12 17.8284V22Z"
        fill="white"
        opacity="0.25"
      />
      
      {/* Subtle gradient overlay */}
      <path
        d="M12 22C12 20.3431 13.3431 19 15 19H20.5858C21.1162 19 21.6249 19.2107 22 19.5858L25.4142 23H49C50.6569 23 52 24.3431 52 26V50C52 51.6569 50.6569 53 49 53H15C13.3431 53 12 51.6569 12 50V22Z"
        fill={`url(#gradient-${color})`}
        opacity="0.3"
      />
      
      <defs>
        <linearGradient id={`gradient-${color}`} x1="12" y1="19" x2="52" y2="53" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="black" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  )
}

