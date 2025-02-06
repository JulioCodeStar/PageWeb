import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Contact({ data }) {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {data.Card.map((info) => (
            <motion.div key={info.id} variants={item}>
              <Card className="group h-full hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                    {info.title}
                  </h3>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="h-12 w-12 sm:h-14 sm:w-14 bg-blue-600 rounded-full flex items-center justify-center text-white transform transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                      <div className="relative w-6 h-6 sm:w-8 sm:h-8">
                        <Image 
                          src={info.icon.url}
                          alt={info.icon.alt}
                          fill
                          sizes="(max-width: 768px) 24px, 32px"
                          className="object-contain"
                          priority
                        />
                      </div>
                    </div>
                    <div className="flex-1 space-y-4">
                      {info.list.map((item) => (
                        <div key={item.id} className="space-y-1">
                          <h4 className="text-xs sm:text-sm font-medium text-gray-600">
                            {item.title}
                          </h4>
                          <p className="text-sm sm:text-base text-gray-900">
                            {item.item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}