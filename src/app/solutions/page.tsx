"use client";


import SmallWidth from "@/components/layouts/SmallWidth";
import Lead from "@/components/typography/Lead";
import TeasersSolution from "./TeasersSolution";
import ReferenzenCarousel from "../../components/sections/ReferenzenCarousel";
import HeroText from "@/components/sections/HeroText";
import SubHero from "@/components/sections/SubHero";
import TeaserImageLeft from "@/components/sections/TeaserImageLeft";
import TeaserImageRight from "@/components/sections/TeaserImageright";
import ButtonPrimary from "@/components/elements/ButtonPrimary";
import Text from "@/components/typography/Text";
import H2 from "@/components/typography/H2";

export default function Solutions() {
  return (
    <>
      <SubHero imageUrl="/subhero.jpg"></SubHero>
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
      <div className="bg-primaryTrans-50 py-12">
        <TeaserImageRight imageSrc="/hero-home-big-min.jpg">
          <div>
            <H2 styles="text-black">Schienenfahrzeuge</H2>
            <Text styles="mt-4 text-xl font-normal text-gray-800 text-black">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </Text>
          </div>
          <ButtonPrimary
            position="left"
            buttonText="Mehr dazu"
            href="/solutions/schienenfahrzeuge"
          />
        </TeaserImageRight>
        <TeaserImageLeft imageSrc="/teaser_signalling-2.jpg">
          <div>
            <H2 styles="text-black">Signalling</H2>
            <Text styles="mt-4 text-xl font-normal text-black">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </Text>
          </div>
          <ButtonPrimary
            position="left"
            buttonText="Mehr dazu"
            href="/solutions/signalling"
          />
        </TeaserImageLeft>
        <TeaserImageRight imageSrc="/teaser_service.jpeg">
          <div>
            <H2 styles="text-black">Service</H2>
            <Text styles="mt-4 text-xl font-normal text-gray-800 text-black">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </Text>
          </div>
          <ButtonPrimary
            position="left"
            buttonText="Mehr dazu"
            href="/solutions/service"
          />
        </TeaserImageRight>
      </div>
      {/* <TeasersSolution /> */}
      <ReferenzenCarousel />
    </>
  );
}
