"use client";

import CooperationInfo from "./CooperationInfo";
import CooperationBecome from "./CooperationBecome";
import HeroText from "@/components/sections/HeroText";
import TeaserGeneral from "@/components/sections/TeaserGeneral";
import ContentWidth from "@/components/layouts/ContentWidth";

export default function Cooperation() {
  return (
    <>
  
      <ContentWidth>
        <div className="col-span-12">
        
          <HeroText title="Lieferanten-Netzwerk: Werden Sie unser Partner!"></HeroText>
          <TeaserGeneral
            title="Unsere Geschäftsbedingungen"
            customText="“Hier können Sie unsere Geschäftsbedingungen als PDF herunterladen. "
            ctaText="Download Geschäftsbedingungen"
          ></TeaserGeneral>
        </div>
      </ContentWidth>
    </>
  );
}
