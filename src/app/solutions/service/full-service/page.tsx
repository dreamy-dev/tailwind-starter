"use client";

import Description from "./Description";
import Advantages from "./Advantages";
import Contact from "../../../../components/sections/Contact";
import Career from "../../../../components/sections/Career";
import ReferenzenCarousel from "../../../../components/sections/ReferenzenCarousel";
import HeroText from "@/components/sections/HeroText";
import FullWidth from "@/components/layouts/FullWidth";

export default function FullService() {
  return (
    <>
    <HeroText 
    breadcrumbs={[
        { text: "Lösungen", link: "/solutions" },
        { text: "Full Service", link: "/full-service" }
       ]}
        title="Full Service – Integriertes Service-Konzept in der Nähe"
        leadText="Der Full Service ist ein ganzheitliches Angebot, das die komplette Fahrzeuginstandhaltung umfasst."
         withCTA={false} />
    <FullWidth>
    <div className="col-span-12">
      <img className="h-auto w-full"
            src="/hero-full-service-narrow.jpg"
            alt=""
          />
      </div>
    </FullWidth>
    <Description />
    <Advantages />
    <ReferenzenCarousel />
    <Contact />
    <Career />
    </>
  );
}
