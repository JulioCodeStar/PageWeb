import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Clock, Phone } from "lucide-react";

export function Subscription() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-device-950/40" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />

            <div className="relative px-6 py-12 md:p-12 lg:px-16 lg:py-14">
              <div className="grid md:grid-cols-[2fr,1fr] gap-8 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <div className="space-y-4">
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-3xl md:text-4xl font-bold text-gray-900"
                    >
                      ¿Necesitas más información?
                      <span className="block text-blue-600">Contáctanos ahora</span>
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-lg text-gray-600"
                    >
                      Nuestro equipo está listo para responder tus preguntas y ayudarte en tu proceso
                    </motion.p>
                  </div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="grid md:grid-cols-2 gap-4"
                  >
                    <div className="flex items-center gap-3 text-gray-600">
                      <Mail className="w-5 h-5 text-blue-600" />
                      <span>info@kypbioingenieria.com</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-600">
                      <Clock className="w-5 h-5 text-blue-600" />
                      <span>Lun - Vie: 9:00 - 18:00, Sab: 9:00 - 13:00</span>
                    </div>
                  </motion.div>
                </div>

                {/* Action */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-4"
                >
                  <Button 
                    size="lg"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-xl text-lg font-medium"
                  >
                    Llamar Ahora
                    <Phone className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="w-full py-6 rounded-xl text-lg font-medium"
                  >
                    Agendar Cita
                    <ArrowRight className="ml-2 h-5 w-5" />
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