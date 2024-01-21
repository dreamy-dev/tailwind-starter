"use client";
import SubHero from "@/components/sections/SubHero";
import HeroText from "../../components/sections/HeroText"
import DNA from "./DNA";
import SustainableProcurement from "../zulieferer/SustainableProcurement";
import TeaserGeneral from "@/components/sections/TeaserGeneral";
import CorporateGorvernance from "./CorporateGovernance";
import HomePageCarousel from "../../components/sections/HomePageCaroucel";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import Map from "@/components/sections/Map";
import EventCalendar from "@/components/sections/EventCalendar";
import Hero from "./Hero";

const cards = [
  {
    title: "FLIRT bewegt die Welt",
    text: "Unser Erfolgsmodell FLIRT bewegt täglich Menschen und Länder. Erfahren Sie mehr über die unterschiedlichen FLIRT-Modelle und deren Einsatzgebiete.",
    img: "/Card2.jpg",
  },
  {
    title: "Der Weltrekord-Zug: FLIRT Akku",
    text: "Der FLIRT Akku stellt den Weltrekord für die längste Fahrt mit einem Batterietriebzug auf. Lesen Sie mehr über die Rekord-Leistung.",
    img: "/card-2-carousel-2.jpg",
  },
  {
    title: "Im Land der längsten Zugstrecken",
    text: "Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.",
    img: "/Card2.jpg",
  },
  {
    title: "Der Weltrekord-Zug: FLIRT Akku",
    text: "Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.",
    img: "/card-2-carousel-2.jpg",
  },
  {
    title: "Im Land der längsten Zugstrecken",
    text: "Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.",
    img: "/Card2.jpg",
  },
];
export default function Unternehmen() {
  const statistics = [
    {
      text: "Nettoerlös in CHF",
      start: 0,
      end: 3.8,
      suffix: " Mrd.",
      duration: 3,
      separator: " ",
      decimals: 1,
      decimal: ".",
    },
    {
      text: "Auftragsbestand in CHF",
      start: 0,
      end: 22,
      suffix: " Mrd.",
      duration: 3,
    },
    {
      text: "Auftragseingang in CHF",
      start: 0,
      end: 8.6,
      suffix: " Mrd.",
      separator: " ",
      decimals: 1,
      decimal: ".",
      duration: 3,
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
  const  daten= [
    {
      text: "Mitarbeitende",
      end: 2400,
      suffix: "+",
    },
    {
      text: "Länder",
      end: 22,
      suffix: "",
    },
    {
      text: "Züge mit langfristigen Wartungsverträgen",
      end: 1800,
      suffix: "+",
    },
    {
      text: "Kilometer pro Jahr",
      end: 250,
      suffix: " Mio.",
    },
  ];

  const customEventData = [
    {
      event: "Event",
      date: "tt. mm. yyyy",
      link: "#",
    },
    {
      event: "Event",
      date: "tt. mm. yyyy",
      link: "#",
    },
    {
      event: "Event",
      date: "tt. mm. yyyy",
      link: "#",
    },
    {
      event: "Event",
      date: "tt. mm. yyyy",
      link: "#",
    },
    {
      event: "Event",
      date: "tt. mm. yyyy",
      link: "#",
    },
  ];
  return (
    <>
      <SubHero imageUrl="/subhero.jpg"></SubHero>
      <HeroText
        title="Das ist Stadler"
        leadText="Mit umfassenden Services, die Mehrwert auf die Schiene bringen.
              Und mit Schweizer Werten, die das Standing von Stadler weltweit
              fördern und prägen. Stadler steht für Zuverlässigkeit,
              Flexibilität und Innovationskraft – seit 1942."
        // withCTA={true}
        // buttonText="CTA Button"
      />

      <Hero></Hero>
      <DNA />
      {/* <WertePrinzipen /> */}
      <FactsAndFigures
        data1={statistics}
        data2={daten}
        title="Daten & Fakten"
        showTwoRows={false}
      ></FactsAndFigures>
      <CorporateGorvernance
        mainTitle="Verwaltungsrat und Konzernleitung"
        showThirdCard={false}
        numberOfColumns={2}
      />
      <Map />

      <SustainableProcurement title="Nachhaltigkeit" showButton={true} />

      <TeaserGeneral
        title="Stadler History"
        customText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ctaText="Zu history"
        href="/history"
      ></TeaserGeneral>
      {/* <History /> */}
      <HomePageCarousel
        items={cards}
        carouselTitle="Erfolgsgeschichten"
        h2Styles="flex justify-center items-center"
        showButton={false}
      />
      <EventCalendar
        mainTitle="Events"
        eventsData={customEventData}
      ></EventCalendar>
      <HomePageCarousel
        items={newsCards}
        carouselTitle="News"
        showDate={true}
        showButton={true}
        h2Styles="flex justify-left items-left"
      ></HomePageCarousel>
     
    </>
  );
}
