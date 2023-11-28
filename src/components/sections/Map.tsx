import ButtonPrimary from "../elements/ButtonPrimary";
import MapTextTitle from "./MapTextTitle";
import Stats from "./Stats";

const countries = [
  "Schweiz",
  "Deutschland",
  "Spanien",
  "Polen",
  "Ungarn",
  "USA",
  "Weissrussland",
  "Österreich",
  "Kazachstan",
  "Tschechien",
  "Vereinigtes Königsreich",
  "Schweden",
  "Norwegen",
];
const statsData = [
  {
    text: "Produktionsorte",
    end: 7,
  },
  {
    text: "Signalling-Kompetenzcenter",
    end: 5,
  },
  {
    text: "Komponentenwerke",
    end: 7,
  },
  {
    text: "Service-Standorte",
    end: 80,
  },
];

export default function Map() {
  return (
    <div className=" bg-white w-full  py-24  ">
      <MapTextTitle />
      <Stats data={statsData} backgroundColor="bg-white" />
      <div className="relative ">
        <div className="pl-20 ">
          <div>
            <ul className="text-primary ">
              {countries.map((country, index) => (
                <li className="mb-3 whitespace-no-wrap w-[250px]" key={index}>
                  {country}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <ButtonPrimary position="left">
              Alle Standorte{" "}
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
        </div>
        <div className="absolute top-0 left-[16%]">
          <img className="w-full h-auto" src="/Weltkarte.png" alt="" />
        </div>
      </div>
    </div>
  );
}
