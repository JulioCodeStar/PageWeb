import {
  HeroSection,
  MissionVisionSection,
  SkillSection,
  SomosSection,
  ValoresSection,
} from "@/components/about";
import configAxios from "@/config/configAxios";

export async function getStaticProps() {
  try {
    const res = await configAxios.get("about?populate=AboutDynamic.img,AboutDynamic.Button,AboutDynamic.Card.img,AboutDynamic.Card.icon,AboutDynamic.Card.img_background,AboutDynamic.Card.url,AboutDynamic.List,AboutDynamic.img_background,AboutDynamic.FAQS,AboutDynamic.List.img,AboutDynamic.Porcentaje,AboutDynamic.imgs");
    return {
      props: {
        data: res.data.data.AboutDynamic || null, // Agregamos fallback a null
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


export default function Nosotros({ data, error }) {
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  const renderSection = (section) => {
    switch (section.__component) {
      case "component-about.hero-section":
        return <HeroSection key={section.id} data={section}/>
      case "component-about.info-section":
        return <SomosSection data={section}  />
      case "component-about.hability-section":
        return <SkillSection data={section} />
      case "component-about.mision-vision-section":
        return <MissionVisionSection data={section} />
      case "component-about.valores-section":
        return <ValoresSection data={section}/>
      default:
        return null;
    }
  }

  return (
    <>

      
      {/* <Head>
        <title>Nosotros - Tu Empresa</title>
        <meta name="description" content="Conoce más sobre nuestro equipo y nuestra historia" />
      </Head> */}
      
      {data.map((section) => renderSection(section))}
    </>
  );
}
