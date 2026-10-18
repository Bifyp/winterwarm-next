"use client";
import { useEffect, useRef, useState } from "react";
import data from "@/content/site-data.json";
const areas = [
  {
    key: "climate",
    label: "Klimat.",
    title: ["Dobry klimat", "do pracy."],
    copy: "Ogrzewanie, wentylacja i chłodzenie. Dobieramy rozwiązania do potrzeb obiektu, jego funkcji i sposobu użytkowania.",
    items: [
      "Ogrzewanie nadmuchowe i promiennikowe",
      "Wentylacja i chłodzenie",
      "Urządzenia wspomagające",
    ],
    image: data.assets.hall,
    alt: "Koncepcyjna hala z ogrzewaniem — ilustracja AI",
    stamp: "HVAC dla obiektów przemysłowych",
    url: "/hvac",
    action: "Poznaj ofertę HVAC",
    zone: ["Temperatura.", "Jakość powietrza."],
  },
  {
    key: "access",
    label: "Dostęp.",
    title: ["Swobodny ruch.", "Pewny dostęp."],
    copy: "Drzwi, bramy i doki. Rozwiązania do wejść, przejazdów oraz stref przeładunkowych.",
    items: [
      "Drzwi stalowe i wewnętrzne",
      "Bramy przemysłowe i doki",
      "Ochrona przeciwpożarowa i oddymianie",
    ],
    image: data.assets.doors,
    alt: "Koncepcyjne bramy przemysłowe — ilustracja AI",
    stamp: "Drzwi, bramy i strefy przeładunku",
    url: "/drzwi-bramy",
    action: "Poznaj drzwi i bramy",
    zone: ["Dostęp.", "Pod kontrolą."],
  },
  {
    key: "light",
    label: "Światło.",
    title: ["Światło gotowe", "do działania."],
    copy: "Oświetlenie LED dopasowane do funkcji przestrzeni przemysłowej i komercyjnej.",
    items: [
      "Skyline i NEXTGEN",
      "DATALUX.LT i DATALUX.AC",
      "Prefab i Bandraster",
    ],
    image: data.assets.led,
    alt: "Koncepcyjna hala z oświetleniem LED — ilustracja AI",
    stamp: "Światło dla przestrzeni pracy",
    url: "/oswietlenie",
    action: "Poznaj oświetlenie LED",
    zone: ["Światło.", "Do Twoich zadań."],
  },
];
function TwoLines({ lines }: { lines: string[] }) {
  return (
    <>
      {lines[0]}
      <br />
      {lines[1]}
    </>
  );
}
export function Solutions() {
  const [active, setActive] = useState(0);
  const s = areas[active];
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  return (
    <section className="solutions wrap" aria-label="Obszary rozwiązań">
      <div className="solution-tabs" role="tablist" aria-label="Obszary oferty">
        {areas.map((s, i) => (
          <button
            key={s.key}
            ref={(e) => {
              buttons.current[i] = e;
            }}
            id={"tab-" + s.key}
            className="solution-tab"
            role="tab"
            data-solution={s.key}
            aria-controls="solution-panel"
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              let n = i;
              if (e.key === "ArrowRight") n = (i + 1) % 3;
              else if (e.key === "ArrowLeft") n = (i + 2) % 3;
              else if (e.key === "Home") n = 0;
              else if (e.key === "End") n = 2;
              else return;
              e.preventDefault();
              setActive(n);
              buttons.current[n]?.focus();
            }}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div
        className="solution-stage"
        id="solution-panel"
        role="tabpanel"
        tabIndex={0}
        aria-labelledby={"tab-" + s.key}
      >
        <div className="solution-image photo-in" data-reveal>
          <img
            id="solution-photo"
            src={s.image}
            alt={s.alt}
            width={1349}
            height={900}
          />
          <p className="solution-stamp">{s.stamp}</p>
        </div>
        <div className="solution-info" aria-live="polite">
          <h3 id="solution-title">
            <TwoLines lines={s.title} />
          </h3>
          <p>{s.copy}</p>
          <ul>
            {s.items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <a className="link" href={s.url}>
            {s.action} ↗
          </a>
        </div>
      </div>
      <div className="solution-foot">
        <p>Nowy obiekt. Modernizacja. Adaptacja.</p>
        <span>Jedno miejsce, trzy obszary kompetencji.</span>
      </div>
    </section>
  );
}
export function Explorer() {
  const [active, setActive] = useState(0);
  const s = areas[active];
  return (
    <section
      className="explorer wrap"
      id="obiekt"
      aria-labelledby="explorer-title"
    >
      <div className="section-head">
        <h2 id="explorer-title" data-reveal>
          Jeden obiekt.
          <br />
          Wiele połączeń.
        </h2>
        <p data-reveal>
          Dotknij wybranej strefy budynku. Zobacz, jak łączą się nasze
          kompetencje i gdzie zacząć rozmowę o Twojej inwestycji.
        </p>
      </div>
      <div className="explorer-shell">
        <div className="building-canvas">
          <img
            src={data.assets.building}
            alt="Koncepcyjny przekrój budynku — ilustracja AI"
            width={1500}
            height={1000}
          />
          {areas.map((a, i) => (
            <button
              key={a.key}
              className="hotspot"
              data-zone={a.key}
              aria-pressed={active === i}
              onClick={() => setActive(i)}
            >
              <span aria-hidden="true" />
              {["HVAC", "Drzwi i bramy", "LED"][i]}
            </button>
          ))}
        </div>
        <div className="explorer-info">
          <h3 id="zone-title">
            <TwoLines lines={s.zone} />
          </h3>
          <p aria-live="polite">{s.copy}</p>
          <div>
            <label htmlFor="zone-select">Wybierz obszar</label>
            <select
              className="explorer-select"
              id="zone-select"
              value={active}
              onChange={(e) => setActive(Number(e.target.value))}
            >
              {areas.map((a, i) => (
                <option key={a.key} value={i}>
                  {
                    [
                      "HVAC — klimat wewnątrz",
                      "Drzwi i bramy — sprawny dostęp",
                      "LED — światło do pracy",
                    ][i]
                  }
                </option>
              ))}
            </select>
            <a className="link" href={s.url}>
              Zobacz produkty ↗
            </a>
          </div>
          <a className="btn" href="/projekt">
            Omów swój obiekt ↗
          </a>
          <p className="explorer-note">
            Koncepcyjna ilustracja AI, nie projekt techniczny. Dobór wymaga
            indywidualnej analizy.
          </p>
        </div>
      </div>
    </section>
  );
}
export function ObjectPicker() {
  const [active, setActive] = useState(0);
  const [, name, copy, image, info] = data.objects[active];
  return (
    <section className="wrap section object-picker" id="wybor">
      <div className="section-head">
        <h2 data-reveal>Jaki to obiekt?</h2>
        <p>
          To przewodnik do pierwszej rozmowy, nie automatyczny projekt ani
          rekomendacja konkretnej mocy.
        </p>
      </div>
      <div className="object-options" role="group" aria-label="Rodzaj obiektu">
        {data.objects.map((o, i) => (
          <button
            key={o[0]}
            className="filter-button"
            data-object={i}
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            {o[1]}
          </button>
        ))}
      </div>
      <div className="object-result" aria-live="polite">
        <img
          src={data.assets[image as keyof typeof data.assets]}
          alt={"Ilustracja AI obszaru zastosowania: " + name}
        />
        <div>
          <h3>{name}</h3>
          <p>{copy}</p>
          <p>Przygotuj: {info}</p>
          <a className="btn" href={"/projekt?typ=" + encodeURIComponent(name)}>
            Opisz ten obiekt ↗
          </a>
        </div>
      </div>
    </section>
  );
}
const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l");
export function Catalog() {
  const [query, setQuery] = useState(""),
    [area, setArea] = useState("");
  useEffect(() => {
    const p = new URLSearchParams(location.search);
    setQuery(p.get("szukaj") || "");
    setArea(
      ["HVAC", "Dostęp", "LED"].includes(p.get("obszar") || "")
        ? p.get("obszar")!
        : "",
    );
  }, []);
  function update(q: string, a: string) {
    setQuery(q);
    setArea(a);
    const p = new URLSearchParams();
    if (q) p.set("szukaj", q);
    if (a) p.set("obszar", a);
    history.replaceState(null, "", "/produkty" + (p.size ? "?" + p : ""));
  }
  const items = data.catalog.filter(
    (s) =>
      (!area || s.area === area) &&
      norm(s.name + " " + s.description + " " + s.area).includes(norm(query)),
  );
  return (
    <section className="wrap catalog-section">
      <form
        className="catalog-tools"
        id="catalog-form"
        role="search"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="field">
          <label htmlFor="catalog-search">Nazwa lub zastosowanie</label>
          <input
            id="catalog-search"
            type="search"
            value={query}
            onChange={(e) => update(e.target.value, area)}
            placeholder="Np. XR+, bramy, Skyline"
            autoComplete="off"
          />
        </div>
        <fieldset className="filter-set">
          <legend>Obszar oferty</legend>
          {[
            ["", "Wszystko"],
            ["HVAC", "HVAC"],
            ["Dostęp", "Drzwi i bramy"],
            ["LED", "LED"],
          ].map(([v, n]) => (
            <label key={v}>
              <input
                type="radio"
                name="catalog-area"
                checked={area === v}
                onChange={() => update(query, v)}
              />
              <span>{n}</span>
            </label>
          ))}
        </fieldset>
        <p id="catalog-count" role="status">
          Wyniki: {items.length}
        </p>
      </form>
      <div id="catalog-items">
        {items.map((c) => (
          <article
            className="catalog-item"
            id={c.id}
            key={c.name}
            data-area={c.area}
          >
            <a className="catalog-picture" href={c.url}>
              <img
                src={c.image}
                alt={
                  "Ilustracja AI, nie zdjęcie konkretnego produktu: " + c.area
                }
                loading="lazy"
              />
            </a>
            <div className="catalog-copy">
              <p className="item-category">
                {c.area} / {c.group}
              </p>
              <h2>
                <a href={c.url}>{c.name}</a>
              </h2>
              <p>{c.description}</p>
            </div>
            <a className="link catalog-action" href={c.url}>
              {c.url.startsWith("/") ? "Poznaj produkt" : "Katalog źródłowy"}
              <span aria-hidden="true">↗</span>
            </a>
          </article>
        ))}
      </div>
      {!items.length && (
        <div className="empty-state" id="catalog-empty">
          <h2>Brak wyników.</h2>
          <p>Spróbuj krótszej nazwy albo wyczyść filtry.</p>
          <button className="btn light" onClick={() => update("", "")}>
            Pokaż wszystko
          </button>
        </div>
      )}
      <p className="source-note">
        Fotografie w katalogu pokazują produkt XR+ lub obszar zastosowania, nie
        wszystkie wymienione modele. „Katalog źródłowy” prowadzi do działającego
        serwisu Winterwarm.
      </p>
    </section>
  );
}
const models: [string, number, number, number][] = [
  ["XR 10+", 12.5, 2750, 38],
  ["XR 20+", 20.7, 4000, 39],
  ["XR 30+", 28.8, 4200, 40],
  ["XR 40+", 41.1, 5400, 78],
  ["XR 50+", 50.7, 8000, 80],
  ["XR 60+", 61.2, 8000, 82],
  ["XR 80+", 68.6, 10200, 185],
  ["XR 100+", 86.9, 10700, 195],
  ["XR 120+", 105.6, 13000, 215],
];
export function ModelTable() {
  const [model, setModel] = useState("");
  return (
    <section className="wrap section technical" id="parametry">
      <div className="section-head">
        <h2>Porównaj modele.</h2>
        <p>
          Wybrane parametry z opublikowanej karty XR+. To porównanie, nie
          automatyczny dobór mocy do budynku.
        </p>
      </div>
      <div className="model-control">
        <label htmlFor="xr-model">Wyróżnij model</label>
        <select
          id="xr-model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        >
          <option value="">Wszystkie modele</option>
          {models.map((m) => (
            <option key={m[0]}>{m[0]}</option>
          ))}
        </select>
        <p role="status">
          {model
            ? "Wyróżniono: " + model + ". Pełna tabela pozostaje poniżej."
            : ""}
        </p>
      </div>
      <p className="table-hint">
        Przewiń tabelę w bok, aby zobaczyć wszystkie parametry.
      </p>
      <div
        className="table-scroll"
        tabIndex={0}
        role="region"
        aria-label="Parametry modeli XR+"
      >
        <table>
          <caption>Winterwarm XR+ — wybrane dane techniczne</caption>
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Moc znamionowa</th>
              <th scope="col">Strumień powietrza*</th>
              <th scope="col">Masa</th>
            </tr>
          </thead>
          <tbody>
            {models.map(([n, kw, air, kg]) => (
              <tr
                key={n}
                data-model={n}
                className={model === n ? "selected" : undefined}
              >
                <th scope="row">{n}</th>
                <td>{String(kw).replace(".", ",")} kW</td>
                <td>{air} m³/h</td>
                <td>{kg} kg</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="source-note">
        *Strumień powietrza uwzględnia przyrost temperatury. Dane należy
        potwierdzić w aktualnej dokumentacji przed projektowaniem.{" "}
        <a href="https://winterwarm.pl/nagrzewnica-winterwarm-xr/">
          Pełna karta źródłowa ↗
        </a>
      </p>
    </section>
  );
}
