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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut."
              }
            </p>
            <a className="btn" href="/projekt">
              {"Zacznij projekt"}
              <span aria-hidden="true">{"↗"}</span>
            </a>
          </div>
        </div>
        <figure className="inner-image" data-reveal="">
          <img
            alt="Koncepcyjne biuro techniczne — ilustracja AI, nie siedziba firmy"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-office-v1.webp"
          />
        </figure>
      </section>
      <section className="wrap section company-story">
        <h2 data-reveal="">
          {"Lorem ipsum."}
          <br />
          {"Lorem ipsum."}
        </h2>
        <div>
          <p data-reveal="">
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          </p>
          <p data-reveal="">
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            }
          </p>
          <p data-reveal="">
            {
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod."
            }
          </p>
          <a className="link" href="/kontakt">
            {"Poznaj kontakty i lokalizacje"}
          </a>
        </div>
      </section>
      <section className="wrap section">
        <div className="company-numbers">
          <div data-reveal="">
            <strong>{"—"}</strong>
            <p>{"Lorem ipsum dolor sit."}</p>
          </div>
          <div data-reveal="">
            <strong>{"—"}</strong>
            <p>{"Lorem ipsum dolor."}</p>
          </div>
          <div data-reveal="">
            <strong>{"—"}</strong>
            <p>{"Lorem ipsum dolor."}</p>
          </div>
          <div data-reveal="">
            <strong>{"—"}</strong>
            <p>{"Lorem ipsum dolor."}</p>
          </div>
        </div>
        <p className="source-note">
          {"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do."}
        </p>
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
