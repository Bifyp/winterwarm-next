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
            {"Ludzie za"}
            <br />
            {"technologią."}
          </h1>
          <div>
            <p data-reveal="">
              {
                "Zespół Winterwarm Polska doradza, projektuje, montuje i serwisuje rozwiązania dla przemysłu, logistyki i budownictwa."
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
            alt="Koncepcyjne biuro techniczne — ilustracja AI, nie siedziba firmy"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-office-v1.webp"
          />
        </figure>
      </section>
      <section className="wrap section company-story">
        <h2 data-reveal="">
          {"Wiedza."}
          <br />
          {"Praktyka."}
        </h2>
        <div>
          <p data-reveal="">
            {
              "Winterwarm Polska łączy zaplecze holenderskiej marki Winterwarm z wiedzą lokalnego zespołu. Ofertę HVAC uzupełniają przegrody budowlane, drzwi, bramy, doki i oświetlenie LED."
            }
          </p>
          <p data-reveal="">
            {
              "Wspieramy inwestorów, projektantów, wykonawców i zarządców. Punktem wyjścia jest analiza potrzeb obiektu, a zakres współpracy może obejmować doradztwo, dobór, dostawę, montaż i opiekę serwisową."
            }
          </p>
          <p data-reveal="">
            {
              "Biuro znajduje się w Jasinie koło Swarzędza. Magazyn działa w Bugaju."
            }
          </p>
          <a className="link" href="/kontakt">
            {"Poznaj kontakty i lokalizacje"}
          </a>
        </div>
      </section>
      <section className="wrap section">
        <div className="company-numbers">
          <div data-reveal="">
            <strong>{"25"}</strong>
            <p>{"lat doświadczenia w Polsce"}</p>
          </div>
          <div data-reveal="">
            <strong>{"15 000+"}</strong>
            <p>{"realizacji"}</p>
          </div>
          <div data-reveal="">
            <strong>{"100+"}</strong>
            <p>{"pracowników"}</p>
          </div>
          <div data-reveal="">
            <strong>{"40+"}</strong>
            <p>{"samochodów technicznych"}</p>
          </div>
        </div>
        <p className="source-note">
          {
            "Liczby prezentowane na stronie źródłowej Winterwarm. Nie są automatycznie aktualizowane."
          }
        </p>
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
