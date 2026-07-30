import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Linkedin,
  Lock,
  Mail,
  MapPin,
  Menu,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useRef, useState, type FormEvent } from "react";
import gsap from "gsap";

export const Route = createFileRoute("/trg-legal")({
  head: () => ({
    meta: [
      { title: "TRG Legal | Asesoría laboral especializada" },
      {
        name: "description",
        content:
          "Asesoría laboral especializada para empresas de transporte, con soluciones jurídicas estratégicas, claras y cercanas.",
      },
    ],
  }),
  component: TrgLegalPage,
});

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260510_060007_60275ce7-030c-4668-a160-8f364ec537d3.mp4";
const GROUP_TRG_URL = "https://trg-camila-salazar.pages.dev/";

const services = [
  {
    number: "01",
    title: "Asesoría laboral permanente",
    detail:
      "Acompañamiento jurídico continuo para gestionar el día a día con seguridad y criterio.",
  },
  {
    number: "02",
    title: "Cumplimiento laboral",
    detail:
      "Auditorías, revisión normativa y documentación que ordenan la gestión de personas.",
  },
  {
    number: "03",
    title: "Relaciones laborales",
    detail:
      "Asesoría en la gestión de equipos, sindicatos y relaciones laborales sostenibles.",
  },
  {
    number: "04",
    title: "Negociación colectiva",
    detail:
      "Estrategia y representación para procesos de negociación claros y bien preparados.",
  },
  {
    number: "05",
    title: "Litigios laborales",
    detail:
      "Defensa y representación judicial resguardando los intereses de la empresa.",
  },
];

const aboutFacts = [
  {
    label: "Nuestra historia",
    detail:
      "TRG Legal surge a partir del trabajo directo de sus socios con empresas de transporte, identificando la necesidad de contar con una asesoría jurídica especializada que comprendiera los desafíos propios del rubro.",
  },
  {
    label: "Propósito",
    detail:
      "Aportar certeza jurídica y soluciones laborales estratégicas que fortalezcan la gestión de personas en la industria del transporte.",
  },
  {
    label: "Especialización",
    detail:
      "Esto nos permite comprender la realidad operacional de nuestros clientes y entregar soluciones jurídicas alineadas con sus necesidades.",
  },
  {
    label: "Nuestro equipo",
    detail:
      "Contamos con un equipo de abogados especializados que trabaja de manera cercana con cada cliente, entregando asesoría técnica, estratégica y anticipada, respaldada por un profundo conocimiento de la industria.",
  },
];

const bodyImages = [
  {
    src: "/assets/trg-legal-hero.png",
    alt: "Balanza jurídica frente a contenedores",
  },
  {
    src: "https://trg.cl/storage/slides/1.jpeg",
    alt: "Transporte terrestre en ruta",
  },
  {
    src: "https://trg.cl/storage/slides/nuestro-equipo.jpg",
    alt: "Equipo humano de Grupo TRG",
  },
  {
    src: "https://trg.cl/storage/terminales/trg-terminal-valparaiso.jpg",
    alt: "Operación terminal TRG",
  },
];

function LegalWordmark({ light = false }: { light?: boolean }) {
  return (
    <a
      className={`legal-wordmark ${light ? "is-light" : ""}`}
      href="/"
      aria-label="TRG Legal, inicio"
    >
      <img
        src={
          light
            ? "/assets/trg-legal-logo.png"
            : "/assets/trg-legal-logo-navy.png"
        }
        className={light ? "is-light" : "is-dark"}
        alt="TRG Legal"
      />
    </a>
  );
}

