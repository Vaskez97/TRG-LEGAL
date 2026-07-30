import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { Reveal, SectionEyebrow } from "../components/site/Reveal";
import { CTABanner } from "../components/site/CTABanner";

export const Route = createFileRoute("/nosotros")({
  component: NosotrosPage,
});

const TEAM_HERO_IMAGE = "https://trg.cl/storage/slides/nuestro-equipo.jpg";

const manifesto = [
  {
    label: "Propósito",
    title: "Impulsar el desarrollo de quienes mueven el país.",
    detail:
      "Elevamos el estándar de la industria logística a través de empresas que integran experiencia, gestión y compromiso con las personas.",
  },
  {
    label: "Misión",
    title: "Entregar soluciones especializadas con excelencia operacional.",
    detail:
      "Trabajamos desde empresas comprometidas con la seguridad, la calidad de servicio y el desarrollo de relaciones sostenibles.",
  },
  {
    label: "Visión",
    title: "Consolidarnos como un grupo empresarial referente.",
    detail:
      "Buscamos ser reconocidos por nuestra solidez, profesionalismo y capacidad de integrar soluciones que acompañen el crecimiento de clientes y unidades de negocio.",
  },
];

const values = [
  { title: "Seguridad", detail: "Cuidamos a las personas, los activos y el entorno." },
  { title: "Excelencia", detail: "Buscamos hacer bien el trabajo, con rigor y mejora continua." },
  { title: "Compromiso", detail: "Nos involucramos con clientes, equipos y comunidades." },
  {
    title: "Confianza",
    detail: "Construimos relaciones transparentes, responsables y sostenibles.",
  },
];

const gallery = [
  "https://trg.cl/storage/galeria/galeria-nosotros-11777368690.jpg",
  "https://trg.cl/storage/galeria/galeria-nosotros-21777368690.jpg",
  "https://trg.cl/storage/galeria/galeria-nosotros-31777368690.jpg",
  "https://trg.cl/storage/galeria/galeria-nosotros-41777368690.jpg",
  "https://trg.cl/storage/galeria/galeria-nosotros-51777368717.jpg",
  "https://trg.cl/storage/galeria/galeria-nosotros-61777368717.jpg",
];

const pillars = [
  {
    title: "Eficiencia Operacional y Calidad del Servicio.",
    detail:
      "Utilizamos tecnología como GoTruck para monitorear y gestionar nuestra flota en tiempo real, optimizando rutas y mejorando la trazabilidad. Esto nos permite ofrecer un servicio confiable y eficiente, alineado con estándares ISO 9001.",
    image: "https://www.trg.cl/assets/img/nosotros/eficiencia-operacional-calidad-del-servicio.jpg",
  },
  {
    title: "Gestión Ambiental Responsable.",
    detail:
      "Promovemos la reducción del impacto ambiental mediante el uso eficiente de recursos, optimización del consumo de combustible y medición de nuestra huella de carbono, contribuyendo a una operación más sustentable. Alineado con ISO 14001.",
    image: "https://www.trg.cl/assets/img/nosotros/gestion-ambiental-responsable.jpg",
  },
  {
    title: "Seguridad y Bienestar de las Personas.",
    detail:
      "Fomentamos una cultura de prevención a través de la capacitación continua y el control riguroso de nuestras operaciones, priorizando la seguridad de nuestro equipo y de cada traslado. Alineado con ISO 45001.",
    image: "https://www.trg.cl/assets/img/nosotros/seguridad-bienestar-de-las-personas.jpg",
  },
];

function NosotrosPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Quiénes somos"
        title="Acompañamos a quienes mueven el país."
        description="Somos una plataforma empresarial que reúne unidades especializadas en transporte, logística, operación terminal y asesoría legal, con una mirada integral centrada en las personas."
        image={TEAM_HERO_IMAGE}
        imageAlt="Equipo humano de Grupo TRG"
      />

      {/* Historia */}
      <section
        className="w-full py-16 md:py-24 px-5 md:px-8"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16">
          <Reveal>
            <SectionEyebrow>Nuestra historia</SectionEyebrow>
            <h2
              className="mt-4 font-extrabold"
              style={{
                fontSize: "clamp(2rem, 4vw, 3.4rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "#071B32",
              }}
            >
              Una plataforma empresarial construida desde la experiencia.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <div className="border-l pl-6 md:pl-10" style={{ borderColor: "rgba(7,27,50,0.12)" }}>
              <p className="text-[#071B32]/75 text-base md:text-lg font-medium leading-relaxed">
                Grupo TRG reúne distintas unidades especializadas en transporte, logística,
                operación terminal y asesoría legal. Desde una mirada integral, impulsamos
                soluciones que fortalecen la operación de nuestros clientes, promueven buenas
                prácticas y contribuyen al desarrollo de una industria más profesional, sostenible y
                humana.
              </p>
              <p className="mt-5 text-[#071B32]/75 text-base md:text-lg font-medium leading-relaxed">
                Nuestra historia se sostiene en equipos que conocen la operación desde dentro:
                personas que planifican, gestionan, conducen, asesoran y resuelven con compromiso
                cotidiano. Ese conocimiento nos permite integrar capacidades y acompañar el
                crecimiento de quienes confían en nosotros.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Propósito, misión y visión */}
      <section
        className="w-full py-16 md:py-24 px-5 md:px-8"
        style={{ backgroundColor: "#F5F5F2" }}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionEyebrow>Lo que nos guía</SectionEyebrow>
            <h2
              className="mt-4 font-extrabold max-w-3xl"
              style={{
                fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "#071B32",
              }}
            >
              Crecemos con propósito, gestión y relaciones sostenibles.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {manifesto.map((item, i) => (
              <Reveal key={item.label} delay={i * 90}>
                <article
                  className="h-full border p-6 md:p-7"
                  style={{ borderColor: "rgba(7,27,50,0.1)", backgroundColor: "#FFFFFF" }}
                >
                  <SectionEyebrow>{item.label}</SectionEyebrow>
                  <h3
                    className="mt-4 font-extrabold"
                    style={{
                      fontSize: "clamp(1.25rem, 2vw, 1.65rem)",
                      lineHeight: 1.12,
                      letterSpacing: "-0.03em",
                      color: "#071B32",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm md:text-base text-[#071B32]/70 font-medium leading-relaxed">
                    {item.detail}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section
        className="w-full py-16 md:py-24 px-5 md:px-8"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionEyebrow>Nuestros valores</SectionEyebrow>
            <h2
              className="mt-4 font-extrabold max-w-3xl"
              style={{
                fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "#071B32",
              }}
            >
              Principios que guían nuestra forma de trabajar y relacionarnos.
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <div
                  className="h-full border p-5 md:p-6"
                  style={{ borderColor: "rgba(7,27,50,0.1)", backgroundColor: "#F5F5F2" }}
                >
                  <div
                    className="text-2xl md:text-3xl font-extrabold"
                    style={{ color: "#F3C400", letterSpacing: "-0.03em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div
                    className="mt-3 font-extrabold text-sm md:text-base"
                    style={{ color: "#071B32" }}
                  >
                    {v.title}
                  </div>
                  <div className="mt-1 text-sm text-[#071B32]/70 font-medium">{v.detail}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo humano y cultura */}
      <section
        className="w-full py-16 md:py-24 px-5 md:px-8"
        style={{ backgroundColor: "#071B32" }}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-2xl">
            <SectionEyebrow>Equipo humano y cultura</SectionEyebrow>
            <h2
              className="mt-4 font-extrabold"
              style={{
                fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "#FFFFFF",
              }}
            >
              Personas primero, siempre.
            </h2>
            <p className="mt-5 text-white/75 text-base md:text-lg font-medium leading-relaxed">
              Creemos que una operación sólida comienza por quienes la hacen posible. Por eso
              promovemos una cultura interna basada en seguridad, respeto, colaboración y desarrollo
              de capacidades. La tecnología, la infraestructura y los procesos importan; las
              personas que les dan sentido importan más.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {gallery.map((src, i) => (
              <Reveal key={src} delay={i * 70} className="rounded-2xl overflow-hidden h-40 md:h-56">
                <img
                  src={src}
                  alt="Equipo TRG"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sustentabilidad e innovación */}
      <section
        className="w-full py-16 md:py-24 px-5 md:px-8"
        style={{ backgroundColor: "#F5F5F2" }}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionEyebrow>Gestión responsable</SectionEyebrow>
            <h2
              className="mt-4 font-extrabold max-w-2xl"
              style={{
                fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "#071B32",
              }}
            >
              Buenas prácticas para una industria más profesional y sostenible.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-5 md:space-y-6">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div
                  className={`rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 ${
                    i % 2 === 1 ? "md:[direction:rtl]" : ""
                  }`}
                  style={{ backgroundColor: "#FFFFFF" }}
                >
                  <div className="h-56 md:h-auto" style={{ direction: "ltr" }}>
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div
                    className="p-6 md:p-9 flex flex-col justify-center"
                    style={{ direction: "ltr" }}
                  >
                    <div
                      className="text-xs font-extrabold uppercase"
                      style={{ color: "#F3C400", letterSpacing: "0.12em" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <h3
                      className="mt-3 font-extrabold"
                      style={{
                        fontSize: "clamp(1.3rem, 2.2vw, 1.8rem)",
                        lineHeight: 1.1,
                        letterSpacing: "-0.03em",
                        color: "#071B32",
                      }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-3 text-sm md:text-base text-[#071B32]/70 font-medium leading-relaxed">
                      {p.detail}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </PageShell>
  );
}
