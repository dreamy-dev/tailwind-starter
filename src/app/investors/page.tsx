"use client";

import ContentWidth from "@/components/layouts/ContentWidth";
import Contact from "@/components/sections/Contact";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import Subscribe from "@/components/sections/Subscribe";
import Publikationen from "@/components/sections/Publikationen";
import CorporateGorvernance from "../unternehmen/CorporateGovernance";
import InvestorHero from "./Hero";
import TextBlock from "./TextBlock";
import SubHero from "@/components/sections/SubHero";

const publications = [
  {
    img: "/publications/publ-card-1.png",
    title: "Halbjahresbericht 2023",
    text: "Unser Erfolgsmodell FLIRT bewegt täglich Menschen und Länder. ",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler_halbjahresbericht%202023_de_final.pdf",
  },
  {
    img: "/publications/publ-card-2.png",
    title: "Geschäftsbericht 2022",
    text: "Unser Erfolgsmodell FLIRT bewegt täglich Menschen und Länder. ",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler_halbjahresbericht%202023_de_final.pdf",
  },
  {
    img: "/publications/publ-card-4.png",
    title: "Nachhaltigkeitsbericht 2021",
    text: "Unser Erfolgsmodell FLIRT bewegt täglich.",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler_nachhaltigkeitsbericht_2022_de_web_v5.pdf",
  },
];

const tableData = [
  {
    publication: "Geschäftsbericht 2021",
    date: "13. März 2021",
    link: "https://www.stadlerrail.com/media/pdf/web_stadler_gb_2021_de.pdf",
  },
  {
    publication: " Halbjahresbericht 2021",
    date: "13. May 2021",
    link:
      "https://www.stadlerrail.com/media/pdf/stadler_halbjahresbericht%202021_de_final.pdf",
  },
  {
    publication: "Geschäftsbericht 2020",
    date: "22. May 2020",
    link:
      "https://www.stadlerrail.com/media/pdf/halbjahresbericht%202020_de.pdf",
  },
  {
    publication: "Halbjahresbericht 2020",
    date: "24. December 2020",
    link:
      "https://www.stadlerrail.com/media/pdf/halbjahresbericht%202020_de.pdf",
  },
  {
    publication: " Geschäftsbericht 2019",
    date: "15. August 2019",
    link: "https://www.stadlerrail.com/media/pdf/web_stadler_rail_gb19_de.pdf",
  },
  {
    publication: "Halbjahresbericht 2019",
    date: "1. January 2019",
    link:
      "https://www.stadlerrail.com/media/pdf/2019_0903_halbjahresbericht%202019_de.pdf",
  },
  {
    publication: "Finanzbericht 2018",
    date: "10. Juli 2018",
    link: "https://www.stadlerrail.com/media/pdf/finanzbericht_2018_de.pdf",
  },
];

const presentations = [
  {
    img: "/presentation.png",
    title: "Präsentation Halbjahresergebnisse 2023",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler%20rail%20-%20half-year%202023%20presentation_f_de.pdf",
  },
  {
    img: "/presentation.png",
    title: "Presentation Full Year Results 2022",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler%20rail%20-%20half-year%202023%20presentation_f_de.pdf",
  },
  {
    img: "/presentation.png",
    title: "Präsentation Capital Markets Day 2022",
    href:
      "https://www.stadlerrail.com/media/pdf/stadler%20rail%20-%20half-year%202023%20presentation_f_de.pdf",
  },
];

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

// const generalversammlungList = [
//   {
//     title: "Halbjahresbericht 2023",
//     image: "/cover_thumbnail_web.jpg",
//     download: "Download",
//     href: "/",
//   },
//   {
//     title: "Halbjahresbericht 2023",
//     image: "/cover_thumbnail_web.jpg",
//     download: "Download",
//     href: "/",
//   },
//   {
//     title: "Halbjahresbericht 2023",
//     image: "/cover_thumbnail_web.jpg",
//     download: "Download",
//     href: "/",
//   },
//   {
//     title: "Halbjahresbericht 2023",
//     image: "/cover_thumbnail_web.jpg",
//     download: "Download",
//     href: "/",
//   },
//   {
//     title: "Halbjahresbericht 2023",
//     image: "/cover_thumbnail_web.jpg",
//     download: "Download",
//     href: "/",
//   },
// ];
export default function Investors() {
  return (
    <section>
      <SubHero imageUrl="/subhero.jpg"></SubHero>
      {/* Header kann reiner TextHero sein mit Button der auf die letzte Publikation verweist, alle Publikationen zusammen, vlt ein Bild von publikation? */}
      <InvestorHero />
      {/* News & Events -> links Teaser von letzten News, rechts Teaser zu Events, beide verweisen auf Unterseiten */}
      <Publikationen
        tableData={tableData}
        publications={publications}
        title="Publikationen"
      ></Publikationen>
      <Publikationen
        tableData={tableData}
        publications={presentations}
        title="Präsentationen"
        showTable={false}
      ></Publikationen>
      {/* Letzte Publikationen -> 4 letzte Publikationen als Cards anzeigen
      https://flowbite.com/docs/components/card/#horizontal-card
      und der Rest als Collapsible anzeigen mit den restlichen Publikationen
       */}
      {/* <Generalversammlung
        title="Finanzberichte"
        lead="Bitte beachten Sie die neuesten Finanzberichte und erfahren Sie mehr über kommende Anlässe."
        list={generalversammlungList}
      /> */}
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
