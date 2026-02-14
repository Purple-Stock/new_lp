import { LanguageProvider } from "@/contexts/LanguageContext"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { ScheduleButton } from "@/components/schedule-button"
import { RouteViewTracker } from "@/components/route-view-tracker"
import { getSiteUrl, SITE_NAME } from "@/lib/site"
import { Poppins } from "next/font/google"
import type { Metadata } from "next"
import type React from "react"
import "@/styles/globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${SITE_NAME} | Controle De Estoque Com QR Code`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Sistema de controle de estoque em nuvem para PMEs com QR Code, rastreabilidade e operacao em tempo real.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: SITE_NAME,
    title: `${SITE_NAME} | Controle De Estoque Com QR Code`,
    description:
      "Sistema de controle de estoque em nuvem para PMEs com QR Code, rastreabilidade e operacao em tempo real.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Controle De Estoque Com QR Code`,
    description:
      "Sistema de controle de estoque em nuvem para PMEs com QR Code, rastreabilidade e operacao em tempo real.",
  },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'><g transform='translate(16, 16) scale(0.12)'><path fill='%237D3C98' d='M0,-100 L86,-50 L86,50 L0,100 L-86,50 L-86,-50 Z'/><path fill='white' d='M30,-50 L-15,10 H15 L-10,55 L40,0 H15 Z'/></g></svg>",
        sizes: "32x32",
        type: "image/svg+xml",
      },
    ],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning className={poppins.className}>
        <LanguageProvider>
          <RouteViewTracker />
          {children}
          <ScheduleButton />
          <WhatsAppButton />
        </LanguageProvider>
      </body>
    </html>
  )
}
