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
          <h1 data-reveal="">{"Bramy i doki."}</h1>
          <div>
            <p data-reveal="">
              {
                "Bramy segmentowe, rolowane i doki dla obiektów produkcyjnych, logistycznych oraz transportowych."
              }
            </p>
            <a className="btn" href="/projekt?obszar=Dostęp">
              {"Zapytaj o bramy"}
              <span aria-hidden="true">{"↗"}</span>
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
            {"Ruch towarów."}
            <br />
            {"Sprawny dostęp."}
          </h2>
          <p data-reveal="">
            {
              "Oferta obejmuje bramy Wiśniowski i Krispol oraz doki Wiśniowski. Konkretny wariant dobierany jest do inwestycji."
            }
          </p>
        </div>
        <div className="offer-list">
          <a href="https://winterwarm.pl/przegrody-drzwi-bramy-doki/bramy-i-doki/bramy-segmentowe-i-rolowane-wisniowski/">
            <h3>{"Bramy Wiśniowski"}</h3>
            <p>{"Segmentowe i rolowane. Katalog źródłowy."}</p>
            <span aria-hidden="true">{"↗"}</span>
          </a>
          <a href="https://winterwarm.pl/przegrody-drzwi-bramy-doki/bramy-i-doki/bramy-segmentowe-i-rolowane-krispol/">
            <h3>{"Bramy Krispol"}</h3>
            <p>{"Segmentowe i rolowane. Katalog źródłowy."}</p>
            <span aria-hidden="true">{"↗"}</span>
          </a>
          <a href="https://winterwarm.pl/przegrody-drzwi-bramy-doki/bramy-i-doki/doki-wisniowski/">
            <h3>{"Doki Wiśniowski"}</h3>
            <p>{"Rozwiązania strefy przeładunku. Katalog źródłowy."}</p>
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
            {"Przygotuj"}
            <br />
            {"warunki doboru."}
          </h2>
          <ul className="plain-list">
            <li>{"Wymiary otworu i miejsce montażu."}</li>
            <li>{"Rodzaj ruchu i częstotliwość użytkowania."}</li>
            <li>{"Wymagania projektu, automatyki i bezpieczeństwa."}</li>
            <li>{"Warunki otoczenia i sposób przeładunku."}</li>
          </ul>
          <a className="btn" href="/projekt?obszar=Dostęp">
            {"Opisz swój obiekt"}
            <span aria-hidden="true">{"↗"}</span>
          </a>
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
