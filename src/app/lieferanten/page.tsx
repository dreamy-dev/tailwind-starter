"use client";

import Hero from "./Hero";
import Numbers from "./Numbers";
import ProcurementDescriptions from "./ProcurementDescriptions";
import CooperationDescription from "./CooperationDescription";
import SustainableProcurement from "./SustainableProcurement";
import FAQ from "./FAQ";
import FaktenUndZahlen from "../company/FaktenUndZahlen";
import FaktenZahlen from "../unternehmen/FaktenZahlen";
import FactsAndFigures from "@/components/FactsAndFigures";
import Quote from "@/components/sections/Quote";
import Contact from "@/components/sections/Contact";
import TeaserDouble from "@/components/sections/TeaserDouble";

export default function Lieferanten() {
  return (
    <>
      <Hero />
      {/* <Numbers /> */}
      <FactsAndFigures />
      {/* <FaktenUndZahlen /> */}
      <Quote />
      {/* <ProcurementDescriptions />
      <CooperationDescription /> */}
      <TeaserDouble />
      <SustainableProcurement />
      <FAQ />
      <Contact />
    </>
  );
}
