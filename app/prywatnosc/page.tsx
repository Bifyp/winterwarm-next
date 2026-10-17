import Frame from "@/components/frame";
import { indexable } from "@/lib/site";
export const metadata = {
  title: "Prywatność formularza",
  robots: { index: indexable, follow: indexable },
  alternates: { canonical: "/prywatnosc" },
};
export default function Page() {
  return (
    <Frame slug="prywatnosc">
      <article className="privacy-copy">
        <h1>Twoje dane.</h1>
        <p>
          Ta informacja opisuje działanie formularza zapytania w tym serwisie.
          Kontakt w sprawie danych:{" "}
          <a href="mailto:winterwarm@winterwarm.pl">winterwarm@winterwarm.pl</a>
          .
        </p>
        <h2>Co przekazujesz</h2>
        <p>
          Imię i firmę, e-mail oraz podane informacje o inwestycji przetwarzamy,
          aby odpowiedzieć na zapytanie. Nie podawaj danych wrażliwych ani
          informacji, których nie potrzebujemy do pierwszej rozmowy.
        </p>
        <h2>Jak działa wysyłka</h2>
        <p>
          Przed wysłaniem dane są przechowywane jedynie w pamięci karty
          przeglądarki. Gdy wybierasz „Wyślij zapytanie”, serwer Vercel
          przekazuje treść usłudze pocztowej Resend i odbiorcy z zespołu
          Winterwarm. Dane stają się częścią korespondencji e-mail. Komunikat o
          przyjęciu potwierdza przyjęcie przez serwer pocztowy, nie odczyt ani
          dostarczenie do skrzynki.
        </p>
        <p>
          Jeżeli wysyłka nie jest skonfigurowana, możesz przygotować e-mail w
          swojej aplikacji lub pobrać brief. Sam podgląd nie przesyła danych z
          formularza na nasz serwer.
        </p>
        <h2>Ochrona przed spamem</h2>
        <p>
          Aktywny formularz używa Cloudflare Turnstile. Usługa weryfikuje
          żądanie i może przetwarzać dane techniczne urządzenia. W Upstash
          zapisujemy wyłącznie krótkotrwały licznik prób przypisany do skrótu
          HMAC adresu IP; licznik wygasa po 10 minutach. Nie zapisujemy tam
          treści wiadomości ani jawnego adresu IP. Operator hostingu może
          prowadzić własne logi techniczne.
        </p>
        <h2>Cookies i inne serwisy</h2>
        <p>
          Ten kod nie zawiera narzędzi reklamowych ani analitycznych i nie
          zapisuje formularza w cookies lub localStorage. Linki do map i
          katalogów prowadzą do zewnętrznych serwisów, które stosują własne
          zasady prywatności.
        </p>
        <h2>Kontakt i prawa</h2>
        <p>
          W sprawach dostępu do danych, sprostowania, usunięcia lub ograniczenia
          przetwarzania skontaktuj się pod adresem powyżej. Szczegóły
          administratora, podstaw prawnych, okresu przechowywania korespondencji
          i transferów danych należy potwierdzić w zatwierdzonej polityce
          Winterwarm przed uruchomieniem formularza.
        </p>
      </article>
    </Frame>
  );
}
