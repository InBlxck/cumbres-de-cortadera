import { useEffect, useState } from "react";

export default function ExecutiveSummary() {
  const [visible, setVisible] = useState(false);

  // Animación al entrar en viewport
  useEffect(() => {
    const el = document.getElementById("exec-summary");
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setVisible(true);
      },
      { threshold: 0.18 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="resumen"
      className="relative bg-[#192338] py-20 sm:py-24 lg:py-28 overflow-hidden"
    >
      {/* CSS local para animación */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .exec-anim [data-anim] {
          opacity: 0;
          transform: translateY(16px);
        }

        .exec-anim.is-visible [data-anim] {
          animation: fadeUp 720ms cubic-bezier(.2,.8,.2,1) both;
        }
      `}</style>

      {/* Fondo suave */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div
        id="exec-summary"
        className={`relative mx-auto w-full max-w-[1350px] px-4 sm:px-6 lg:px-8 exec-anim ${
          visible ? "is-visible" : ""
        }`}
      >
        {/* Títulos */}
        <div className="text-center">
          <p
            data-anim
            style={{ animationDelay: "80ms" }}
            className="text-[11px] sm:text-xs tracking-[0.22em] text-brand"
          >
            VISIÓN GENERAL
          </p>

          <h2
            data-anim
            style={{ animationDelay: "160ms" }}
            className="mt-3 font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white"
          >
            Resumen Ejecutivo
          </h2>

          <div
            data-anim
            style={{ animationDelay: "240ms" }}
            className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-brand"
          />
        </div>

        {/* Card blanca */}
        <div className="mt-10 sm:mt-12">
          <div
            data-anim
            style={{ animationDelay: "320ms" }}
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
            <p
              data-anim
              style={{ animationDelay: "420ms" }}
              className="text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed text-black/70"
            >
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
              <div
                data-anim
                style={{ animationDelay: "520ms" }}
                className="flex items-start gap-4"
              >
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
                  <p className="font-semibold text-black">Pertenencias Cumbre II</p>
                  <p className="mt-1 text-sm text-black/60 leading-relaxed">
                    10 pertenencias con coordenadas y hito de mensura registradas
                  </p>
                </div>
              </div>

              {/* Ticket 2 */}
              <div
                data-anim
                style={{ animationDelay: "620ms" }}
                className="flex items-start gap-4"
              >
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
            <p
              data-anim
              style={{ animationDelay: "720ms" }}
              className="mt-9 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed text-black/65"
            >
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
