export const SITE = {
  company: "Minería del Sur",
  project: "Cumbres de Cortadera",
  tagline:
    "Explotación de óxidos y sulfuros de cobre con presencia de oro y plata, ubicada en el sector Cortadera, Provincia de Copiapó, Región de Atacama, Chile.",
  ctaPrimary: "Solicitar reunión",
  ctaSecondary: "Ver Data Room",
};

export const NAV = [
  { label: "Resumen", href: "#resumen" },
  { label: "Cifras", href: "#cifras" },
  { label: "Inversión", href: "#investors" },
  { label: "Ficha Técnica", href: "#ficha-tecnica" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Geología y Operación", href: "#geologia-operacion" },
  { label: "Plan de Cierre", href: "#plan-cierre" },
];

export const STATS = [
  { k: "Estado", v: "En desarrollo" },
  { k: "Etapa", v: "Exploración / crecimiento" },
  { k: "Ubicación", v: "Chile" },
  { k: "Objetivo", v: "Atracción de inversión" },
];

export const EXEC_SUMMARY = {
  eyebrow: "Visión general",
  title: "Resumen ejecutivo",
  subtitle:
    "Una lectura rápida para entender el proyecto, el momento y la necesidad de inversión.",
  blocks: [
    {
      title: "Qué es",
      text: "Proyecto minero orientado a consolidar información técnica y etapa para presentar una oportunidad de inversión clara y verificable.",
    },
    {
      title: "Por qué ahora",
      text: "El momento permite crear valor mediante hitos de exploración/validación y un plan por etapas, reduciendo riesgo y elevando certeza técnica.",
    },
    {
      title: "Qué buscamos",
      text: "Capital o socio estratégico para financiar hitos priorizados, con foco en transparencia, control de riesgos y reporte periódico.",
    },
  ],
};

export const INVESTMENT = {
  eyebrow: "Oportunidad",
  title: "Tesis de inversión",
  subtitle: "Estrategia por etapas con hitos medibles y uso de fondos trazable.",
  thesis: [
    "Ejecución por etapas (stage-gate) con entregables verificables.",
    "Levantamiento/validación técnica para construir un caso robusto.",
    "Gobernanza y reporte: métricas, riesgos y avances periódicos.",
  ],
  useOfFunds: [
    "Exploración / muestreo / validación (según etapa).",
    "Levantamiento técnico y base documental del proyecto.",
    "Ingeniería preliminar y preparación de próximos hitos.",
  ],
  whatInvestorGets: [
    "Acceso a Data Room y respaldo documental.",
    "Roadmap de hitos + reporte de avance.",
    "Estructura de inversión definida (por acordar: equity/JV/royalty).",
  ],
};

export const MILESTONES = {
  eyebrow: "Ruta",
  title: "Hitos y plan de avance",
  subtitle:
    "Plan en etapas para reducir incertidumbre y aumentar el valor del proyecto.",
  items: [
    {
      title: "Hito 1 — Ordenamiento y línea base",
      date: "0–30 días",
      bullets: [
        "Consolidación documental",
        "Levantamiento de información técnica",
        "Plan de riesgos y métricas de control",
      ],
    },
    {
      title: "Hito 2 — Validación técnica",
      date: "30–90 días",
      bullets: [
        "Campaña / muestreo (según etapa)",
        "Interpretación y conclusiones",
        "Definición de siguiente campaña",
      ],
    },
    {
      title: "Hito 3 — Escalamiento",
      date: "90–180 días",
      bullets: [
        "Ingeniería preliminar / permisos (si aplica)",
        "Estrategia de continuidad",
        "Actualización Data Room + deck inversionistas",
      ],
    },
  ],
};

export const TECH_SHEET = [
  { k: "Propietario", v: "Minería del Sur" },
  { k: "Proyecto", v: "Cumbres de Cortadera" },
  { k: "Etapa", v: "Exploración / Desarrollo" },
  { k: "Región", v: "—" },
  { k: "Comuna", v: "—" },
  { k: "Mineralización", v: "—" },
  { k: "Superficie / pertenencias", v: "—" },
  { k: "Acceso", v: "—" },
];

export const DATA_ROOM = [
  {
    category: "Legal y societario",
    items: [
      { name: "Constitución / poderes", type: "PDF", href: "#", status: "Próximamente" },
      { name: "Título / derechos / pertenencias", type: "PDF", href: "#", status: "Próximamente" },
    ],
  },
  {
    category: "Técnico",
    items: [
      { name: "Ficha técnica del proyecto", type: "PDF", href: "#", status: "Disponible" },
      { name: "Informe geológico (resumen)", type: "PDF", href: "#", status: "Próximamente" },
    ],
  },
  {
    category: "Inversión",
    items: [
      { name: "Deck inversionistas", type: "PDF", href: "#", status: "Disponible" },
      { name: "Uso de fondos + hitos", type: "PDF", href: "#", status: "Disponible" },
    ],
  },
];

export const CONTACT = {
  email: "—",
  phone: "—",
  location: "Chile",
};
