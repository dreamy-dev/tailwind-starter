"use client";

import HeroText from "@/components/sections/HeroText";
import Publikationen from "@/components/sections/Publikationen";
import TeaserDownload from "@/components/sections/TeaserDownload";

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

const downloads = [
  {
    text: "Code of Conduct",
  },
  {
    text: "Geschäftsbedingungen",
  },
  {
    text:
      "Allgemeine Einkaufsbedingungen Stadler Bussnang AG / Stadler Rheintal AG / Stadler Winterthur AG / Stadler Signalling AG / Stadler Service AG",
  },
  {
    text:
      "Ergänzende Einkaufsbedingungen für EU-Zulassungsprozesse Stadler Rheintal AG",
  },
  {
    text: "Kurzanleitung Zeitfensterbuchung",
  },
  {
    text: "Stadler Bussnang AG & Stadler Service AG Logistikspezifikation",
  },
];

export default function Downloadcenter() {
  return (
    <>
      <HeroText title="Download Center" />
      <Publikationen
        tableData={tableData}
        publications={presentations}
        title="Präsentationen"
        showTable={true}
      ></Publikationen>
      <TeaserDownload
        title="Allgemeine Downloads"
        buttonLink="/downloadcenter"
        buttonText="Alle Medienmitteilungen"
        showList={true}
        showButton={false}
        listData={downloads}
      ></TeaserDownload>
    </>
  );
}
