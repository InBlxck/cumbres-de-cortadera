import { useEffect, useState } from "react";

export default function GeologyAndMining() {
  const mineralizacionBullets = [
    "Óxidos de cobre (crisocola, atacamita)",
    "Vetas de cuarzo con oro y sulfuros",
    "Sistemas de fallas identificados",
  ];

  const parametros = [
    { label: "REM inicial", value: "2.5" },
    { label: "Tamaño de banco", value: "10 metros" },
    { label: "Escala de equipos", value: "Mediana" },
    { label: "Prestripping", value: "Previsto" },
  ];

  const metodos = [
    {
      tag: "Cielo Abierto",
      title: "Cantera en ladera",
      desc: "Para cuerpos mantiformes con banqueo descendente (bancos de 10m).",
    },
    {
      tag: "Subterráneo",
      title: "Corte y relleno",
      desc: "Para sectores con vetas angostas controladas.",
    },
  ];

  const operaciones = [
    { title: "Perforación", desc: "Tronadura controlada" },
    { title: "Carguío", desc: "Palas y cargadores" },
    { title: "Transporte", desc: "Camiones tolva" },
    { title: "Fortificación", desc: "Labores de seguridad" },
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById("geologia-operacion");
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setVisible(true);
      },
      { threshold: 0.14 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="geologia-operacion" className="bg-white py-20">
      {/* Animaciones (CSS local) */}
      <style>{`
        @keyframes gUp { from {opacity:0; transform: translateY(16px);} to {opacity:1; transform: translateY(0);} }
        @keyframes gLeft { from {opacity:0; transform: translateX(-16px);} to {opacity:1; transform: translateX(0);} }
        @keyframes gRight { from {opacity:0; transform: translateX(16px);} to {opacity:1; transform: translateX(0);} }
        @keyframes gPop { from {opacity:0; transform: translateY(14px) scale(0.985);} to {opacity:1; transform: translateY(0) scale(1);} }

        .g-wrap [data-anim] { opacity: 0; }
        .g-wrap.is-visible .g-up[data-anim] { animation: gUp 720ms cubic-bezier(.2,.8,.2,1) both; }
        .g-wrap.is-visible .g-left[data-anim] { animation: gLeft 720ms cubic-bezier(.2,.8,.2,1) both; }
        .g-wrap.is-visible .g-right[data-anim] { animation: gRight 720ms cubic-bezier(.2,.8,.2,1) both; }
        .g-wrap.is-visible .g-pop[data-anim] { animation: gPop 760ms cubic-bezier(.2,.8,.2,1) both; }

        @media (prefers-reduced-motion: reduce) {
          .g-wrap [data-anim] { opacity: 1 !important; animation: none !important; transform: none !important; }
        }
      `}</style>

      <div
        className={[
          "mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 g-wrap",
          visible ? "is-visible" : "",
        ].join(" ")}
      >
        {/* Header */}
        <div
          data-anim
          className="mb-12 text-center g-up"
          style={{ animationDelay: "80ms" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
            Aspectos técnicos
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-slate-900">
            Geología y Explotación
          </h2>
          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-brand" />
          <p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base text-slate-600">
            Información técnica ordenada para evaluación rápida y coordinación operativa.
          </p>
        </div>

        {/* Bloque principal: 2 columnas */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Mineralización */}
          <div
            data-anim
            className="g-left rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
            style={{ animationDelay: "180ms" }}
          >
            <SectionTitle title="Mineralización" />

            <p className="mt-4 text-sm leading-relaxed text-slate-600">
              La mineralización se interpreta como{" "}
              <span className="font-semibold text-slate-800">vetiforme</span> y{" "}
              <span className="font-semibold text-slate-800">mantiforme</span>, asociada a una secuencia
              volcano-sedimentaria del Paleógeno y eventuales intrusivos monzodioríticos/graníticos.
            </p>

            <ul className="mt-5 space-y-3">
              {mineralizacionBullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-brand" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-[#C58B1E]/40 bg-[#C58B1E]/10 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#C58B1E]">
                Nota técnica
              </p>
              <p className="mt-2 text-sm text-[#7A5A16] leading-relaxed">
                Síntesis operativa. Documentación completa y referencias disponibles vía Data Room bajo solicitud.
              </p>
            </div>
          </div>

          {/* Parámetros */}
          <div
            data-anim
            className="g-right rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
            style={{ animationDelay: "240ms" }}
          >
            <div className="flex items-end justify-between gap-4">
              <SectionTitle title="Parámetros operacionales" />
              <span className="text-xs font-semibold text-slate-500">Actualizado</span>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200">
              <table className="w-full text-sm">
                <tbody>
                  {parametros.map((p, idx) => (
                    <tr key={p.label} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                      <td className="px-5 py-4 text-slate-600">{p.label}</td>
                      <td className="px-5 py-4 text-right font-semibold text-slate-900">
                        {p.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <MiniPill label="Banco" value="10 m" />
              <MiniPill label="Tiempo/coord." value="Operacional" />
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Valores referenciales para planificación, dimensionamiento y coordinación.
            </p>
          </div>
        </div>

        {/* Métodos */}
        <div
          data-anim
          className="mt-10 g-pop rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.06)]"
          style={{ animationDelay: "320ms" }}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle title="Métodos de explotación" />
            <p className="text-sm text-slate-600">
              Selección por geometría del cuerpo mineralizado y control operacional.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
            {metodos.map((m, i) => (
              <div
                key={m.title}
                data-anim
                className="g-up rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
                style={{ animationDelay: `${420 + i * 90}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={[
                      "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                      m.tag === "Cielo Abierto"
                        ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100"
                        : "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100",
                    ].join(" ")}
                  >
                    {m.tag}
                  </span>

                  <div className="hidden sm:flex items-center gap-2 text-xs text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-brand" />
                    <span>Referencia</span>
                  </div>
                </div>

                <h4 className="mt-4 text-base font-semibold text-slate-900">{m.title}</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{m.desc}</p>

                <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>Aplicación operativa según condición del frente.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                    <span>Planificación compatible con bancos de 10 m (cuando aplica).</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operaciones unitarias */}
        <div
          data-anim
          className="mt-10 g-pop rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_18px_55px_rgba(15,23,42,0.06)]"
          style={{ animationDelay: "360ms" }}
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle title="Operaciones unitarias" />
            <p className="text-sm text-slate-600">
              Cadena operativa base para ejecución y seguridad.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {operaciones.map((o, i) => (
              <div
                key={o.title}
                data-anim
                className="g-up group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:bg-white hover:shadow-[0_14px_40px_rgba(15,23,42,0.08)]"
                style={{ animationDelay: `${520 + i * 90}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{o.title}</p>
                    <p className="mt-2 text-sm text-slate-600">{o.desc}</p>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-slate-200 text-slate-900">
                    {o.title === "Perforación" && <DrillIcon className="h-6 w-6" />}
                    {o.title === "Carguío" && <LoaderIcon className="h-6 w-6" />}
                    {o.title === "Transporte" && <TruckIcon className="h-6 w-6" />}
                    {o.title === "Fortificación" && <ShieldIcon className="h-6 w-6" />}
                  </div>
                </div>

                <div className="mt-4 h-[2px] w-10 rounded-full bg-brand/70 opacity-60 group-hover:opacity-100 transition" />
              </div>
            ))}
          </div>
        </div>

        {/* Nota final */}
        <div
          data-anim
          className="mt-8 text-center text-sm text-slate-500 g-up"
          style={{ animationDelay: "900ms" }}
        >
          <span className="font-semibold text-slate-700">Nota:</span> Coordinación y respaldo documental vía Data Room bajo solicitud.
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        Sección
      </p>
      <h3 className="mt-2 text-lg sm:text-xl font-semibold text-slate-900">
        {title}
      </h3>
    </div>
  );
}

function MiniPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-slate-900">{value}</p>
    </div>
  );
}

/* ===== Iconos (visibles y sobrios) ===== */
function DrillIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M7 7l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M5 9l4-4 6 6-4 4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 13l5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function LoaderIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M4 17h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 17V7l6 6v4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 11h6l-2 4h-4" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function TruckIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path d="M3 16V7h11v9H3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M14 10h4l3 3v3h-7v-6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M7 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" stroke="currentColor" strokeWidth="2" />
      <path d="M18 18a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function ShieldIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none">
      <path
        d="M12 3 20 6v6c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}
