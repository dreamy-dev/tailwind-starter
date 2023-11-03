"use client";

import Contact from "../../components/Contact";
import Career from "../../components/Career";
import Features from "@/components/Features";
import ProductHero from "./Hero";
import QualityFeatures from "@/components/QualityFeatures";

export default function Product() {
  return (
    <>
      <ProductHero />
      <QualityFeatures />
      <Features />
      <Contact />
      <Career />
    </>
  );
}
