import Image from "next/image";

export function HeaderSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#01767F] p-12">
      {/* Background */}
      <Image
        src="/img/revofit/fondo_2.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Overlay leve (puedes quitarlo si no lo necesitas) */}
      <div className="absolute inset-0 bg-black/5" />

      {/* Alto tipo banner + centrado vertical real */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-[260px] items-center py-10 sm:min-h-[340px] sm:py-12 lg:min-h-[420px] lg:py-14">
          <div className="grid w-full items-center gap-10 sm:gap-40 lg:grid-cols-2">
            {/* LEFT */}
            <div className="flex flex-col items-center text-center lg:me-10">
              {/* Logos */}
              <Image
                src="/img/revofit/kyp_click_medical.png"
                alt="KYP Bioingeniería + Click Medical"
                width={460}
                height={140}
                priority
                className="h-12 w-auto sm:h-16"
              />

              {/* Logo Revofit */}
              <div className="mt-6 w-full flex justify-center">
                <Image
                  src="/img/revofit/logo_revofit.png"
                  alt="RevoFit"
                  width={900}
                  height={220}
                  priority
                  className="h-auto w-[min(720px,92vw)] lg:w-[min(620px,40vw)]"
                />
              </div>

              {/* Texto */}
              <p className="mt-5 max-w-xl text-white font-semibold uppercase tracking-wide text-[clamp(12px,1.2vw,16px)]">
                AJUSTE PERFECTO, EN SEGUNDOS:
                <br />
                AHORA CON REVOFIT EN KYP.
              </p>
            </div>

            {/* RIGHT */}
            <div className="relative flex items-center justify-center lg:justify-end">
              {/* Wrapper SOLO para el área de la llanta (aquí vive el watermark en mobile) */}
              <div className="relative mx-auto w-full max-w-[420px] flex items-center justify-center">
                {/* Watermark en MOBILE/TABLET (solo detrás de la llanta) */}
                <div className="pointer-events-none absolute inset-0 lg:hidden">
                  <Image
                    src="/img/revofit/letras_revofit.png"
                    alt=""
                    fill
                    sizes="420px"
                    className="object-contain scale-[1.25]"
                    priority
                  />
                </div>

                {/* Watermark en DESKTOP (tu versión actual) */}
                <div className="pointer-events-none absolute right-0 top-1/2 hidden h-[120%] w-[min(820px,46vw)] -translate-y-1/2 lg:block">
                  <Image
                    src="/img/revofit/letras_revofit.png"
                    alt=""
                    fill
                    sizes="46vw"
                    className="object-contain translate-x-20 scale-[1.25]"
                    priority
                  />
                </div>

                {/* Llanta */}
                <Image
                  src="/img/revofit/revofit.png"
                  alt="Dial RevoFit"
                  width={780}
                  height={600}
                  priority
                  className="relative z-10 h-auto w-[min(340px,82vw)] sm:w-[420px] lg:w-[500px] xl:w-[540px] drop-shadow-2xl lg:translate-x-6 ms-20 lg:ms-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
