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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
              }
            </p>
            <a className="btn" href="#wybor">
              {"Wybierz obiekt"}
            </a>
          </div>
        </div>
        <figure className="inner-image" data-reveal="">
          <img
            alt="Koncepcyjny przekrój budynku przemysłowego — ilustracja AI"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-building-v1.webp"
          />
        </figure>
      </section>
      <ObjectPicker />
      <Explorer />
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
