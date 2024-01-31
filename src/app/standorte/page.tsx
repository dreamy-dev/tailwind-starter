"use client";

import ContentWidth from "@/components/layouts/ContentWidth";
import HeroText from "@/components/sections/HeroText";
import StandorteAccordion from "./StandorteAccordion";
import StandorteFilters from "./StandorteFilters";

export default function Standorte() {
  return (
    <div>
      <HeroText
        breadcrumbs={[{ text: "Unternehmen", link: "/unternehmen" }]}
        title="Weltweit für Sie da"
        leadText="Sie sind am Zug: Entdecken Sie alle Standorte und Divisionen von Stadler auf einen Blick. Senden Sie uns eine Nachricht oder rufen Sie uns einfach an – wir freuen uns, von Ihnen zu hören."
        // withCTA={true}
        // buttonText="CTA Button"
      />

      <ContentWidth>
   
        <div className="col-span-12">
          <StandorteFilters />
        </div>
        <div className="col-span-12 pb-8">
          <StandorteAccordion />
        </div>
      </ContentWidth>
    </div>
  );
}
