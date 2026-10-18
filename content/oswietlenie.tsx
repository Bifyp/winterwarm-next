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
            <a className="btn" href="/produkty?obszar=LED">
              {"Przeglądaj LED"}
            </a>
          </div>
        </div>
        <figure className="inner-image" data-reveal="">
          <img
            alt="Koncepcyjna hala z oświetleniem LED — ilustracja AI, instalacja fikcyjna"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-lighting-v1.webp"
          />
        </figure>
      </section>
      <section className="wrap section skyline-feature">
        <div>
          <div className="section-head">
            <h2 data-reveal="">{"Dolor sit amet."}</h2>
            <p data-reveal="">
              {
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do."
              }
            </p>
          </div>
          <a className="btn light" href="/skyline">
            {"Zobacz szczegóły"}
          </a>
        </div>
        <div className="big-fact" data-reveal="">
          <strong>{"—"}</strong>
          <span>
            {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed."}
          </span>
        </div>
      </section>
      <section className="wrap section">
        <div className="section-head">
          <h2 data-reveal="">{"Lorem ipsum."}</h2>
          <p data-reveal="">
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
            }
          </p>
        </div>
        <div className="names-list">
          <a href="/skyline">
            <h3>{"Lorem ipsum."}</h3>
            <span>{"Lorem ipsum dolor sit."}</span>
          </a>
          <a href="/produkty">
            <h3>{"Lorem ipsum."}</h3>
            <span>{"Lorem ipsum dolor."}</span>
          </a>
          <a href="/produkty">
            <h3>{"Lorem ipsum."}</h3>
            <span>{"Lorem ipsum dolor."}</span>
          </a>
          <a href="/produkty">
            <h3>{"Lorem ipsum."}</h3>
            <span>{"Lorem ipsum dolor."}</span>
          </a>
          <a href="/produkty">
            <h3>{"Lorem ipsum."}</h3>
            <span>{"Lorem ipsum dolor."}</span>
          </a>
          <a href="/produkty">
            <h3>{"Lorem ipsum."}</h3>
            <span>{"Lorem ipsum dolor."}</span>
          </a>
          <a href="/produkty">
            <h3>{"Dolor sit amet."}</h3>
            <span>{"Lorem ipsum dolor."}</span>
          </a>
        </div>
      </section>
      <section className="wrap section wide-scene">
        <img
          alt="Koncepcyjny salon samochodowy — ilustracja AI"
          className=""
          decoding="async"
          loading="eager"
          src="/assets/ai-showroom-v1.webp"
        />
        <div>
          <h2>
            {"Lorem ipsum."}
            <br />
            {"Lorem ipsum."}
          </h2>
          <p>
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor."
            }
          </p>
          <a className="btn" href="/projekt?obszar=LED">
            {"Porozmawiaj o LED"}
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
