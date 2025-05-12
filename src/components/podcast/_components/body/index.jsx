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
  {
    id: 2,
    title: "Episodio 2: ADAPTÁNDOME A UNA PRÓTESIS DE MANO PARCIAL | KYP BIOINGENIERÍA",
    description:
      `En este segundo episodio, Renzo nos comparte su experiencia tras perder parte de su mano 🖐️ Nos cuenta cómo fue su adaptación a una prótesis biomecánica de mano parcial y cómo retomó su día a día con confianza y determinación 💪🧩`,
    thumbnail: "/img/podcast/eps.2.png",
    youtubeUrl: "https://www.youtube.com/watch?v=C8JjierSR18",
  },
  {
    id: 3,
    title: "Episodio 3: ADAPTÁNDOME A UNA PRÓTESIS DE PIE CHOPART | KYP BIOINGENIERÍA",
    description:
      `En este episodio, Fredy nos comparte cómo ha sido su proceso de adaptación a una prótesis de pie tipo Chopart tras una amputación parcial del pie 🦶 
      Desde su experiencia personal, nos habla con honestidad sobre los retos físicos y emocionales, y cómo ha ido recuperando su independencia paso a paso 💪🛤️ 
      Nos acompaña también el ingeniero Rony, quien brinda una mirada profesional al caso de Fredy y nos explica conceptos clave como el ciclo de marcha, aportando claridad y contexto técnico de forma accesible 👨‍🔬📊
      Una conversación enriquecedora que combina ciencia, experiencia de vida y esperanza 🙌`,
    thumbnail: "/img/podcast/eps.3.jpg",
    youtubeUrl: "https://www.youtube.com/watch?v=ikw4oByXMYM",
  }
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
