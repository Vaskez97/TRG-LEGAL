import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "../components/site/Footer";
import { SiteHeader } from "../components/site/Navigation";
import { useState } from "react";
export const Route = createFileRoute("/compromiso")({ component: CompromisoPage });
const pillars = [
  [
    "Seguridad como estándar",
    "Cuidamos a las personas, los activos y el entorno en cada decisión.",
  ],
  ["Personas al centro", "Promovemos el desarrollo, el respeto y el trabajo colaborativo."],
  ["Excelencia operacional", "Buscamos procesos eficientes, trazables y en mejora continua."],
  ["Profesionalización", "Aportamos gestión, cumplimiento y conocimiento a la industria."],
  ["Sostenibilidad", "Gestionamos con responsabilidad hoy para construir el futuro."],
  ["Cumplimiento", "Actuamos con rigurosidad y relaciones transparentes."],
];
function CompromisoPage() {
  const [active, setActive] = useState(0);
  return (
    <div>
      <SiteHeader />
      <main>
        <section
          className="group-hero"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(3,42,85,.95), rgba(3,42,85,.5)), url(https://trg.cl/storage/slides/3.jpeg)",
          }}
        >
          <div className="container hero-copy">
            <span className="eyebrow eyebrow-light">03 · COMPROMISO</span>
            <h1>Actuar bien también es una forma de avanzar.</h1>
            <p>
              Una industria más segura y profesional se construye con decisiones consistentes,
              personas comprometidas y gestión responsable.
            </p>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Nuestros pilares</span>
              <h2>Lo que guía nuestra forma de actuar.</h2>
            </div>
            <div className="focus-grid">
              {pillars.map(([title, text], i) => (
                <button
                  className="focus-item text-left"
                  onClick={() => setActive(i)}
                  key={title}
                  aria-pressed={active === i}
                >
                  <span className="eyebrow">0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
