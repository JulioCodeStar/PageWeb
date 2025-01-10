import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  {
    title: "Calidad",
    description: "Te brindamos la mejor calidad en cada uno de nuestros productos y servicios",
    color: "bg-blue-600"
  },
  {
    title: "Confianza",
    description: "Nos encargamos de darte la seguridad y confianza en cada producto o servicio.",
    color: "bg-green-600"
  },
  {
    title: "Garantía",
    description: "La satisfacción de que lo adquirido es un producto mezcla de calidad, confianza, dedicación y de alta garantía.",
    color: "bg-purple-600"
  }
];

export function SkillSection() {

    const ProgressBar = () => (
        <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
          <motion.div 
            className={`h-full bg-blue-800 rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
        </div>
      );
      

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div className="space-y-4">
              <span className="inline-block text-sm font-medium text-blue-800 sm:text-base lg:text-xl">
                Nuestra Área de Habilidades
              </span>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Nos Caracterizamos<br />Por Tener
              </h2>
            </div>

            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="space-y-3"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold text-gray-900">
                      {skill.title}
                    </h3>
                    <span className="font-medium">
                      100%
                    </span>
                  </div>
                  <ProgressBar />
                  <p className="mx-auto max-w-prose text-base text-muted-foreground sm:text-lg lg:mx-0">
                    {skill.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/600x600/png"
                alt="Profesional ejecutivo"
                width={600}
                height={600}
                className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}