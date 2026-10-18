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
      <section className="inner-hero wrap">
        <div className="inner-title">
          <h1 data-reveal="">
            {"Budynek."}
            <br />
            {"Rozwiązania."}
          </h1>
          <div>
            <p data-reveal="">
              {
                "Ogrzewanie, powietrze, dostęp i światło. Wybierz obszar, od którego chcesz zacząć."
              }
            </p>
            <a className="btn" href="/projekt">
              {"Zacznij projekt"}
              <span aria-hidden="true">{"↗"}</span>
            </a>
          </div>
        </div>
        <figure className="inner-image" data-reveal="">
          <img
            alt="Koncepcyjny przekrój budynku przemysłowego — ilustracja AI"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-building-v1.webp"
          />
        </figure>
      </section>
      <Solutions />
      <section className="wrap section related">
        <div className="section-head">
          <h2 data-reveal="">
            {"Trzy obszary."}
            <br />
            {"Jeden budynek."}
          </h2>
          <p data-reveal="">
            {"Przejdź od pojedynczego urządzenia do potrzeb całego obiektu."}
          </p>
        </div>
        <a className="related-row" data-reveal="" href="/hvac">
          <img
            alt="Koncepcyjna hala z ogrzewaniem — ilustracja AI"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-workshop-v1.webp"
          />
          <h3>{"HVAC"}</h3>
          <span aria-hidden="true">{"↗"}</span>
        </a>
        <a className="related-row" data-reveal="" href="/drzwi-bramy">
          <img
            alt="Koncepcyjne bramy przemysłowe — ilustracja AI"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-doors-v1.webp"
          />
          <h3>{"Drzwi i bramy"}</h3>
          <span aria-hidden="true">{"↗"}</span>
        </a>
        <a className="related-row" data-reveal="" href="/oswietlenie">
          <img
            alt="Koncepcyjna hala z oświetleniem LED — ilustracja AI, nie zdjęcie modelu Skyline"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-lighting-v1.webp"
          />
          <h3>{"Oświetlenie LED"}</h3>
          <span aria-hidden="true">{"↗"}</span>
        </a>
      </section>
      <section className="wrap section process">
        <div className="section-head">
          <h2 data-reveal="">
            {"Od rozmowy"}
            <br />
            {"do działania."}
          </h2>
          <p data-reveal="">
            {
              "Punkt wyjścia to Twój obiekt. Dobór urządzeń wymaga analizy warunków i potrzeb, a nie samej powierzchni."
            }
          </p>
        </div>
        <div className="process-flow">
          <article data-reveal="">
            <h3>{"Poznajemy obiekt"}</h3>
            <p>
              {
                "Nowa inwestycja czy modernizacja? Opowiedz o funkcji budynku, istniejących instalacjach i warunkach pracy."
              }
            </p>
          </article>
          <article data-reveal="">
            <h3>{"Dobieramy rozwiązanie"}</h3>
            <p>
              {
                "Zespół analizuje potrzeby i zakres prac. Ustalamy urządzenia, układ instalacji oraz kolejne kroki."
              }
            </p>
          </article>
          <article data-reveal="">
            <h3>{"Wspieramy wdrożenie"}</h3>
            <p>
              {
                "Dostawa, montaż i serwis. Zakres oraz warunki współpracy potwierdzamy indywidualnie w ofercie."
              }
            </p>
          </article>
        </div>
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
