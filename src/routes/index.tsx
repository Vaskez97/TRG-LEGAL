import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BriefcaseBusiness, Leaf, Mail, Users, ShieldCheck } from "lucide-react";
import { ContactForm } from "../components/site/ContactForm";
import { Footer } from "../components/site/Footer";
import { SiteHeader } from "../components/site/Navigation";

export const Route = createFileRoute("/")({ component: GroupHome });

const heroImage = "https://trg.cl/storage/slides/home-hero.jpg";
const companies = [
  {
    name: "Transportes TRG",
    description: "Transporte terrestre con foco en seguridad y excelencia operacional.",
    image: "https://trg.cl/storage/slides/1.jpeg",
    href: "/servicios/transporte-de-contenedores",
    accent: "TRANSPORTE TERRESTRE",
  },
  {
    name: "TLS",
    description: "Terminal logístico orientado a trazabilidad, seguridad de activos y eficiencia.",
    image: "https://trg.cl/storage/terminales/trg-terminal-valparaiso.jpg",
    href: "/terminal/terminal-valparaiso",
    accent: "OPERACIÓN TERMINAL",
  },
  {
    name: "TRG Legal",
    description: "Cumplimiento, relaciones laborales y asesoría preventiva para transporte.",
    image: "/assets/trg-legal-hero.png",
    href: "/trg-legal",
    accent: "CUMPLIMIENTO Y RELACIONES",
  },
];
const focus = [
  [ShieldCheck, "Seguridad", "Cuidamos a las personas, los activos y el entorno."],
  [
    BriefcaseBusiness,
    "Excelencia operacional",
    "Procesos eficientes y mejora continua en todo lo que hacemos.",
  ],
  [Users, "Personas", "Promovemos el desarrollo, el respeto y el trabajo en equipo."],
  [Leaf, "Sostenibilidad", "Gestionamos con responsabilidad hoy para construir el futuro."],
] as const;
const articles = [
  [
    "15 MAYO, 2024",
    "Avanzando en seguridad operacional",
    "Iniciativas y resultados que refuerzan nuestro compromiso con la seguridad.",
    "https://trg.cl/storage/slides/3.jpeg",
  ],
  [
    "30 ABRIL, 2024",
    "Hitos de nuestras empresas",
    "Conoce los principales avances y logros que marcan nuestro crecimiento.",
    "https://trg.cl/storage/slides/1.jpeg",
  ],
  [
    "10 ABRIL, 2024",
    "Buenas prácticas para una industria más profesional",
    "Compartimos recomendaciones y experiencias que generan valor.",
    "https://trg.cl/storage/slides/nuestro-equipo.jpg",
  ],
];

function SectionTitle({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </div>
  );
}

function GroupHome() {
  return (
    <div>
      <SiteHeader />
      <main>
        <section
          id="inicio"
          className="group-hero"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(3,42,85,.96) 0%, rgba(3,42,85,.78) 48%, rgba(3,42,85,.34) 100%), url(${heroImage})`,
          }}
        >
          <div className="container hero-copy">
            <span className="eyebrow eyebrow-light">GRUPO TRG · ACTÚA</span>
            <h1>Impulsamos una industria logística más segura, profesional y sostenible.</h1>
            <p>
              Grupo TRG integra experiencia, gestión y soluciones especializadas para acompañar a
              empresas, personas y operaciones clave en la cadena logística del país.
            </p>
            <div className="hero-actions">
              <a href="#empresas" className="button">
                Conoce nuestras empresas <ArrowRight />
              </a>
              <a href="/contacto" className="button button-outline">
                Contáctanos
              </a>
            </div>
          </div>
          <div className="hero-index">
            01 <span>/</span> 03
          </div>
        </section>
        <section className="intro-section">
          <div className="container intro-grid">
            <div>
              <span className="eyebrow">01 · EL GRUPO</span>
              <h2>Quiénes somos</h2>
            </div>
            <div className="intro-copy">
              <p>
                Grupo TRG es un holding que reúne empresas especializadas en transporte terrestre,
                logística, operación terminal y asesoría legal. Trabajamos de forma integrada para
                entregar soluciones confiables, eficientes y sostenibles, generando valor para
                nuestros clientes y para la industria.
              </p>
              <a href="/nosotros" className="text-link">
                Conoce más sobre nosotros <ArrowRight />
              </a>
            </div>
          </div>
        </section>
        <section id="empresas" className="section companies-section">
          <div className="container">
            <SectionTitle
              eyebrow="02 · ECOSISTEMA TRG"
              title="Nuestras empresas"
              intro="Tres especialidades, una misma visión: elevar los estándares de la industria y aportar valor a quienes mueven el país."
            />
            <div className="company-grid">
              {companies.map((company) => (
                <a href={company.href} className="company-card" key={company.name}>
                  <div className="card-image">
                    <img src={company.image} alt="" loading="lazy" />
                    <span>{company.accent}</span>
                  </div>
                  <div className="company-body">
                    <div className="company-mark">
                      {company.name === "TLS" ? (
                        "TLS"
                      ) : company.name === "TRG Legal" ? (
                        <>
                          TRG <i>LEGAL</i>
                        </>
                      ) : (
                        "TRG"
                      )}
                    </div>
                    <p>{company.description}</p>
                    <span className="text-link">
                      Ver más <ArrowRight />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="section focus-section">
          <div className="container">
            <SectionTitle eyebrow="03 · LO QUE NOS MUEVE" title="Nuestro enfoque" />
            <div className="focus-grid">
              {focus.map(([Icon, title, text]) => (
                <div className="focus-item" key={title}>
                  <Icon />
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className="commitment-band"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(3,42,85,.96), rgba(3,42,85,.74)), url(${heroImage})`,
          }}
        >
          <div className="container commitment-inner">
            <div>
              <span className="eyebrow eyebrow-light">04 · COMPROMISO</span>
              <h2>Compromiso con la industria</h2>
              <p>
                En Grupo TRG trabajamos cada día por profesionalizar la industria logística, elevar
                los estándares de seguridad y eficiencia, y revalidar el rol fundamental de las
                personas que mueven el país.
              </p>
            </div>
            <a href="/compromiso" className="circle-link" aria-label="Conoce nuestro compromiso">
              <ArrowRight />
            </a>
          </div>
        </section>
        <section className="section news-section">
          <div className="container">
            <div className="heading-row">
              <SectionTitle eyebrow="05 · ACTUALIDAD" title="Actualidad" />
              <a className="text-link desktop-only" href="/actualidad">
                Ver todas las noticias <ArrowRight />
              </a>
            </div>
            <div className="news-grid">
              {articles.map(([date, title, text, image]) => (
                <a className="news-card" href="/actualidad" key={title}>
                  <img src={image} alt="" loading="lazy" />
                  <div className="news-body">
                    <span className="eyebrow">{date}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <span className="text-link">
                      Leer más <ArrowRight />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="container final-cta-inner">
            <div>
              <span className="eyebrow eyebrow-light">HABLEMOS</span>
              <h2>Construimos soluciones con respaldo, experiencia y visión de futuro.</h2>
            </div>
            <a href="/contacto" className="button">
              Contáctanos <Mail />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
