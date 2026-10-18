"use client";
import { useEffect, useRef, useState } from "react";
import data from "@/content/site-data.json";
const areas = [
  {
    key: "climate",
    label: "Klimat.",
    title: ["Lorem ipsum.", "Dolor sit amet."],
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    items: [
      "Lorem ipsum dolor sit amet.",
      "Consectetur adipiscing elit.",
      "Sed do eiusmod tempor.",
    ],
    image: data.assets.hall,
    alt: "Koncepcyjna hala z ogrzewaniem — ilustracja AI",
    stamp: "Szablon demonstracyjny",
    url: "/hvac",
    action: "Poznaj ofertę HVAC",
    zone: ["Lorem ipsum.", "Dolor sit amet."],
  },
  {
    key: "access",
    label: "Dostęp.",
    title: ["Lorem ipsum.", "Dolor sit amet."],
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    items: [
      "Lorem ipsum dolor sit amet.",
      "Consectetur adipiscing elit.",
      "Sed do eiusmod tempor.",
    ],
    image: data.assets.doors,
    alt: "Koncepcyjne bramy przemysłowe — ilustracja AI",
    stamp: "Szablon demonstracyjny",
    url: "/drzwi-bramy",
    action: "Poznaj drzwi i bramy",
    zone: ["Lorem ipsum.", "Dolor sit amet."],
  },
  {
    key: "light",
    label: "Światło.",
    title: ["Lorem ipsum.", "Dolor sit amet."],
    copy: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    items: [
      "Lorem ipsum dolor sit amet.",
      "Consectetur adipiscing elit.",
      "Sed do eiusmod tempor.",
    ],
    image: data.assets.led,
    alt: "Koncepcyjna hala z oświetleniem LED — ilustracja AI",
    stamp: "Szablon demonstracyjny",
    url: "/oswietlenie",
    action: "Poznaj oświetlenie LED",
    zone: ["Lorem ipsum.", "Dolor sit amet."],
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
        <p>Lorem ipsum. Dolor sit amet.</p>
        <span>Consectetur adipiscing elit.</span>
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
          Lorem ipsum.
          <br />
          Dolor sit amet.
        </h2>
        <p data-reveal>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            placeholder="Np. Produkt demo 01"
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
        Ilustracje AI i nazwy produktów są przykładowe. Nie przedstawiają
        rzeczywistych produktów ani ofert handlowych.
      </p>
    </section>
  );
}
const models: [string, string, string, string][] = [
  ["Model demo 01", "—", "—", "—"],
  ["Model demo 02", "—", "—", "—"],
  ["Model demo 03", "—", "—", "—"],
  ["Model demo 04", "—", "—", "—"],
  ["Model demo 05", "—", "—", "—"],
  ["Model demo 06", "—", "—", "—"],
  ["Model demo 07", "—", "—", "—"],
  ["Model demo 08", "—", "—", "—"],
  ["Model demo 09", "—", "—", "—"],
];
export function ModelTable() {
  const [model, setModel] = useState("");
  return (
    <section className="wrap section technical" id="parametry">
      <div className="section-head">
        <h2>Porównaj modele.</h2>
        <p>
          Przykładowa tabela szablonu. Nie zawiera danych technicznych
          rzeczywistych produktów ani rekomendacji doboru.
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
        aria-label="Tabela demonstracyjna"
      >
        <table>
          <caption>
            Tabela demonstracyjna — brak rzeczywistych parametrów
          </caption>
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Parametr 01</th>
              <th scope="col">Parametr 02</th>
              <th scope="col">Parametr 03</th>
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
                <td>{kw}</td>
                <td>{air}</td>
                <td>{kg}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="source-note">
        Dane demonstracyjne — nie używaj tej tabeli do projektowania.
        <a href="/produkty">Zobacz katalog demo ↗</a>
      </p>
    </section>
  );
}
