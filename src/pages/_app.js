import { DefaultSeo } from 'next-seo'
import Layout from "@/components/Layouts/_Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
        <DefaultSeo 
          titleTemplate="%s | Kyp Bioingeniería"
          defaultTitle="Kyp Bioingeniería"
          description="Especialistas en prótesis de pierna fabricadas en fibra de carbono."
          openGraph={{
            type: 'website',
            locale: 'es_ES',
            url: 'https://www.kypbioingenieria.com/',
            site_name: 'Kyp Bioingeniería',
            images: [
              {
                url: 'https://www.kypbioingenieria.com/og-default.jpg',
                width: 1200,
                height: 630,
                alt: 'Kyp Bioingeniería',
              },
            ],
          }}
          twitter={{
            handle: '@KypBioingenieria',
            site: '@KypBioingenieria',
            cardType: 'summary_large_image',
          }}
        />
        <Component {...pageProps} />
    </Layout>
  );
}
