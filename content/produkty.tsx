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
          {"Znajdź"}
          <br />
          {"rozwiązanie."}
        </h1>
        <p data-reveal="">
          {
            "Przegląd rodzin produktów i systemów. Wybierz obszar lub wpisz nazwę. Dobór konkretnego wariantu potwierdzimy w rozmowie."
          }
        </p>
      </section>
      <Catalog />
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
