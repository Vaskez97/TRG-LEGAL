import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { Reveal, SectionEyebrow, ArrowIcon } from "../components/site/Reveal";
import { ContactForm } from "../components/site/ContactForm";
import {
  PHONE_DISPLAY,
  PHONE_TEL,
  EMAIL,
  VALPARAISO_IMAGE,
  SAN_ANTONIO_IMAGE,
} from "../components/site/constants";

export const Route = createFileRoute("/contacto")({
  component: ContactoPage,
});

const terminals = [
  {
    name: "Valparaíso",
    address: "Camino Antiguo S/N, Esquina La Pólvora, Valparaíso",
    mapsUrl: "https://maps.app.goo.gl/UQSBFm5eQ7av2iUt8",
    image: VALPARAISO_IMAGE,
    href: "/terminal/terminal-valparaiso",
  },
  {
    name: "San Antonio",
    address: "A 15 minutos del puerto de San Antonio.",
    mapsUrl: "https://maps.app.goo.gl/9LPLnF2MZ7P1YShW6",
    image: SAN_ANTONIO_IMAGE,
    href: "/terminal/terminal-san-antonio",
  },
];

function ContactoPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Hablemos"
        title="Te guiamos en lo que necesites."
        description="Completa el formulario y responderemos todas tus dudas, o contáctanos directamente por teléfono, correo o WhatsApp."
        image="https://trg.cl/storage/slides/home-hero.jpg"
        imageAlt="Operación de transporte TRG"
      />

      <section
        className="w-full py-16 md:py-24 px-5 md:px-8"
        style={{ backgroundColor: "#F5F5F2" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[0.85fr_1.15fr] gap-10 md:gap-12">
          <div className="space-y-5">
            <Reveal>
              <div
                className="rounded-2xl p-6 border"
                style={{ backgroundColor: "#FFFFFF", borderColor: "rgba(7,27,50,0.1)" }}
              >
                <SectionEyebrow>Teléfono</SectionEyebrow>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="mt-2 block text-xl font-extrabold"
                  style={{ color: "#071B32", letterSpacing: "-0.02em" }}
                >
                  {PHONE_DISPLAY}
                </a>
                <div className="mt-5">
                  <SectionEyebrow>Email</SectionEyebrow>
                </div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-2 block text-xl font-extrabold"
                  style={{ color: "#071B32", letterSpacing: "-0.02em" }}
                >
                  {EMAIL}
                </a>
              </div>
            </Reveal>

            {terminals.map((t, i) => (
              <Reveal key={t.name} delay={(i + 1) * 90}>
                <div
                  className="rounded-2xl overflow-hidden border"
                  style={{ borderColor: "rgba(7,27,50,0.1)" }}
                >
                  <div className="h-36">
                    <img
                      src={t.image}
                      alt={`Terminal ${t.name}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-5 bg-white">
                    <SectionEyebrow>Terminal {t.name}</SectionEyebrow>
                    <p className="mt-2 text-sm font-medium text-[#071B32]/75">{t.address}</p>
                    <div className="mt-3 flex flex-wrap gap-3">
                      <a
                        href={t.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-extrabold"
                        style={{ color: "#0B4F8A" }}
                      >
                        ¿Cómo llegar?
                        <ArrowIcon className="w-3.5 h-3.5" />
                      </a>
                      <a
                        href={t.href}
                        className="inline-flex items-center gap-1.5 text-sm font-extrabold text-[#071B32]/60 hover:text-[#071B32]"
                      >
                        Ver terminal
                        <ArrowIcon className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={80}>
            <div
              className="rounded-2xl text-white p-6 md:p-10"
              style={{ backgroundColor: "#071B32" }}
            >
              <SectionEyebrow dark>Formulario</SectionEyebrow>
              <h2
                className="mt-4 font-extrabold"
                style={{
                  fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                }}
              >
                Completa el formulario y responderemos todas tus dudas.
              </h2>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
