import { Html, Head, Main, NextScript } from "next/document";
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Meta Pixel – carga tras la primera hidratación */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive" // evita bloquear el render
          dangerouslySetInnerHTML={{
            __html: `
                !function(f,b,e,v,n,t,s){
                  if(f.fbq)return;
                  n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;
                  n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];
                  t=b.createElement(e);t.async=!0;
                  t.src=v;
                  s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s);
                }(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '998253810564602'); 
                fbq('track', 'PageView');
              `,
          }}
        />

        {/* <noscript> va dentro del body, lo añadimos más abajo */}
      </Head>
      <body>
        {/* Imagen de fallback para navegadores sin JS */}
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=998253810564602&ev=PageView&noscript=1"
            />
          </noscript>
        <Main />
        <NextScript />
        <Toaster />
      </body>
    </Html>
  );
}
