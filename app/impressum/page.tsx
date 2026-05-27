import { LegalLayout } from "@/components/LegalLayout";
import config from "@/config/restaurant";

export default function ImpressumPage() {
  return (
    <LegalLayout title="Impressum">
      <h2>Angaben gemäß § 5 TMG</h2>
      <p>
        {config.name}<br />
        {config.legal.ownerName && (<>{config.legal.ownerName}<br /></>)}
        {config.address.street}<br />
        {config.address.city}
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: {config.contact.phone}<br />
        {config.contact.email && (<>E-Mail: {config.contact.email}</>)}
      </p>

      {config.legal.responsiblePerson && (
        <>
          <h2>Vertreten durch</h2>
          <p>{config.legal.responsiblePerson}</p>
        </>
      )}

      {config.legal.vatId && (
        <>
          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
            {config.legal.vatId}
          </p>
        </>
      )}

      <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
      <p>
        {config.legal.responsiblePerson || config.legal.ownerName || config.name}<br />
        {config.address.street}<br />
        {config.address.city}
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die
        Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich
        deren Betreiber verantwortlich.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
        unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
        Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
        bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
      </p>

      <h2>Technische Umsetzung</h2>
      <p>
        Konzeption, Design und Entwicklung dieser Webseite:{" "}
        <a
          href="mailto:hey@apointa.org"
          className="font-medium text-ink underline decoration-ink/40 underline-offset-4 transition-colors hover:text-sakura-600 hover:decoration-sakura-600"
        >
          Luca Christ
        </a>
        {" · "}
        <a
          href="mailto:hey@apointa.org"
          className="font-medium text-ink underline decoration-ink/40 underline-offset-4 transition-colors hover:text-sakura-600 hover:decoration-sakura-600"
        >
          hey@apointa.org
        </a>
      </p>
    </LegalLayout>
  );
}
