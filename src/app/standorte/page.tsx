"use client";

import ContentWidth from "@/components/layouts/ContentWidth";
import HeroText from "@/components/sections/HeroText";
import StandorteAccordion from "./StandorteAccordion";
import StandorteFilters from "./StandorteFilters";

export default function Standorte() {
  return (
    <div>
      <HeroText
        category="Standorte"
        title="Weltweit für Sie da"
        leadText="Sie sind am Zug: Entdecken Sie alle Standorte und Divisionen von Stadler auf einen Blick. Senden Sie uns eine Nachricht oder rufen Sie uns einfach an – wir freuen uns, von Ihnen zu hören."
      />
      <ContentWidth>
        <div className="col-span-12 py-8">
        </div>
        <div className="col-span-12 pt-8">
          <StandorteFilters />
        </div>
        <div className="col-span-12 pb-8">
          <StandorteAccordion />
        </div>
      </ContentWidth>
    </div>
  );
}
