import type { CSSProperties, ReactNode } from "react";
import { useInView } from "./hooks";

/* Shared scroll-triggered fade/slide-up reveal used across every page. */
export function Reveal({
  children,
  delay = 0,
  className = "",
  style: styleProp,
  as: As = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  as?: "div" | "li";
}) {
  const { ref, visible } = useInView<HTMLDivElement>();
  const style: CSSProperties = {
    ...styleProp,
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    willChange: "opacity, transform",
  };
  const Tag = As as "div";
  return (
    <Tag ref={ref as never} className={className} style={style}>
      {children}
    </Tag>
  );
}

export function SectionEyebrow({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "#F3C400" }} />
      <span
        className="text-[11px] md:text-xs font-extrabold uppercase"
        style={{ letterSpacing: "0.18em", color: dark ? "rgba(255,255,255,0.8)" : "#0B4F8A" }}
      >
        {children}
      </span>
    </div>
  );
}

export const iconProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} {...iconProps}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CheckIcon({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} style={style} {...iconProps}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}
