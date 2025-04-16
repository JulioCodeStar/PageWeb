import { HeroBannerSection, BodySection } from "@/components/podcast";
import { NextSeo } from "next-seo";

export default function Podcasts() {
  return (
    <>
      {/* <NextSeo
        title={metaTitle || "KYP Bioingeniería - Podcasts"}
        description={metaDescription || "Descripción por defecto"}
        canonical={canonicalURL || "https://www.kypbioingenieria.com/"}
        openGraph={{
          title: ogTitle || metaTitle || "KYP Bioingeniería - Podcasts",
          description:
            ogDescription || metaDescription || "Descripción OG por defecto",
          url: canonicalURL || "https://www.kypbioingenieria.com/",
          images: [
            {
              url:
                ogImage ||
                metaImage ||
                "https://www.tusitio.com/default-og-image.jpg",
              width: 1200,
              height: 630,
              alt: "Imagen de la página de inicio",
            },
          ],
        }}
      /> */}
      <HeroBannerSection />
      <BodySection />
    </>
  );
}
