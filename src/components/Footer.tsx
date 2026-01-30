import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-[#E2E2E2] border-t border-black/10">
      <Container>
        <div className="py-12">
          {/* Grid principal: centrado en mobile, split en desktop */}
          <div className="grid gap-8 text-center md:grid-cols-2 md:items-end md:text-left">
            {/* Bloque izquierdo */}
            <div className="text-sm text-slate-600 md:text-left">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Sociedad Minera
              </p>
              <p className="mt-2 text-base font-semibold text-slate-800">
                Cumbres de Andacollo SpA
              </p>
              <p className="mt-2 text-xs">© 2026 · Todos los derechos reservados</p>
            </div>

            {/* Bloque derecho */}
            <div className="text-sm text-slate-600 md:text-right">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Casa Matriz
              </p>
              <p className="mt-2 font-medium text-slate-800">
                Minería del Sur Chile SpA
              </p>
              <p className="mt-1 text-xs">
                Amunátegui 277, piso 12
                <br />
                Santiago, Chile
              </p>
            </div>
          </div>

          {/* Línea inferior */}
          <div className="mt-10 h-px w-full bg-black/10" />

          {/* Línea final: siempre centrada */}
          <div className="mt-4 text-center text-xs text-slate-500">
            Desarrollo institucional · Minería responsable
          </div>
        </div>
      </Container>
    </footer>
  );
}
