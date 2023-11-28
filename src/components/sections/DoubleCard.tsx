import H2 from "@/components/typography/H2";
import ContentWidth from "../layouts/ContentWidth";
import Text from "../typography/Text";

export default function DoubleCard() {
  return (
    <section className="py-24 sm:py-24">
      <ContentWidth>
        <div className="col-span-12  max-w-full mx-auto">
          <div className="mb-12 tracking-tight dark:text-white border border-solid border-greyBrighten-300"></div>
          <ul className="flex items-center justify-start flex-col gap-20 sm:gap-12 md:gap-20 lg:gap-y-28 md:flex-row">
            <li className="max-w-[50%]">
              <img src="/spacer1.jpg" alt="Image" />
              <div className="pr-0 lg:pr-16 ">
                <a
                  href="#"
                  className="flex flex-col items-start gap-2 text-2xl font-bold text-white mt-4"
                >
                  <H2 textColor="white" styles="mt-5 mb-4">
                    Signalling
                  </H2>
                  <Text styles="text-white mb-4">
                    Massgeschneiderte Signalling-Lösungen für kompromisslose
                    Sicherheit und Pünktlichkeit auf jeder Strecke.
                  </Text>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4995_6662)">
                      <path
                        d="M7.72573e-07 11.1628L16.338 11.1628L10.9296 18.6047L12.7324 20L20 10L12.7324 -6.35355e-07L10.9296 1.39535L16.338 8.83721L9.75882e-07 8.83721L7.72573e-07 11.1628Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4995_6662">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </li>
            <li className="max-w-[50%]">
              <img src="/spacer3.jpg" alt="Image" />
              <div className=" pr-0 lg:pr-16 ">
                <a
                  href="#"
                  className="flex flex-col items-start  gap-2 text-2xl font-bold mt-4 text-white"
                >
                  <H2 textColor="white" styles="mt-5 mb-4">
                    Service
                  </H2>
                  <Text styles="text-white mb-4">
                    Regelmässige Service für Gesamtlösungen und
                    Schienenfahrzeuge garantieren zuverlässige Spitzenleistung.
                  </Text>

                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_4995_6662)">
                      <path
                        d="M7.72573e-07 11.1628L16.338 11.1628L10.9296 18.6047L12.7324 20L20 10L12.7324 -6.35355e-07L10.9296 1.39535L16.338 8.83721L9.75882e-07 8.83721L7.72573e-07 11.1628Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_4995_6662">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </ContentWidth>
    </section>
  );
}
