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

  return (
    <section className="bg-[#EEF1F2] pt-12 pb-20 lg:pt-14 lg:pb-24">
      <div className="mx-auto max-w-[1320px] px-6">
        {/* Header sección */}
        <div className="max-w-[720px]">
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900">
            Visión general del proyecto
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
            Una mirada clara a los principales pilares del activo: producción,
            ubicación e inversión.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
          {items.map((item) => (
            <ImageCard
              key={item.title}
              title={item.title}
              desc={item.desc}
              imgSrc={item.imgSrc}
              imgAlt={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
