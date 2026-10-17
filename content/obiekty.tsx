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
            {"Zacznij"}
            <br />
            {"od przestrzeni."}
          </h1>
          <div>
            <p data-reveal="">
              {
                "Funkcja obiektu pomaga uporządkować potrzeby. Wybierz przestrzeń, a potem porozmawiajmy o warunkach technicznych."
              }
            </p>
            <a className="btn" href="#wybor">
              {"Wybierz obiekt"}
            </a>
          </div>
        </div>
        <figure className="inner-image" data-reveal="">
          <img
            alt="Schemat budynku i obszarów oferty"
            className=""
            decoding="async"
            loading="eager"
            src="/assets/a6473e4b1a7f.webp"
          />
        </figure>
      </section>
      <ObjectPicker />
      <Explorer />
      <section className="wrap section process">
        <div className="section-head">
          <h2 data-reveal="">
            {"Od rozmowy"}
            <br />
            {"do działania."}
          </h2>
          <p data-reveal="">
            {
              "Punkt wyjścia to Twój obiekt. Dobór urządzeń wymaga analizy warunków i potrzeb, a nie samej powierzchni."
            }
          </p>
        </div>
        <div className="process-flow">
          <article data-reveal="">
            <h3>{"Poznajemy obiekt"}</h3>
            <p>
              {
                "Nowa inwestycja czy modernizacja? Opowiedz o funkcji budynku, istniejących instalacjach i warunkach pracy."
              }
            </p>
          </article>
          <article data-reveal="">
            <h3>{"Dobieramy rozwiązanie"}</h3>
            <p>
              {
                "Zespół analizuje potrzeby i zakres prac. Ustalamy urządzenia, układ instalacji oraz kolejne kroki."
              }
            </p>
          </article>
          <article data-reveal="">
            <h3>{"Wspieramy wdrożenie"}</h3>
            <p>
              {
                "Dostawa, montaż i serwis. Zakres oraz warunki współpracy potwierdzamy indywidualnie w ofercie."
              }
            </p>
          </article>
        </div>
      </section>
      <section className="wrap closing section">
        <h2 data-reveal="">
          {"Twój obiekt."}
          <br />
          {"Porozmawiajmy."}
        </h2>
        <div data-reveal="">
          <p>
            {
              "Wybierz obszar, opisz inwestycję i przygotuj wiadomość do właściwego zespołu."
            }
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
