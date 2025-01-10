import { IoTimeOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

export const HeaderBanner = () => {
  return (
    <header className="bg-device-950 h-auto py-2 px-4 md:py-4 xl:px-28">
      <div className="container w-full mx-auto flex flex-col items-center justify-center text-white gap-1 md:justify-between md:flex-row">
        {/* Información visible solo en móviles */}
        <div className="md:hidden flex items-center gap-2">
          <GoHome />
          <span className="text-xs">Sedes: Lima, Arequipa y Chiclayo</span>
        </div>

        {/* Información visible desde md en adelante */}
        <div className="hidden md:flex gap-8 items-center">
          <div className="flex items-center gap-2">
            <IoTimeOutline />
            <span className="text-sm">
              Lunes - Viernes 09:00 - 18:00 / Sábado 09:00 - 13:00
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlinePhone />
            <span className="text-sm">Teléfono: (+51) 922578858</span>
          </div>
          <div className="flex items-center gap-2">
            <GoHome />
            <span className="text-sm">
              Sedes: Lima, Arequipa y Chiclayo
            </span>
          </div>
        </div>

        {/* Redes sociales visibles desde md en adelante */}
        <div className="hidden md:flex justify-center items-center gap-6">
          <Link href="#" target="_blank">
            <FiFacebook />
          </Link>
          <Link href="#" target="_blank">
            <FaInstagram />
          </Link>
          <Link href="#" target="_blank">
            <FaLinkedinIn />
          </Link>
          <Link href="#" target="_blank">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </header>
  )
}
