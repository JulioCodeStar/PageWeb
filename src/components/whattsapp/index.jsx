"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import {
  SALES_PHONE_DISPLAY,
  SALES_PHONE_URL,
} from "@/lib/contact";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            className="relative w-[calc(100vw-2rem)] max-w-[350px] overflow-hidden rounded-xl bg-white shadow-lg"
          >
            <div className="bg-green-500 p-6 text-white">
              <div className="flex items-center gap-3">
                <FaWhatsapp className="h-6 w-6" />
                <h3 className="font-medium">Chatea con nosotros</h3>
              </div>
              <p className="mt-2 text-sm">
                Escríbenos por WhatsApp o llama directamente a nuestro equipo
                de ventas.
              </p>
            </div>
            <div className="px-6 py-3 text-sm text-gray-500">
              El equipo suele responder en unos minutos.
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border-t px-6 py-4 hover:bg-gray-50"
            >
              <FaWhatsapp className="h-9 w-9 text-green-500" />
              <div>
                <div className="font-medium">Chatea con nosotros</div>
                <div className="text-sm text-gray-500">WhatsApp y citas</div>
              </div>
              <FaWhatsapp className="ml-auto h-5 w-5 text-green-500" />
            </a>
            <a
              href={SALES_PHONE_URL}
              className="flex items-center gap-3 border-t px-6 py-4 hover:bg-gray-50"
            >
              <PhoneIcon className="h-9 w-9 text-[#00939e]" />
              <div>
                <div className="font-medium">Llámanos</div>
                <div className="text-sm text-gray-500">
                  {SALES_PHONE_DISPLAY}
                </div>
              </div>
              <PhoneIcon className="ml-auto h-5 w-5 text-[#00939e]" />
            </a>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white hover:opacity-75"
            >
              <span className="sr-only">Cerrar</span>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </motion.div>
        ) : (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => setIsOpen(true)}
            aria-label="Abrir opciones de contacto"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl hover:bg-green-600 sm:h-auto sm:w-auto sm:gap-2 sm:bg-white sm:px-6 sm:py-3 sm:text-gray-900 sm:hover:bg-gray-50"
          >
            <FaWhatsapp className="h-7 w-7 sm:h-6 sm:w-6 sm:text-green-500" />
            <span className="hidden text-sm sm:inline">
              ¿Necesitas ayuda?{" "}
              <span className="text-green-500 font-medium">
                Chatea con nosotros
              </span>
            </span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default WhatsAppButton;
