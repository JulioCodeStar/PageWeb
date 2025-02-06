import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import ImageGallery from "./image-gallery";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function MissionVisionSection({ data }) {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-8 sm:mb-12"
        >
          <span className="inline-block text-xs sm:text-sm lg:text-base font-medium text-blue-800 bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full">
            {data.span}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight text-device-900">
            {data.title}
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          {/* Cards Section */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {data.Card.map((feature) => (
              <motion.div variants={item} key={feature.id}>
                <Card className="group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="space-y-1 pb-4">
                    <CardTitle className="flex items-center gap-3 text-lg sm:text-xl lg:text-2xl">
                      <span className="transform transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src={feature.img.url}
                          alt={feature.title}
                          width={24}
                          height={24}
                          className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600"
                        />
                      </span>
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Image Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-3 sm:gap-4 auto-rows-auto"
          >
            <ImageGallery imgs={data.imgs} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}