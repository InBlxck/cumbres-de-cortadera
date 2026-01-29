// src/sections/ProjectOverview.tsx
// Estética igual a tu página (oscuro + acento dorado) + “detalle lindo”
// + contenido tipo referencia (texto más “corporativo / overview”)

function TileIcon({
  variant,
  className = "",
}: {
  variant: "produce" | "operate" | "work";
  className?: string;
}) {
  const common = `h-6 w-6 ${className}`;
  const stroke = "currentColor";

  if (variant === "produce") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path
          d="M14 2H8a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8l-5-6Z"
          stroke={stroke}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M14 2v6h6" stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
        <path d="M8 13h8M8 17h6" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === "operate") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
        <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke={stroke} strokeWidth="2" />
        <path d="M3 12h18" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <path d="M12 3c3 3 3 15 0 18" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        <path d="M12 3c-3 3-3 15 0 18" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common} aria-hidden="true">
      <path d="M16 11a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z" stroke={stroke} strokeWidth="2" />
      <path d="M4 20a6 6 0 0 1 12 0" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <path d="M20 20a5 5 0 0 0-4-4" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
      <path d="M17 7a2.5 2.5 0 1 0-2.2 4" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function Card({
  title,
  kicker,
  desc,
  icon,
}: {
  title: string;
  kicker: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative rounded-2xl bg-white/[0.06] border border-white/[0.10] shadow-[0_18px_60px_rgba(0,0,0,0.35)] px-7 py-8 text-left overflow-hidden">
      {/* detalle lindo: brillo suave al hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-brand/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
      </div>

      <div className="relative">
        <div className="mb-5 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/90 text-black shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
            {icon}
          </div>

          <div className="min-w-0">
            <p className="text-xs tracking-[0.18em] uppercase text-brand/90">
              {kicker}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-white/90 leading-snug">
              {title}
            </h3>
          </div>
        </div>

        <p className="text-sm text-white/60 leading-relaxed">{desc}</p>

        {/* línea fina abajo como remate */}
        <div className="mt-6 h-px w-full bg-white/10" />
      </div>
    </div>
  );
}

export default function ProjectOverview() {
  return (
    <section id="overview" className="relative overflow-hidden bg-[#0b0f18]">
      {/* fondo + “detalle lindo”: grilla sutil */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-80 w-[760px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-full bg-brand/[0.10] blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[1350px] px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* encabezado tipo tu estética */}
        <div className="text-center">
          <p className="text-xs tracking-[0.22em] uppercase text-brand/90">
            Visión general
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl font-semibold text-white">
            Project Overview
          </h2>

          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-brand/90" />

          <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base text-white/60 leading-relaxed">
            Síntesis del proyecto para una lectura rápida: el foco productivo,
            el contexto territorial y la forma de coordinación para avanzar con
            documentación y próximos pasos.
          </p>
        </div>

        {/* cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <Card
            kicker="Qué producimos"
            title="Recursos objetivo y potencial"
            desc="Nos enfocamos en mineralización asociada a óxidos y sulfuros de cobre, con ocurrencias de oro y plata en afloramientos y labores históricas. El objetivo es consolidar información técnica y habilitar un camino claro hacia inversión."
            icon={<TileIcon variant="produce" className="text-black" />}
          />

          <Card
            kicker="Dónde operamos"
            title="Ubicación y entorno"
            desc="El activo se sitúa en el sector Cortadera, Provincia de Copiapó, Región de Atacama. Se considera el acceso, el entorno y la infraestructura relevante para facilitar planificación, logística y ejecución de etapas de exploración."
            icon={<TileIcon variant="operate" className="text-black" />}
          />

          <Card
            kicker="Trabaja con nosotros"
            title="Contacto y coordinación"
            desc="Abrimos un canal directo para coordinación y acceso a información clave (Data Room). La idea es facilitar revisión técnica, trazabilidad documental y acuerdos de trabajo con potenciales contrapartes."
            icon={<TileIcon variant="work" className="text-black" />}
          />
        </div>
      </div>
    </section>
  );
}
