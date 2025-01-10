/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { FaCheck } from "react-icons/fa";

const features = [
  { title: "Personalización Total" },
  { title: "Materiales de Alta Calidad" },
  { title: "Equipo Profesional Especializado" },
  { title: "Tecnología Avanzada" },
  { title: "Servicio Integral de Rehabilitación" },
  { title: "Atención Rápida y Eficiente" }
];

export function About() {
  return (
    <section className="relative w-full bg-background py-12 sm:py-16 lg:py-24">
      {/* Imagen decorativa background */}
      <div className="absolute right-0 top-0 hidden h-[350px] w-[378px] bg-[url('/img/shape10.png')] bg-no-repeat lg:block" />

      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12 lg:items-center">
          {/* Imagen principal */}
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="https://placehold.co/600x600/png"
              alt="Centro Ortoprotésico"
              width={600}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          {/* Contenido */}
          <div className="space-y-6">
            {/* Etiqueta */}
            <span className="inline-block text-sm font-medium text-blue-800 sm:text-base lg:text-xl">
              Sobre Nosotros
            </span>

            {/* Títulos */}
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Somos el Primer Centro Ortoprotésico en Lima
              </h2>
              <h3 className="text-lg font-medium text-foreground/90 sm:text-xl">
                Ofrecemos servicios integrales de apoyo emocional y rehabilitación para optimizar el uso de tu prótesis.
              </h3>
            </div>

            {/* Descripción */}
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Nos motiva ofrecer a las personas amputadas confianza, tranquilidad y una nueva oportunidad para avanzar con seguridad, 
              a través de prótesis personalizadas que les devuelvan su independencia.
            </p>

            {/* Lista de características */}
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div 
                  key={feature.title} 
                  className="flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <FaCheck className="text-primary" />
                  </div>
                  <span className="text-sm font-medium sm:text-base">
                    {feature.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}