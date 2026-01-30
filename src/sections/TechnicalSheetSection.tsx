import React from "react";

type Item = {
  label: string;
  value: string;
  icon: React.ReactNode;
};

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* borde premium */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200" />
      <div className="relative flex h-11 w-11 items-center justify-center rounded-2xl bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
        {/* acento brand sin depender del color del icono */}
        <span className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-brand shadow-[0_6px_14px_rgba(0,0,0,0.12)]" />
        <span className="text-slate-900">{children}</span>
      </div>
    </div>
  );
}

function SpecCard({ item }: { item: Item }) {
  return (
    <div className="group relative">
      {/* borde elegante */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200" />
      <div
        className={[
          "relative h-full rounded-2xl bg-white",
          "px-6 py-6",
          "shadow-[0_18px_55px_rgba(0,0,0,0.07)]",
          "transition-transform duration-200",
          "group-hover:-translate-y-[2px]",
        ].join(" ")}
      >
        <div className="flex items-start gap-4">
          <IconTile>{item.icon}</IconTile>

          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              {item.label}
            </p>

            <div className="mt-2">
              <p className="text-[15px] sm:text-[16px] leading-relaxed text-slate-900">
                {item.value}
              </p>
            </div>
          </div>
        </div>

        {/* detalle inferior sutil */}
        <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </div>
  );
}

export default function TechnicalSheet() {
  const data: Item[] = [
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
      label: "Producción",
      value:
        "1.000 t/mes actual · Potencial: 5.000 t/mes (cielo abierto) · 800–1.200 t/mes (vetas)",
      icon: (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
          <path d="M4 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M4 19h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 15V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 15V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 15v-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
  ];

  return (
    <section id="ficha-tecnica" className="bg-[#E2E2E2] py-20">
      <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">
        {/* Header más elegante */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C58B1E] bg-[#C58B1E] px-4 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.12)]">
          
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

        {/* Grid ordenado */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.map((item) => (
            <SpecCard key={item.label} item={item} />
          ))}
        </div>

        {/* Nota pro */}
        <div className="mt-10 relative">
          <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-b from-brand/25 via-slate-100 to-brand/15" />
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
