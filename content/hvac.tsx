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
            {"Lorem ipsum."}
            <br />
            {"Lorem ipsum."}
          </h1>
          <div>
            <p data-reveal="">
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod."
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
            alt="Koncepcyjna nagrzewnica bez marki — ilustracja AI, produkt fikcyjny"
            className="object-photo"
            decoding="async"
            loading="eager"
            src="/assets/ai-heater-v1.webp"
          />
        </div>
        <div>
          <div className="section-head">
            <h2 data-reveal="">{"Lorem ipsum."}</h2>
            <p data-reveal="">
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut."
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
          <h2 data-reveal="">{"Lorem ipsum."}</h2>
          <p data-reveal="">
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod."
            }
          </p>
        </div>
        <div className="offer-list">
          <a data-reveal="" href="/produkty?obszar=HVAC&szukaj=nagrzewnice">
            <h3>{"Dolor sit amet."}</h3>
            <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing."}</p>
            <span aria-hidden="true">{"↗"}</span>
          </a>
          <a data-reveal="" href="/produkty?obszar=HVAC&szukaj=promienniki">
            <h3>{"Dolor sit amet."}</h3>
            <p>{"Lorem ipsum dolor sit."}</p>
            <span aria-hidden="true">{"↗"}</span>
          </a>
          <a data-reveal="" href="/produkty?obszar=HVAC&szukaj=powietrze">
            <h3>{"Dolor sit amet."}</h3>
            <p>{"Lorem ipsum dolor sit amet, consectetur."}</p>
            <span aria-hidden="true">{"↗"}</span>
          </a>
          <a data-reveal="" href="/produkty?obszar=HVAC&szukaj=wspomagające">
            <h3>{"Lorem ipsum."}</h3>
            <p>{"Lorem ipsum dolor sit."}</p>
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
            {"Lorem ipsum."}
            <br />
            {"Lorem ipsum."}
          </h2>
          <p>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et."
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
            {"Lorem ipsum."}
            <br />
            {"Lorem ipsum."}
          </h2>
          <p data-reveal="">
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et."
            }
          </p>
        </div>
        <div className="process-flow">
          <article data-reveal="">
            <h3>{"Lorem ipsum."}</h3>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
              }
            </p>
          </article>
          <article data-reveal="">
            <h3>{"Dolor sit amet."}</h3>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
              }
            </p>
          </article>
          <article data-reveal="">
            <h3>{"Lorem ipsum."}</h3>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
              }
            </p>
          </article>
        </div>
      </section>
      <section className="wrap section faq">
        <div className="section-head">
          <h2 data-reveal="">{"Lorem ipsum."}</h2>
          <p data-reveal="">{"Lorem ipsum dolor sit."}</p>
        </div>
        <div className="faq-items">
          <details data-reveal="">
            <summary>{"Czy powierzchnia wystarczy do doboru?"}</summary>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              }
            </p>
          </details>
          <details data-reveal="">
            <summary>{"Czy wspieracie modernizacje?"}</summary>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
              }
            </p>
          </details>
        </div>
      </section>
      <section className="wrap closing section">
        <h2 data-reveal="">
          {"Lorem ipsum."}
          <br />
          {"Lorem ipsum."}
        </h2>
        <div data-reveal="">
          <p>
            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do."}
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
