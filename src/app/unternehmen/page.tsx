"use client";
import Hero from "./Hero";
import DNA from "./DNA";
import Land from "./Land";
import WertePrinzipen from "./WertePrinzipen";
import Nachhaltigkeit from "./Nachhaltigkeit";
import History from "./History";
import SuccessStories from "./SuccessStories";
import Subscribe from "../../components/sections/Subscribe";
import Stats from "../../components/sections/Stats";
import NewsTeaser from "./NewsTeaser";
import ContentWidth from "@/components/layouts/ContentWidth";
import CorporateGorvernance from "./CorporateGovernance";
import HomePageCarousel from "../../components/sections/HomePageCaroucel";

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
      <Hero />
      <DNA />
      {/* <WertePrinzipen /> */}
      <Stats data={statistics}></Stats>
      <Land />
      <CorporateGorvernance />
      {/* <Nachhaltigkeit /> */}
      <History />
      <HomePageCarousel
        items={cards}
        carouselTitle="Title"
        h2Styles="flex justify-center items-center"
      />
      <NewsTeaser />
      <Subscribe />
    </>
  );
}
