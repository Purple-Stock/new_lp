import { LanguageProvider } from "@/contexts/LanguageContext"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScheduleButton } from "@/components/schedule-button"
import type React from "react"
import "@/styles/globals.css"

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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LanguageProvider>
          {children}
          <ScheduleButton />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  )
}



import './globals.css'