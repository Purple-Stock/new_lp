import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const phoneNumber = "5511995597242" // Format: country code (55) + phone number
  const message = encodeURIComponent("Olá! Gostaria de saber mais sobre o Purple Stock.")
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#25D366] p-4 text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#20BA5C]"
      aria-label="Contate-nos no WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
