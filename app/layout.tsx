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
        url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><g transform='translate(16, 16) scale(0.12)'><path fill='%237D3C98' d='M0,-100 L86,-50 L86,50 L0,100 L-86,50 L-86,-50 Z'/><path fill='white' d='M30,-50 L-15,10 H15 L-10,55 L40,0 H15 Z'/></g></svg>",
        sizes: "32x32",
        type: "image/svg+xml",
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
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        
        {/* Optimize font loading */}
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
        
        {/* Fallback for font loading */}
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </noscript>
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