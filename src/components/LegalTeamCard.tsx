import { Linkedin, RotateCcw } from "lucide-react";
import { useState, type KeyboardEvent } from "react";

export type LegalTeamMember = {
  id: string;
  name: string;
  role: string;
  summary: string;
  detail: string;
  linkedin?: string;
  initials: string;
  tone: "blue" | "gold" | "ink";
};

export function LegalTeamCard({ member }: { member: LegalTeamMember }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const flip = () => setIsFlipped(true);
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      flip();
    }
  };

  return (
    <article className={`legal-flip-card ${isFlipped ? "is-flipped" : ""}`}>
      <div className="legal-flip-card-inner">
        <div
          className="legal-flip-face legal-flip-front"
          role="button"
          tabIndex={0}
          aria-label={`Conocer más sobre ${member.name}`}
          onClick={flip}
          onKeyDown={handleKeyDown}
        >
          <div
            className={`legal-team-monogram legal-team-monogram-${member.tone}`}
            aria-hidden="true"
          >
            {member.initials}
          </div>
          <div className="legal-flip-copy">
            <span>{member.role}</span>
            <h3>{member.name}</h3>
            <p>{member.summary}</p>
          </div>
          <span className="legal-flip-trigger">
            Ver perfil <ArrowMark />
          </span>
        </div>

        <div className="legal-flip-face legal-flip-back">
          <div className="legal-flip-copy">
            <span>{member.role}</span>
            <h3>{member.name}</h3>
            <p>{member.detail}</p>
          </div>
          <div className="legal-flip-actions">
            <button
              type="button"
              className="legal-flip-back-button"
              onClick={() => setIsFlipped(false)}
            >
              <RotateCcw size={14} strokeWidth={1.5} /> Volver
            </button>
            {member.linkedin ? (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                className="legal-flip-linkedin"
              >
                <Linkedin size={15} strokeWidth={1.5} /> LinkedIn
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

function ArrowMark() {
  return <span aria-hidden="true">↗</span>;
}
