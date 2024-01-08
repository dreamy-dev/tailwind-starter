"use client";

import Hero from "./Hero";
import SustainableProcurement from "./SustainableProcurement";
import FAQ from "../../components/sections/Accordion";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import Quote from "@/components/sections/Quote";
import Contact from "@/components/sections/Contact";
import TeaserDouble from "@/components/sections/TeaserDouble";
import TeaserImageLeft from "@/components/sections/TeaserImageLeft";
import TeaserImageRight from "@/components/sections/TeaserImageright";

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

const data = [
  {
    title:
      "1-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    description:
      "1-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title:
      "2-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    description:
      "2-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title:
      "3-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    description:
      "3-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title:
      "4-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    description:
      "4-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title:
      "5-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    description:
      "5-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title:
      "6-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    description:
      "6-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title:
      "7-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua?",
    description:
      "7-Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];
export default function Lieferanten() {
  return (
    <>
      <Hero />
      <FactsAndFigures
        data1={facts}
        data2={figures}
        title="Supply Chain Management in Zahlen"
        showTwoRows={false}
      />
      <Quote />
      <TeaserImageRight
        imageSrc="Referenzen_TSSSA_Bild-VR.jpg"
        title="Geschäftsbedingungen in der Beschaffung"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
        listItems={["Lorem ipusm", "Dolor sit amet", "Stet clita"]}
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
        buttonText="Mehr dazu"
        buttonHref="/procurement"
        backgroundColor="primaryTrans-50"
      ></TeaserImageRight>
      <TeaserImageLeft
        imageSrc="news-1.jpg"
        title="Werden Sie Partner von Stadler"
        description="  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor"
        listItems={[
          "Lorem ipusm",
          "Dolor sit amet",
          "Stet clita",
          "Dolore magna",
          "Consetetur sadip",
        ]}
        buttonText="Jetzt Partner werden"
        buttonHref="/cooperation"
        backgroundColor="primaryTrans-50"
      ></TeaserImageLeft>
      {/* <TeaserDouble /> */}
      <SustainableProcurement title="Nachhaltigkeit in der Lieferkette" />
      <FAQ mainTitle="Frequently asked questions" faqs={data}/>
      <Contact
        title="Ihr Kontakt"
        contactname="Supply Management"
        contactlevel=" "
      />
    </>
  );
}
