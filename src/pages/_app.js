import { useEffect } from "react";
import { useRouter } from "next/router";
import { DefaultSeo } from "next-seo";
import { Montserrat } from "next/font/google";
import Script from "next/script";

import "@/styles/globals.css";
import Layout from "@/components/Layouts/_Layout";

import { FB_PIXEL_ID, fbPageView } from "@/lib/fpixel";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      fbPageView(); // PageView en cada cambio de ruta
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Limpieza
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className={montserrat.className}>
      <Layout>
        {/* Script base del Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;n=f.fbq=function(){
                n.callMethod ?
                  n.callMethod.apply(n,arguments) : n.queue.push(arguments)
              };
              if(!f._fbq)f._fbq=n;
              n.push=n; n.loaded=!0; n.version='2.0';
              n.queue=[];
              t=b.createElement(e); t.async=!0;
              t.src=v;
              s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `,
          }}
        />

        <DefaultSeo
          titleTemplate="%s | Kyp Bioingeniería"
          defaultTitle="Kyp Bioingeniería"
          description="Especialistas en prótesis de pierna fabricadas en fibra de carbono."
          openGraph={{
            type: "website",
            locale: "es_ES",
            url: "https://www.kypbioingenieria.com/",
            site_name: "Kyp Bioingeniería",
            images: [
              {
                url: "https://www.kypbioingenieria.com/og-default.jpg",
                width: 1200,
                height: 630,
                alt: "Kyp Bioingeniería",
              },
            ],
          }}
          twitter={{
            handle: "@KypBioingenieria",
            site: "@KypBioingenieria",
            cardType: "summary_large_image",
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
