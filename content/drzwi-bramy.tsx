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
            {"Dostęp."}
            <br />
            {"Pod kontrolą."}
          </h1>
          <div>
            <p data-reveal="">
              {
                "Drzwi, bramy, doki i oddymianie. Rozwiązania dla przejazdów, przeładunku i podziału przestrzeni."
              }
            </p>
            <a className="btn" href="/produkty?obszar=Dostęp">
              {"Przeglądaj ofertę"}
            </a>
          </div>
        </div>
        <figure className="inner-image" data-reveal="">
          <img
            alt="Koncepcyjne bramy przemysłowe — ilustracja AI"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-doors-v1.webp"
          />
        </figure>
      </section>
      <section className="wrap section">
        <div className="section-head">
          <h2 data-reveal="">
            {"Od wejścia"}
            <br />
            {"po przeładunek."}
          </h2>
          <p data-reveal="">
            {
              "Oferta przegród budowlanych obejmuje elementy komunikacji, dostępu i ochrony przeciwpożarowej."
            }
          </p>
        </div>
        <div className="offer-list">
          <a data-reveal="" href="/bramy-doki">
            <h3>{"Bramy i doki"}</h3>
            <p>
              {"Segmentowe i rolowane. Dla produkcji, logistyki i transportu."}
            </p>
            <span aria-hidden="true">{"↗"}</span>
          </a>
          <a data-reveal="" href="/produkty?obszar=Dostęp&szukaj=drzwi">
            <h3>{"Drzwi"}</h3>
            <p>{"Stalowe i wewnętrzne. Dobór według funkcji pomieszczenia."}</p>
            <span aria-hidden="true">{"↗"}</span>
          </a>
          <a data-reveal="" href="/produkty?obszar=Dostęp&szukaj=PCV">
            <h3>{"Bramy szybkobieżne"}</h3>
            <p>{"Rodzina bram PCV w ofercie Winterwarm."}</p>
            <span aria-hidden="true">{"↗"}</span>
          </a>
          <a data-reveal="" href="/produkty?obszar=Dostęp&szukaj=ochrona">
            <h3>{"Ochrona pożarowa"}</h3>
            <p>
              {"Bramy przeciwpożarowe, oddymianie, klapy, wyłazy i świetliki."}
            </p>
            <span aria-hidden="true">{"↗"}</span>
          </a>
        </div>
      </section>
      <section className="wrap section feature-split">
        <img
          alt="Koncepcyjny przekrój budynku przemysłowego — ilustracja AI"
          className=""
          decoding="async"
          loading="eager"
          src="/assets/ai-building-v1.webp"
        />
        <div>
          <h2>
            {"Jedna hala."}
            <br />
            {"Wiele przejść."}
          </h2>
          <p>
            {
              "Wymiary otworu, natężenie ruchu, warunki otoczenia i wymagania ochrony pożarowej są punktem wyjścia do rozmowy."
            }
          </p>
          <a className="btn" href="/projekt?obszar=Dostęp">
            {"Omów dostęp"}
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
      <section className="wrap section faq">
        <div className="section-head">
          <h2 data-reveal="">{"Warto wiedzieć."}</h2>
          <p data-reveal="">{"Odpowiedzi przed pierwszą rozmową."}</p>
        </div>
        <div className="faq-items">
          <details data-reveal="">
            <summary>{"Jak przygotować zapytanie o bramę?"}</summary>
            <p>
              {
                "Podaj wymiary otworu, funkcję przejazdu, częstotliwość użytkowania i warunki montażu. Jeśli znasz wymagania projektowe, dołącz je do wiadomości."
              }
            </p>
          </details>
          <details data-reveal="">
            <summary>{"Czy dostępne są rozwiązania przeciwpożarowe?"}</summary>
            <p>
              {
                "W katalogu Winterwarm znajdują się bramy przeciwpożarowe i rozwiązania oddymiania. Wymagane klasy i zgodność z projektem należy potwierdzić indywidualnie."
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
