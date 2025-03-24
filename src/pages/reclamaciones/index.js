"use client";

import { useRef, useState } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { PDFDownloadLink, pdf } from "@react-pdf/renderer";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ReclamoPDF from "@/components/reclamos/reclamo-pdf"; // Ajusta la ruta según tu estructura
import formSchema from "@/lib/formSchema";
import configAxios from "@/config/configAxios";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon, CheckIcon, DownloadIcon, MailIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";

export default function LibroReclamos() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);
  const [formData, setFormData] = useState(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nombreProveedor: "KYP BIOINGEN S.A.C",
      rucProveedor: "20600880081",
      tipoDocumento: "dni",
      tipoReclamo: "reclamo",
      fecha: new Date(),
      menorEdad: false,
      autorizaNotificacion: true,
    },
  });

  async function onSubmit(values) {
    setIsGeneratingPDF(true);
    
    try {
      // Enviar datos a Strapi
      const response = await configAxios.post("reclamos", {
        data: {
          ...values,
          fecha: values.fecha.toISOString(),
        },
      });
  
      if (response.data.data && response.data.data.numero) {
        const numeroReclamo = response.data.data.numero;
        setFormData({ ...values, numero: numeroReclamo });
        setSubmitted(true);
  
        // Generar PDF en segundo plano
        setTimeout(async () => {
          try {
            const pdfBlob = await pdf(
              <ReclamoPDF data={{ ...values, numero: numeroReclamo }} />
            ).toBlob();
            const pdfUrl = URL.createObjectURL(pdfBlob);
            window.open(pdfUrl, "_blank");
          } catch (pdfError) {
            console.error("Error generando PDF:", pdfError);
            alert("Reclamo registrado, pero hubo un error al generar el PDF");
          }
        }, 0);
      } else {
        throw new Error("Formato de respuesta inesperado");
      }
  
    } catch (error) {
      console.error("Error completo:", {
        message: error.message,
        request: error.config,
        response: error.response?.data.data || "Sin respuesta del servidor",
        stack: error.stack,
      });
  
      if (error.response) {
        alert(
          `Error ${error.response.status}: ${error.response.data?.error?.message || "Error desconocido"}`
        );
      } else {
        alert("Error de conexión: Verifica tu acceso a internet");
      }
      
    } finally {
      setIsGeneratingPDF(false);
    }
  }

  return (
    <div className="container mx-auto py-10 px-4 max-w-4xl">
      <div ref={formRef}>
        <Card className="border-2">
          <CardHeader className="bg-gray-50 border-b">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold text-device-900">
                  LIBRO DE RECLAMACIONES
                </CardTitle>
                <CardDescription className="text-gray-600 mt-1">
                  Conforme a lo establecido en el Código de Protección y Defensa
                  del Consumidor Ley N° 29571 y el Decreto Supremo N° 011-2011-PCM
                </CardDescription>
              </div>
            </div>
          </CardHeader>

          {!submitted ? (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <CardContent className="space-y-6 pt-6">
                  {/* Sección 1: Identificación del Proveedor */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 pb-2 border-b">
                      1. IDENTIFICACIÓN DEL PROVEEDOR
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="nombreProveedor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Razón Social</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Ingrese la razón social del proveedor"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="rucProveedor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>RUC</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Ingrese el RUC del proveedor"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="direccionProveedor"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Dirección del Establecimiento</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Ingrese la dirección del establecimiento"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Sección 2: Identificación del Consumidor */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 pb-2 border-b">
                      2. IDENTIFICACIÓN DEL CONSUMIDOR RECLAMANTE
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="nombreConsumidor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Nombres</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Ingrese sus nombres"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="apellidoConsumidor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Apellidos</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Ingrese sus apellidos"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="domicilio"
                        render={({ field }) => (
                          <FormItem className="md:col-span-2">
                            <FormLabel>Domicilio</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Ingrese su domicilio completo"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="distrito"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Distrito</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Ingrese su distrito"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="provincia"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Provincia</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Ingrese su provincia"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="departamento"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Departamento</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Ingrese su departamento"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="tipoDocumento"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tipo de Documento</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Seleccione tipo de documento" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="dni">DNI</SelectItem>
                                <SelectItem value="ce">
                                  Carné de Extranjería
                                </SelectItem>
                                <SelectItem value="pasaporte">
                                  Pasaporte
                                </SelectItem>
                                <SelectItem value="otro">Otro</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="documentoIdentidad"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Número de Documento</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Ingrese su número de documento"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="telefono"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Teléfono</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Ingrese su número de teléfono"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Correo Electrónico</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Ingrese su correo electrónico"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                            <FormDescription>
                              Se enviará la respuesta a este correo electrónico
                            </FormDescription>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="menorEdad"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 border">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>Soy menor de edad</FormLabel>
                              <FormDescription>
                                Si es menor de edad, complete los datos del
                                padre o apoderado
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />
                      {form.watch("menorEdad") && (
                        <FormField
                          control={form.control}
                          name="padreApoderado"
                          render={({ field }) => (
                            <FormItem className="md:col-span-2">
                              <FormLabel>
                                Nombre del Padre o Apoderado
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Ingrese el nombre del padre o apoderado"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}
                    </div>
                  </div>

                  <Separator />

                  {/* Sección 3: Identificación del Bien Contratado */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 pb-2 border-b">
                      3. IDENTIFICACIÓN DEL BIEN CONTRATADO
                    </h3>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="tipoReclamo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tipo</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="flex flex-col space-y-1"
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="reclamo" id="reclamo" />
                                  <label
                                    htmlFor="reclamo"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Reclamo (Disconformidad relacionada a los productos o servicios)
                                  </label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem value="queja" id="queja" />
                                  <label
                                    htmlFor="queja"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                  >
                                    Queja (Disconformidad no relacionada a los productos o servicios; o, malestar o descontento respecto a la atención al público)
                                  </label>
                                </div>
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="bienContratado"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Descripción del producto o servicio
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Describa el producto o servicio contratado"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="monto"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Monto reclamado (opcional)</FormLabel>
                            <FormControl>
                              <Input placeholder="S/." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Sección 4: Detalle del Reclamo */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 pb-2 border-b">
                      4. DETALLE DE LA RECLAMACIÓN Y PEDIDO DEL CONSUMIDOR
                    </h3>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="detalleReclamo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Detalle</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describa con detalle los hechos que motivan su reclamo o queja"
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="pedidoConsumidor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Pedido del Consumidor</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Indique qué solución espera obtener de su reclamo"
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Sección 5: Acciones Adoptadas por el Proveedor */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 pb-2 border-b">
                      5. ACCIONES ADOPTADAS POR EL PROVEEDOR
                    </h3>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="accionesProveedor"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Detalle de las acciones adoptadas por el proveedor
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Este campo será completado por el proveedor"
                                className="min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Sección 6: Fecha del Reclamo */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 pb-2 border-b">
                      6. FECHA DEL RECLAMO
                    </h3>
                    <div>
                      <FormField
                        control={form.control}
                        name="fecha"
                        render={({ field }) => (
                          <FormItem className="flex flex-col">
                            <FormLabel>Fecha del reclamo</FormLabel>
                            <Popover>
                              <PopoverTrigger asChild>
                                <FormControl>
                                  <Button
                                    variant={"outline"}
                                    className={`w-full pl-3 text-left font-normal ${
                                      !field.value && "text-muted-foreground"
                                    }`}
                                  >
                                    {field.value ? (
                                      format(field.value, "PPP", { locale: es })
                                    ) : (
                                      <span>Seleccione una fecha</span>
                                    )}
                                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                  </Button>
                                </FormControl>
                              </PopoverTrigger>
                              <PopoverContent
                                className="w-auto p-0"
                                align="start"
                              >
                                <Calendar
                                  mode="single"
                                  selected={field.value}
                                  onSelect={field.onChange}
                                  disabled={(date) =>
                                    date > new Date() ||
                                    date < new Date("1900-01-01")
                                  }
                                  initialFocus
                                />
                              </PopoverContent>
                            </Popover>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  {/* Información adicional */}
                  <div className="bg-gray-50 p-4 rounded-lg border text-sm">
                    <p className="font-medium mb-2">IMPORTANTE:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        El proveedor deberá dar respuesta al reclamo en un plazo
                        no mayor a treinta (30) días calendario.
                      </li>
                      <li>
                        El plazo para la atención de reclamos podrá ser
                        extendido por otro igual cuando la naturaleza del
                        reclamo lo justifique, situación que será puesta en
                        conocimiento del consumidor antes de la culminación del
                        plazo inicial.
                      </li>
                      <li>
                        En caso de disconformidad con la respuesta del
                        proveedor, puede interponer un reclamo ante Indecopi.
                      </li>
                      <li>
                        El proveedor deberá conservar las Hojas de Reclamaciones
                        por un período mínimo de tres (3) años desde la fecha de
                        presentación del reclamo o queja.
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-4 justify-end bg-gray-50 border-t pt-4">
                  <Button type="button" variant="outline">
                    Cancelar
                  </Button>
                  <Button type="submit" disabled={isGeneratingPDF}>
                    {isGeneratingPDF ? "Generando PDF..." : "Enviar Reclamo"}
                  </Button>
                </CardFooter>
              </form>
            </Form>
          ) : (
            <CardContent className="py-10">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <CheckIcon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">¡Reclamo Registrado!</h3>
                <p className="text-gray-600 max-w-md mx-auto">
                  Su reclamo ha sido registrado con éxito. Recibirá una respuesta en un plazo máximo de 30 días calendario.
                </p>
                <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
                  {formData && (
                    <PDFDownloadLink
                      document={<ReclamoPDF data={formData} />}
                      fileName="libro-reclamaciones.pdf"
                      className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                    >
                      {({ loading }) =>
                        loading ? (
                          "Generando PDF..."
                        ) : (
                          <span className="flex items-center gap-2">
                            <DownloadIcon className="h-4 w-4" />
                            Descargar PDF
                          </span>
                        )
                      }
                    </PDFDownloadLink>
                  )}
                </div>
                <div className="pt-4">
                  <Button onClick={() => setSubmitted(false)} variant="secondary">
                    Volver al formulario
                  </Button>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      </div>

      <div className="mt-4 text-center text-xs text-gray-500">
        Libro de Reclamaciones conforme al Código de Protección y Defensa del Consumidor - Ley N° 29571 y el Decreto Supremo N° 011-2011-PCM
      </div>
    </div>
  );
}
