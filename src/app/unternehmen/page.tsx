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
  return (
    <>
      <SubHero imageUrl="/subhero.jpg"></SubHero>

      <HeroText
        title="Das ist Stadler"
        leadText=""
      ></HeroText>
      <Hero></Hero>
      <DNA />
      {/* <WertePrinzipen /> */}
      <FactsAndFigures
        data1={statistics}
        data2={daten}
        title="Daten & Fakten"
        showTwoRows={false}
      ></FactsAndFigures>
      <CorporateGorvernance />
      <Map />

      <SustainableProcurement title="Nachhaltigkeit" />
      {/* <Nachhaltigkeit /> */}
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
      <EventCalendar></EventCalendar>
      <TeaserGeneral
        title="News zu Stadler"
        ctaText="Zu allen News"
      ></TeaserGeneral>
    </>
  );
}
