import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
  } from "@/components/ui/card";
  import { CiMedicalCase } from "react-icons/ci";
  
  const infos = [
    {
      icon: <CiMedicalCase />,
      title: "Apoyo Emocional",
      description: "Brindamos apoyo emocional para facilitar la adaptación y fomentar la confianza en el uso de la prótesis.",
    },
    {
      icon: <CiMedicalCase />,
      title: "Atención Fisioterapéutica",
      description: "Incluimos rehabilitación antes y después de la prótesis para mejorar la adaptación y la marcha de nuestros pacientes.",
    },
    {
      icon: <CiMedicalCase />,
      title: "Equipos de adaptación",
      description: "Disponemos de equipos diseñados para mejorar la marcha, la adaptación y la confianza de los pacientes al practicar con sus prótesis.",
    },
    {
      icon: <CiMedicalCase />,
      title: "Sesiones programadas",
      description: "Atendemos mediante citas para garantizar un servicio ordenado y de calidad durante el proceso de elaboración de prótesis.",
    },
  ];
  
  export default function CardInfo() {
    return (
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infos.map((info) => (
              <Card
                key={info.title}
                className="group w-full transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:text-primary-foreground"
              >
                <CardHeader className="flex items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-background/90 flex items-center justify-center group-hover:bg-white/90 transition-colors">
                    <div className="text-4xl text-primary group-hover:text-primary">
                      {info.icon}
                    </div>
                  </div>
                </CardHeader>
  
                <CardContent>
                  <h2 className="text-xl font-semibold text-center mb-2">
                    {info.title}
                  </h2>
                </CardContent>
  
                <CardFooter>
                  <p className="text-sm text-center text-muted-foreground group-hover:text-primary-foreground/90">
                    {info.description}
                  </p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }