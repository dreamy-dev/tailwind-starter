import ButtonPrimary from "@/components/elements/ButtonPrimary";
import SmallWidth from "@/components/layouts/SmallWidth";
import H1 from "@/components/typography/H1";
import Lead from "@/components/typography/Lead";

export default function HeroText(props?: any) {
  return (
    <section className="bg-white dark:bg-gray-900 pb-10">
      <SmallWidth>
        <div className="mt-24 flex font-normal text-gray-600">
          <p>Lösungen</p>
          <span className="px-3">|</span>
          <p>Schienenfahrzeuge</p>
        </div>
        <H1>
          Unsere Lieferanten:
          <br />
          Ein exzellentes Netzwerk
        </H1>
        <Lead>
          Der Flirt 160 setzt Massstäbe: Leichte Bauweise aus Aluminium,
          markantes Design, höchster Passagierkomfort und einfache Wartung.
          Erfahren Sie, was dieses Modell so unverwechselbar macht.
        </Lead>
        {props.withCTA ? <ButtonPrimary position="left" /> : ""}
      </SmallWidth>
    </section>
  );
}
