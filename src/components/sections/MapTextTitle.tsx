import H2 from "@/components/typography/H2";
import Text from "@/components/typography/Text";
import SmallWidth from "../layouts/SmallWidth";

export default function MapTextTitle(props?: any) {
  return (
    <section className="bg-white  dark:bg-gray-900 ">
      <SmallWidth>
        <div className="max-w-4xl mx-auto">
          <H2 styles="text-center">Standorte</H2>

          <Text styles="my-6 text-xl break-words">
            Diese Karte bietet Ihnen einen Überblick über unsere{" "}
            <strong>
              7 Produktionsorte, 5 Signalling-Kompetenzcenter, 7
              Komponentenwerke, über 80 Service-Standorte.
            </strong>
            An diesen Orten setzen wir uns mit unserer Expertise und viel
            Innovation für nachhaltige Mobilität ein und gestalten die Zukunft
            der Mobilität aktiv mit.
          </Text>
        </div>
      </SmallWidth>
    </section>
  );
}
