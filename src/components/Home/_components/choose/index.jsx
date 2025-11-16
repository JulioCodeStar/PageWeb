/* eslint-disable @next/next/no-img-element */
import { FaLaptopMedical } from "react-icons/fa";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

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

export function Choose({ data }) {
  const mainRef = useRef(null);
  const statsRef = useRef(null);
  const isMainInView = useInView(mainRef, { once: true, amount: 0.3 });
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.3 });

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#00939e] px-4 py-16 sm:py-20 lg:py-24">
        {/* Background images */}
        <div
          className="absolute right-0 top-0 hidden h-full w-[calc(50%-224px)] bg-cover bg-center bg-no-repeat lg:block"
          style={{ backgroundImage: `url('${data.img_background.url}')` }}
        />
        <motion.div
          className="absolute bottom-0 left-0 h-[570px] w-[490px] bg-[url('/img/shape12.png')] bg-no-repeat opacity-20"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.2, x: 0 }}
          transition={{ duration: 1 }}
        />

        <div className="mx-8 max-w-8xl">
          <motion.div
            ref={mainRef}
            variants={containerVariants}
            initial="hidden"
            animate={isMainInView ? "visible" : "hidden"}
            className="mx-auto max-w-3xl lg:mx-0 lg:max-w-[60%]"
          >
            {/* Header */}
            <motion.div
              variants={itemVariants}
              className="mb-12 text-center lg:text-left"
            >
              <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-lg text-white backdrop-blur-sm sm:text-xl lg:text-2xl mb-4">
                {data.span}
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-extrabold leading-tight tracking-tight text-white max-w-7xl mx-auto mb-4 sm:mb-5 md:mb-6  lg:mb-8 uppercase">
                {data.title}
              </h2>
            </motion.div>

            {/* Features grid */}
            <div className="grid gap-8 sm:grid-cols-2">
              {data.List.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  className="group relative border-b border-white/20 pb-8 pl-20 sm:pl-24"
                >
                  <div className="absolute left-0 top-0 text-4xl text-white transition-transform duration-300 group-hover:scale-110 sm:text-6xl lg:text-7xl">
                    <Image
                      src={feature.img.url}
                      alt={feature.title}
                      width={72}
                      height={72}
                      priority
                    />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl lg:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white/90 sm:text-base">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats section */}
      <section className="relative -mt-16 px-4">
        <div className="mx-auto max-w-8xl">
          <motion.div
            ref={statsRef}
            variants={containerVariants}
            initial="hidden"
            animate={isStatsInView ? "visible" : "hidden"}
            className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4"
          >
            {data.Card.map((stat) => (
              <motion.div
                key={stat.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="group h-full overflow-hidden rounded-xl bg-white p-4 text-center shadow-lg transition-all duration-300 hover:shadow-xl sm:p-6">
                  <CardHeader className="pb-2 sm:pb-4">
                    <span className="text-3xl font-bold text-[#00939e] sm:text-4xl lg:text-5xl">
                      {stat.count}
                    </span>
                  </CardHeader>
                  <CardFooter className="pt-0">
                    <span className="w-full rounded-xl bg-device-50 px-3 py-2 text-xs font-medium text-device-900 transition-colors duration-300 sm:px-6 sm:text-sm lg:text-base">
                      {stat.title}
                    </span>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
