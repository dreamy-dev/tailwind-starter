"use client";
import Hero from "./Hero";
import DNA from "./DNA";
import Land from "./Land";
import WertePrinzipen from "./WertePrinzipen";
import Nachhaltigkeit from "./Nachhaltigkeit";
import History from "./History";
import SuccessStories from "./SuccessStories";
import Subscribe from "../../components/Subscribe";
import Stats from "../../components/Stats";
import NewsTeaser from "./NewsTeaser";
import ContentWidth from "@/components/layouts/ContentWidth";
import CorporateGorvernance from "./CorporateGovernance";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import ProductCarousel from "@/components/ProductCarousel";

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
      <ProductCarousel />
      <NewsTeaser />
      <Subscribe />
    </>
  );
}
