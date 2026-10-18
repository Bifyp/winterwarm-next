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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
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
            {"Lorem ipsum."}
            <br />
            {"Lorem ipsum."}
          </h2>
          <p data-reveal="">
            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do."}
          </p>
        </div>
        <div className="offer-list">
          <a data-reveal="" href="/bramy-doki">
            <h3>{"Lorem ipsum."}</h3>
            <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}</p>
            <span aria-hidden="true">{"↗"}</span>
          </a>
          <a data-reveal="" href="/produkty?obszar=Dostęp&szukaj=drzwi">
            <h3>{"Lorem ipsum."}</h3>
            <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing."}</p>
            <span aria-hidden="true">{"↗"}</span>
          </a>
          <a data-reveal="" href="/produkty?obszar=Dostęp&szukaj=PCV">
            <h3>{"Lorem ipsum."}</h3>
            <p>{"Lorem ipsum dolor sit amet, consectetur."}</p>
            <span aria-hidden="true">{"↗"}</span>
          </a>
          <a data-reveal="" href="/produkty?obszar=Dostęp&szukaj=ochrona">
            <h3>{"Lorem ipsum."}</h3>
            <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing."}</p>
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
            {"Lorem ipsum."}
            <br />
            {"Lorem ipsum."}
          </h2>
          <p>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."
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
            <summary>{"Jak przygotować zapytanie o bramę?"}</summary>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna."
              }
            </p>
          </details>
          <details data-reveal="">
            <summary>{"Czy dostępne są rozwiązania przeciwpożarowe?"}</summary>
            <p>
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
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
