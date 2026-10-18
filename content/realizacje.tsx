import {
  Solutions,
  Explorer,
  ObjectPicker,
  Catalog,
  ModelTable,
} from "@/components/offer";
import ProjectForm from "@/components/project-form";
import { isContactConfigured } from "@/lib/contact-config";

export default function Content() {
  return (
    <>
      <section className="wrap catalog-intro">
        <h1 data-reveal="">
          {"Technologia."}
          <br />
          {"W praktyce."}
        </h1>
        <p data-reveal="">
          {
            "Galeria ilustracji wygenerowanych przy użyciu AI. Przedstawione obiekty i instalacje są fikcyjne — nie są realizacjami Winterwarm."
          }
        </p>
      </section>
      <section className="wrap work-gallery">
        <figure data-reveal="">
          <img
            alt="Koncepcyjny magazyn z instalacjami — ilustracja AI"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-warehouse-v1.webp"
          />
          <figcaption>
            <h2>{"Hale i magazyny"}</h2>
            <p>{"Instalacje w przestrzeni składowania."}</p>
            <a className="link" href="/hvac">
              {"Poznaj rozwiązania"}
            </a>
          </figcaption>
        </figure>
        <figure data-reveal="">
          <img
            alt="Koncepcyjny salon samochodowy — ilustracja AI"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-showroom-v1.webp"
          />
          <figcaption>
            <h2>{"Przestrzenie handlowe"}</h2>
            <p>{"Technologia w architekturze wnętrza."}</p>
            <a className="link" href="/oswietlenie">
              {"Poznaj rozwiązania"}
            </a>
          </figcaption>
        </figure>
        <figure data-reveal="">
          <img
            alt="Koncepcyjna hala z ogrzewaniem — ilustracja AI"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-workshop-v1.webp"
          />
          <figcaption>
            <h2>{"Produkcja"}</h2>
            <p>{"Urządzenia w przestrzeni pracy."}</p>
            <a className="link" href="/hvac">
              {"Poznaj rozwiązania"}
            </a>
          </figcaption>
        </figure>
        <figure data-reveal="">
          <img
            alt="Koncepcyjne bramy przemysłowe — ilustracja AI"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-doors-v1.webp"
          />
          <figcaption>
            <h2>{"Strefy dostępu"}</h2>
            <p>{"Wejścia i przejazdy w obiekcie."}</p>
            <a className="link" href="/drzwi-bramy">
              {"Poznaj rozwiązania"}
            </a>
          </figcaption>
        </figure>
      </section>
      <section className="wrap closing section">
        <h2 data-reveal="">
          {"Twój obiekt."}
          <br />
          {"Porozmawiajmy."}
        </h2>
        <div data-reveal="">
          <p>
            {
              "Wybierz obszar, opisz inwestycję i przygotuj wiadomość do właściwego zespołu."
            }
          </p>
          <a className="btn" href="/projekt">
            {"Zacznij projekt"}
            <span aria-hidden="true">{"↗"}</span>
          </a>
        </div>
      </section>
    </>
  );
}
