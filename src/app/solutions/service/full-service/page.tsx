"use client";

import Hero from "./Hero";
import Description from "./Description";
import Advantages from "./Advantages";
import Contact from "../../../../components/sections/Contact";
import Career from "../../../../components/Career";
import ProductCarousel from "@/components/ProductCarousel";

export default function FullService() {
  return (
    <>
      <Hero />
      <Description />
      <Advantages />
      <ProductCarousel />
      <Contact />
      <Career />
    </>
  );
}
