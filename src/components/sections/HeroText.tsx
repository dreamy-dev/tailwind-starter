import ButtonPrimary from "@/components/elements/ButtonPrimary";
import SmallWidth from "@/components/layouts/SmallWidth";
import H1 from "@/components/typography/H1";
import Lead from "@/components/typography/Lead";

export default function HeroText(props?: any) {
  return (
    <section className="bg-white dark:bg-gray-900">
      <SmallWidth>
        <div className="mt-24 flex font-normal text-gray-500">
          <p>Lösungen</p>
          <span className="px-3">|</span>
          <p>Schienenfahrzeuge</p>
        </div>
        <H1>
          Unsere Lieferanten:
          <br />
          Ein exzellentes Netzwerk
        </H1>
        <Lead />
        {props.withCTA ? <ButtonPrimary /> : ""}
      </SmallWidth>
    </section>
  );
}
