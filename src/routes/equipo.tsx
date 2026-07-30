import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { LegalTeamCard } from "../components/LegalTeamCard";
import { TRG_LEGAL_TEAM } from "../components/legal-team";

export const Route = createFileRoute("/equipo")({
  component: LegalTeamPage,
});

function LegalTeamPage() {
  return (
    <div className="legal-page legal-team-page">
      <header className="legal-team-page-header">
        <a href="/" aria-label="TRG Legal, inicio">
          <img src="/assets/trg-legal-logo-navy.png" alt="TRG Legal" />
        </a>
        <nav aria-label="Navegación de TRG Legal">
          <a href="/#quienes-somos">QUIÉNES SOMOS</a>
          <a href="/#servicios">SERVICIOS</a>
          <a href="/#equipo">EQUIPO</a>
          <a className="legal-team-page-nav-cta" href="/#contacto">
            HABLEMOS <ArrowUpRight size={14} strokeWidth={1.5} />
          </a>
        </nav>
      </header>

      <main>
        <section className="legal-team-screen-hero">
          <div>
            <span className="legal-kicker">TRG LEGAL · EQUIPO</span>
            <h1>Las personas detrás de cada decisión.</h1>
          </div>
          <p>
            No trabajamos desde la distancia. Combinamos experiencia jurídica, contexto operativo y
            una mirada cercana para acompañar decisiones que importan.
          </p>
          <div className="legal-team-screen-hero-mark" aria-hidden="true">
            <span>TRG</span>
            <strong>LEGAL</strong>
            <small>PERSONAS · CRITERIO · CONTEXTO</small>
          </div>
        </section>

        <section className="legal-team-directory" id="equipo-completo">
          <div className="legal-team-directory-heading">
            <span className="legal-kicker">Conoce al equipo</span>
            <h2>Criterio jurídico que se construye en equipo.</h2>
            <p>
              Conoce la mirada de cada integrante y descubre cómo aportamos experiencia y claridad
              a cada desafío.
            </p>
          </div>
          <div className="legal-team-directory-grid">
            {TRG_LEGAL_TEAM.map((member) => (
              <LegalTeamCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        <section className="legal-team-screen-cta">
          <div>
            <span className="legal-kicker legal-kicker-light">Una conversación a tiempo</span>
            <h2>
              El mejor momento para ordenar una decisión es antes de que se vuelva urgente.
            </h2>
          </div>
          <a className="legal-button legal-button-light" href="/#contacto">
            Hablemos <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </section>
      </main>

      <footer className="legal-footer legal-team-page-footer">
        <a href="/" aria-label="TRG Legal, inicio">
          <img
            src="/assets/trg-legal-logo.png"
            className="is-light"
            alt="TRG Legal"
          />
        </a>
        <span>© {new Date().getFullYear()} TRG Legal. Todos los derechos reservados.</span>
        <a href="/#contacto">Hablemos</a>
      </footer>
    </div>
  );
}
