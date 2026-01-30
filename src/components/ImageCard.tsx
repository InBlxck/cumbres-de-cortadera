export default function ImageCard({
  title,
  desc,
  imgSrc,
  imgAlt,
}: {
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt: string;
}) {
  return (
    <div className="relative pt-[110px] sm:pt-[130px]">
      {/* Círculo flotante */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <div className="h-[160px] w-[160px] sm:h-[190px] sm:w-[190px] lg:h-[210px] lg:w-[210px] overflow-hidden rounded-full border-[6px] border-[#CCCCCF] bg-white shadow-[0_14px_30px_rgba(0,0,0,0.20)]">
          <img
            src={imgSrc}
            alt={imgAlt}
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>

      {/* Tarjeta */}
      <div
        className="
          rounded-3xl
          bg-[#F3F5F6]
          px-6 sm:px-10 lg:px-16
          pb-10 sm:pb-12 lg:pb-14
          pt-[90px] sm:pt-[105px] lg:pt-[110px]
          text-center
          shadow-[0_24px_60px_rgba(0,0,0,0.14)]
          min-h-[360px] sm:min-h-[400px] lg:min-h-[420px]
        "
      >
        {/* Título con rectángulo */}
        <div className="flex justify-center">
          <div
            className="
              flex
              h-[40px] md:h-[42px]
              w-full max-w-[260px] md:max-w-[280px]
              items-center
              justify-center
              rounded-lg
              border
              border-[#E2E2E2]
              bg-[#E2E2E2]
              px-4
            "
          >
            <h3 className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold text-[#192338]">
              {title}
            </h3>
          </div>
        </div>

        {/* Descripción */}
        <p className="mx-auto mt-5 max-w-[42ch] text-[16px] sm:text-[18px] leading-relaxed text-slate-600">
          {desc}
        </p>
      </div>
    </div>
  );
}
