"use client";

import TeaserDownload from "@/components/sections/TeaserDownload";

export default function Datenschutz() {

const listDatenschutz = [
  {
    text: "Stadler Bussnang - Kunden und Lieferanten",
  },
  {
    text: "Stadler Signalling Deutschland GmbH – Kunden und Lieferanten",
  },
  {
    text: "Website",
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
    text: "Job Abo",
  },
  {
    text: "Compliance Meldestelle",
  },
];

  return (
    <>
      <TeaserDownload
        title="Datenschutz"
        leadText="  Es freut uns, dass Sie sich für den Schutz Ihrer Daten interessieren, denn das tun wir auch. Im Folgenden finden Sie die Datenschutzerklärungen für verschiedene Bearbeitungen. Falls Sie Fragen dazu haben, wenden Sie sich bitte an compliance@stadlerrail.com. Vielen Dank!"
        buttonLink="/downloadcenter"
        buttonText="Alle Medienmitteilungen"
        showList={true}
        showButton={false}
        listData={listDatenschutz}
      ></TeaserDownload>
    </>
  );
}
