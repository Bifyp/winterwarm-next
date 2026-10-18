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
          <h1 data-reveal="">{"Lorem ipsum."}</h1>
          <div>
            <p data-reveal="">
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do."
              }
            </p>
            <a className="btn" href="/projekt?obszar=HVAC">
              {"Zobacz szczegóły"}
              <span aria-hidden="true">{"↗"}</span>
            </a>
          </div>
        </div>
        <figure className="inner-image" data-reveal="">
          <img
            alt="Koncepcyjna nagrzewnica bez marki — ilustracja AI, produkt fikcyjny"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-heater-v1.webp"
          />
        </figure>
      </section>
      <section className="wrap section specs-lead">
        <div className="section-head">
          <h2 data-reveal="">
            {"Lorem ipsum."}
            <br />
            {"Lorem ipsum."}
          </h2>
          <p data-reveal="">
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut."
            }
          </p>
        </div>
        <div className="feature-notes">
          <article data-reveal="">
            <h3>{"Lorem ipsum."}</h3>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
              }
            </p>
          </article>
          <article data-reveal="">
            <h3>{"Dolor sit amet."}</h3>
            <p>
              {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed."}
            </p>
          </article>
          <article data-reveal="">
            <h3>{"Lorem ipsum."}</h3>
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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do."
              }
            </p>
          </article>
        </div>
      </section>
      <ModelTable />
      <section className="wrap section wide-scene">
        <img
          alt="Koncepcyjna hala z ogrzewaniem — ilustracja AI"
          className=""
          decoding="async"
          loading="eager"
          src="/assets/ai-workshop-v1.webp"
        />
        <div>
          <h2>
            {"Lorem ipsum."}
            <br />
            {"Lorem ipsum."}
          </h2>
          <p>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore."
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
            {"Lorem ipsum."}
            <br />
            {"Lorem ipsum."}
          </h2>
          <p data-reveal="">
            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
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
          <h3>{"Lorem ipsum."}</h3>
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
          <h3>{"Lorem ipsum."}</h3>
          <span aria-hidden="true">{"↗"}</span>
        </a>
        <a className="related-row" data-reveal="" href="/oswietlenie">
          <img
            alt="Koncepcyjna hala z oświetleniem LED — ilustracja AI, instalacja fikcyjna"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-lighting-v1.webp"
          />
          <h3>{"Lorem ipsum."}</h3>
          <span aria-hidden="true">{"↗"}</span>
        </a>
      </section>
    </>
  );
}
