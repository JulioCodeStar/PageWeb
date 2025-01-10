import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Clock, Phone } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

const locations = [
  {
    id: "sede-lima",
    titulo: "Sede de Lima",
    descripcion: "Nuestra sede principal en la capital del Perú",
    direccion: "Calle Max Palma Arrué Lote 35, Lima 15023, Los Olivos 15302",
    horario: "Lun - Vie: 9:00 AM - 6:00 PM, Sab: 9:00 AM - 1:00 PM",
    telefono: "(01) 123-4567",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.7502837377515!2d-77.07165472493972!3d-11.9917732882407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf294ecde16d%3A0x85afc65f98495700!2sKYP%20Bioingenier%C3%ADa%20-%20Pr%C3%B3tesis%20de%20pierna%2C%20brazo%20y%20est%C3%A9tica!5e0!3m2!1ses!2spe!4v1732813342395!5m2!1ses!2spe"
  },
  {
    id: "sede-arequipa",
    titulo: "Sede de Arequipa",
    descripcion: "Nuestra sede en la Ciudad Blanca",
    direccion: "Urb. El Rosario A-5-2 - Cayma, Arequipa",
    horario: "Lun - Vie: 9:00 AM - 6:00 PM, Sab: 9:00 AM - 1:00 PM",
    telefono: "(054) 123-4567",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3827.821152382525!2d-71.54257342485741!3d-16.383070584342843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b45663ae9ff%3A0x7a7ca6a7803f935c!2sKYP%20Bioingenier%C3%ADa%20-%20Pr%C3%B3tesis%20y%20%C3%93rtesis%20-%20Sede%20Sur!5e0!3m2!1ses-419!2spe!4v1735334859455!5m2!1ses-419!2spe"
  },
  {
    id: "sede-chiclayo",
    titulo: "Sede de Chiclayo",
    descripcion: "Nuestra sede en la Ciudad de la Amistad",
    direccion: "14009 Loreto 233 Lambayeque, 14009",
    horario: "Lun - Vie: 9:00 AM - 6:00 PM, Sab: 9:00 AM - 1:00 PM",
    telefono: "(074) 123-4567",
    mapa: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.9812393159586!2d-79.85377662543853!3d-6.7721371932247285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef8fe3907a33%3A0x7409a94a3f55a48c!2sKYP%20Bioingenier%C3%ADa%20-%20Pr%C3%B3tesis%20y%20%C3%93rtesis%20Sede%20Norte!5e0!3m2!1ses-419!2spe!4v1735335018515!5m2!1ses-419!2spe"
  },
]

export function MapsSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Nuestras Sedes
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Encuentra la sede más cercana a ti
          </p>
        </motion.div>

        <Tabs defaultValue="sede-lima" className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-1/4"
          >
            <TabsList className="flex flex-col h-auto space-y-2 bg-transparent p-0">
              {locations.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TabsTrigger
                    value={location.id}
                    className="w-full flex items-center gap-3 px-6 py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    <MapPin className="w-5 h-5" />
                    <div className="text-left">
                      <p className="font-medium">{location.titulo}</p>
                      <p className="text-sm opacity-80">{location.direccion.split(',')[0]}</p>
                    </div>
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
          </motion.div>

          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              {locations.map((location) => (
                <TabsContent key={location.id} value={location.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="overflow-hidden shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-2xl">{location.titulo}</CardTitle>
                        <CardDescription>{location.descripcion}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="aspect-video w-full">
                          <iframe
                            src={location.mapa}
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                          />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-50">
                          <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-blue-600" />
                            <div>
                              <p className="font-medium text-sm">Dirección</p>
                              <p className="text-sm text-gray-600">{location.direccion}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-blue-600" />
                            <div>
                              <p className="font-medium text-sm">Horario</p>
                              <p className="text-sm text-gray-600">{location.horario}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-blue-600" />
                            <div>
                              <p className="font-medium text-sm">Teléfono</p>
                              <p className="text-sm text-gray-600">{location.telefono}</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              ))}
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </section>
  )
}