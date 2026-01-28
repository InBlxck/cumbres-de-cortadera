import Container from "../components/Container";
import Reveal from "../components/Reveal";
import { SITE } from "../lib/constants";

import heroImg from "../assets/photos/hero.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative pt-[var(--nav-h)]">
      {/* Imagen principal */}
      <div className="relative h-[62vh] min-h-[520px] w-full overflow-hidden">
        <img
          src={heroImg}
          alt={SITE.project}
          className="h-full w-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/5 to-white/60" />
      </div>

      {/* Banda blanca con contenido */}
      <div className="bg-white">
        <Container>
          <div className="-mt-28 pb-16">
            <Reveal>
              <div className="rounded-3xl border border-black/10 bg-white/95 shadow-[0_20px_60px_rgba(0,0,0,0.14)]">
                <div className="px-8 py-10 md:px-12 md:py-12">
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-brand">
                    <span className="h-2 w-2 rounded-full bg-brand" />
                    Proyecto minero
                  </div>

                  <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight text-[#0b1220]">
                    {SITE.project}
                  </h1>

                  <p className="mt-4 max-w-2xl text-base md:text-lg text-black/70 leading-relaxed">
                    {SITE.tagline}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="#contacto"
                      className="inline-flex items-center justify-center rounded-xl bg-brand px-6 py-3 font-semibold text-white shadow-[0_12px_30px_rgba(31,78,216,0.25)] hover:bg-brand/90 transition"
                    >
                      Solicitar reunión
                    </a>

                    <a
                      href="#documentos"
                      className="inline-flex items-center justify-center rounded-xl border border-black/15 px-6 py-3 font-semibold text-black/80 hover:bg-black/5 transition"
                    >
                      Ver documentos
                    </a>
                  </div>

                  <div className="mt-10 grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-black/10 bg-white p-5">
                      <div className="text-xs uppercase tracking-wide text-black/50">
                        Ubicación
                      </div>
                      <div className="mt-1 font-semibold text-black/85">
                        Chile — Región / Comuna (por definir)
                      </div>
                    </div>

                    <div className="rounded-2xl border border-black/10 bg-white p-5">
                      <div className="text-xs uppercase tracking-wide text-black/50">
                        Mineral
                      </div>
                      <div className="mt-1 font-semibold text-black/85">
                        Cobre <span className="text-black/50">(focus)</span>
                      </div>
                      <div className="mt-1 text-sm text-black/60">
                        Detalles técnicos en ficha
                      </div>
                    </div>

                    <div className="rounded-2xl border border-black/10 bg-white p-5">
                      <div className="text-xs uppercase tracking-wide text-black/50">
                        Oportunidad
                      </div>
                      <div className="mt-1 font-semibold text-black/85">
                        Atracción de inversión
                      </div>
                      <div className="mt-1 text-sm text-black/60">
                        Roadmap por etapas + Data Room
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </div>
    </section>
  );
}
