import { useState } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqsSection({ data }) {
  const [openItems, setOpenItems] = useState([]);

  const toggleItem = (value) => {
    setOpenItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <section className="py-16 px-4 md:py-24 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-xs sm:text-sm lg:text-base font-medium text-blue-800 bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full mb-6">
            {data.span}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight text-device-900 mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {data.paragraph}
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
            {data.FAQS.map((faq, index) => (
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