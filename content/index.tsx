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
            alt="Koncepcyjna hala przemysłowa z ogrzewaniem — ilustracja AI"
            height="768"
            fetchPriority="high"
            decoding="async"
            src="/assets/ai-hero-v1.webp"
            width="1376"
          />
        </div>
        <div aria-hidden="true" className="hero-shade"></div>
        <div className="hero-content wrap">
          <div>
            <h1 id="hero-title">
              <span className="hero-title-line">
                <span>{"Lorem ipsum,"}</span>
              </span>
              <span className="hero-title-line">
                <span>{"dolor sit amet."}</span>
              </span>
            </h1>
            <p className="hero-description">
              {"Lorem ipsum dolor."}
              <br />
              {"Lorem ipsum dolor sit amet, consectetur adipiscing."}
            </p>
          </div>
          <div className="hero-right">
            <p className="hero-lead">
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
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
            {"Lorem ipsum dolor sit."}
            <br />
            {"Lorem ipsum dolor sit."}
          </p>
        </div>
      </section>
      {"\n"}
      <section className="statement wrap" id="rozwiazania">
        <h2 data-reveal="">
          {"Lorem ipsum."}
          <br />
          {"Lorem ipsum."}
        </h2>
        <div data-reveal="">
          <p>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
              {"Lorem ipsum."}
              <br />
              {"Lorem ipsum."}
            </h2>
            <p className="product-name">{"Lorem ipsum dolor."}</p>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et."
              }
            </p>
            <a className="btn light" href="/xr-plus">
              {"Zobacz szczegóły"}
            </a>
            <div className="product-facts">
              <p>
                <strong>{"Lorem ipsum"}</strong>
                {"Lorem ipsum dolor."}
              </p>
              <p>
                <strong>{"Lorem ipsum"}</strong>
                {"Lorem ipsum dolor."}
              </p>
            </div>
          </div>
          <div className="product-image" data-reveal="">
            <img
              alt="Koncepcyjna nagrzewnica bez marki — ilustracja AI, produkt fikcyjny"
              height="1024"
              src="/assets/ai-heater-v1.webp"
              width="1024"
            />
          </div>
        </div>
        <div className="product-bottom">
          <p>
            {"Lorem ipsum dolor sit."}
            <br />
            {"Lorem ipsum dolor."}
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
            {"Lorem ipsum."}
            <br />
            {"Lorem ipsum."}
          </h2>
          <p data-reveal="">
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod."
            }
          </p>
        </div>
        <div className="gallery-grid">
          <figure className="gallery-item" data-reveal="">
            <div className="image-box">
              <img
                alt="Koncepcyjny magazyn z instalacjami — ilustracja AI"
                height="848"
                src="/assets/ai-warehouse-v1.webp"
                width="1264"
              />
            </div>
            <figcaption>
              {"Lorem ipsum dolor."}
              <span>{"Lorem ipsum dolor sit."}</span>
            </figcaption>
          </figure>
          <figure className="gallery-item" data-reveal="">
            <div className="image-box">
              <img
                alt="Koncepcyjny salon samochodowy — ilustracja AI"
                height="848"
                src="/assets/ai-showroom-v1.webp"
                width="1264"
              />
            </div>
            <figcaption>
              {"Lorem ipsum dolor."}
              <span>{"Lorem ipsum dolor sit."}</span>
            </figcaption>
          </figure>
        </div>
        <div className="gallery-bottom">
          <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</p>
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
            {"Lorem ipsum."}
            <br />
            {"Lorem ipsum."}
          </h2>
          <div data-reveal="">
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna."
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
            alt="Koncepcyjne biuro techniczne — ilustracja AI, nie siedziba firmy"
            height="848"
            src="/assets/ai-office-v1.webp"
            width="1264"
          />
          <figcaption>
            {"Koncepcyjne biuro techniczne — ilustracja AI"}
          </figcaption>
        </figure>
        <div className="stats">
          <div className="stat" data-reveal="">
            <strong>{"—"}</strong>
            <span>{"Lorem ipsum dolor."}</span>
          </div>
          <div className="stat" data-reveal="">
            <strong>{"—"}</strong>
            <span>{"Lorem ipsum dolor sit."}</span>
          </div>
          <div className="stat" data-reveal="">
            <strong>{"—"}</strong>
            <span>{"Lorem ipsum dolor."}</span>
          </div>
          <div className="stat" data-reveal="">
            <strong>{"—"}</strong>
            <span>{"Lorem ipsum dolor."}</span>
          </div>
        </div>
        <div className="partners">
          <p>
            {"Lorem ipsum dolor."}
            <br />
            {"Lorem ipsum dolor."}
          </p>
          <div className="partner-names">
            <span>{"Lorem ipsum dolor."}</span>
            <span>{"Lorem ipsum dolor."}</span>
            <span>{"Lorem ipsum dolor."}</span>
            <span>{"Lorem ipsum dolor."}</span>
          </div>
        </div>
      </section>
      {"\n"}
      <section aria-labelledby="faq-title" className="faq wrap">
        <h2 data-reveal="" id="faq-title">
          {"Lorem ipsum."}
          <br />
          {"Lorem ipsum."}
        </h2>
        <div className="faq-list">
          <details>
            <summary>{"Od czego zacząć dobór rozwiązania?"}</summary>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            </p>
          </details>
          <details>
            <summary>{"Czy zajmujecie się modernizacją?"}</summary>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            </p>
          </details>
          <details>
            <summary>{"Jak skontaktować się z odpowiednim działem?"}</summary>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
            {"Lorem ipsum."}
            <br />
            {"Lorem ipsum."}
          </h2>
          <div className="contact-intro" data-reveal="">
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore."
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
            <h3>{"Lorem ipsum."}</h3>
            <a href="/kontakt#demo-contact">{"Kontakt demonstracyjny"}</a>
            <a href="/kontakt#demo-contact">{"demo@example.com"}</a>
          </div>
          <div className="contact-cell" data-reveal="">
            <h3>{"Lorem ipsum."}</h3>
            <a href="/kontakt#demo-contact">{"Kontakt demonstracyjny"}</a>
            <a href="/kontakt#demo-contact">{"demo@example.com"}</a>
          </div>
          <div className="contact-cell" data-reveal="">
            <h3>{"Lorem ipsum."}</h3>
            <a href="/kontakt#demo-contact">{"Kontakt demonstracyjny"}</a>
            <a href="/kontakt#demo-contact">{"demo@example.com"}</a>
          </div>
        </div>
      </section>
      {"\n"}
    </>
  );
}
