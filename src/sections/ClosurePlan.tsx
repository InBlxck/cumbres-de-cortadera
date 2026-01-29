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

  return (
    <section id="cierre" className="relative overflow-hidden bg-[#0b0f18] py-20">
      {/* Fondo suave */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-80 w-[980px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
        <div className="absolute -bottom-40 left-1/2 h-96 w-[980px] -translate-x-1/2 rounded-full bg-brand/[0.12] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-brand">
            RESPONSABILIDAD AMBIENTAL
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">
            Plan de Cierre
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-brand" />

          <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base text-white/60">
            La Declaración de Plan de Cierre contempla medidas de mitigación y cierre progresivo,
            ajustándose a la{" "}
            <span className="font-semibold text-brand">Ley N°20.551</span> y su reglamento.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => {
            const Icon = it.icon;

            return (
              <article
                key={it.title}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.18)] transition-all duration-300 hover:-translate-y-[2px] hover:shadow-[0_26px_75px_rgba(15,23,42,0.22)]"
              >
                {/* acento superior */}
                <div className="h-[3px] w-full bg-brand" />

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    {/* icono */}
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand text-black shadow-sm ring-1 ring-black/10">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-base font-semibold text-slate-900">
                        {it.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {it.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* brillo muy sutil en hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute -top-24 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-brand/10 blur-2xl" />
                </div>
              </article>
            );
          })}
        </div>

        {/* Nota */}
        <div className="mt-10 text-center text-sm text-white/55">
          Coordinación y documentación asociada disponible vía Data Room bajo solicitud.
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
      <path d="M12 9v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 17h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
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
      <path d="M7 15c2-2 5-4 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
