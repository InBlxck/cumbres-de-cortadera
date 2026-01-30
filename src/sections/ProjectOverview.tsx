import React from "react";

function TileIcon({
  variant,
  className = "",
}: {
  variant: "publicFunds" | "profitShare" | "operationalLease";
  className?: string;
}) {
  const common = `h-7 w-7 ${className}`;
  const stroke = "currentColor";

  if (variant === "publicFunds") {
    // Documento/briefcase simple (fondos/programas)
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path
          d="M4 9h16M6 9V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3M6 9v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 13h4"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (variant === "profitShare") {
    // Símbolo $ minimal
    return (
      <svg viewBox="0 0 24 24" fill="none" className={common}>
        <path
          d="M12 3v18"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M17 8a3 3 0 0 0-3-3H10a3 3 0 1 0 0 6h4a3 3 0 1 1 0 6H7"
          stroke={stroke}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // operationalLease: tarjeta/contrato simple
  return (
    <svg viewBox="0 0 24 24" fill="none" className={common}>
      <path
        d="M3 7h18M5 7v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 11h6M9 15h4"
        stroke={stroke}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
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
    <div className="group relative rounded-2xl bg-[#E2E2E2] border border-black/10 px-8 py-9 text-center shadow-[0_18px_60px_rgba(0,0,0,0.35)] overflow-hidden">
      {/* glow hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-brand/20 blur-3xl" />
      </div>

      <div className="relative">
        {/* Contenedor del icono (más sobrio) */}
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#CCCCCF]">
        {icon}
      </div>

        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <p className="mt-3 text-sm text-black/70 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function ProjectOverview() {
  return (
    <section id="investors" className="relative overflow-hidden bg-[#192338]">
      {/* fondo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-full bg-brand/[0.10] blur-3xl" />
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
            icon={<TileIcon variant="publicFunds" className="text-[#C58B1E]" />}
          />

          <Card
            title="Profit-Share"
            desc="Acuerdos de participación en utilidades con aportantes privados."
            icon={<TileIcon variant="profitShare" className="text-[#C58B1E]" />}
          />

          <Card
            title="Arriendo Operacional"
            desc="Contratos por metro avanzado o tonelada para reducir CAPEX inicial."
            icon={
              <TileIcon
                variant="operationalLease"
                className="text-[#C58B1E]"
              />
            }
          />
        </div>
      </div>
    </section>
  );
}
