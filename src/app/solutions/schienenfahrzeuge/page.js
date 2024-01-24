"use client";

import ContentWidth from "../../../components/layouts/ContentWidth";
import Link from "../../../components/typography/Link";
import TeaserImageLeft from "../../../components/sections/TeaserImageLeft";
import TeaserImageRight from "../../../components/sections/TeaserImageright";
import HeroText from "../../../components/sections/HeroText";
import Text from "../../../components/typography/Text";
import Button from "../../../components/elements/ButtonSecondary";
import H2 from "../../../components/typography/H2";
import HomePageCaroucel from "../../../components/sections/HomePageCaroucel";

const newsCards = [
  {
    title: "Stadler bleibt Premium Partner der Eisbären",
    date: "28.11.2023",
    text: "Die Eisbären Berlin freuen sich, den Schienenfahrzeughersteller Stadler weiterhin zu ihren Premium Partnern zu zählen. Stadler ...",
    img: "https://www.stadlerrail.com/media/img/800x/gruppenfoto%202%20nah-sh-optimiert.jpg",
  },
  {
    title:
      "Stadler eröffnet neues Logistikzentrum für den Schienenverkehr in Berlin Pankow",
    date: "07.11.2023",
    text: "Gemeinsam mit Berlins Regierendem Bürgermeister, Kai Wegner, sowie der Senatorin für Wirtschaft, Energie und Betriebe, Franzisk...",
    img: "/pressefoto-einweihung.jpg",
  },
  {
    title:
      "Neue Akkuzüge sind jetzt auch zwischen Kiel, Lübeck und Lüneburg unterwegs",
    date: "23.10.2023",
    text: "In Schleswig-Holstein ist die weltweit erste batterieelektrische Zugflotte im regelmäßigen Linienbetrieb unterwegs. Damit ha...",
    img: "https://www.stadlerrail.com/media/img/800x/mwe_0920%20-%20cropped.jpg",
  },
  {
    title: "Weitere neue Wasserstoffzüge für Kalifornien",
    date: "16.10.2023",
    text: "Der Bundesstaat Kalifornien und Stadler haben am 12. Oktober 2023 eine wegweisende Vereinbarung unterzeichnet, die einen bedeutenden Schr...",
    img: "https://www.stadlerrail.com/media/img/800x/caltrans-coastline-16-9.jpg",
  },
  {
    title:
      "Erste TINA-Strassenbahnen starten in den Probebetrieb mit Fahrgästen",
    date: "16.10.2023",
    text: "Die neuen Strassenbahnen der Baureihe TINA öffnen ihre Türen: Seit dem 9. Oktober 2023&nbsp;können Fahrgäste im Rahme...",
    img: "https://www.stadlerrail.com/media/img/800x/tina_darmstadt.jpg",
  },
];

export default function Schienenfahrzeuge() {
  return (
    <section>
      {/* <ContentWidth> */}
      <div className="col-span-12">
        <HeroText
          breadcrumbs={[
            { text: "Lösungen", link: "/solutions" }
          ]}
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
        <HomePageCaroucel
          items={newsCards}
          carouselTitle="Schienenfahrzeuge News"
          showDate={true}
          showButton={true}
          h2Styles="flex justify-left items-left"
        ></HomePageCaroucel>
      </div>
      {/* </ContentWidth> */}
    </section>
  );
}
