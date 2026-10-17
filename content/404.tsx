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
      <section className="wrap not-found">
        <h1>
          {"Ta strona"}
          <br />
          {"nie istnieje."}
        </h1>
        <p>{"Wróć do przeglądu rozwiązań lub skontaktuj się z zespołem."}</p>
        <a className="btn" href="/">
          {"Strona główna"}
        </a>
        <a className="link" href="/produkty">
          {"Katalog produktów"}
        </a>
      </section>
    </>
  );
}
