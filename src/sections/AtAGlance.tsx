import { useEffect, useState } from "react";

type Stat = {
  value: string;
  subtitle: string;
  note?: string;
};

export default function AtAGlance() {
  const [visible, setVisible] = useState(false);

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

  // Animación al entrar en viewport
  useEffect(() => {
    const el = document.getElementById("glance-anim");
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setVisible(true);
      },
      { threshold: 0.22 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const variantByIndex = (i: number) => {
    // 0: izquierda, 1: abajo, 2: derecha (puedes cambiarlo)
    if (i % 3 === 0) return "in-left";
    if (i % 3 === 1) return "in-up";
    return "in-right";
  };

  return (
    <section id="cifras" className="bg-white">
      {/* CSS local para animaciones (a prueba de Tailwind config) */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-18px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeRight {
          from { opacity: 0; transform: translateX(18px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .glance-wrap [data-anim] { opacity: 0; }

        .glance-wrap.is-visible .in-up[data-anim] {
          animation: fadeUp 720ms cubic-bezier(.2,.8,.2,1) both;
        }
        .glance-wrap.is-visible .in-left[data-anim] {
          animation: fadeLeft 720ms cubic-bezier(.2,.8,.2,1) both;
        }
        .glance-wrap.is-visible .in-right[data-anim] {
          animation: fadeRight 720ms cubic-bezier(.2,.8,.2,1) both;
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1350px] px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div
          id="glance-anim"
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start glance-wrap ${
            visible ? "is-visible" : ""
          }`}
        >
          {/* Columna izquierda */}
          <div
            data-anim
            className="lg:col-span-5 in-left"
            style={{ animationDelay: "80ms" }}
          >
            <div className="text-[11px] tracking-[0.22em] uppercase text-black/55">
              Visión general
            </div>

            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-black/90">
              Proyecto en cifras
            </h2>

            {/* Acento dorado */}
            <div className="mt-3 h-[3px] w-[60%] rounded-full bg-[#C08A2D]" />

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
          <div
            data-anim
            className="lg:col-span-7 in-right"
            style={{ animationDelay: "160ms" }}
          >
            <div className="relative">
              {/* Fondo suave */}
              <div className="absolute -inset-x-6 sm:-inset-x-8 -inset-y-6 sm:-inset-y-8 bg-black/[0.04] rounded-[28px]" />

              {/* Tarjeta */}
              <div className="relative rounded-[22px] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85 border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.12)] overflow-hidden transition-all duration-200 hover:-translate-y-[2px] hover:shadow-[0_28px_70px_rgba(0,0,0,0.14)]">
                {stats.map((s, i) => {
                  const variant = variantByIndex(i);
                  const delay = 260 + i * 120; // stagger

                  return (
                    <div key={s.subtitle}>
                      <div
                        data-anim
                        className={`px-8 sm:px-12 py-10 sm:py-12 text-center ${variant}`}
                        style={{ animationDelay: `${delay}ms` }}
                      >
                        {/* subtitle */}
                        <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-black/85">
                          {s.subtitle}
                        </div>

                        {/* value */}
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
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
