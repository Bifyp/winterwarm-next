import Frame from "@/components/frame";
export const metadata = {
  title: "Prywatność demonstracji",
  robots: { index: false, follow: false },
  alternates: { canonical: "/prywatnosc" },
};
export default function Page() {
  return (
    <Frame slug="prywatnosc">
      <article className="privacy-copy">
        <h1>Prywatność demonstracji.</h1>
        <p>
          To szablon demonstracyjny, nie strona rzeczywistej firmy. Nie wpisuj
          prawdziwych danych osobowych ani informacji poufnych.
        </p>
        <h2>Formularz przykładowy</h2>
        <p>
          Wysyłka przez serwer jest wyłączona. Dane wpisane do formularza
          pozostają w pamięci otwartej karty przeglądarki. Podgląd nie wysyła
          ich do firmy ani do usługi pocztowej.
        </p>
        <h2>Podgląd, plik i e-mail</h2>
        <p>
          Możesz przygotować podgląd lub pobrać brief na urządzenie. Link
          „Otwórz e-mail” może otworzyć aplikację pocztową z przykładowym
          adresem demo@example.com. To nie jest kontakt do autorów ani firmy;
          nie wysyłaj tam wiadomości.
        </p>
        <h2>Przechowywanie i hosting</h2>
        <p>
          Kod formularza nie zapisuje treści w cookies ani localStorage. Hosting
          może prowadzić własne logi techniczne. Kod szablonu nie zawiera
          narzędzi reklamowych ani analitycznych.
        </p>
        <h2>Materiały demonstracyjne</h2>
        <p>
          Teksty Lorem ipsum, nazwy produktów, tabele i kontakty są przykładowe.
          Ilustracje zostały wygenerowane przy użyciu AI. Przed użyciem szablonu
          jako prawdziwej strony należy przygotować własne treści, dane
          kontaktowe i właściwą politykę prywatności.
        </p>
      </article>
    </Frame>
  );
}
