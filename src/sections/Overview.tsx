import React from "react";

// ✅ Tus fotos locales
import aboutImg from "../assets/photos/about.jpg";
import investmentImg from "../assets/photos/investment.jpg";
import locationImg from "../assets/photos/location.jpg";

type OverviewItem = {
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
};

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`h-6 w-6 ${className}`}
      aria-hidden="true"
    >
      <path
        d="M5 12h12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Overview() {
  const items: OverviewItem[] = [
    {
      title: "Qué producimos",
      description:
        "Resumen de los principales minerales objetivo, enfoque del proyecto y su potencial.",
      imageSrc: aboutImg,
      href: "#resumen",
    },
    {
      title: "Dónde operamos",
      description:
        "Contexto territorial, acceso, infraestructura y cercanía a servicios relevantes.",
      imageSrc: locationImg,
      href: "#ubicacion",
    },
    {
      title: "Inversión",
      description:
        "Estructura, modalidad e hitos para evaluación. Acceso a documentación técnica.",
      imageSrc: investmentImg,
      href: "#inversion",
    },
  ];

  return (
    <section className="bg-white">
      {/* Mismo ancho que el Hero (1350px) + subir las tarjetas */}
      <div className="mx-auto max-w-[1350px] px-6 pt-6 pb-14 -mt-24 md:-mt-28 lg:-mt-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <a
              key={item.title}
              href={item.href ?? "#"}
              className="group block overflow-hidden rounded-2xl bg-white shadow-[0_18px_50px_rgba(0,0,0,0.08)] ring-1 ring-black/5 transition-transform hover:-translate-y-0.5"
            >
              {/* Imagen */}
              <div className="relative h-52 w-full overflow-hidden sm:h-56">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>

              {/* Contenido */}
              <div className="p-7">
                <h3 className="text-xl font-semibold text-black/85">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black/60">
                  {item.description}
                </p>

                {/* Flecha (color del fondo del logo) */}
                <div className="mt-7">
                  <span className="inline-flex items-center gap-2 text-[#0B1B2B]">
                    <ArrowRight className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
