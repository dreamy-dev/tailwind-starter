"use client";

import Video from "@/components/Video";
import Hero from "../components/ExampleHero";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import HomePageCaroucel from "@/components/HomePageCaroucel";
import TrainCarousel from "@/components/sections/TrainCarousel";
import Map from "@/components/sections/Map";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FactsAndFigures />
      <TrainCarousel />
      <Map></Map>
      <HomePageCaroucel />
      <Video></Video>
    </>
  );
}
