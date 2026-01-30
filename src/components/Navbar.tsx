import { useEffect, useMemo, useState } from "react";
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    setMobileOpen(false);
  };

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
    : "bg-transparent backdrop-blur-xl";

  // ✅ FIX: separar el divider para fondo (bg-*) y para borde (border-*)
  const dividerLine = scrolled ? "bg-slate-200" : "bg-white/15";
  const dividerBorder = scrolled ? "border-slate-200" : "border-white/15";

  const NavContainer = ({ children }: { children: React.ReactNode }) => (
    <div className="w-full px-6 lg:px-10">{children}</div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <div className={`w-full transition-all duration-300 ${wrapperBg}`}>
        {/* Línea superior */}
        <div
          className={`h-[2px] w-full transition-all duration-300 ${
            scrolled
              ? "bg-[#C58B1E]"
              : "bg-gradient-to-r from-[#C58B1E]/70 via-white/20 to-[#C58B1E]/70"
          }`}
        />

        {/* TOP BAR */}
        <NavContainer>
          <div className="flex h-12 items-center justify-end gap-6">
            <a
              href="#contacto"
              className={`text-[15px] md:text-[16px] font-medium transition-colors duration-200 ${topText} ${topHover}`}
              onClick={() => setMobileOpen(false)}
            >
              Contacto
            </a>

            <button
              type="button"
              className={`inline-flex items-center gap-2 text-[15px] md:text-[16px] font-medium transition-colors duration-200 ${topText} ${topHover}`}
              onClick={() => setMobileOpen(false)}
            >
              Español
              <span className={scrolled ? "text-slate-500" : "text-white/70"}>
                ▾
              </span>
            </button>
          </div>
        </NavContainer>

        {/* Divider */}
        <NavContainer>
          <div
            className={`h-[2px] rounded-full transition-all duration-300 ${
              scrolled ? dividerLine : "bg-white/80"
            }`}
          />
        </NavContainer>

        {/* MAIN NAV */}
        <NavContainer>
          <div className="flex h-[84px] items-center gap-10">
            {/* Logo */}
            <a
              href="#top"
              className="flex items-center shrink-0"
              onClick={() => setMobileOpen(false)}
            >
              <img
                src={logo}
                alt="Minería del Sur"
                className="h-14 w-14 md:h-16 md:w-16 object-contain"
              />
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {NAV.map((l) => {
                const isActive = active === l.href;

                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => handleNavClick(l.href)}
                    className={[
                      "group relative px-2 py-2 rounded-md",
                      "text-[16px] md:text-[17px] font-semibold tracking-wide",
                      "transition-all duration-300",
                      "hover:-translate-y-[1px]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C58B1E]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
                      linkBase,
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "absolute inset-0 rounded-md transition duration-300",
                        linkBgHover,
                      ].join(" ")}
                    />

                    <span className="pointer-events-none absolute -inset-2 rounded-xl opacity-0 blur-xl transition duration-300 group-hover:opacity-100">
                      <span className="absolute inset-0 rounded-xl bg-[#C58B1E]/10" />
                    </span>

                    <span className="relative z-10">{l.label}</span>

                    <span
                      className={[
                        "absolute left-2 right-2 -bottom-[7px]",
                        "h-[2px] rounded-full bg-[#C58B1E]",
                        "transition-transform duration-300 origin-left",
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      ].join(" ")}
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
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
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
        </NavContainer>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <div className={`lg:hidden border-t ${dividerBorder}`}>
            <NavContainer>
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
            </NavContainer>
          </div>
        )}
      </div>
    </header>
  );
}
