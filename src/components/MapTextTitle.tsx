import H2 from "@/components/typography/H2";
import Lead from "@/components/typography/Lead";

export default function MapTextTitle(props?: any) {
  return (
    <section className="bg-bgcLightBlue  dark:bg-gray-900 ">
      <div className="max-w-4xl mx-auto">
        <H2 titleH2="Standorte" styles="text-center"></H2>
        <Lead textSize="text-2xl">
          Diese Karte bietet Ihnen einen Überblick über unsere{" "}
          <strong>
            7 Produktionsorte, 5 Signalling-Kompetenzcenter, 7 Komponentenwerke,
            über 80 Service-Standorte.
          </strong>{" "}
          An diesen Orten setzen wir uns mit unserer Expertise und viel
          Innovation für nachhaltige Mobilität ein und gestalten die Zukunft der
          Mobilität aktiv mit.
        </Lead>
      </div>
    </section>
  );
}
