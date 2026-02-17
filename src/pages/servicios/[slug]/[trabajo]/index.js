import {
  HeroSection,
  DescriptionSection,
  FeaturesSection,
  BenefitSection,
  MaterialSection,
  Subscription,
} from "@/components/job";
import configAxios from "@/config/configAxios";

export async function getStaticPaths() {
  try {
    const respuesta = await configAxios.get("jobs");

    const paths = (respuesta?.data?.data ?? [])
      .map((job) => {
        const fullSlug = (job?.slug || job?.attributes?.slug || "").toString();
        const parts = fullSlug.split("/").filter(Boolean); // ej: ["servicios","x","y"]
        const trabajoSlug = parts[parts.length - 1] || null;
        const servicioSlug = parts[1] || null; // según tu formato: /servicios/{slug}/{trabajo}

        if (!trabajoSlug || !servicioSlug) return null;

        return {
          params: {
            slug: servicioSlug,
            trabajo: trabajoSlug,
          },
        };
      })
      .filter(Boolean);

    return {
      paths,
      fallback: "blocking",
    };
  } catch (error) {
    // ✅ API caída (502) en build -> no tumba el deploy
    return {
      paths: [],
      fallback: "blocking",
    };
  }
}

export async function getStaticProps({ params }) {
  const { slug, trabajo } = params;

  try {
    const res = await configAxios.get(
      `jobs?filters[slug][$eq]=/servicios/${slug}/${trabajo}&populate=JobDynamic.img,JobDynamic.Card.img,JobDynamic.List.img,JobDynamic.List.icon,JobDynamic.img_background`
    );

    const item = res?.data?.data?.[0] ?? null;

    if (!item) {
      return { notFound: true, revalidate: 60 };
    }

    return {
      props: {
        data: item?.JobDynamic ?? null,
      },
      revalidate: 60,
    };
  } catch (error) {
    // ✅ mejor 404 + revalidate que mostrar error crudo
    return { notFound: true, revalidate: 60 };
  }
}

export default function Trabajo({ data }) {
  return (
    <>
      {data?.map((section, index) => {
        const componentType = section.__component.split(".")[1];

        switch (componentType) {
          case "hero-section":
            return <HeroSection key={index} data={section} />;
          case "description-general":
            return <DescriptionSection key={index} data={section} />;
          case "benefit-section":
            return <FeaturesSection key={section.id} data={section} />;
          case "choose-section":
            return <BenefitSection key={index} data={section} />;
          case "about-secion":
            return <MaterialSection key={index} data={section} />;
          case "subscrips-service":
            return <Subscription key={index} data={section} />;
          default:
            return null;
        }
      })}
    </>
  );
}
