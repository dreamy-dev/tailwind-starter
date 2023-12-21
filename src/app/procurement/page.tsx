
"use client";

import HeroText from "@/components/sections/HeroText";
import TeaserGeneral from "@/components/sections/TeaserGeneral";
import Values from "@/components/sections/Values";
import ProductHero from "../solutions/schienenfahrzeuge/product/Hero";

export default function Procurement() {
  return (
    <>
      <HeroText
        // breadcrumbs={[
        //   { text: "Lösungen", link: "/page" },
        //   { text: "Schienenfahrzeuge", link: "/schienenfahrzeuge" },
        //   { text: "Product", link: "/product" },
        // ]}
        title="Unsere Standards & Geschäftsbedingungen"
        leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        // withCTA={true}
        // buttonText="CTA Button"
      />

      <ProductHero />
      <Values></Values>
      <TeaserGeneral
        title="Unsere Geschäftsbedingungen"
        customText="“Hier können Sie unsere Geschäftsbedingungen als PDF herunterladen. "
        ctaText="Download Geschäftsbedingungen"
      ></TeaserGeneral>
    </>
  );
}