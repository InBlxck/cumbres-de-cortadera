import React, { useEffect, useState } from "react";

export default function ClosurePlan() {
  const items = [
    {
      title: "Señalización y Cierre",
      desc: "Cierre de accesos y señalización de áreas intervenidas",
      icon: WarningIcon,
    },
    {
      title: "Estabilización",
      desc: "Estabilización de taludes y gestión de residuos",
      icon: ShieldIcon,
    },
    {
      title: "Retiro de Infraestructura",
      desc: "Remoción de infraestructura no reutilizable",
      icon: LeafIcon,
    },
    {
      title: "Monitoreo Post-Cierre",
      desc: "Seguimiento continuo según normativa vigente",
      icon: EyeIcon,
    },
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById("plan-cierre");
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setVisible(true);
      },
      { threshold: 0.14 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="plan-cierre"
      className="relative overflow-hidden bg-[#192338] py-20"
    >
      {/* Animaciones (CSS local) */}
      <style>{`
        @keyframes cUp { from {opacity:0; transform: translateY(16px);} to {opacity:1; transform: translateY(0);} }
        @keyframes cLeft { from {opacity:0; transform: translateX(-16px);} to {opacity:1; transform: translateX(0);} }
        @keyframes cRight { from {opacity:0; transform: translateX(16px);} to {opacity:1; transform: translateX(0);} }
        @keyframes cPop { from {opacity:0; transform: translateY(14px) scale(.985);} to {opacity:1; transform: translateY(0) scale(1);} }

        .c-wrap [data-anim] { opacity: 0; }
        .c-wrap.is-visible .c-up[data-anim] { animation: cUp 760ms cubic-bezier(.2,.8,.2,1) both; }
        .c-wrap.is-visible .c-left[data-anim] { animation: cLeft 760ms cubic-bezier(.2,.8,.2,1) both; }
        .c-wrap.is-visible .c-right[data-anim] { animation: cRight 760ms cubic-bezier(.2,.8,.2,1) both; }
        .c-wrap.is-visible .c-pop[data-anim] { animation: cPop 820ms cubic-bezier(.2,.8,.2,1) both; }

        @media (prefers-reduced-motion: reduce) {
          .c-wrap [data-anim] { opacity: 1 !important; animation: none !important; transform: none !important; }
        }
      `}</style>

      {/* Fondo suave */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-80 w-[980px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
        <div className="absolute -bottom-40 left-1/2 h-96 w-[980px] -translate-x-1/2 rounded-full bg-brand/[0.12] blur-3xl" />
      </div>

      <div
        className={[
          "relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 c-wrap",
          visible ? "is-visible" : "",
        ].join(" ")}
      >
        {/* Layout 2 columnas */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          {/* Columna texto */}
          <div
            data-anim
            className="lg:col-span-5 c-left"
            style={{ animationDelay: "80ms" }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#C58B1E] px-4 py-2 shadow-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
                Responsabilidad ambiental
              </p>
            </div>

            <h2 className="mt-5 text-3xl sm:text-4xl font-semibold text-white">
              Plan de Cierre
            </h2>

            <div className="mt-5 h-[3px] w-16 rounded-full bg-brand" />

            <p className="mt-6 max-w-prose text-sm sm:text-base text-white/65 leading-relaxed">
              La Declaración de Plan de Cierre contempla medidas de mitigación y
              cierre progresivo, ajustándose a la{" "}
              <span className="font-semibold text-brand">Ley N°20.551</span> y su
              reglamento.
            </p>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Enfoque
              </p>
              <p className="mt-2 text-sm text-white/65 leading-relaxed">
                Medidas claras, ejecutables y trazables para cierre seguro,
                cumplimiento y monitoreo posterior.
              </p>
            </div>
          </div>

          {/* Columna cards */}
          <div
            data-anim
            className="lg:col-span-7 c-right"
            style={{ animationDelay: "140ms" }}
          >
            <div className="relative">
              <div className="pointer-events-none absolute -inset-3 sm:-inset-4 rounded-[28px] bg-white/[0.04]" />

              <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2">
                {items.map((it, idx) => {
                  const Icon = it.icon;
                  const step = String(idx + 1).padStart(2, "0");

                  // ✅ Variación: no todas iguales
                  const animClass =
                    idx === 0
                      ? "c-pop"
                      : idx === 1
                      ? "c-up"
                      : idx === 2
                      ? "c-left"
                      : "c-right";

                  const delay = 220 + idx * 90;

                  return (
                    <article
                      key={it.title}
                      data-anim
                      className={[
                        "group relative overflow-hidden rounded-2xl",
                        "border border-white/10 bg-white/[0.06] backdrop-blur",
                        "p-6",
                        "shadow-[0_18px_55px_rgba(0,0,0,0.35)]",
                        "transition-all duration-300",
                        "hover:-translate-y-[2px] hover:bg-white/[0.08]",
                        animClass,
                      ].join(" ")}
                      style={{ animationDelay: `${delay}ms` }}
                    >
                      {/* Glow sutil */}
                      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                        <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-brand/15 blur-2xl" />
                      </div>

                      {/* Header card: step + icon */}
                      <div className="relative flex items-start justify-between gap-4">
                        <div className="inline-flex items-center gap-2">
                          <span className="inline-flex h-7 items-center rounded-full border border-white/10 bg-black/25 px-3 text-[11px] font-semibold tracking-[0.22em] text-white/80">
                            PASO {step}
                          </span>
                        </div>

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black/35 text-[#C58B1E] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10)] transition-transform duration-300 group-hover:scale-[1.06]">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>

                      <h3 className="relative mt-4 text-base font-semibold text-white">
                        {it.title}
                      </h3>

                      <p className="relative mt-2 text-sm leading-relaxed text-white/65">
                        {it.desc}
                      </p>

                      <div className="relative mt-5 h-[2px] w-12 rounded-full bg-brand/70 opacity-60 transition group-hover:opacity-100" />
                    </article>
                  );
                })}
              </div>
            </div>

            <div
              data-anim
              className="mt-8 text-center text-sm text-white/55 c-up"
              style={{ animationDelay: "680ms" }}
            >
              Coordinación y documentación asociada disponible vía Data Room bajo
              solicitud.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== Iconos inline ===== */
function WarningIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 3 2.5 20h19L12 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 9v5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M12 17h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 3 20 6v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LeafIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M20 4c-7 0-13 4-13 11 0 3 2 5 5 5 7 0 11-6 11-13 0-1-1-3-3-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7 15c2-2 5-4 10-5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EyeIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
