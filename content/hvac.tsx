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
            {"Dobry klimat"}
            <br />
            {"do pracy."}
          </h1>
          <div>
            <p data-reveal="">
              {
                "Nagrzewnice, wentylacja i chłodzenie dla hal, magazynów, warsztatów i obiektów usługowych."
              }
            </p>
            <a className="btn" href="/produkty?obszar=HVAC">
              {"Przeglądaj HVAC"}
            </a>
          </div>
        </div>
        <figure className="inner-image" data-reveal="">
          <img
            alt="Koncepcyjna hala z ogrzewaniem — ilustracja AI"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-workshop-v1.webp"
          />
        </figure>
      </section>
      <section className="wrap section feature-split">
        <div>
          <img
            alt="Koncepcyjna nagrzewnica bez marki — ilustracja AI, nie zdjęcie modelu XR+"
            className="object-photo"
            decoding="async"
            loading="eager"
            src="/assets/ai-heater-v1.webp"
          />
        </div>
        <div>
          <div className="section-head">
            <h2 data-reveal="">{"Winterwarm XR+"}</h2>
            <p data-reveal="">
              {
                "Niekondensacyjna nagrzewnica gazowa z modulowanym palnikiem i wentylatorem. Montaż z nawiewem poziomym lub pionowym."
              }
            </p>
          </div>
          <a className="btn light" href="/xr-plus">
            {"Zobacz modele i parametry"}
          </a>
        </div>
      </section>
      <section className="wrap section">
        <div className="section-head">
          <h2 data-reveal="">{"Ciepło i powietrze."}</h2>
          <p data-reveal="">
            {
              "Dobór technologii zaczyna się od sposobu użytkowania przestrzeni i dostępnych instalacji."
            }
          </p>
        </div>
        <div className="offer-list">
          <a data-reveal="" href="/produkty?obszar=HVAC&szukaj=nagrzewnice">
            <h3>{"Ogrzewanie nadmuchowe"}</h3>
            <p>{"XR+, HR, EH, QwikShift i WWH."}</p>
            <span aria-hidden="true">{"↗"}</span>
          </a>
          <a data-reveal="" href="/produkty?obszar=HVAC&szukaj=promienniki">
            <h3>{"Ogrzewanie promiennikowe"}</h3>
            <p>{"Promienniki ceramiczne i rurowe."}</p>
            <span aria-hidden="true">{"↗"}</span>
          </a>
          <a data-reveal="" href="/produkty?obszar=HVAC&szukaj=powietrze">
            <h3>{"Wentylacja i chłodzenie"}</h3>
            <p>{"Urządzenia do wymiany i chłodzenia powietrza."}</p>
            <span aria-hidden="true">{"↗"}</span>
          </a>
          <a data-reveal="" href="/produkty?obszar=HVAC&szukaj=wspomagające">
            <h3>{"Wsparcie instalacji"}</h3>
            <p>{"Destratyfikatory, wentylatory i regulacja."}</p>
            <span aria-hidden="true">{"↗"}</span>
          </a>
        </div>
      </section>
      <section className="wrap section wide-scene">
        <img
          alt="Koncepcyjny magazyn z instalacjami — ilustracja AI"
          className=""
          decoding="async"
          loading="eager"
          src="/assets/ai-warehouse-v1.webp"
        />
        <div>
          <h2>
            {"Technologia"}
            <br />
            {"w przestrzeni."}
          </h2>
          <p>
            {
              "Magazyn i hala produkcyjna mają różne wymagania. Zobacz, jakie informacje pomogą dobrać rozwiązanie do Twojego obiektu."
            }
          </p>
          <a className="link" href="/obiekty">
            {"Wybierz typ obiektu"}
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
      <section className="wrap section faq">
        <div className="section-head">
          <h2 data-reveal="">{"Warto wiedzieć."}</h2>
          <p data-reveal="">{"Odpowiedzi przed pierwszą rozmową."}</p>
        </div>
        <div className="faq-items">
          <details data-reveal="">
            <summary>{"Czy powierzchnia wystarczy do doboru?"}</summary>
            <p>
              {
                "Nie. Potrzebne są m.in. wysokość, sposób użytkowania, wymagane warunki oraz informacje o istniejących instalacjach. Brief pomaga przygotować pierwszą rozmowę, ale nie zastępuje analizy technicznej."
              }
            </p>
          </details>
          <details data-reveal="">
            <summary>{"Czy wspieracie modernizacje?"}</summary>
            <p>
              {
                "Tak. Winterwarm opisuje swoją ofertę zarówno dla nowych inwestycji, jak i modernizacji oraz adaptacji przestrzeni."
              }
            </p>
          </details>
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
