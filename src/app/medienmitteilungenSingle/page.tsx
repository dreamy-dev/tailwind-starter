"use client";

import MedienmitteilungenBody from "./MedienmitteilungenBody";
import Contact from "@/components/sections/Contact";
import MedienmitteilungenList from "@/components/sections/MedienmitteilungenList";
import Subscribe from "@/components/sections/Subscribe";

const customMedienmitteilungen = [
  {
    date: "18.01.2024",
    medien: "FdC bestellt drei weitere Schmalspur-Wasserstoffzüge bei Stadler",
    categories: [
      {
        category: "Product",
        link: "#",
      },
    ],
    links: [
      {
        text: "DE",
        link: "#",
      },
      {
        text: "EN",
        link: "#",
      },
      {
        text: "IT",
        link: "#",
      },
      {
        text: "PX",
        link: "#",
      },
    ],
  },
  {
    date: "11.01.2024",
    medien:
      "Offizielle Übergabe des Premierenfahrzeugs der nächsten Berliner U-Bahngeneration",
    categories: [
      {
        category: "Ad-Hoc",
        link: "#",
      },
    ],
    links: [
      {
        text: "DE",
        link: "#",
      },
      {
        text: "EN",
        link: "#",
      },
      {
        text: "PX",
        link: "#",
      },
    ],
  },
  {
    date: "20.12.2023",
    medien:
      "EURO9000 erhält grünes Licht für den Betrieb in Belgien und den Niederlanden",
    categories: [
      {
        category: "Corporate",
        link: "#",
      },
    ],
    links: [
      {
        text: "DE",
        link: "#",
      },
      {
        text: "EN",
        link: "#",
      },
      {
        text: "FR",
        link: "#",
      },
      {
        text: "PX",
        link: "#",
      },
    ],
  },
  {
    date: "12.12.2023",
    medien:
      "Neuer Reisekomfort für Fahrgäste und Personal im Fernverkehr der Deutschen Bahn",
    categories: [
      {
        category: "Produkt",
        link: "#",
      },
    ],
    links: [
      {
        text: "DE",
        link: "#",
      },
      {
        text: "PX",
        link: "#",
      },
    ],
  },
];

export default function NewsSingle() {
  return (
    <div>
      <MedienmitteilungenBody />
      <MedienmitteilungenList
        mainTitle="Alle Medienmitteilungen"
        medienmitteilungenList={customMedienmitteilungen}
      />
      <Subscribe />
      <Contact />
    </div>
  );
}
