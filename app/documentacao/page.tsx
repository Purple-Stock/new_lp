import { ProductDocumentation } from "@/components/product-documentation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function DocumentacaoPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[radial-gradient(circle_at_20%_20%,rgba(129,117,224,0.15),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(221,171,255,0.22),transparent_52%),linear-gradient(180deg,#f8f6ff,#f3ede7)] px-4 pb-16 pt-14 sm:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <ProductDocumentation />
        </div>
      </main>
      <Footer />
    </>
  )
}
