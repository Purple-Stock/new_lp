import { LanguageProvider } from "@/contexts/LanguageContext"
import type React from "react"

export const metadata = {
  title: "Purple Stock - Inventory Management System",
  description:
    "Transform your inventory management with Purple Stock. Designed for innovative companies seeking efficiency and precision in their operations.",
  icons: {
    icon: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/purple_stock_logo-PMYaISOsL4kgzKkTILDzTOp3M5TK7A.jpeg",
        sizes: "32x32",
        type: "image/jpeg",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'