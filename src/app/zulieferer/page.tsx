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
import Text from "@/components/typography/Text";
import H2 from "@/components/typography/H2";
import ButtonPrimary from "@/components/elements/ButtonPrimary";

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

const listItemsLeft=[
            "Lorem ipusm",
            "Dolor sit amet",
            "Stet clita",
            "Dolore magna",
            "Consetetur sadip",
]
        
const listItemsRight = ["Lorem ipusm", "Dolor sit amet", "Stet clita"];

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
      <div className="py-12 bg-primaryTrans-50">
        <TeaserImageRight imageSrc="Referenzen_TSSSA_Bild-VR.jpg">
          <div>
            <H2 styles="text-black">Geschäftsbedingungen in der Beschaffung</H2>
            <Text styles="mt-4 text-xl font-normal text-gray-800 text-black">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor.
            </Text>
          </div>
          {listItemsRight && (
         
              <ul className="space-y-4">
                {listItemsRight.map((item, index) => (
                  <li key={index} className="flex items-center gap-2.5">
                    <div
                      className={`inline-flex items-center justify-center w-5 h-5 rounded-full`}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-3.5 h-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-900 dark:text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
          
          )}
          <ButtonPrimary
            position="left"
            buttonText="Mehr dazu"
            href="/procurement"
          />
        </TeaserImageRight>
        <TeaserImageLeft imageSrc="news-1.jpg">
          <div>
            <H2 styles="text-black">Werden Sie Partner von Stadler</H2>
            <Text styles="mt-4 text-xl font-normal text-black">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor
            </Text>
          </div>
          {listItemsLeft && (
         
              <ul className="space-y-4">
                {listItemsLeft.map((item, index) => (
                  <li key={index} className="flex items-center gap-2.5">
                    <div
                      className={`inline-flex items-center justify-center w-5 h-5 rounded-full`}
                    >
                      <svg
                        aria-hidden="true"
                        className="w-3.5 h-3.5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-base font-medium text-gray-900 dark:text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
           
          )}
          <ButtonPrimary
            position="left"
            buttonText="Jetzt Partner werden"
            href="/cooperation"
          />
        </TeaserImageLeft>
      </div>
      {/* <TeaserDouble /> */}
      <SustainableProcurement title="Nachhaltigkeit in der Lieferkette" showButton={ false} />
      <FAQ mainTitle="Frequently asked questions" faqs={data} />
      <Contact
        title="Ihr Kontakt"
        contactname="Supply Management"
        contactlevel=" "
      />
    </>
  );
}
