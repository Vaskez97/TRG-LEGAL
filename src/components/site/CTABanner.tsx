import { Reveal, ArrowIcon } from "./Reveal";
import { WHATSAPP_URL } from "./constants";

/** The recurring bottom "need help?" call-to-action banner used sitewide. */
export function CTABanner({
  title = "¿Tu operación necesita un transporte con experiencia?",
  variant = "navy",
}: {
  title?: string;
  variant?: "navy" | "yellow";
}) {
  const isNavy = variant === "navy";
  return (
    <section className="w-full py-14 md:py-20 px-5 md:px-8" style={{ backgroundColor: "#F5F5F2" }}>
      <Reveal className="max-w-6xl mx-auto">
        <div
          className="rounded-2xl p-6 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{ backgroundColor: isNavy ? "#071B32" : "#F3C400" }}
        >
          <h3
            className="font-extrabold max-w-xl"
            style={{
              color: isNavy ? "#FFFFFF" : "#071B32",
              fontSize: "clamp(1.5rem, 3vw, 2.4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </h3>
          <div className="flex flex-wrap gap-3 shrink-0">
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-extrabold text-sm transition-transform hover:scale-[1.03] active:scale-95"
              style={{
                backgroundColor: isNavy ? "#F3C400" : "#071B32",
                color: isNavy ? "#071B32" : "#FFFFFF",
              }}
            >
              Contáctanos
              <ArrowIcon className="w-4 h-4" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm border transition-colors"
              style={{
                color: isNavy ? "#FFFFFF" : "#071B32",
                borderColor: isNavy ? "rgba(255,255,255,0.3)" : "rgba(7,27,50,0.3)",
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
