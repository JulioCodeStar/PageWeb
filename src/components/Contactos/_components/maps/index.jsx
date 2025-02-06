import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CircleCheckBig, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function MapsSection({ data }) {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900">
            {data.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        {/* Tabs Container */}
        <Tabs
          defaultValue="sede-lima"
          className="flex flex-col lg:flex-row gap-6 sm:gap-8"
        >
          {/* Tabs List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/4"
          >
            <TabsList className="flex flex-col h-auto space-y-2 sm:space-y-3 bg-transparent p-0">
              {data.Maps.map((location, index) => (
                <motion.div
                  key={location.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <TabsTrigger
                    value={location.id}
                    className="w-full flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
                  >
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <div className="text-left">
                      <p className="font-medium text-sm sm:text-base">
                        {location.title}
                      </p>
                      {location.List.map((item) => (
                        <p key={item.id} className="text-xs sm:text-sm opacity-80">
                          {item.description.split(",")[0]}
                        </p>
                      ))}
                    </div>
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
          </motion.div>

          {/* Map Content */}
          <div className="w-full lg:w-3/4">
            <AnimatePresence mode="wait">
              {data.Maps.map((location) => (
                <TabsContent key={location.id} value={location.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="overflow-hidden shadow-lg">
                      <CardHeader className="p-4 sm:p-6">
                        <CardTitle className="text-xl sm:text-2xl">
                          {location.title}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base">
                          {location.subtitle}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <div className="aspect-video w-full">
                          <iframe
                            src={location.mapa_url}
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            priority
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 sm:p-6 bg-gray-50">
                          {location.List.map((item) => (
                            <div key={item.id} className="flex items-start gap-2 sm:gap-3">
                              <CircleCheckBig className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                              <div>
                                <p className="font-medium text-xs sm:text-sm">
                                  {item.item}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-600">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          ))}
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
  );
}