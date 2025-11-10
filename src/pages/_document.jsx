import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="author" content="Guilherme Souza" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" sizes="any" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
