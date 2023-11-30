import ButtonPrimary from "../elements/ButtonPrimary";
import MapTextTitle from "../sections/MapTextTitle";
import FullWidth from "../layouts/FullWidth";
import Stats from "../sections/Stats";

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
    suffix: "",
  },
  {
    text: "Signalling-Kompetenzcenter",
    end: 5,
    suffix: "",
  },
  {
    text: "Komponentenwerke",
    end: 7,
    suffix: "",
  },
  {
    text: "Service-Standorte",
    end: 80,
    suffix: "",
  },
];

export default function Map() {
  return (
    <FullWidth>
      <div className="col-span-12 w-full bg-white py-24">
        <MapTextTitle />
        <Stats data={statsData} backgroundColor="bg-white" />
        <div className="relative">
          <div className="pl-20 py-8 relative w-[24%] bg-greyBrighten-600 z-10">
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
              <ButtonPrimary position="left">Alle Standorte</ButtonPrimary>
            </div>
          </div>
          <div className="absolute top-0 w-[84%] left-[16%] h-full">
            <img
              className="w-full h-auto"
              src="/stadler-world-map-home.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </FullWidth>
  );
}
