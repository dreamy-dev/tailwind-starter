"use client";
import Hero from "./Hero";
import WertePrinzipen from "./WertePrinzipen";
import FaktenZahlen from "./FaktenZahlen";
import ManagementTeam from "./ManagementTeam";
import Compliance from "./Compliance";
import Nachhaltigkeit from "./Nachhaltigkeit";
import History from "./History";
import News from "./News";
import SuccessStories from "./SuccessStories";
import Subscribe from "../../components/Subscribe";
import Stats from "../../components/Stats";

export default function Unternehmen() {
  const abc = [
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
      <WertePrinzipen />
      <FaktenZahlen />
      <Stats data={abc} backgroundColor="bg-bgcLightBlue" />
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
