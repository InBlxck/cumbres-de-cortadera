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
      <div className="relative w-full overflow-visible">
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

        {/* TRANSICIÓN */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-[220px] sm:h-[240px] lg:h-[260px] bg-white" />

          <Wide>
            <div className="relative">
              <div className="absolute left-1/2 top-0 z-20 w-full max-w-[1350px] -translate-x-1/2 -translate-y-[18%] sm:-translate-y-[22%] lg:-translate-y-[25%] rounded-3xl bg-white shadow-[0_20px_60px_rgba(0,0,0,0.14)] overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      icon: "doc",
                      title: "Resumen del proyecto",
                      text: "Presentación breve del activo y próximos pasos.",
                    },
                    {
                      icon: "globe",
                      title: "Ubicación & acceso",
                      text: "Región, entorno e infraestructura relevante.",
                    },
                    {
                      icon: "handshake",
                      title: "Oportunidad de inversión",
                      text: "Estructura, modalidad e hitos.",
                    },
                    {
                      icon: "people",
                      title: "Contacto & Data Room",
                      text: "Acceso a información y documentos.",
                    },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href="#resumen"
                      className="
                        group
                        bg-white
                        p-6 sm:p-8
                        min-h-[260px] sm:min-h-[320px] lg:min-h-[400px]
                        border border-black/5
                        flex flex-col
                        transition
                        hover:bg-slate-50
                      "
                    >
                      <TileIcon variant={item.icon as any} />
                      <h3 className="mt-5 text-lg font-semibold text-black/85 leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm text-black/60 leading-relaxed">
                        {item.text}
                      </p>
                      <span className="mt-auto pt-6 font-semibold text-[#C58B1E] transition-transform group-hover:translate-x-1">
                        <ArrowRight />
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="h-[260px] sm:h-[300px] lg:h-[400px]" />
            </div>
          </Wide>

          {/* ✅ MENOS “colchón” antes del Overview */}
          <div className="bg-white h-6 sm:h-8 lg:h-10" />
        </div>
      </div>
    </section>
  );
}
