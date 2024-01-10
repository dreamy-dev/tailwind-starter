"use client";

import ContentWidth from "@/components/layouts/ContentWidth";
import Link from "@/components/typography/Link";
import TeaserImageLeft from "@/components/sections/TeaserImageLeft";
import TeaserImageRight from "@/components/sections/TeaserImageright";
import HeroText from "@/components/sections/HeroText";
import Text from "@/components/typography/Text";
import Button from "@/components/elements/ButtonSecondary";
import H2 from "@/components/typography/H2";

export default function Schienenfahrzeuge() {
  return (
    <section>
      {/* <ContentWidth> */}
      <div className="col-span-12">
        <HeroText
          title="Schienenfahrzeuge"
          leadText="In enger Zusammenarbeit mit Kunden werden innovative, modulare oder massgeschneiderte Schienenfahrzeuge entwickelt."
        ></HeroText>
        <div className="py-12 bg-stadlergradient">
          <TeaserImageRight imageSrc="/test-img-1.png">
            <div>
              <H2 styles="text-white">Mainline</H2>
              <Text styles="mt-4 text-xl font-normal text-gray-800 text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </Text>
            </div>
            <Button
              styles="text-white"
              position="left"
              href="/solutions/schienenfahrzeuge/product"
            >
              Mehr dazu
            </Button>
          </TeaserImageRight>
          <TeaserImageLeft imageSrc="/test-img-1.png">
            <div>
              <H2 styles="text-white">Urban</H2>
              <Text styles="mt-4 text-xl font-normal text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </Text>
            </div>
            <Button
              styles="text-white"
              position="left"
              href="/solutions/schienenfahrzeuge/product"
            >
              Mehr dazu
            </Button>
          </TeaserImageLeft>
          <TeaserImageRight imageSrc="/test-img-1.png">
            <div>
              <H2 styles="text-white">Locomotive</H2>
              <Text styles="mt-4 text-xl font-normal text-gray-800 text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum.
              </Text>
            </div>
            <Button
              styles="text-white"
              position="left"
              href="/solutions/schienenfahrzeuge/product"
            >
              Mehr dazu
            </Button>
          </TeaserImageRight>
          <TeaserImageLeft imageSrc="/test-img-1.png">
            <div>
              <H2 styles="text-white">Tailor Made</H2>
              <Text styles="mt-4 text-xl font-normal text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor
              </Text>
            </div>
            <Button
              styles="text-white"
              position="left"
              href="/solutions/schienenfahrzeuge/product"
            >
              Mehr dazu
            </Button>
          </TeaserImageLeft>
        </div>
        
      </div>
      {/* </ContentWidth> */}
    </section>
  );
}
