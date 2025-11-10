// components/SEO.jsx
import Head from "next/head";

export default function SEO({
  title = "Meu Site",
  description = "Descrição da página",
  keywords = "palavra1, palavra2, palavra3",
  canonical = "https://meusite.com",
  siteName = "Meu Site",
  locale = "pt_BR",
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: canonical,
    description: description,
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <meta name="author" content="Guilherme Souza" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="language" content={locale} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  );
}
