/* eslint-disable @next/next/no-img-element */
import { FaLaptopMedical } from "react-icons/fa";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

const features = [
  {
    icon: <FaLaptopMedical />,
    title: "Experiencia Comprobada",
    description: "Más de 500 pacientes satisfechos con nuestras prótesis personalizadas de alta calidad.",
  },
  {
    icon: <FaLaptopMedical />,
    title: "Tecnología Avanzada",
    description: "Utilizamos las últimas innovaciones en prótesis y sistemas de adaptación para tu máxima comodidad.",
  },
  {
    icon: <FaLaptopMedical />,
    title: "Atención Personalizada",
    description: "Seguimiento completo y adaptación perfecta de tu prótesis por nuestro equipo especializado.",
  },
  {
    icon: <FaLaptopMedical />,
    title: "Facilidad de Pago",
    description: "Sistema de pago conveniente: 50% al iniciar y 50% al entregar tu prótesis personalizada.",
  },
];

const stats = [
  { value: "10", label: "Especialistas" },
  { value: "500", label: "Pacientes Felices" },
  { value: "3", label: "Sedes a nivel Nacional" },
  { value: "12", label: "Aliados que confían" },
];

export function Choose() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-device-950 py-16 sm:py-20 lg:py-24">
        {/* Imágenes de fondo */}
        <div className="absolute right-0 top-0 hidden h-full w-[calc(50%-224px)] bg-cover bg-center bg-no-repeat lg:block" 
             style={{ backgroundImage: "url('https://placehold.co/736x821/svg')" }} />
        <div className="absolute bottom-0 left-0 h-[570px] w-[490px] bg-[url('/img/shape12.png')] bg-no-repeat opacity-70" />

        <div className="container relative mx-auto">
          <div className="lg:w-2/3">
            {/* Encabezado */}
            <div className="mb-12">
              <span className="mb-4 block text-xl text-white sm:text-2xl">
                ¿Por qué elegirnos?
              </span>
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Elige la mejor opción para tu bienestar con tu prótesis
              </h2>
            </div>

            {/* Grid de características */}
            <div className="grid gap-8 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="relative border-b border-white/20 pb-8 pl-24 sm:pl-28"
                >
                  <div className="absolute left-0 top-0 text-6xl text-white transition-all sm:text-7xl">
                    {feature.icon}
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-white sm:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-base text-white/90">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sección de estadísticas */}
      <section className="relative -mt-16 px-4">
        <div className="container mx-auto">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <Card
                key={stat.value}
                className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl"
              >
                <CardHeader className="pb-4">
                  <span className="text-4xl font-medium text-primary sm:text-5xl">
                    <p >{stat.value} </p>
                  </span>
                </CardHeader>
                <CardFooter className="pt-0">
                  <span className="rounded-xl bg-primary/10 px-6 py-2 text-sm font-medium text-primary sm:text-base">
                    {stat.label}
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}