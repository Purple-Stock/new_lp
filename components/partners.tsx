import Image from "next/image"

export function Partners() {
  const partners = [
    { name: "LG Electronics", logo: "/placeholder.svg" },
    { name: "Chick-fil-A", logo: "/placeholder.svg" },
    { name: "Blizzard Entertainment", logo: "/placeholder.svg" },
    { name: "ExxonMobil", logo: "/placeholder.svg" },
    { name: "Guardians", logo: "/placeholder.svg" },
    { name: "Air Liquide", logo: "/placeholder.svg" },
    { name: "Photomatic", logo: "/placeholder.svg" },
    { name: "LF", logo: "/placeholder.svg" },
    { name: "Lufthansa", logo: "/placeholder.svg" },
    { name: "SK ecoplant", logo: "/placeholder.svg" },
    { name: "Fujifilm", logo: "/placeholder.svg" },
    { name: "Routebureau", logo: "/placeholder.svg" },
  ]

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-[#9333E9]">Confiado por</span>{" "}
            <span className="block text-black">Empresas de Todos os Tamanhos</span>
          </h2>
          <p className="text-gray-600 text-lg">Mais de 200.000 Usuários em 90 Países em Todo o Mundo</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="p-4 flex items-center justify-center">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={160}
                height={60}
                className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

