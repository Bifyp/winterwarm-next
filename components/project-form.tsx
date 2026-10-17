"use client";
import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { briefText, needs, objects, stages } from "@/lib/contact-schema";
declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, options: Record<string, unknown>) => string;
      reset: (id: string) => void;
      remove: (id: string) => void;
    };
  }
}
export default function ProjectForm({ configured }: { configured: boolean }) {
  const f = useRef<HTMLFormElement>(null),
    widget = useRef<HTMLDivElement>(null),
    widgetId = useRef<string | undefined>(undefined),
    result = useRef<HTMLHeadingElement>(null),
    requestId = useRef("");
  const [token, setToken] = useState(""),
    [ready, setReady] = useState(false),
    [busy, setBusy] = useState(false),
    [message, setMessage] = useState(""),
    [success, setSuccess] = useState(false),
    [prepared, setPrepared] = useState(""),
    [recipient, setRecipient] = useState("winterwarm@winterwarm.pl");
  useEffect(() => {
    const p = new URLSearchParams(location.search);
    const need = f.current?.querySelector<HTMLInputElement>(
      `input[name=need][value="${CSS.escape(p.get("obszar") || "")}"]`,
    );
    if (need) need.checked = true;
    const type = p.get("typ");
    const el = f.current?.elements.namedItem("object") as HTMLSelectElement;
    if (type && el) {
      const match = objects.find((o) =>
        o.toLowerCase().includes(type.split(" ")[0].toLowerCase()),
      );
      if (match) el.value = match;
    }
  }, []);
  useEffect(() => {
    if (!ready || !configured || !widget.current || !window.turnstile) return;
    widgetId.current = window.turnstile.render(widget.current, {
      sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
      action: "contact",
      callback: (t: string) => setToken(t),
      "expired-callback": () => setToken(""),
      "error-callback": () => setToken(""),
    });
    return () => {
      if (widgetId.current) window.turnstile?.remove(widgetId.current);
    };
  }, [ready, configured]);
  function values() {
    const fd = new FormData(f.current!);
    const val = (n: string) => String(fd.get(n) || "").trim();
    return {
      needs: fd.getAll("need").map(String),
      object: val("object"),
      stage: val("stage"),
      area: val("area"),
      location: val("location"),
      details: val("details"),
      name: val("name"),
      email: val("email"),
    };
  }
  function prepare() {
    setMessage("");
    const v = values();
    if (!v.needs.length) {
      setMessage("Wybierz przynajmniej jeden obszar.");
      f.current?.querySelector<HTMLInputElement>("input[name=need]")?.focus();
      return;
    }
    const email =
      v.needs.length === 1
        ? {
            HVAC: "hvac@winterwarm.pl",
            Dostęp: "bramy@winterwarm.pl",
            LED: "winled@winterwarm.pl",
          }[v.needs[0]] || "winterwarm@winterwarm.pl"
        : "winterwarm@winterwarm.pl";
    setPrepared(briefText(v));
    setRecipient(email);
    setTimeout(() => {
      result.current?.focus();
      result.current?.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      });
    }, 0);
  }
  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setSuccess(false);
    setMessage("");
    const v = values();
    if (!v.needs.length) {
      setMessage("Wybierz przynajmniej jeden obszar.");
      return;
    }
    if (!configured) {
      prepare();
      return;
    }
    if (!token) {
      setMessage("Potwierdź weryfikację antyspamową.");
      return;
    }
    setBusy(true);
    requestId.current ||= crypto.randomUUID();
    try {
      const fd = new FormData(f.current!);
      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...v,
          consent: fd.get("consent") === "on",
          website: fd.get("website") || "",
          token,
          requestId: requestId.current,
        }),
        signal: AbortSignal.timeout(25000),
      });
      const payload = await r.json();
      setMessage(payload.message || "Nie udało się potwierdzić wysyłki.");
      setSuccess(r.ok);
      if (r.ok) {
        f.current?.reset();
        setPrepared("");
        requestId.current = "";
      }
    } catch {
      setMessage(
        "Nie udało się potwierdzić wysyłki. Spróbuj ponownie lub przygotuj e-mail.",
      );
    } finally {
      setBusy(false);
      setToken("");
      if (widgetId.current) window.turnstile?.reset(widgetId.current);
    }
  }
  return (
    <form
      ref={f}
      id="project-form"
      className="project-form"
      onSubmit={submit}
      onChange={() => {
        setPrepared("");
        setSuccess(false);
        setMessage("");
        requestId.current = "";
      }}
      aria-busy={busy}
    >
      <fieldset disabled={busy}>
        <legend>Czego potrzebujesz?</legend>
        <p>Wybierz co najmniej jeden obszar.</p>
        <div className="choices">
          {needs.map((n, i) => (
            <label className="choice" key={n}>
              <input type="checkbox" name="need" value={n} />
              {
                [
                  "Klimat i powietrze",
                  "Drzwi, bramy i doki",
                  "Oświetlenie LED",
                  "Potrzebuję doradztwa",
                ][i]
              }
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset disabled={busy}>
        <legend>Twój obiekt</legend>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="project-object">Rodzaj obiektu</label>
            <select id="project-object" name="object">
              {objects.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="project-stage">Etap inwestycji</label>
            <select id="project-stage" name="stage">
              {stages.map((n) => (
                <option key={n}>{n}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <label htmlFor="project-area">Powierzchnia, m² (opcjonalnie)</label>
            <input
              type="number"
              id="project-area"
              name="area"
              min="1"
              max="10000000"
              placeholder="Np. 1500"
            />
          </div>
          <div className="field">
            <label htmlFor="project-location">Miejscowość (opcjonalnie)</label>
            <input
              id="project-location"
              name="location"
              maxLength={100}
              autoComplete="address-level2"
              placeholder="Gdzie jest inwestycja?"
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="project-details">Co jest ważne? (opcjonalnie)</label>
          <textarea
            id="project-details"
            name="details"
            maxLength={3000}
            rows={4}
            placeholder="Wysokość hali, obecna instalacja, sposób użytkowania, wymagania projektu…"
          />
        </div>
      </fieldset>
      <fieldset disabled={busy}>
        <legend>Kontakt do Ciebie</legend>
        <p>
          {configured
            ? "Imię i e-mail są wymagane do odpowiedzi."
            : "Wysyłka z formularza nie jest jeszcze dostępna. Przygotuj e-mail lub skontaktuj się telefonicznie. Dane kontaktowe możesz uzupełnić w swojej poczcie."}
        </p>
        <div className="form-grid">
          <div className="field">
            <label htmlFor="project-name">Imię i firma</label>
            <input
              id="project-name"
              name="name"
              autoComplete="name"
              maxLength={150}
              minLength={2}
              required={configured}
            />
          </div>
          <div className="field">
            <label htmlFor="project-email">E-mail</label>
            <input
              id="project-email"
              name="email"
              type="email"
              autoComplete="email"
              maxLength={200}
              required={configured}
            />
          </div>
        </div>
      </fieldset>
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="website">Nie wypełniaj tego pola</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      {configured && (
        <>
          <label className="consent-label">
            <input type="checkbox" name="consent" required />
            Zapoznałem/am się z informacją o prywatności i proszę o kontakt w
            sprawie zapytania.
          </label>
          <a className="link" href="/prywatnosc">
            Informacja o prywatności ↗
          </a>
          <div ref={widget} />
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
            onReady={() => setReady(true)}
            onError={() =>
              setMessage(
                "Weryfikacja nie jest dostępna. Skorzystaj z e-maila lub telefonu.",
              )
            }
            strategy="afterInteractive"
          />
        </>
      )}
      {message && (
        <p
          id="project-error"
          className={"form-status" + (success ? "" : " error")}
          role={success ? "status" : "alert"}
        >
          {message}
        </p>
      )}
      <div className="result-actions">
        <button className="btn" type="submit" disabled={busy}>
          {busy
            ? "Wysyłanie…"
            : configured
              ? "Wyślij zapytanie ↗"
              : "Przygotuj wiadomość ↗"}
        </button>
        {configured && (
          <button
            className="btn light"
            type="button"
            disabled={busy}
            onClick={prepare}
          >
            Przygotuj e-mail
          </button>
        )}
      </div>
      <p className="source-note">
        Nie zapisujemy treści formularza w cookies ani localStorage.
        Alternatywnie <a href="/kontakt">zadzwoń do zespołu</a>.
      </p>
      {prepared && (
        <section
          className="project-result"
          id="project-result"
          aria-labelledby="result-title"
        >
          <h2 ref={result} id="result-title" tabIndex={-1}>
            Gotowe do rozmowy.
          </h2>
          <p>Odbiorca: {recipient}</p>
          <pre id="project-summary">{prepared}</pre>
          <div className="result-actions">
            <a
              className="btn"
              id="project-send"
              href={
                "mailto:" +
                recipient +
                "?subject=" +
                encodeURIComponent("Zapytanie o inwestycję | Winterwarm") +
                "&body=" +
                encodeURIComponent(prepared)
              }
            >
              Otwórz e-mail ↗
            </a>
            <button
              type="button"
              className="btn light"
              onClick={() => {
                const u = URL.createObjectURL(
                  new Blob(["\ufeff" + prepared], {
                    type: "text/plain;charset=utf-8",
                  }),
                );
                const a = document.createElement("a");
                a.href = u;
                a.download = "Winterwarm-brief.txt";
                a.click();
                setTimeout(() => URL.revokeObjectURL(u), 2000);
              }}
            >
              Pobierz brief .txt
            </button>
          </div>
          <p className="source-note">
            Ten podgląd nie wysyła wiadomości. Otwórz swoją pocztę lub pobierz
            tekst.
          </p>
        </section>
      )}
    </form>
  );
}
