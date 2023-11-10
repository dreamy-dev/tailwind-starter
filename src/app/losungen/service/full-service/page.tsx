"use client";

import Hero from "./Hero";
import Description from "./Description";
import Advantages from "./Advantages";
import Contact from "../../../../components/sections/Contact";
import Career from "../../../../components/Career";

export default function FullService() {
  return (
    <>
      <Hero />
      <Description />
      <Advantages />
      {/* <References /> */}
      <img
        className="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg"
        src="/Referenzen.png"
        alt=""
      />
      <Contact />
      <Career />
    </>
  );
}
