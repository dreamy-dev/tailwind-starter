"use client";

import Hero from "./Hero";
import Numbers from "./Numbers";
import ProcurementDescriptions from "./ProcurementDescriptions";
import CooperationDescription from "./CooperationDescription";
import SustainableProcurement from "./SustainableProcurement";
import FAQ from "./FAQ";
import Contact from "./Contact";
import FaktenUndZahlen from "../company/FaktenUndZahlen";
import FaktenZahlen from "../unternehmen/FaktenZahlen";
import FactsAndFigures from "@/components/FactsAndFigures";
import Quote from "@/components/sections/Quote";

export default function Lieferanten() {
  return (
    <>
      <Hero />
      {/* <Numbers /> */}
      <FactsAndFigures />
      {/* <FaktenUndZahlen /> */}
      <Quote />
      <ProcurementDescriptions />
      <CooperationDescription />
      <SustainableProcurement />
      <Contact />
      <FAQ />
    </>
  );
}
