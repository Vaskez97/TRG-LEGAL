import { createFileRoute } from "@tanstack/react-router";
import { useState, type CSSProperties, type FormEvent } from "react";
import { PageShell } from "../components/site/PageShell";
import { PageHero } from "../components/site/PageHero";
import { Reveal, SectionEyebrow, ArrowIcon } from "../components/site/Reveal";
import { EMAIL } from "../components/site/constants";

export const Route = createFileRoute("/trabaja-con-nosotros")({
  component: TrabajaConNosotrosPage,
});

const values = [
  "Respeto por las personas",
  "Responsabilidad en el trabajo",
  "Compromiso con el cliente",
  "Pasión por el propósito",
];

type JobForm = {
  nombre: string;
  correo: string;
  telefono: string;
  ciudad: string;
  especialidad: string;
  presentacion: string;
};

function JobApplicationForm() {
  const [form, setForm] = useState<JobForm>({
    nombre: "",
    correo: "",
    telefono: "",
    ciudad: "",
    especialidad: "",
    presentacion: "",
  });
  const [errors, setErrors] = useState<Partial<JobForm>>({});
  const [success, setSuccess] = useState(false);

  const update = <K extends keyof JobForm>(k: K, v: JobForm[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<JobForm> = {};
    if (!form.nombre.trim()) e.nombre = "Ingresa tu nombre.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) e.correo = "Correo no válido.";
    if (!/^[+\d\s()-]{7,}$/.test(form.telefono)) e.telefono = "Teléfono no válido.";
    if (!form.ciudad.trim()) e.ciudad = "Ingresa tu ciudad.";
    if (!form.especialidad.trim()) e.especialidad = "Cuéntanos tu área de interés.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSuccess(true);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-white border text-[#071B32] placeholder-[#071B32]/40 focus:outline-none focus:ring-2 transition";
  const inputStyle: CSSProperties = { borderColor: "rgba(7,27,50,0.15)" };
  const labelClass = "block text-xs font-bold uppercase text-[#071B32]/60 mb-2";
  const labelStyle: CSSProperties = { letterSpacing: "0.1em" };

  if (success) {
    return (
      <div
        className="rounded-2xl p-6 md:p-8 border"
        style={{ backgroundColor: "#FFFFFF", borderColor: "rgba(243,196,0,0.5)" }}
        role="status"
      >
        <div
          className="text-xs font-extrabold uppercase mb-3"
          style={{ letterSpacing: "0.16em", color: "#0B4F8A" }}
        >
          Postulación enviada
        </div>
        <h3
          className="font-extrabold"
          style={{
            fontSize: "clamp(1.5rem, 2.2vw, 2rem)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: "#071B32",
          }}
        >
          ¡Gracias por postular!
        </h3>
        <p className="mt-3 text-[#071B32]/70 text-sm md:text-base">
          Nuestro equipo de personas revisará tus datos. Si tienes tu CV a mano, adjúntalo
          respondiendo a este correo para agilizar tu postulación.
        </p>
        <a
          href={`mailto:${EMAIL}?subject=${encodeURIComponent(
            `Postulación - ${form.especialidad || "TRG"}`,
          )}&body=${encodeURIComponent(
            `Nombre: ${form.nombre}\nCorreo: ${form.correo}\nTeléfono: ${form.telefono}\nCiudad: ${form.ciudad}\nEspecialidad: ${form.especialidad}\n\n${form.presentacion}`,
          )}`}
          className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full font-extrabold text-sm"
          style={{ backgroundColor: "#F3C400", color: "#071B32" }}
        >
          Adjuntar CV por correo
          <ArrowIcon className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className={labelClass} style={labelStyle}>
            Nombre
          </label>
          <input
            id="nombre"
            className={inputClass}
            style={inputStyle}
            value={form.nombre}
            onChange={(e) => update("nombre", e.target.value)}
            aria-invalid={!!errors.nombre}
          />
          {errors.nombre && (
            <p className="mt-1 text-xs font-semibold" style={{ color: "#0B4F8A" }}>
              {errors.nombre}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="correo" className={labelClass} style={labelStyle}>
            Email
          </label>
          <input
            id="correo"
            type="email"
            className={inputClass}
            style={inputStyle}
            value={form.correo}
            onChange={(e) => update("correo", e.target.value)}
            aria-invalid={!!errors.correo}
          />
          {errors.correo && (
            <p className="mt-1 text-xs font-semibold" style={{ color: "#0B4F8A" }}>
              {errors.correo}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="telefono" className={labelClass} style={labelStyle}>
            Teléfono
          </label>
          <input
            id="telefono"
            type="tel"
            className={inputClass}
            style={inputStyle}
            value={form.telefono}
            onChange={(e) => update("telefono", e.target.value)}
            aria-invalid={!!errors.telefono}
          />
          {errors.telefono && (
            <p className="mt-1 text-xs font-semibold" style={{ color: "#0B4F8A" }}>
              {errors.telefono}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="ciudad" className={labelClass} style={labelStyle}>
            Ciudad
          </label>
          <input
            id="ciudad"
            className={inputClass}
            style={inputStyle}
            value={form.ciudad}
            onChange={(e) => update("ciudad", e.target.value)}
            aria-invalid={!!errors.ciudad}
          />
          {errors.ciudad && (
            <p className="mt-1 text-xs font-semibold" style={{ color: "#0B4F8A" }}>
              {errors.ciudad}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="especialidad" className={labelClass} style={labelStyle}>
          Especialidad / Área de interés
        </label>
        <input
          id="especialidad"
          placeholder="Ej: Conductor tracto camión, operaciones, administración..."
          className={inputClass}
          style={inputStyle}
          value={form.especialidad}
          onChange={(e) => update("especialidad", e.target.value)}
          aria-invalid={!!errors.especialidad}
        />
        {errors.especialidad && (
          <p className="mt-1 text-xs font-semibold" style={{ color: "#0B4F8A" }}>
            {errors.especialidad}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="presentacion" className={labelClass} style={labelStyle}>
          Presentación (opcional)
        </label>
        <textarea
          id="presentacion"
          rows={4}
          className={inputClass}
          style={inputStyle}
          value={form.presentacion}
          onChange={(e) => update("presentacion", e.target.value)}
        />
      </div>

      <p className="text-xs text-[#071B32]/60">
        Al enviar podrás adjuntar tu CV directamente por correo en el paso siguiente.
      </p>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-extrabold text-sm transition-transform hover:scale-[1.02] active:scale-95"
        style={{ backgroundColor: "#F3C400", color: "#071B32" }}
      >
        Enviar postulación
        <ArrowIcon className="w-4 h-4" />
      </button>
    </form>
  );
}

function TrabajaConNosotrosPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Trabaja con nosotros"
        title="En TRG creemos en el valor de las personas."
        description="Buscamos conductores y profesionales comprometidos con la seguridad, el trabajo en equipo y el servicio."
        image="https://trg.cl/storage/slides/nuestro-equipo.jpg"
        imageAlt="Equipo de Transportes TRG"
      />

      <section
        className="w-full py-16 md:py-24 px-5 md:px-8"
        style={{ backgroundColor: "#F5F5F2" }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          <Reveal>
            <SectionEyebrow>Lo que valoramos</SectionEyebrow>
            <h2
              className="mt-4 font-extrabold max-w-md"
              style={{
                fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                color: "#071B32",
              }}
            >
              Una cultura basada en el respeto y la seguridad.
            </h2>
            <ul className="mt-6 space-y-3">
              {values.map((v, i) => (
                <li key={v} className="flex items-center gap-3">
                  <span
                    className="text-lg font-extrabold"
                    style={{ color: "#F3C400", letterSpacing: "-0.02em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-sm md:text-base" style={{ color: "#071B32" }}>
                    {v}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div
              className="rounded-2xl p-6 md:p-8 border"
              style={{ backgroundColor: "#FFFFFF", borderColor: "rgba(7,27,50,0.1)" }}
            >
              <SectionEyebrow>Postula aquí</SectionEyebrow>
              <p className="mt-3 mb-6 text-sm text-[#071B32]/70 font-medium">
                Completa tus datos y nos pondremos en contacto contigo.
              </p>
              <JobApplicationForm />
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
