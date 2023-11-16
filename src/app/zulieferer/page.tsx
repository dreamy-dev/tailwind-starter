"use client";

import Hero from "./Hero";
import SustainableProcurement from "./SustainableProcurement";
import FAQ from "../../components/sections/FAQ";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import Quote from "@/components/sections/Quote";
import Contact from "@/components/sections/Contact";
import TeaserDouble from "@/components/sections/TeaserDouble";

export default function Lieferanten() {
  return (
    <>
      <Hero />
      <FactsAndFigures title="Supply Chain Management in Zahlen" onlyOneRow />
      <Quote />
      <TeaserDouble />
      <SustainableProcurement />
      <FAQ />
      <Contact
        title="Ihr Kontakt"
        contactname="Supply Management"
        contactlevel=" "
      />
    </>
  );
}
