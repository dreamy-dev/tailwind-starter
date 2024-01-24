"use client";
import { useState } from "react";
import SmallWidth from "../../components/layouts/SmallWidth";
import TeaserDownload from "../../components/sections/TeaserDownload";
import H1 from "../../components/typography/H1";
import H2 from "../../components/typography/H2";
import H4 from "../../components/typography/H4";
import Lead from "../../components/typography/Lead";
import HeroText from "../../components/sections/HeroText";
import ContentWidth from "../../components/layouts/ContentWidth";
import Text from "../../components/typography/Text";
import ButtonPrimary from "../../components/elements/ButtonPrimary";



 const accordionData = [
   {
     title: "Website",
     innerTitle: "Datenschutzerklärung",
     textFirst:
       "Website Stadlerrail.com Stadler ist ein Systemanbieter von Mobilitätslösungen in Schienenfahrzeugbau, Service und Signaltechnik. Mit dieser Datenschutzerklärung informieren wir Sie über die Bearbeitung von Personendaten im Rahmen der Website-Nutzung durch das unten aufgeführte Unternehmen der Stadler-Gruppe (nachfolgend alle gemeinsam 'Stadler', 'wir' oder 'uns').",
     titleInner2: "Verantwortlicher und Datenschutzbeauftragte",
     textSecond:
       "Verantwortlich für die Datenbearbeitung ist: Stadler Rail AG Ernst-Stadler-Strasse 1 9565 Bussnang Tel: +41 71 626 21 20 stadler.rail@stadlerrail.com Unsere Datenschutzbeauftragte für die Stadler-Gruppe ist: Maja Krapf compliance@stadlerrail.com Für folgende Standorte in DE: Berlin, Chemnitz, Mannheim: Kedua GmbH, Frank Jander, fjander@kedua.de",
   },
   {
     title: "Job Abo",
     innerTitle: "Datenschutzerklärung",
     textFirst:
       "Einschreibung für das Job Abo Stadler ist ein Systemanbieter von Mobilitätslösungen in Schienenfahrzeugbau, Service und Signaltechnik. Mit dieser Datenschutzerklärung informieren wir Sie über die Bearbeitung von Personendaten im Rahmen der Website-Nutzung durch das unten aufgeführte Unternehmen der Stadler-Gruppe (nachfolgend alle gemeinsam 'Stadler', 'wir' oder 'uns').",
     titleInner2: "Verantwortlicher und Datenschutzbeauftragte",
     textSecond:
       "Verantwortlich für die Datenbearbeitung ist: Stadler Rail AG Ernst-Stadler-Strasse 1 9565 Bussnang Tel: +41 71 626 21 20 stadler.rail@stadlerrail.com Unsere Datenschutzbeauftragte für die Stadler-Gruppe ist: Maja Krapf compliance@stadlerrail.com Für folgende Standorte in DE: Berlin, Chemnitz, Mannheim: Kedua GmbH, Frank Jander, fjander@kedua.de",
   },
 ];

 const listDatenschutz = [
   {
     text: "Stadler Bussnang - Kunden und Lieferanten",
   },
   {
     text: "Stadler Signalling Deutschland GmbH – Kunden und Lieferanten",
   },
   {
     text: "Medienmitteilungen und News",
   },
   {
     text: "Videoüberwachung Werksgelände Bussnang und Erlen",
   },
   {
     text: "Videoüberwachung Werksgelände Biel",
   },
   {
     text: "Videoüberwachung Werksgelände St. Margrethen",
   },
   {
     text: "Compliance Meldestelle",
   },
 ];

export default function Datenschutz() {

    const [activeAccordion, setActiveAccordion] = useState(null);

    const handleAccordionClick = (index) => {
      setActiveAccordion(activeAccordion === index ? null : index);
    };

 

  return (
    <>
        <div className="mt-20">
          <HeroText title="Datenschutz" leadText="Es freut uns, dass Sie sich für den Schutz Ihrer Daten
            interessieren, denn das tun wir auch. Im Folgenden finden Sie die
            Datenschutzerklärungen für verschiedene Bearbeitungen. Falls Sie
            Fragen dazu haben, wenden Sie sich bitte an
            compliance@stadlerrail.com." />
          <ContentWidth>
            <div className="col-span-12">
            <div className="pt-8  sm:pt-16 ">
            <div className="z-1000">
              <div id="accordion-flush">
                {accordionData.map((item, index) => (
                  <div key={index}>
                    <h2
                      id={`accordion-flush-heading-${index}`}
                      className="mb-2 text-xl font-medium break-words text-black"
                    >
                      <button
                        type="button"
                        className={`flex justify-between items-center py-5 w-full font-medium text-left ${
                          activeAccordion === index
                            ? "text-black bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
                            : "text-black border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
                        }`}
                        onClick={() => handleAccordionClick(index)}
                        aria-expanded={activeAccordion === index}
                        aria-controls={`accordion-flush-body-${index}`}
                      >
                        {item.title}
                        <svg
                          data-accordion-icon=""
                          className={`w-6 h-6 ${
                            activeAccordion === index ? "rotate-180" : ""
                          } shrink-0`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </h2>
                    <div
                      id={`accordion-flush-body-${index}`}
                      className={`${activeAccordion === index ? "" : "hidden"}`}
                      aria-labelledby={`accordion-flush-heading-${index}`}
                    >
                      <div className="py-5 border-b border-gray-200 dark:border-gray-700">
                        <H4 styles="mb-2 text-black dark:text-gray-400">
                          {item.innerTitle}
                        </H4>
                        <p className="mb-2 text-black dark:text-gray-400">
                          {item.textFirst}
                        </p>
                        <p className="mb-2 text-black dark:text-gray-400">
                          {item.textFirst}
                        </p>
                        <H4 styles="mb-2 text-black dark:text-gray-400">
                          {item.titleInner2}
                        </H4>
                        <p className="mb-2 text-black dark:text-gray-400">
                          {item.textSecond}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            </div>
            </div>
          </ContentWidth>
          <TeaserDownload
            buttonLink="/downloadcenter"
            buttonText="Alle Medienmitteilungen"
            showList={true}
            showButton={false}
            listData={listDatenschutz}
          ></TeaserDownload>
          <ContentWidth>
            <div className="col-span-12 mb-14 flex justify-between align-baseline">
              <Text>Im Downloadcenter finden Sie alle Dokumente in allen Sprachen.</Text>
              <ButtonPrimary buttonText="Zum Downloadcenter" />
            </div>
          </ContentWidth>
        </div>
    </>
  );
}
