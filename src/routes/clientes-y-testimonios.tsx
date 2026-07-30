import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { Reveal, SectionEyebrow } from "../components/site/Reveal";
import { CTABanner } from "../components/site/CTABanner";

export const Route = createFileRoute("/clientes-y-testimonios")({
  component: TestimoniosPage,
});

const testimonials = [
  {
    quote:
      "La experiencia de trabajo con el equipo de TRG es bastante buena y se logran solucionar todas las inquietudes. El servicio de transporte nos deja conforme de recibir nuestras cargas en tiempo y forma. Se agradece contar con el seguimiento y físicamente una clara identificación de sus tractos.",
    name: "Rodrigo Campos",
    role: "Analista de abastecimiento",
    company: "Cencosud",
    photo: "https://trg.cl/storage/testimonios/Cencosud.jpg",
  },
  {
    quote:
      "TRG es un proveedor serio, preocupado de dar buen servicio, con equipos de calidad sin hitos de panne.",
    name: "Pedro Elgueta",
    role: "Jefe Logística Primaria Nacional e Internacional",
    company: "Agrosuper",
    photo: "https://trg.cl/storage/testimonios/Agrosuper.jpg",
  },
  {
    quote:
      "Nuestra experiencia con el servicio de transporte muestra una mejora muy significativa en la calidad del servicio. La comunicación con los coordinadores de TRG ha sido clave para alcanzar esta mejoría; su disposición y claridad han hecho posible una experiencia mucho más positiva y confiable.",
    name: "Felipe Pino Ureta",
    role: "Analista de abastecimiento",
    company: "Easy",
    photo: "https://trg.cl/storage/testimonios/Easy.jpg",
  },
  {
    quote:
      "Nuestra experiencia ha sido muy positiva. Tras 13 años de colaboración, destacamos su servicio profesional, máximos esfuerzos en puntualidad, buena comunicación y el constante cumplimiento de los compromisos. Estamos muy conformes por el apoyo brindado durante todos estos años.",
    name: "Martin Torres",
    role: "Administrativo Comex",
    company: "FashionsPark Global",
    photo: "https://trg.cl/storage/testimonios/Fashions-Park.jpg",
  },
  {
    quote:
      "Excelente gestión en nuestros servicios. Su puntualidad y el cuidado en el manejo de la carga han sido clave para el éxito de nuestra operación. Un aliado profesional y comprometido.",
    name: "Felipe González Jara",
    role: "Head Customer Service",
    company: "Santa Rita",
    photo: "https://trg.cl/storage/testimonios/Santa-Rita.jpg",
  },
];

const clientLogos = [
  { name: "Walmart", src: "https://trg.cl/storage/clientes/Walmart_logo_(2008).svg.png" },
  { name: "Agrosuper", src: "https://trg.cl/storage/clientes/logo-agrosuper.png" },
  { name: "Cencosud", src: "https://trg.cl/storage/clientes/Cencosud_logo.svg.png" },
  { name: "Jumbo", src: "https://trg.cl/storage/clientes/jumbo.png" },
  { name: "Santa Isabel", src: "https://trg.cl/storage/clientes/Logo_Santa_Isabel_Cencosud.png" },
  { name: "Easy", src: "https://trg.cl/storage/clientes/Easy-Logo.svg.png" },
  {
    name: "Grupo K",
    src: "https://trg.cl/storage/clientes/85261b54bc199e3aa9d3f56f470b9c76_logos_grupok-mk-mko-klp-studio_color.png",
  },
  { name: "Fashions Park", src: "https://trg.cl/storage/clientes/fashions-park-logo2.png" },
  { name: "Family", src: "https://trg.cl/storage/clientes/FSHOPCOLOR-B0mnFVlV.png" },
  {
    name: "GoodYear",
    src: "https://trg.cl/storage/clientes/Goodyear_Tire_&_Rubber_Company_logo.svg.png",
  },
  { name: "Puratos", src: "https://trg.cl/storage/clientes/logo.svg" },
  { name: "Viña Santa Rita", src: "https://trg.cl/storage/clientes/Logo_Santa_Rita.svg.png" },
  { name: "Cannon Home", src: "https://trg.cl/storage/clientes/idi0t778ll_logos.jpeg" },
  { name: "SMU", src: "https://trg.cl/storage/clientes/SMU_S.A.png" },
];

function TestimoniosPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Lo que dicen de nosotros"
        title="Detrás de cada operación exitosa hay confianza construida en el tiempo."
        image="https://trg.cl/storage/slides/1.jpeg"
        imageAlt="Operación de transporte TRG"
      />

      <section
        className="w-full py-16 md:py-24 px-5 md:px-8"
        style={{ backgroundColor: "#F5F5F2" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 90}
              className={i === testimonials.length - 1 ? "md:col-span-2" : ""}
            >
              <div
                className="h-full rounded-2xl border p-6 md:p-8 flex flex-col"
                style={{ borderColor: "rgba(7,27,50,0.1)", backgroundColor: "#FFFFFF" }}
              >
                <p className="text-[#071B32]/80 text-sm md:text-base font-medium leading-relaxed">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <img
                    src={t.photo}
                    alt={t.name}
                    loading="lazy"
                    decoding="async"
                    className="w-11 h-11 rounded-full object-cover shrink-0"
                  />
                  <div>
                    <div className="font-extrabold text-sm" style={{ color: "#071B32" }}>
                      {t.name}
                    </div>
                    <div className="text-xs text-[#071B32]/60 font-semibold">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className="w-full py-16 md:py-24 px-5 md:px-8"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center">
            <div className="flex justify-center">
              <SectionEyebrow>Empresas que confían en TRG</SectionEyebrow>
            </div>
            <h2
              className="mt-4 font-extrabold"
              style={{
                fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "#071B32",
              }}
            >
              Empresas líderes confían en TRG para su operación logística.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6">
            {clientLogos.map((c, i) => (
              <Reveal key={c.name} delay={i * 40}>
                <div
                  className="h-20 md:h-24 rounded-xl border flex items-center justify-center p-4"
                  style={{ borderColor: "rgba(7,27,50,0.08)", backgroundColor: "#F5F5F2" }}
                >
                  <img
                    src={c.src}
                    alt={c.name}
                    loading="lazy"
                    decoding="async"
                    className="max-h-8 md:max-h-10 max-w-full object-contain grayscale opacity-80"
                  />
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
