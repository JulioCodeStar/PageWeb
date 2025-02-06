import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export function InfoSection({ data }) {  
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-2xl lg:max-w-none"
          >
            {/* Background blur */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl transform -rotate-6" />

            {/* Image Container */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <div className="relative aspect-[16/15]">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    fetchPriority="high"
                    src={data.img.url}
                    width={600}
                    height={562}
                    alt="Prótesis de pierna avanzada"
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 bg-white/90 backdrop-blur-sm p-4 sm:p-6 rounded-xl shadow-lg max-w-[calc(100%-2rem)] sm:max-w-xs"
              >
                <p className="text-xs sm:text-sm font-medium text-gray-900">
                  {data.paragraph_img}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Header */}
            <div className="space-y-3 sm:space-y-4">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block text-xs sm:text-sm lg:text-base font-medium text-blue-800 bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full"
              >
                {data.span}
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight"
              >
                {data.title}
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed"
            >
              {data.description}
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-6"
            >
              {data.List.map((feature, index) => (
                <motion.div
                  key={feature.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 sm:gap-4 group"
                >
                  <div className="flex-shrink-0 p-1.5 sm:p-2 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-200">
                    <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600">
                      {feature.item}
                    </p>
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
