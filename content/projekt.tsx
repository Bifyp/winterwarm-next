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
            {"Lorem ipsum"}
            <br />
            {"dolor sit amet."}
          </h1>
          <p data-reveal="">
            {
              "To przykładowy formularz szablonu. Używaj wyłącznie fikcyjnych danych. Wysyłka przez serwer jest wyłączona."
            }
          </p>
          <a className="link" href="/kontakt">
            {"Zobacz kontakt demonstracyjny"}
          </a>
        </div>
        <ProjectForm configured={isContactConfigured()} />
      </section>
    </>
  );
}
