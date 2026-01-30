import { useEffect, useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

type LatLng = [number, number];

// ===== Routing (OSRM) para "driving" (trayecto en auto por caminos) =====
async function getDrivingRouteOSRM(A: LatLng, B: LatLng): Promise<LatLng[]> {
  const [latA, lonA] = A;
  const [latB, lonB] = B;

  const url =
    `https://router.project-osrm.org/route/v1/driving/` +
    `${lonA},${latA};${lonB},${latB}` +
    `?overview=full&geometries=geojson&steps=false`;

  const res = await fetch(url);
  if (!res.ok) throw new Error("OSRM request failed");

  const data = await res.json();

  const coords: [number, number][] | undefined =
    data?.routes?.[0]?.geometry?.coordinates;

  if (!coords || coords.length < 2) throw new Error("No route geometry");

  // OSRM entrega [lon, lat] -> convertimos a [lat, lon]
  return coords.map(([lon, lat]) => [lat, lon]);
}

// ===== Marcadores A/B =====
function makeBadgeIcon(label: string, bg: string) {
  return L.divIcon({
    className: "",
    html: `
      <div style="
        width: 38px; height: 38px; border-radius: 999px;
        background: ${bg};
        display: grid; place-items: center;
        color: white; font-weight: 900; font-size: 14px;
        border: 2px solid rgba(255,255,255,0.95);
        box-shadow: 0 18px 55px rgba(0,0,0,0.45);
      ">${label}</div>
    `,
    iconSize: [38, 38],
    iconAnchor: [19, 38],
  });
}

// ===== Zoom con rueda solo con Ctrl/Meta =====
function WheelZoomGuard() {
  const map = useMap();
  const [hint, setHint] = useState(false);

  useEffect(() => {
    map.scrollWheelZoom.disable();
    const container = map.getContainer();

    const onWheel = (e: WheelEvent) => {
      if (!e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        setHint(true);
        window.clearTimeout((onWheel as any)._t);
        (onWheel as any)._t = window.setTimeout(() => setHint(false), 900);
        map.scrollWheelZoom.disable();
        return;
      }
      map.scrollWheelZoom.enable();
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      container.removeEventListener("wheel", onWheel as any);
      map.scrollWheelZoom.disable();
    };
  }, [map]);

  return (
    <div
      className={[
        "pointer-events-none absolute left-1/2 top-4 -translate-x-1/2",
        "rounded-full border border-white/15 bg-black/45 px-4 py-2",
        "text-xs text-white/85 backdrop-blur-md",
        "transition-all duration-200",
        hint ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1",
      ].join(" ")}
    >
      Usa <span className="font-semibold">Ctrl</span> + scroll para zoom
    </div>
  );
}

// ===== Card inferior (mismo alto para todas) =====
function StatCard({
  title,
  value,
  subtitle,
  icon,
}: {
  title: string;
  value: string;
  subtitle: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className={[
        "relative h-full overflow-hidden rounded-2xl border border-white/15",
        "bg-white/[0.085] p-6 shadow-[0_22px_70px_rgba(0,0,0,0.55)]",
        "transition-all duration-300 hover:-translate-y-[2px] hover:bg-white/[0.11]",
        "flex flex-col",
      ].join(" ")}
    >
      <div className="absolute left-0 top-0 h-full w-[3px] rounded-l-2xl bg-brand/80" />
      <div className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full bg-brand/15 blur-3xl" />

      <div className="relative flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black/45 text-[#C58B1E] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
            {title}
          </p>

          {/* mismos cortes/alturas visuales */}
          <p className="mt-1 text-base font-semibold text-white leading-snug line-clamp-2">
            {value}
          </p>

          <p className="mt-2 text-sm leading-relaxed text-white/65 line-clamp-3">
            {subtitle}
          </p>
        </div>
      </div>

      {/* empuja “aire” hacia abajo si faltara texto, manteniendo altura consistente */}
      <div className="mt-auto pt-2" />
    </div>
  );
}

export default function LocationLeaflet() {
  // ✅ IMPORTANTE: para que la ruta sea real por caminos, el punto B debe estar cerca de una vía
  const A: LatLng = [-27.366, -70.332]; // Copiapó
  const B: LatLng = [-27.05, -69.65]; // Ajusta al "acceso por camino" del proyecto

  const center: LatLng = useMemo(
    () => [(A[0] + B[0]) / 2, (A[1] + B[1]) / 2],
    [A, B]
  );

  const aIcon = useMemo(() => makeBadgeIcon("A", "#22c55e"), []);
  const bIcon = useMemo(() => makeBadgeIcon("B", "#ef4444"), []);

  const [route, setRoute] = useState<LatLng[]>([]);
  const [routeError, setRouteError] = useState<string | null>(null);

  // Animación sección
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setRouteError(null);
        const pts = await getDrivingRouteOSRM(A, B);
        if (!alive) return;
        setRoute(pts);
      } catch {
        if (!alive) return;
        setRouteError(
          "No se pudo calcular la ruta por carretera. Verifica que el punto B esté cercano a un camino."
        );
        setRoute([A, B]); // fallback
      }
    })();

    return () => {
      alive = false;
    };
  }, [A[0], A[1], B[0], B[1]]);

  // IntersectionObserver para animación
  useEffect(() => {
    const el = document.getElementById("ubicacion-anim");
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

  const statVariant = (i: number) => {
    if (i === 0) return "loc-left";
    if (i === 1) return "loc-up";
    if (i === 2) return "loc-pop";
    return "loc-right";
  };

  return (
    <section id="ubicacion" className="relative overflow-hidden bg-[#192338] py-16 sm:py-20">
      {/* CSS local animaciones */}
      <style>{`
        @keyframes locUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes locLeft {
          from { opacity: 0; transform: translateX(-16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes locRight {
          from { opacity: 0; transform: translateX(16px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes locPop {
          from { opacity: 0; transform: translateY(14px) scale(0.985); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .loc-wrap [data-anim] { opacity: 0; }
        .loc-wrap.is-visible .loc-up[data-anim] {
          animation: locUp 720ms cubic-bezier(.2,.8,.2,1) both;
        }
        .loc-wrap.is-visible .loc-left[data-anim] {
          animation: locLeft 720ms cubic-bezier(.2,.8,.2,1) both;
        }
        .loc-wrap.is-visible .loc-right[data-anim] {
          animation: locRight 720ms cubic-bezier(.2,.8,.2,1) both;
        }
        .loc-wrap.is-visible .loc-pop[data-anim] {
          animation: locPop 760ms cubic-bezier(.2,.8,.2,1) both;
        }
      `}</style>

      {/* Fondo suave */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-80 w-[900px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
        <div className="absolute -bottom-32 left-1/2 h-96 w-[900px] -translate-x-1/2 rounded-full bg-brand/[0.10] blur-3xl" />
      </div>

      <div
        id="ubicacion-anim"
        className={`relative mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8 loc-wrap ${
          visible ? "is-visible" : ""
        }`}
      >
        {/* Header */}
        <div
          data-anim
          className="text-center mb-8 sm:mb-10 loc-up"
          style={{ animationDelay: "80ms" }}
        >
          <p className="text-xs uppercase tracking-[0.2em] text-brand">Ubicación</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold text-white">
            Localización y Acceso
          </h2>
          <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-brand" />
          <p className="mx-auto mt-6 max-w-2xl text-sm sm:text-base text-white/60">
            Vista satelital y datos clave para coordinación logística.
          </p>
        </div>

        {/* Barra coherente */}
        <div data-anim className="mb-5 sm:mb-6 loc-up" style={{ animationDelay: "180ms" }}>
          <div className="mx-auto max-w-[980px] rounded-2xl border border-white/10 bg-white/[0.06] px-4 sm:px-5 py-4 backdrop-blur-md">
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-white">
              <div className="inline-flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-green-500 text-[12px] font-bold text-white">
                  A
                </span>
                <span className="font-semibold text-white">Copiapó</span>
                <span className="text-white">(Inicio)</span>
              </div>

              <span className="text-white">→</span>

              <div className="inline-flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-brand" />
                <span className="text-white">Ruta Internacional</span>
              </div>

              <span className="text-white">→</span>

              <div className="inline-flex items-center gap-2">
                <span className="text-white">Tiempo total</span>
                <span className="font-semibold text-white">1h 30min</span>
              </div>

              <span className="text-white">→</span>

              <div className="inline-flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-red-500 text-[12px] font-bold text-white">
                  B
                </span>
                <span className="font-semibold text-white">Cumbres de Cortadera</span>
                <span className="text-white">(Destino)</span>
              </div>
            </div>
          </div>

          <p className="mt-2 text-center text-xs text-white">
            Referencia de traslado por vía principal. Puede variar según condiciones de ruta y logística.
          </p>
        </div>

        {/* Mapa (más pequeño + responsive) */}
        <div
          data-anim
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-[0_40px_120px_rgba(0,0,0,0.70)] loc-pop"
          style={{ animationDelay: "280ms" }}
        >
          <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent" />
          </div>

          {/* antes 500px fijo -> ahora responsive */}
          <div className="w-full h-[320px] sm:h-[380px] lg:h-[440px]">
            <MapContainer
              center={center}
              zoom={8}
              style={{ height: "100%", width: "100%" }}
              scrollWheelZoom={false}
              className="z-0"
            >
              <TileLayer
                url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                attribution="Tiles © Esri — Source: Esri, USGS, NOAA, Earthstar Geographics"
              />

              <Marker position={A} icon={aIcon} />
              <Marker position={B} icon={bIcon} />

              {route.length > 1 && (
                <>
                  <Polyline
                    positions={route}
                    pathOptions={{ color: "rgba(0,0,0,0.45)", weight: 9, opacity: 0.9 }}
                  />
                  <Polyline
                    positions={route}
                    pathOptions={{ color: "#3b82f6", weight: 4, opacity: 0.95 }}
                  />
                </>
              )}

              <WheelZoomGuard />
            </MapContainer>
          </div>

          {routeError && (
            <div className="absolute left-4 bottom-4 rounded-xl border border-white/10 bg-black/45 px-3 py-2 text-xs text-white/80 backdrop-blur">
              {routeError}
            </div>
          )}
        </div>

        {/* Cards (mismo alto + responsive) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
          {[
            {
              title: "Ruta de acceso",
              value: "Ruta internacional desde Copiapó",
              subtitle: "Acceso principal hacia el sector Cortadera.",
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                  <path d="M4 12h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M14 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
                </svg>
              ),
            },
            {
              title: "Tiempo estimado",
              value: "~1h 30min",
              subtitle: "Referencia operacional para traslados y logística.",
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ),
            },
            {
              title: "Altitud",
              value: "2.800 – 2.900 m s. n. m.",
              subtitle: "Condición relevante para planificación en terreno.",
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                  <path d="M3 20h18" stroke="currentColor" strokeWidth="2" />
                  <path d="M5 20l6-10 3 5 4-7 2 12" stroke="currentColor" strokeWidth="2" />
                </svg>
              ),
            },
            {
              title: "Coordenadas",
              value: "UTM WGS84 / PSAD56",
              subtitle: "Registradas y documentadas en informes técnicos.",
              icon: (
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                  <path
                    d="M12 22s7-4.5 7-12a7 7 0 1 0-14 0c0 7.5 7 12 7 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="2" />
                </svg>
              ),
            },
          ].map((card, i) => (
            <div
              key={card.title}
              data-anim
              className={`${statVariant(i)} h-full`}
              style={{ animationDelay: `${420 + i * 90}ms` }}
            >
              <StatCard {...card} />
            </div>
          ))}
        </div>

        <div
          data-anim
          className="mt-6 text-center text-sm text-white/55 loc-up"
          style={{ animationDelay: "820ms" }}
        >
          <span className="font-semibold text-white/75">Nota:</span> Coordenadas y referencias documentadas
          en informes técnicos. Data Room disponible bajo solicitud.
        </div>
      </div>
    </section>
  );
}
