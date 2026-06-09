"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { openWhatsApp } from "@/lib/whatsapp";

export function HeaderSection({ data }) {
  const [shouldPlayVideo, setShouldPlayVideo] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateVideoPreference = () => {
      const saveData = navigator.connection?.saveData;
      setShouldPlayVideo(
        desktopQuery.matches && !reducedMotionQuery.matches && !saveData,
      );
    };

    updateVideoPreference();
    desktopQuery.addEventListener("change", updateVideoPreference);
    reducedMotionQuery.addEventListener("change", updateVideoPreference);

    return () => {
      desktopQuery.removeEventListener("change", updateVideoPreference);
      reducedMotionQuery.removeEventListener("change", updateVideoPreference);
    };
  }, []);

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
    <section className="relative h-[460px] w-full overflow-hidden sm:h-[520px] lg:h-[64svh] lg:min-h-[540px] lg:max-h-[640px]">
      <Image
        src="/img/hero-poster.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {shouldPlayVideo && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/img/hero-poster.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/video/FondoWeb.mp4" type="video/mp4" />
        </video>
      )}

      {/* Overlay oscuro para mejor legibilidad */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Contenido Principal Centrado */}
      <div className="relative flex h-full items-center justify-center">
        <div className="max-w-4xl px-4 sm:px-6 text-center">
          <motion.div
            className="space-y-4 sm:space-y-5"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Badge */}
            <motion.span
              variants={itemVariants}
              className="inline-block rounded-full bg-black/25 px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm sm:text-sm"
            >
              {data.span}
            </motion.span>

            {/* Título Principal */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
            >
              {data.title_1}{" "}
              <span className="block font-medium bg-white/80 bg-clip-text text-transparent">
                {data.title_2}
              </span>
            </motion.h1>

            {/* Descripción */}
            <motion.p
              variants={itemVariants}
              className="mx-auto max-w-2xl text-sm leading-relaxed text-white/90 sm:text-base"
            >
              {data.description}
            </motion.p>

            {/* Botón CTA */}
            <motion.div variants={itemVariants}>
              {data.Button.map((buttontext) => (
                <Button
                  onClick={openWhatsApp}
                  key={buttontext.id}
                  className="bg-device-600 hover:bg-device-700 text-white px-6 py-4 sm:py-6 rounded-xl w-64 lg:w-auto"
                >
                  {buttontext.title}
                </Button>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
