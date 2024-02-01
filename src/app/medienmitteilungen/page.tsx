"use client";

import HeroText from "@/components/sections/HeroText";
import Contact from "@/components/sections/Contact";
import TeaserMedienmitteilungen from "../../components/sections/TeaserMedienmitteilungen";
import MedienmitteilungenList from "@/components/sections/MedienmitteilungenList";
import Features from "@/components/sections/Features";
import ContentWidth from "@/components/layouts/ContentWidth";
import Subscribe from "@/components/sections/Subscribe";

const listMedienmitteilungen = [
  {
    link: "/medienmitteilungenSingle",
    date: "05.12.2023",
    text:
      "Stadler Prag feiert 15-jähriges Jubiläum und verzeichnet starkes Wachstum.",
  },
  {
    link: "/medienmitteilungenSingle",
    date: "07.11.2023",
    text:
      "Stadler eröffnet neues Logistikzentrum für den Schienenverkehr in Berlin Pankow.",
  },
  {
    link: "/medienmitteilungenSingle",
    date: "09.11.2023",
    text:
      "Stadler macht Lokomotiven für das ETCS fit und ermöglicht damit schnelleren ETCS-Roll-Out in Deutschland.",
  },
  {
    link: "/medienmitteilungenSingle",
    date: "31.10.2023",
    text: "TRAMLINK startet Linienverkehr in Bern.",
  },
];

const customMedienmitteilungen = [
  {
    date: "18.01.2024",
    medien: "FdC bestellt drei weitere Schmalspur-Wasserstoffzüge bei Stadler",
    medienLink: "/medienmitteilungenSingle",
    categories: [
      {
        category: "Ad-Hoc",
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
    medienLink: "/medienmitteilungenSingle",
    categories: [
      {
        category: "Corporate",
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
    medienLink: "/medienmitteilungenSingle",
    categories: [
      {
        category: "Produkt",
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
    medienLink: "/medienmitteilungenSingle",
    categories: [
      {
        category: "Produkt",
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
    medienLink: "/medienmitteilungenSingle",
    categories: [
      {
        category: "Ad-Hoc",
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
    medienLink: "/medienmitteilungenSingle",
    categories: [
      {
        category: "Corporate",
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
    medienLink: "/medienmitteilungenSingle",
    categories: [
      {
        category: "Produkt",
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
    medienLink: "/medienmitteilungenSingle",
    categories: [
      {
        category: "Produkt",
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

const featuresData = [
  {
    imageSrc: "/teaser_signalling-2.jpg",
    title: "Medien",
    href: "/medien",
  },
  {
    imageSrc: "/teaser_service.jpeg",
    title: " News",
    href: "/news",
  },
];
export default function Medienmitteilungen() {
  return (
    <div className="mb-16">
      <HeroText
        breadcrumbs={[{ text: "Medien", link: "/medien" }]}
        title="Medienmitteilungen"
        leadText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sem diam, volutpat tristique congue in, fermentum et arcu. Donec elementum ac dolor consectetur laoreet. Vestibulum augue elit, malesuada eu eros ut, consectetur placerat turpis. Aenean vel dapibus velit. Nulla dapibus sem est. Pellentesque nec lectus accumsan, rutrum ipsum ut, mattis quam. "
        // withCTA={true}
        // buttonText="CTA Button"
      />
      <TeaserMedienmitteilungen
        title="Ad-Hoc Medienmitteilungen"
        listData={listMedienmitteilungen}
      ></TeaserMedienmitteilungen>

      <MedienmitteilungenList
        mainTitle="Alle Medienmitteilungen"
        medienmitteilungenList={customMedienmitteilungen}
      />

      <Subscribe />
      <Contact />
      <Features
        mainTitle="Möchten Sie gerne mehr über uns erfahren?"
        featuresData={featuresData}
      />
    </div>
  );
}
