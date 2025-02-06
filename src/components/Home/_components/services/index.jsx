import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useRef } from "react";


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export function Services({ data }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-8 sm:space-y-12 lg:space-y-16"
        >
          {/* Header */}
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.span 
              variants={itemVariants}
              className="inline-block text-xs sm:text-sm lg:text-base font-medium text-blue-800 bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full"
            >
              {data.span}
            </motion.span>
            <motion.h2 
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight text-device-900 max-w-3xl mx-auto"
            >
              {data.title}
            </motion.h2>
          </div>

          {/* Services Grid */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {data.Card.map((sec) => (
              <motion.div
                key={sec.id}
                className="group relative aspect-[4/3] sm:aspect-[3/4] lg:aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-xl shadow-gray-200/50"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={sec.img_background.url}
                    alt={sec.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-20"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90" />
                </div>

                {/* Content */}
                <div className="relative h-full p-4 sm:p-6 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="text-3xl sm:text-4xl transform transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={sec.icon.url}
                        alt={sec.title}
                        width={40}
                        height={40}
                        priority
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {sec.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-100 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 line-clamp-4 sm:line-clamp-none">
                      {sec.description}
                    </p>
                  </div>

                  <motion.a
                    href={sec.url.url}
                    className="inline-flex items-center text-xs sm:text-sm font-medium text-device-50 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:text-white mt-2"
                    whileHover={{ x: 5 }}
                  >
                    {sec.url.title}
                    <FaArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}