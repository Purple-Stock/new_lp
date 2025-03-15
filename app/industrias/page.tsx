import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"

const industries = [
  {
    name: "Atacado",
    slug: "atacado",
    image:
      "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Varejo",
    slug: "varejo",
    image:
      "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Manufatura",
    slug: "manufatura",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-photo-1145434-nZlG4ZXNDfsvJBsMU0BlbkiSB9RiMB.jpeg",
  },
  {
    name: "Logística",
    slug: "logistica",
    image:
      "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Moda",
    slug: "moda",
    image:
      "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Alimentos & Bebidas",
    slug: "alimentos-bebidas",
    image:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Construção",
    slug: "construcao",
    image:
      "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Médico",
    slug: "medico",
    image:
      "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Beleza",
    slug: "beleza",
    image:
      "https://images.pexels.com/photos/3985298/pexels-photo-3985298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Comércio",
    slug: "comercio",
    image:
      "https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Educação",
    slug: "educacao",
    image:
      "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
]

export default function IndustriasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">Software de Inventário para Sua Indústria</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              A solução de gestão de inventário da Purple Stock ajuda pequenas empresas de todos os setores a economizar
              tempo e dinheiro valiosos quando se trata de organizar inventário e ativos físicos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, index) => (
              <Link
                key={index}
                href={`/industrias/${industry.slug}`}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-200"
              >
                <Image
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                  <h3 className="text-white font-medium">{industry.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

