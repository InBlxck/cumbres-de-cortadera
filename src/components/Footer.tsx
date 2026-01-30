export default function Footer() {
  return (
    <footer className="bg-[#E2E2E2] border-white/10 min-h-[150px] flex items-center">
    <div className="mx-auto max-w-[1200px] px-6 w-full">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          
          {/* Bloque izquierdo */}
          <div className="text-sm text-slate-600">
            <p className="font-medium text-slate-800">
              © 2026 Sociedad Minera Cumbres de Andacollo SpA
            </p>
            <p className="mt-1">Todos los derechos reservados</p>
          </div>

          {/* Bloque derecho */}
          <div className="text-sm text-slate-600 md:text-right">
            <p className="font-medium text-slate-800">
              MINERÍA DEL SUR CHILE SPA
            </p>
            <p className="mt-1">
              Huérfanos 1160, Of. 1006, Santiago
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
