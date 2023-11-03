import ButtonPrimary from "@/components/elements/ButtonPrimary";
import H2 from "@/components/typography/H2";

export default function References() {
  return (
    <>
      <section className="bg-white">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <H2
              textColor="black"
              titleH2="Full Service für die Merseyrail-Flotte in Liverpool"
              styles="font-extrabold mb-8"
            />
            <p className="mb-4">
              Seit 2017 ist Stadler für die Wartung und die Reinigung der
              Merseyrail-Züge der Klassen 507 und 508 in Liverpool
              verantwortlich. Bis 2019 wurden die Wartungs-, Rangier- und
              Reinigungsarbeiten für die alte Flotte in den Depots Kirkdale und
              Birkenhead North durchgeführt.
            </p>
            <ButtonPrimary>
              Find out more
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5650_6261)">
                  <path
                    d="M0.500001 8.33153L11.9366 8.33153L8.15071 13.5408L9.41267 14.5176L14.5 7.51758L9.41267 0.517578L8.15072 1.49432L11.9366 6.70362L0.500001 6.70362L0.500001 8.33153Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5650_6261">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(0.5 0.517578)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </ButtonPrimary>
          </div>
          <div className="flex mt-8">
            <img
              className="w-full"
              src="/Referenzen-Full-Service_Bild-Merseyrail.jpg"
              alt="reference 1"
            />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
          <div className="grid items-center gap-8 mb-8 lg:mb-16 lg:gap-12 lg:grid-cols-12">
            <div className="col-span-6">
              <img
                src="/Referenzen-Full-Service_Bild-MTR-Express.jpg"
                className="dark:hidden"
                alt="mockup"
              />
            </div>
            <div className="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
              <div className="font-light text-gray-500 sm:text-lg">
                <a
                  href="#"
                  className="inline-flex items-center justify-between px-1 py-1 pr-4 mb-6 text-sm text-gray-700 bg-gray-100 rounded-full"
                  role="alert"
                >
                  <span className="px-3 py-1 mr-3 text-sm text-white rounded-full bg-primary">
                    Factsheet
                  </span>{" "}
                  <span className="text-sm font-medium">Download PDF</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <H2
                  textColor="black"
                  titleH2="Full Service führte bei MTR Express zu mehr Auslastung und Verfügbarkeit"
                  styles="font-extrabold mb-8"
                />
                <p>
                  Im November 2013 bestellte der schwedische Bahnbetreiber MTR
                  Express sechs fünfteilige Niederflurtriebzüge vom Typ FLIRT.
                  Die Fahrzeuge basieren auf der bewährten FLIRT-Plattform und
                  wurden für die besonderen Bedingungen in den nordischen
                  Ländern entwickelt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
