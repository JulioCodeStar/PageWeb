"use client";

import { useState } from "react";
import Image from "next/image";

export function ExhibicionSection({ data }) {
  const [activeItem, setActiveItem] = useState(data.Card[0]);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50 py-20">
      {/* Header */}
      <div className="mx-auto max-w-4xl px-4 mb-16 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-extrabold leading-tight tracking-tight text-[#00939e] max-w-7xl mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 px-4 uppercase">
          {data.title1}{" "}
          <span className="text-[#00939e]">{data.title2}</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Gallery Section */}
      <div className="mx-auto max-w-8xl px-4 mb-20">
        {/* ⬇⬇ Bloque centrado como en los otros componentes */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Main Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px] transform transition-all duration-500 hover:shadow-blue-200">
            <Image
              src={activeItem.img?.url}
              alt={activeItem.img?.name}
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-80" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/20">
                <h3 className="text-3xl font-bold text-white mb-3">
                  {activeItem.title}
                </h3>
                <p className="text-white/90 mb-4">{activeItem.description}</p>
                <ul className="space-y-2">
                  {activeItem.List?.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-white/80">
                      <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                      {feature.item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-2 gap-4">
            {data.Card.map((item) => (
              <div
                key={item.id}
                className={`
                  relative rounded-2xl overflow-hidden cursor-pointer h-[280px] 
                  transition-all duration-300 transform
                  ${
                    activeItem.id === item.id
                      ? "ring-4 ring-device-600 scale-105"
                      : "hover:scale-102"
                  }
                  shadow-lg hover:shadow-xl
                `}
                onMouseEnter={() => {
                  setActiveItem(item);
                  setIsHovering(true);
                }}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => setActiveItem(item)}
              >
                <Image
                  src={item.img?.url}
                  alt={item.img?.name}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h4 className="text-lg font-bold text-white">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
