import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const ProblemSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "FISIOTERAPIA",
      description: "La fisioterapia es un paciente amoldado de cintura en cuidar el muñón, fortalecer el cuerpo, prevenir deformidades y preservar el uso de las prótesis para que pueda moverse con seguridad e independencia, acompañándolo también en su adaptación física y emocional.",
      image: "/img/img-problem.png"
    },
    {
      id: 2,
      title: "REHABILITACIÓN",
      description: "Nuestro programa de rehabilitación integral ayuda a los pacientes a recuperar su movilidad y confianza mediante técnicas especializadas y acompañamiento personalizado.",
      image: "/img/img-problem.png"
    },
    {
      id: 3,
      title: "PRÓTESIS",
      description: "Diseñamos y adaptamos prótesis de última generación que se ajustan perfectamente a las necesidades de cada paciente, mejorando su calidad de vida.",
      image: "/img/img-problem.png"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 pt-8 sm:pt-12 lg:pt-16 xl:pt-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 pb-8 sm:pb-12">
          {/* Header */}
          <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-extrabold leading-tight tracking-tight text-[#00939e] max-w-7xl mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-4">
              QUE TIPO DE ATENCIÓN Y PROBLEMA ATENDEMOS
            </h2>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl font-medium text-[#00939e] max-w-6xl mx-auto px-4 leading-relaxed">
              KYP Bioingeniería dedica su experiencia y trabajo a apoyar a las
              personas para que recuperen la confianza, se sientan seguras y
              puedan moverse, sin importar las lesiones o enfermedades que
              afecten su calidad de vida.
            </p>
          </div>
        </div>
      </section>

      {/* Slider Container */}
      <div className="relative">
        {/* Slides */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[550px] lg:h-[600px] xl:h-[660px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-cyan-700">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Overlay oscuro */}
              <div className="absolute inset-0 bg-black/40 sm:bg-black/35 md:bg-black/40" />

              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
                  <div className="max-w-xl sm:max-w-2xl   ml-auto text-white">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-6 leading-tight">
                      {slide.title}
                    </h3>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl leading-relaxed sm:leading-relaxed md:leading-relaxed lg:leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-3 md:left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-2.5 md:p-3 lg:p-4 rounded-full transition-all duration-300 z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-3 md:right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-2 sm:p-2.5 md:p-3 lg:p-4 rounded-full transition-all duration-300 z-10"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 sm:bottom-5 md:bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 z-10">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? "w-8 sm:w-9 md:w-10 lg:w-12 h-2.5 sm:h-2.5 md:h-3 lg:h-3.5 bg-white"
                    : "w-2.5 sm:w-2.5 md:w-3 lg:w-3.5 h-2.5 sm:h-2.5 md:h-3 lg:h-3.5 bg-white/50 hover:bg-white/75"
                }`}
                aria-label={`Ir a slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}