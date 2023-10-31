"use client";

import Hero from "./Hero";
import Quote from "./Quote";
import Numbers from "./Numbers";
import ProcurementDescriptions from "./ProcurementDescriptions";
import CooperationDescription from "./CooperationDescription";
import SustainableProcurement from "./SustainableProcurement";
import FAQ from "./FAQ";
import Contact from "./Contact";

export default function Lieferanten() {
  return (
    <>
      <Hero />
      <Numbers />
      <Quote />
      <ProcurementDescriptions />
      <CooperationDescription />
      <SustainableProcurement />
      <Contact />
      <FAQ />
    </>
  );
}
