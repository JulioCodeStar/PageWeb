import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import Image from "next/image";

export function Subscription({ data }) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-device-950/40" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-20 sm:w-24 h-20 sm:h-24 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/10 rounded-full blur-2xl" />

            <div className="relative p-4 sm:p-8 lg:p-12">
              <div className="grid md:grid-cols-[2fr,1fr] gap-6 sm:gap-8 items-center">
                {/* Content */}
                <div className="space-y-4 sm:space-y-6">
                  <div className="space-y-2 sm:space-y-4">
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900"
                    >
                      {data.title}
                      <span className="block text-blue-600">{data.subtitle}</span>
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-sm sm:text-base lg:text-lg text-gray-600"
                    >
                      {data.description}
                    </motion.p>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4"
                  >
                    {data.List.map((item) => (
                      <div 
                        key={item.id} 
                        className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-gray-600"
                      >
                        <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
                          <Image
                            src={item.icon.url}
                            alt={item.item}
                            fill
                            priority 
                            sizes="20px"
                            className="object-contain"
                          />
                        </div>
                        <span>{item.item}</span>
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-3 sm:gap-4"
                >
                  <Button 
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 sm:py-6 rounded-xl text-sm sm:text-base lg:text-lg font-medium"
                  >
                    Llamar Ahora
                    <Phone className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="w-full py-4 sm:py-6 rounded-xl text-sm sm:text-base lg:text-lg font-medium"
                  >
                    Agendar Cita
                    <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}