// pages/_app.js
import "../styles/globals.css";
import Script from "next/script";

// Dica: prefira variável de ambiente
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "AW-17712610957";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Carrega a lib do gtag só no cliente */}
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      <Component {...pageProps} />
    </>
  );
}
