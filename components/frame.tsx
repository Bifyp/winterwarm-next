import Chrome, { Motion } from "./chrome";
import data from "@/content/site-data.json";
export default function Frame({
  slug,
  children,
}: {
  slug: string;
  children: React.ReactNode;
}) {
  return (
    <div className={slug === "index" ? "home" : "inner"} data-page={slug}>
      <Chrome slug={slug} />
      <main id="main">{children}</main>
      <footer className="footer wrap">
        <div className="footer-top">
          <a href="/">
            <img className="logo" src={data.assets.logo} alt="Winterwarm" />
          </a>
          <p>
            ul. Wiejska 32a, Jasin
            <br />
            62-020 Swarzędz
          </p>
          <p>
            Poniedziałek–piątek
            <br />
            8:00–16:00
          </p>
          <a className="link" href="mailto:winterwarm@winterwarm.pl">
            winterwarm@winterwarm.pl
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
        <a
          className="footer-name"
          href="/"
          aria-label="Winterwarm, strona główna"
        >
          Winterwarm.
        </a>
        <div className="footer-bottom">
          <p>
            Zdjęcia produktów i realizacji: materiały ze strony{" "}
            <a className="link" href="https://winterwarm.pl/">
              Winterwarm Polska
            </a>
            .
          </p>
          <a className="plain-button" href="/prywatnosc">
            Prywatność formularza
          </a>
        </div>
      </footer>
      <Motion />
    </div>
  );
}
