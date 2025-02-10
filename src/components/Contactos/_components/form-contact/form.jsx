import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast"
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "El nombre debe tener al menos 2 caracteres",
  }),
  phone: z.string().regex(/^[0-9]{9}$/, {
    message: "Ingresa un número de teléfono válido (9 dígitos)",
  }),
  message: z.string().min(10, {
    message: "El mensaje debe tener al menos 10 caracteres",
  }),
});

export function Formulario() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const numero = '51922578858';
      const whatsappMessage = `Hola, mi nombre es *${data.name}*. Mi número es *${data.phone}*. Mensaje: ${data.message}`;
      const whatsappURL = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(whatsappMessage)}`;
      
      window.open(whatsappURL, "_blank");
      
      setIsSuccess(true);
      form.reset();
      
      toast.success("Mensaje enviado por WhatsApp correctamente");
    } catch (error) {
      console.error("Error al enviar mensaje", error);
      toast({
        variant: "destructive",
        title: "Error al enviar el mensaje",
        description: "There was a problem with your request.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "px-4 py-6 text-base md:text-lg bg-white/50 backdrop-blur-sm focus:bg-white transition-all duration-200 rounded";

  return (
    <Form {...form}>
      <motion.form 
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={cn(inputClasses)}
                    placeholder="Nombres y Apellidos"
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <AnimatePresence>
                  {form.formState.errors.name && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <FormMessage />
                    </motion.div>
                  )}
                </AnimatePresence>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={cn(inputClasses)}
                    placeholder="Número de Teléfono"
                    type="tel"
                    maxLength={9}
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <AnimatePresence>
                  {form.formState.errors.phone && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <FormMessage />
                    </motion.div>
                  )}
                </AnimatePresence>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className={cn(inputClasses, "min-h-[120px] resize-none")}
                    placeholder="Escribe tu mensaje..."
                    disabled={isSubmitting}
                    {...field}
                  />
                </FormControl>
                <AnimatePresence>
                  {form.formState.errors.message && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <FormMessage />
                    </motion.div>
                  )}
                </AnimatePresence>
              </FormItem>
            )}
          />
        </div>

        <motion.div 
          initial={false}
          animate={isSuccess ? { scale: [1, 1.05, 1] } : {}}
          transition={{ duration: 0.5 }}
        >
          <Button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full md:w-auto px-8 py-6 text-lg font-medium rounded-full transition-all duration-200",
              isSuccess ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"
            )}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Enviando...
              </>
            ) : isSuccess ? (
              <>
                <CheckCircle className="mr-2 h-5 w-5" />
                ¡Mensaje Enviado!
              </>
            ) : (
              <>
                <Send className="mr-2 h-5 w-5" />
                Enviar Mensaje
              </>
            )}
          </Button>
        </motion.div>
      </motion.form>
    </Form>
  );
}