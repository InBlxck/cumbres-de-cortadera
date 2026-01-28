import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Button from "../components/Button";
import { CONTACT } from "../lib/constants";

export default function Contact() {
  return (
    <section id="contacto" className="py-16 border-t border-white/10">
      <Container>
        <SectionTitle
          eyebrow="Conversemos"
          title="Contacto"
          subtitle="Escríbenos y coordinamos una reunión."
        />

        <div className="grid lg:grid-cols-2 gap-6">
          <form
            className="rounded-3xl border border-white/10 bg-card/30 p-7"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Listo: luego conectamos el envío real.");
            }}
          >
            <div className="grid gap-3">
              <input
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-teal/50"
                placeholder="Nombre"
                required
              />
              <input
                type="email"
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-teal/50"
                placeholder="Correo"
                required
              />
              <textarea
                className="w-full rounded-2xl bg-white/5 border border-white/10 px-4 py-3 outline-none focus:ring-2 focus:ring-teal/50 min-h-[140px]"
                placeholder="Mensaje"
                required
              />
              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </div>
          </form>

          <div className="rounded-3xl border border-white/10 bg-card/30 p-7">
            <div className="text-lg font-semibold">Datos</div>
            <p className="mt-2 text-muted">
              También puedes contactarnos directamente.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <div className="text-muted">
                Email: <span className="text-white/90">{CONTACT.email}</span>
              </div>
              <div className="text-muted">
                Teléfono: <span className="text-white/90">{CONTACT.phone}</span>
              </div>
              <div className="text-muted">
                Ubicación: <span className="text-white/90">{CONTACT.location}</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
