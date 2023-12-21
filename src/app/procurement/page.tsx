"use client";

import HeroText from "@/components/sections/HeroText";
import TeaserGeneral from "@/components/sections/TeaserGeneral";
import ProductHero from "../solutions/schienenfahrzeuge/product/Hero";
import QualityFeatures from "@/components/sections/QualityFeatures";
import TeaserDownload from "../../components/sections/TeaserDownload";

const list = [
  {
    text: "Code of Conduct",
  },
];

export default function Procurement() {
  return (
    <>
      <HeroText
        title="Unsere Standards & Geschäftsbedingungen "
        leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      ></HeroText>
      <ProductHero />
      <QualityFeatures />
      <TeaserDownload
        title="Code of Conduct"
        leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonLink="/verhaltenskodex_für_geschäftspartner_de_dec_01, 2020.pdf"
        buttonText="Read the Code of Conduct"
        showList={true}
        showButton={true}
        listData={list}
      ></TeaserDownload>
      <TeaserGeneral
        title="Unsere Geschäftsbedingungen"
        customText="Hier können Sie unsere Geschäftsbedingungen als PDF herunterladen. "
        ctaText="Download Geschäftsbedingungen"
      ></TeaserGeneral>
    </>
  );
}
