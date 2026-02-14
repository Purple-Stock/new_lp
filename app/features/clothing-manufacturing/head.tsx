import { getSiteUrl } from "@/lib/site"

export default function Head() {
  const canonicalUrl = `${getSiteUrl()}/features/clothing-manufacturing`
  const title = "Controle de Faccao: Como Reduzir Atrasos na Producao | Purple Stock"
  const description =
    "Aprenda a estruturar controle de faccao na confeccao com rastreabilidade por etapa, menos retrabalho e mais previsibilidade de entrega."

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
