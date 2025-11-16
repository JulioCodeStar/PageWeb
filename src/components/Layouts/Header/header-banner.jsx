import { IoTimeOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

export const HeaderBanner = () => {
  return (
    <header className="bg-[#00939e] w-full">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
          {/* Mobile Info (SM and down) */}
          <div className="flex items-center gap-2 sm:hidden">
            <GoHome className="w-3.5 h-3.5 text-white/90" />
            <span className="text-xs text-white/90">
              Sedes: Lima, Arequipa, Chiclayo y Piura
            </span>
          </div>

          {/* Contact Info (SM and up) */}
          <div className="hidden sm:flex flex-wrap items-center gap-4 md:gap-6 lg:gap-8">
            {/* Schedule */}
            <div className="flex items-center gap-2">
              <IoTimeOutline className="w-4 h-4 text-white/90" />
              <span className="md:text-xs text-white/90">
                Lun - Vie 09:00 - 18:00 / Sáb 09:00 - 13:00
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <MdOutlinePhone className="w-4 h-4 text-white/90" />
              <span className="text-[15px] md:text-xs text-white/90">
                (+51) 922578858
              </span>
            </div>

            {/* Locations */}
            <div className="flex items-center gap-2">
              <GoHome className="w-4 h-4 text-white/90" />
              <span className="text-[15px] md:text-xs text-white/90">
                Sedes: Lima, Arequipa, Chiclayo y Piura
              </span>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center items-center gap-4 sm:gap-5">
            <Link 
              href="https://www.facebook.com/kyp.bio.ingenieria" 
              target="_blank"
              className="text-white/90 hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <FiFacebook className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
            <Link 
              href="https://www.instagram.com/kypbioingenieria/" 
              target="_blank"
              className="text-white/90 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
            <Link 
              href="https://www.linkedin.com/company/kyp-bioingenieria/" 
              target="_blank"
              className="text-white/90 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
            <Link 
              href="https://www.youtube.com/@kypbioingenieria" 
              target="_blank"
              className="text-white/90 hover:text-white transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}