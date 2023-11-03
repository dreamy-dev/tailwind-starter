"use client";

import Contact from "../../components/Contact";
import Career from "../../components/Career";
import Features from "@/components/Features";
import ProductHero from "./Hero";
import QualityFeatures from "@/components/QualityFeatures";
import Specification from "@/components/Specification";
import HeroText from "@/components/sections/HeroText";
import Text from "@/components/sections/Text";

export default function Product() {
  return (
    <>
      <HeroText />
      <ProductHero />
      <Text></Text>
      <QualityFeatures />
      <Specification />
      <Features />
      <Contact />
      <Career />
    </>
  );
}
