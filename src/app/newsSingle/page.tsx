"use client";

import ArticleBody from "./ArticleBody";
import Contact from "@/components/sections/Contact";
import HomePageCaroucel from "@/components/sections/HomePageCaroucel";

const newsCards = [
  {
    title: "Stadler bleibt Premium Partner der Eisbären",
    date: "28.11.2023",
    text:
      "Die Eisbären Berlin freuen sich, den Schienenfahrzeughersteller Stadler weiterhin zu ihren Premium Partnern zu zählen. Stadler ...",
    img:
      "https://www.stadlerrail.com/media/img/800x/gruppenfoto%202%20nah-sh-optimiert.jpg",
  },
  {
    title:
      "Stadler eröffnet neues Logistikzentrum für den Schienenverkehr in Berlin Pankow",
    date: "07.11.2023",
    text:
      "Gemeinsam mit Berlins Regierendem Bürgermeister, Kai Wegner, sowie der Senatorin für Wirtschaft, Energie und Betriebe, Franzisk...",
    img: "/pressefoto-einweihung.jpg",
  },
  {
    title:
      "Neue Akkuzüge sind jetzt auch zwischen Kiel, Lübeck und Lüneburg unterwegs",
    date: "23.10.2023",
    text:
      "In Schleswig-Holstein ist die weltweit erste batterieelektrische Zugflotte im regelmäßigen Linienbetrieb unterwegs. Damit ha...",
    img:
      "https://www.stadlerrail.com/media/img/800x/mwe_0920%20-%20cropped.jpg",
  },
  {
    title: "Weitere neue Wasserstoffzüge für Kalifornien",
    date: "16.10.2023",
    text:
      "Der Bundesstaat Kalifornien und Stadler haben am 12. Oktober 2023 eine wegweisende Vereinbarung unterzeichnet, die einen bedeutenden Schr...",
    img:
      "https://www.stadlerrail.com/media/img/800x/caltrans-coastline-16-9.jpg",
  },
  {
    title:
      "Erste TINA-Strassenbahnen starten in den Probebetrieb mit Fahrgästen",
    date: "16.10.2023",
    text:
      "Die neuen Strassenbahnen der Baureihe TINA öffnen ihre Türen: Seit dem 9. Oktober 2023&nbsp;können Fahrgäste im Rahme...",
    img: "https://www.stadlerrail.com/media/img/800x/tina_darmstadt.jpg",
  },
];

export default function NewsSingle() {
  return (
    <div>
      <ArticleBody />
      <HomePageCaroucel
        items={newsCards}
        carouselTitle="News"
        showDate={true}
        showButton={true}
        h2Styles="flex justify-left items-left"
      ></HomePageCaroucel>
      <Contact />
    </div>
  );
}
