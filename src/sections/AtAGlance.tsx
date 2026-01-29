import React from "react";

type Stat = {
  value: string;
  subtitle: string;
  note?: string;
};

export default function AtAGlance() {
  const stats: Stat[] = [
    {
      value: "Copiapó, Atacama",
      subtitle: "Ubicación",
    },
    {
      value: "1,000 t/mes",
      subtitle: "Producción",
      note: "Potencial: 5,000 t/mes",
    },
    {
      value: "4–5 años",
      subtitle: "Vida útil",
    },
  ];

  return (
    <section id="glance" className="bg-white">
      <div className="mx-auto w-full max-w-[1350px] px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Columna izquierda */}
          <div className="lg:col-span-5">
            <div className="text-[11px] tracking-[0.22em] uppercase text-black/55">
              Visión general
            </div>

            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-black/90">
              Proyecto en cifras
            </h2>

            {/* Acento dorado */}
            <div className="mt-5 h-[3px] w-14 rounded-full bg-[#C08A2D]" />

            <p className="mt-7 text-base sm:text-lg leading-relaxed text-black/70 max-w-prose">
              Resumen rápido de los principales parámetros del proyecto, para
              tener una visión clara del contexto y su potencial.
            </p>

            <p className="mt-6 text-base sm:text-lg leading-relaxed text-black/70 max-w-prose">
              Estos indicadores sirven como referencia inicial para evaluación y
              conversaciones de inversión.
            </p>
          </div>

          {/* Columna derecha (tarjeta de métricas) */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Fondo suave */}
              <div className="absolute -inset-x-6 sm:-inset-x-8 -inset-y-6 sm:-inset-y-8 bg-black/[0.04] rounded-[28px]" />

              {/* Tarjeta */}
              <div className="relative rounded-[22px] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85 border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_28px_70px_rgba(0,0,0,0.14)]">
                {stats.map((s, i) => (
                  <div key={s.subtitle}>
                    <div className="px-8 sm:px-12 py-10 sm:py-12 text-center">
                      {/* ✅ TITULO (subtitle) más grande */}
                      <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-black/85">
                        {s.subtitle}
                      </div>

                      {/* ✅ CIFRA (value) más pequeña */}
                      <div className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-black/75">
                        {s.value}
                      </div>

                      {s.note && (
                        <div className="mt-2 text-sm sm:text-base text-black/60">
                          <span className="text-[#C08A2D] font-medium">
                            {s.note}
                          </span>
                        </div>
                      )}
                    </div>

                    {i !== stats.length - 1 && (
                      <div className="mx-10 sm:mx-16 border-t border-black/10" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
