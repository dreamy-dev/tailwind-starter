"use client";
import Hero from "./Hero";
import DNA from "./DNA";
import Land from "./Land";
import WertePrinzipen from "./WertePrinzipen";
import ManagementTeam from "./ManagementTeam";
import Compliance from "./Compliance";
import Nachhaltigkeit from "./Nachhaltigkeit";
import History from "./History";
import News from "./News";
import SuccessStories from "./SuccessStories";
import Subscribe from "../../components/Subscribe";
import Stats from "../../components/Stats";

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
      <ManagementTeam />
      <Compliance />
      <Nachhaltigkeit />
      <History />
      <SuccessStories />
      <News />
      <Subscribe />
    </>
  );
}
