import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function ProstheticDetailSection() {
  const [activeSection, setActiveSection] = useState("");

  const tableOfContents = [
    { title: "Descripción General", href: "#descripcion", level: 0 },
    { title: "Características", href: "#caracteristicas", level: 0 },
    { title: "1. Materiales Utilizados", href: "#materiales", level: 1 },
    { title: "2. Componentes Principales", href: "#componentes", level: 1 },
    { title: "3. Sistema de Suspensión", href: "#suspension", level: 1 },
    { title: "Proceso de Adaptación", href: "#adaptacion", level: 0 },
    { title: "1. Evaluación Inicial", href: "#evaluacion", level: 1 },
    { title: "2. Toma de Medidas", href: "#medidas", level: 1 },
    { title: "3. Pruebas de Ajuste", href: "#ajuste", level: 1 },
    { title: "Cuidado y Mantenimiento", href: "#cuidado", level: 0 },
    { title: "1. Limpieza Diaria", href: "#limpieza", level: 1 },
    { title: "2. Revisiones Periódicas", href: "#revisiones", level: 1 },
    { title: "Preguntas Frecuentes", href: "#faq", level: 0 }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="container mx-auto max-w-screen-2xl px-4 py-16 sm:px-8 grid lg:grid-cols-[300px_minmax(0,1fr)] gap-8">
      {/* Sidebar Navigation */}
      <motion.aside
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="lg:sticky top-16 z-20 h-[calc(100vh-5rem)] overflow-y-auto pr-4"
      >
        <nav className="space-y-1">
          {tableOfContents.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <a
                href={item.href}
                className={`
                  block py-2 px-3 text-sm rounded-lg transition-all duration-200
                  ${item.level === 1 ? 'ml-4' : 'font-medium'}
                  ${activeSection === item.href.slice(1)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}
                `}
              >
                {item.title}
              </a>
            </motion.div>
          ))}
        </nav>
      </motion.aside>

      {/* Main Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose prose-lg max-w-none lg:pl-8 lg:border-l border-gray-200"
      >
        <div className="space-y-12">
          <header className="mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Prótesis Transfemoral
            </motion.h1>
            <p className="text-xl text-gray-600">
              Detalles técnicos y guía completa sobre la prótesis transfemoral, 
              su funcionamiento y proceso de adaptación.
            </p>
          </header>

          <section id="descripcion" className="scroll-mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Descripción General</h2>
            <p className="text-gray-600 leading-relaxed">
              La prótesis transfemoral está diseñada para pacientes con amputación por encima 
              de la rodilla. Incorpora tecnología avanzada para proporcionar estabilidad, 
              comodidad y un movimiento natural.
            </p>
          </section>

          {/* Agrega aquí más secciones según el tableOfContents */}
          
          <section id="caracteristicas" className="scroll-mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Características</h2>
            {/* Subsecciones de características */}
          </section>

          <section id="adaptacion" className="scroll-mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Proceso de Adaptación</h2>
            {/* Subsecciones de adaptación */}
          </section>

          {/* Puedes continuar agregando más secciones según necesites */}
        </div>
      </motion.article>
    </section>
  );
}