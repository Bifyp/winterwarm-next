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
        <h1 data-reveal="">{"Porozmawiajmy."}</h1>
        <p data-reveal="">
          {
            "Wybierz zespół odpowiadający Twojej inwestycji. Nie wiesz, od czego zacząć? Przygotuj krótki brief."
          }
        </p>
        <a className="btn" href="/projekt">
          {"Zacznij projekt"}
          <span aria-hidden="true">{"↗"}</span>
        </a>
      </section>
      <section className="wrap contact-directory">
        <article data-reveal="">
          <h2>{"HVAC"}</h2>
          <div>
            <a className="contact-tel" href="tel:+48603586500">
              {"+48 603 586 500"}
            </a>
            <a href="mailto:hvac@winterwarm.pl">{"hvac@winterwarm.pl"}</a>
            <p>{"Ogrzewanie, wentylacja i chłodzenie."}</p>
          </div>
        </article>
        <article data-reveal="">
          <h2>{"Drzwi i bramy"}</h2>
          <div>
            <a className="contact-tel" href="tel:+48501221533">
              {"+48 501 221 533"}
            </a>
            <a href="mailto:bramy@winterwarm.pl">{"bramy@winterwarm.pl"}</a>
            <p>{"Przegrody budowlane, bramy, doki i oddymianie."}</p>
          </div>
        </article>
        <article data-reveal="">
          <h2>{"Oświetlenie LED"}</h2>
          <div>
            <a className="contact-tel" href="tel:+48601165825">
              {"+48 601 165 825"}
            </a>
            <a href="mailto:winled@winterwarm.pl">{"winled@winterwarm.pl"}</a>
            <p>{"Systemy i oprawy oświetleniowe."}</p>
          </div>
        </article>
      </section>
      <section className="wrap section locations">
        <div className="section-head">
          <h2 data-reveal="">{"Odwiedź nas."}</h2>
          <p data-reveal="">
            {
              "Dwie lokalizacje. Sprawdź adres i godziny przed zaplanowaniem wizyty."
            }
          </p>
        </div>
        <div className="locations-grid">
          <article>
            <h3>{"Biuro w Jasinie"}</h3>
            <p>
              {"ul. Wiejska 32a, Jasin"}
              <br />
              {"62-020 Swarzędz"}
            </p>
            <p>
              {"Poniedziałek–piątek"}
              <br />
              {"8:00–16:00"}
            </p>
            <a className="link" href="tel:+48603588651">
              {"+48 603 588 651"}
            </a>
            <a
              className="link"
              href="https://www.google.com/maps/search/?api=1&query=Wiejska+32a+Jasin+Swarzędz"
            >
              {"Otwórz trasę ↗"}
            </a>
          </article>
          <article>
            <h3>{"Magazyn w Bugaju"}</h3>
            <p>
              {"ul. Kobylnicka 52"}
              <br />
              {"62-007 Bugaj"}
            </p>
            <p>
              {"Poniedziałek–piątek"}
              <br />
              {"8:00–14:00"}
            </p>
            <a className="link" href="tel:+48601485845">
              {"+48 601 485 845"}
            </a>
            <a
              className="link"
              href="https://www.google.com/maps/search/?api=1&query=Kobylnicka+52+Bugaj"
            >
              {"Otwórz trasę ↗"}
            </a>
          </article>
        </div>
        <p className="source-note">
          {"NIP: 779 21 45 366. REGON: 639847049."}
          <br />
          {"Kontakt ogólny: "}
          <a href="mailto:winterwarm@winterwarm.pl">
            {"winterwarm@winterwarm.pl"}
          </a>
        </p>
      </section>
    </>
  );
}
