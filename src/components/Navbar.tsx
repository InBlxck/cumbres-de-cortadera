import { useEffect, useMemo, useState } from "react";
import Container from "./Container";
import logo from "../assets/logo/mineria-del-sur.png";
import { NAV } from "../lib/constants";

export default function Navbar() {
  const [active, setActive] = useState<string>("#resumen");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const ids = useMemo(
    () => NAV.map((n) => n.href).filter((h) => h.startsWith("#")),
    []
  );

  // Detecta scroll (para cambiar a fondo blanco)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú móvil al cambiar tamaño a desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Cierra el menú móvil cuando haces click en un link
  const handleNavClick = (href: string) => {
    setActive(href);
    setMobileOpen(false);
  };

  // Sección activa (solo en desktop / general)
  useEffect(() => {
    const sections = ids
      .map((h) => document.querySelector(h))
      .filter(Boolean) as Element[];

    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0)
          )[0];

        if (visible?.target?.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0.15, 0.3] }
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [ids]);

  const topText = scrolled ? "text-slate-600" : "text-white/90";
  const topHover = scrolled ? "hover:text-slate-900" : "hover:text-white";

  const linkBase = scrolled
    ? "text-slate-800 hover:text-slate-950"
    : "text-white/90 hover:text-white";

  const linkBgHover = scrolled
    ? "group-hover:bg-slate-100"
    : "group-hover:bg-white/10";

  const wrapperBg = scrolled
    ? "bg-white shadow-[0_12px_30px_rgba(2,6,23,0.10)]"
    : "bg-bg/60 backdrop-blur-xl";

  const divider = scrolled ? "bg-slate-200" : "bg-white/15";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 m-0 p-0 w-full relative">
      {/* Línea superior (absolute para eliminar el gap de 1px) */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 ${
          scrolled
            ? "bg-brand"
            : "bg-gradient-to-r from-brand/70 via-white/20 to-brand/70"
        }`}
      />

      {/* Wrapper (pt-[2px] para compensar la línea superior) */}
      <div className={`pt-[2px] transition-all duration-300 ease-out ${wrapperBg}`}>
        {/* TOP BAR */}
        <Container>
          <div className="flex h-12 items-center justify-end gap-5 text-sm">
            <a
              href="#contacto"
              className={`transition-colors duration-200 ${topText} ${topHover}`}
              onClick={() => setMobileOpen(false)}
            >
              Contacto
            </a>

            <button
              type="button"
              className={`inline-flex items-center gap-2 transition-colors duration-200 ${topText} ${topHover}`}
              onClick={() => setMobileOpen(false)}
            >
              Español{" "}
              <span className={scrolled ? "text-slate-500" : "text-white/70"}>
                ▾
              </span>
            </button>
          </div>
        </Container>

        {/* Divider */}
        <div className={`h-px ${divider}`} />

        {/* MAIN NAV */}
        <Container>
          <div className="flex h-[84px] items-center">
            {/* Brand */}
            <a
              href="#top"
              className="flex items-center gap-4 pr-6 lg:pr-24"
              onClick={() => setMobileOpen(false)}
            >
              <img
                src={logo}
                alt="Minería del Sur"
                className="h-11 w-11 rounded-md object-contain"
              />
              <div className="leading-tight">
                <div
                  className={`text-base font-semibold transition ${
                    scrolled ? "text-slate-950" : "text-white"
                  }`}
                >
                  Minería del Sur
                </div>
                <div
                  className={`text-sm transition ${
                    scrolled ? "text-slate-500" : "text-white/70"
                  }`}
                >
                  Proyecto Cumbres de Cortadera
                </div>
              </div>
            </a>

            {/* Desktop links */}
            <nav className="hidden lg:flex items-center gap-3 ml-auto">
              {NAV.map((l) => {
                const isActive = active === l.href;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    className={`
                      group relative px-3 py-2 rounded-lg
                      text-[15px] font-semibold tracking-wide
                      transition-all duration-300
                      ${linkBase}
                    `}
                  >
                    {/* Hover pill */}
                    <span
                      className={`
                        absolute inset-0 rounded-lg transition duration-300
                        ${linkBgHover}
                      `}
                    />
                    <span className="relative z-10">{l.label}</span>

                    {/* Underline */}
                    <span
                      className={`
                        absolute left-3 right-3 -bottom-[7px]
                        h-[2px] rounded-full bg-brand
                        transition-transform duration-300 origin-left
                        ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }
                      `}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Mobile button */}
            <button
              type="button"
              className={`ml-auto lg:hidden inline-flex items-center justify-center rounded-xl border px-3 py-2 transition ${
                scrolled
                  ? "border-slate-200 text-slate-900 hover:bg-slate-100"
                  : "border-white/25 text-white hover:bg-white/10"
              }`}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Abrir menú"
              aria-expanded={mobileOpen}
            >
              {/* Icon */}
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 12H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M4 17H20"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </Container>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div
            className={`lg:hidden border-t ${
              scrolled ? "border-slate-200" : "border-white/15"
            }`}
          >
            <Container>
              <div className="py-4">
                <div className="flex flex-col gap-1">
                  {NAV.map((l) => {
                    const isActive = active === l.href;
                    return (
                      <a
                        key={l.href}
                        href={l.href}
                        onClick={() => handleNavClick(l.href)}
                        className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                          scrolled
                            ? `text-slate-800 hover:bg-slate-100 ${
                                isActive ? "bg-slate-100" : ""
                              }`
                            : `text-white/90 hover:bg-white/10 ${
                                isActive ? "bg-white/10" : ""
                              }`
                        }`}
                      >
                        {l.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </Container>
          </div>
        )}
      </div>
    </header>
  );
}
