export default function Head() {
  const title = "Artigos de Controle de Estoque e Almoxarifado | Purple Stock";
  const description =
    "Guias práticos sobre controle de estoque, almoxarifado, QR Code e ERP para pequenas e médias empresas.";
  const canonicalUrl = "https://purplestock.com.br/artigos";

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
