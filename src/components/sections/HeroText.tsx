import ButtonPrimary from "@/components/elements/ButtonPrimary";
import SmallWidth from "@/components/layouts/SmallWidth";
import H1 from "@/components/typography/H1";
import Lead from "@/components/typography/Lead";
import { Children } from "react";

export default function HeroText(props?: any) {
  return (
    <section className="bg-white dark:bg-gray-900 py-12 mb-12">
      <SmallWidth>
        <div className="mt-24 flex font-normal text-gray-600">
          {props.solution ? (
            <><p>Lösungen</p><span className="px-3">|</span></>
          ) : ''}
          <p>{props.category}</p>
        </div>
        <H1>{props.title}</H1>
        <Lead>{props.leadText}</Lead>
        {props.withCTA ? <ButtonPrimary position="left" /> : ""}
      </SmallWidth>
    </section>
  );
}
