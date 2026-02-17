"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";

const cards = [
  {
    id: "video1",
    title: "Nuevo sistema de ajuste",
    subtitle: "RevoFit",
    poster: "/img/revofit/carrusel_revofit.jpg",
    src: "/video/IMG_3883.MP4",
  },
  {
    id: "video2",
    title: "Sistema RevoFit",
    subtitle: "Ajuste inmediato",
    poster: "/img/revofit/portada_video.png",
    src: "/video/IMG_3552.MP4",
  },
  {
    id: "video3",
    title: "RevoFit en acción",
    subtitle: "Más control",
    poster: "/img/revofit/portada_verofit.png",
    src: "/video/Video_Revofit.mp4",
  },
];

// Convierte URL normal de YouTube a embed (si ya tienes embed, lo deja)
function toYoutubeEmbed(url) {
  if (!url) return "";
  if (url.includes("youtube.com/embed/")) return url;

  const short = url.match(/youtu\.be\/([^?]+)/)?.[1];
  const long = url.match(/[?&]v=([^&]+)/)?.[1];
  const id = short || long;

  return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0` : url;
}

export function BodySection() {
  const [activeCardId, setActiveCardId] = useState(null);
  const [episodePlaying, setEpisodePlaying] = useState(false);

  const videoRefs = useRef({});

  // ✅ EPISODIO 5 (pon tu URL real)
  const youtubeUrl = "https://www.youtube.com/embed/oJSlI-z_THI?si=BwHwLbCLXDVB76tu"; // <-- cambia
  const embedUrl = useMemo(() => toYoutubeEmbed(youtubeUrl), [youtubeUrl]);

  const handlePlayCard = (id) => {
    // Pausa los otros videos
    Object.entries(videoRefs.current).forEach(([key, video]) => {
      if (key !== id && video && !video.paused) video.pause();
    });

    // Si estaba el episodio reproduciendo, lo “cerramos”
    if (episodePlaying) setEpisodePlaying(false);

    setActiveCardId(id);

    requestAnimationFrame(() => {
      const v = videoRefs.current[id];
      if (v) v.play().catch(() => {});
    });
  };

  const closeCard = () => setActiveCardId(null);

  return (
    <section className="relative bg-[#01767F] py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Título */}
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Revo<span className="text-[#BCC100]">Fit</span>
        </h2>

        {/* Texto */}
        <p className="mx-auto mt-4 max-w-3xl text-center text-white/85 text-sm sm:text-base leading-relaxed">
          RevoFit de Click Medical ofrece una solución innovadora con ajuste rápido, cómodo y seguro.
          Descubre cómo puede transformar la atención ortésica y protésica.
        </p>

        {/* ====== 3 CARDS ====== */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cards.map((it) => {
            const isActive = activeCardId === it.id;

            return (
              <article
                key={it.id}
                className="group relative overflow-hidden rounded-2xl bg-black/15 ring-1 ring-white/10"
              >
                <div className="relative aspect-[3/4] w-full">
                  {!isActive ? (
                    <>
                      <Image
                        src={it.poster}
                        alt={it.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/25" />

                      <button
                        type="button"
                        onClick={() => handlePlayCard(it.id)}
                        className="absolute inset-0 flex items-center justify-center"
                        aria-label={`Reproducir ${it.title}`}
                      >
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition group-hover:scale-105">
                          <svg viewBox="0 0 24 24" className="h-7 w-7 translate-x-[1px]" fill="currentColor">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </span>
                      </button>

                      <div className="absolute bottom-0 left-0 right-0 p-4">
                        <p className="text-white/90 text-xs uppercase tracking-wider">{it.subtitle}</p>
                        <h3 className="mt-1 text-white font-bold text-lg leading-tight">{it.title}</h3>
                      </div>
                    </>
                  ) : (
                    <>
                      <video
                        ref={(el) => (videoRefs.current[it.id] = el)}
                        src={it.src}
                        controls
                        autoPlay
                        playsInline
                        className="absolute inset-0 h-full w-full object-cover"
                        onEnded={closeCard}
                      />

                      <button
                        type="button"
                        onClick={closeCard}
                        className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-2 text-white text-xs ring-1 ring-white/20"
                      >
                        Cerrar
                      </button>
                    </>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* ====== EPISODIO 5 (misma sección) ====== */}
        <div className="mt-10">
          <div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-black/10">
            <div className="relative aspect-[16/7] w-full">
              {!episodePlaying ? (
                <>
                  <Image
                    src="/img/revofit/Miniatura.jpg"
                    alt="Episodio 5 - RevoFit"
                    fill
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/35" />

                  <div className="absolute inset-x-0 top-0 p-6 sm:p-8">
                    <p className="text-white/90 font-extrabold tracking-widest text-[clamp(16px,2.2vw,32px)]">
                      EPISODIO 5
                    </p>
                    <p className="mt-2 max-w-3xl text-white font-extrabold uppercase leading-tight text-[clamp(14px,1.8vw,22px)]">
                      EL NUEVO SISTEMA REVOFIT LO CAMBIA TODO
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      // si algún card estaba activo, lo cerramos
                      setActiveCardId(null);
                      setEpisodePlaying(true);
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                    aria-label="Reproducir Episodio 5"
                  >
                    <span className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/90 shadow-xl hover:scale-105 transition">
                      <svg viewBox="0 0 24 24" className="h-8 w-8 translate-x-[1px]" fill="currentColor">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </button>
                </>
              ) : (
                <>
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={embedUrl}
                    title="Episodio 5 - RevoFit"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />

                  <button
                    type="button"
                    onClick={() => setEpisodePlaying(false)}
                    className="absolute right-3 top-3 rounded-full bg-black/60 px-3 py-2 text-white text-xs ring-1 ring-white/20"
                  >
                    Cerrar
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
