import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../../components/site/PageShell";
import { ServiceTemplate } from "../../components/site/ServiceTemplate";

export const Route = createFileRoute("/servicios/consolidado-y-desconsolidado-de-contenedores")({
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <ServiceTemplate
        title="Consolidado y desconsolidado de contenedores"
        intro={[
          "Realizamos servicios de consolidado y desconsolidado de contenedores en nuestros terminales, facilitando el llenado y vaciado de carga de forma segura y eficiente.",
          "Este servicio permite optimizar tiempos y costos logísticos, centralizando la operación en un solo punto y bajo el control directo de TRG.",
        ]}
        heroImage="https://trg.cl/storage/servicios/consolidado-y-desconsolidado-de-contenedores-1.jpg"
        gallery={[
          "https://trg.cl/storage/servicios/consolidado-y-desconsolidado-de-contenedores-7.jpeg",
          "https://trg.cl/storage/servicios/consolidado-y-desconsolidado-de-contenedores-2.jpeg",
          "https://trg.cl/storage/servicios/consolidado-y-desconsolidado-de-contenedores-4.jpeg",
          "https://trg.cl/storage/servicios/consolidado-y-desconsolidado-de-contenedores-5.jpeg",
        ]}
        benefits={[
          { title: "Optimización", detail: "De tiempos operativos." },
          { title: "Infraestructura", detail: "Y equipos propios." },
          { title: "Coordinación directa", detail: "Con el equipo TRG." },
          { title: "Mayor control", detail: "De la operación." },
        ]}
        otherServices={[
          { label: "Transporte de contenedores", href: "/servicios/transporte-de-contenedores" },
          {
            label: "Transporte de contenedores refrigerados",
            href: "/servicios/transporte-de-contenedores-refrigerados",
          },
          { label: "Almacenaje de carga general", href: "/servicios/almacenaje-de-carga-general" },
        ]}
      />
    </PageShell>
  );
}
