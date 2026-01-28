export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <div className={`mb-10 ${alignCls} max-w-3xl`}>
      {eyebrow && (
        <div className="text-xs tracking-[0.22em] uppercase text-muted">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-2 text-2xl md:text-3xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-3 text-muted leading-relaxed">{subtitle}</p>}
    </div>
  );
}
