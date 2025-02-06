import { Contact, FormContact, MapsSection } from '@/components/Contactos'
import configAxios from '@/config/configAxios';

export async function getStaticProps(){
  try {
    const res = await configAxios.get("contact?populate=ContactDynamic.img,ContactDynamic.Card.list,ContactDynamic.Card.icon,ContactDynamic.Card.img,ContactDynamic.List,ContactDynamic.Maps.List");
    return {
      props: {
        data: res.data.data.ContactDynamic || null, // Agregamos fallback a null
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

export default function Contacto({ data, error }) {

  if (error) {
    return <div>Error: {error}</div>;
  }

  const renderSection = (section) => {
    switch (section.__component) {
      case 'component-contact.info-section':
        return <Contact key={section.id} data={section} />
      case 'component-contact.form-section':
        return <FormContact data={section} />
      case 'component-contact.map-section':
        return <MapsSection data={section} />

    }
  }

  return (
    <>
        {data.map((section) => renderSection(section))}
    </>
  )
}
