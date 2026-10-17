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
            {"Skyline."}
            <br />
            {"Światło w linii."}
          </h1>
          <div>
            <p data-reveal="">
              {
                "Modułowy system liniowych opraw LED do aluminiowych profili WLL600 / WLL610."
              }
            </p>
            <a className="btn" href="/projekt?obszar=LED">
              {"Zapytaj o Skyline"}
              <span aria-hidden="true">{"↗"}</span>
            </a>
          </div>
        </div>
        <figure className="inner-image" data-reveal="">
          <img
            alt="Fotografia instalacji LED z oferty Winterwarm, nie zdjęcie konkretnego modelu Skyline"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/c4fd4094fa3d.webp"
          />
        </figure>
      </section>
      <section className="wrap section">
        <div className="section-head">
          <h2 data-reveal="">{"Montaż w systemie."}</h2>
          <p data-reveal="">
            {
              "Oprawy wpinane w profil aluminiowy bez użycia narzędzi. Zintegrowane okablowanie i połączenia Wago."
            }
          </p>
        </div>
        <div className="feature-notes">
          <article data-reveal="">
            <h3>{"Do 163 lm/W"}</h3>
            <p>
              {
                "Maksymalna efektywność świetlna podana w karcie źródłowej. Wartość zależy od wariantu."
              }
            </p>
          </article>
          <article data-reveal="">
            <h3>{"Trzy klosze"}</h3>
            <p>
              {
                "Opalowy, satynowy oraz 25°. Cztery poziomy mocy według opisu systemu."
              }
            </p>
          </article>
          <article data-reveal="">
            <h3>{"Sterowanie"}</h3>
            <p>
              {
                "Wersje bez sterowania oraz DALI-2. Dostępność potwierdza dział oświetlenia."
              }
            </p>
          </article>
          <article data-reveal="">
            <h3>{"Profile WLL"}</h3>
            <p>
              {
                "System przeznaczony do montażu w profilach aluminiowych WLL600 / WLL610."
              }
            </p>
          </article>
        </div>
      </section>
      <section className="wrap section technical">
        <div className="section-head">
          <h2 data-reveal="">{"Dane systemu."}</h2>
          <p data-reveal="">
            {
              "Parametry z opublikowanej karty Skyline. Nie wszystkie kombinacje muszą występować w każdym wariancie."
            }
          </p>
        </div>
        <dl className="spec-list">
          <div>
            <dt>{"Źródło światła"}</dt>
            <dd>{"LED"}</dd>
          </div>
          <div>
            <dt>{"Temperatura barwowa"}</dt>
            <dd>{"3000 / 4000 / 5000 / 6500 K"}</dd>
          </div>
          <div>
            <dt>{"CRI (Ra)"}</dt>
            <dd>{">80"}</dd>
          </div>
          <div>
            <dt>{"IP / IK"}</dt>
            <dd>{"IP40 / IK07"}</dd>
          </div>
          <div>
            <dt>{"Trwałość średnia"}</dt>
            <dd>{"L80B10 >100 000 h"}</dd>
          </div>
          <div>
            <dt>{"Wymiary (L × W × H)"}</dt>
            <dd>{"1530 × 60 × 43 mm"}</dd>
          </div>
          <div>
            <dt>{"Temperatura pracy"}</dt>
            <dd>{"−20 do +45°C"}</dd>
          </div>
          <div>
            <dt>{"Napięcie"}</dt>
            <dd>{"198–264 V"}</dd>
          </div>
          <div>
            <dt>{"Sterowanie"}</dt>
            <dd>{"Brak / DALI-2"}</dd>
          </div>
          <div>
            <dt>{"Korpus"}</dt>
            <dd>{"Aluminium anodowane / surowe"}</dd>
          </div>
        </dl>
        <p className="source-note">
          <a href="https://winterwarm.pl/skyline/">
            {"Pełna karta źródłowa Skyline ↗"}
          </a>
          {
            ". Zdjęcia na tej stronie przedstawiają przestrzenie i instalacje z oferty, nie wizualizację konkretnego wariantu oprawy."
          }
        </p>
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
            alt="Nagrzewnice w hali przemysłowej"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/afdcf0067ec7.webp"
          />
          <h3>{"HVAC"}</h3>
          <span aria-hidden="true">{"↗"}</span>
        </a>
        <a className="related-row" data-reveal="" href="/drzwi-bramy">
          <img
            alt="Brama przemysłowa z oferty Winterwarm"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/7df5b3d3ea99.webp"
          />
          <h3>{"Drzwi i bramy"}</h3>
          <span aria-hidden="true">{"↗"}</span>
        </a>
        <a className="related-row" data-reveal="" href="/oswietlenie">
          <img
            alt="Oświetlenie hali z oferty Winterwarm"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/c4fd4094fa3d.webp"
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
