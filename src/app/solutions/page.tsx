"use client";


import SmallWidth from "@/components/layouts/SmallWidth";
import Lead from "@/components/typography/Lead";
import TeasersSolution from "./TeasersSolution";
import ReferenzenCarousel from "../../components/sections/ReferenzenCarousel";
import HeroText from "@/components/sections/HeroText";
import SubHero from "@/components/sections/SubHero";

export default function Solutions() {
  return (
    <>
      <SubHero imageUrl="/subhero.jpg"></SubHero>
      <HeroText
        // breadcrumbs={[
        //   { text: "Lösungen", link: "/page" },
        //   { text: "Schienenfahrzeuge", link: "/schienenfahrzeuge" },
        //   { text: "Product", link: "/product" },
        // ]}
        title="Lorem ipsum dolor sit amet"
        // leadText="Your lead text here."
        // withCTA={true}
        // buttonText="CTA Button"
      />
      <SmallWidth>
        <Lead>
          Für Stadler endet Kundennähe nicht mit der Auslieferung der Züge.
          Unsere Mitarbeitenden stehen unseren Kunden als Servicepartner rund um
          die Uhr mit Rat und Tat zur Seite, um höchste Qualität zu garantieren.
          Dadurch gewährleisten wir die Zuverlässigkeit und Verfügbarkeit
          unserer Schienenfahrzeuge über die gesamte Lebensdauer.
        </Lead>
      </SmallWidth>
      <TeasersSolution />
      <ReferenzenCarousel />
    </>
  );
}
