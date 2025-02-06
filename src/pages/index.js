import {
  HeaderSection,
  About,
  Services,
  Choose,
  Team,
  TestimonialsSection,
  FaqsSection,
  BlogSection,
} from "@/components/Home";
import configAxios from "@/config/configAxios";

export async function getStaticProps() {
  try {
    const res = await configAxios.get("home?populate=HomeDynamic.img,HomeDynamic.Button,HomeDynamic.Card.img,HomeDynamic.Card.icon,HomeDynamic.Card.img_background,HomeDynamic.Card.url,HomeDynamic.List,HomeDynamic.img_background,HomeDynamic.FAQS,HomeDynamic.List.img");
    return {
      props: {
        data: res.data.data.HomeDynamic || null, // Agregamos fallback a null
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

export default function Home({ data, error }) {

  if (error) {
    return <div>Error: {error}</div>;
  }

  const renderSection = (section, key) => {
    switch (section.__component) {
      case 'component-home.hero-section':
          return <HeaderSection key={key} data={section}/>
      case 'component-home.about-secion':
          return <About data={section} />
      case 'component-home.services-section':
          return <Services data={section}/>
      case 'component-home.choose-section':
          return <Choose data={section} />
      case 'component-home.team-section':
        return <Team data={section} />
      case 'component-home.testimonials-section':
        return <TestimonialsSection data={section}/>
      case 'component-home.faqs-section':
        return <FaqsSection data={section} />
      default:
        return null;
    }
  }

  return (
    <>

      {data.map((section) => renderSection(section, section.id))}
      <BlogSection />
    </>
  );
}
