"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeaderSection({ data }) {
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

  const enviarWhatsapp = (text) => {
    const numero = "51922578858";
    const mensaje = `👋Hola, estoy interesado *${text}*🛍️. ¿Podrías darme más detalles?🤔`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="relative h-[500px] w-full overflow-hidden">
      {/* Video Background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-[500px] object-cover">
        <source src="/video/FondoWeb.mp4" type="video/mp4" />
      </video>

      {/* Overlay oscuro para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenido Principal Centrado */}
      <div className="relative flex items-center justify-center h-[500px]">
        <div className="max-w-4xl px-4 sm:px-6 text-center">
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Badge */}
            <motion.span
              variants={itemVariants}
              className="inline-block text-sm font-medium text-white/70 bg-transparent/20 px-4 py-1.5 rounded-full mb-4 sm:mb-4"
            >
              {data.span}
            </motion.span> 

            {/* Título Principal */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 text-white/90"
            >
              {data.title_1}{" "}
              <span className="block font-medium bg-white/80 bg-clip-text text-transparent">
                {data.title_2}
              </span>
            </motion.h1>

            {/* Descripción */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-white/70 max-w-2xl mb-6 sm:mb-8"
            >
              {data.description}
            </motion.p>

            {/* Botón CTA */}
            <motion.div variants={itemVariants}>
              {data.Button.map((buttontext) => (
                <Button
                  onClick={() => enviarWhatsapp("(Escriba el Servicio)")}
                  key={buttontext.id}
                  className="bg-device-600 hover:bg-device-700 text-white px-6 py-4 sm:py-6 rounded-xl w-64 lg:w-auto"
                >
                  {buttontext.title}
                </Button>
              ))}
            </motion.div>

            {/* Cards - Opcional: si quieres mantener las cards, puedes agregarlas aquí */}
            <motion.div
              className="mt-16"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Aquí puedes agregar tus cards si lo deseas */}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
