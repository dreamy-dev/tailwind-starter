"use client";

import Video from "@/components/Video";
import Hero from "../components/ExampleHero";
import Stats from "../components/Stats";
import FactsAndFigures from "@/components/FactsAndFigures";
import MapTextTitle from "@/components/MapTextTitle";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FactsAndFigures />
      <MapTextTitle />
      <Video></Video>
      {/* <Stats /> */}
    </>
  );
}
