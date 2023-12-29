"use client";


import SmallWidth from "@/components/layouts/SmallWidth";
import Lead from "@/components/typography/Lead";
import TeasersSolution from "./TeasersSolution";
import ReferenzenCarousel from "../../components/sections/ReferenzenCarousel";
import HeroText from "@/components/sections/HeroText";
import SubHero from "@/components/sections/SubHero";
import TeaserImageLeft from "@/components/sections/TeaserImageLeft";
import TeaserImageRight from "@/components/sections/TeaserImageright";

export default function Solutions() {
  return (
    <>
      {/* <SubHero imageUrl="/subhero.jpg"></SubHero> */}
      <HeroText
        // breadcrumbs={[
        //   { text: "Lösungen", link: "/page" },
        //   { text: "Schienenfahrzeuge", link: "/schienenfahrzeuge" },
        //   { text: "Product", link: "/product" },
        // ]}
        title="Effiziente und zuverlässige Mobilitätslösungen"
        leadText="Die Mobilitätslösungen von Stadler sind mehr als die Summe ihrer Einzelteile. Wenn erstklassige Schienenfahrzeuge mit massgeschneiderten Signalling-Lösungen und einem integrierten Service kombiniert werden, dann ist ein effizienter Hochleistungsbahnbetrieb nachhaltig sichergestellt."
        // withCTA={true}
        // buttonText="CTA Button"
      />
      <TeaserImageRight
        imageSrc="Referenzen_TSSSA_Bild-VR.jpg"
        title="Schienenfahrzeuge"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        buttonText="Mehr dazu"
        buttonHref="/schienenfahrzeuge"
        backgroundColor="primaryTrans-50"
      
      ></TeaserImageRight>
      <TeaserImageLeft
        imageSrc="news-1.jpg"
        title="Signalling"
        description="  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
        buttonText="Mehr dazu"
        buttonHref="/signalling"
        backgroundColor="primaryTrans-50"
      
      ></TeaserImageLeft>
      <TeaserImageRight
        imageSrc="Referenzen_TSSSA_Bild-VR.jpg"
        title="Service"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        buttonText="Mehr dazu"
        buttonHref="/service"
        backgroundColor="primaryTrans-50"
      
      ></TeaserImageRight>

      {/* <TeasersSolution /> */}
      <ReferenzenCarousel />
    </>
  );
}
