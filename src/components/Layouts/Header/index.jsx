import { useEffect, useState, useCallback } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import MenuItems from "./menu-Items";
import Image from "next/image";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              variants={logoVariants}
              initial="initial"
              whileHover="hover"
              className="relative z-10"
            >
              <div className="relative w-28 md:w-36 aspect-[3/1]">
                <Image
                  src="/img/encabezado.png"
                  alt="KYP Bioingeniería"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 112px, 144px"
                />
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="hidden lg:block">
              <MenuItems />
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <motion.div
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                <Button className="bg-device-600 hover:bg-device-700 text-white px-6 py-6 rounded-xl flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="hidden sm:inline">Contáctenos</span>
                </Button>
              </motion.div>

              <motion.button
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
                className="lg:hidden p-2 rounded-xl hover:bg-gray-100"
              >
                <Menu className="w-6 h-6" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
