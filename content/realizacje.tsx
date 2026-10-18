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
      <section className="wrap catalog-intro">
        <h1 data-reveal="">
          {"Lorem ipsum."}
          <br />
          {"Lorem ipsum."}
        </h1>
        <p data-reveal="">
          {
            "Galeria ilustracji wygenerowanych przy użyciu AI. Przedstawione obiekty i instalacje są fikcyjne — nie dokumentują rzeczywistych realizacji."
          }
        </p>
      </section>
      <section className="wrap work-gallery">
        <figure data-reveal="">
          <img
            alt="Koncepcyjny magazyn z instalacjami — ilustracja AI"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-warehouse-v1.webp"
          />
          <figcaption>
            <h2>{"Lorem ipsum."}</h2>
            <p>{"Lorem ipsum dolor sit."}</p>
            <a className="link" href="/hvac">
              {"Poznaj rozwiązania"}
            </a>
          </figcaption>
        </figure>
        <figure data-reveal="">
          <img
            alt="Koncepcyjny salon samochodowy — ilustracja AI"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-showroom-v1.webp"
          />
          <figcaption>
            <h2>{"Dolor sit amet."}</h2>
            <p>{"Lorem ipsum dolor sit."}</p>
            <a className="link" href="/oswietlenie">
              {"Poznaj rozwiązania"}
            </a>
          </figcaption>
        </figure>
        <figure data-reveal="">
          <img
            alt="Koncepcyjna hala z ogrzewaniem — ilustracja AI"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-workshop-v1.webp"
          />
          <figcaption>
            <h2>{"Lorem ipsum."}</h2>
            <p>{"Lorem ipsum dolor sit."}</p>
            <a className="link" href="/hvac">
              {"Poznaj rozwiązania"}
            </a>
          </figcaption>
        </figure>
        <figure data-reveal="">
          <img
            alt="Koncepcyjne bramy przemysłowe — ilustracja AI"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/ai-doors-v1.webp"
          />
          <figcaption>
            <h2>{"Lorem ipsum."}</h2>
            <p>{"Lorem ipsum dolor sit amet."}</p>
            <a className="link" href="/drzwi-bramy">
              {"Poznaj rozwiązania"}
            </a>
          </figcaption>
        </figure>
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
