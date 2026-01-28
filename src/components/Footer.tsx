import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <Container>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div>
            <div className="text-white/90 font-semibold">Minería del Sur</div>
            <div className="mt-2 text-sm text-muted">
              Proyecto Cumbres de Cortadera • Chile
            </div>
            <div className="mt-4 text-xs text-white/50">
              © {new Date().getFullYear()} — Sitio informativo.
            </div>
          </div>

          <div className="text-sm text-white/70">
            <div className="font-medium text-white/80">Contacto</div>
            <div className="mt-2 text-muted">Email: —</div>
            <div className="text-muted">Teléfono: —</div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
