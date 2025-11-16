"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import configAxios from "@/config/configAxios";
import { useState, useEffect } from "react";

export function BlogSection() {
  const [currentData, setCurrentData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await configAxios.get(
        "blogs?fields[0]=date&fields[1]=title&fields[2]=author&fields[3]=excert&fields[4]=slug&populate=*"
      );
      setCurrentData(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="bg-gray-50 overflow-hidden">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center space-y-4 mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-extrabold leading-tight tracking-tight text-[#00939e] max-w-7xl mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-4 uppercase" >
            Artículos recientes sobre prótesis y sus usuarios
          </h2>
        </div>

        {/* Blog Carousel centrado */}
        <div className="mx-auto max-w-6xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-1">
              {currentData?.map((blog) => (
                <CarouselItem
                  key={blog.title}
                  className="pl-1 md:basis-1/2 lg:basis-1/3 px-4"
                >
                  <article className="group flex flex-col bg-white rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg overflow-hidden h-full">
                    {/* Image Container */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        src={
                          blog.feature_img?.[0]?.url ||
                          "https://picsum.photos/1000"
                        }
                        alt={blog.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        priority
                      />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col flex-grow p-4 sm:p-6">
                      {/* Meta Info */}
                      <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">
                        <time dateTime={blog.date}>{blog.date}</time>
                        <span aria-hidden="true">•</span>
                        <span>{blog.author}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                        <Link href={blog.slug} className="hover:underline">
                          {blog.title}
                        </Link>
                      </h3>

                      {/* Description */}
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-2 flex-grow">
                        {blog.excert}
                      </p>

                      {/* CTA Link */}
                      <Link
                        href={blog.slug}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors group/link"
                      >
                        Ver más
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
