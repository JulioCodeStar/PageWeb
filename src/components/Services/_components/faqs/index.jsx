import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto tiempo toma adaptarse a una prótesis?",
    answer: "El tiempo de adaptación varía según cada persona y el tipo de prótesis. Generalmente, el proceso inicial toma entre 4-6 semanas, durante las cuales proporcionamos apoyo continuo y sesiones de rehabilitación para asegurar una adaptación óptima."
  },
  {
    question: "¿Las prótesis están cubiertas por seguros médicos?",
    answer: "Sí, muchos seguros médicos cubren las prótesis. Trabajamos con las principales aseguradoras y podemos ayudarte a gestionar la cobertura de tu seguro. También ofrecemos opciones de financiamiento para hacer las prótesis más accesibles."
  },
  {
    question: "¿Qué mantenimiento requiere una prótesis?",
    answer: "Recomendamos revisiones regulares cada 6 meses. El mantenimiento diario incluye limpieza básica y revisión de ajuste. Proporcionamos instrucciones detalladas y soporte continuo para el cuidado adecuado de tu prótesis."
  },
  {
    question: "¿Puedo hacer deporte con una prótesis?",
    answer: "Absolutamente. Diseñamos prótesis específicas para diferentes niveles de actividad física. Muchos de nuestros pacientes practican deportes regularmente. La clave está en elegir la prótesis adecuada para tus necesidades específicas."
  },
  {
    question: "¿Qué durabilidad tiene una prótesis?",
    answer: "La durabilidad típica es de 3-5 años, dependiendo del uso y mantenimiento. Los componentes pueden requerir reemplazos periódicos. Realizamos evaluaciones regulares para asegurar el óptimo funcionamiento de tu prótesis."
  }
];

export function FaqsSection() {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (value) => {
    setOpenItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-medium text-blue-800 sm:text-base lg:text-xl mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl mb-6">
            ¿Cómo podemos ayudarte?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y productos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion
            type="multiple"
            value={openItems}
            onValueChange={setOpenItems}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="group rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg data-[state=open]:shadow-lg"
              >
                <AccordionTrigger
                  onClick={() => toggleItem(`item-${index}`)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="flex-1 pr-4 text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="prose prose-lg max-w-none text-gray-600"
                  >
                    <p>{faq.answer}</p>
                  </motion.div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}