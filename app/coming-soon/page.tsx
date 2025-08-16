import { ArrowLeft, Sparkles, Clock, Bell, Calendar, MessageCircle, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ComingSoon() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-4xl w-full text-center space-y-12">
          {/* Back Button */}
          <div className="flex justify-start w-full">
            <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-purple-700 transition-colors duration-200 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
              Voltar para página inicial
            </Link>
          </div>

          {/* Logo Section */}
          <div className="space-y-6">
            <div className="relative">
              {/* Animated Logo Container */}
              <div className="relative mx-auto w-32 h-32 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-6 shadow-2xl transform rotate-3 hover:rotate-6 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl transform -rotate-3"></div>
                <div className="relative h-full w-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 1200 400" className="drop-shadow-lg">
                    <g transform="translate(200, 200) scale(1.2)">
                      <path fill="#FFFFFF" d="M0,-100 L86,-50 L86,50 L0,100 L-86,50 L-86,-50 Z"></path>
                      <path fill="#7D3C98" d="M30,-50 L-15,10 H15 L-10,55 L40,0 H15 Z"></path>
                    </g>
                  </svg>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-pulse"></div>
            </div>
            
            <div className="space-y-2">
              <h1 className="text-6xl lg:text-8xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 bg-clip-text text-transparent">
                PURPLE STOCK
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto rounded-full"></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="inline-flex items-center px-6 py-3 bg-purple-100 text-purple-800 rounded-full text-lg font-semibold">
                <Clock className="w-5 h-5 mr-2 text-purple-600" />
                Em breve
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Estamos construindo algo{" "}
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  incrível
                </span>
              </h2>
              
              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Estamos trabalhando duro para trazer uma experiência ainda melhor de gestão de inventário. 
                Prepare-se para revolucionar a forma como você gerencia seu estoque!
              </p>
            </div>


          </div>

          {/* CTA Section */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-soft border border-white/20 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  Quer ser notificado quando lançarmos?
                </h3>
                <p className="text-gray-600">
                  Seja um dos primeiros a experimentar o futuro da gestão de inventário
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="https://wa.me/5511995597242?text=Olá! Gostaria de saber quando o Purple Stock será lançado."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-[#25D366] to-[#20BA5C] hover:from-[#20BA5C] hover:to-[#1EA952] text-white px-6 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    WhatsApp
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
                
                <Link
                  href="https://calendly.com/matheus-puppe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-6 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                  >
                    <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-200" />
                    Agendar Demo
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-500">
                  💡 Dica: Agende uma demonstração personalizada para sua empresa
                </p>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                <span>Desenvolvimento ativo</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                <span>Testes em andamento</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Purple Stock. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

