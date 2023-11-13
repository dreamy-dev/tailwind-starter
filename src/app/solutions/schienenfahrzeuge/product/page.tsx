"use client";

import Contact from "../../../../components/sections/Contact";
import Career from "../../../../components/Career";
import Features from "@/components/Features";
import ProductHero from "./Hero";
import QualityFeatures from "@/components/QualityFeatures";
import Specification from "@/components/Specification";
import HeroText from "@/components/sections/HeroText";
import TextSection from "@/components/sections/TextSection";
import ProductCarousel from "@/components/ProductCarousel";

export default function Product() {
  return (
    <>
      <HeroText
        category="Schienenfahrzeuge"
        solution
        title={<>Leicht und flexibel: Flirt 160</>}
        leadText="Der Flirt 160 setzt Massstäbe: Leichte Bauweise aus Aluminium, markantes Design, höchster Passagierkomfort und einfache Wartung. Erfahren Sie, was dieses Modell so unverwechselbar macht."
      />
      <ProductHero />
      <TextSection></TextSection>
      <QualityFeatures />
      <ProductCarousel />
      <Specification />
      <Features />
      <Contact />
      <Career />
    </>
  );
}
