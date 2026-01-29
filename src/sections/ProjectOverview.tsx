import React from "react";

function TileIcon({
  variant,
  className = "",
}: {
  variant: "publicFunds" | "profitShare" | "operationalLease";
  className?: string;
}) {
  const common = `h-6 w-6 ${className}`;
  const stroke = "currentColor";

  if (variant === "publicFunds") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path
          d="M7 21h10a2 2 0 0 0 2-2V7l-4-4H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2Z"
          stroke={stroke}
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path d="M15 3v4h4" stroke={stroke} strokeWidth="2" />
        <path d="M8 11h8M8 15h8M8 19h6" stroke={stroke} strokeWidth="2" />
      </svg>
    );
  }

  if (variant === "profitShare") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path
          d="M16 11a4 4 0 1 0-8 0c0 1.7 1.1 3.2 2.6 3.8V17a1.4 1.4 0 0 0 2.8 0v-2.2c1.5-.6 2.6-2.1 2.6-3.8Z"
          stroke={stroke}
          strokeWidth="2"
        />
        <path d="M6 21h12" stroke={stroke} strokeWidth="2" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" className={common}>
      <path
        d="M20 7H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"
        stroke={stroke}
        strokeWidth="2"
      />
      <path d="M6 11h4M6 15h6" stroke={stroke} strokeWidth="2" />
      <path d="M16 13h2" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}

function Card({
  title,
  desc,
  icon,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="group relative rounded-2xl bg-white/[0.06] border border-white/[0.10] px-8 py-9 text-center shadow-[0_18px_60px_rgba(0,0,0,0.35)] overflow-hidden">
      {/* glow hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-brand/20 blur-3xl" />
      </div>

      <div className="relative">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-black">
          {icon}
        </div>

        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="mt-3 text-sm text-white/60 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function ProjectOverview() {
  return (
    <section id="investors" className="relative overflow-hidden bg-[#0b0f18]">
      {/* fondo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-3xl" />
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

      <div className="relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">
            Oportunidad para Inversionistas
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-brand" />
          <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base text-white/60">
            La iniciativa requiere capital de trabajo para completar exploración
            (sondajes) y financiar etapas iniciales de prestripping y movilización.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <Card
            title="Fondos Públicos"
            desc="Programas de ENAMI, GORE y Corfo orientados a pequeña minería."
            icon={<TileIcon variant="publicFunds" />}
          />

          <Card
            title="Profit-Share"
            desc="Acuerdos de participación en utilidades con aportantes privados."
            icon={<TileIcon variant="profitShare" />}
          />

          <Card
            title="Arriendo Operacional"
            desc="Contratos por metro avanzado o tonelada para reducir CAPEX inicial."
            icon={<TileIcon variant="operationalLease" />}
          />
        </div>
      </div>
    </section>
  );
}
