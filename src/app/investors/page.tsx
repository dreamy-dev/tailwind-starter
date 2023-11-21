"use client";

import ContentWidth from "@/components/layouts/ContentWidth";
import Contact from "@/components/sections/Contact";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import Subscribe from "@/components/Subscribe";
import H2 from "@/components/typography/H2";
import Text from "@/components/typography/Text";
import CorporateGorvernance from "../unternehmen/CorporateGovernance";
import InvestorHero from "./Hero";
import Publications from "./Publications";
import TextBlock from "./TextBlock";

export default function Investors() {
  return (
    <section>
      {/* Header kann reiner TextHero sein mit Button der auf die letzte Publikation verweist, alle Publikationen zusammen, vlt ein Bild von publikation? */}
      <InvestorHero />
      {/* News & Events -> links Teaser von letzten News, rechts Teaser zu Events, beide verweisen auf Unterseiten */}
      <Publications />
      {/* Letzte Publikationen -> 4 letzte Publikationen als Cards anzeigen 
      https://flowbite.com/docs/components/card/#horizontal-card
      und der Rest als Collapsible anzeigen mit den restlichen Publikationen
       */}
      <FactsAndFigures />
      {/* Warum investieren -> Text */}
      {/* Geschätsmodell -> Text */}
      <TextBlock />
      {/* Kultur & Mission -> hier wieder mit diesen interaktiven Cards */}
      <CorporateGorvernance />
      <Contact
        title="Investorenkontakt"
        contactname="Daniel Strickler"
        contactlevel="Investor Relations Officer"
      />
      <Subscribe />
    </section>
  );
}
