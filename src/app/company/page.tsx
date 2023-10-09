"use client";

import Hero from "./Hero";
import Cards from "../../components/Cards";
import FormSubscribe from "./Form";
import Event from "../../components/Event";
import CompanyTeaser from "./WertePrinzipienTeaser";
import CompanyFeatures from "./TeaserFeature";
import FaktenUndZahlen from "./FaktenUndZahlen";
import NachhaltigkeitTeaser from "./NachhaltigkeitTeaser";
import GeschichteAblauf from "./GeschichteAblauf";

export default function Company() {
  return (
    <>
      <Hero></Hero>
      <CompanyTeaser />
      {/* <CompanyFeatures /> */}
      <FaktenUndZahlen />
      <NachhaltigkeitTeaser />
      <GeschichteAblauf />
      {/* <Event></Event> */}
      <Cards></Cards>
      <FormSubscribe />
    </>
  );
}
