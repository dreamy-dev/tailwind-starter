import SmallWidth from "@/components/layouts/SmallWidth";
import Text from "../typography/Text";

export default function TextSection(props?: any, children?: any) {
  return (
    <section className="bg-white dark:bg-gray-900 pb-24">
      <SmallWidth>
        <Text>
          Der einstöckige Intercity- und Regionalzug fährt mit einer maximalen
          Geschwindigkeit von 160 km/h. Mit durchdachte Ingenieursleistung und
          Innovation passt sich der FLIRT 160 den spezifischen Anforderungen und
          Bedingungen von jedem Projekt. Die modulare Bauweise erlaubt
          individuell konfigurierbare zwei- bis sechsstellige Zugskompositionen
          in Normal- und Breitspur, und bietet Flexibilität bei der Wahl
          zwischen elektrischem, Diesel- oder sogar bi-modalem Antrieb.
        </Text>
      </SmallWidth>
    </section>
  );
}
