"use client";

import HeroText from "@/components/sections/HeroText";
import Contact from "@/components/sections/Contact";
import MedienmitteilungenFilters from "./MedienmitteilungenFilters";
import TeaserMedienmitteilungen from "../../components/sections/TeaserMedienmitteilungen";
import DoubleCardNews from "@/components/sections/DoubleCardNews";
import MedienmitteilungenList from "@/components/sections/MedienmitteilungenList";

const listMedienmitteilungen = [
  {
    link: "/medienmitteilungenSingle",
    text:
      "05.12.2023 Stadler Prag feiert 15-jähriges Jubiläum und verzeichnet starkes Wachstum.",
  },
  {
    link: "/medienmitteilungenSingle",
    text:
      "07.11.2023 Stadler eröffnet neues Logistikzentrum für den Schienenverkehr in Berlin Pankow.",
  },
  {
    link: "/medienmitteilungenSingle",
    text:
      "09.11.2023 Stadler macht Lokomotiven für das ETCS fit und ermöglicht damit schnelleren ETCS-Roll-Out in Deutschland.",
  },
  {
    link: "/medienmitteilungenSingle",
    text: "31.10.2023 TRAMLINK startet Linienverkehr in Bern.",
  },
];

const customMedienmitteilungen = [
  {
    date: "18.01.2024",
    medien: "FdC bestellt drei weitere Schmalspur-Wasserstoffzüge bei Stadler",
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
  {
    date: "18.01.2024",
    medien: "FdC bestellt drei weitere Schmalspur-Wasserstoffzüge bei Stadler",
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

export default function Medienmitteilungen() {
  return (
    <div className="mb-16">
      <HeroText
        breadcrumbs={[{ text: "Medien" }]}
        title="Medienmitteilungen"
        leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem diam, volutpat tristique congue in, fermentum et arcu. Donec elementum ac dolor consectetur laoreet. Vestibulum augue elit, malesuada eu eros ut, consectetur placerat turpis. Aenean vel dapibus velit. Nulla dapibus sem est. Pellentesque nec lectus accumsan, rutrum ipsum ut, mattis quam. "
        // withCTA={true}
        // buttonText="CTA Button"
      />
      <TeaserMedienmitteilungen
        title="Ad-Hoc Medienmitteilungen"
        listData={listMedienmitteilungen}
      ></TeaserMedienmitteilungen>

      <MedienmitteilungenFilters />
      <MedienmitteilungenList
        mainTitle="Alle Medienmitteilungen"
        medienmitteilungenList={customMedienmitteilungen}
      />
      <DoubleCardNews titleTwo="News" />
      <Contact />
    </div>
  );
}
