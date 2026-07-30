import { useState, type ReactNode } from "react";
import { Navbar, MobileMenu } from "./Navigation";
import { Footer } from "./Footer";

/** Standard page chrome (navbar + mobile menu + footer) for interior pages. */
export function PageShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Navbar onOpenMenu={() => setMenuOpen(true)} menuOpen={menuOpen} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
