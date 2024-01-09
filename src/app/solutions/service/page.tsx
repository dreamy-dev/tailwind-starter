"use client";

import ContentWidth from "@/components/layouts/ContentWidth";
import FactsAndFigures from "@/components/sections/FactsAndFigures";
import HeroText from "@/components/sections/HeroText";
import Link from "@/components/typography/Link";
import ServiceTeasers from "./ServiceTeasers";
import FullWidth from "@/components/layouts/FullWidth";
import ImageFullWidth from "@/components/sections/ImageFullWidth";




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
      end:8.6,
      suffix:" Mrd.",
      separator:" ",
      decimals:1,
      decimal:".",
      duration:3,
  }
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
    start:0,
    end: 11.749,
    separator:" ",
    decimals:3,
    decimal:"'",
    duration: 3,
  },
];

 const services = [
    {
      label: "Full Service",
      description:
        "Der Full Service ist ein ganzheitliches Angebot, das die komplette Fahrzeuginstandhaltung umfasst. ",
      img: "https://www.stadlerrail.com/service/Icon_Full_Service.jpg",
      href: "/solutions/service/full-service",
    },
    {
      label: "TSSSA",
      description:
        "Der Full Service ist ein ganzheitliches Angebot, das die komplette Fahrzeuginstandhaltung umfasst. ",
      img: "https://www.stadlerrail.com/service/Icon_TSSSA.jpg",
      href: "/solutions/service/tsssc",
    },
    {
      label: "Ersatzteile",
      description:
        "Der Full Service ist ein ganzheitliches Angebot, das die komplette Fahrzeuginstandhaltung umfasst. ",
      img: "https://www.stadlerrail.com/service/Icon_Spare_Parts.jpg",
      href: "/solutions/service/spare",
    },
    {
      label: "Modernisation",
      description:
        "Der Full Service ist ein ganzheitliches Angebot, das die komplette Fahrzeuginstandhaltung umfasst. ",
      img: "https://www.stadlerrail.com/service/Icon_Modernisierung.jpg",
      href: "/solutions/service/refit",
    },
    {
      label: "Revisionen",
      description:
        "Der Full Service ist ein ganzheitliches Angebot, das die komplette Fahrzeuginstandhaltung umfasst. ",
      img: "https://www.stadlerrail.com/service/Icon_Revision.jpg",
      href: "/solutions/service/overhaul",
    },
    {
      label: "Reparaturen",
      description:
        "Der Full Service ist ein ganzheitliches Angebot, das die komplette Fahrzeuginstandhaltung umfasst. ",
      img: "https://www.stadlerrail.com/service/Icons_Repair.jpg",
      href: "/solutions/service/repair",
    },
    {
      label: "ECM",
      description:
        "Der Full Service ist ein ganzheitliches Angebot, das die komplette Fahrzeuginstandhaltung umfasst. ",
      img: "https://www.stadlerrail.com/service/Icon_ECM.jpg",
      href: "/solutions/service/ecm",
    },
  ];
export default function Service() {
  return (
    <>
      <HeroText
        breadcrumbs={[
          { text: "Lösungen", link: "/solutions" },
          { text: "Service", link: "/service" },
        ]}
        title="Service Angebot"
        leadText="Für Stadler endet Kundennähe nicht mit der Auslieferung der Züge. Unsere Mitarbeitenden stehen unseren Kunden als Servicepartner rund um die Uhr mit Rat und Tat zur Seite, um höchste Qualität zu garantieren. Dadurch gewährleisten wir die Zuverlässigkeit und Verfügbarkeit unserer Schienenfahrzeuge über die gesamte Lebensdauer."
        // withCTA={true}
        // buttonText="CTA Button"
      />
      <ImageFullWidth imgSrc="/teaser_service.jpeg" />
      <ServiceTeasers
        mainTitle="Alle Services auf einen Blick"
        text="Hier finden Sie eine Übersicht aller unser Service Angebote."
        services={services}
      />
      <FactsAndFigures data1={facts} data2={figures} title="Daten und Fakten" />
    </>
  );
}
