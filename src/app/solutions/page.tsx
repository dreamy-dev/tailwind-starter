"use client";

import Hero from "@/components/ExampleHero";
import HeroSolutions from "./Hero";
import TeasersSolution from "./TeasersSolution";

export default function Solutions() {
  return (
    <>
      {/* <HeroSolutions></HeroSolutions> */}
      <Hero />
      <TeasersSolution />
      <img
        className="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg"
        src="/Referenzen.png"
        alt=""
      />
      {/* Referenzen */}
    </>
  );
}
