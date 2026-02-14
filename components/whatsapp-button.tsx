"use client"

import { MessageCircle } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { trackCtaClick } from "@/lib/analytics"

export function WhatsAppButton() {
  const phoneNumber = "5511995597242" // Format: country code (55) + phone number
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Purple Stock.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackCtaClick({
                cta_name: "floating_whatsapp_button",
                cta_target: "whatsapp",
                page_section: "floating_buttons",
              })
            }
            className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-50 flex items-center gap-2"
            aria-label="Contate-nos no WhatsApp"
          >
            <MessageCircle className="h-6 w-6" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-gray-800 text-white">
          <p>Fale conosco no WhatsApp</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
