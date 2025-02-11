import { NextSeo } from "next-seo";
import {
  HeroSection,
  InfoSection,
  ProcesosSection,
  ProstheticInterface,
  Team,
  FaqsSection,
  Subscription,
} from "@/components/Services";
import configAxios from "@/config/configAxios";

export async function getStaticPaths() {
  const respuesta = await configAxios.get("services");

  const paths = respuesta.data.data.map((servicio) => ({
    params: {
      slug: servicio.slug.split("/").pop(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { slug } }) {
  try {
    const res = await configAxios.get(
      `services?filters[slug][$eq]=/servicios/${slug}&populate=SectionDynamic.img_background,SectionDynamic.img,SectionDynamic.List,SectionDynamic.Card.img,SectionDynamic.Card.icon,SectionDynamic.Producto.img,SectionDynamic.List.icon,SectionDynamic.FAQS,SectionDynamic.Producto.List,seo,seo.openGraph`
    );

    const servicesData = res.data.data[0];

    return {
      props: {
        data: servicesData.SectionDynamic || null, // Agregamos fallback a null
        seo: servicesData.seo || null,
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        data: null,
        seo: null,
        error: error.message || "Error al cargar los datos",
      },
    };
  }
}

export default function Servicios({ data, error, seo }) {
  console.log(seo);

  if (error) {
    return <div>Error: {error}</div>;
  }

  const {
    metaTitle,
    metaDescription,
    metaRobots,
    metaImage, // Una URL a la imagen por defecto
    ogTitle,
    ogDescription,
    ogImage,
    canonicalURL,
  } = seo || {};

  return (
    <>
      {/* Inyectamos los metadatos SEO en el <head> */}
      <NextSeo
        title={metaTitle || "Título por defecto"}
        description={metaDescription || "Descripción por defecto"}
        canonical={canonicalURL || "https://www.tusitio.com/"}
        robotsProps={metaRobots}
        openGraph={{
          title: ogTitle || metaTitle || "Título OG por defecto",
          description:
            ogDescription || metaDescription || "Descripción OG por defecto",
          url: canonicalURL || "https://www.tusitio.com/",
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
      />

      {data?.map((section, index) => {
        const componentType = section.__component.split(".")[1];

        switch (componentType) {
          case "hero-section":
            return <HeroSection key={index} data={section} />;
          case "about-secion":
            return <InfoSection key={index} data={section} />;
          case "process-service":
            return <ProcesosSection key={section.id} data={section} />;
          case "products-service":
            return <ProstheticInterface key={index} data={section} />;
          case "team-section":
            return <Team key={index} data={section} />;
          case "faqs-section":
            return <FaqsSection key={index} data={section} />;
          case "subscrips-service":
            return <Subscription key={index} data={section} />;
          default:
            return null;
        }
      })}
    </>
  );
}
