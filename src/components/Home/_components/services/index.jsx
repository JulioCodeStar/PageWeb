import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Services() {

  const enviarWhatsapp = (text) => {
    const numero = "51922578858";
    const mensaje = `👋Hola, estoy interesado *${text}*🛍️. ¿Podrías darme más detalles?🤔`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  };

  return (
    <section className="w-full bg-white overflow-hidden">
      {/* Título general */}
      <div className="w-full px-4 py-10 sm:py-12 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-extrabold leading-tight tracking-tight text-[#00939e] max-w-7xl mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-4">
          TIPOS DE PRÓTESIS QUE REALIZAMOS
        </h2>
      </div>

      {/* 1. PRÓTESIS SUPERIOR */}
      <div className="w-full bg-[#00939e] text-white">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-12 sm:py-16 lg:py-20">
          {/* Imagen izquierda, pegada al borde */}
          <div className="relative w-full md:w-1/2 lg:w-1/2 h-72 sm:h-80 lg:h-[420px]">
            <div className="lg:absolute lg:top-0 md:inset-x-52 lg:-inset-y-20">
              <Image
                src="/img/services/Object.png"
                alt="Prótesis superior biónica"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          {/* Texto + botones derecha (con padding) */}
          <div className="w-full lg:w-1/2 px-4 sm:px-10 lg:px-20 xl:px-28 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide">
              PRÓTESIS SUPERIOR
            </h3>
            <p className="text-sm sm:text-base font-semibold">
              PRÓTESIS BIÓNICA
            </p>

            <div className="mt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/servicios/protesis-bionicas"
                className="rounded-full bg-white text-[#00939e] px-6 py-2 text-sm sm:text-base font-semibold shadow-md hover:bg-transparent hover:text-white border border-white transition-colors"
              >
                Más información
              </Link>
              <button
                onClick={() => enviarWhatsapp('Prótesis superior')}
                className="rounded-full border border-white px-6 py-2 text-sm sm:text-base font-semibold flex items-center gap-2 hover:bg-white hover:text-[#00939e] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
                <span>Contáctanos</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. PRÓTESIS INFERIOR */}
      <div className="w-full bg-[#f7f7f7]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 px-4 sm:px-10 lg:px-20 xl:px-28 py-12 sm:py-16 lg:py-20">
          {/* Texto izquierda */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide text-[#00939e]">
              PRÓTESIS INFERIOR
            </h3>
            <p className="text-sm sm:text-base font-semibold text-[#00939e]">
              RODILLA DE 4 EJES TOTAL KNEE 2000
            </p>

            <div className="mt-4 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link
                href="/servicios/protesis-de-pierna"
                className="rounded-full bg-[#00939e] text-white px-6 py-2 text-sm sm:text-base font-semibold shadow-md hover:bg-[#006f7a] transition-colors"
              >
                Más información
              </Link>
              <button
                onClick={() => enviarWhatsapp('Prótesis inferior')}
                className="rounded-full border border-[#00939e] px-6 py-2 text-sm sm:text-base font-semibold flex items-center gap-2 text-[#00939e] hover:bg-[#00939e] hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
                <span>Contáctanos</span>
              </button>
            </div>
          </div>

          {/* Imagen derecha */}
          <div className="relative w-full md:w-1/2 lg:w-1/2 h-72 sm:h-80 lg:h-[420px]">
            <div className="lg:absolute lg:top-0 lg:left-40 md:inset-x-52 lg:-inset-y-20">
              <Image
                src="/img/services/rodillas.png" // cambia por tu ruta real
                alt="Prótesis inferior con rodilla de 4 ejes"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. PRÓTESIS ESTÉTICA */}
      <div className="relative w-full bg-white overflow-hidden">
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-10 lg:px-20 xl:px-28 py-12 sm:py-16 lg:py-20">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide text-[#00939e] mb-2">
            PRÓTESIS ESTÉTICA
          </h3>
          <p className="text-sm sm:text-base text-gray-700 mb-6">
            Nuestras prótesis estéticas cuentan con un enmallado interno.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Link
              href="/servicios/protesis-esteticas"
              className="rounded-full bg-[#00939e] text-white px-6 py-2 text-sm sm:text-base font-semibold shadow-md hover:bg-[#006f7a] transition-colors"
            >
              Más información
            </Link>
            <button
              onClick={() => enviarWhatsapp('Prótesis estética')}
              className="rounded-full border border-[#00939e] px-6 py-2 text-sm sm:text-base font-semibold flex items-center gap-2 text-[#00939e] hover:bg-[#00939e] hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
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
              <span>Contáctanos</span>
            </button>
          </div>

          {/* Imagen central */}
          <div className="relative w-full max-w-md h-56 sm:h-64 lg:h-72 mb-8">
            <Image
              src="/img/services/mano.png" // cambia por tu ruta real
              alt="Prótesis estética de mano y oreja"
              fill
              className="object-contain h-full w-full"
            />
          </div>

          {/* Texto inferior */}
          <div className="text-[#ffffff] text-center text-xs sm:text-sm font-medium">
            <p>mayor resistencia, estabilidad y durabilidad</p>
            <p className="text-[11px] sm:text-xs font-normal">
              sin perder la naturalidad en el acabado.
            </p>
          </div>
        </div>

        {/* Degradado inferior a TODO el ancho */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent via-[#00939e]/40 to-[#00939e]" />
      </div>
    </section>
  );
}
