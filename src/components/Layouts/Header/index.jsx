import { useEffect, useState, useCallback } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import MenuItems from "./menu-Items";
import Image from "next/image";
import MobileMenu from "./menu-mobile";
import { fbEvent } from "@/lib/fpixel";

export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isTop, setIsTop] = useState(true);
  const controls = useAnimation();

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const scrollingUp = currentScrollY < lastScrollY;
    const scrollThreshold = 100;

    // Update scroll direction state
    setIsScrollingUp(scrollingUp);

    // Check if we're at the top of the page
    setIsTop(currentScrollY <= 0);

    // Update header state based on scroll position
    if (currentScrollY <= scrollThreshold) {
      setIsFixed(false);
      controls.start("visible");
    } else if (scrollingUp) {
      setIsFixed(true);
      controls.start("visible");
    } else {
      controls.start("hidden");
    }

    setLastScrollY(currentScrollY);
  }, [lastScrollY, controls]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const headerVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      },
    },
    hidden: {
      y: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 0.8,
      },
    },
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const enviarWhatsapp = (text) => {
    // 🔹 1. Disparar evento al Pixel
    fbEvent("Lead", {
      content_name: text, // ej: "Prótesis transfemoral"
      action: "click_whatsapp", // etiqueta interna para ti
      channel: "web_kyp", // opcional
    });

    // 🔹 2. Abrir WhatsApp como ya lo tienes
    const numero = "51922578858";
    const mensaje = `👋Hola, estoy interesado *${text}*🛍️. ¿Podrías darme más detalles?🤔`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <motion.section
      initial="visible"
      animate={controls}
      variants={headerVariants}
      className={`z-50 w-full ${
        isFixed ? "fixed top-0 left-0 right-0" : "relative"
      }`}
    >
      {/* Progress indicator */}
      {isFixed && (
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-blue-600 origin-left"
          initial={{ scaleX: 0 }}
          animate={{
            scaleX:
              window.scrollY /
              (document.documentElement.scrollHeight - window.innerHeight),
          }}
        />
      )}

      <div
        className={`w-full bg-white/95 backdrop-blur-sm transition-shadow duration-200 ${
          !isTop ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="relative z-10 flex items-center gap-4">
              <div className="relative w-28 md:w-32 aspect-[3/1]">
                <Image
                  src="/img/encabezado.png"
                  alt="KYP Bioingeniería"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 112px, 144px"
                />
              </div>

              {/* Navigation */}
              <div className="hidden lg:block">
                <MenuItems />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Button
                  onClick={() => enviarWhatsapp("(escriba el servicio)")}
                  className="bg-[#00939e] hover:bg-[#006f7a] text-white px-4 py-6 rounded-xl flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                    <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                  </svg>
                  {/* <Phone className="w-4 h-4" /> */}
                  <span className="hidden sm:inline">Contáctenos</span>
                </Button>
              </motion.div>

              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
