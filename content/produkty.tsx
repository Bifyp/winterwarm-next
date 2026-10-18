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
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et."
          }
        </p>
      </section>
      <Catalog />
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
