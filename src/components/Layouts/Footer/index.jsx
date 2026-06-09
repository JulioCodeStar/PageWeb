/* eslint-disable @next/next/no-img-element */
import { FaPhoneAlt, FaCalendar, FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  SALES_PHONE_DISPLAY,
  SALES_PHONE_URL,
} from "@/lib/contact";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#00939e] px-6 pb-24 pt-8 text-white sm:px-8 sm:py-8 md:py-10 lg:px-36">
      <div className="container mx-auto grid h-auto gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-8">
        {/* Primera columna: Logo y descripción */}
        <div>
          <Link href="/" aria-label="Ir al inicio" className="inline-block">
            <Image
              src="/img/kyp_blanco.svg"
              alt="KYP Bioingeniería"
              width={144}
              height={55}
              className="h-auto w-36"
            />
          </Link>
          <p className="pt-4 text-sm leading-relaxed text-white/90">
            Nos especializamos al momento de ver cada caso único e inusual en
            Prótesis Superiores, Inferiores y Estéticas.
          </p>

          <div className="flex items-center pt-6">
            <Link href="/reclamaciones">
              <Button className="bg-white text-[#2a2a2a] hover:bg-[#009ca6] hover:text-white px-3 py-6 rounded-[10px]">
                <FaBook />
                <span className="ml-2">Libro de Reclamaciones</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Segunda columna: Horarios */}
        <div>
          <span className="font-bold text-white text-xl">Horarios</span>
          <ul className="space-y-3 py-4 text-sm text-white/90">
            <li className="flex items-center space-x-2">
              <FaPhoneAlt />
              <a href={SALES_PHONE_URL}>
                Teléfono: {SALES_PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <FaCalendar />
              <span>Lunes a viernes: 9:00 a. m. - 6:00 p. m.</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCalendar />
              <span>Sábados: 9:00 a. m. - 1:00 p. m.</span>
            </li>
          </ul>
        </div>

        {/* Tercera columna: Enlaces */}
        <div>
          <span className="font-bold text-white text-xl">Enlaces útiles</span>
          <ul className="space-y-2 py-4 text-sm text-white/90">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link href="/servicios">Servicios</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contactos">Contactos</Link>
            </li>
          </ul>
        </div>

        {/* Cuarta columna: Sedes */}
        <div>
          <span className="font-bold text-white text-xl">Sedes</span>
          <div className="space-y-3 py-4 text-sm text-white/90">
            <div className="flex items-center space-x-2">
              <FaHome />
              <span>
                Lima - Los Olivos: <br /> Calle Max Palma Arrue 1117
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaHome />
              <span>
                Arequipa: <br /> Urb. El Rosario A-5-2, Cayma
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaHome />
              <span>
                Chiclayo: <br /> Loreto 223, Chiclayo 14009
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <FaHome />
              <span>
                Piura: <br /> Los Rubies W22, 20002
              </span>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-8 w-auto border-white/40" />

      {/* Pie de página */}
      <div className="flex items-center justify-center text-white">
        <span className="text-center">
          Copyright © {new Date().getFullYear()} KYP Bioingeniería. Todos los
          derechos reservados.
        </span>
      </div>
    </footer>
  );
};
