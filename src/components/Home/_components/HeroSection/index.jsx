import { Button } from "@/components/ui/button";
import Image from "next/image";
import CardInfo from "./card-info";
import { motion } from "framer-motion";

export function HeaderSection({ data }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative min-h-screen w-full bg-gradient-to-b from-white to-blue-50/30 overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 bg-[url('/img/img_hero.png')] bg-center bg-cover bg-no-repeat opacity-30"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      />

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="pt-12 pb-16 sm:pb-20 lg:pb-28">
          <motion.div
            className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between gap-8 lg:gap-12"
            initial="hidden"
            animate="visible"
          >
            {/* Left Content */}
            <motion.div className="flex flex-col items-center text-center lg:items-start lg:text-left w-full lg:w-1/2">
              <span className="inline-block text-sm font-medium text-blue-800 bg-blue-50 px-4 py-1.5 rounded-full mb-4 sm:mb-6">
                {data.span}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
                {data.title_1}{" "}
                <span className="block font-medium bg-device-800 bg-clip-text text-transparent">
                  {data.title_2}
                </span>
              </h1>

              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mb-6 sm:mb-8">
                {data.description}
              </p>

              {/* CTA Button */}
              <motion.div className="w-full sm:w-auto text-center">
                {data.Button.map((buttontext) => (
                  <Button
                    key={buttontext.id}
                    className="bg-device-600 hover:bg-device-700 text-white px-6 py-4 sm:py-6 rounded-xl w-full sm:w-auto"
                  >
                    {buttontext.title}
                  </Button>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="relative w-full max-w-md sm:max-w-xl lg:ml-auto aspect-w-16 aspect-h-9 max-h-80 sm:max-h-96 lg:h-[500px]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Image
                src={data.img.url || "https://placehold.co/600x500/jpg"}
                alt="Hero Image"
                fill
                priority
                quality={100}
                className="object-cover rounded-xl"
              />
            </motion.div>
          </motion.div>

          {/* Card Info */}
          <motion.div
            className="mt-12 sm:mt-16 lg:mt-20"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <CardInfo />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
