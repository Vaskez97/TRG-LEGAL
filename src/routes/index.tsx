import { createFileRoute } from "@tanstack/react-router";
import { TrgLegalPage } from "./trg-legal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TRG Legal | Asesoría laboral especializada" },
      {
        name: "description",
        content:
          "Asesoría laboral especializada para empresas de transporte, con soluciones jurídicas estratégicas, claras y cercanas.",
      },
    ],
  }),
  component: TrgLegalPage,
});
