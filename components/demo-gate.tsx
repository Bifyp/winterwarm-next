"use client";

import { useEffect, useRef } from "react";

export default function DemoGate() {
  const dialog = useRef<HTMLDialogElement>(null);
  const previousOverflow = useRef("");

  useEffect(() => {
    const el = dialog.current;
    if (!el) return;
    const open = () => {
      if (el.open) return;
      previousOverflow.current = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";
      el.showModal();
      el.querySelector<HTMLElement>("#demo-gate-title")?.focus({
        preventScroll: true,
      });
      el.scrollTop = 0;
    };
    const restore = (event: PageTransitionEvent) => {
      if (event.persisted) open();
    };
    open();
    // Returning with the browser Back button is a new visit too.
    window.addEventListener("pageshow", restore);
    return () => {
      window.removeEventListener("pageshow", restore);
      document.documentElement.style.overflow = previousOverflow.current;
      if (el.open) el.close();
    };
  }, []);

  return (
    <dialog
      ref={dialog}
      id="demo-gate"
      className="demo-gate"
      aria-labelledby="demo-gate-title"
      aria-describedby="demo-gate-description"
      onCancel={(event) => event.preventDefault()}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const controls = [
          ...event.currentTarget.querySelectorAll<HTMLElement>(
            "a[href],button",
          ),
        ];
        const first = controls[0];
        const last = controls.at(-1);
        if (
          event.shiftKey &&
          (document.activeElement === first ||
            document.activeElement?.id === "demo-gate-title")
        ) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
      onClose={() => {
        document.documentElement.style.overflow = previousOverflow.current;
        const main = document.querySelector<HTMLElement>("main");
        if (main) {
          main.tabIndex = -1;
          main.focus({ preventScroll: true });
        }
      }}
    >
      <div className="demo-gate-content">
        <p className="demo-gate-eyebrow">Informacja przed wejściem</p>
        <h2 id="demo-gate-title" tabIndex={-1}>
          To jest wersja demonstracyjna.
        </h2>
        <p className="demo-gate-authors">
          Projekt demonstracyjny: <strong>Bohdan Mykytenko</strong> i{" "}
          <strong>Marian Poliakov</strong>.
        </p>
        <p id="demo-gate-description" className="demo-gate-intro">
          Ta strona powstała w celach prezentacyjnych. Nie jest oficjalnym
          serwisem Winterwarm Polska ani ofertą handlową.
        </p>
        <section
          className="demo-gate-warnings"
          aria-labelledby="demo-gate-warnings-title"
        >
          <h3 id="demo-gate-warnings-title">Ważne przed rozpoczęciem</h3>
          <ul>
            <li>
              Nie wpisuj prawdziwych danych osobowych ani informacji poufnych.
            </li>
            <li>
              Przygotowanie lub pobranie briefu nie wysyła zapytania. Link
              e-mail może otworzyć Twoją aplikację pocztową — o wysłaniu
              wiadomości decydujesz samodzielnie.
            </li>
            <li>
              Produkty, parametry techniczne i dane kontaktowe należy
              potwierdzić w oficjalnym serwisie firmy. Strona nie obsługuje
              zakupów ani płatności.
            </li>
          </ul>
        </section>
        <p className="demo-gate-source">
          Ilustracje wygenerowane przy użyciu AI. Nie przedstawiają
          rzeczywistych produktów, zespołu ani realizacji firmy.
        </p>
        <div className="demo-gate-actions">
          <button className="btn" onClick={() => dialog.current?.close()}>
            Rozumiem — przejdź do demonstracji <span aria-hidden="true">↗</span>
          </button>
          <p>To ostrzeżenie pojawia się przy każdym otwarciu strony.</p>
        </div>
      </div>
    </dialog>
  );
}
