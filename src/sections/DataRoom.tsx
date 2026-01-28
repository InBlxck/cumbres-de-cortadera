import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { DATA_ROOM } from "../lib/constants";

export default function DataRoom() {
  return (
    <section id="documentos" className="py-18 md:py-20 border-t border-white/10">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Repositorio"
            title="Data Room"
            subtitle="Documentación organizada por categoría. Enlaza PDFs cuando estén listos."
          />
        </Reveal>

        <div className="space-y-6">
          {DATA_ROOM.map((cat, i) => (
            <Reveal key={cat.category} delay={i * 80}>
              <div className="rounded-3xl border border-white/10 bg-card/25 p-7">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-lg font-semibold">{cat.category}</div>
                  <div className="text-xs text-muted">
                    {cat.items.length} archivo(s)
                  </div>
                </div>

                <div className="mt-5 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((d) => (
                    <a
                      key={d.name}
                      href={d.href}
                      className="rounded-2xl border border-white/10 bg-bg/25 p-5 hover:bg-white/5 transition block"
                    >
                      <div className="flex items-center justify-between">
                        <div className="text-xs tracking-[0.18em] uppercase text-muted">
                          {d.type}
                        </div>
                        <div
                          className={`text-xs ${
                            d.status === "Disponible" ? "text-teal" : "text-white/50"
                          }`}
                        >
                          {d.status}
                        </div>
                      </div>
                      <div className="mt-2 font-semibold text-white/90">
                        {d.name}
                      </div>
                      <div className="mt-4 text-sm text-white/70">
                        {d.status === "Disponible" ? "Abrir →" : "Próximamente"}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
