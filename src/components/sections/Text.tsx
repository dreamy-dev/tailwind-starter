import Lead from "@/components/typography/Lead";
import SmallWidth from "../layouts/SmallWidth";

export default function Text(props?: any) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <SmallWidth>
        <Lead>
          Der einstöckige Intercity- und Regionalzug fährt mit einer maximalen
          Geschwindigkeit von 160 km/h. Mit durchdachte Ingenieursleistung und
          Innovation passt sich der FLIRT 160 den spezifischen Anforderungen und
          Bedingungen von jedem Projekt. Die modulare Bauweise erlaubt
          individuell konfigurierbare zwei- bis sechsstellige Zugskompositionen
          in Normal- und Breitspur, und bietet Flexibilität bei der Wahl
          zwischen elektrischem, Diesel- oder sogar bi-modalem Antrieb.
        </Lead>
      </SmallWidth>
    </section>
  );
}
