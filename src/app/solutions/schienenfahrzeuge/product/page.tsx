"use client";

import Contact from "../../../../components/sections/Contact";
import Career from "../../../../components/sections/Career";
import Features from "@/components/sections/Features";
import ProductHero from "./Hero";
import QualityFeatures from "@/components/sections/QualityFeatures";
import Specification from "@/components/sections/Specification";
import HeroText from "@/components/sections/HeroText";
import TextSection from "@/components/sections/TextSection";
import ProductCarousel from "@/components/sections/ProductCarousel";
import TestimonialsCarousel from "@/components/sections/ReferenzenCarousel";

export default function Product() {
  return (
    <>
      <HeroText
        breadcrumbs={[
          { text: "Lösungen", link: "/solutions" },
          { text: "Schienenfahrzeuge", link: "/schienenfahrzeuge" },
        
        ]}
        title="Leicht und flexibel: Flirt 160"
        leadText="Der Flirt 160 setzt Massstäbe: Leichte Bauweise aus Aluminium, markantes Design, höchster Passagierkomfort und einfache Wartung. Erfahren Sie, was dieses Modell so unverwechselbar macht."
        // withCTA={true}
        // buttonText="CTA Button"
      />
  
      <ProductHero />
      <TextSection></TextSection>
      <QualityFeatures />
      <ProductCarousel />
      <Specification />

      <TestimonialsCarousel></TestimonialsCarousel>
      <Features />
      <Contact />
      <Career />
    </>
  );
}
