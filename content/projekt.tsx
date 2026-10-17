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
      <section className="wrap brief-page">
        <div className="brief-intro">
          <h1 data-reveal="">
            {"Twój kolejny"}
            <br />
            {"dobry projekt."}
          </h1>
          <p data-reveal="">
            {
              "Opisz obiekt i potrzeby. Wyślij zapytanie do zespołu lub przygotuj e-mail. To brief do rozmowy, nie automatyczna wycena."
            }
          </p>
          <a className="link" href="/kontakt">
            {"Wolisz zadzwonić? Kontakty"}
          </a>
        </div>
        <ProjectForm configured={isContactConfigured()} />
      </section>
    </>
  );
}
