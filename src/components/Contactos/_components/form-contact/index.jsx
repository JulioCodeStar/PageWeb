import Image from "next/image";
import { Formulario } from "./form";
import { motion } from "framer-motion";
import { MessageSquare, Clock, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Escríbenos",
    detail: "Responderemos lo antes posible",
  },
  {
    icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Horario de Atención",
    detail: "Lun - Vie: 9:00 AM - 6:00 PM",
  },
  {
    icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />,
    title: "Ubicación",
    detail: "Lima, Perú",
  },
];

export function FormContact({ data }) {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8"
          >
            <div className="space-y-6 sm:space-y-8">
              {/* Header */}
              <div className="space-y-2 sm:space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
                  {data.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  {data.paragraph}
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {data.Card.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex flex-col items-center text-center p-3 sm:p-4 rounded-xl bg-blue-50"
                  >
                    <span className="inline-flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 text-blue-600 mb-2 sm:mb-3">
                      <div className="relative w-4 h-4 sm:w-5 sm:h-5">
                        <Image
                          src={item.img.url}
                          alt={item.title}
                          fill
                          sizes="20px"
                          className="object-contain"
                          priority
                        />
                      </div>
                    </span>
                    <h3 className="text-sm sm:text-base font-medium text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 mt-1">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Form Component */}
              <Formulario />
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative lg:sticky lg:top-8"
          >
            <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl transform rotate-6" />
            <div className="relative">
              <div className="relative aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={data.img.url || "https://placehold.co/600x600/png"}
                  alt="Contacto KYP Bioingeniería"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Floating Info Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {data.List.item}
                </h3>
                <p className="text-sm sm:text-base text-gray-700">
                  {data.List.description}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}