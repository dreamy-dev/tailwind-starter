"use client";

import Button from "@/components/elements/ButtonSecondary";
import ContentWidth from "@/components/layouts/ContentWidth";
import H2 from "@/components/typography/H2";
import Text from "@/components/typography/Text";

const ServiceTeasers = (props?: any) => {
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

  return (
    <section className="bg-white dark:bg-gray-900 antialiased my-8">
      <ContentWidth>
        <div className="col-span-12 my-8 ">
          <H2 titleH2="Alle Services auf einen Blick"></H2>
          <Text>
            Hier finden Sie eine Übersicht aller unser Service Angebote.
          </Text>
        </div>
      </ContentWidth>
      <ContentWidth>
        {services.map((item) => (
          <div
            className="col-span-4 max-w-sm bg-white border border-gray-200  shadow dark:bg-gray-800 dark:border-gray-700"
            key={item.label}
          >
            <a href={item.href}>
              <img className="w-24 pl-5 pt-5" src={item.img} alt="" />
            </a>
            <div className="p-5">
              <a href={item.href}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.label}
                </h5>
                <p>{item.description}</p>
              </a>
            </div>
          </div>
        ))}
      </ContentWidth>
    </section>
  );
};

export default ServiceTeasers;
