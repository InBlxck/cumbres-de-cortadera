import type { PropsWithChildren } from "react";

type ContainerProps = PropsWithChildren<{
  variant?: "default" | "nav";
}>;

export default function Container({ children, variant = "default" }: ContainerProps) {
  if (variant === "nav") {
    // Más parecido a sitios corporativos: ancho grande + padding consistente
    return <div className="w-full px-6 lg:px-10">{children}</div>;
  }

  // Contenedor normal para el resto del sitio
  return <div className="mx-auto w-full max-w-6xl px-5">{children}</div>;
}
