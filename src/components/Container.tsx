import type { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  variant?: "default" | "nav";
}>;

export default function Container({ children, variant = "default" }: ContainerProps) {
  // ✅ Un solo "ancho" para todo el sitio: consistente en desktop y mobile
  const base = "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10";

  if (variant === "nav") {
    // ✅ Nav usa el mismo max-width que el resto (evita saltos)
    return <div className={base}>{children}</div>;
  }

  return <div className={base}>{children}</div>;
}
