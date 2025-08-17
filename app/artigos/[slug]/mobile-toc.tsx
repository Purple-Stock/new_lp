"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { BookOpen, X } from "lucide-react"

interface TOCItem {
  text: string
  level: number
  id: string
}

interface MobileTOCProps {
  toc: TOCItem[]
}

export function MobileTOC({ toc }: MobileTOCProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleTOCClick = (id: string) => {
    setIsOpen(false)
    // Small delay to ensure the sheet closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        // Use requestAnimationFrame to avoid forced reflows
        requestAnimationFrame(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        })
      }
    }, 100)
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" className="w-full gap-2 bg-white border-gray-200 hover:bg-gray-50">
          <BookOpen className="w-4 h-4 text-purple-600" />
          Ver sumário
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80 sm:w-96">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-purple-600">
            <BookOpen className="w-5 h-5" />
            Sumário do Artigo
          </SheetTitle>
        </SheetHeader>
        <div className="mt-6">
          <nav className="space-y-2">
            {toc.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTOCClick(item.id)}
                className={`block w-full text-left p-3 rounded-lg transition-colors duration-200 hover:bg-purple-50 hover:text-purple-600 ${
                  item.level === 3 ? 'ml-4 text-gray-600' : 'text-gray-700 font-medium'
                }`}
              >
                {item.text}
              </button>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
