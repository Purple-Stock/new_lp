import { getSiteUrl } from "@/lib/site"

export default function Head() {
  const canonicalUrl = `${getSiteUrl()}/industrias`
  const title = "Controle de Estoque por Setor | Purple Stock"
  const description =
    "Conheça as soluções da Purple Stock por setor: indústria, varejo, logística e mais, com rastreabilidade e operação em tempo real."

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
