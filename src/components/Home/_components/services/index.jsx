import Image from "next/image";
import Link from "next/link";
import { openWhatsApp } from "@/lib/whatsapp";

export function Services() {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* Título general */}
      <div className="w-full px-4 py-8 text-center sm:py-10">
        <h2 className="mx-auto max-w-7xl px-4 text-xl font-extrabold leading-tight tracking-tight text-[#00939e] sm:text-2xl md:text-3xl lg:text-4xl">
          TIPOS DE PRÓTESIS QUE REALIZAMOS
        </h2>
      </div>

      {/* 1. PRÓTESIS SUPERIOR */}
      <div className="w-full bg-[#00939e] text-white">
        <div className="flex flex-col items-center justify-between gap-5 py-8 sm:gap-8 sm:py-12 lg:flex-row lg:py-16">
          {/* Imagen izquierda, pegada al borde */}
          <div className="relative h-56 w-full sm:h-72 md:w-1/2 lg:h-[380px] lg:w-1/2">
            <div className="absolute inset-0">
              <Image
                src="/img/services/Object.png"
                alt="Prótesis superior biónica"
                fill
                className="object-contain object-center"
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
            <p className="max-w-xl font-serif text-sm italic leading-relaxed text-white/90 sm:text-base">
              Soluciones biónicas personalizadas que favorecen el agarre, la
              precisión y la autonomía en las actividades diarias.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="/servicios/protesis-bionicas"
                className="rounded-full bg-white text-[#00939e] px-6 py-2 text-sm sm:text-base font-semibold shadow-md hover:bg-transparent hover:text-white border border-white transition-colors"
              >
                Más información
              </Link>
              <button
                onClick={openWhatsApp}
                className="rounded-full border border-white px-6 py-2 text-sm sm:text-base font-semibold flex items-center gap-2 hover:bg-white hover:text-[#00939e] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
                <span>Chatea con nosotros</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. PRÓTESIS INFERIOR */}
      <div className="w-full bg-[#f7f7f7]">
        <div className="flex flex-col items-center justify-between gap-5 px-4 py-8 sm:gap-8 sm:px-10 sm:py-12 lg:flex-row lg:px-20 lg:py-16 xl:px-28">
          {/* Texto izquierda */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-4">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide text-[#00939e]">
              PRÓTESIS INFERIOR
            </h3>
            <p className="text-sm sm:text-base font-semibold text-[#00939e]">
              RODILLA DE 4 EJES TOTAL KNEE 2000
            </p>
            <p className="max-w-xl font-serif text-sm italic leading-relaxed text-gray-600 sm:text-base">
              Diseñamos prótesis de pierna a medida para mejorar la
              estabilidad, la comodidad y la confianza al caminar.
            </p>

            <div className="mt-2 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link
                href="/servicios/protesis-de-pierna"
                className="rounded-full bg-[#00939e] text-white px-6 py-2 text-sm sm:text-base font-semibold shadow-md hover:bg-[#006f7a] transition-colors"
              >
                Más información
              </Link>
              <button
                onClick={openWhatsApp}
                className="rounded-full border border-[#00939e] px-6 py-2 text-sm sm:text-base font-semibold flex items-center gap-2 text-[#00939e] hover:bg-[#00939e] hover:text-white transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                  <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
                </svg>
                <span>Chatea con nosotros</span>
              </button>
            </div>
          </div>

          {/* Imagen derecha */}
          <div className="relative h-56 w-full sm:h-72 md:w-1/2 lg:h-[380px] lg:w-1/2">
            <div className="absolute inset-0">
              <Image
                src="/img/services/rodillas.png" // cambia por tu ruta real
                alt="Prótesis inferior con rodilla de 4 ejes"
                fill
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3. PRÓTESIS ESTÉTICA */}
      <div className="relative w-full bg-white overflow-hidden">
        <div className="relative z-10 flex flex-col items-center px-4 py-8 text-center sm:px-10 sm:py-12 lg:px-20 lg:py-16 xl:px-28">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide text-[#00939e] mb-2">
            PRÓTESIS ESTÉTICA
          </h3>
          <p className="mb-6 max-w-xl font-serif text-sm italic leading-relaxed text-gray-600 sm:text-base">
            Nuestras prótesis estéticas combinan un enmallado interno con
            acabados personalizados para lograr mayor naturalidad y
            comodidad.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Link
              href="/servicios/protesis-esteticas"
              className="rounded-full bg-[#00939e] text-white px-6 py-2 text-sm sm:text-base font-semibold shadow-md hover:bg-[#006f7a] transition-colors"
            >
              Más información
            </Link>
            <button
              onClick={openWhatsApp}
              className="rounded-full border border-[#00939e] px-6 py-2 text-sm sm:text-base font-semibold flex items-center gap-2 text-[#00939e] hover:bg-[#00939e] hover:text-white transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
              </svg>
              <span>Chatea con nosotros</span>
            </button>
          </div>

          {/* Imagen central */}
          <div className="relative mb-6 h-48 w-full max-w-md sm:h-56 lg:h-64">
            <Image
              src="/img/services/mano.png" // cambia por tu ruta real
              alt="Prótesis estética de mano y oreja"
              fill
              className="object-contain h-full w-full"
            />
          </div>

          {/* Texto inferior */}
          <div className="rounded-2xl bg-[#007f88] px-6 py-3 text-center font-serif text-sm italic text-white shadow-sm sm:text-base">
            <p>Mayor resistencia, estabilidad y durabilidad</p>
            <p className="text-xs font-normal sm:text-sm">
              sin perder la naturalidad del acabado.
            </p>
          </div>
        </div>

        {/* Degradado inferior a TODO el ancho */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[#00939e]/20" />
      </div>
    </section>
  );
}
