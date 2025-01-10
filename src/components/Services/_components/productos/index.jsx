import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const prosthetics = [
  {
    title: "Desarticulado de Cadera",
    description: "Tiempo de elaboración: 45 días",
    content: `Prótesis diseñada para personas con amputación a nivel de la cadera. Incluye componentes especializados como una articulación de cadera hidráulica y un sistema de rodilla controlado por microprocesador para lograr un movimiento más natural y seguro.`,
    features: [
      "Articulación de cadera hidráulica",
      "Sistema de rodilla controlado por microprocesador",
      "Pie de respuesta dinámica",
      "Socket de contacto total"
    ],
    image: "https://placehold.co/800x600/png",
    action: "Ver más"
  },
  {
    title: "Transfemoral",
    description: "Tiempo de elaboración: 35 días",
    content: `Prótesis para amputación por encima de la rodilla. Incorpora tecnología avanzada en el sistema de rodilla y un encaje personalizado para máxima comodidad y funcionalidad.`,
    features: [
      "Rodilla policéntrica de 4 barras",
      "Socket con sistema de succión",
      "Pie de fibra de carbono",
      "Adaptadores de titanio"
    ],
    image: "https://placehold.co/800x600/png",
    action: "Ver más"
  },
  {
    title: "Desarticulado de Rodilla",
    description: "Tiempo de elaboración: 35 días",
    content: `Solución especializada para amputación a nivel de la rodilla, preservando la longitud total del fémur. Diseñada para maximizar la estabilidad y el control.`,
    features: [
      "Sistema de rodilla especializado",
      "Encaje anatómico personalizado",
      "Control de rotación integrado",
      "Sistema de alineación preciso"
    ],
    image: "https://placehold.co/800x600/png",
    action: "Ver más"
  },
  {
    title: "Transtibial",
    description: "Tiempo de elaboración: 30 días",
    content: `Prótesis por debajo de la rodilla que combina ligereza y durabilidad. Diseñada para proporcionar máxima comodidad y funcionalidad en actividades diarias.`,
    features: [
      "Socket de contacto total",
      "Sistema de suspensión PIN",
      "Pie dinámico multiaxial",
      "Acabado cosmético personalizado"
    ],
    image: "https://placehold.co/800x600/png",
    action: "Ver más"
  },
  {
    title: "Syme",
    description: "Tiempo de elaboración: 30 días",
    content: `Prótesis específica para amputación a nivel del tobillo. Ofrece excelente estabilidad y una marcha natural gracias a su diseño especializado.`,
    features: [
      "Diseño de bajo perfil",
      "Sistema de suspensión integrado",
      "Pie protésico especializado",
      "Acabado anatómico preciso"
    ],
    image: "https://placehold.co/800x600/png",
    action: "Ver más"
  },
  {
    title: "Chopart",
    description: "Tiempo de elaboración: 25 días",
    content: `Prótesis parcial de pie diseñada para mantener la funcionalidad máxima con una intervención mínima. Ideal para preservar la movilidad natural del tobillo.`,
    features: [
      "Diseño ultraligero",
      "Sistema de retención personalizado",
      "Plantilla anatómica",
      "Cosmética realista"
    ],
    image: "https://placehold.co/800x600/png",
    action: "Ver más"
  }
];

export function ProstheticInterface() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-5"
        >
          <span className="inline-block text-sm font-medium text-blue-800 sm:text-base lg:text-xl">
            Tipos de Prótesis
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Soluciones Protésicas Personalizadas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Realizamos diferentes tipos de prótesis de pierna de acuerdo al nivel de amputación,
            utilizando tecnología avanzada y materiales de alta calidad
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[400px,1fr] gap-8">
          <div className="space-y-4 h-[600px] overflow-y-auto pr-4 custom-scrollbar px-4 py-2">
            {prosthetics.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  className={`group p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    activeCard === index ? 'ring-2 ring-blue-500 shadow-lg' : ''
                  }`}
                  onClick={() => setActiveCard(index)}
                >
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-[400px]">
                <Image
                  src={prosthetics[activeCard].image}
                  alt={prosthetics[activeCard].title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {prosthetics[activeCard].title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {prosthetics[activeCard].content}
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900">Características principales:</h4>
                  <ul className="grid grid-cols-2 gap-4">
                    {prosthetics[activeCard].features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2 text-gray-600">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {prosthetics[activeCard].action}
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}