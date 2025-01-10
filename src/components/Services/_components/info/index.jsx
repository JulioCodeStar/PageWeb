import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: "Personalización",
    description: "Adaptada a tus necesidades específicas"
  },
  {
    title: "Funcionalidad",
    description: "Movimiento natural y fluido"
  },
  {
    title: "Comodidad",
    description: "Diseñada para uso diario prolongado"
  },
];

export function InfoSection() {
  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl transform -rotate-6" />
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src="https://placehold.co/600x562/png"
                  width={600}
                  height={562}
                  alt="Prótesis de pierna avanzada"
                  className="w-full h-auto"
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg max-w-xs"
              >
                <p className="text-sm font-medium text-gray-900">
                  Tecnología de vanguardia combinada con atención personalizada para resultados óptimos
                </p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-sm font-medium text-blue-800 sm:text-base lg:text-xl"
              >
                Innovación en Prótesis
              </motion.span>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
              >
                ¿Qué es una prótesis de pierna?
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Una prótesis de pierna es un dispositivo médico personalizado diseñado para reemplazar una extremidad inferior perdida. Utilizamos tecnología de vanguardia para crear prótesis que no solo restauran la función, sino que también mejoran significativamente la calidad de vida de nuestros pacientes.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 p-2 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-200">
                    <CheckCircle className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}