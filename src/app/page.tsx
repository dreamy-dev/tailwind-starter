"use client";

import Video from "@/components/Video";
import Hero from "../components/ExampleHero";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import HomePageCaroucel from "@/components/HomePageCaroucel";
import Map from "@/components/sections/Map";
import TrainCarousel from "@/components/sections/TrainCarousel";

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
