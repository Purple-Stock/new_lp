import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustedBy } from "@/components/trusted-by"
import { RotatingQuestionsAndCTA } from "@/components/rotating-questions-and-cta"
import { Features } from "@/components/features"
import { Testimonials } from "@/components/testimonials"
import { Industries } from "@/components/industries"
import { PreFooterCTA } from "@/components/hero-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <PreFooterCTA />
      <TrustedBy />
      <RotatingQuestionsAndCTA />
      <Features />
      <Testimonials />
      <Industries />
      <Footer />
    </main>
  )
}

