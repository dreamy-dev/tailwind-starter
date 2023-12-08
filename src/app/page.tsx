"use client";

import Video from "../components/sections/Video";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import HomePageCaroucel from "@/components/sections/HomePageCaroucel";
import TrainCarousel from "@/components/sections/TrainCarousel";
import Map from "@/components/sections/Map";
import HomePageHero from "../components/sections/HomePageHero";
import MobileModal from "@/components/elements/MobileModal";
import { useEffect, useState } from "react";

const cards = [
  {
    title: "FLIRT bewegt die Welt",
    text:
      "Unser Erfolgsmodell FLIRT bewegt täglich Menschen und Länder. Erfahren Sie mehr über die unterschiedlichen FLIRT-Modelle und deren Einsatzgebiete.",
    img: "/Card2.jpg",
  },
  {
    title: "Der Weltrekord-Zug: FLIRT Akku",
    text:
      "Der FLIRT Akku stellt den Weltrekord für die längste Fahrt mit einem Batterietriebzug auf. Lesen Sie mehr über die Rekord-Leistung.",
    img: "/card-2-carousel-2.jpg",
  },
  {
    title: "Im Land der längsten Zugstrecken",
    text:
      "Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.",
    img: "/Card2.jpg",
  },
  {
    title: "Der Weltrekord-Zug: FLIRT Akku",
    text:
      "Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.",
    img: "/card-2-carousel-2.jpg",
  },
  {
    title: "Im Land der längsten Zugstrecken",
    text:
      "Das Land der Langstrecken stellt für den Schienenverkehr seit je her eine Herausforderung dar. Lesen Sie mehr über die Stadler-Projekte in den USA.",
    img: "/Card2.jpg",
  },
];

const facts = [
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
      end:8.6,
      suffix:" Mrd.",
      separator:" ",
      decimals:1,
      decimal:".",
      duration:3,
  }
];

const figures = [
  {
    text: "Anzahl Mitarbeitende",
    start: 0,
    end: 13.743,
    separator: " ",
    decimals: 3,
    decimal: "'",
    duration: 3,
  },
  {
    text: "Durchschnittliche Verfügbarkeit von Schienenfahrzeugen",
    start: 0,
    end: 98,
    suffix: "%",
    prefix: "&gt;",
    duration: 3,
  },
  {
    text: "Anzahl ausgelieferte Schienenfahrzeuge",
    start:0,
    end: 11.749,
    separator:" ",
    decimals:3,
    decimal:"'",
    duration: 3,
  },
];

export default function HomePage() {
  const [showMobileModal, setShowMobileModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowMobileModal(window.innerWidth <= 1284);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {showMobileModal && <MobileModal />}
      <HomePageHero />
      <FactsAndFigures data1={facts} data2={figures} title="Daten & Fakten" />
      <TrainCarousel />
      <HomePageCaroucel
        items={cards}
        carouselTitle="Erfolgsgeschichten"
        h2Styles="flex justify-center items-center"
        showButton={false}
      />
      <Map></Map>
      <Video></Video>
    </>
  );
}
