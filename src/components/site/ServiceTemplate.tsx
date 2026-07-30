import { Reveal, SectionEyebrow, ArrowIcon } from "./Reveal";
import { PageHero } from "./PageHero";
import { CTABanner } from "./CTABanner";

export type ServiceBenefit = { title: string; detail: string };
export type ServiceLink = { label: string; href: string };

export function ServiceTemplate({
  title,
  intro,
  heroImage,
  gallery,
  benefits,
  otherServices,
}: {
  title: string;
  intro: string[];
  heroImage: string;
  gallery: string[];
  benefits: ServiceBenefit[];
  otherServices: ServiceLink[];
}) {
  return (
    <>
      <PageHero
        eyebrow="Servicios"
        title={title}
        description={intro[0]}
        image={heroImage}
        imageAlt={title}
      />

      <section
        className="w-full py-16 md:py-24 px-5 md:px-8"
        style={{ backgroundColor: "#F5F5F2" }}
      >
        <div className="max-w-6xl mx-auto">
          {intro.length > 1 && (
            <Reveal className="max-w-2xl">
              {intro.slice(1).map((p, i) => (
                <p
                  key={i}
                  className="text-[#071B32]/75 text-base md:text-lg font-medium leading-relaxed mt-4 first:mt-0"
                >
                  {p}
                </p>
              ))}
            </Reveal>
          )}

          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {gallery.map((src, i) => (
              <Reveal key={src} delay={i * 80} className="rounded-2xl overflow-hidden h-40 md:h-56">
                <img
                  src={src}
                  alt={`${title} — imagen ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        className="w-full py-16 md:py-24 px-5 md:px-8"
        style={{ backgroundColor: "#FFFFFF" }}
      >
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <SectionEyebrow>Beneficios para el cliente</SectionEyebrow>
            <h2
              className="mt-4 font-extrabold max-w-2xl"
              style={{
                fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "#071B32",
              }}
            >
              Una operación pensada para tu tranquilidad.
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div
                  className="h-full rounded-2xl border p-5 md:p-6"
                  style={{ borderColor: "rgba(7,27,50,0.1)", backgroundColor: "#F5F5F2" }}
                >
                  <div
                    className="text-2xl md:text-3xl font-extrabold"
                    style={{ color: "#F3C400", letterSpacing: "-0.03em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div
                    className="mt-3 font-extrabold text-sm md:text-base"
                    style={{ color: "#071B32" }}
                  >
                    {b.title}
                  </div>
                  <div className="mt-1 text-sm text-[#071B32]/70 font-medium">{b.detail}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {otherServices.length > 0 && (
        <section
          className="w-full pb-16 md:pb-24 px-5 md:px-8"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="max-w-6xl mx-auto">
            <Reveal>
              <SectionEyebrow>Explora otros servicios</SectionEyebrow>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {otherServices.map((s, i) => (
                <Reveal key={s.href} delay={i * 70}>
                  <a
                    href={s.href}
                    className="group flex items-center justify-between gap-3 rounded-xl border p-5 transition-colors hover:border-[#0B4F8A]/40"
                    style={{ borderColor: "rgba(7,27,50,0.1)" }}
                  >
                    <span
                      className="font-extrabold"
                      style={{ color: "#071B32", letterSpacing: "-0.02em" }}
                    >
                      {s.label}
                    </span>
                    <ArrowIcon className="w-5 h-5 text-[#0B4F8A] transition-transform group-hover:translate-x-1" />
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
}
