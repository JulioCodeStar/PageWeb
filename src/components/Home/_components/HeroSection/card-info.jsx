import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CiMedicalCase } from "react-icons/ci";
import { motion } from "framer-motion";

const infos = [
  {
    icon: <CiMedicalCase />,
    title: "Apoyo Emocional",
    description: "Brindamos apoyo emocional para facilitar la adaptación y fomentar la confianza en el uso de la prótesis.",
  },
  {
    icon: <CiMedicalCase />,
    title: "Atención Fisioterapéutica",
    description: "Incluimos rehabilitación antes y después de la prótesis para mejorar la adaptación y la marcha de nuestros pacientes.",
  },
  {
    icon: <CiMedicalCase />,
    title: "Equipos de adaptación",
    description: "Disponemos de equipos diseñados para mejorar la marcha, la adaptación y la confianza de los pacientes al practicar con sus prótesis.",
  },
  {
    icon: <CiMedicalCase />,
    title: "Sesiones programadas",
    description: "Atendemos mediante citas para garantizar un servicio ordenado y de calidad durante el proceso de elaboración de prótesis.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const MotionCard = motion(Card);

export default function CardInfo() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {infos.map((info, index) => (
            <MotionCard
              key={info.title}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group w-full bg-white/50 backdrop-blur-sm border border-blue-100 shadow-lg shadow-blue-100/20 transition-all duration-300"
            >
              <CardHeader className="flex items-center justify-center">
                <motion.div 
                  className="h-16 w-16 rounded-full bg-gradient-to-br from-device-50 to-white flex items-center justify-center shadow-inner"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div 
                    className="text-4xl text-device-800"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {info.icon}
                  </motion.div>
                </motion.div>
              </CardHeader>

              <CardContent>
                <motion.h2 
                  className="text-xl font-semibold text-center mb-2 bg-gradient-to-r from-device-800 to-device-600 bg-clip-text text-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 * index }}
                >
                  {info.title}
                </motion.h2>
              </CardContent>

              <CardFooter>
                <p className="text-sm text-center text-muted-foreground">
                  {info.description}
                </p>
              </CardFooter>

              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-device-800 to-device-600 opacity-0 rounded-lg transition-opacity duration-300 -z-10"
                whileHover={{ opacity: 0.97 }}
              />

              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              >
                <CardContent className="h-full flex flex-col justify-center">
                  <h2 className="text-xl font-semibold text-center mb-2 text-white">
                    {info.title}
                  </h2>
                  <p className="text-sm text-center text-white/90">
                    {info.description}
                  </p>
                </CardContent>
              </motion.div>
            </MotionCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}