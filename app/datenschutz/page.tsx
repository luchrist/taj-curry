import { LegalLayout } from "@/components/LegalLayout";
import config from "@/config/restaurant";

export default function DatenschutzPage() {
  return (
    <LegalLayout title="Datenschutzerklärung">
      <h2>1. Verantwortlicher</h2>
      <p>
        {config.name}<br />
        {config.legal.ownerName && (<>{config.legal.ownerName}<br /></>)}
        {config.address.street}<br />
        {config.address.city}<br />
        Telefon: {config.contact.phone}
        {config.contact.email && (<><br />E-Mail: {config.contact.email}</>)}
      </p>

      <h2>2. Erhebung und Speicherung personenbezogener Daten</h2>
      <p>
        Beim Besuch unserer Website werden automatisch Informationen allgemeiner Natur erfasst
        (Server-Logfiles). Diese umfassen den Browsertyp, das verwendete Betriebssystem,
        den Referrer-URL, die IP-Adresse des zugreifenden Rechners sowie die Uhrzeit der
        Serveranfrage. Diese Daten sind nicht bestimmten Personen zuordenbar und werden
        nach 14 Tagen gelöscht.
      </p>

      <h2>3. Reservierungsformular</h2>
      <p>
        Wenn Sie unser Reservierungsformular nutzen, erheben wir die folgenden Daten:
        Name, E-Mail-Adresse, Telefonnummer, gewünschtes Datum, Uhrzeit, Personenzahl
        und optional eine Nachricht. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
        (Vertragserfüllung). Die Daten werden ausschließlich zur Bearbeitung Ihrer
        Reservierung verwendet und nach 30 Tagen gelöscht.
      </p>

      <h2>4. Ihre Rechte</h2>
      <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Recht auf Widerspruch (Art. 21 DSGVO)</li>
      </ul>

      <h2>5. Cookies</h2>
      <p>
        Diese Website verwendet keine Cookies und keine Tracking-Dienste.
        Es werden keine Analyse-Tools eingesetzt.
      </p>

      <h2>6. Aktualität und Änderung dieser Datenschutzerklärung</h2>
      <p>
        Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Januar 2026.
        Durch die Weiterentwicklung unserer Website kann es notwendig werden, diese
        Datenschutzerklärung zu ändern.
      </p>
    </LegalLayout>
  );
}
