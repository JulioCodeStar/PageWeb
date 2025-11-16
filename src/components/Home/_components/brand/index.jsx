import Image from "next/image";

export function BrandSection({ data }) {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 bg-white border-b border-dashed overflow-hidden">
      <div className="mb-8 sm:mb-10 md:mb-12 lg:mb-16 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-extrabold leading-tight tracking-tight text-[#00939e] max-w-7xl mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-4">
          ALIADOS Y CLIENTES DESTACADOS
        </h2>
      </div>
      <div className="w-full relative">
        {/* Contenedor del scroll infinito */}
        <div className="flex animate-scroll hover:pause-animation">
          {/* Primer set de logos */}
          <div className="flex items-center gap-8 px-4">
            {data.Brand.map((brand, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-[180px] h-[120px] flex items-center justify-center px-8 py-6 group"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={brand.logo.url || "/placeholder.svg"}
                    alt={brand.title}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Segundo set de logos (para loop seamless) */}
          <div className="flex items-center gap-8 px-4">
            {data.Brand.map((brand, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-[180px] h-[120px] flex items-center justify-center px-8 py-6 group"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={brand.logo.url || "/placeholder.svg"}
                    alt={brand.title}
                    fill
                    className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
