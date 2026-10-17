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
      <section className="inner-hero wrap product-hero">
        <div className="inner-title">
          <h1 data-reveal="">{"Winterwarm XR+"}</h1>
          <div>
            <p data-reveal="">
              {
                "Gazowa nagrzewnica niekondensacyjna. Dla budynków przemysłowych, magazynowych, sportowych i sakralnych."
              }
            </p>
            <a className="btn" href="/projekt?obszar=HVAC">
              {"Zapytaj o XR+"}
              <span aria-hidden="true">{"↗"}</span>
            </a>
          </div>
        </div>
        <figure className="inner-image" data-reveal="">
          <img
            alt="Oryginalne zdjęcie nagrzewnicy Winterwarm XR+"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/e5130665016f.webp"
          />
        </figure>
      </section>
      <section className="wrap section specs-lead">
        <div className="section-head">
          <h2 data-reveal="">
            {"Kompaktowy."}
            <br />
            {"Modulowany."}
          </h2>
          <p data-reveal="">
            {
              "Seria XR+ łączy modulowany palnik i wentylator z montażem z nawiewem poziomym lub pionowym."
            }
          </p>
        </div>
        <div className="feature-notes">
          <article data-reveal="">
            <h3>{"Bez skroplin"}</h3>
            <p>
              {
                "Urządzenie niekondensacyjne nie wymaga odprowadzenia skroplin z urządzenia. Warunki prowadzenia przewodów należy sprawdzić w dokumentacji."
              }
            </p>
          </article>
          <article data-reveal="">
            <h3>{"Aktywna destratyfikacja"}</h3>
            <p>
              {
                "Funkcja destratyfikacji jest częścią cech serii podanych przez Winterwarm."
              }
            </p>
          </article>
          <article data-reveal="">
            <h3>{"Montaż na konsoli"}</h3>
            <p>
              {
                "Konsola umożliwia montaż poziomy lub pionowy. Sposób zawieszenia dobiera się do warunków obiektu."
              }
            </p>
          </article>
          <article data-reveal="">
            <h3>{"Sterowanie grupą"}</h3>
            <p>
              {
                "Według karty produktu jeden sterownik może obsługiwać do ośmiu nagrzewnic."
              }
            </p>
          </article>
        </div>
      </section>
      <ModelTable />
      <section className="wrap section wide-scene">
        <img
          alt="Nagrzewnice zamontowane w hali"
          className=""
          decoding="async"
          loading="eager"
          src="/assets/afdcf0067ec7.webp"
        />
        <div>
          <h2>
            {"Ciepło"}
            <br />
            {"w hali."}
          </h2>
          <p>
            {
              "Nie dobieramy nagrzewnicy wyłącznie z tabeli. Ważne są straty ciepła, geometria hali, sposób pracy i wymagane warunki."
            }
          </p>
          <a className="btn" href="/projekt?obszar=HVAC">
            {"Przygotuj zapytanie"}
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
    </>
  );
}
