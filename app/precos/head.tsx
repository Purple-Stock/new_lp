import { getSiteUrl } from "@/lib/site"

export default function Head() {
  const canonicalUrl = `${getSiteUrl()}/precos`
  const title = "Preços Purple Stock: R$ 29,90 por time"
  const description =
    "Plano único da Purple Stock: R$ 29,90 por time por mês, com 7 dias grátis, sem fidelidade e operação com QR Code."

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  )
}
