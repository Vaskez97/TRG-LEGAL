import { createFileRoute } from "@tanstack/react-router";
import { Footer } from "../components/site/Footer";
import { SiteHeader } from "../components/site/Navigation";
export const Route = createFileRoute("/actualidad")({ component: ActualidadPage });
const news = [
  [
    "15 MAYO, 2024",
    "Avanzando en seguridad operacional",
    "Iniciativas y resultados que refuerzan nuestro compromiso con la seguridad.",
    "https://trg.cl/storage/slides/3.jpeg",
  ],
  [
    "30 ABRIL, 2024",
    "Hitos de nuestras empresas",
    "Conoce los principales avances y logros que marcan nuestro crecimiento.",
    "https://trg.cl/storage/slides/1.jpeg",
  ],
  [
    "10 ABRIL, 2024",
    "Buenas prácticas para una industria más profesional",
    "Compartimos recomendaciones y experiencias que generan valor.",
    "https://trg.cl/storage/slides/nuestro-equipo.jpg",
  ],
];
function ActualidadPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <section
          className="group-hero"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(3,42,85,.96), rgba(3,42,85,.5)), url(https://trg.cl/storage/slides/nuestro-equipo.jpg)",
          }}
        >
          <div className="container hero-copy">
            <span className="eyebrow eyebrow-light">04 · ACTUALIDAD</span>
            <h1>Ideas, avances y conversaciones que mueven la industria.</h1>
            <p>
              Conoce el trabajo que hacemos para construir una logística más segura, profesional y
              sostenible.
            </p>
          </div>
        </section>
        <section className="section news-section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">Actualidad Grupo TRG</span>
              <h2>Lo que estamos construyendo.</h2>
            </div>
            <div className="news-grid">
              {news.map(([date, title, text, image]) => (
                <article className="news-card" key={title}>
                  <img src={image} alt="" />
                  <div className="news-body">
                    <span className="eyebrow">{date}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <span className="text-link">Leer más</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
