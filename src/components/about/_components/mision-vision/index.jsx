import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Target, Users } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    icon: <FileText className="w-6 h-6 text-blue-600" />,
    title: "Misión",
    description: "En KYP Bioingeniería, nuestra misión es proporcionar prótesis personalizadas que transformen vidas, permitiendo a nuestros pacientes recuperar su independencia y confianza. Nos comprometemos a ofrecer soluciones de alta calidad que integren tecnología avanzada con atención integral, desde el diagnóstico hasta el acompañamiento post-adaptación.",
  },
  {
    icon: <Target className="w-6 h-6 text-blue-600" />,
    title: "Visión",
    description: "Aspiramos a ser líderes en el mercado peruano de prótesis, reconocidos no solo por la calidad de nuestros productos, sino también por el impacto positivo que generamos en la vida de nuestros pacientes y en nuestra comunidad. Buscamos expandir nuestro alcance, brindando acceso a soluciones innovadoras para todos aquellos que las necesiten.",
  },
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

export function MissionVisionSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-medium text-blue-800 sm:text-base lg:text-xl">
            Misión & Visión
          </span>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Nuestro Objetivo con los Clientes
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {features.map((feature) => (
              <motion.div variants={item} key={feature.title}>
                <Card className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="space-y-1">
                    <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
                      <span className="transform transition-transform duration-300 group-hover:scale-110">
                        {feature.icon}
                      </span>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="mx-auto max-w-prose text-base text-muted-foreground sm:text-lg lg:mx-0">
                    {feature.description}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 auto-rows-auto"
          >
            <div className="grid gap-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src="https://placehold.co/260x332/png"
                  alt="Innovación en prótesis"
                  width={260}
                  height={332}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src="https://placehold.co/280x198/png"
                  width={280}
                  height={198}
                  alt="Equipo profesional"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
            <div className="grid gap-4">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src="https://placehold.co/280x198/png"
                  width={280}
                  height={198}    
                  alt="Tecnología avanzada"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                <Image
                  src="https://placehold.co/260x332/png"
                  width={260}
                  height={332}
                  alt="Atención personalizada"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}