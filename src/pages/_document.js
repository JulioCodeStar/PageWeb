import { Html, Head, Main, NextScript } from "next/document";
import { Toaster } from "@/components/ui/toaster";
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      
      <Head />
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
