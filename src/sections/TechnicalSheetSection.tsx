import React, { useEffect, useMemo, useState } from "react";

type Item = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* borde sutil */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-slate-200 via-white to-slate-200 opacity-90" />
      <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-[0_10px_26px_rgba(0,0,0,0.08)]">
        {/* punto marca */}
        <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-brand shadow-[0_6px_14px_rgba(0,0,0,0.14)]" />
        <span className="text-slate-900">{children}</span>
      </div>
    </div>
  );
}

function SpecCard({ item }: { item: Item }) {
  return (
    <div className="group relative h-full">
      {/* borde premium */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-slate-200 via-white to-slate-200 opacity-90" />
      <div
        className={[
          "relative h-full rounded-2xl bg-white",
          "px-6 py-6",
          "shadow-[0_18px_55px_rgba(0,0,0,0.07)]",
          "transition-all duration-200 ease-out",
          "group-hover:-translate-y-[2px]",
          "group-hover:shadow-[0_26px_80px_rgba(0,0,0,0.12)]",
          // glow marca MUY sutil (solo hover)
          "group-hover:ring-1 group-hover:ring-brand/10",
        ].join(" ")}
      >
        {/* brillo interno sutil */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white via-transparent to-brand/5 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

        <div className="relative flex items-start gap-4">
          <IconTile>{item.icon}</IconTile>

          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              {item.label}
            </p>

            <p className="mt-2 text-[15px] sm:text-[16px] leading-relaxed text-slate-900">
              {item.value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Producción destacada, pero estética más “premium” */
function ProductionCard({
  icon,
  current,
  potential,
  veins,
}: {
  icon: React.ReactNode;
  current: string;
  potential: string;
  veins: string;
}) {
  return (
    <div className="group relative h-full">
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-brand/35 via-white to-slate-200 opacity-95" />

      <div
        className="
          relative h-full rounded-2xl bg-white
          shadow-[0_18px_55px_rgba(0,0,0,0.09)]
          transition-all duration-200 ease-out
          group-hover:-translate-y-[2px]
          group-hover:shadow-[0_28px_90px_rgba(0,0,0,0.14)]
          group-hover:ring-1 group-hover:ring-brand/15
          overflow-hidden
        "
      >
        {/* barra superior con degradé */}
        <div className="h-[6px] w-full bg-gradient-to-r from-brand via-[#D6A24A] to-brand" />

        {/* “texture glow” */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand/10 blur-3xl opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
        <div className="pointer-events-none absolute -bottom-28 -left-24 h-64 w-64 rounded-full bg-slate-900/5 blur-3xl opacity-60" />

        <div className="px-6 py-6">
          <div className="flex items-start gap-4">
            <IconTile>{icon}</IconTile>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Producción
                </p>
                {/* badge */}
                <span className="inline-flex items-center rounded-full border border-brand/25 bg-brand/10 px-2 py-0.5 text-[11px] font-semibold text-brand">
                  KPI
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-600">
                Capacidad actual y potencial de expansión.
              </p>
            </div>
          </div>

          {/* separador sutil */}
          <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { label: "Actual", value: current, note: "t/mes" },
              { label: "Potencial (CA)", value: potential, note: "t/mes" },
              { label: "Vetas", value: veins, note: "t/mes" },
            ].map((x) => (
              <div
                key={x.label}
                className="
                  relative overflow-hidden rounded-xl
                  border border-slate-200 bg-slate-50
                  px-4 py-3
                  shadow-[0_10px_24px_rgba(0,0,0,0.04)]
                "
              >
                {/* micro highlight */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-transparent to-brand/5" />
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                  {x.label}
                </p>
                <p className="relative mt-1 text-lg font-semibold text-slate-900">
                  {x.value}
                </p>
                <p className="relative text-xs text-slate-600">{x.note}</p>
              </div>
            ))}
          </div>

          <p className="mt-4 text-xs text-slate-500 leading-relaxed text-center">
            Valores referenciales para evaluación preliminar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TechnicalSheetSection() {
  const [visible, setVisible] = useState(false);

  const items: Item[] = useMemo(
    () => [
      {
        label: "Nombre",
        value: "Proyecto Minero Cumbres de Cortadera",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path
              d="M14 2H8a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8l-5-6Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M14 2v6h6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        label: "Titular",
        value: "Sociedad Minera Cumbres de Andacollo SpA",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path
              d="M4 20V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        label: "Concesiones",
        value: "Cumbre II 1–10 · Virgen de Andacollo Tres 1–10",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path
              d="M6 3h9l3 3v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M15 3v3h3" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        label: "Ubicación",
        value: "Sector Cortadera, Provincia de Copiapó, Región de Atacama",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path
              d="M12 22s7-4.5 7-12a7 7 0 1 0-14 0c0 7.5 7 12 7 12Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path
              d="M12 10.5a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        ),
      },
      {
        label: "Altitud",
        value: "~2.800 – 2.900 m s. n. m.",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path d="M3 20h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path
              d="M5 20 10.5 10l2.5 4 2-3 4 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        label: "Vida útil",
        value: "~4 – 5 años",
        icon: (
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
            <path
              d="M6 6h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M8 10h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
    []
  );

  const productionIcon = (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M4 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 19h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 15V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M12 15V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 15v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );

  useEffect(() => {
    const el = document.getElementById("tech-sheet-anim");
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setVisible(true);
      },
      { threshold: 0.16 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="ficha-tecnica" className="relative py-20">
      {/* fondo con textura suave */}
      <div className="absolute inset-0 bg-[#E2E2E2]" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/35 via-transparent to-black/5" />
      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-slate-900/10 blur-3xl opacity-40" />

      <style>{`
        @keyframes tsUp { from {opacity:0; transform: translateY(16px);} to {opacity:1; transform: translateY(0);} }
        .ts-wrap [data-anim] { opacity: 0; }
        .ts-wrap.is-visible [data-anim] { animation: tsUp 720ms cubic-bezier(.2,.8,.2,1) both; }
      `}</style>

      <div
        id="tech-sheet-anim"
        className={`relative mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-10 ts-wrap ${
          visible ? "is-visible" : ""
        }`}
      >
        {/* Header */}
        <div data-anim style={{ animationDelay: "80ms" }} className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#C58B1E] px-4 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white">
              Especificaciones
            </p>
          </div>

          <h2 className="mt-6 text-3xl sm:text-4xl font-semibold text-slate-900">
            Ficha Técnica del Proyecto
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-brand" />

          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base text-slate-600">
            Resumen técnico para lectura rápida, evaluación y coordinación.
          </p>
        </div>

        {/* Grid + Producción */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {items.map((item, i) => (
            <div key={item.label} data-anim style={{ animationDelay: `${160 + i * 70}ms` }}>
              <SpecCard item={item} />
            </div>
          ))}

          <div
            data-anim
            style={{ animationDelay: `${160 + items.length * 70}ms` }}
            className="md:col-span-2"
          >
            <ProductionCard
              icon={productionIcon}
              current="1.000"
              potential="5.000"
              veins="800–1.200"
            />
          </div>
        </div>

        {/* Nota */}
        <div data-anim style={{ animationDelay: `${220 + (items.length + 1) * 70}ms` }} className="mt-10">
          <div className="relative rounded-2xl bg-white px-6 py-5 shadow-[0_18px_55px_rgba(0,0,0,0.06)]">
            <p className="text-sm text-slate-700 leading-relaxed">
              <span className="font-semibold text-slate-900">Nota:</span> Las coordenadas UTM WGS84 y PSAD56
              se encuentran registradas en informes técnicos oficiales. La documentación completa está
              disponible en la sección de descargas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
