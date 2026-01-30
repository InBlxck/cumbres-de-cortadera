import { useEffect, useState } from "react";
import ImageCard from "../components/ImageCard";

// Imágenes
import aboutImg from "../assets/photos/about.png";
import investmentImg from "../assets/photos/investment.png";
import locationImg from "../assets/photos/location.png";

type OverviewItem = {
  title: string;
  desc: string;
  imgSrc: string;
  targetId: string;
};

export default function Overview() {
  const [visible, setVisible] = useState(false);

  const items: OverviewItem[] = [
    {
      title: "Qué producimos",
      desc: "Mineralización de óxidos y sulfuros de cobre, con presencia de oro y plata.",
      imgSrc: aboutImg,
      targetId: "resumen",
    },
    {
      title: "Dónde operamos",
      desc: "Ubicación del proyecto, accesos terrestres e infraestructura disponible.",
      imgSrc: locationImg,
      targetId: "ubicacion",
    },
    {
      title: "Inversión",
      desc: "Oportunidad de participación, requerimientos de capital y acceso a información técnica.",
      imgSrc: investmentImg,
      targetId: "investors",
    },
  ];

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
    <section className="bg-[#EEF1F2] pt-14 pb-20 lg:pt-16 lg:pb-24">
      <style>{`
        @keyframes overviewFadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .overview-item { opacity: 0; transform: translateY(16px); }
        .overview-visible .overview-item {
          animation: overviewFadeUp 720ms cubic-bezier(.2,.8,.2,1) both;
        }
      `}</style>

      <div className="mx-auto max-w-[1320px] px-6">
        <div
          id="overview-cards"
          className={`grid grid-cols-1 gap-9 md:grid-cols-3 ${
            visible ? "overview-visible" : ""
          }`}
        >
          {items.map((item, i) => (
            <div
              key={item.title}
              className="overview-item min-h-[340px]"
              style={{ animationDelay: `${120 + i * 120}ms` }}
            >
              <ImageCard
                title={item.title}
                desc={item.desc}
                imgSrc={item.imgSrc}
                imgAlt={item.title}
                targetId={item.targetId}
                offsetTopPx={96}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
