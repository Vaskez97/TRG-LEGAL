import { Reveal, SectionEyebrow, CheckIcon, ArrowIcon } from "./Reveal";
import { PageHero } from "./PageHero";
import { CTABanner } from "./CTABanner";

export type TerminalFact = { title: string; detail: string };

export function TerminalTemplate({
  name,
  image,
  location,
  advantages,
  capabilities,
  infrastructure,
  otherTerminal,
}: {
  name: string;
  image: string;
  location: string;
  advantages: string[];
  capabilities: TerminalFact[];
  infrastructure: string[];
  otherTerminal: { label: string; href: string };
}) {
  return (
    <>
      <PageHero
        eyebrow="Infraestructura propia"
        title={`Terminal ${name}`}
        description={location}
        image={image}
        imageAlt={`Terminal ${name}`}
      >
        <div className="mt-7">
          <a
            href={otherTerminal.href}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-bold text-sm text-white border transition-colors hover:bg-white/10"
            style={{
              borderColor: "rgba(255,255,255,0.3)",
              backgroundColor: "rgba(255,255,255,0.06)",
            }}
          >
            Ver {otherTerminal.label}
            <ArrowIcon className="w-4 h-4" />
          </a>
        </div>
      </PageHero>

      <section
        className="w-full py-16 md:py-24 px-5 md:px-8"
        style={{ backgroundColor: "#F5F5F2" }}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionEyebrow>Ubicación estratégica</SectionEyebrow>
            <h2
              className="mt-4 font-extrabold max-w-2xl"
              style={{
                fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "#071B32",
              }}
            >
              Esta ubicación privilegiada permite:
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {advantages.map((a, i) => (
              <Reveal key={a} delay={i * 90}>
                <div
                  className="h-full rounded-2xl border p-5 md:p-6 flex items-start gap-3"
                  style={{ borderColor: "rgba(7,27,50,0.1)", backgroundColor: "#FFFFFF" }}
                >
                  <CheckIcon className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#F3C400" }} />
                  <span className="text-sm md:text-base font-semibold" style={{ color: "#071B32" }}>
                    {a}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="w-full py-16 md:py-24 px-5 md:px-8"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionEyebrow>Capacidades operativas</SectionEyebrow>
            <h2
              className="mt-4 font-extrabold max-w-2xl"
              style={{
                fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "#071B32",
              }}
            >
              Preparados para operar tu carga.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <div
                  className="h-full rounded-2xl border p-5 md:p-6"
                  style={{ borderColor: "rgba(7,27,50,0.1)", backgroundColor: "#F5F5F2" }}
                >
                  <div className="font-extrabold text-base md:text-lg" style={{ color: "#071B32" }}>
                    {c.title}
                  </div>
                  <div className="mt-1 text-sm text-[#071B32]/70 font-medium">{c.detail}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative w-full py-16 md:py-24 overflow-hidden"
        style={{ backgroundColor: "#071B32" }}
      >
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(180deg, rgba(7,27,50,0.6), rgba(7,27,50,0.96))",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-5 md:px-8">
          <Reveal className="max-w-2xl">
            <SectionEyebrow dark>Infraestructura y seguridad</SectionEyebrow>
            <h2
              className="mt-4 text-white font-extrabold"
              style={{
                fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
              }}
            >
              Equipamiento propio, disponible 24/7.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {infrastructure.map((item, i) => (
              <Reveal key={item} delay={i * 80}>
                <div
                  className="h-full rounded-2xl border p-5 flex items-start gap-3 text-white"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.06)",
                    borderColor: "rgba(255,255,255,0.12)",
                  }}
                >
                  <CheckIcon className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#F3C400" }} />
                  <span className="text-sm md:text-base font-semibold">{item}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="¿Necesitas mover una operación por este terminal?" />
    </>
  );
}
