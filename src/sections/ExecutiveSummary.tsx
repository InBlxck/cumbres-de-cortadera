export default function ExecutiveSummary() {
  return (
    <section
      id="resumen-ejecutivo"
      className="relative bg-[#070b12] py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* Fondo suave */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1350px] px-4 sm:px-6 lg:px-8">
        {/* Títulos */}
        <div className="text-center">
          <p className="text-[11px] sm:text-xs tracking-[0.22em] text-brand">
            VISIÓN GENERAL
          </p>

          <h2 className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white">
            Resumen Ejecutivo
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-brand" />
        </div>

        {/* Card blanca */}
        <div className="mt-10 sm:mt-12">
          <div
            className="
              mx-auto w-full max-w-[1050px]
              rounded-3xl bg-white
              shadow-[0_30px_90px_rgba(0,0,0,0.25)]
              px-7 py-8
              sm:px-10 sm:py-10
              lg:px-12 lg:py-12
            "
          >
            {/* Texto principal */}
            <p className="text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed text-black/70">
              El proyecto{" "}
              <span className="font-semibold text-black">
                Cumbres de Cortadera
              </span>{" "}
              comprende la explotación de pertenencias mineras ubicadas en el
              sector Cortadera, Provincia de Copiapó, Región de Atacama. Los
              documentos técnicos muestran la existencia de mineralización de{" "}
              <span className="font-semibold text-[#C58B1E]">
                óxidos y sulfuros de cobre
              </span>{" "}
              y vetas con presencia de{" "}
              <span className="font-semibold text-[#C58B1E]">oro y plata</span>{" "}
              en afloramientos y labores históricas.
            </p>

            {/* Tickets */}
            <div className="mt-9 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Ticket 1 */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    h-11 w-11 flex-none
                    rounded-full
                    bg-[#C58B1E]/15
                    ring-2 ring-[#C58B1E]
                    flex items-center justify-center
                  "
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="#C58B1E"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="font-semibold text-black">
                    Pertenencias Cumbre II
                  </p>
                  <p className="mt-1 text-sm text-black/60 leading-relaxed">
                    10 pertenencias con coordenadas y hito de mensura registradas
                  </p>
                </div>
              </div>

              {/* Ticket 2 */}
              <div className="flex items-start gap-4">
                <div
                  className="
                    h-11 w-11 flex-none
                    rounded-full
                    bg-[#C58B1E]/15
                    ring-2 ring-[#C58B1E]
                    flex items-center justify-center
                  "
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="#C58B1E"
                      strokeWidth="2.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <div>
                  <p className="font-semibold text-black">
                    Virgen de Andacollo Tres
                  </p>
                  <p className="mt-1 text-sm text-black/60 leading-relaxed">
                    10 pertenencias adicionales documentadas
                  </p>
                </div>
              </div>
            </div>

            {/* Texto final */}
            <p className="mt-9 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed text-black/65">
              La propuesta técnica considera métodos compatibles con
              pequeña-mediana escala:{" "}
              <span className="font-semibold text-black">
                cantera en ladera a cielo abierto
              </span>{" "}
              para cuerpos mantiformes y{" "}
              <span className="font-semibold text-black">
                explotación subterránea por vetas controladas
              </span>{" "}
              <span className="text-black/50">(corte y relleno)</span> en
              sectores de vetas angostas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
