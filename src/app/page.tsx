"use client";

import Video from "@/components/Video";
import Hero from "../components/ExampleHero";
import Stats from "../components/Stats";
import FactsAndFigures from "@/components/FactsAndFigures";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FactsAndFigures />
      <Video></Video>
      {/* <Stats /> */}
    </>
  );
}
