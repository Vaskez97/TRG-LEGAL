import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../../components/site/PageShell";
import { ServiceTemplate } from "../../components/site/ServiceTemplate";

export const Route = createFileRoute("/servicios/almacenaje-de-carga-general")({
  component: Page,
});

function Page() {
  return (
    <PageShell>
      <ServiceTemplate
        title="Almacenaje de carga general"
        intro={[
          "Disponemos de bodegas propias para el almacenaje de carga general, ubicadas estratégicamente cerca de los puertos de Valparaíso y San Antonio.",
          "Nuestros espacios están diseñados para brindar seguridad, orden y control, permitiendo a nuestros clientes contar con soluciones de almacenaje confiables y flexibles.",
        ]}
        heroImage="https://trg.cl/storage/servicios/almacenaje-de-carga-general-1.jpeg"
        gallery={[
          "https://trg.cl/storage/servicios/almacenaje-de-carga-general-2.jpeg",
          "https://trg.cl/storage/servicios/almacenaje-de-carga-general-4.jpeg",
          "https://trg.cl/storage/servicios/almacenaje-de-carga-general-5.jpeg",
          "https://trg.cl/storage/slides/2.jpeg",
        ]}
        benefits={[
          { title: "Infraestructura", detail: "Propia." },
          { title: "Seguridad 24/7", detail: "Guardias y CCTV." },
          { title: "Ubicación", detail: "Estratégica." },
          { title: "Control", detail: "Y gestión de stock." },
        ]}
        otherServices={[
          { label: "Transporte de contenedores", href: "/servicios/transporte-de-contenedores" },
          {
            label: "Transporte de contenedores refrigerados",
            href: "/servicios/transporte-de-contenedores-refrigerados",
          },
          {
            label: "Consolidado y desconsolidado de contenedores",
            href: "/servicios/consolidado-y-desconsolidado-de-contenedores",
          },
        ]}
      />
    </PageShell>
  );
}
