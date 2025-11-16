/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function About({ data }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full bg-gradient-to-b from-white to-device-50/10 overflow-hidden">
      {/* Background decorative image */}
      <div className="absolute right-0 top-0 hidden h-[350px] w-[378px] bg-[url('/img/shape10.png')] bg-no-repeat opacity-30 lg:block" />

      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* ⬇⬇ AQUÍ el bloque centrado como en tu imagen */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mx-auto flex max-w-6xl flex-col gap-8 lg:flex-row lg:items-center lg:gap-12"
        >
          {/* Imagen */}
          <motion.div
            variants={itemVariants}
            className="relative w-full lg:w-1/2 aspect-square sm:aspect-[4/3] lg:aspect-square overflow-hidden rounded-full shadow-xl shadow-device-200/20"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-device-800/20 to-transparent z-10" />
            <Image
              src={data.img.url || "https://placehold.co/600x600/png"}
              alt="Centro Ortoprotésico"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
              priority
            />
          </motion.div>

          {/* Contenido */}
          <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8">

            <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-extrabold leading-tight tracking-tight text-[#00939e] max-w-7xl mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8">
                {data.title}
              </h2>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-normal text-[#00939e] max-w-6xl mx-auto leading-relaxed">
                {data.subtitle}
              </h3>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-normal text-gray-500 max-w-6xl mx-auto leading-relaxed"
            >
              {data.description}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              {data.List.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 group"
                >
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 transition-colors duration-300 group-hover:bg-blue-800">
                    <FaCheck className="h-4 w-4 text-blue-800 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-sm sm:text-base font-normal text-gray-500">
                    {feature.item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
