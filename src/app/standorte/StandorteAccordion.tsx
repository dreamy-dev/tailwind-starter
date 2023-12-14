import { useState } from "react";


 const locations = [
   {
     id: "1",
     division: "Division Schweiz",
     location: "Chemnitz",
     name: "Stadler Chemnitz Gmbh",
     type: ["Service", "Production"],
     contactPerson: { title: "Geschäftsleiter", name: "Albrecht Teich" },
     phone: "+41 71 626 21 20",
     email: "stadler.rail@stadlerrail.com",
     img: "./chemnitz-standortfoto.jpg",
     description:
       "Am Standort Chemnitz unterhält Stadler ein flexibles, schlagkräftiges Team von rund 160 Ingenieuren und Ingenieurinnen sowie Entwicklern und Entwicklerinnen. Die Mitarbeitenden erbringen für die Stadler-Gruppe Engineering-Leistungen in den Bereichen Konstruktion, Berechnung, Elektrik, Pneumatik und der Mehrkörpersimulation.",
   },
   {
     id: "2",
     division: "Division Components",
     location: "Biel",
     name: "Stadler Stahlguss AG",
     type: ["Service", "Production", "Signaling"],
     contactPerson: { title: "CEO", name: "Michael Schmitz" },
     phone: "+41 (0)32 344 45 00",
     fax: "+41 (0)32 344 45 10",
     email: "info@stadlerstahlguss.ch",
     img: "./stadler_stahlguss.jpg",
     description:
       "Die Stadler Stahlguss AG bietet vom Engineering, über den Guss und die mechanische Fertigbearbeitung, bis hin zur Röntgenprüfung alles, was man von einer modernen und zukunftsorientierten Giesserei erwartet. Neben der Produktion für andere Standorte von Stadler werden auch Unternehmen aus den verschiedensten Industriebereichen beliefert. Die SSG gehört seit 2004 zu Stadler. In diesem Jahr übernahm Stadler die frühere Von Roll Stahlgiesserei Biel AG.",
   },
   {
     id: "3",
     division: "Division Signaling",
     location: "Wallisellen",
     name: "Stadler Signalling",
     type: ["Signaling"],
     contactPerson: { title: "CEO", name: "Marc Trippel" },
     phone: "+41 (0)32 344 45 00",
     email: "stadler.signalling@stadlerrail.com",
     img: "./officewallisellen2_skaliert.jpg",
     description:
       "Seit 2017 hat Stadler ein unabhängiges, internationales Kompetenzzentrum für Signaltechnik aufgebaut, welches Ende 2021 um die ehemalige BÄR Bahnsicherung AG erweitert wurde. Heute hat der Bereich Signalling von Stadler den Hauptsitz in Wallisellen mit weiteren Standorten in der Schweiz und Deutschland. Das breite Signalling-Portfolio umfasst sämtliche Lösungen in den Bereichen automatisiertes Fahren (ATO), Zugsicherung (ETCS und Class-B), CBTC-Lösungen für führerloses Fahren sowie Stellwerkstechnik (ESTW und RSTW). Wir bieten unseren Kunden massgeschneiderte Signalling-Lösungen in allen Segmenten (Vollbahnen, Nebenbahnen, LRV, Metro) um einen effizienten, digitalen und nachhaltigen Bahnbetrieb zu sichern.",
   },
 ];



interface ShowAccordionState {
  [key: string]: boolean;
}



export default function StandorteAccordion() {
  const [showAccordion, setShowAccordion] = useState<ShowAccordionState>({});

  const toggleAccordion = (id: string) => {
    setShowAccordion((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };
  return (
    <>
      {locations.map((item) => (
        <div
          key={item.id}
          className="text-gray-500 mb-8 border bg-white border-gray-200 shadow-md"
        >
          <div className="flex items-start justify-between w-full p-5 font-medium rtl:text-right text-gray-500">
            <div className="pt-4">
              <div className="flex">
                <p className="mb-3 mr-4 py-1 px-2 inline-flex items-center text-xs rounded-full font-light bg-primaryTrans-100 tracking-tight text-gray-900">
                  {item.division}
                </p>
                <p className="mb-3 py-1 px-2 text-xs tracking-tight rounded-full  font-light bg-greenBright text-gray-900">
                  {item.location}
                </p>
              </div>
              <h3 className="mb-2 text-4xl font-semibold tracking-tight text-gray-900">
                {item.name}
              </h3>

              <div className="items-start space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
                <div className="-ml-2 mr-3 w-full flex">
                  {item.type.map((type, key) => (
                    <a
                      key={key}
                      href="#"
                      className="inline-block px-4 py-2 mr-4 border rounded-full text-xs"
                    >
                      {type}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div
              onClick={() => toggleAccordion(item.id)}
              className={`cursor-pointer py-2.5 leading-6 font-medium  rounded flex items-center gap-2 ${
                showAccordion[item.id] ? "rotate-90" : "-rotate-90"
              }`}
            >
              <svg
                width="26"
                height="26"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.55124 20L4 18.3171L13.0269 10L4 1.68288L5.55124 0L16.4099 10L5.55124 20Z"
                  fill="#6b7280"
                />
              </svg>
            </div>
          </div>
          {showAccordion[item.id] && (
            <div className="p-6">
              <div className="flex justify-start items-start">
                <div className="w-9/12">
                  {item.contactPerson && (
                    <>
                      <p className="mb-1 text-base font-semibold leading-relaxed text-gray-900">
                        {item.contactPerson.title}
                      </p>
                      <p className="mb-8 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {item.contactPerson.name}
                      </p>
                    </>
                  )}
                  {item.phone && (
                    <>
                      <div className="mb-4 flex justify-start items-center">
                        <img
                          src="./icons/phone-outline-black.svg"
                          className="mr-4 flex w-6"
                          alt="office"
                        />
                        {item.phone}
                      </div>
                    </>
                  )}
                  {item.fax && (
                    <>
                      <div className="mb-4 flex justify-start items-center">
                        <svg
                          className="-mt-1 mr-4 flex w-6"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 18 20"
                        >
                          <path
                            stroke="#3379A9"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 4H1m3 4H1m3 4H1m3 4H1m6.071.286a3.429 3.429 0 1 1 6.858 0M4 1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Zm9 6.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                          />
                        </svg>
                        {item.fax}
                      </div>
                    </>
                  )}
                  {item.email && (
                    <>
                      <div className="flex mb-4 justify-start items-center">
                        <img
                          src="./icons/mail-blue.svg"
                          className="mr-4 flex w-6"
                          alt="office"
                        />
                        {item.email}
                      </div>
                    </>
                  )}

                  <div className="flex justify-start items-center text-primary">
                    <img
                      src="./icons/map-pin-blue.svg"
                      className="mr-2 flex w-6"
                      alt="office"
                    />{" "}
                    <a className="" href="#">
                      Open in Google Maps
                    </a>
                  </div>
                </div>
                <img src={item.img} className="flex w-3/12" alt="office" />
              </div>
              <div className="pt-8">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
