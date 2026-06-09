import { NextSeo } from "next-seo";
import { Services } from "@/components/Home";

export default function Servicios() {
  return (
    <>
      <NextSeo
        title="Servicios"
        description="Conoce nuestras soluciones en prótesis superiores, inferiores y estéticas."
        canonical="https://www.kypbioingenieria.com/servicios"
      />
      <Services />
    </>
  );
}
