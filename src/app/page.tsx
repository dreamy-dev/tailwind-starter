"use client";

import Video from "@/components/Video";
import Hero from "../components/ExampleHero";
import Stats from "../components/Stats";
import FactsAndFigures from "@/components/FactsAndFigures";
import MapTextTitle from "@/components/MapTextTitle";
import DoubleCard from "@/components/DoubleCard";

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
      <MapTextTitle />
      <Stats data={statsData} backgroundColor="bg-primarySolid-50" />
      <DoubleCard />
      <Video></Video>
    </>
  );
}
