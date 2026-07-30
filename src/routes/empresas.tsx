import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Footer } from "../components/site/Footer";
import { SiteHeader } from "../components/site/Navigation";

export const Route = createFileRoute("/empresas")({ component: EmpresasPage });
const items = [
  [
    "Transportes TRG",
    "Transporte terrestre con foco en seguridad, cumplimiento y trazabilidad.",
    "https://trg.cl/storage/slides/1.jpeg",
    "/servicios/transporte-de-contenedores",
  ],
  [
    "TLS",
    "Terminal logístico estratégico para la seguridad de activos, trazabilidad y comercio exterior.",
    "https://trg.cl/storage/terminales/trg-terminal-valparaiso.jpg",
    "/terminal/terminal-valparaiso",
  ],
  [
    "TRG Legal",
    "Acompañamiento jurídico especializado en cumplimiento, relaciones laborales y prevención de riesgos legales.",
    "/assets/trg-legal-hero.png",
    "/trg-legal",
  ],
];
function EmpresasPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <section
          className="group-hero"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(3,42,85,.96), rgba(3,42,85,.55)), url(https://trg.cl/storage/slides/1.jpeg)",
          }}
        >
          <div className="container hero-copy">
            <span className="eyebrow eyebrow-light">02 · ECOSISTEMA TRG</span>
            <h1>Empresas que actúan con una misma visión.</h1>
            <p>
              Desde el transporte terrestre hasta la operación logística y el acompañamiento legal
              especializado, reunimos empresas que comparten una misma visión.
            </p>
          </div>
        </section>
        <section className="section companies-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Nuestras empresas</span>
              <h2>Especialización que se integra.</h2>
              <p>Conoce las capacidades que construyen el respaldo corporativo de Grupo TRG.</p>
            </div>
            <div className="company-grid">
              {items.map(([name, text, image, href]) => (
                <a className="company-card" href={href} key={name}>
                  <div className="card-image">
                    <img src={image} alt="" />
                    <span>{name === "TRG Legal" ? "CUMPLIMIENTO Y RELACIONES" : "GRUPO TRG"}</span>
                  </div>
                  <div className="company-body">
                    <div className="company-mark">
                      {name === "TRG Legal" ? (
                        <>
                          TRG <i>LEGAL</i>
                        </>
                      ) : (
                        name
                      )}
                    </div>
                    <p>{text}</p>
                    <span className="text-link">
                      Conocer empresa <ArrowRight />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
