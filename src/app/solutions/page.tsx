"use client";

import Hero from "@/components/ExampleHero";
import SmallWidth from "@/components/layouts/SmallWidth";
import Lead from "@/components/typography/Lead";
import HeroSolutions from "./Hero";
import TeasersSolution from "./TeasersSolution";
import ReferenzenCarousel from "../../components/ReferenzenCarousel";

export default function Solutions() {
  return (
    <>
      <Hero />
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
