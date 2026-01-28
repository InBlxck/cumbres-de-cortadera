import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ImageCard from "../components/ImageCard";

import locationImg from "../assets/photos/location.jpg";

export default function Location() {
  return (
    <section id="ubicacion" className="py-16 border-t border-white/10">
      <Container>
        <SectionTitle
          eyebrow="Territorio"
          title="Ubicación y accesos"
          subtitle="Describe región, comuna, rutas, logística y cercanía a servicios relevantes."
        />

        <ImageCard
          title="Contexto territorial"
          subtitle="Aquí incorporamos información de accesos, distancia a centros urbanos y condiciones relevantes."
          imageSrc={locationImg}
        >
          <ul className="space-y-2 text-muted list-disc pl-5">
            <li>Región: —</li>
            <li>Comuna: —</li>
            <li>Acceso principal: —</li>
          </ul>
        </ImageCard>
      </Container>
    </section>
  );
}
