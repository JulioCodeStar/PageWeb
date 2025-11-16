import { NextSeo } from 'next-seo';
import {
  HeaderSection,
  About,
  Services,
  Choose,
  Team,
  TestimonialsSection,
  FaqsSection,
  BlogSection,
  ExtranjeroSection,
  ExhibicionSection,
  BrandSection,
  CasoExitoSection,
  ProblemSection
} from "@/components/Home";
import configAxios from "@/config/configAxios";

export async function getStaticProps() {
  try {
    const res = await configAxios.get("home?populate=HomeDynamic.img,HomeDynamic.Button,HomeDynamic.Card.img,HomeDynamic.Card.icon,HomeDynamic.Card.img_background,HomeDynamic.Card.url,HomeDynamic.List,HomeDynamic.img_background,HomeDynamic.FAQS,HomeDynamic.List.img,seo,seo.openGraph,HomeDynamic.Brand.logo,HomeDynamic.img_1,HomeDynamic.img_2,HomeDynamic.img_3,HomeDynamic.Card.List,HomeDynamic.Slide,HomeDynamic.Slide.img,HomeDynamic.Slide.label");
    
    const homeData = res.data.data;

    return {
      props: {
        data: homeData.HomeDynamic || null, // Agregamos fallback a null
        seo: homeData.seo || null,          // Aquí guardamos el objeto SEO
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

export default function Home({ data, error, seo }) {

  if (error) {
    return <div>Error: {error}</div>;
  }

  const renderSection = (section, key) => {
    switch (section.__component) {
      case 'component-home.hero-section':
          return <HeaderSection key={key} data={section}/>
      case 'component-home.about-secion':
          return (
          <>
            <About data={section} />
            <ProblemSection />
          </>
          )
      case 'component-home.brand-section':
          return <BrandSection data={section} />
      case 'component-home.exito-section':
          return <CasoExitoSection data={section} />
      case 'component-home.extranjero-section':
        return <ExtranjeroSection data={section} />
      case 'component-home.exhibicion-section':
        return <ExhibicionSection data={section} />
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

  const {
    metaTitle,
    metaDescription,
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
        title={metaTitle || 'Título por defecto'}
        description={metaDescription || 'Descripción por defecto'}
        canonical={canonicalURL || 'https://www.tusitio.com/'}
        openGraph={{
          title: ogTitle || metaTitle || 'Título OG por defecto',
          description: ogDescription || metaDescription || 'Descripción OG por defecto',
          url: canonicalURL || 'https://www.tusitio.com/',
          images: [
            {
              url: ogImage || metaImage || 'https://www.tusitio.com/default-og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Imagen de la página de inicio',
            },
          ],
        }}
      />

      {data.map((section) => renderSection(section, section.id))}

      <BlogSection />
    </>
  );
}
