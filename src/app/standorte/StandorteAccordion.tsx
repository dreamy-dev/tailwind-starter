import { useState } from "react";
import ButtonPrimary from "../../components/elements/ButtonPrimary";

export default function StandorteAccordion() {
  const [showAccordion, setShowAccordion] = useState(false);

  const toggleAccordion = () => {
    setShowAccordion(!showAccordion);
  };

  return (
    <div className="text-gray-500 border bg-white border border-gray-200 shadow-md">
      <div className="flex items-center justify-start w-full p-5 font-medium rtl:text-right text-gray-500">
        <img
          src="./chemnitz-standortfoto.jpg"
          className="flex w-3/12"
          alt="office"
        />
        <div className="flex pl-4 justify-between w-9/12">
          <div className="px-6 pt-4">
            <h3 className="mb-2 text-4xl font-semibold tracking-tight text-gray-900">
              Stadler Chemnitz Gmbh
            </h3>
            <p className="mb-14 text-xl font-light leading-relaxed text-gray-400">
              Chemnitz
            </p>
            <p className="mb-4 text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Division Schweiz
            </p>

            <div className="items-start space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
              <div className="mr-3 w-full flex">
                <a
                  href="#"
                  className="inline-block px-4 py-2 mr-4 border rounded-full text-xs"
                >
                  Service
                </a>
                <a
                  href="#"
                  className="inline-block px-4 py-2 mr-4 border rounded-full text-xs"
                >
                  Production
                </a>
              </div>
            </div>
          </div>

          <div className="p-6 pt-4">
            <div className="mb-4 flex justify-end items-center">
              <img
                src="./icons/phone-outline-black.svg"
                className="mr-4 flex w-6"
                alt="office"
              />
              +41 71 626 21 20
            </div>
            <div className="flex mb-6 justify-end items-center">
              <img
                src="./icons/mail-blue.svg"
                className="mr-4 flex w-6"
                alt="office"
              />
              stadler.rail@stadlerrail.com
            </div>

            <div className="flex justify-end items-center">
              <img
                src="./icons/country.svg"
                className="mr-2 flex w-4"
                alt="office"
              />{" "}
              <a className="mr-8 block text-sm" href="#">
                Website
              </a>
              <img
                src="./icons/map-pin-blue.svg"
                className="mr-2 flex w-4"
                alt="office"
              />{" "}
              <a className="text-sm" href="#">
                Open in Google Maps
              </a>
            </div>

            <div className="mt-12 flex justify-end items-center">
              <div
                onClick={toggleAccordion}
                className="bg-stadlergradient cursor-pointer text-white text-sm px-5 py-2.5 leading-6 font-medium rounded flex items-center gap-2"
              >
                Find out more
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.55124 20L4 18.3171L13.0269 10L4 1.68288L5.55124 0L16.4099 10L5.55124 20Z"
                    fill="#ffffff"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAccordion && (
        <div className="mr-6 flex py-8">
          <div className="p-5 w-3/12"></div>
          <div className="pl-14 w-9/12">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Am Standort Chemnitz unterhält Stadler ein flexibles,
              schlagkräftiges Team von rund 160 Ingenieuren und Ingenieurinnen
              sowie Entwicklern und Entwicklerinnen. Die Mitarbeitenden
              erbringen für die Stadler-Gruppe Engineering-Leistungen in den
              Bereichen Konstruktion, Berechnung, Elektrik, Pneumatik und der
              Mehrkörpersimulation.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
