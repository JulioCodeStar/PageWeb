/* eslint-disable @next/next/no-img-element */
import { FaPhoneAlt, FaCalendar, FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";


export const Footer = () => {
  return (
    <footer className="w-full bg-device-950 text-white p-12 lg:px-36">
      <div className="container mx-auto md:grid md:grid-cols-4 md:gap-8 h-auto">
        {/* Primera columna: Logo y descripción */}
        <div className="py-10 md:py-0">
          <Image
            src="/img/kyp_blanco.svg"
            alt="Logo White"
            width={144}
            height={55}
            className="w-36 h-auto"
          />
          <p className="text-white pt-6">
            Nos especializamos al momento de ver cada caso único e inusual en
            Prótesis Superiores, Inferiores y Estéticas.
          </p>

          <div className="flex items-center py-10 md:py-7">
            <Link href="/reclamaciones">
              <Button className="bg-white text-[#2a2a2a] hover:bg-[#009ca6] hover:text-white px-3 py-6 rounded-[10px]">
                <FaBook />
                <span className="ml-2">Libro de Reclamaciones</span>
              </Button>
            </Link>
          </div>
        </div>

        {/* Segunda columna: Horarios */}
        <div className="py-10 md:py-0">
          <span className="font-bold text-white text-xl">Horarios</span>
          <ul className="space-y-2 text-white py-6">
            <li className="flex items-center space-x-2">
              <FaPhoneAlt />
              <span>Teléfono: (+51) 922578858</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCalendar />
              <span>Lunes a Viernes: 9:00 am - 18:00 pm</span>
            </li>
            <li className="flex items-center space-x-2">
              <FaCalendar />
              <span>Sábados: 9:00 am - 13:00 pm</span>
            </li>
          </ul>
        </div>

        {/* Tercera columna: Enlaces */}
        <div className="py-10 md:py-0">
          <span className="font-bold text-white text-xl">Help Link</span>
          <ul className="space-y-2 text-white py-6">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/nosotros">Nosotros</Link>
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
        <div className="py-10 md:py-0">
          <span className="font-bold text-white text-xl">Sedes</span>
          <div className="text-white space-y-3 py-6">
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
          </div>
        </div>
      </div>

      <hr className="w-auto my-6 border-white" />

      {/* Pie de página */}
      <div className="flex items-center justify-center text-white">
        <span className="text-center">
          Copyright © 2024 KYPBioingenieria | All rights reserved
        </span>
      </div>
    </footer>
  )
}
