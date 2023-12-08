"use client";

import ContentWidth from "@/components/layouts/ContentWidth";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import HeroText from "@/components/sections/HeroText";
import Link from "@/components/typography/Link";
import ServiceTeasers from "./ServiceTeasers";
const daten = [
  {
    text: "Lorem ipsum",
    start: 0,
    end: 100,
    // separator: " ",
    // decimals: 3,
    // decimal: "'",
    // duration: 3,
  },
  {
    text: "Lorem ipsum",
    start: 0,
    end: 100,
    // suffix: "%",
    // prefix: "&gt;",
    // duration: 3,
  },
  {
    text: "Lorem ipsum",
    start: 0,
    end: 100,
    // separator: " ",
    // decimals: 3,
    // decimal: "'",
    // duration: 3,
  },
];
const fakten = [
  {
    text: "Lorem ipsum",
    start: 0,
    end: 100,
    // separator: " ",
    // decimals: 3,
    // decimal: "'",
    // duration: 3,
  },
  {
    text: "Lorem ipsum",
    start: 0,
    end: 100,
    // suffix: "%",
    // prefix: "&gt;",
    // duration: 3,
  },
  {
    text: "Lorem ipsum",
    start: 0,
    end: 100,
    // separator: " ",
    // decimals: 3,
    // decimal: "'",
    duration: 3,
  },
];
export default function Service() {
  return (
    <>
      <HeroText
        solution
        category="Service"
        title="Service Angebot"
        leadText="Für Stadler endet Kundennähe nicht mit der Auslieferung der Züge. Unsere Mitarbeitenden stehen unseren Kunden als Servicepartner rund um die Uhr mit Rat und Tat zur Seite, um höchste Qualität zu garantieren. Dadurch gewährleisten wir die Zuverlässigkeit und Verfügbarkeit unserer Schienenfahrzeuge über die gesamte Lebensdauer."
      />
      <img
        width={"100%"}
        className="h-700"
        src="/teaser_service.jpeg"
        alt="hero product image"
      />
      <ServiceTeasers />
      <FactsAndFigures data1={daten } data2={fakten } title="Title"/>
    </>
  );
}
