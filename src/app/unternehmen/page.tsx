"use client";
import Hero from "./Hero";
import DNA from "./DNA";
import Land from "./Land";
import WertePrinzipen from "./WertePrinzipen";
import Nachhaltigkeit from "./Nachhaltigkeit";
import History from "./History";
import SuccessStories from "./SuccessStories";
import Subscribe from "../../components/sections/Subscribe";
import Stats from "../../components/sections/Stats";
import NewsTeaser from "./NewsTeaser";
import ContentWidth from "@/components/layouts/ContentWidth";
import CorporateGorvernance from "./CorporateGovernance";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import HomePageCarousel from "../../components/sections/HomePageCaroucel";

export default function Unternehmen() {
  const statistics = [
    {
      text: "Mitarbeitende",
      end: 2400,
      suffix: "+",
    },
    {
      text: "Länder",
      end: 22,
      suffix: "",
    },
    {
      text: "Züge mit langfristigen Wartungsverträgen",
      end: 1800,
      suffix: "+",
    },
    {
      text: "Kilometer pro Jahr",
      end: 250,
      suffix: " Mio.",
    },
  ];
  return (
    <>
      <Hero />
      <DNA />
      {/* <WertePrinzipen /> */}
      <FactsAndFigures />
      <Land />
      <CorporateGorvernance />
      {/* <Nachhaltigkeit /> */}
      <History />
      <HomePageCarousel />
      <NewsTeaser />
      <Subscribe />
    </>
  );
}
