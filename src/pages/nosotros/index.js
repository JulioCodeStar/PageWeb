import {
  HeroSection,
  MissionVisionSection,
  SkillSection,
  SomosSection,
  ValoresSection,
} from "@/components/about";
import Head from "next/head";

export default function Nosotros() {
  return (
    <>
      {/* <Head>
        <title>Nosotros - Tu Empresa</title>
        <meta name="description" content="Conoce más sobre nuestro equipo y nuestra historia" />
      </Head> */}

      <HeroSection />
      <SomosSection />
      <SkillSection />
      <MissionVisionSection />
      <ValoresSection />
    </>
  );
}
