import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ProstheticInterface({ data }) {

  const [activeCard, setActiveCard] = useState(0);
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 sm:space-y-5 mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block text-xs sm:text-sm lg:text-base font-medium text-blue-800 bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full">
            {data.span}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            {data.description}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[370px,1fr] gap-6 sm:gap-8">
          {/* Navigation Cards */}
          <ScrollArea className="relative h-[400px] sm:h-[500px] lg:h-[600px] px-2 sm:px-4 py-2">
            {data.Producto.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-3 sm:mb-4"
              >
                <Card
                  className={`group p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                    activeCard === index ? "ring-2 ring-blue-500 shadow-lg" : ""
                  }`}
                  onClick={() => setActiveCard(index)}
                >
                  <div className="space-y-1.5 sm:space-y-2">
                    <h3 className="text-base sm:text-lg font-semibold group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {item.tiempo}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </ScrollArea>

          {/* Detail View */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[2/1]">
                <Image
                  src={data.Producto[activeCard].img.url}
                  alt={data.Producto[activeCard].title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {data.Producto[activeCard].title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {data.Producto[activeCard].paragraph}
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900">
                    Características principales:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                    {data?.Producto?.[activeCard]?.List?.map((list, index) => (
                      <li
                        key={list.id} // Use unique id instead of index
                        className="flex items-center gap-2 text-sm sm:text-base text-gray-600"
                      >
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-device-800 rounded-full flex-shrink-0" />
                        <span>{list.item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  size="lg"
                  className="w-full rounded-xl sm:w-auto text-sm sm:text-base"
                  asChild
                >
                  <Link href={data.Producto[activeCard].url}>Ver más</Link>
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
