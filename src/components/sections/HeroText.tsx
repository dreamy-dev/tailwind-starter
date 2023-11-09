import ButtonPrimary from "@/components/elements/ButtonPrimary";
import SmallWidth from "@/components/layouts/SmallWidth";
import H1 from "@/components/typography/H1";
import Lead from "@/components/typography/Lead";

export default function HeroText(props?: any) {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 mb-12">
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
          Stadler sucht Zulieferer, die mit Innovationskraft, Zuverlässigkeit
          und hohem Qualitätsanspruch die Schienenmobilität der Zukunft
          mitgestalten.
        </Lead>
        {props.withCTA ? <ButtonPrimary position="left" /> : ""}
      </SmallWidth>
    </section>
  );
}
