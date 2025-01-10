import { motion } from 'framer-motion';
import Image from 'next/image';

const processes = [
  {
    count: "01",
    title: "Apoyo Emocional",
    description: "Evaluación inicial a cargo del área de apoyo emocional.",
    imageUrl: "https://placehold.co/600x400/png",
    icon: "🫂"
  },
  {
    count: "02",
    title: "Rehabilitación Pre y Post Protésica",
    description: "Control del dolor y la inflamación del muñón antes y después de la prótesis",
    imageUrl: "https://placehold.co/600x400/png",
    icon: "🏥"
  },
  {
    count: "03",
    title: "Toma de Medidas",
    description: "Toma de medidas con vendas y materiales especiales.",
    imageUrl: "https://placehold.co/600x400/png",
    icon: "📏"
  },
  {
    count: "04",
    title: "Prueba de Encaje",
    description: "Se ubica el muñón de forma exacta dentro del encaje",
    imageUrl: "https://placehold.co/600x400/png",
    icon: "🔧"
  },
  {
    count: "05",
    title: "Prueba de Marcha",
    description: "Uso de la prótesis con encaje de prueba de 2 semanas",
    imageUrl: "https://placehold.co/600x400/png",
    icon: "👣"
  },
  {
    count: "06",
    title: "Socket Final",
    description: "Cambio del preencaje y entrega del encaje final.",
    imageUrl: "https://placehold.co/600x400/png",
    icon: "✨"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function ProcesosSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-blue-800 sm:text-base lg:text-xl">
            Nuestros Procesos de Atención
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Creamos tu prótesis de pierna siguiendo un proceso meticuloso y personalizado
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {processes.map((process, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-6"
            >
              <div className="absolute top-6 right-6 text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                {process.icon}
              </div>
              
              <div className="relative space-y-6">
                <span className="text-5xl font-bold text-blue-600/20 group-hover:text-blue-600/30 transition-colors duration-300">
                  {process.count}
                </span>

                <div className="relative overflow-hidden rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                  <Image
                    src={process.imageUrl}
                    alt={process.title}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>

                <div className="h-1 w-20 bg-blue-600/20 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}