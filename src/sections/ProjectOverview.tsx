import React, { useEffect, useState } from "react";

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
    <div
      className="
        group relative rounded-2xl bg-[#E2E2E2] border border-black/10
        px-8 py-9 text-center
        shadow-[0_18px_60px_rgba(0,0,0,0.35)]
        overflow-hidden
        transition-transform duration-300 ease-out
        hover:-translate-y-[3px]
        hover:shadow-[0_26px_70px_rgba(0,0,0,0.38)]
      "
    >
      {/* glow hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300">
        <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-brand/20 blur-3xl" />
      </div>

      <div className="relative">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#CCCCCF] transition-transform duration-300 ease-out group-hover:scale-[1.06]">
          {icon}
        </div>

        <h3 className="text-lg font-semibold text-black">{title}</h3>
        <p className="mt-3 text-sm text-black/70 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export default function ProjectOverview() {
  const [visible, setVisible] = useState(false);

  // Animación al entrar en viewport
  useEffect(() => {
    const el = document.getElementById("project-overview-anim");
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
    <section id="investors" className="relative overflow-hidden bg-[#192338]">
      {/* CSS local para animaciones */}
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
        @keyframes popUp {
          from { opacity: 0; transform: translateY(18px) scale(0.98); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .po-wrap [data-anim] { opacity: 0; }

        .po-wrap.is-visible .po-up[data-anim] {
          animation: fadeUp 720ms cubic-bezier(.2,.8,.2,1) both;
        }
        .po-wrap.is-visible .po-left[data-anim] {
          animation: fadeLeft 720ms cubic-bezier(.2,.8,.2,1) both;
        }
        .po-wrap.is-visible .po-right[data-anim] {
          animation: fadeRight 720ms cubic-bezier(.2,.8,.2,1) both;
        }
        .po-wrap.is-visible .po-pop[data-anim] {
          animation: popUp 760ms cubic-bezier(.2,.8,.2,1) both;
        }
      `}</style>

      {/* fondo */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-full bg-brand/[0.10] blur-3xl" />
      </div>

      <div
        id="project-overview-anim"
        className={`relative mx-auto max-w-[1300px] px-4 sm:px-6 lg:px-8 py-20 po-wrap ${
          visible ? "is-visible" : ""
        }`}
      >
        {/* Header */}
        <div data-anim className="text-center po-up" style={{ animationDelay: "90ms" }}>
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
          {/* 1: entra izquierda */}
          <div data-anim className="po-left" style={{ animationDelay: "220ms" }}>
            <Card
              title="Fondos Públicos"
              desc="Programas de ENAMI, GORE y Corfo orientados a pequeña minería."
              icon={<TileIcon variant="publicFunds" className="text-[#C58B1E]" />}
            />
          </div>

          {/* 2: entra “pop” (destacada) */}
          <div data-anim className="po-pop" style={{ animationDelay: "340ms" }}>
            <Card
              title="Profit-Share"
              desc="Acuerdos de participación en utilidades con aportantes privados."
              icon={<TileIcon variant="profitShare" className="text-[#C58B1E]" />}
            />
          </div>

          {/* 3: entra derecha */}
          <div data-anim className="po-right" style={{ animationDelay: "460ms" }}>
            <Card
              title="Arriendo Operacional"
              desc="Contratos por metro avanzado o tonelada para reducir CAPEX inicial."
              icon={
                <TileIcon variant="operationalLease" className="text-[#C58B1E]" />
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
