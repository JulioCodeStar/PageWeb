/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";
import { FaQuoteRight } from "react-icons/fa";
import Marquee from "@/components/ui/marquee";
import ReviewCard from "./review-card";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

export function TestimonialsSection() {
    const firstRow = reviews.slice(0, reviews.length / 2);
    const secondRow = reviews.slice(reviews.length / 2);
   
    return (
      <section className="relative overflow-hidden bg-white py-16 sm:py-24">
        <div className="container mx-auto">
          {/* Encabezado */}
          <div className="mb-12 text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="inline-block text-lg font-medium text-blue-800 sm:text-xl"
            >
              Testimonios
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Opiniones de nuestros clientes<br />sobre su prótesis
            </motion.h2>
          </div>
   
          {/* Carrouseles de testimonios */}
          <div className="relative space-y-8">
            <Marquee 
              pauseOnHover 
              className="w-full [--duration:30s]"
            >
              {firstRow.map((review) => (
                <motion.div
                  key={review.name}
                  whileHover={{ scale: 1.02 }}
                  className="mx-4"
                >
                  <ReviewCard {...review} />
                </motion.div>
              ))}
            </Marquee>
   
            <Marquee 
              reverse 
              pauseOnHover 
              className="w-full [--duration:30s]"
            >
              {secondRow.map((review) => (
                <motion.div
                  key={review.name}
                  whileHover={{ scale: 1.02 }}
                  className="mx-4"
                >
                  <ReviewCard {...review} />
                </motion.div>
              ))}
            </Marquee>
   
            {/* Gradientes laterales */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent" />
          </div>
   
          {/* Elemento decorativo */}
          <div className="absolute -bottom-16 -right-16 text-primary/5">
            <FaQuoteRight size={200} />
          </div>
        </div>
      </section>
    );
   }