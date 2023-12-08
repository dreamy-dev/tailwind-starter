"use client";

import Contact from "@/components/sections/Contact";
import Subscribe from "@/components/sections/Subscribe";
import Publicationen from "@/components/sections/Publikationen";
import HeroText from "@/components/sections/HeroText";
import HomePageCaroucel from "@/components/sections/HomePageCaroucel";
import TeaserDownload from "../../components/sections/TeaserDownload";
import EventCalendar from "@/components/sections/EventCalendar";
import ButtonPrimary from "@/components/elements/ButtonPrimary";


const newsCards = [
  {
    title: "Stadler bleibt Premium Partner der Eisbären",
    date: "28.11.2023",
    text: "Die Eisbären Berlin freuen sich, den Schienenfahrzeughersteller Stadler weiterhin zu ihren Premium Partnern zu zählen. Stadler ...",
    img: "https://www.stadlerrail.com/media/img/800x/gruppenfoto%202%20nah-sh-optimiert.jpg",
  },
  {
    title:
      "Stadler eröffnet neues Logistikzentrum für den Schienenverkehr in Berlin Pankow",
    date: "07.11.2023",
    text: "Gemeinsam mit Berlins Regierendem Bürgermeister, Kai Wegner, sowie der Senatorin für Wirtschaft, Energie und Betriebe, Franzisk...",
    img: "/pressefoto-einweihung.jpg",
  },
  {
    title:
      "Neue Akkuzüge sind jetzt auch zwischen Kiel, Lübeck und Lüneburg unterwegs",
    date: "23.10.2023",
    text: "In Schleswig-Holstein ist die weltweit erste batterieelektrische Zugflotte im regelmäßigen Linienbetrieb unterwegs. Damit ha...",
    img: "https://www.stadlerrail.com/media/img/800x/mwe_0920%20-%20cropped.jpg",
  },
  {
    title: "Weitere neue Wasserstoffzüge für Kalifornien",
    date: "16.10.2023",
    text: "Der Bundesstaat Kalifornien und Stadler haben am 12. Oktober 2023 eine wegweisende Vereinbarung unterzeichnet, die einen bedeutenden Schr...",
    img: "https://www.stadlerrail.com/media/img/800x/caltrans-coastline-16-9.jpg",
  },
  {
    title:
      "Erste TINA-Strassenbahnen starten in den Probebetrieb mit Fahrgästen",
    date: "16.10.2023",
    text: "Die neuen Strassenbahnen der Baureihe TINA öffnen ihre Türen: Seit dem 9. Oktober 2023&nbsp;können Fahrgäste im Rahme...",
    img: "https://www.stadlerrail.com/media/img/800x/tina_darmstadt.jpg",
  },
  // {
  //   title: "Neue S-Bahn-Fahrzeuge für Berlin jetzt komplett im Einsatz",
  //   text: "106 neue Fahrzeuge planmäßig geliefert und in den Fahrgastbetrieb überführt · Neue Züge bieten hohen Kom...",
  //   img: "https://www.stadlerrail.com/media/img/800x/neue-s-bahn-berlin-komplett-1-lr.jpg",
  // },
  // {
  //   title:
  //     "Grüner Bahnverkehr in Österreich: Stadler erhält Zuschlag für Batteriezüge	",
  //   text: "Die Österreichischen Bundesbahnen (ÖBB) erteilen Stadler den Zuschlag für eine Rahmen-vereinbarung über bis zu 120 Ba...",
  //   img: "https://www.stadlerrail.com/media/img/800x/flirt%20akku%20prototype.jpg",
  // },
  // {
  //   title: "Stadler liefert die ersten Schmalspur-Wasserstoffzüge für Italien",
  //   text: "Die italienischen Bahnbetreiber Azienda Regionale Sarda Trasporti (ARST) und Ferrovie della Calabria (FdC) haben Stadler den Zuschlag &uu...",
  //   img: "https://www.stadlerrail.com/media/img/800x/01_hmu-arst-ext-fronta.jpg",
  // },
  // {
  //   title:
  //     "Weiterer Erfolg in Italien: Stadler liefert Züge für den Regionalverkehr um den Vesuv",
  //   text: "Stadler und EAV haben &nbsp;einen neuen Vertrag über elektrische Triebzüge für den Regionalverkehr rund um den Vesuv unter...",
  //   img: "https://www.stadlerrail.com/media/img/800x/220513_napoles_ext_persp%20copia.jpg",
  // },
  // {
  //   title:
  //     "Mehr Kapazität im Nah- und Fernverkehr: ÖBB bestellen erneut 35 neue Doppelstock-Triebzüge bei Stadler",
  //   text: "Die Österreichischen Bundesbahnen (ÖBB) bestellen erneut 35 neue Doppelstock-Triebzüge vom Typ KISS bei Stadler. Neben 14 ...",
  //   img: "	https://www.stadlerrail.com/media/img/800x/oebb_railjet_kiss.jpg",
  // },
  // {
  //   title: "Stadler erhält Zuschlag für neue Strassenbahnen für Mailand",
  //   text: "Stadler gewinnt die jüngste Ausschreibung von ATM über die Lieferung von neuen Strassenbahnen für Mailand. Die neue Rahmen...",
  //   img: "https://www.stadlerrail.com/media/img/800x/01_tramlink_atm.jpg",
  // },
  // {
  //   title: "Stadlers FLIRT erobert neuen Markt: Erster Auftrag aus Litauen",
  //   text: "Die Erfolgsgeschichte des FLIRT setzt sich fort: Nach mehr als weltweit 2500 verkauften FLIRT-Triebzügen hat Stadler nun den ersten ...",
  //   img: "https://www.stadlerrail.com/media/img/800x/flirt%20bemu%20ltg%20link%202.jpg",
  // },
  // {
  //   title: "Internationaler Bestseller: FLIRT Triebzug zum 2500. Mal verkauft",
  //   text: "Stadler feiert Jubiläum: 2500 verkaufte FLIRT. Rund 20 Jahre nach dem ersten Auftrag hat Stadler nun in Italien den 2500. Triebzug d...",
  //   img: "https://www.stadlerrail.com/media/img/800x/first%20flirt_%20s-bahn%20zug.jpg",
  // },
  // {
  //   title:
  //     "HEAG mobilo und Stadler schließen Servicevertrag zur Ersatzteilversorgung der neuesten Straßenbahngeneration vom Typ «TINA» in Darmstadt",
  //   text: "Am 25.05.2023 haben Stadler und die HEAG mobilo in Darmstadt einen Servicevertrag über die Ersatzteilversorgung sowie die technische...",
  //   img: "https://www.stadlerrail.com/media/img/800x/heag-mobilo_stadler-tina_aussen.jpg",
  // },
  // {
  //   title:
  //     "HEAG mobilo und Stadler schließen Servicevertrag zur Ersatzteilversorgung der neuesten Straßenbahngeneration vom Typ «TINA» in Darmstadt",
  //   text: "Am 25.05.2023 haben Stadler und die HEAG mobilo in Darmstadt einen Servicevertrag über die Ersatzteilversorgung sowie die technische...",
  //   img: "https://www.stadlerrail.com/media/img/800x/heag-mobilo_stadler-tina_aussen.jpg",
  // },
];

export default function Medien() {
  return (
    <div>
      <HeroText
        title={<>Medienbereich</>}
        leadText="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />
      <HomePageCaroucel
        items={newsCards}
        carouselTitle="News"
        showButton={true}
        showDate={true}
        h2Styles="flex justify-left items-left"
      ></HomePageCaroucel>

      <TeaserDownload></TeaserDownload>
      <Publicationen></Publicationen>
      <EventCalendar></EventCalendar>
      <Contact></Contact>

      <Subscribe />
    </div>
  );
}
