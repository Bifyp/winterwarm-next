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
            {"Światło."}
            <br />
            {"Do pracy."}
          </h1>
          <div>
            <p data-reveal="">
              {
                "Systemy oświetlenia LED dla przestrzeni przemysłowych i komercyjnych. Poznaj rodziny opraw Winterwarm."
              }
            </p>
            <a className="btn" href="/produkty?obszar=LED">
              {"Przeglądaj LED"}
            </a>
          </div>
        </div>
        <figure className="inner-image" data-reveal="">
          <img
            alt="Koncepcyjna hala z oświetleniem LED — ilustracja AI, nie zdjęcie modelu Skyline"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-lighting-v1.webp"
          />
        </figure>
      </section>
      <section className="wrap section skyline-feature">
        <div>
          <div className="section-head">
            <h2 data-reveal="">{"System Skyline."}</h2>
            <p data-reveal="">
              {
                "Modułowe oprawy liniowe, wpinane w aluminiowe profile WLL600 / WLL610."
              }
            </p>
          </div>
          <a className="btn light" href="/skyline">
            {"Poznaj Skyline"}
          </a>
        </div>
        <div className="big-fact" data-reveal="">
          <strong>{"163"}</strong>
          <span>{"lm/W, maksymalna efektywność podana w karcie Skyline"}</span>
        </div>
      </section>
      <section className="wrap section">
        <div className="section-head">
          <h2 data-reveal="">{"Rodziny opraw."}</h2>
          <p data-reveal="">
            {
              "Porównaj zakres oferty. Szczegółowe warianty i warunki doboru potwierdzisz z działem LED."
            }
          </p>
        </div>
        <div className="names-list">
          <a href="/skyline">
            <h3>{"Skyline"}</h3>
            <span>{"Dane i cechy systemu"}</span>
          </a>
          <a href="https://winterwarm.pl/nextgen/">
            <h3>{"NEXTGEN"}</h3>
            <span>{"Katalog źródłowy ↗"}</span>
          </a>
          <a href="https://winterwarm.pl/datalux-lt/">
            <h3>{"DATALUX.LT"}</h3>
            <span>{"Katalog źródłowy ↗"}</span>
          </a>
          <a href="https://winterwarm.pl/datalux-ac/">
            <h3>{"DATALUX.AC"}</h3>
            <span>{"Katalog źródłowy ↗"}</span>
          </a>
          <a href="https://winterwarm.pl/prefab/">
            <h3>{"Prefab"}</h3>
            <span>{"Katalog źródłowy ↗"}</span>
          </a>
          <a href="https://winterwarm.pl/bandraster/">
            <h3>{"Bandraster"}</h3>
            <span>{"Katalog źródłowy ↗"}</span>
          </a>
          <a href="https://winterwarm.pl/profil-skyline/">
            <h3>{"Profil Skyline"}</h3>
            <span>{"Katalog źródłowy ↗"}</span>
          </a>
        </div>
      </section>
      <section className="wrap section wide-scene">
        <img
          alt="Koncepcyjny salon samochodowy — ilustracja AI"
          className=""
          decoding="async"
          loading="eager"
          src="/assets/ai-showroom-v1.webp"
        />
        <div>
          <h2>
            {"Światło"}
            <br />
            {"w architekturze."}
          </h2>
          <p>
            {
              "Funkcja pomieszczenia, wysokość montażu i charakter pracy pomagają określić wymagania wobec oświetlenia."
            }
          </p>
          <a className="btn" href="/projekt?obszar=LED">
            {"Porozmawiaj o LED"}
            <span aria-hidden="true">{"↗"}</span>
          </a>
        </div>
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
