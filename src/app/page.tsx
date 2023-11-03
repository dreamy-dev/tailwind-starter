"use client";

import Hero from "../components/ExampleHero";
import Stats from "../components/Stats";
import FactsAndFigures from "@/components/FactsAndFigures";

export default function HomePage() {
  const statsData = [
    {
      text: "Mitarbeiter weltweit",
      end: 14,
      suffix: "Tsd",
    },
    {
      text: "Produktionsstandorte",
      end: 15,
      suffix: "",
    },
    {
      text: "Arbeitstunden",
      end: 170,
      suffix: "Mio",
    },
    {
      text: "Team",
      end: 1,
      suffix: "",
    },
  ];
  return (
    <>
      <Hero />
      <FactsAndFigures />
      <Stats data={statsData} backgroundColor="bg-bgcLightBlue" />
    </>
  );
}
