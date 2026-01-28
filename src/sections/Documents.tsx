import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { DOCUMENTS } from "../lib/constants";
import Reveal from "../components/Reveal";

export default function Documents() {
  return (
    <section id="documentos" className="py-18 md:py-20 border-t border-white/10">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Descargas"
            title="Documentos"
            subtitle="Material de respaldo para revisión técnica y comercial."
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4">
          {DOCUMENTS.map((d, i) => (
            <Reveal key={d.name} delay={i * 90}>
              <a
                href={d.href}
                className="group rounded-3xl border border-white/10 bg-card/25 p-7 hover:bg-white/5 transition block"
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs tracking-[0.18em] uppercase text-muted">
                    {d.type}
                  </div>
                  <div className="text-xs text-white/60 group-hover:text-white/80 transition">
                    Disponible
                  </div>
                </div>
                <div className="mt-3 text-lg font-semibold">{d.name}</div>
                <div className="mt-5 text-sm text-teal">
                  Ver / Descargar →
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
