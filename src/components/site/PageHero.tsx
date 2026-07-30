import { useEffect, useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "./hooks";
import { SectionEyebrow } from "./Reveal";

/**
 * Compact hero banner used on every interior page (services, terminals,
 * nosotros, etc.) — same visual language as the homepage hero, without the
 * 3D scene, so secondary pages stay light and fast.
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}) {
  const reduced = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setLoaded(true));
    if (imgRef.current?.complete) setImgLoaded(true);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      className="relative w-full min-h-[58vh] md:min-h-[64vh] flex flex-col overflow-hidden"
      style={{ backgroundColor: "#071B32" }}
    >
      <img
        ref={imgRef}
        src={image}
        alt={imageAlt}
        loading="eager"
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: imgLoaded ? 0.55 : 0,
          transform: reduced ? "none" : imgLoaded ? "scale(1)" : "scale(1.06)",
          transition: "opacity 1.1s ease, transform 1.6s cubic-bezier(0.16,1,0.3,1)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(7,27,50,0.45) 0%, rgba(7,27,50,0.35) 40%, rgba(7,27,50,0.9) 100%)",
        }}
      />

      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-6xl mx-auto w-full px-5 md:px-8 pt-32 pb-14 md:pt-36 md:pb-16">
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s ease 0.1s",
          }}
        >
          <SectionEyebrow dark>{eyebrow}</SectionEyebrow>
        </div>

        <h1
          className="mt-4 text-white font-extrabold max-w-3xl"
          style={{
            fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(22px)",
            transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
          }}
        >
          {title}
        </h1>

        {description && (
          <p
            className="mt-5 max-w-xl text-white/80 text-base md:text-lg font-medium leading-relaxed"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.9s ease 0.3s, transform 0.9s ease 0.3s",
            }}
          >
            {description}
          </p>
        )}

        {children && (
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(18px)",
              transition: "opacity 0.9s ease 0.4s, transform 0.9s ease 0.4s",
            }}
          >
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
