/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import Marquee from "@/components/ui/marquee";
import ReviewCard from "./review-card";


export function TestimonialsSection({ data }) {
    const firstRow = data.Card.slice(0, data.Card.length / 2);
    const secondRow = data.Card.slice(data.Card.length / 2);

    return (
      <section className="relative overflow-hidden bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-8 sm:mb-12 lg:mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block text-xs sm:text-sm lg:text-base font-medium text-blue-800 bg-blue-50 px-3 sm:px-4 py-1.5 rounded-full"
            >
              {data.span}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight tracking-tight text-device-900"
            >
              {data.title}
              {/* Opiniones de nuestros clientes
              <br className="hidden sm:block" />
              sobre su prótesis */}
            </motion.h2>
          </div>
   
          {/* Testimonial Carousels */}
          <div className="relative space-y-6 sm:space-y-8">
            {/* First Row */}
            <div className="relative">
              <Marquee 
                pauseOnHover 
                className="w-full [--duration:40s] sm:[--duration:30s]"
              >
                {firstRow.map((review) => (
                  <motion.div
                    key={review.id}
                    whileHover={{ scale: 1.02 }}
                    className="mx-2 sm:mx-4"
                  >
                    <ReviewCard data={review} />
                  </motion.div>
                ))}
              </Marquee>
              {/* Side Gradients - First Row */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-background to-transparent" />
            </div>

            {/* Second Row */}
            <div className="relative">
              <Marquee 
                reverse 
                pauseOnHover 
                className="w-full [--duration:40s] sm:[--duration:30s]"
              >
                {secondRow.map((review) => (
                  <motion.div
                    key={review.id}
                    whileHover={{ scale: 1.02 }}
                    className="mx-2 sm:mx-4"
                  >
                    <ReviewCard data={review} />
                  </motion.div>
                ))}
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-background to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-background to-transparent" />
            </div>
          </div>
   
          {/* Decorative Quote Icon */}
          <div className="absolute -bottom-8 sm:-bottom-12 lg:-bottom-16 -right-8 sm:-right-12 lg:-right-16 text-primary/5">
            <FaQuoteRight className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40" />
          </div>
        </div>
      </section>
    );
}