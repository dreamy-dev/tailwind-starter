"use client";

import Video from "../components/sections/Video";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import HomePageCaroucel from "@/components/sections/HomePageCaroucel";
import TrainCarousel from "@/components/sections/TrainCarousel";
import Map from "@/components/sections/Map";
import HomePageHero from "../components/sections/HomePageHero";

export default function HomePage() {
  return (
    <>
      <HomePageHero />
      <FactsAndFigures />
      <TrainCarousel />
      <Map></Map>
      <HomePageCaroucel />
      <Video></Video>
    </>
  );
}
