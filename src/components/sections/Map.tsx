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
            <ButtonPrimary position="left">Alle Standorte</ButtonPrimary>
          </div>
        </div>
        <div className="absolute top-0 left-[16%]">
          <img className="w-full h-auto" src="/Weltkarte.png" alt="" />
        </div>
      </div>
    </div>
  );
}
