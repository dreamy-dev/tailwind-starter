"use client";

import CooperationInfo from "./CooperationInfo";
import CooperationBecome from "./CooperationBecome";
import HeroText from "@/components/sections/HeroText";
import TeaserGeneral from "@/components/sections/TeaserGeneral";
import ContentWidth from "@/components/layouts/ContentWidth";
import ProductHero from "../solutions/schienenfahrzeuge/product/Hero";
import Contact from "@/components/sections/Contact";
import TeaserDownload from "../../components/sections/TeaserDownload";

const downloads = [
  {
    text:
      "Allgemeine Einkaufsbedingungen Stadler Bussnang AG / Stadler Rheintal AG / Stadler Winterthur AG / Stadler Signalling AG / Stadler Service AG",
  },
  {
    text:
      "Ergänzende Einkaufsbedingungen für EU-Zulassungsprozesse Stadler Rheintal AG",
  },
  {
    text: "Kurzanleitung Zeitfensterbuchung",
  },
  {
    text: "Stadler Bussnang AG & Stadler Service AG Logistikspezifikation",
  },
];

export default function Cooperation() {
  return (
    <>
      <ContentWidth>
        <div className="col-span-12">
          <HeroText
            title="Lieferanten-Netzwerk: Werden Sie unser Partner!"
            leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          ></HeroText>
        </div>
      </ContentWidth>
      <ProductHero></ProductHero>
      <TeaserGeneral
        title="Unsere Geschäftsbedingungen"
        customText="“Hier können Sie unsere Geschäftsbedingungen als PDF herunterladen. "
        ctaText="Download Geschäftsbedingungen"
      ></TeaserGeneral>
      <CooperationBecome></CooperationBecome>
      <CooperationInfo></CooperationInfo>

      <Contact />
      <TeaserDownload
        title="Allgemeine Downloads"
        buttonLink="/downloadcenter"
        buttonText="Alle Medienmitteilungen"
        showList={true}
        showButton={false}
        listData={downloads}
      ></TeaserDownload>
    </>
  );
}
