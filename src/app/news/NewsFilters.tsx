const countries = [
  {
    name: "Alle Länder",
  },
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

const categories = [
  {
    name: "Alle Kategorien",
  },
  {
    name: "Ad-Hoc-Mitteilungen",
  },
  {
    name: "Corporate Mitteilungen",
  },
  {
    name: "Produktmitteilungen ",
  },
];

const products = [
  {
    name: "Alle Produkte",
  },
  {
    name: "Schienenfahrzeuge",
  },
  {
    name: "SMILE",
  },
  {
    name: "KISS",
  },
  {
    name: "FLIRT",
  },
  {
    name: "WINK",
  },
  {
    name: "TINA",
  },
  {
    name: "TRAMLINK",
  },
  {
    name: "TANGO",
  },
  {
    name: "VARIOBAHN",
  },
  {
    name: "CITYLINK",
  },
  {
    name: "METRO",
  },
  {
    name: "Lokomotive",
  },
  {
    name: "Tailor Made",
  },
  {
    name: "GTW",
  },
  {
    name: "Signalling",
  },
  {
    name: "ETCS",
  },
  {
    name: "CBTC",
  },
  {
    name: "Service",
  },
];

const years = [
  {
    name: "Alle Jahre",
  },
  {
    name: "2023",
  },
  {
    name: "2022",
  },
  {
    name: "2021",
  },
  {
    name: "2020",
  },
  {
    name: "2019",
  },
  {
    name: "2018",
  },
  {
    name: "2017",
  },
  {
    name: "2016",
  },
  {
    name: "2015",
  },
  {
    name: "2014",
  },
  {
    name: "2013",
  },
  {
    name: "2012",
  },
  {
    name: "2011",
  },
  {
    name: "2010",
  },
  {
    name: "2009",
  },
  {
    name: "2008",
  },
];

export default function StandorteFilters() {
  return (
    <>
      <div className="flex flex-col mb-8 items-center justify-center pb-4 space-y-3 md:pb-0 md:mt-4 dark:bg-gray-800 md:flex-row md:space-y-0 md:space-x-4">
        <ul className="flex-wrap hidden text-sm font-medium text-center text-gray-500 md:flex dark:text-gray-400">
          <li className="mb-4 mr-2 lg:mr-4">
            <select className=" px-4 py-2 text-base border rounded  block">
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
            <select className=" px-4 py-2 text-base border rounded  block">
              <option disabled value="">
                Kategorie
              </option>
              {categories.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </li>
          <li className="mb-4 mr-2 lg:mr-4">
            <select className=" px-4 py-2 text-base border rounded block">
              <option disabled value="">
                Produkt
              </option>
              {products.map((product, index) => (
                <option key={index} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </li>
          <li className="mb-4 mr-2 lg:mr-4">
            <select className=" px-4 py-2 text-base border rounded block">
              <option disabled value="">
                Jahr
              </option>
              {years.map((year, index) => (
                <option key={index} value={year.name}>
                  {year.name}
                </option>
              ))}
            </select>
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
                className="inline-block px-8 py-2 text-base rounded border hover:text-gray-900 hover:bg-gray-100"
                placeholder="Search "
              />
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
