export default function ContactSection() {
  const primary = [
    {
      label: "Teléfono",
      value: "(+56 9) 61811642",
      icon: PhoneIcon,
    },
    {
      label: "Oficina",
      value: "Huérfanos 1160, Of.1006, Santiago",
      icon: PinIcon,
    },
    {
      label: "Representante",
      value: "MINERÍA DEL SUR CHILE SPA",
      icon: MailIcon,
    },
  ];

  const actions = [
    {
      title: "Solicitar Reunión",
      desc: "Agende una reunión con nuestro equipo técnico",
      icon: CalendarIcon,
    },
    {
      title: "Presentar Oferta",
      desc: "Envíe su propuesta de inversión",
      icon: DollarIcon,
    },
  ];

  return (
    <section id="contacto" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            INVERSIÓN
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-slate-900">
            Contacto
          </h2>

          <div className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-brand" />

          <p className="mx-auto mt-6 max-w-3xl text-sm sm:text-base text-slate-600">
            Para coordinar reuniones, recibir propuestas de inversión o solicitar
            versiones completas de los informes técnicos.
          </p>
        </div>

        {/* Datos principales */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {primary.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="rounded-2xl border border-white/15 bg-[#0b0f18] p-7
                           shadow-[0_20px_50px_rgba(0,0,0,0.28)]
                           ring-1 ring-white/5
                           transition hover:-translate-y-[2px] hover:shadow-[0_26px_70px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-start gap-4">
                  {/* ✅ icono blanco + contorno */}
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl
                               border border-white/20 bg-white/10 text-white
                               shadow-[0_10px_24px_rgba(0,0,0,0.30)]"
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <p className="text-sm text-white/60">{item.label}</p>
                    <p className="mt-2 text-base font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Acciones */}
        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {actions.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/15 bg-[#0b0f18] p-8
                           shadow-[0_20px_50px_rgba(0,0,0,0.28)]
                           ring-1 ring-white/5
                           transition hover:-translate-y-[2px] hover:shadow-[0_26px_70px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-start gap-5">
                  {/* ✅ icono blanco + contorno */}
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl
                               border border-white/20 bg-white/10 text-white
                               shadow-[0_10px_24px_rgba(0,0,0,0.30)]"
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/65">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ================= ICONOS SVG ================= */

function PhoneIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M8 3h2l2 5-2 1c1 3 3 5 6 6l1-2 5 2v2c0 2-2 4-4 4C10 21 3 14 3 6c0-2 2-3 5-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PinIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 22s7-4.5 7-12a7 7 0 1 0-14 0c0 7.5 7 12 7 12Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function MailIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <rect x="4" y="6" width="16" height="12" stroke="currentColor" strokeWidth="2" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function CalendarIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M7 3v3M17 3v3M4 8h16M6 6h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function DollarIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M12 3v18" stroke="currentColor" strokeWidth="2" />
      <path
        d="M16 7.5c0-1.9-1.8-3.5-4-3.5s-4 1.6-4 3.5S9.8 11 12 11s4 1.6 4 3.5S14.2 18 12 18s-4-1.6-4-3.5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}
