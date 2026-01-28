import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { TECH_SHEET } from "../lib/constants";
import Reveal from "../components/Reveal";

export default function TechSheet() {
  return (
    <section id="ficha" className="py-18 md:py-20 border-t border-white/10">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Datos clave"
            title="Ficha técnica"
            subtitle="Información esencial del proyecto para lectura rápida."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TECH_SHEET.map((it, i) => (
            <Reveal key={it.k} delay={i * 60}>
              <div className="rounded-3xl border border-white/10 bg-card/25 p-6">
                <div className="text-xs tracking-[0.18em] uppercase text-muted">
                  {it.k}
                </div>
                <div className="mt-2 text-base font-semibold text-white/90">
                  {it.v}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
