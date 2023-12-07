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
      <FactsAndFigures />
      <TrainCarousel />
      <HomePageCaroucel
        items={cards}
        carouselTitle="Erfolgsgeschichten"
        h2Styles="flex justify-center items-center"
      />
      <Map></Map>
      <Video></Video>
    </>
  );
}
