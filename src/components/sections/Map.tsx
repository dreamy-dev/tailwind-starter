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
    text: "Produktionsstandorte",
    end: 7,
    suffix: "",
  },
  {
    text: "Komponentenwerke",
    end: 7,
    suffix: "",
  },
  {
    text: "Signalling-Kompetenzcenter",
    end: 5,
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
      <div className="col-span-12 w-full bg-white pb-5 lg:pb-24">
        <MapTextTitle />
        <Stats data={statsData} backgroundColor="bg-white" />
        <div className="relative flex flex-col-reverse lg:flex-none">
          <div className="pl-6 lg:pl-20 py-8 relative w-full lg:w-[24%] z-10">
            <div className="relative">
              <ul className="text-primary grid grid-cols-2 lg:grid-cols-1 ">
                {countries.map((country, index) => (
                  <li className="mb-3 whitespace-no-wrap mr-16 lg:mr-0" key={index}>
                    <a href="#">{country}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <ButtonPrimary position="left" href="/standorte">Alle Standorte</ButtonPrimary>
            </div>
          </div>
          <div className="pl-6 static lg:absolute top-0 w-[84%] left-[16%] h-full">
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
