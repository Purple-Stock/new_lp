export default function Head() {
  const title = "Glossário de Gestão de Estoque para PMEs | Purple Stock";
  const description =
    "Entenda os principais termos de estoque, almoxarifado, logística e operação. Glossário prático para pequenas e médias empresas.";
  const canonicalUrl = "https://www.purplestock.com.br/glossario";

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
  );
}
