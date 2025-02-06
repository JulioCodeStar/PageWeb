import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageGallery({ imgs }) {
  const getImagesByDimensions = () => {
    const verticalImages = imgs.filter((img) => {
      const aspectRatio = img.width / img.height;
      return aspectRatio < 1; // 260x332 images (3/4 aspect ratio)
    });

    const horizontalImages = imgs.filter((img) => {
      const aspectRatio = img.width / img.height;
      return aspectRatio > 1; // 280x198 images (4/3 aspect ratio)
    });

    return {
      vertical: verticalImages,
      horizontal: horizontalImages,
    };
  };

  const { vertical, horizontal } = getImagesByDimensions();

  return (
    <>
      {/* Left Column */}
      <div className="grid gap-3 sm:gap-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src={vertical[0]?.formats.large?.url || vertical[0]?.url}
            alt="Innovación en prótesis"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src={horizontal[0]?.formats.large?.url || horizontal[0]?.url}
            alt="Equipo profesional"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Right Column */}
      <div className="grid gap-3 sm:gap-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src={horizontal[1]?.formats.large?.url || horizontal[1]?.url}
            alt="Tecnología avanzada"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
            loading="lazy"
          />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src={vertical[1]?.formats.large?.url || vertical[1]?.url}
            alt="Atención personalizada"
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </>
  );
}
