"use client"

import { Calendar } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { trackCtaClick } from "@/lib/analytics"

export function ScheduleButton() {
  const calendlyUrl = "https://calendly.com/matheus-puppe"

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackCtaClick({
                cta_name: "floating_schedule_button",
                cta_target: "calendly",
                page_section: "floating_buttons",
              })
            }
            className="fixed bottom-24 right-6 bg-[#9333E9] hover:bg-[#7928CA] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 z-50 flex items-center gap-2"
            aria-label="Agende uma reunião"
          >
            <Calendar className="h-6 w-6" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-gray-800 text-white">
          <p>Agende uma reunião</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
