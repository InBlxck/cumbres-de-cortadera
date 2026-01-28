import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";
import { MILESTONES } from "../lib/constants";

export default function Milestones() {
  return (
    <section id="hitos" className="py-18 md:py-20 border-t border-white/10">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow={MILESTONES.eyebrow}
            title={MILESTONES.title}
            subtitle={MILESTONES.subtitle}
          />
        </Reveal>

        <div className="relative">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
          <div className="space-y-4">
            {MILESTONES.items.map((m, i) => (
              <Reveal key={m.title} delay={i * 100}>
                <div className="grid md:grid-cols-[24px_1fr] gap-4 items-start">
                  <div className="hidden md:flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-card/30">
                    <span className="h-2 w-2 rounded-full bg-teal" />
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-card/25 p-7">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="text-lg font-semibold">{m.title}</div>
                      <div className="text-xs text-muted rounded-full border border-white/10 bg-bg/30 px-3 py-1">
                        {m.date}
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2 text-muted list-disc pl-5">
                      {m.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
