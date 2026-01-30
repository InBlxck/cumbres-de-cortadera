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
    <div className="relative pt-[140px]">
      {/* Círculo flotante */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2">
        <div className="h-[210px] w-[210px] overflow-hidden rounded-full border-[6px] border-[#CCCCCF] bg-white shadow-[0_14px_30px_rgba(0,0,0,0.20)]">
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
          px-20
          pb-14
          pt-[110px]
          text-center
          shadow-[0_24px_60px_rgba(0,0,0,0.14)]
          min-h-[420px]
        "
      >
        {/* Título con rectángulo uniforme */}
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
            <h3 className="text-[18px] md:text-[20px] font-semibold text-[#192338]">
              {title}
            </h3>
          </div>
        </div>

        {/* Descripción */}
        <p className="mx-auto mt-5 max-w-[40ch] text-[18px] leading-relaxed text-slate-600">
          {desc}
        </p>
      </div>
    </div>
  );
}
