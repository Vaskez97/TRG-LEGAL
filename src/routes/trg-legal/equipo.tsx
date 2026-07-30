import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { LegalTeamCard } from "../../components/LegalTeamCard";
import { TRG_LEGAL_TEAM } from "../../components/legal-team";

export const Route = createFileRoute("/trg-legal/equipo")({
  component: LegalTeamPage,
});

function LegalTeamPage() {
  return (
    <div className="legal-page legal-team-page">
      <header className="legal-team-page-header">
        <a href="/trg-legal" aria-label="TRG Legal, inicio">
          <img src="/assets/trg-legal-logo-navy.png" alt="TRG Legal" />
        </a>
        <nav aria-label="Navegación de TRG Legal">
          <a href="/trg-legal#quienes-somos">QUIÉNES SOMOS</a>
          <a href="/trg-legal#servicios">SERVICIOS</a>
          <a href="/trg-legal#equipo">EQUIPO</a>
          <a className="legal-team-page-nav-cta" href="/trg-legal#contacto">
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
            Un equipo que combina experiencia jurídica, conocimiento de la
            operación y una mirada cercana para acompañar a empresas de
            transporte y logística.
          </p>
        </section>

        <section className="legal-team-directory" id="equipo-completo">
          <div className="legal-team-directory-heading">
            <span className="legal-kicker">Conoce al equipo</span>
            <h2>Haz clic en cada tarjeta para ver más.</h2>
            <p>
              Descubre el rol de cada profesional y visita su perfil de LinkedIn
              cuando esté disponible.
            </p>
          </div>
          <div className="legal-team-directory-grid">
            {TRG_LEGAL_TEAM.map((member) => (
              <LegalTeamCard key={member.name} member={member} />
            ))}
          </div>
        </section>

        <section className="legal-team-screen-cta">
          <div>
            <span className="legal-kicker legal-kicker-light">
              Una conversación a tiempo
            </span>
            <h2>
              El mejor momento para ordenar una decisión es antes de que se
              vuelva urgente.
            </h2>
          </div>
          <a
            className="legal-button legal-button-light"
            href="/trg-legal#contacto"
          >
            Hablemos <ArrowUpRight size={16} strokeWidth={1.5} />
          </a>
        </section>
      </main>

      <footer className="legal-footer legal-team-page-footer">
        <a href="/trg-legal" aria-label="TRG Legal, inicio">
          <img src="/assets/trg-legal-logo.png" alt="TRG Legal" />
        </a>
        <span>
          © {new Date().getFullYear()} TRG Legal. Todos los derechos reservados.
        </span>
        <a href="/trg-legal#contacto">Hablemos</a>
      </footer>
    </div>
  );
}
