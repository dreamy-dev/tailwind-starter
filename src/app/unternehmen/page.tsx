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

export default function Unternehmen() {
  return (
    <>
      <Hero />
      <WertePrinzipen />
      <FaktenZahlen />
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
