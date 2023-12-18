"use client";

import CooperationInfo from "./CooperationInfo";
import CooperationBecome from "./CooperationBecome";
import HeroText from "@/components/sections/HeroText";
import TeaserGeneral from "@/components/sections/TeaserGeneral";
import ContentWidth from "@/components/layouts/ContentWidth";
import ProductHero from "../solutions/schienenfahrzeuge/product/Hero";

export default function Cooperation() {
  return (
    <>
      <ContentWidth>
        <div className="col-span-12">
          <HeroText
            title="Lieferanten-Netzwerk: Werden Sie unser Partner!"
            leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          ></HeroText>
          <ProductHero></ProductHero>
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
