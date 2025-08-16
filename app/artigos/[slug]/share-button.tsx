"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Share2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function ShareButton() {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      toast({
        title: "Link copiado!",
        description: "O link do artigo foi copiado para a área de transferência.",
      })
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      toast({
        title: "Erro ao copiar",
        description: "Não foi possível copiar o link. Tente novamente.",
        variant: "destructive",
      })
    }
  }

  return (
    <Button 
      variant="outline" 
      size="sm" 
      className="gap-2"
      onClick={handleShare}
    >
      <Share2 className="w-4 h-4" />
      {copied ? "Copiado!" : "Copiar link"}
    </Button>
  )
}
