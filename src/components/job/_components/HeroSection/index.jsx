import Link from "next/link";
import { ChevronRight, Home } from 'lucide-react';
import { motion } from "framer-motion";

export function HeroSection({ data }) {
  
  return (
    <section className="relative h-[400px] md:h-[500px] w-full overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${data[0].img.url}')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-full flex-col items-center justify-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <span cla
              ssName="text-transparent bg-clip-text bg-gradient-to-r from-device-400 to-device-600">
                {data.job}
              </span>
            </h1>
            
            {/* Breadcrumb */}
            <motion.nav 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm"
            >
              <Link 
                href="/" 
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <Home className="h-4 w-4 mr-1" />
                <span>Inicio</span>
              </Link>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-200">Servicios</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <Link 
                href={data.url_title1}
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <span>{data.title1}</span>
              </Link>
              <ChevronRight className="h-4 w-4 text-gray-400" />
              <span className="text-gray-200">{data.job}</span>
            </motion.nav>
          </motion.div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />
    </section>
  )
}
