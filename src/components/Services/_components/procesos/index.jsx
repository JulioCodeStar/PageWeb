import { motion } from 'framer-motion';
import Image from 'next/image';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function ProcesosSection({ data }) {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="inline-block text-xs sm:text-sm lg:text-base font-medium text-blue-800 bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full">
            {data.span}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
            {data.title}
          </h2>
        </motion.div>

        {/* Process Cards Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {data.Card.map((process) => (
            <motion.div
              key={process.id}
              variants={item}
              className="group relative bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-4 sm:p-6"
            >
              {/* Background Icon */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 text-4xl sm:text-6xl opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <Image 
                  priority 
                  src={process.icon.url}
                  alt={process.title}
                  width={80}
                  height={60}
                />
              </div>
              
              {/* Content Container */}
              <div className="relative space-y-4 sm:space-y-6">
                {/* Number */}
                <span className="text-4xl sm:text-5xl font-bold text-blue-600/20 group-hover:text-blue-600/30 transition-colors duration-300">
                  {process.count}
                </span>

                {/* Image */}
                <div className="relative aspect-[3/2] overflow-hidden rounded-lg sm:rounded-xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                  <Image
                    priority 
                    src={process.img.url}
                    alt={process.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transform transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Text Content */}
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="h-1 w-16 sm:w-20 bg-blue-600/20 group-hover:w-full transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}