"use client";

import Contact from "@/components/sections/Contact";
import Subscribe from "@/components/sections/Subscribe";
import Publicationen from "@/components/sections/Publikationen";
import HeroText from "@/components/sections/HeroText";
import HomePageCaroucel from "@/components/sections/HomePageCaroucel";
import TeaserDownload from "../../components/sections/TeaserDownload";
import EventCalendar from "@/components/sections/EventCalendar";
import ButtonPrimary from "@/components/elements/ButtonPrimary";
import TeaserGeneral from "@/components/sections/TeaserGeneral";

const listMedienmitteilungen = [
  {
    text: "05.12.2023 Stadler Prag feiert 15-jähriges Jubiläum und verzeichnet starkes Wachstum.",
  },
  {
    text: "07.11.2023 Stadler eröffnet neues Logistikzentrum für den Schienenverkehr in Berlin Pankow.",
  },
  {
    text: "09.11.2023 Stadler macht Lokomotiven für das ETCS fit und ermöglicht damit schnelleren ETCS-Roll-Out in Deutschland.",
  },
  {
    text: "31.10.2023 TRAMLINK startet Linienverkehr in Bern.",
  },
];

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

export default function Medien() {
  return (
    <div>
      <HeroText
        title={<>Medienbereich</>}
        leadText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />
      <HomePageCaroucel
        items={newsCards}
        carouselTitle="News"
        showDate={true}
        showButton={true}
        h2Styles="flex justify-left items-left"
      ></HomePageCaroucel>

      <TeaserDownload
        title="Medienmitteilungen"
        leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonLink="/downloadcenter"
        buttonText="Alle Medienmitteilungen"
        showList={true}
        showButton={true}
        listData={listMedienmitteilungen}
      ></TeaserDownload>
      <Publicationen></Publicationen>
      <EventCalendar></EventCalendar>
      <TeaserGeneral
        title="Mediathek"
        ctaText="Download center"
      ></TeaserGeneral>
      <Contact></Contact>

      <Subscribe />
    </div>
  );
}
