import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const values = [
  {
    title: "Innovación",
    description:
      "Buscamos constantemente nuevas soluciones y tecnologías para mejorar nuestros productos.",
  },
  {
    title: "Empatía",
    description: "Comprendemos las necesidades individuales de cada paciente.",
  },
  {
    title: "Excelencia",
    description:
      "Nos comprometemos con los más altos estándares de calidad en cada prótesis.",
  },
  {
    title: "Integridad",
    description: "Actuamos con transparencia y ética en cada proceso.",
  },
  {
    title: "Compromiso Social",
    description: "Trabajamos por una sociedad más inclusiva y accesible.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export function ValoresSection({ data }) {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group mx-auto max-w-2xl lg:max-w-none"
          >
            <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-square">
                <Image
                  src={data.img.url || "https://placehold.co/600x600/png"}
                  alt="Nuestros valores en acción"
                  width={600}
                  height={600}
                  className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content Container */}
          <div className="space-y-6 sm:space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3 sm:space-y-4 text-center lg:text-left"
            >
              <span className="inline-block text-xs sm:text-sm lg:text-base font-medium text-blue-800 bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full">
                {data.span}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                {data.title}
              </h2>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              {data.List.map((value) => (
                <motion.div key={value.id} variants={item} className="group">
                  <div className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl transition-all duration-300 hover:bg-gray-50 hover:shadow-lg">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-1.5 sm:p-2 rounded-full bg-blue-100 text-blue-600 transform transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      <h3 className="font-semibold text-base sm:text-lg text-gray-900">
                        {value.item}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
