import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const team = [
  {
    name: "Paula Patiño",
    role: "Jefa Biomecánica",
    image: "https://placehold.co/400x350/png", // Reemplazar con la ruta real
    bio: "Especialista en biomecánica con más de 8 años de experiencia en desarrollo de prótesis personalizadas.",
    social: {
      linkedin: "https://linkedin.com/in/paula",
      twitter: "https://twitter.com/paula",
      email: "paula@kyp.com"
    }
  },
  {
    name: "Noe Colla",
    role: "Desarrollo Tecnológico",
    image: "https://placehold.co/400x350/png",
    bio: "Líder en innovación tecnológica aplicada a soluciones protésicas avanzadas.",
    social: {
      linkedin: "https://linkedin.com/in/noe",
      twitter: "https://twitter.com/noe",
      email: "noe@kyp.com"
    }
  },
  {
    name: "Ado Martin",
    role: "Anaplastología",
    image: "https://placehold.co/400x350/png",
    bio: "Experto en prótesis estéticas realistas con atención al detalle y acabados naturales.",
    social: {
      linkedin: "https://linkedin.com/in/ado",
      twitter: "https://twitter.com/ado",
      email: "ado@kyp.com"
    }
  }
];

export function Team() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block text-sm font-medium text-blue-800 sm:text-base lg:text-xl"
          >
            Nuestro equipo
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold mt-2"
          >
            Conozca a nuestro equipo
          </motion.h2>
        </div>

        {/* Grid de equipo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg">
                {/* Imagen */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-primary mt-1">{member.role}</p>
                  
                  {/* Bio con animación */}
                  <motion.p
                    initial={{ height: 0, opacity: 0 }}
                    whileHover={{ height: "auto", opacity: 1 }}
                    className="mt-4 text-sm text-muted-foreground overflow-hidden"
                  >
                    {member.bio}
                  </motion.p>

                  {/* Redes sociales */}
                  <div className="mt-6 flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FaLinkedin size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FaTwitter size={20} />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={`mailto:${member.social.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <FaEnvelope size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}