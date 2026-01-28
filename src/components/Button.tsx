import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "ghost";

export default function Button({
  variant = "primary",
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-teal/50";
  const styles =
    variant === "primary"
      ? "bg-copper text-white shadow-[0_10px_30px_rgba(182,90,34,0.25)] hover:opacity-90"
      : "bg-transparent text-white border border-white/15 hover:bg-white/5";

  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
