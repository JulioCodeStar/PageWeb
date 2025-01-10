import Image from "next/image";
import { Formulario } from "./form";
import { motion } from "framer-motion";
import { MessageSquare, Clock, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Escríbenos",
    detail: "Responderemos lo antes posible",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Horario de Atención",
    detail: "Lun - Vie: 9:00 AM - 6:00 PM",
  },
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Ubicación",
    detail: "Lima, Perú",
  },
];

export function FormContact() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                  Envíanos un Mensaje
                </h2>
                <p className="mt-2 text-gray-600">
                  Estamos aquí para responder tus consultas
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center p-4 rounded-2xl bg-blue-50"
                  >
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 mb-3">
                      {item.icon}
                    </span>
                    <h3 className="font-medium text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{item.detail}</p>
                  </motion.div>
                ))}
              </div>

              <Formulario />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl transform rotate-6"></div>
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://placehold.co/600x600/png"
                  alt="Contacto KYP Bioingeniería"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Por qué elegirnos?
                </h3>
                <p className="text-gray-700">
                  Combinamos tecnología avanzada con atención personalizada para brindarte las mejores soluciones en prótesis.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}