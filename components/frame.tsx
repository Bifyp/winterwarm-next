import Chrome, { Motion } from "./chrome";
import data from "@/content/site-data.json";
import DemoGate from "./demo-gate";
import PhotoSourceLinks from "./photo-source-links";
export default function Frame({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  return (
    <div className={slug === "index" ? "home" : "inner"} data-page={slug}>
      <DemoGate />
      <Chrome slug={slug} />
      <main id="main">{children}</main>
      <footer className="footer wrap">
        <div className="footer-top">
          <a href="/">
            <span className="logo logo-text">ЛОГО</span>
          </a>
          <p>
            Lorem ipsum dolor sit amet
            <br />
            Dane demonstracyjne
          </p>
          <p>
            Szablon demonstracyjny
            <br />
            Lorem ipsum
          </p>
          <a className="link" href="/kontakt">
            Kontakt demonstracyjny
          </a>
        </div>
        <div className="footer-links">
          {[
            ["/hvac", "HVAC"],
            ["/drzwi-bramy", "Drzwi i bramy"],
            ["/oswietlenie", "LED"],
            ["/realizacje", "Przestrzenie i instalacje"],
            ["/projekt", "Brief inwestycji"],
            ["/prywatnosc", "Prywatność"],
          ].map(([u, n]) => (
            <a className="link" key={u} href={u}>
              {n}
            </a>
          ))}
        </div>
        <a className="footer-name" href="/" aria-label="ЛОГО — strona główna">
          ЛОГО
        </a>
        <div className="footer-bottom">
          <p>
            Ilustracje wygenerowane przy użyciu AI. Nie przedstawiają
            rzeczywistych produktów, zespołu ani realizacji firmy.
          </p>
          <a className="plain-button" href="/prywatnosc">
            Prywatność formularza
          </a>
        </div>
      </footer>
      <Motion />
      <PhotoSourceLinks />
    </div>
  );
}
