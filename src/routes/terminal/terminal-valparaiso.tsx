import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../../components/site/PageShell";
import { TerminalTemplate } from "../../components/site/TerminalTemplate";
import { VALPARAISO_IMAGE } from "../../components/site/constants";

export const Route = createFileRoute("/terminal/terminal-valparaiso")({
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <TerminalTemplate
        name="Valparaíso"
        image={VALPARAISO_IMAGE}
        location="Camino La Pólvora, a solo 5 minutos de ZEAL, uno de los principales accesos portuarios del país."
        advantages={[
          "Reducir tiempos de traslado.",
          "Optimizar la operación de importación y exportación.",
          "Mejorar la coordinación logística con clientes y operadores portuarios.",
        ]}
        capabilities={[
          { title: "Patio adocretado", detail: "De 25.000 m² para contenedores." },
          { title: "6.000 m² de bodegas", detail: "Para carga general." },
          {
            title: "Zonas habilitadas",
            detail: "Para consolidado y desconsolidado de contenedores.",
          },
          { title: "Zona de conexión", detail: "Para contenedores refrigerados (reefers)." },
          { title: "Operación preparada", detail: "Para altos volúmenes de carga." },
        ]}
        infrastructure={[
          "Grúas horquilla de 3, 5 y 12 toneladas.",
          "Sistema de vigilancia con guardias y CCTV 24/7.",
          "Máquina porta contenedores de hasta 45 toneladas.",
          "Control de accesos y monitoreo permanente.",
        ]}
        otherTerminal={{ label: "Terminal San Antonio", href: "/terminal/terminal-san-antonio" }}
      />
    </PageShell>
  );
}
