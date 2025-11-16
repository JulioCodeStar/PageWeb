import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export function CasoExitoSection({ data }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const slides = data?.Slide || [];

  useEffect(() => {
    if (!isAutoplay || slides.length === 0) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoplay, slides.length]);

  const next = () => {
    if (slides.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setIsAutoplay(false);
  };

  const prev = () => {
    if (slides.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoplay(false);
  };

  const currentSlide = slides[currentIndex] || {};

  const getImageUrl = (slide) => {
    return slide?.img?.url || "https://picsum.dev/1024/1024";
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="mb-12 md:mb-14 lg:mb-20 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-extrabold leading-tight tracking-tight text-[#00939e] max-w-7xl mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-4 uppercase">
            {data.title}
          </h2>
        </div>

        {/* Slider centrado */}
        <div className="mx-auto max-w-6xl">
          <div className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 rounded-3xl border border-primary/10 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[500px] md:min-h-[600px]">
              {/* Imagen */}
              <div className="relative h-80 md:h-full overflow-hidden bg-muted">
                <Image
                  src={getImageUrl(currentSlide)}
                  alt={currentSlide?.title || "Caso de éxito"}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>

              {/* Contenido */}
              <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16 bg-background">
                {/* Badge */}
                <div className="inline-flex w-fit items-center gap-2 mb-6 px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
                  <span className="text-xs md:text-sm font-semibold text-secondary">
                    {currentSlide?.label}
                  </span>
                </div>

                {/* Título y subtítulo */}
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2">
                  {currentSlide?.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground font-medium mb-6">
                  {currentSlide?.subtitle}
                </p>

                {/* Testimonio */}
                <div className="mb-8 pb-8 border-b border-muted">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed italic">
                    {currentSlide?.description}
                  </p>
                </div>

                {/* Navegación */}
                <div className="flex items-center justify-between mt-auto pt-6">
                  <div className="flex gap-3">
                    <button
                      onClick={prev}
                      className="p-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200"
                      aria-label="Caso anterior"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={next}
                      className="p-3 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground transition-colors duration-200"
                      aria-label="Siguiente caso"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {/* Indicadores */}
                  <div className="flex gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setCurrentIndex(index);
                          setIsAutoplay(false);
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          index === currentIndex
                            ? "bg-primary w-8"
                            : "bg-gray-200 w-2 hover:bg-muted/70"
                        }`}
                        aria-label={`Ir al caso ${index + 1}`}
                      />
                    ))}
                  </div>

                  {/* Contador */}
                  <div className="text-sm font-medium text-muted-foreground">
                    {slides.length > 0 ? (
                      <>
                        {currentIndex + 1} de {slides.length}
                      </>
                    ) : (
                      "0 de 0"
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
