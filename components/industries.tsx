import Image from "next/image"
import Link from "next/link"

export function Industries() {
  const industries = [
    {
      name: "Atacado",
      image:
        "/images/pexels-photo-4483610.webp",
    },
    {
      name: "Varejo",
      image:
        "/images/pexels-photo-264507.jpeg",
    },
    {
      name: "Manufatura",
      image:
        "/images/pexels-photo-1145434.jpeg",
    },
    {
      name: "Logística",
      image:
        "/images/pexels-photo-1267338.jpeg",
    },
    {
      name: "Moda",
      image:
        "/images/pexels-photo-994523.webp",
    },
    {
      name: "Alimentos & Bebidas",
      image:
        "/images/pexels-photo-1640777.jpeg",
    },
    {
      name: "Construção",
      image:
        "/images/construction-site-build-construction-work-159358.jpeg",
    },
    {
      name: "Médico",
      image:
        "/images/medical-appointment-doctor-healthcare-40568.webp",
    },
    {
      name: "Beleza",
      image:
        "/images/pexels-photo-3985298.webp",
    },
    {
      name: "Comércio",
      image:
        "/images/commerce.png",
    },
    {
      name: "Educação",
      image:
        "/images/pexels-photo-256541.webp",
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
            <Link
              key={index}
              href={`/industrias/${industry.name.toLowerCase().replace(/\s+/g, "-")}`}
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

