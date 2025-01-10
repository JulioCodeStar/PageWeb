import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import CardInfo from "./card-info";

export function HeaderSection() {
  return (
    <section className="relative w-full bg-[url('/img/img_hero.png')] bg-bottom bg-cover bg-no-repeat py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:gap-12">
          {/* Contenido - Lado izquierdo */}
          <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
            <span className="inline-block text-sm font-medium text-blue-800 sm:text-base lg:text-xl">
              Órtesis y Prótesis a Medida en Lima, Perú
            </span>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Recuperemos juntos{" "}
              <span className="font-normal leading-tight underline-offset-8 text-device-800 underline">
                Tu confianza con una Prótesis
              </span>
            </h1>

            <p className="mx-auto max-w-prose text-base text-muted-foreground sm:text-lg lg:mx-0">
              Cupidatat officia est voluptate anim aliquip ut ea cupidatat
              tempor nisi veniam deserunt dolor consectetur. Reprehenderit
              deserunt elit aliquip eiusmod ad culpa. Id labore excepteur velit
              excepteur velit commodo aliqua ullamco ipsum duis. Ad proident
              ipsum laboris excepteur non proident dolor.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button
                className="w-full max-w-sm rounded-full bg-blue-800  px-8 py-6 text-primary-foreground transition-colors hover:bg-blue-600 sm:w-auto"
                asChild
              >
                <Link href="#">Contáctenos</Link>
              </Button>
            </div>
          </div>

          {/* Imagen - Lado derecho */}
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center">
              <Image
                src="https://placehold.co/600x500/jpg"
                alt="Placeholder Hero"
                width={600}
                height={500}
                className="h-auto w-full max-w-xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Card Info component */}
        <div className="mt-12 sm:mt-16 lg:mt-20">
            <CardInfo />
        </div>
      </div>
    </section>
  );
}
