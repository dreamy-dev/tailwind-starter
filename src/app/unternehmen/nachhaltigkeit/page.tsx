"use client";

import HeroText from "@/components/sections/HeroText";
import CorporateGorvernance from "../CorporateGovernance";
import Intro from "@/components/sections/Intro";
import CTASection from "@/components/sections/CTASection";
import TeaserMobilitySolutions from "@/components/sections/TeaserMobilitySolutions";
import ContentWidth from "@/components/layouts/ContentWidth";
import Text from "@/components/typography/Text";
import H1 from "@/components/typography/H1";
import H2 from "@/components/typography/H2";

export default function Nachhaltigkeit() {
  return (
    <>
      <HeroText
        breadcrumbs={[
          { text: "Unternehmen", link: "/unternehmen" },
        ]}
        title="Nachhaltigkeit ist in unserer DNA."
        leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
      <p>Section – Produkte und Dienstleistungen</p>
      <section className="text-white bg-stadlergradient">
        <ContentWidth>
            <div className="col-span-12 flex flex-col p-12">
            <H2>Umwelt und Kreislaufwirtschaft</H2>
            <Text>Umwelt Netto-Null und Kreislaufwirtschaft, Supply Chain Management ist nachhaltig, Ziele in Nachhaltigkeit, nachhaltige Produktion, etc.
            </Text>
            </div>
        </ContentWidth>
      </section>
      <Intro />
      <CTASection />
      <CorporateGorvernance
        mainTitle="Verwaltungsrat und Konzernleitung"
        showThirdCard={false}
        numberOfColumns={2}
      />
      <p>Tabelle von Zertifizierung Page oder Link auf Page</p>
    </>
  );
}
