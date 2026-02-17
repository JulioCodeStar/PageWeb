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
  try {
    const respuesta = await configAxios.get("services");

    const paths = (respuesta?.data?.data ?? [])
      .map((servicio) => {
        const slug = (servicio?.slug || servicio?.attributes?.slug || "")
          .toString()
          .split("/")
          .pop();

        if (!slug) return null;

        return { params: { slug } };
      })
      .filter(Boolean);

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    // ✅ Si tu API está caída (502) durante el build, NO tumba el deploy
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

export async function getStaticProps({ params: { slug } }) {
  try {
    const res = await configAxios.get(
      `services?filters[slug][$eq]=/servicios/${slug}&populate=SectionDynamic.img_background,SectionDynamic.img,SectionDynamic.List,SectionDynamic.Card.img,SectionDynamic.Card.icon,SectionDynamic.Producto.img,SectionDynamic.List.icon,SectionDynamic.FAQS,SectionDynamic.Producto.List,seo,seo.openGraph`
    );

    const servicesData = res?.data?.data?.[0] ?? null;

    if (!servicesData) {
      return { notFound: true, revalidate: 60 };
    }

    return {
      props: {
        data: servicesData?.SectionDynamic ?? null,
        seo: servicesData?.seo ?? null,
      },
      revalidate: 60,
    };
  } catch (error) {
    // En producción es mejor devolver 404 que mostrar el error crudo
    return { notFound: true, revalidate: 60 };
  }
}

export default function Servicios({ data, seo }) {
  const {
    metaTitle,
    metaDescription,
    metaRobots,
    metaImage,
    ogTitle,
    ogDescription,
    ogImage,
    canonicalURL,
  } = seo || {};

  return (
    <>
      <NextSeo
        title={metaTitle || "Título por defecto"}
        description={metaDescription || "Descripción por defecto"}
        canonical={canonicalURL || "https://www.tusitio.com/"}
        // Si metaRobots te llega como string, no lo pases en robotsProps.
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
              alt: "Imagen",
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
