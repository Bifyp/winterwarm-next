export default function Content() {
  return (
    <>
      <section className="wrap catalog-intro" id="demo-contact">
        <h1 data-reveal>Lorem ipsum.</h1>
        <p data-reveal>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a className="btn" href="/projekt">
          Otwórz brief demonstracyjny ↗
        </a>
      </section>
      <section className="wrap contact-directory">
        {["Sekcja 01", "Sekcja 02", "Sekcja 03"].map((name) => (
          <article data-reveal key={name}>
            <h2>{name}</h2>
            <div>
              <p className="contact-tel">Lorem ipsum.</p>
              <p>demo@example.com</p>
              <p>Adres przykładowy — nie jest kontaktem do firmy.</p>
            </div>
          </article>
        ))}
      </section>
      <section className="wrap section locations">
        <div className="section-head">
          <h2 data-reveal>Dolor sit amet.</h2>
          <p data-reveal>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="locations-grid">
          {["Lorem ipsum.", "Dolor sit amet."].map((name) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Consectetur adipiscing elit.</p>
              <p>Dane lokalizacji są wyłącznie przykładowe.</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
