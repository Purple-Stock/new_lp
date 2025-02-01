import Image from "next/image"
import Link from "next/link"

export function Industries() {
  const industries = [
    {
      name: "Atacado",
      image:
        "https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Varejo",
      image:
        "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Manufatura",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-photo-1145434-nZlG4ZXNDfsvJBsMU0BlbkiSB9RiMB.jpeg",
    },
    {
      name: "Logística",
      image:
        "https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Moda",
      image:
        "https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Alimentos & Bebidas",
      image:
        "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Construção",
      image:
        "https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Médico",
      image:
        "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Beleza",
      image:
        "https://images.pexels.com/photos/3985298/pexels-photo-3985298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Comércio",
      image:
        "https://images.pexels.com/photos/1058959/pexels-photo-1058959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      name: "Educação",
      image:
        "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Software de Inventário para Sua Indústria</h2>
        <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
          A solução de gestão de inventário da Purple Stock ajuda pequenas empresas de todos os setores a economizar tempo e
          dinheiro valiosos quando se trata de organizar inventário e ativos físicos.
        </p>
        <p className="text-center mb-12">
          Selecione seu setor para saber como a Purple Stock pode ajudá-lo a controlar suas operações.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {industries.map((industry, index) => (
            <Link key={index} href="#" className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-200">
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
          <Link
            href="#"
            className="group relative aspect-square overflow-hidden rounded-2xl bg-gray-100 flex items-center justify-center"
          >
            <div className="text-4xl text-gray-400">+</div>
          </Link>
        </div>

        <div className="text-center mt-8">
          <Link href="#" className="text-[#9333E9] hover:underline">
            Ver Todos &gt;
          </Link>
        </div>
      </div>
    </section>
  )
}

