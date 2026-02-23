import { getSiteUrl } from "@/lib/site"

export default function Head() {
  const canonicalUrl = `${getSiteUrl()}/recursos/controle-de-almoxarifado`
  const title = "Controle de Almoxarifado: Guia Prático para PMEs | Purple Stock"
  const description =
    "Entenda como estruturar controle de almoxarifado com entrada e saída, inventário cíclico e rastreabilidade para reduzir erros e custos."

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
