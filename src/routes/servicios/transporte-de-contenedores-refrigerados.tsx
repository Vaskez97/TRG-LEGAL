import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../../components/site/PageShell";
import { ServiceTemplate } from "../../components/site/ServiceTemplate";

export const Route = createFileRoute("/servicios/transporte-de-contenedores-refrigerados")({
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <ServiceTemplate
        title="Transporte de contenedores refrigerados"
        intro={[
          "TRG cuenta con experiencia y equipamiento para el transporte de contenedores refrigerados, garantizando el correcto manejo de carga sensible durante todo el trayecto.",
          "La operación se complementa con protocolos de control y monitoreo, asegurando el mantenimiento de la cadena de frío y la integridad de la mercadería.",
        ]}
        heroImage="https://trg.cl/storage/servicios/transporte-de-contenedores-refrigerados-3.jpg"
        gallery={[
          "https://trg.cl/storage/servicios/transporte-de-contenedores-refrigerados-1.jpg",
          "https://trg.cl/storage/servicios/transporte-de-contenedores-refrigerados-31776655019.jpeg",
          "https://trg.cl/storage/servicios/transporte-de-contenedores-refrigerados-41776655119.jpeg",
          "https://trg.cl/storage/slides/3.jpeg",
        ]}
        benefits={[
          { title: "Manejo especializado", detail: "De carga refrigerada." },
          { title: "Protocolos", detail: "De seguridad y control." },
          { title: "Coordinación operativa", detail: "Especializada." },
          { title: "Monitoreo constante", detail: "Durante el transporte." },
        ]}
        otherServices={[
          { label: "Transporte de contenedores", href: "/servicios/transporte-de-contenedores" },
          { label: "Almacenaje de carga general", href: "/servicios/almacenaje-de-carga-general" },
          {
            label: "Consolidado y desconsolidado de contenedores",
            href: "/servicios/consolidado-y-desconsolidado-de-contenedores",
          },
        ]}
      />
    </PageShell>
  );
}
