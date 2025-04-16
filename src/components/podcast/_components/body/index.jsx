import { EpisodeCard } from "./episodeCard";

const episodes = [
  {
    id: 1,
    title: "Episodio 1: ADAPTANDOME A MI PRÓTESIS TRANSTIBIAL | KYP BIOINGENIERÍA",
    description:
      `En este primer episodio, Renys nos cuenta cómo cambió su vida después de la amputación 🦿\nNos habla de su adaptación a la prótesis y cómo decidió fabricar la suya propia 💪🔧\n\nUna historia real, inspiradora y llena de aprendizajes 🙌 .`,
    thumbnail: "/img/podcast/eps.1.png",
    youtubeUrl: "https://www.youtube.com/watch?v=hpD7YaWfu7A&list=PLG_K7NnvwwWtvZGuj3X2kV75AnORZuws4&index=2&t=601s",
  },
];

export function BodySection() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Nuestros Episodios
        </h1>

        <div className="space-y-8">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    </section>
  );
}
