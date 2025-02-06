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
  const respuesta = await configAxios.get("jobs");

  const paths = respuesta.data.data.map((job) => {
    const trabajoSlug = job.slug.split('/').pop();
    return {
      params: {
        slug: job.slug.split('/')[1] || 'servicios', // Obtiene el segundo segmento de la URL
        trabajo: trabajoSlug,
      },
    };
  });
  
  return {
    paths,
    fallback: 'blocking',
  }
}

export async function getStaticProps({ params }) {

  const { slug, trabajo } = params;

  try {
    const res = await configAxios.get(`http://localhost:1337/api/jobs?filters[slug][$eq]=/servicios/${slug}/${trabajo}&populate=JobDynamic.img,JobDynamic.Card.img,JobDynamic.List.img,JobDynamic.List.icon,JobDynamic.img_background`)
    return {
      props: {
        data: res.data.data[0].JobDynamic || null, // Agregamos fallback a null
      },
      revalidate: 60,
    };
  } catch (error) {
    return {
      props: {
        data: null,
        error: error.message || "Error al cargar los datos",
      },
    };
  }
}


export default function Trabajo({ data, error }) {

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <>
      {data?.map((section, index) => {
        const componentType = section.__component.split('.')[1];

        switch (componentType) {
          case 'hero-section':
            return <HeroSection key={index} data={section} />;
          case 'description-general':
            return <DescriptionSection key={index} data={section} />;
          case 'benefit-section':
            return <FeaturesSection key={section.id} data={section} />;
          case 'choose-section':
            return <BenefitSection key={index} data={section} />;
          case 'about-secion':
            return <MaterialSection key={index} data={section} />;
          case 'subscrips-service':
            return <Subscription key={index} data={section} />
          default:
            return null;
        }
      })}
    </>
  );
}
