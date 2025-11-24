import { Html, Head, Main, NextScript } from "next/document";
import { Toaster } from "@/components/ui/toaster";
import { FB_PIXEL_ID } from '@/lib/fpixel'

export default function Document() {
  return (
    <Html lang="es">  
      <Head>
        {/* Imagen de fallback para navegadores sin JS */}
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
      </Head>
      <body>
        <Main />
        <NextScript />
        <Toaster />
      </body>
    </Html>
  );
}
