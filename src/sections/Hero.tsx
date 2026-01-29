import { SITE } from "../lib/constants";
import heroImg from "../assets/photos/hero.jpg";

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-8 w-7 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 12h12M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TileIcon({
  variant,
  className = "",
}: {
  variant: "doc" | "globe" | "handshake" | "people";
  className?: string;
}) {
  const common = "h-6 w-6 text-black/60";
  if (variant === "doc") {
    return (
      <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none">
        <path
          d="M7 3h7l3 3v15a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M14 3v4a1 1 0 0 0 1 1h4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M8 12h8M8 16h6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (variant === "globe") {
    return (
      <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M2 12h20"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M12 2c3 3 3 17 0 20M12 2c-3 3-3 17 0 20"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (variant === "handshake") {
    return (
      <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none">
        <path
          d="M8 12l2 2a2 2 0 0 0 3 0l1-1"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 10l5-5 4 4-5 5-4-4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M21 10l-5-5-6 6 5 5 6-6Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  return (
    <svg className={`${common} ${className}`} viewBox="0 0 24 24" fill="none">
      <path
        d="M16 11a3 3 0 1 0-6 0 3 3 0 0 0 6 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M4 21a8 8 0 0 1 16 0"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M7.5 10a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M1.5 21a6.5 6.5 0 0 1 6.2-5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Hero() {
  const Wide = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full px-4 sm:px-6 lg:px-10">{children}</div>
  );

  return (
    <section id="top" className="relative pt-[var(--nav-h)]">
      {/* ✅ Wrapper general */}
      <div className="relative w-full overflow-visible">
        {/* ✅ HERO */}
        <div className="relative w-full overflow-hidden">
          <div className="relative h-[75vh] sm:h-[85vh] lg:h-[90vh] min-h-[520px] sm:min-h-[560px] w-full">
            <img
              src={heroImg}
              alt={SITE.project}
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/35" />

            {/* texto */}
            <div className="absolute inset-0">
              <Wide>
                 <div className="flex h-full items-start pt-[calc(var(--nav-h)+12rem)] sm:pt-[calc(var(--nav-h)+18rem)] lg:pt-[calc(var(--nav-h)+14rem)]">

                  <div className="max-w-[640px] pl-6 sm:pl-10 lg:pl-28">
                    <div className="text-xs md:text-sm font-semibold tracking-widest uppercase text-white/70">
                      Proyecto minero · Chile
                    </div>

                    <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-white">
                      {SITE.project}
                    </h1>

                    <p className="mt-4 text-sm sm:text-base md:text-lg text-white/85 leading-relaxed">
                      {SITE.tagline}
                    </p>

                    <p className="mt-5 text-xs sm:text-sm md:text-base text-white/70">
                      Desarrollo responsable, trazabilidad y un camino claro hacia inversión.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
                      <a
                        href="#contacto"
                        className="inline-flex items-center justify-center rounded-xl bg-white px-5 sm:px-6 py-3 font-semibold text-black/90 hover:bg-white/90 transition"
                      >
                        Solicitar reunión
                      </a>

                      <a
                        href="#documentos"
                        className="inline-flex items-center justify-center rounded-xl border border-white/45 px-5 sm:px-6 py-3 font-semibold text-white hover:bg-white/10 transition"
                      >
                        Ver Data Room
                      </a>
                    </div>
                  </div>
                </div>
              </Wide>
            </div>
          </div>
        </div>

        {/* ✅ TRANSICIÓN */}
        <div className="relative">
          {/* Blanco base (responsive) */}
          <div className="absolute inset-x-0 bottom-0 h-[220px] sm:h-[240px] lg:h-[260px] bg-white" />

          <Wide>
            <div className="relative">
              {/* Tarjeta flotante (responsive translate) */}
              <div className="absolute left-1/2 top-0 z-20 w-full max-w-[1350px] -translate-x-1/2 -translate-y-[18%] sm:-translate-y-[22%] lg:-translate-y-[25%] rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.14)] overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  <a
                    href="#resumen"
                    className="group p-6 sm:p-8 min-h-[260px] sm:min-h-[320px] lg:min-h-[400px] border-b border-black/10 md:border-r md:border-b lg:border-b-0 lg:border-r flex flex-col"
                  >
                    <TileIcon variant="doc" />
                    <h3 className="mt-5 text-lg font-semibold text-black/85 leading-snug">
                      Resumen del proyecto
                    </h3>

                    <p className="mt-3 text-sm text-black/60 leading-relaxed">
                      Presentación breve del activo y próximos pasos.
                    </p>

                    <span className="mt-auto pt-6 text-brand font-semibold">
                      <span className="inline-block text-[#0B2E2B] transition-transform group-hover:translate-x-1">
                        <ArrowRight />
                      </span>
                    </span>
                  </a>

                  <a
                    href="#ubicacion"
                    className="group p-6 sm:p-8 min-h-[220px] sm:min-h-[260px] lg:min-h-[400px] border-b border-black/10 md:border-b lg:border-b-0 lg:border-r flex flex-col"
                  >
                    <TileIcon variant="globe" />
                    <h3 className="mt-5 text-lg font-semibold text-black/85 leading-snug">
                      Ubicación & acceso
                    </h3>
                    <p className="mt-3 text-sm text-black/60 leading-relaxed">
                      Región, entorno e infraestructura relevante.
                    </p>
                    <span className="mt-auto pt-6 text-brand font-semibold">
                      <span className="inline-block text-[#0B2E2B] transition-transform group-hover:translate-x-1">
                        <ArrowRight />
                      </span>
                    </span>
                  </a>

                  <a
                    href="#inversion"
                    className="group p-6 sm:p-8 min-h-[220px] sm:min-h-[260px] lg:min-h-[400px] border-b border-black/10 md:border-r md:border-b-0 lg:border-r flex flex-col"
                  >
                    <TileIcon variant="handshake" />
                    <h3 className="mt-5 text-lg font-semibold text-black/85 leading-snug">
                      Oportunidad de inversión
                    </h3>
                    <p className="mt-3 text-sm text-black/60 leading-relaxed">
                      Estructura, modalidad e hitos.
                    </p>
                    <span className="mt-auto pt-6 text-brand font-semibold">
                      <span className="inline-block text-[#0B2E2B] transition-transform group-hover:translate-x-1">
                        <ArrowRight />
                      </span>
                    </span>
                  </a>

                  <a
                    href="#contacto"
                    className="group p-6 sm:p-8 min-h-[220px] sm:min-h-[260px] lg:min-h-[400px] md:border-b-0 flex flex-col"
                  >
                    <TileIcon variant="people" />
                    <h3 className="mt-5 text-lg font-semibold text-black/85 leading-snug">
                      Contacto & Data Room
                    </h3>
                    <p className="mt-3 text-sm text-black/60 leading-relaxed">
                      Acceso a información y documentos.
                    </p>
                    <span className="mt-auto pt-6 text-brand font-semibold">
                      <span className="inline-block text-[#0B2E2B] transition-transform group-hover:translate-x-1">
                        <ArrowRight />
                      </span>
                    </span>
                  </a>
                </div>
              </div>

              {/* ✅ Spacer responsive */}
              <div className="h-[260px] sm:h-[300px] lg:h-[400px]" />
            </div>
          </Wide>

          {/* ✅ Continuidad blanca */}
          <div className="bg-white h-16 sm:h-20 lg:h-24" />
        </div>
      </div>
    </section>
  );
}
