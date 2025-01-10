import { Check } from "lucide-react";
import Image from "next/image";

const features = [
  { title: "Personalización Total" },
  { title: "Materiales de Alta Calidad" },
  { title: "Equipo Profesional Especializado" },
];

export function SomosSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-100 rounded-3xl opacity-20 transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="https://placehold.co/600x562/png" 
                alt="KYP Bioingeniería Innovación"
                width={600}
                height={562}
                className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <span className="inline-block text-sm font-medium text-blue-800 sm:text-base lg:text-xl">
              KYP Bioingeniería
            </span>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Innovando en Prótesis en Perú desde 2018
            </h2>

            <p className="mx-auto max-w-prose text-base text-muted-foreground sm:text-lg lg:mx-0">
              KYP Bioingeniería nació con la visión de mejorar la calidad de vida de las personas con discapacidad física, enfocándose en brindar soluciones innovadoras y personalizadas. Desde sus inicios, la empresa ha trabajado para posicionarse como un referente en el sector de prótesis en Perú. Con un enfoque en la excelencia y la innovación tecnológica, KYP Bioingeniería ha ampliado su alcance, ofreciendo prótesis de pierna, brazo y estéticas a pacientes de todo el país. Su trayectoria se caracteriza por un compromiso constante con la mejora continua, logrando combinar la tecnología avanzada con un trato humano y empático que distingue a la empresa.
            </p>

            <ul className="space-y-4 mt-4">
              {features.map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-center gap-4 group"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center transition-colors duration-200 group-hover:bg-blue-200">
                    <Check className="w-5 h-5 text-blue-600" />
                  </span>
                  <span className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                    {feature.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}