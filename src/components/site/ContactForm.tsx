import { useMemo, useState, type CSSProperties, type FormEvent } from "react";
import { ArrowIcon } from "./Reveal";
import { EMAIL } from "./constants";

type FormState = {
  nombre: string;
  empresa: string;
  correo: string;
  telefono: string;
  servicio: string;
  mensaje: string;
};

const SERVICE_OPTIONS = [
  "Transporte de contenedores",
  "Transporte refrigerado",
  "Almacenaje de carga",
  "Conexión de contenedores",
  "Consolidado y desconsolidado",
  "Otro",
];

export function ContactForm({ defaultServicio = "" }: { defaultServicio?: string }) {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    empresa: "",
    correo: "",
    telefono: "",
    servicio: defaultServicio,
    mensaje: "",
  });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [success, setSuccess] = useState(false);

  const update = <K extends keyof FormState>(k: K, v: FormState[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<FormState> = {};
    if (!form.nombre.trim()) e.nombre = "Ingresa tu nombre.";
    if (!form.empresa.trim()) e.empresa = "Ingresa tu empresa.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) e.correo = "Correo no válido.";
    if (!/^[+\d\s()-]{7,}$/.test(form.telefono)) e.telefono = "Teléfono no válido.";
    if (!form.servicio) e.servicio = "Selecciona un servicio.";
    if (form.mensaje.trim().length < 10)
      e.mensaje = "Cuéntanos brevemente qué necesitas (mín. 10 caracteres).";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSuccess(true);
  };

  const mailtoFallback = useMemo(() => {
    const subject = encodeURIComponent(`Solicitud de contacto - ${form.servicio || "TRG"}`);
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmpresa: ${form.empresa}\nCorreo: ${form.correo}\nTeléfono: ${form.telefono}\nServicio: ${form.servicio}\n\n${form.mensaje}`,
    );
    return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }, [form]);

  const inputClass =
    "w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder-white/40 focus:outline-none focus:ring-2 transition";
  const inputStyle: CSSProperties = { borderColor: "rgba(255,255,255,0.15)" };

  if (success) {
    return (
      <div
        className="rounded-2xl p-6 md:p-8 border text-white"
        style={{ backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(243,196,0,0.4)" }}
        role="status"
      >
        <div
          className="text-xs font-extrabold uppercase mb-3"
          style={{ letterSpacing: "0.16em", color: "#F3C400" }}
        >
          Solicitud lista
        </div>
        <h3
          className="font-extrabold"
          style={{
            fontSize: "clamp(1.6rem, 2.4vw, 2.2rem)",
            lineHeight: 1,
            letterSpacing: "-0.04em",
          }}
        >
          Solicitud preparada.
        </h3>
        <p className="mt-3 text-white/75 text-sm md:text-base">
          Un ejecutivo de TRG podrá contactarte con estos antecedentes. Si quieres acelerarlo,
          envíanos los datos por correo.
        </p>
        <a
          href={mailtoFallback}
          className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full font-extrabold text-sm"
          style={{ backgroundColor: "#F3C400", color: "#071B32" }}
        >
          Enviar por correo
          <ArrowIcon className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="nombre"
            className="block text-xs font-bold uppercase text-white/60 mb-2"
            style={{ letterSpacing: "0.1em" }}
          >
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
            <p className="mt-1 text-xs font-semibold" style={{ color: "#F3C400" }}>
              {errors.nombre}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="empresa"
            className="block text-xs font-bold uppercase text-white/60 mb-2"
            style={{ letterSpacing: "0.1em" }}
          >
            Empresa
          </label>
          <input
            id="empresa"
            className={inputClass}
            style={inputStyle}
            value={form.empresa}
            onChange={(e) => update("empresa", e.target.value)}
            aria-invalid={!!errors.empresa}
          />
          {errors.empresa && (
            <p className="mt-1 text-xs font-semibold" style={{ color: "#F3C400" }}>
              {errors.empresa}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="correo"
            className="block text-xs font-bold uppercase text-white/60 mb-2"
            style={{ letterSpacing: "0.1em" }}
          >
            Correo
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
            <p className="mt-1 text-xs font-semibold" style={{ color: "#F3C400" }}>
              {errors.correo}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="telefono"
            className="block text-xs font-bold uppercase text-white/60 mb-2"
            style={{ letterSpacing: "0.1em" }}
          >
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
            <p className="mt-1 text-xs font-semibold" style={{ color: "#F3C400" }}>
              {errors.telefono}
            </p>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor="servicio"
          className="block text-xs font-bold uppercase text-white/60 mb-2"
          style={{ letterSpacing: "0.1em" }}
        >
          Tipo de servicio
        </label>
        <select
          id="servicio"
          className={inputClass}
          style={inputStyle}
          value={form.servicio}
          onChange={(e) => update("servicio", e.target.value)}
          aria-invalid={!!errors.servicio}
        >
          <option value="" style={{ color: "#071B32" }}>
            Selecciona una opción
          </option>
          {SERVICE_OPTIONS.map((s) => (
            <option key={s} value={s} style={{ color: "#071B32" }}>
              {s}
            </option>
          ))}
        </select>
        {errors.servicio && (
          <p className="mt-1 text-xs font-semibold" style={{ color: "#F3C400" }}>
            {errors.servicio}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="mensaje"
          className="block text-xs font-bold uppercase text-white/60 mb-2"
          style={{ letterSpacing: "0.1em" }}
        >
          Mensaje
        </label>
        <textarea
          id="mensaje"
          rows={4}
          className={inputClass}
          style={inputStyle}
          value={form.mensaje}
          onChange={(e) => update("mensaje", e.target.value)}
          aria-invalid={!!errors.mensaje}
        />
        {errors.mensaje && (
          <p className="mt-1 text-xs font-semibold" style={{ color: "#F3C400" }}>
            {errors.mensaje}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full font-extrabold text-sm transition-transform hover:scale-[1.02] active:scale-95"
        style={{ backgroundColor: "#F3C400", color: "#071B32" }}
      >
        Solicitar contacto
        <ArrowIcon className="w-4 h-4" />
      </button>
    </form>
  );
}
