export default function References() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              VR (Finnland)
            </h2>
            <p className="mb-4">
              Im Rahmen der TSSSA-Vereinbarung mit einer Vertragsdauer von 2021
              bis 2031 hat VR mit Stadler einen Vertrag abgeschlossen, in
              welchem wir u.a. unser Instandhaltungssystem Stadler Rail
              Maintenance System (SRMS) erfolgreich implementiert und eine
              Schnittstelle zum Kundensystem geschaffen haben.
            </p>
            <p>
              Die Mitarbeitenden der VR arbeiten effizient mit unserer Software,
              die Berichte, Transparenz und einen Live-Status der Züge bietet.
            </p>
          </div>
          <div className="flex mt-8">
            <img
              className="w-full rounded-lg"
              src="/Referenzen_TSSSA_Bild-VR.jpg"
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
                src="/Referenzen_TSSSA_Bild-Jena.jpg"
                className="dark:hidden"
                alt="mockup"
              />
            </div>
            <div className="col-span-6 text-center sm:mb-6 lg:text-left lg:mb-0">
              <a
                href="#"
                className="inline-flex items-center justify-between px-1 py-1 pr-4 mb-6 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700"
                role="alert"
              >
                <span className="px-3 py-1 mr-3 text-xs text-white rounded-full bg-primary-600">
                  New
                </span>{" "}
                <span className="text-sm font-medium">See the Reference</span>
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
              <h1 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Jena Strassenbahn (Deutschland)
              </h1>
              <p className="max-w-xl mx-auto mb-4 font-light text-gray-500 lg:mx-0 xl:mb-6 md:text-lg xl:text-xl dark:text-gray-400">
                Gemeinsam mit unserem Kunden Jenaer Nahverkehr und dessen
                Mitarbeitenden arbeitet Stadler eng an der optimalen Integration
                der 24 neuen Strassenbahnen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
