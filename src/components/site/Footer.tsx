import { Linkedin, Instagram, Mail } from "lucide-react";
import { EMAIL } from "./constants";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a href="/" className="footer-logo" aria-label="Grupo TRG, inicio">
              <img src="/assets/logo-footer.svg" alt="Grupo TRG" />
            </a>
            <p>
              Experiencia, gestión y soluciones especializadas para acompañar a quienes mueven el
              país.
            </p>
          </div>
          <div>
            <h3>Empresas</h3>
            <a href="/servicios/transporte-de-contenedores">Transportes TRG</a>
            <a href="/terminal/terminal-valparaiso">TLS</a>
            <a href="/trg-legal">TRG Legal</a>
          </div>
          <div>
            <h3>Contacto</h3>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href="/contacto">Hablemos</a>
            <div className="socials">
              <a href="https://www.linkedin.com" aria-label="LinkedIn">
                <Linkedin />
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram">
                <Instagram />
              </a>
              <a href={`mailto:${EMAIL}`} aria-label="Correo">
                <Mail />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Grupo TRG. Todos los derechos reservados.</span>
          <span>
            <a href="/">Política de privacidad</a>
            <a href="/">Términos y condiciones</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
