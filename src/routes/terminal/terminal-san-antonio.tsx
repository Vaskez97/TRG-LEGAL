import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../../components/site/PageShell";
import { TerminalTemplate } from "../../components/site/TerminalTemplate";
import { SAN_ANTONIO_IMAGE } from "../../components/site/constants";

export const Route = createFileRoute("/terminal/terminal-san-antonio")({
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <TerminalTemplate
        name="San Antonio"
        image={SAN_ANTONIO_IMAGE}
        location="Cruce Cartagena, a aproximadamente 15 minutos del puerto de San Antonio, el principal puerto del país."
        advantages={[
          "Conectar eficientemente la operación portuaria para retiro y embarque de contenedores.",
          "Descongestionar procesos logísticos.",
          "Facilitar el manejo de grandes volúmenes de carga.",
        ]}
        capabilities={[
          { title: "Patio adocretado", detail: "De 40.000 m², más un anexo de 12.000 m²." },
          { title: "Bodega", detail: "De 1.200 m² para carga general." },
          { title: "Zona de conexión", detail: "Para hasta 80 contenedores refrigerados." },
          { title: "Áreas destinadas", detail: "A consolidado y desconsolidado de contenedores." },
          {
            title: "Capacidad para operar",
            detail: "Grandes volúmenes de carga de forma simultánea.",
          },
        ]}
        infrastructure={[
          "3 máquinas porta contenedores de hasta 45 toneladas.",
          "Grúas horquilla de 3, 5 y 15 toneladas.",
          "Guardias de seguridad y sistema CCTV 24/7 con sensores de intrusión.",
          "Control de accesos y monitoreo constante.",
        ]}
        otherTerminal={{ label: "Terminal Valparaíso", href: "/terminal/terminal-valparaiso" }}
      />
    </PageShell>
  );
}
