"use client";

import Hero from "./Hero";
import SustainableProcurement from "./SustainableProcurement";
import FAQ from "../../components/sections/FAQ";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import Quote from "@/components/sections/Quote";
import Contact from "@/components/sections/Contact";
import TeaserDouble from "@/components/sections/TeaserDouble";

const facts = [
  {
    text: "Nettoerlös in CHF",
    start: 0,
    end: 3.8,
    suffix: " Mrd.",
    duration: 3,
    separator: " ",
    decimals: 1,
    decimal: ".",
  },
  {
    text: "Auftragsbestand in CHF",
    start: 0,
    end: 22,
    suffix: " Mrd.",
    duration: 3,
  },
  {
    text: "Auftragseingang in CHF",
    start: 0,
    end: 8.6,
    suffix: " Mrd.",
    separator: " ",
    decimals: 1,
    decimal: ".",
    duration: 3,
  },
];

const figures = [
  {
    text: "Anzahl Mitarbeitende",
    start: 0,
    end: 13.743,
    separator: " ",
    decimals: 3,
    decimal: "'",
    duration: 3,
  },
  {
    text: "Durchschnittliche Verfügbarkeit von Schienenfahrzeugen",
    start: 0,
    end: 98,
    suffix: "%",
    prefix: "&gt;",
    duration: 3,
  },
  {
    text: "Anzahl ausgelieferte Schienenfahrzeuge",
    start: 0,
    end: 11.749,
    separator: " ",
    decimals: 3,
    decimal: "'",
    duration: 3,
  },
];
export default function Lieferanten() {
  return (
    <>
      <Hero />
      <FactsAndFigures data1={facts} data2={figures} title="Supply Chain Management in Zahlen" showTwoRows={false} />
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
