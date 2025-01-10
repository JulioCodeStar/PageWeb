import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const values = [
  {
    title: "Innovación",
    description: "Buscamos constantemente nuevas soluciones y tecnologías para mejorar nuestros productos.",
  },
  {
    title: "Empatía",
    description: "Comprendemos las necesidades individuales de cada paciente.",
  },
  {
    title: "Excelencia",
    description: "Nos comprometemos con los más altos estándares de calidad en cada prótesis.",
  },
  {
    title: "Integridad",
    description: "Actuamos con transparencia y ética en cada proceso.",
  },
  {
    title: "Compromiso Social",
    description: "Trabajamos por una sociedad más inclusiva y accesible.",
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 }
};

export function ValoresSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/600x600/png"
                alt="Nuestros valores en acción"
                width={600}
                height={600}
                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <span className="text-blue-600 font-semibold tracking-wide uppercase">
                Valores
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Nuestros valores distintivos
              </h2>
            </motion.div>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={item}
                  className="group"
                >
                  <div className="flex items-start gap-4 p-4 rounded-xl transition-colors duration-300 hover:bg-white hover:shadow-lg">
                    <div className="flex-shrink-0 mt-1">
                      <div className="p-2 rounded-full bg-blue-100 text-blue-600 transform transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                        <CheckCircle className="w-5 h-5" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-lg text-gray-900">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
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