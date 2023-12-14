
"use client";

import HeroText from "@/components/sections/HeroText";
import TeaserGeneral from "@/components/sections/TeaserGeneral";
import Values from "@/components/sections/Values";

export default function Procurement() {
  return (
    <>
      <HeroText title="Unsere Standards & Geschäftsbedingungen "></HeroText>
      <Values></Values>
      <TeaserGeneral
        title="Unsere Geschäftsbedingungen"
        customText="“Hier können Sie unsere Geschäftsbedingungen als PDF herunterladen. "
        ctaText="Download Geschäftsbedingungen"
      ></TeaserGeneral>
    </>
  );
}