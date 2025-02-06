import { motion, useInView } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export function BenefitSection({ data }) {
  const mainRef = useRef(null);
  const statsRef = useRef(null);
  const isMainInView = useInView(mainRef, { once: true, amount: 0.3 });

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

  return (
    <section className="relative w-full overflow-hidden bg-device-950 px-4 py-16 sm:py-20 lg:py-24">
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

      <div className="mx-auto max-w-7xl">
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
            <span className="inline-block rounded-full bg-white/10 px-4 py-1 text-lg text-white backdrop-blur-sm sm:text-xl lg:text-2xl">
              {data.span}
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
              {data.title}
            </h2>
          </motion.div>

          {/* Features grid */}
          <div className="grid gap-8 sm:grid-cols-2">
            {data.List.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative border-b border-white/20 pb-8 pl-20 sm:pl-24"
              >
                <div className="absolute left-0 top-0 text-4xl text-white transition-transform duration-300 group-hover:scale-110 sm:text-6xl lg:text-7xl">
                  <Image
                    src={benefit.img.url || "https://picsum.photos/72"}
                    alt={benefit.title}
                    width={72}
                    height={72}
                    priority
                  />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-white sm:text-xl lg:text-2xl">
                  {benefit.title}
                </h3>
                <p className="text-sm text-white/90 sm:text-base">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
