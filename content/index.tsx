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
      {"\n"}
      <section aria-labelledby="hero-title" className="hero">
        <div className="hero-media">
          <img
            alt="Koncepcyjna wizualizacja hali przemysłowej z instalacjami i oświetleniem"
            height="672"
            src="/assets/35db6f541289.webp"
            width="1584"
          />
        </div>
        <div aria-hidden="true" className="hero-shade"></div>
        <div className="hero-content wrap">
          <div>
            <h1 id="hero-title">
              <span className="hero-title-line">
                <span>{"Technologia,"}</span>
              </span>
              <span className="hero-title-line">
                <span>{"która pracuje."}</span>
              </span>
            </h1>
            <p className="hero-description">
              {"Więcej niż urządzenia."}
              <br />
              {"Komfort, bezpieczeństwo i światło dla Twojej inwestycji."}
            </p>
          </div>
          <div className="hero-right">
            <p className="hero-lead">
              {
                "Łączymy HVAC, drzwi i bramy oraz oświetlenie LED w rozwiązania dopasowane do budynku."
              }
            </p>
            <a className="btn" href="/projekt">
              {"Zaplanuj z nami "}
              <span aria-hidden="true" className="arrow">
                {"↗"}
              </span>
            </a>
          </div>
        </div>
        <div className="hero-bottom wrap">
          <a className="scroll" href="#rozwiazania">
            <span aria-hidden="true">{"↓"}</span>
            {"Odkryj możliwości"}
          </a>
          <p>
            {"Od doradztwa i projektu"}
            <br />
            {"po montaż i serwis."}
          </p>
          <p className="caption-ai">
            {"Wizualizacja koncepcyjna"}
            <br />
            {"Ilustracja wygenerowana z AI"}
          </p>
        </div>
      </section>
      {"\n"}
      <section className="statement wrap" id="rozwiazania">
        <h2 data-reveal="">
          {"Przestrzeń."}
          <br />
          {"Która działa."}
        </h2>
        <div data-reveal="">
          <p>
            {
              "Każda przestrzeń ma inne zadania. My patrzymy na cały obiekt — od temperatury i jakości powietrza, przez strefy dostępu, po warunki pracy."
            }
          </p>
          <a className="link" href="#obiekt">
            {"Zobacz rozwiązania w budynku "}
            <span aria-hidden="true" className="arrow">
              {"↗"}
            </span>
          </a>
        </div>
      </section>
      {"\n"}
      <Solutions />
      {"\n"}
      <section aria-labelledby="product-title" className="product wrap">
        <div className="product-grid">
          <div className="product-copy" data-reveal="">
            <h2 id="product-title">
              {"Ciepło, które"}
              <br />
              {"pracuje."}
            </h2>
            <p className="product-name">{"Winterwarm XR+"}</p>
            <p>
              {
                "Gazowa nagrzewnica powietrza do przestrzeni przemysłowych. Poznaj urządzenie i porozmawiajmy o jego zastosowaniu w Twoim obiekcie."
              }
            </p>
            <a className="btn light" href="/xr-plus">
              {"Poznaj Winterwarm XR+"}
            </a>
            <div className="product-facts">
              <p>
                <strong>{"Hale i magazyny"}</strong>
                {"Zastosowania przemysłowe"}
              </p>
              <p>
                <strong>{"Dobór do obiektu"}</strong>
                {"Wsparcie zespołu HVAC"}
              </p>
            </div>
          </div>
          <div className="product-image" data-reveal="">
            <img
              alt="Nagrzewnica gazowa Winterwarm XR+ — oryginalne zdjęcie produktu"
              height="1000"
              src="/assets/e5130665016f.webp"
              width="1000"
            />
          </div>
        </div>
        <div className="product-bottom">
          <p>
            {"Nie zaczynaj od modelu."}
            <br />
            {"Zacznij od potrzeby."}
          </p>
          <a
            className="link"
            href="/projekt"
            style={{
              border: "0",
              background: "none",
              color: "inherit",
              padding: "0",
              cursor: "pointer",
            }}
          >
            {"Opowiedz nam o inwestycji "}
            <span aria-hidden="true" className="arrow">
              {"↗"}
            </span>
          </a>
        </div>
      </section>
      {"\n"}
      <Explorer />
      {"\n"}
      <section aria-labelledby="gallery-title" className="gallery wrap">
        <div className="section-head">
          <h2 data-reveal="" id="gallery-title">
            {"Technologia."}
            <br />
            {"W praktyce."}
          </h2>
          <p data-reveal="">
            {
              "Nie tylko na rysunku. Zobacz instalacje i przestrzenie prezentowane przez Winterwarm."
            }
          </p>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-item" data-reveal="">
            <div className="image-box">
              <img
                alt="Instalacja nagrzewnic w magazynie — fotografia ze strony Winterwarm"
                height="900"
                src="/assets/e80927706bd0.webp"
                width="1348"
              />
            </div>
            <figcaption>
              {"Hale i magazyny "}
              <span>{"Instalacje w przestrzeni przemysłowej"}</span>
            </figcaption>
          </figure>
          <figure className="gallery-item" data-reveal="">
            <div className="image-box">
              <img
                alt="Wnętrze salonu samochodowego z instalacją pod sufitem — fotografia ze strony Winterwarm"
                height="755"
                src="/assets/68f44533affc.webp"
                width="1132"
              />
            </div>
            <figcaption>
              {"Przestrzenie handlowe "}
              <span>{"Technologia w architekturze wnętrza"}</span>
            </figcaption>
          </figure>
        </div>
        <div className="gallery-bottom">
          <p>
            {
              "Rozwiązania do obiektów przemysłowych, logistycznych, handlowych i usługowych."
            }
          </p>
          <a className="link" href="/obiekty">
            {"Rozwiązania dla hal "}
            <span aria-hidden="true" className="arrow">
              {"↗"}
            </span>
          </a>
        </div>
        <a className="link gallery-more" href="/realizacje">
          {"Zobacz przestrzenie i instalacje ↗"}
        </a>
      </section>
      {"\n"}
      <section
        aria-labelledby="people-title"
        className="people wrap"
        id="zespol"
      >
        <div className="people-top">
          <h2 data-reveal="" id="people-title">
            {"Ludzie za"}
            <br />
            {"technologią."}
          </h2>
          <div data-reveal="">
            <p>
              {
                "Za każdym rozwiązaniem stoi zespół. W Winterwarm Polska łączymy wiedzę techniczną z praktyką: doradzamy, projektujemy, montujemy i serwisujemy."
              }
            </p>
            <a className="link" href="/o-nas">
              {"Poznaj nas bliżej "}
              <span aria-hidden="true" className="arrow">
                {"↗"}
              </span>
            </a>
          </div>
        </div>
        <figure className="people-image photo-in" data-reveal="">
          <img
            alt="Zespół Winterwarm Polska — zdjęcie ze strony firmy"
            height="929"
            src="/assets/eb9a5f530336.webp"
            width="1536"
          />
          <figcaption>{"Zespół Winterwarm Polska"}</figcaption>
        </figure>
        <div className="stats">
          <div className="stat" data-reveal="">
            <strong>{"15 000+"}</strong>
            <span>{"realizacji"}</span>
          </div>
          <div className="stat" data-reveal="">
            <strong>{"25"}</strong>
            <span>{"lat doświadczenia w Polsce"}</span>
          </div>
          <div className="stat" data-reveal="">
            <strong>{"100+"}</strong>
            <span>{"pracowników"}</span>
          </div>
          <div className="stat" data-reveal="">
            <strong>{"40+"}</strong>
            <span>{"samochodów technicznych"}</span>
          </div>
        </div>
        <div className="partners">
          <p>
            {"Partnerzy prezentowani"}
            <br />
            {"na stronie Winterwarm"}
          </p>
          <div className="partner-names">
            <span>{"Space-Ray"}</span>
            <span>{"BELIMO"}</span>
            <span>{"WIŚNIOWSKI"}</span>
            <span>{"MERCOR"}</span>
          </div>
        </div>
      </section>
      {"\n"}
      <section aria-labelledby="faq-title" className="faq wrap">
        <h2 data-reveal="" id="faq-title">
          {"Masz"}
          <br />
          {"pytania?"}
        </h2>
        <div className="faq-list">
          <details>
            <summary>{"Od czego zacząć dobór rozwiązania?"}</summary>
            <p>
              {
                "Opisz rodzaj obiektu i to, co chcesz poprawić: temperaturę, wentylację, dostęp lub oświetlenie. Możesz skorzystać z krótkiego briefu na tej stronie i przesłać go do zespołu."
              }
            </p>
          </details>
          <details>
            <summary>{"Czy zajmujecie się modernizacją?"}</summary>
            <p>
              {
                "Oferta Winterwarm obejmuje zarówno nowe inwestycje, jak i modernizację oraz adaptację przestrzeni. Zakres prac i rozwiązania ustala się indywidualnie."
              }
            </p>
          </details>
          <details>
            <summary>{"Jak skontaktować się z odpowiednim działem?"}</summary>
            <p>
              {
                "W sekcji kontakt znajdziesz osobne numery i adresy dla HVAC, drzwi i bram oraz LED. Przy zapytaniu obejmującym kilka obszarów skorzystaj z adresu winterwarm@winterwarm.pl."
              }
            </p>
          </details>
        </div>
      </section>
      {"\n"}
      <section
        aria-labelledby="contact-title"
        className="contact wrap"
        id="kontakt"
      >
        <div className="contact-top">
          <h2 data-reveal="" id="contact-title">
            {"Twój kolejny"}
            <br />
            {"dobry projekt."}
          </h2>
          <div className="contact-intro" data-reveal="">
            <p>
              {
                "Opowiedz nam o swoim obiekcie. Uporządkuj potrzeby w krótkim briefie lub skontaktuj się bezpośrednio z wybranym zespołem."
              }
            </p>
            <a className="btn" href="/projekt">
              {"Przygotuj brief inwestycji "}
              <span aria-hidden="true" className="arrow">
                {"↗"}
              </span>
            </a>
          </div>
        </div>
        <div className="contact-grid">
          <div className="contact-cell" data-reveal="">
            <h3>{"HVAC"}</h3>
            <a href="tel:+48603586500">{"+48 603 586 500"}</a>
            <a href="mailto:hvac@winterwarm.pl">{"hvac@winterwarm.pl"}</a>
          </div>
          <div className="contact-cell" data-reveal="">
            <h3>{"Drzwi i bramy"}</h3>
            <a href="tel:+48501221533">{"+48 501 221 533"}</a>
            <a href="mailto:bramy@winterwarm.pl">{"bramy@winterwarm.pl"}</a>
          </div>
          <div className="contact-cell" data-reveal="">
            <h3>{"Oświetlenie LED"}</h3>
            <a href="tel:+48601165825">{"+48 601 165 825"}</a>
            <a href="mailto:winled@winterwarm.pl">{"winled@winterwarm.pl"}</a>
          </div>
        </div>
      </section>
      {"\n"}
    </>
  );
}
