import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        <Link href="/" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para página inicial
        </Link>

        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/purple_stock_logo-PMYaISOsL4kgzKkTILDzTOp3M5TK7A.jpeg"
          alt="Purple Stock"
          width={80}
          height={80}
          className="mx-auto rounded-full"
        />

        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Em breve</h1>
          <p className="text-lg text-gray-600">
            Estamos trabalhando duro para trazer uma experiência ainda melhor de gestão de inventário. Fique ligado!
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <p className="text-sm text-gray-500">Quer ser notificado quando lançarmos?</p>
          <div className="mt-4 flex gap-4">
            <Link
              href="https://wa.me/5511995597242?text=Olá! Gostaria de saber quando o Purple Stock será lançado."
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#25D366] hover:bg-[#20BA5C] text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              WhatsApp
            </Link>
            <Link
              href="https://calendly.com/matheus-puppe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#9333E9] hover:bg-[#7928CA] text-white px-4 py-2 rounded-md text-sm font-medium"
            >
              Agendar Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

