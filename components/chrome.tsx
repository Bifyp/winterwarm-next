"use client";
import { useEffect, useRef, useState } from "react";
import data from "@/content/site-data.json";
const nav = [
  ["/rozwiazania", "Rozwiązania"],
  ["/produkty", "Produkty"],
  ["/obiekty", "Twój obiekt"],
  ["/o-nas", "O nas"],
  ["/kontakt", "Kontakt"],
];
const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l");
export default function Chrome({ slug }: { slug: string }) {
  const [menu, setMenu] = useState(false),
    [query, setQuery] = useState("");
  const search = useRef<HTMLDialogElement>(null),
    privacy = useRef<HTMLDialogElement>(null),
    trigger = useRef<HTMLElement | null>(null),
    menuButton = useRef<HTMLButtonElement>(null);
  const found = data.search
    .filter(
      (s, i, a) =>
        a.findIndex((t) => t.name === s.name && t.url === s.url) === i,
    )
    .filter((s) =>
      norm(query)
        .split(/\s+/)
        .every((w) => norm(s.name + " " + s.description).includes(w)),
    )
    .slice(0, query ? 12 : 6);
  useEffect(() => {
    for (const selector of ["main", "footer"]) {
      const el = document.querySelector<HTMLElement>(selector);
      if (el) el.inert = menu;
    }
    return () => {
      for (const selector of ["main", "footer"]) {
        const el = document.querySelector<HTMLElement>(selector);
        if (el) el.inert = false;
      }
    };
  }, [menu]);
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (!menu) return;
      if (e.key === "Escape") {
        setMenu(false);
        menuButton.current?.focus();
      }
      if (e.key === "Tab") {
        const all = [
          ...document.querySelectorAll<HTMLElement>(".header a,.header button"),
        ].filter((e) => e.getClientRects().length);
        const first = all[0],
          last = all.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [menu]);
  function open(
    ref: React.RefObject<HTMLDialogElement | null>,
    el: HTMLElement,
  ) {
    setMenu(false);
    trigger.current = el;
    ref.current?.showModal();
    document.documentElement.classList.add("no-scroll");
  }
  function closed() {
    document.documentElement.classList.remove("no-scroll");
    trigger.current?.focus();
  }
  return (
    <>
      <a className="skip" href="#main">
        Przejdź do treści
      </a>
      <header className="site-header">
        <div className="demo-notice">
          <strong>Wersja demonstracyjna</strong>
          <span className="demo-authors">
            Bohdan Mykytenko i Marian Poliakov
          </span>
        </div>
        <div className="header wrap">
          <a href="/" aria-label="Winterwarm, strona główna">
            <img className="logo" src={data.assets.logo} alt="Winterwarm" />
          </a>
          <nav
            className={"nav" + (menu ? " open" : "")}
            id="navigation"
            aria-label="Nawigacja główna"
          >
            {nav.map(([u, n]) => (
              <a
                key={u}
                href={u}
                aria-current={u === "/" + slug ? "page" : undefined}
              >
                {n}
              </a>
            ))}
            <a className="btn menu-brief" href="/projekt">
              Zacznij projekt ↗
            </a>
          </nav>
          <div className="header-actions">
            <button
              className="search-open"
              aria-label="Szukaj w serwisie"
              title="Szukaj"
              onClick={(e) => open(search, e.currentTarget)}
            >
              <svg
                viewBox="0 0 24 24"
                width="23"
                height="23"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                aria-hidden="true"
              >
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="m16 16 5 5" />
              </svg>
            </button>
            <a className="header-contact" href="/projekt">
              Zacznij projekt<span aria-hidden="true">↗</span>
            </a>
            <button
              ref={menuButton}
              className="mobile-menu"
              aria-controls="navigation"
              aria-expanded={menu}
              onClick={() => setMenu(!menu)}
            >
              {menu ? "Zamknij −" : "Menu +"}
            </button>
          </div>
        </div>
      </header>
      <dialog
        ref={search}
        className="search-dialog"
        id="site-search"
        aria-labelledby="search-title"
        onKeyDownCapture={(e) => {
          if (e.key === "Escape") {
            e.preventDefault();
            e.stopPropagation();
            search.current?.close();
          }
        }}
        onClose={closed}
        onClick={(e) => {
          if (e.target === search.current) {
            const r = search.current.getBoundingClientRect();
            if (
              e.clientX < r.left ||
              e.clientX > r.right ||
              e.clientY < r.top ||
              e.clientY > r.bottom
            )
              search.current.close();
          }
        }}
      >
        <div className="dialog-head">
          <h2 id="search-title">Czego szukasz?</h2>
          <button
            className="dialog-close"
            aria-label="Zamknij wyszukiwanie"
            onClick={() => search.current?.close()}
          >
            ×
          </button>
        </div>
        <form role="search" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="site-query">
            Wpisz nazwę produktu, obszar lub temat
          </label>
          <input
            id="site-query"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Np. ogrzewanie, Skyline, kontakt"
            autoComplete="off"
          />
        </form>
        <p role="status">
          {query
            ? found.length
              ? "Znaleziono: " + found.length
              : "Brak wyników. Spróbuj krótszej nazwy lub przejdź do kontaktu."
            : "Popularne miejsca w serwisie"}
        </p>
        <div id="search-results">
          {found.map((s) => (
            <a
              className="search-result"
              key={s.name + "|" + s.url}
              href={s.url}
            >
              <strong>{s.name}</strong>
              <p>{s.description}</p>
            </a>
          ))}
        </div>
      </dialog>
      <dialog
        ref={privacy}
        className="search-dialog"
        id="privacy-dialog"
        aria-labelledby="privacy-title"
        onKeyDownCapture={(e) => {
          if (e.key === "Escape") {
            e.preventDefault();
            e.stopPropagation();
            privacy.current?.close();
          }
        }}
        onClose={closed}
      >
        <div className="dialog-head">
          <h2 id="privacy-title">Twoje dane.</h2>
          <button
            className="dialog-close"
            aria-label="Zamknij informację"
            onClick={() => privacy.current?.close()}
          >
            ×
          </button>
        </div>
        <p>
          Dane briefu pozostają w pamięci karty do chwili wysłania. „Wyślij
          zapytanie” przekazuje dane przez serwer i usługę Resend do zespołu.
          Cloudflare Turnstile i licznik antyspamowy chronią formularz.
        </p>
        <p>
          „Otwórz e-mail” przekazuje przygotowaną wiadomość do Twojej aplikacji
          pocztowej. Dopiero Ty decydujesz o wysłaniu. „Pobierz brief” tworzy
          plik tekstowy na Twoim urządzeniu.
        </p>
        <a className="link" href="/prywatnosc">
          Pełna informacja o prywatności ↗
        </a>
      </dialog>
      <button
        className="privacy-trigger"
        onClick={(e) => open(privacy, e.currentTarget)}
        aria-label="Informacja o prywatności formularza"
      >
        Prywatność
      </button>
    </>
  );
}
export function Motion() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.1 },
    );
    document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el, i) => {
      el.style.animationDelay = (i % 3) * 65 + "ms";
      observer.observe(el);
    });
    const image = document.querySelector<HTMLElement>(".product-image");
    let frame = 0;
    const move = (e: PointerEvent) => {
      if (!image) return;
      const r = image.getBoundingClientRect();
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        image.style.setProperty(
          "--ry",
          ((e.clientX - r.left) / r.width - 0.5) * 12 + "deg",
        );
        image.style.setProperty(
          "--rx",
          -((e.clientY - r.top) / r.height - 0.5) * 9 + "deg",
        );
      });
    };
    const leave = () => {
      image?.style.setProperty("--ry", "0deg");
      image?.style.setProperty("--rx", "0deg");
    };
    if (matchMedia("(pointer:fine)").matches) {
      image?.addEventListener("pointermove", move);
      image?.addEventListener("pointerleave", leave);
    }
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      image?.removeEventListener("pointermove", move);
      image?.removeEventListener("pointerleave", leave);
    };
  }, []);
  return null;
}
