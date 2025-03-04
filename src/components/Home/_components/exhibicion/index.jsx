"use client";

import { useState } from "react";
import Image from "next/image";

export function ExhibicionSection({ data }) {
  
  const [activeItem, setActiveItem] = useState(data.Card[0]);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section className="w-full bg-gradient-to-b from-white to-gray-50  py-20">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 mb-16 text-center">
        <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm mb-6 transform hover:scale-105 transition-transform duration-300">
          {data.span}
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
          {data.title1}{" "}
          <span className="text-device-900">{data.title2}</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Gallery Section */}
      <div className="mx-auto max-w-7xl px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
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
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Banner */}
      {/* <div className="bg-gradient-to-r from-device-600 to-device-800 py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Innovación al servicio de la movilidad
          </h3>
          <p className="text-lg text-blue-100 leading-relaxed mb-8">
            Nuestras prótesis de rodilla combinan tecnología de vanguardia con
            años de investigación para ofrecer soluciones que mejoran la calidad
            de vida de nuestros pacientes.
          </p>
          <button className="px-8 py-3 bg-white text-device-800 font-medium rounded-full transform transition-transform hover:scale-105 hover:shadow-lg">
            Solicitar información
          </button>
        </div>
      </div> */}
    </section>
  );
}
