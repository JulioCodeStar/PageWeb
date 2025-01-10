import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa"; // Importamos el ícono de flecha

const services = [
  {
    title: "Prótesis de Miembro Inferior",
    description:
      "Fabricación de prótesis personalizadas con alta tecnología para extremidades inferiores, garantizando máxima comodidad y movilidad en tu día a día. Cada prótesis se adapta perfectamente a tu anatomía y estilo de vida.",
    image: "https://placehold.co/600x500/jpg",
    icon: "📄",
    link: "/servicios/miembro-inferior",
  },
  {
    title: "Prótesis de Miembro Superior",
    description:
      "Desarrollamos prótesis de brazos y manos con tecnología avanzada, diseñadas para recuperar la funcionalidad y naturalidad de tus movimientos. Cada prótesis está personalizada para tu máximo confort.",
    image: "https://placehold.co/600x500/jpg",
    icon: "💪",
    link: "/servicios/miembro-superior",
  },
  {
    title: "Prótesis Estéticas",
    description:
      "Creamos prótesis estéticas con acabado totalmente natural, reproduciendo fielmente el color, textura y detalles de tu piel. Una solución personalizada que combina belleza y comodidad.",
    image: "https://placehold.co/600x500/jpg",
    icon: "🌟",
    link: "/servicios/esteticas",
  },
];

export function Services() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-3 pb-14">
          <h5 className="inline-block text-sm font-medium text-blue-800 sm:text-base lg:text-xl">
            Nuestros Servicios
          </h5>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Te ofrecemos una prótesis a tu medida
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              className="group relative h-[300px] overflow-hidden rounded-xl bg-gray-100"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Imagen de fondo */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-opacity duration-300 group-hover:opacity-20"
                />
              </div>

              {/* Contenido */}
              <div className="relative flex h-full flex-col justify-between p-6">
                {/* Contenido principal */}
                <div>
                  <div className="mb-4 text-4xl">{service.icon}</div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    {service.description}
                  </p>
                </div>

                {/* Botón Ver más */}
                <motion.a
                  href={service.link}
                  className="mt-4 inline-flex items-center text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100 cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Ver más
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </motion.a>

                {/* Overlay gradiente */}
                <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-white/90 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
