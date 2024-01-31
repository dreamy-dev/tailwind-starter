import { useState, ChangeEvent } from "react";
const countries = [
  {
    name: "Schweiz",
  },
  {
    name: "Deutschland",
  },
  {
    name: "Spanien",
  },
  {
    name: "Polen",
  },
  {
    name: "Ungarn",
  },
  {
    name: "USA",
  },
  {
    name: "Weissrussland",
  },
  {
    name: "Österreich",
  },
  {
    name: "Kazachstan",
  },
  {
    name: "Tschechien",
  },
  {
    name: "Vereinigtes Königsreich",
  },
  {
    name: "Schweden",
  },
  {
    name: "Norwegen",
  },
];

const options = ["Produktion / Komponenten", "Signalling", "Service"];

const images = [
  "/stadler-world-map-home.svg",
  "/icons/map-blue.svg",
  "/icons/map-light-blue.svg",
  "/icons/map-grey.svg",
];

export default function StandorteFilters() {
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedRadio, setSelectedRadio] = useState("");

  const handleOptionChange = (event: ChangeEvent<{ value: string }>) => {
    setSelectedOption(event.target.value);
 
  };

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(event.target.value);

  };

  const renderImage = () => {
    switch (selectedRadio) {
      case "Produktion / Komponenten":
        return (
          <img
            className="w-full h-auto"
            src="/icons/map-grey.svg"
            alt="Map image"
          />
        );
      case "Signaling":
        return (
          <img
            className="w-full h-auto"
            src="/icons/map-blue.svg"
            alt="Map image"
          />
        );
      case "Service":
        return (
          <img
            className="w-full h-auto"
            src="/icons/map-light-blue.svg"
            alt="Map image"
          />
        );
      default:
        return (
          <img
            className="w-full h-auto"
            src="/stadler-world-map-home.svg"
            alt="Default Image"
          />
        );
    }
  };

  
  return (
    <>
   
        <ul className="p-0 mb-8">{renderImage()}</ul>
  
      <div className="flex flex-col items-center justify-center pb-4 space-y-3 md:pb-0 md:mt-4 dark:bg-gray-800 md:flex-row md:space-y-0 md:space-x-4">
        <ul className="flex-wrap hidden text-sm font-medium text-center text-gray-500 md:flex dark:text-gray-400">
          <li className="mb-4 mr-2 lg:mr-4">
            <select
              className=" px-4 py-2 text-base border block"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              <option disabled value="">
                Land
              </option>
              {countries.map((country, index) => (
                <option key={index} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </li>

          <li className="mb-4 mr-2 lg:mr-4">
            {options.map((option, index) => (
              <label key={index} className="mb-4 mr-2 lg:mr-4">
                <input
                  type="radio"
                  value={option}
                  checked={selectedRadio === option}
                  onChange={handleRadioChange}
                  className="hidden"
                />
                <div
                  className={`inline-block px-4 py-2 text-base border rounded ${
                    selectedRadio === option
                      ? "dark:bg-gray-700 dark:border-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white"
                      : "dark:bg-gray-700 dark:border-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {option}
                </div>
              </label>
            ))}
          </li>
          <li className="mb-4 mr-2 lg:mr-4">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                className="inline-block px-8 py-2 text-base border hover:text-gray-900 hover:bg-gray-100"
                placeholder="Search "
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
