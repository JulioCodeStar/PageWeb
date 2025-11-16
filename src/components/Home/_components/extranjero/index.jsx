import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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

export function ExtranjeroSection({ data }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* ⬇⬇ Bloque centrado */}
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* Columna de contenido */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-extrabold leading-tight tracking-tight text-[#00939e] max-w-7xl mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 uppercase">
                {data.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-normal text-gray-500 max-w-6xl mx-auto leading-relaxed">
                {data.description}
              </p>
            </div>
          </motion.div>

          {/* Contenedor principal de imágenes con altura fija */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={containerVariants}
            className="relative h-96 md:h-[400px] lg:h-[500px]"
          >
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4 h-full"
            >
              {/* Imagen grande izquierda */}
              <div className="relative rounded-xl overflow-hidden">
                <Image
                  src={data.img_1.url || "https://picsum.photos/1000"}
                  alt="Especialista ajustando una prótesis"
                  className="object-cover transition-transform hover:scale-105 duration-300"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Contenedor de las dos imágenes derechas */}
              <div className="flex flex-col space-y-4">
                {/* Primera imagen derecha (superior) */}
                <div className="relative flex-1 rounded-xl overflow-hidden">
                  <Image
                    src={data.img_2.url || "https://picsum.photos/800"}
                    alt="Tecnología protésica avanzada"
                    className="object-cover transition-transform hover:scale-105 duration-300"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                {/* Segunda imagen derecha (inferior) */}
                <div className="relative flex-1 rounded-xl overflow-hidden">
                  <Image
                    src={data.img_3.url || "https://picsum.photos/800"}
                    alt="Equipo internacional de especialistas"
                    className="object-cover transition-transform hover:scale-105 duration-300"
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </div>
            </motion.div>

            {/* Overlay con información */}
            <Card className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-4">
                <motion.p
                  variants={containerVariants}
                  className="text-sm font-medium text-gray-900"
                >
                  {data.span_img}
                </motion.p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
