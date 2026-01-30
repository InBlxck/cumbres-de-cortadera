import { useEffect, useState } from "react";
import { SITE } from "../lib/constants";
import heroImg from "../assets/photos/hero.jpg";

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-6 w-6 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
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
  const [mounted, setMounted] = useState(false);
  const [tilesVisible, setTilesVisible] = useState(false);

  const Wide = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full px-4 sm:px-6 lg:px-10">{children}</div>
  );

  useEffect(() => {
    const raf = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const el = document.getElementById("hero-tiles");
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setTilesVisible(true);
      },
      { threshold: 0.15 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    // ✅ FIX: sube el hero detrás del navbar, pero SIN padding-top que empuje la imagen
    <section id="top" className="relative -mt-[var(--nav-h)]">
      <style>{`
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroZoom {
          from { transform: scale(1); }
          to   { transform: scale(1.03); }
        }

        .hero-text [data-anim] { opacity: 0; transform: translateY(14px); }
        .hero-text.is-mounted [data-anim] {
          animation: heroFadeUp 720ms cubic-bezier(.2,.8,.2,1) both;
        }

        .hero-img { transform: scale(1); }
        .hero-img.is-mounted {
          animation: heroZoom 1800ms cubic-bezier(.2,.8,.2,1) both;
        }

        .hero-tiles [data-tile] { opacity: 0; transform: translateY(14px); }
        .hero-tiles.is-visible [data-tile] {
          animation: heroFadeUp 720ms cubic-bezier(.2,.8,.2,1) both;
        }
      `}</style>

      {/* HERO */}
      <div className="relative w-full overflow-hidden">
        <div className="relative h-[78svh] sm:h-[85svh] lg:h-[90svh] min-h-[460px] sm:min-h-[520px] lg:min-h-[600px] w-full">
          <img
            src={heroImg}
            alt={SITE.project}
            className={`h-full w-full object-cover object-center hero-img ${
              mounted ? "is-mounted" : ""
            }`}
            loading="eager"
            decoding="async"
          />

          {/* overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/45" />

          {/* content */}
          <div className="absolute inset-0">
            <Wide>
              <div className="flex h-full items-center sm:items-start">
               <div
                  className={`
                    hero-text ${mounted ? "is-mounted" : ""}
                    w-full max-w-3xl

                    /* ✅ DESPLAZAMIENTO HORIZONTAL (desktop) */
                    lg:ml-[6%] xl:ml-[10%]

                    /* ✅ AJUSTE VERTICAL */
                    pt-[calc(var(--nav-h)+5rem)]        /* ⬅️ mobile: baja más el texto */
                    sm:pt-[calc(var(--nav-h)+3.5rem)]   /* igual que ahora */
                    lg:pt-[calc(var(--nav-h)+4.5rem)]   /* desktop intacto */

                    pb-10 sm:pb-0
                  `}
                >
                  <div
                    data-anim
                    style={{ animationDelay: "80ms" }}
                    className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-white/75"
                  >
                    Proyecto minero · Chile
                  </div>

                  <h1
                    data-anim
                    style={{ animationDelay: "160ms" }}
                    className="
                      mt-3 sm:mt-4
                      text-3xl sm:text-4xl md:text-5xl xl:text-6xl
                      font-semibold
                      leading-[1.12] sm:leading-tight
                      text-white
                      pr-2 sm:pr-0
                    "
                  >
                    {SITE.project}
                  </h1>

                  <p
                    data-anim
                    style={{ animationDelay: "240ms" }}
                    className="
                      mt-3 sm:mt-4
                      text-sm sm:text-base md:text-lg
                      text-white/85
                      leading-relaxed
                      max-w-[60ch]
                    "
                  >
                    {SITE.tagline}
                  </p>

                  <p
                    data-anim
                    style={{ animationDelay: "320ms" }}
                    className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-base text-white/70 max-w-[62ch]"
                  >
                    Desarrollo responsable, trazabilidad y un camino claro hacia
                    inversión.
                  </p>

                  <div
                    data-anim
                    style={{ animationDelay: "420ms" }}
                    className="mt-7 sm:mt-8 flex flex-wrap gap-3 sm:gap-4"
                  >
                    <a
                      href="#contacto"
                      className="
                        group inline-flex
                        w-full sm:w-auto
                        items-center justify-center gap-2
                        rounded-xl bg-white
                        px-6 py-3
                        font-semibold text-black/90
                        transition duration-300 ease-out
                        hover:scale-[1.03]
                        hover:shadow-[0_12px_30px_rgba(0,0,0,0.18)]
                        active:scale-[0.98]
                      "
                    >
                      Solicitar reunión
                      <span className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                        <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Wide>
          </div>
        </div>
      </div>

      {/* TILES */}
      <div className="bg-white">
        <Wide>
          <div
            id="hero-tiles"
            className={`
              hero-tiles ${tilesVisible ? "is-visible" : ""}
              relative z-20 mx-auto
              -mt-14 sm:-mt-20 lg:-mt-24
              w-full max-w-[1350px]
              rounded-3xl bg-white
              shadow-[0_20px_60px_rgba(0,0,0,0.14)]
              overflow-hidden
            `}
          >
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
                  data-tile
                  style={{ animationDelay: `${120 + i * 90}ms` }}
                  className="
                    group
                    bg-white
                    p-5 sm:p-7 lg:p-8
                    border border-black/5
                    flex flex-col
                    transition
                    hover:bg-slate-50
                    min-h-[210px] sm:min-h-[240px] lg:min-h-[280px]
                  "
                >
                  <TileIcon variant={item.icon as any} />

                  <h3 className="mt-4 sm:mt-5 text-base sm:text-lg font-semibold text-black/85 leading-snug">
                    {item.title}
                  </h3>

                  <p className="mt-2.5 sm:mt-3 text-sm text-black/60 leading-relaxed">
                    {item.text}
                  </p>

                  <span className="mt-auto pt-5 sm:pt-6 font-semibold text-[#C58B1E] transition-transform group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="h-6 sm:h-8 lg:h-10" />
        </Wide>
      </div>
    </section>
  );
}
