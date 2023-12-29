"use client";

import ContentWidth from "@/components/layouts/ContentWidth";
import Link from "@/components/typography/Link";
import TeaserImageLeft from "@/components/sections/TeaserImageLeft";
import TeaserImageRight from "@/components/sections/TeaserImageright";
import HeroText from "@/components/sections/HeroText";

export default function Schienenfahrzeuge() {
  return (
    <section>
      <ContentWidth>
        <div className="col-span-12">
          <HeroText
            title="Schienenfahrzeuge"
            leadText="In enger Zusammenarbeit mit Kunden werden innovative, modulare oder massgeschneiderte Schienenfahrzeuge entwickelt."
          ></HeroText>
          <TeaserImageRight
            imageSrc="/image4.png"
            title="Mainline"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
            buttonText="Mehr dazu"
            buttonHref="/mainline"
            backgroundColor="blueDark"
            titleColor="text-white"
            textColor="text-white"
            leadTextColor="text-white"
          ></TeaserImageRight>
          <TeaserImageLeft
            imageSrc="/ImageUrban.png"
            title="Urban"
            description="  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
            buttonText="Mehr dazu"
            buttonHref="/urban"
            backgroundColor="blueDark"
            titleColor="text-white"
            textColor="text-white"
            leadTextColor="text-white"
          ></TeaserImageLeft>
          <TeaserImageRight
            imageSrc="/Image123.png"
            title="Locomotive"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
            buttonText="Mehr dazu"
            buttonHref="/locomotive"
            backgroundColor="blueDark"
            titleColor="text-white"
            textColor="text-white"
            leadTextColor="text-white"
          ></TeaserImageRight>
          <TeaserImageLeft
            imageSrc="/ImageTailor-cut.png"
            title="Tailor Made"
            description="  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
            buttonText="Mehr dazu"
            buttonHref="/tailor-made"
            backgroundColor="blueDark"
            titleColor="text-white"
            textColor="text-white"
            leadTextColor="text-white"
          ></TeaserImageLeft>
           <div
            className="col-span-6"
            style={{ height: "80px", padding: "20px" }}
          >
            <Link href="/solutions/schienenfahrzeuge/product">
              <p>Product page</p>
            </Link>
          </div> 
        </div>
      </ContentWidth>
    </section>
  );
}
