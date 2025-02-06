import { Check } from "lucide-react";
import Image from "next/image";


export function SomosSection({ data }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Image Container */}
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-100 rounded-3xl opacity-20 transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="aspect-[16/15]">
                <Image 
                  src={data.img.url} 
                  alt="KYP Bioingeniería Innovación"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Content Container */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <div>
              <span className="inline-block text-xs sm:text-sm lg:text-base text-center font-medium text-blue-800 bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full">
                {data.span}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight text-device-900">
              {data.title}
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground text-center lg:text-left">
              {data.des}
            </p>

            <ul className="space-y-3 sm:space-y-4 mt-2 sm:mt-4">
              {data.List.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3 sm:gap-4 group"
                >
                  <span className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100 flex items-center justify-center transition-colors duration-200 group-hover:bg-blue-200">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                  </span>
                  <span className="text-base sm:text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                    {feature.item}
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