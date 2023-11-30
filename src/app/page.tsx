"use client";

import Video from "../components/sections/Video";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import HomePageCaroucel from "@/components/sections/HomePageCaroucel";
import TrainCarousel from "@/components/sections/TrainCarousel";
import Map from "@/components/sections/Map";
import HomePageHero from "../components/sections/HomePageHero";
import MobileModal from "@/components/elements/MobileModal";
import { useEffect, useState } from "react";

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
      <HomePageCaroucel />
      <Map></Map>
      <Video></Video>
    </>
  );
}
