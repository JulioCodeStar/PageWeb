import { motion } from "framer-motion";
import Image from "next/image";

export function SkillSection({ data }) {
  const proofPoints = [
    { value: "500+", label: "pacientes atendidos" },
    { value: "10+", label: "especialistas" },
    { value: "4", label: "sedes en Perú" },
  ];

  return (
    <section className="bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center lg:items-start space-y-8"
          >
            {/* Header */}
            <div className="text-center lg:text-left space-y-4">
              <span className="inline-block text-xs sm:text-sm lg:text-base font-medium text-blue-800 bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full">
                {data.span}
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight text-device-900">
                {data.title}
              </h2>
            </div>

            {/* Skills List */}
            <div className="grid w-full gap-4">
              {data.Porcentaje.map((skill, index) => (
                <motion.div
                  key={skill.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <div className="mb-3 flex items-center gap-4">
                    <span className="min-w-20 text-2xl font-extrabold text-[#00939e] sm:text-3xl">
                      {proofPoints[index]?.value || "KYP"}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-gray-900 sm:text-lg">
                        {skill.title}
                      </h3>
                      <span className="text-sm font-medium text-[#006f7a]">
                        {proofPoints[index]?.label || "atención personalizada"}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                    {skill.paragraph}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group mx-auto max-w-2xl lg:max-w-none"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <div className="aspect-[4/3] lg:aspect-square">
                <Image
                  priority
                  src={data.img.url || "https://placehold.co/600x600/png"}
                  alt="Profesional ejecutivo"
                  width={600}
                  height={600}
                  className="w-full h-auto transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
