"use client";

import MedienmitteilungenBody from "./MedienmitteilungenBody";
import Contact from "@/components/sections/Contact";
import MedienmitteilungenCustomList from "@/components/sections/MedienmitteilungenCustomList";

const customMedienmitteilungen = [
  {
    title: "Download PDF",
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
    title: "Download Medien",
    links: [
      {
        text: "ZIP",
        link: "#",
      },
    ],
  },
];

export default function NewsSingle() {
  return (
    <div>
      <MedienmitteilungenBody />
      <MedienmitteilungenCustomList
        mainTitle="Downloads"
        medienmitteilungenList={customMedienmitteilungen}
      />
      <Contact />
    </div>
  );
}
