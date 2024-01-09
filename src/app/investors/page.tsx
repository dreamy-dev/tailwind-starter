"use client";

import ContentWidth from "@/components/layouts/ContentWidth";
import Contact from "@/components/sections/Contact";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import Subscribe from "@/components/sections/Subscribe";
import Publikationen from "@/components/sections/Publikationen";
import CorporateGorvernance from "../unternehmen/CorporateGovernance";
import InvestorHero from "./Hero";
import Publications from "./Publications";
import TextBlock from "./TextBlock";
import SubHero from "@/components/sections/SubHero";

const facts = [
  {
    text: "Nettoerlös in CHF",
    start: 0,
    end: 3.8,
    suffix: " Mrd.",
    duration: 3,
    separator: " ",
    decimals: 1,
    decimal: ".",
  },
  {
    text: "Auftragsbestand in CHF",
    start: 0,
    end: 22,
    suffix: " Mrd.",
    duration: 3,
  },
  {
    text: "Auftragseingang in CHF",
    start: 0,
    end: 8.6,
    suffix: " Mrd.",
    separator: " ",
    decimals: 1,
    decimal: ".",
    duration: 3,
  },
];

const figures = [
  {
    text: "Anzahl Mitarbeitende",
    start: 0,
    end: 13.743,
    separator: " ",
    decimals: 3,
    decimal: "'",
    duration: 3,
  },
  {
    text: "Durchschnittliche Verfügbarkeit von Schienenfahrzeugen",
    start: 0,
    end: 98,
    suffix: "%",
    prefix: "&gt;",
    duration: 3,
  },
  {
    text: "Anzahl ausgelieferte Schienenfahrzeuge",
    start: 0,
    end: 11.749,
    separator: " ",
    decimals: 3,
    decimal: "'",
    duration: 3,
  },
];
export default function Investors() {
  return (
    <section>
      <SubHero imageUrl="/subhero.jpg"></SubHero>
      {/* Header kann reiner TextHero sein mit Button der auf die letzte Publikation verweist, alle Publikationen zusammen, vlt ein Bild von publikation? */}
      <InvestorHero />
      {/* News & Events -> links Teaser von letzten News, rechts Teaser zu Events, beide verweisen auf Unterseiten */}
      <Publikationen></Publikationen>
      {/* Letzte Publikationen -> 4 letzte Publikationen als Cards anzeigen
      https://flowbite.com/docs/components/card/#horizontal-card
      und der Rest als Collapsible anzeigen mit den restlichen Publikationen
       */}
      <FactsAndFigures data1={facts} data2={figures} title="Daten & Fakten" />
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
