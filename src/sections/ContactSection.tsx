import { useState } from "react";
import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.2, 0.8, 0.2, 1],
      delay: 0.08 * i,
    },
  }),
};

const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

export default function ContactSection() {
  // ✅ Modal (form oculto)
  const [modalOpen, setModalOpen] = useState(false);
  const [leadType, setLeadType] = useState<"reunion" | "oferta">("reunion");

  function openLead(type: "reunion" | "oferta") {
    setLeadType(type);
    setModalOpen(true);
  }

  function closeLead() {
    setModalOpen(false);
  }

  // ✅ IMPORTANTE: Para que Netlify registre submissions en SPAs,
  // dejamos que el form haga POST nativo (sin fetch / sin preventDefault).

  const primary = [
    {
      label: "Teléfono",
      value: "(+56 9) 55279886",
      icon: PhoneIcon,
    },
    {
      label: "Oficina",
      value: "Amunátegui 277 - piso 12, Santiago",
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
      key: "reunion" as const,
      title: "Solicitar Reunión",
      desc: "Agende una reunión con nuestro equipo técnico",
      icon: CalendarIcon,
    },
    {
      key: "oferta" as const,
      title: "Presentar Oferta",
      desc: "Envíe su propuesta de inversión",
      icon: DollarIcon,
    },
  ];

  return (
    <section id="contacto" className="bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mb-14 text-center"
        >
          <motion.p
            variants={fadeUp}
            custom={0}
            className="text-xs font-semibold uppercase tracking-[0.22em] text-brand"
          >
            INVERSIÓN
          </motion.p>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="mt-3 text-3xl sm:text-4xl font-semibold text-slate-900"
          >
            Contacto
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mx-auto mt-4 h-[3px] w-14 rounded-full bg-brand"
          />

          <motion.p
            variants={fadeUp}
            custom={3}
            className="mx-auto mt-6 max-w-3xl text-sm sm:text-base text-slate-600"
          >
            Para coordinar reuniones, recibir propuestas de inversión o solicitar
            versiones completas de los informes técnicos.
          </motion.p>
        </motion.div>

        {/* Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* IZQ */}
          <motion.div
            className="lg:col-span-5"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className={[
                "rounded-3xl bg-[#192338] p-8",
                "shadow-[0_22px_60px_rgba(0,0,0,0.22)] ring-1 ring-white/5",
                "border border-white/10",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65">
                    Información de contacto
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">
                    Coordinación & Data Room
                  </h3>
                </div>

                <div className="hidden sm:block">
                  <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                    Respuesta rápida
                  </span>
                </div>
              </div>

              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
                className="mt-7 space-y-4"
              >
                {primary.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      variants={fadeUp}
                      custom={idx}
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18 }}
                      className={[
                        "flex items-start gap-4 rounded-2xl",
                        "border border-white/10 bg-white/[0.06] p-5",
                        "transition hover:bg-white/[0.08]",
                      ].join(" ")}
                    >
                      <div
                        className={[
                          "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                          "border border-white/20 bg-white/10 text-white",
                          "shadow-[0_10px_24px_rgba(0,0,0,0.30)]",
                        ].join(" ")}
                      >
                        <Icon className="h-6 w-6" />
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm text-white/60">{item.label}</p>
                        <p className="mt-1 text-base font-semibold text-white">
                          {item.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>

              <div className="mt-7 h-px w-full bg-white/10" />

              <p className="mt-6 text-sm text-white/60 leading-relaxed">
                Si requiere acceso a documentación técnica, podemos habilitar el
                Data Room bajo solicitud.
              </p>
            </motion.div>
          </motion.div>

          {/* DER */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <div className="grid grid-cols-1 gap-6">
              {actions.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeUp}
                    custom={idx}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 18 }}
                    className={[
                      "group relative overflow-hidden rounded-3xl",
                      "bg-[#192338] p-8",
                      "shadow-[0_22px_60px_rgba(0,0,0,0.22)] ring-1 ring-white/5",
                      "border border-white/10",
                    ].join(" ")}
                  >
                    {/* Glow sutil */}
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                      <div className="absolute -top-24 -right-24 h-56 w-56 rounded-full bg-brand/15 blur-3xl" />
                    </div>

                    <div className="relative">
                      <div className="flex items-start justify-between gap-5">
                        <div
                          className={[
                            "flex h-12 w-12 items-center justify-center rounded-xl",
                            "border border-white/20 bg-white/10 text-white",
                            "shadow-[0_10px_24px_rgba(0,0,0,0.30)]",
                          ].join(" ")}
                        >
                          <Icon className="h-6 w-6" />
                        </div>

                        <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/70">
                          Acción
                        </span>
                      </div>

                      <h3 className="mt-5 text-lg font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm text-white/65 leading-relaxed">
                        {item.desc}
                      </p>

                      <motion.button
                        type="button"
                        onClick={() => openLead(item.key)}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 300, damping: 18 }}
                        className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-black/90 hover:bg-white/90"
                      >
                        Continuar <span className="text-black/70">→</span>
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* TIP */}
          <motion.div
            className="lg:col-span-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="mt-2 flex justify-center">
              <div className="w-full max-w-[760px] rounded-2xl border border-[#C58B1E]/30 bg-[#FFF6E6] px-6 py-4 text-center">
                <p className="text-sm text-[#7A5A12] leading-relaxed">
                  <span className="font-semibold uppercase tracking-wide text-[#C58B1E]">
                    Tip:
                  </span>{" "}
                  Si ya tiene una propuesta, adjunte un resumen ejecutivo y su estructura
                  de inversión sugerida.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= MODAL FORM (Netlify) ================= */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0 bg-black/70" onClick={closeLead} />

          <div className="relative w-[92vw] max-w-[720px] rounded-3xl bg-[#192338] p-6 sm:p-8 border border-white/10 shadow-[0_22px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/65">
                  {leadType === "reunion" ? "Solicitud" : "Oferta"}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  {leadType === "reunion"
                    ? "Solicitar reunión"
                    : "Presentar oferta de inversión"}
                </h3>
                <p className="mt-2 text-sm text-white/65">
                  Completa el formulario y nos contactaremos a la brevedad.
                </p>
              </div>

              <button
                type="button"
                onClick={closeLead}
                className="rounded-xl bg-white/10 px-3 py-2 text-sm font-semibold text-white/80 hover:bg-white/15"
                aria-label="Cerrar"
              >
                ✕
              </button>
            </div>

            <form
              name="solicitudes"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              action="/"
              className="mt-6 grid gap-4"
            >
              <input type="hidden" name="form-name" value="solicitudes" />

              <p className="hidden">
                <label>
                  No llenar: <input name="bot-field" />
                </label>
              </p>

              <input type="hidden" name="tipo" value={leadType} />

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  name="nombre"
                  required
                  placeholder="Nombre"
                  className="h-12 rounded-2xl px-4 border border-white/10 bg-white/[0.06] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Correo"
                  className="h-12 rounded-2xl px-4 border border-white/10 bg-white/[0.06] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              </div>

              <input
                name="telefono"
                placeholder="Teléfono (opcional)"
                className="h-12 rounded-2xl px-4 border border-white/10 bg-white/[0.06] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              />

              <textarea
                name="mensaje"
                required
                placeholder={
                  leadType === "reunion"
                    ? "Cuéntanos disponibilidad, tema y objetivo de la reunión..."
                    : "Cuéntanos tu oferta, ticket, plazos y estructura sugerida..."
                }
                className="min-h-[140px] rounded-2xl p-4 border border-white/10 bg-white/[0.06] text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              />

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-black/90 hover:bg-white/90 disabled:opacity-60"
                >
                  Enviar
                  <span className="text-black/70">→</span>
                </button>
              </div>

            </form>
          </div>
        </div>
      )}
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
