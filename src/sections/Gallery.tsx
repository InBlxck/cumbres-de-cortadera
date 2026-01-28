import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Reveal from "../components/Reveal";

import g1 from "../assets/photos/gallery-1.jpg";
import g2 from "../assets/photos/gallery-2.jpg";
import g3 from "../assets/photos/gallery-3.jpg";
import g4 from "../assets/photos/gallery-4.jpg";

const items = [
  { src: g1, alt: "Galería 1" },
  { src: g2, alt: "Galería 2" },
  { src: g3, alt: "Galería 3" },
  { src: g4, alt: "Galería 4" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-18 md:py-20 border-t border-white/10">
      <Container>
        <Reveal>
          <SectionTitle
            eyebrow="Registro"
            title="Galería"
            subtitle="Imágenes del entorno, accesos y avances del proyecto."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.alt} delay={i * 70}>
              <div className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                <img
                  src={it.src}
                  alt={it.alt}
                  className="h-56 w-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
