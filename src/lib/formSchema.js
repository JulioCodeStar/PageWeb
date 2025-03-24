import { z } from "zod";

const formSchema = z.object({
  // Datos del proveedor
  nombreProveedor: z
    .string()
    .min(2, { message: "El nombre del proveedor es requerido" }),
  rucProveedor: z
    .string()
    .min(11, { message: "El RUC debe tener 11 dígitos" })
    .max(11),
  direccionProveedor: z
    .string()
    .min(5, { message: "La dirección del establecimiento es requerida" }),

  // Datos del consumidor
  nombreConsumidor: z.string().min(2, { message: "El nombre es requerido" }),
  apellidoConsumidor: z
    .string()
    .min(2, { message: "El apellido es requerido" }),
  domicilio: z.string().min(5, { message: "El domicilio es requerido" }),
  distrito: z.string().min(2, { message: "El distrito es requerido" }),
  provincia: z.string().min(2, { message: "La provincia es requerida" }),
  departamento: z.string().min(2, { message: "El departamento es requerido" }),
  documentoIdentidad: z
    .string()
    .min(8, { message: "El documento de identidad es requerido" }),
  tipoDocumento: z.string(),
  telefono: z.string().min(6, { message: "El teléfono es requerido" }),
  email: z.string().email({ message: "Email inválido" }),
  padreApoderado: z.string().optional(),
  menorEdad: z.boolean().default(false),

  // Datos del bien contratado
  tipoReclamo: z.string(),
  bienContratado: z
    .string()
    .min(2, { message: "Descripción del producto o servicio requerida" }),
  monto: z.string().optional(),

  // Detalle del reclamo
  detalleReclamo: z
    .string()
    .min(10, { message: "El detalle del reclamo es requerido" }),
  pedidoConsumidor: z
    .string()
    .min(10, { message: "El pedido del consumidor es requerido" }),

  // Acciones adoptadas por el proveedor
  accionesProveedor: z.string().optional(),

  // Fecha
  fecha: z.date(),
});

export default formSchema;
