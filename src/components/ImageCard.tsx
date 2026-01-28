import type { ReactNode } from "react";

export default function ImageCard({
  title,
  subtitle,
  imageSrc,
  children,
}: {
  title: string;
  subtitle?: string;
  imageSrc: string;
  children?: ReactNode;
}) {
  return (
    <div className="grid lg:grid-cols-2 gap-6 items-stretch">
      <div className="rounded-3xl border border-white/10 bg-card/30 p-7">
        <div className="text-xl font-semibold">{title}</div>
        {subtitle && <p className="mt-3 text-muted leading-relaxed">{subtitle}</p>}
        {children && <div className="mt-5">{children}</div>}
      </div>

      <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 relative">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover opacity-90"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
      </div>
    </div>
  );
}
