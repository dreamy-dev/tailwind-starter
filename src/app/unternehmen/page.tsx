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
      <WertePrinzipen />
      <Stats data={statistics} backgroundColor="bg-bgcLightBlue" />
      <Land />
      <CorporateGorvernance />
      <Nachhaltigkeit />
      <History />
      {/* <SuccessStories /> */}
      <ContentWidth>
        <img
          className="mr-4 col-span-12 w-full"
          src="/Screenshot-Erfolgsgeschichten.png"
          alt=""
        />
      </ContentWidth>
      <NewsTeaser />
      <Subscribe />
    </>
  );
}
