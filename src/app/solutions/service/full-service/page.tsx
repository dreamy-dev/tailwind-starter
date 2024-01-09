"use client";

import Hero from "./Hero";
import Description from "./Description";
import Advantages from "./Advantages";
import Contact from "../../../../components/sections/Contact";
import Career from "../../../../components/sections/Career";
import ReferenzenCarousel from "../../../../components/sections/ReferenzenCarousel";

export default function FullService() {
  return (
    <>
      <Hero />
      <Description />
      <Advantages />
      <ReferenzenCarousel />
      <Contact />
      <Career />
    </>
  );
}
