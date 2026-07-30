import type { AnchorHTMLAttributes } from "react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const MAIN_LINKS = [
  ["Inicio", "/#inicio"],
  ["Quiénes somos", "/nosotros"],
  ["Empresas", "/empresas"],
  ["Compromiso", "/compromiso"],
  ["Actualidad", "/actualidad"],
  ["Contacto", "/contacto"],
];

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function HeaderLogo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="/"
      className={`group flex items-center gap-2 ${light ? "text-white" : "text-[#032A55]"}`}
      aria-label="Grupo TRG, inicio"
    >
      <img src="/assets/logo-blanco.svg" alt="Grupo TRG" className="brand-logo" />
    </a>
  );
}

export function NavLink({
  href,
  children,
  className,
  onClick,
  style,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: AnchorHTMLAttributes<HTMLAnchorElement>["style"];
}) {
  const [path, hash] = href.split("#");
  return (
    <a
      href={href}
      className={className}
      style={style}
      onClick={(e) => {
        if (hash && window.location.pathname === (path || "/")) {
          e.preventDefault();
          scrollToId(hash);
          window.history.replaceState(null, "", window.location.pathname);
        }
        onClick?.();
      }}
    >
      {children}
    </a>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <HeaderLogo />
        <nav className="desktop-nav" aria-label="Navegación principal">
          {MAIN_LINKS.map(([label, href]) => (
            <NavLink key={href} href={href} className="nav-link">
              {label}
            </NavLink>
          ))}
          <a className="button button-small" href="/contacto">
            Hablemos
          </a>
        </nav>
        <button
          className="menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <>
          <button
            className="mobile-menu-backdrop"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
          />
          <div id="mobile-nav" className="mobile-nav">
            <div className="mobile-drawer-top">
              <button
                className="menu-button mobile-menu-close"
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
              >
                <X />
              </button>
            </div>
            <nav aria-label="Navegación móvil">
              {MAIN_LINKS.map(([label, href]) => (
                <NavLink
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="mobile-link"
                >
                  {label}
                </NavLink>
              ))}
              <a href="/contacto" onClick={() => setOpen(false)} className="button">
                Hablemos
              </a>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}

// Compatibility chrome used by the existing operational pages.
export function Navbar({ onOpenMenu, menuOpen }: { onOpenMenu: () => void; menuOpen: boolean }) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="/" aria-label="Grupo TRG, inicio">
          <img src="/assets/logo-blanco.svg" alt="Grupo TRG" className="brand-logo" />
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          {MAIN_LINKS.map(([label, href]) => (
            <NavLink key={href} href={href} className="nav-link">
              {label}
            </NavLink>
          ))}
          <a href="/contacto" className="button button-small">
            Hablemos
          </a>
        </nav>
        <button
          className="menu-button"
          onClick={onOpenMenu}
          aria-expanded={menuOpen}
          aria-controls="legacy-mobile-menu"
          aria-label="Abrir menú"
        >
          <Menu />
        </button>
      </div>
    </header>
  );
}
export function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", close);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", close);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <>
      <button className="mobile-menu-backdrop" aria-label="Cerrar menú" onClick={onClose} />
      <div id="legacy-mobile-menu" className="mobile-nav" role="dialog" aria-modal="true">
        <div className="mobile-drawer-top">
          <button
            className="menu-button mobile-menu-close"
            onClick={onClose}
            aria-label="Cerrar menú"
          >
            <X />
          </button>
        </div>
        <nav>
          {MAIN_LINKS.map(([label, href]) => (
            <NavLink key={href} href={href} onClick={onClose} className="mobile-link">
              {label}
            </NavLink>
          ))}
          <a href="/contacto" onClick={onClose} className="button">
            Hablemos
          </a>
        </nav>
      </div>
    </>
  );
}
