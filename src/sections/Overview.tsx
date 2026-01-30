import { useEffect, useState } from "react";
import ImageCard from "../components/ImageCard";

// Imágenes
import aboutImg from "../assets/photos/about.jpg";
import investmentImg from "../assets/photos/investment.jpg";
import locationImg from "../assets/photos/location.jpg";

type OverviewItem = {
  title: string;
  desc: string;
  imgSrc: string;
};

export default function Overview() {
  const [visible, setVisible] = useState(false);

  const items: OverviewItem[] = [
    {
      title: "Qué producimos",
      desc: "Resumen de los principales minerales objetivo, enfoque del proyecto y su potencial.",
      imgSrc: aboutImg,
    },
    {
      title: "Dónde operamos",
      desc: "Contexto territorial, acceso, infraestructura y cercanía a servicios relevantes.",
      imgSrc: locationImg,
    },
    {
      title: "Inversión",
      desc: "Estructura, modalidad e hitos para evaluación. Acceso a documentación técnica.",
      imgSrc: investmentImg,
    },
  ];

  // Animación al entrar en viewport
  useEffect(() => {
    const el = document.getElementById("overview-cards");
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setVisible(true);
      },
      { threshold: 0.25 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-[#EEF1F2] pt-12 pb-20 lg:pt-14 lg:pb-24">
      {/* CSS local para animaciones */}
      <style>{`
        @keyframes overviewFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .overview-item {
          opacity: 0;
          transform: translateY(16px);
        }

        .overview-visible .overview-item {
          animation: overviewFadeUp 720ms cubic-bezier(.2,.8,.2,1) both;
        }
      `}</style>

      <div className="mx-auto max-w-[1320px] px-6">
        {/* Cards */}
        <div
          id="overview-cards"
          className={`grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10 ${
            visible ? "overview-visible" : ""
          }`}
        >
          {items.map((item, i) => (
            <div
              key={item.title}
              className="overview-item"
              style={{ animationDelay: `${120 + i * 120}ms` }}
            >
              <ImageCard
                title={item.title}
                desc={item.desc}
                imgSrc={item.imgSrc}
                imgAlt={item.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
