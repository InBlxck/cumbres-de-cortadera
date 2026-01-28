import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { EXEC_SUMMARY } from "../lib/constants";
import Reveal from "../components/Reveal";

export default function ExecutiveSummary() {
  return (
    <section id="resumen" className="py-18 md:py-20 border-t border-white/10">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow={EXEC_SUMMARY.eyebrow}
            title={EXEC_SUMMARY.title}
            subtitle={EXEC_SUMMARY.subtitle}
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-4">
          {EXEC_SUMMARY.blocks.map((b, i) => (
            <Reveal key={b.title} delay={i * 100}>
              <div className="rounded-3xl border border-white/10 bg-card/25 p-7 hover:bg-white/5 transition">
                <div className="text-lg font-semibold">{b.title}</div>
                <p className="mt-3 text-muted leading-relaxed">{b.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
