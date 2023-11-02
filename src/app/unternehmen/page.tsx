"use client";
import Hero from "./Hero";
import WertePrinzipen from "./WertePrinzipen";
import FaktenZahlen from "./FaktenZahlen";
import ManagementTeam from "./ManagementTeam";
import History from "./History";
import News from "./News";
import Subscribe from "./Subscribe";

export default function Unternehmen() {
  return (
    <>
      <Hero />
      {/* <WertePrinzipen /> */}
      <FaktenZahlen />
      <ManagementTeam />
      <History />
      <News />
      <Subscribe />
    </>
  );
}
