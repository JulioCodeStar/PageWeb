"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneIcon } from "lucide-react";

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
            className="bg-white rounded-xl shadow-lg w-[350px] overflow-hidden"
          >
            <div className="bg-green-500 p-8 text-white">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6" />
                <h3 className="font-medium">Comenzar una conversación</h3>
              </div>
              <p className="mt-2 text-sm">
                ¡Hola! Haz clic en uno de nuestros miembros de abajo para
                chatear por WhatsApp
              </p>
            </div>
            <div className="px-8 py-4 text-sm text-gray-500">
              El equipo suele responder en unos minutos.
            </div>
            <a
              href="https://wa.me/51922578858" // Reemplaza con tu número
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 hover:bg-gray-50 border-t"
            >
              <PhoneIcon className="w-10 h-10 text-green-500" />
              <div>
                <div className="font-medium">Ventas</div>
                <div className="text-sm text-gray-500">Citas</div>
              </div>
              <PhoneIcon className="w-5 h-5 text-green-500 ml-auto" />
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
            className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-2xl hover:bg-gray-50"
          >
            <PhoneIcon className="w-6 h-6 text-green-500" />
            <span className="text-sm">
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
