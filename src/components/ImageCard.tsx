type ImageCardProps = {
  title: string;
  desc: string;
  imgSrc: string;
  imgAlt?: string;
  targetId: string;
  offsetTopPx?: number;
};

export default function ImageCard({
  title,
  desc,
  imgSrc,
  imgAlt,
  targetId,
  offsetTopPx = 96,
}: ImageCardProps) {
  const handleGo = () => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - offsetTopPx;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleGo();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleGo}
      onKeyDown={onKeyDown}
      aria-label={`Ver más sobre ${title}`}
      className="
        group relative h-full cursor-pointer
        rounded-2xl bg-white
        px-7 pt-16 pb-8
        shadow-sm
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:shadow-xl
        focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20
        flex flex-col
      "
    >
      {/* Imagen circular */}
      <div
        className="
          absolute -top-12 left-1/2 -translate-x-1/2
          h-24 w-24
          rounded-full overflow-hidden
          border-4 border-white shadow-md
          transition-transform duration-300 ease-out
          group-hover:-translate-y-1
        "
      >
        <img
          src={imgSrc}
          alt={imgAlt || title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Contenido */}
      <h3 className="mt-6 text-center text-lg font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-3 text-center text-sm leading-relaxed text-gray-600">
        {desc}
      </p>

      {/* CTA pegado abajo, sin aire sobrante */}
      <div className="mt-auto pt-6 flex justify-center">
        <span
          className="
            inline-flex items-center gap-2
            text-sm font-medium text-amber-600
            transition-transform duration-300
            group-hover:translate-x-1
          "
        >
          Ver más →
        </span>
      </div>
    </div>
  );
}
