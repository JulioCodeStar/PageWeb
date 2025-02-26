import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

export function BrandSection({ data }) {
  const plugin = useRef(Autoplay({ delay: 2500, stopOnInteraction: false }));

  return (
    <section className="w-full py-12 sm:py-16 lg:py-24 bg-white border-b border-dashed">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Carousel
          opts={{
            align: "center",
            loop: true,
            skipSnaps: false,
            dragFree: true,
          }}
          plugins={[plugin.current]}
          className="w-full cursor-grab active:cursor-grabbing"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {data.Brand.map((brand, index) => (
              <CarouselItem
                key={index}
                className="pl-2 md:pl-4 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="border-0 shadow-none overflow-hidden">
                  <div className="relative flex items-center justify-center p-4 group h-[120px]">
                    <div className="relative w-full h-full flex flex-col items-center justify-center">
                      <Image
                        src={brand.logo.url || "/placeholder.svg"}
                        alt={brand.title}
                        width={200}
                        height={80}
                        className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                      />
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
