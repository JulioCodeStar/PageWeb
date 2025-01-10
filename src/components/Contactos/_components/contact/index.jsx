import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Phone, MapPin, Mail } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  {
    title: "Llámanos",
    subtitle: "Oficina Principal",
    details: "+1 (234) 567-8901",
    icon: <Phone className="w-6 h-6" />,
    color: "bg-blue-600"
  },
  {
    title: "Visítanos",
    subtitle: "Ubicación",
    details: "123 Business Avenue, Lima, Perú",
    icon: <MapPin className="w-6 h-6" />,
    color: "bg-green-600"
  },
  {
    title: "Escríbenos",
    subtitle: "Email",
    details: "contacto@kypbioingenieria.com",
    icon: <Mail className="w-6 h-6" />,
    color: "bg-purple-600"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function Contact() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 space-y-4"
        >
          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Pongámonos en contacto
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para responder tus preguntas y ayudarte en lo que necesites
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {contactInfo.map((info) => (
            <motion.div key={info.title} variants={item}>
              <Card className="group hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <h3 className="text-xl font-semibold text-gray-900">{info.title}</h3>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className={`h-14 w-14 ${info.color} rounded-full flex items-center justify-center text-white transform transition-transform duration-300 group-hover:scale-110`}>
                      {info.icon}
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-gray-600">{info.subtitle}</h4>
                      <p className="text-base text-gray-900">{info.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}