function LegalHeader() {
  const [open, setOpen] = useState(false);
  const [isOnLightSurface, setIsOnLightSurface] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const updateSurface = () => {
      setIsOnLightSurface(window.scrollY > window.innerHeight * 0.78);
    };

    updateSurface();
    window.addEventListener("scroll", updateSurface, { passive: true });
    return () => window.removeEventListener("scroll", updateSurface);
  }, []);

  const links = [
    ["QUIÉNES SOMOS", "#quienes-somos"],
    ["SERVICIOS", "#servicios"],
    ["CLIENTES", "#clientes"],
    ["EQUIPO", "#equipo"],
  ];

  return (
    <header className={`legal-header ${isOnLightSurface ? "is-on-light" : ""}`}>
      <LegalWordmark light={!isOnLightSurface} />
      <nav
        className="legal-desktop-nav liquid-glass"
        aria-label="Navegación principal"
      >
        {links.map(([label, href]) => (
          <a href={href} key={href}>
            {label}
          </a>
        ))}
        <a
          className="legal-group-link"
          href={GROUP_TRG_URL}
          target="_blank"
          rel="noreferrer"
        >
          GRUPO TRG <ArrowUpRight size={14} strokeWidth={1.5} />
        </a>
        <a className="legal-nav-cta liquid-glass" href="#contacto">
          CONTACTO <ArrowUpRight size={14} strokeWidth={1.5} />
        </a>
      </nav>
      <button
        className="legal-menu-button"
        type="button"
        aria-expanded={open}
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={21} /> : <Menu size={21} />}
      </button>
      {open && (
        <div className="legal-mobile-menu">
          <div className="legal-mobile-menu-inner">
            {links.map(([label, href]) => (
              <a href={href} key={href} onClick={() => setOpen(false)}>
                <span>{label}</span>
                <ArrowUpRight size={17} strokeWidth={1.5} />
              </a>
            ))}
            <a
              href={GROUP_TRG_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              <span>GRUPO TRG</span>
              <ArrowUpRight size={17} strokeWidth={1.5} />
            </a>
            <a
              className="legal-mobile-cta"
              href="#contacto"
              onClick={() => setOpen(false)}
            >
              Hablemos <ArrowUpRight size={17} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function LegalContactForm() {
  const [sent, setSent] = useState(false);
  const [mailtoUrl, setMailtoUrl] = useState("mailto:contacto@trglegal.cl");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const body = [
      `Nombre: ${formData.get("nombre") ?? ""}`,
      `Empresa: ${formData.get("empresa") ?? ""}`,
      `Correo: ${formData.get("correo") ?? ""}`,
      `Teléfono: ${formData.get("telefono") ?? ""}`,
      "",
      String(formData.get("mensaje") ?? ""),
    ].join("\n");
    setMailtoUrl(
      `mailto:contacto@trglegal.cl?subject=${encodeURIComponent("Solicitud de asesoría laboral")}&body=${encodeURIComponent(body)}`,
    );
    setSent(true);
  };

  if (sent) {
    return (
      <div className="legal-form-success" role="status">
        <Check size={22} strokeWidth={1.5} />
        <strong>Gracias por escribirnos.</strong>
        <span>Recibimos tu solicitud y te contactaremos a la brevedad.</span>
        <a className="legal-button legal-button-dark" href={mailtoUrl}>
          Abrir correo <ArrowUpRight size={16} strokeWidth={1.5} />
        </a>
      </div>
    );
  }

  return (
    <form className="legal-contact-form" onSubmit={handleSubmit}>
      <div className="legal-form-grid">
        <input
          required
          name="nombre"
          placeholder="Nombre y apellido"
          aria-label="Nombre y apellido"
        />
        <input
          required
          name="empresa"
          placeholder="Empresa"
          aria-label="Empresa"
        />
        <input
          required
          type="email"
          name="correo"
          placeholder="Correo electrónico"
          aria-label="Correo electrónico"
        />
        <input
          required
          name="telefono"
          placeholder="Teléfono"
          aria-label="Teléfono"
        />
      </div>
      <textarea
        required
        name="mensaje"
        placeholder="Cuéntanos en qué podemos ayudarte"
        aria-label="Cuéntanos en qué podemos ayudarte"
        rows={4}
      />
      <button type="submit" className="legal-button legal-button-dark">
        Enviar mensaje <ArrowUpRight size={16} strokeWidth={1.5} />
      </button>
    </form>
  );
}

export function TrgLegalPage() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [activeService, setActiveService] = useState<
    (typeof services)[number] | null
  >(null);

  useEffect(() => {
    if (!activeService) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveService(null);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeService]);

  useEffect(() => {
    const hero = heroRef.current;
    const video = videoRef.current;
    if (!hero || !video) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-reveal",
        { opacity: 0, y: 26 },
        {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.18,
        },
      );
    }, hero);

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let raf = 0;

    const handlePointer = (event: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      targetX = ((event.clientX - centerX) / centerX) * 18;
      targetY = ((event.clientY - centerY) / centerY) * 12;
    };

    const renderParallax = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;
      gsap.set(video, { x: currentX, y: currentY });
      raf = requestAnimationFrame(renderParallax);
    };

    window.addEventListener("mousemove", handlePointer, { passive: true });
    renderParallax();

    return () => {
      window.removeEventListener("mousemove", handlePointer);
      cancelAnimationFrame(raf);
      ctx.revert();
    };
  }, []);

  return (
    <div className="legal-page">
      <LegalHeader />

      <main>
        <section className="legal-hero" ref={heroRef}>
          <div className="legal-hero-media" aria-hidden="true">
            <video
              ref={videoRef}
              className="legal-hero-video"
              src={VIDEO_URL}
              poster="/assets/trg-legal-hero.png"
              autoPlay
              muted
              loop
              playsInline
              onLoadedMetadata={(event) => {
                event.currentTarget.playbackRate = 1.25;
              }}
            />
          </div>
          <div className="legal-hero-shade" aria-hidden="true" />
          <div className="legal-hero-grid" aria-hidden="true" />
          <div className="legal-hero-content">
            <div className="legal-hero-headline hero-reveal">
              <span className="legal-kicker">TRG LEGAL · DERECHO LABORAL</span>
              <h1>
                Conocemos la industria.
                <br />
                <em>Entendemos sus desafíos.</em>
              </h1>
            </div>
          </div>
          <div className="legal-hero-bottom-block hero-reveal">
            <p>
              Acompañamos a empresas del sector con soluciones jurídicas
              estratégicas y cercanas, respaldadas por la experiencia del
              ecosistema Grupo TRG.
            </p>
            <a className="legal-button legal-button-light" href="#contacto">
              Conversemos hoy <ArrowUpRight size={16} strokeWidth={1.5} />
            </a>
            <div className="legal-hero-trust">
              <Lock size={13} strokeWidth={1.5} />
              <span>CONOCIMIENTO DEL RUBRO. CRITERIO PARA DECIDIR.</span>
            </div>
          </div>
          <div className="legal-hero-scroll hero-reveal">
            <span>Explora TRG Legal</span>
            <a href="#quienes-somos" aria-label="Bajar a quiénes somos">
              <ChevronDown size={17} strokeWidth={1.4} />
            </a>
          </div>
        </section>

        <section className="legal-section legal-about" id="quienes-somos">
          <div className="legal-section-number">01 / 05</div>
          <div className="legal-section-heading">
            <span className="legal-kicker">Quiénes somos</span>
            <h2>Asesoría laboral especializada para empresas de transporte.</h2>
          </div>
          <div className="legal-about-grid">
            <div className="legal-about-copy">
              <p className="legal-lead">
                Entendemos la operación, las personas y las decisiones que
                sostienen la continuidad de una empresa de transporte.
              </p>
              <p>
                Trabajamos cerca de nuestros clientes para ordenar procesos,
                anticipar riesgos y acompañar decisiones que impactan
                directamente en las personas y en el negocio.
              </p>
              <a className="legal-outline-link" href="#por-que">
                Nuestra forma de trabajar{" "}
                <ArrowUpRight size={16} strokeWidth={1.5} />
              </a>
            </div>
            <div className="legal-about-image-wrap">
              <img
                src="https://trg.cl/storage/slides/1.jpeg"
                alt="Camión recorriendo una ruta costera"
                loading="lazy"
              />
              <span className="legal-image-caption">
                Experiencia legal con sentido de terreno.
              </span>
            </div>
          </div>
          <div className="legal-about-details">
            {aboutFacts.map((fact) => (
              <div className="legal-about-detail" key={fact.label}>
                <strong>{fact.label}</strong>
                <p>{fact.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          className="legal-body-marquee"
          aria-label="El ecosistema TRG en movimiento"
        >
          <div className="legal-body-marquee-track">
            {[...bodyImages, ...bodyImages].map((image, index) => (
              <div
                className="legal-body-marquee-card"
                key={`${image.src}-${index}`}
              >
                <img src={image.src} alt={image.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        <section className="legal-section legal-services" id="servicios">
          <div className="legal-section-number">02 / 05</div>
          <div className="legal-section-heading legal-section-heading-wide">
            <span className="legal-kicker">Servicios</span>
            <h2>
              Soluciones jurídicas diseñadas para los desafíos del transporte.
            </h2>
          </div>
          <div className="legal-practice-grid">
            {services.map((service) => (
              <article className="legal-practice-card" key={service.number}>
                <div className="legal-practice-card-top">
                  <span className="legal-service-number">{service.number}</span>
                  <ArrowUpRight
                    className="legal-service-arrow"
                    size={21}
                    strokeWidth={1.3}
                  />
                </div>
                <h3>{service.title}</h3>
                <p>{service.detail}</p>
                <button
                  type="button"
                  className="legal-practice-card-button"
                  onClick={() => setActiveService(service)}
                >
                  Ver detalle <ArrowUpRight size={14} strokeWidth={1.5} />
                </button>
              </article>
            ))}
          </div>
        </section>

        {activeService && (
          <div
            className="legal-modal-backdrop"
            role="presentation"
            onMouseDown={() => setActiveService(null)}
          >
            <div
              className="legal-service-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="service-modal-title"
              onMouseDown={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="legal-modal-close"
                aria-label="Cerrar detalle del servicio"
                onClick={() => setActiveService(null)}
              >
                <X size={19} strokeWidth={1.5} />
              </button>
              <span className="legal-service-number">
                {activeService.number}
              </span>
              <h2 id="service-modal-title">{activeService.title}</h2>
              <p>{activeService.detail}</p>
              <div className="legal-modal-actions">
                <a
                  className="legal-button legal-button-dark"
                  href="#contacto"
                  onClick={() => setActiveService(null)}
                >
                  Solicitar asesoría{" "}
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </a>
                <a href="mailto:contacto@trglegal.cl">contacto@trglegal.cl</a>
              </div>
            </div>
          </div>
        )}

        <section className="legal-section legal-clients" id="clientes">
          <div className="legal-section-number">03 / 05</div>
          <div className="legal-section-heading legal-section-heading-wide">
            <span className="legal-kicker">Confían en nosotros</span>
            <h2>Relaciones construidas con conocimiento y cercanía.</h2>
          </div>
          <div className="legal-client-placeholder">
            <span className="legal-client-placeholder-mark">TRG LEGAL</span>
            <div>
              <h3>Una sección para nuestros clientes</h3>
              <p>
                Estamos preparando este espacio para presentar a las empresas
                que confían en nuestro trabajo. Pronto incorporaremos sus logos
                y testimonios.
              </p>
              <a className="legal-outline-link" href="#contacto">
                Conversemos <ArrowUpRight size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </section>

        <section className="legal-section legal-team" id="equipo">
          <div className="legal-section-number">04 / 05</div>
          <div className="legal-team-intro">
            <span className="legal-kicker">Nuestro equipo</span>
            <h2>
              Un equipo preparado para entender la realidad de cada operación.
            </h2>
          </div>
          <div className="legal-team-pending">
            <div className="legal-team-pending-mark">TRG</div>
            <div>
              <span className="legal-team-pending-label">
                Perfiles profesionales
              </span>
              <h3>Próximamente, nuestro equipo</h3>
              <p>
                Incorporaremos las fotografías, fichas profesionales y perfiles
                de LinkedIn de cada integrante.
              </p>
              <a className="legal-button legal-button-dark" href="#contacto">
                Hablemos <ArrowUpRight size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </section>

        <section className="legal-why" id="por-que">
          <div className="legal-why-backdrop" aria-hidden="true" />
          <div className="legal-section-number">05 / 05</div>
          <div className="legal-why-content">
            <span className="legal-kicker legal-kicker-light">
              Por qué TRG Legal
            </span>
            <h2>La certeza jurídica también se construye con contexto.</h2>
            <p>
              Somos parte de Grupo TRG: un ecosistema que conoce el transporte,
              la logística y la operación desde dentro. Esa cercanía nos permite
              traducir el derecho en decisiones claras, oportunas y aplicables.
            </p>
            <div className="legal-why-points">
              <span>
                <Check size={15} strokeWidth={1.5} /> Especialización sectorial
              </span>
              <span>
                <Check size={15} strokeWidth={1.5} /> Acompañamiento estratégico
              </span>
              <span>
                <Check size={15} strokeWidth={1.5} /> Respaldo de Grupo TRG
              </span>
            </div>
          </div>
          <div className="legal-ecosystem">
            <span>Parte de un ecosistema con experiencia</span>
            <a
              href={GROUP_TRG_URL}
              target="_blank"
              rel="noreferrer"
              className="legal-ecosystem-link"
            >
              <strong>
                grupo <i>TRG</i>
              </strong>
            </a>
            <div className="legal-ecosystem-divider" />
            <strong>
              TRG <i>LEGAL</i>
            </strong>
            <div className="legal-ecosystem-divider" />
            <strong>TLS</strong>
          </div>
        </section>

        <section className="legal-contact" id="contacto">
          <div className="legal-contact-heading">
            <span className="legal-kicker">Contacto</span>
            <h2>¿Necesitas asesoría laboral especializada?</h2>
            <p>
              Conversemos sobre los desafíos de tu empresa y cómo podemos
              ayudarte.
            </p>
            <div className="legal-contact-details">
              <a href="mailto:contacto@trglegal.cl">
                <Mail size={17} strokeWidth={1.4} /> contacto@trglegal.cl
              </a>
              <a href="tel:+56229005600">
                <Phone size={17} strokeWidth={1.4} /> +56 2 2900 5600
              </a>
              <span>
                <MapPin size={17} strokeWidth={1.4} /> Av. Apoquindo 4450, Piso
                16 · Las Condes, Santiago
              </span>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={17} strokeWidth={1.4} /> LinkedIn
              </a>
            </div>
          </div>
          <LegalContactForm />
        </section>
      </main>

      <footer className="legal-footer">
        <LegalWordmark light />
        <span>
          © {new Date().getFullYear()} TRG Legal. Todos los derechos reservados.
        </span>
        <div>
          <a href={GROUP_TRG_URL} target="_blank" rel="noreferrer">
            Conoce Grupo TRG
          </a>
          <a href="#contacto">Política de privacidad</a>
          <a href="#contacto">Términos y condiciones</a>
        </div>
      </footer>
    </div>
  );
}
