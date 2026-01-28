import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ImageCard from "../components/ImageCard";
import { INVESTMENT } from "../lib/constants";

import investmentImg from "../assets/photos/investment.jpg";

export default function InvestorOpportunity() {
  return (
    <section id="inversion" className="py-16 border-t border-white/10">
      <Container>
        <SectionTitle
          eyebrow={INVESTMENT.eyebrow}
          title={INVESTMENT.title}
          subtitle={INVESTMENT.subtitle}
        />

        <ImageCard
          title="Tesis y uso de fondos"
          subtitle="La inversión se estructura en hitos medibles para reducir riesgo y acelerar avance."
          imageSrc={investmentImg}
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-white/10 bg-bg/30 p-5">
              <div className="font-semibold">Tesis</div>
              <ul className="mt-3 space-y-2 text-muted list-disc pl-5">
                {INVESTMENT.thesis.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/10 bg-bg/30 p-5">
              <div className="font-semibold">Uso de fondos</div>
              <ul className="mt-3 space-y-2 text-muted list-disc pl-5">
                {INVESTMENT.useOfFunds.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </ImageCard>
      </Container>
    </section>
  );
}
