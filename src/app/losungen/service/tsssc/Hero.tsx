export default function Hero() {
  return (
    <section className="bg-white mt-12 mb-8 dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 mx-auto">
        <div className="max-w-full justify-start items-center text-white py-12">
          <nav className="flex mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="ml-1 text-sm font-medium text-gray-500 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white"
                  >
                    Services
                  </a>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="mr-1 text-gray-500">|</span>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">
                    TSSSA
                  </span>
                </div>
              </li>
            </ol>
          </nav>

          <h1 className="mb-12 text-left mx-auto text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900">
            TSSSA (TECHNICAL SUPPORT & SPARE SUPPLY AGREEMENT)
          </h1>
          <p className="font-light mx-auto text-left text-gray-700 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
            Im Rahmen des TSSSA (Technical Support & Spare Supply Agreement)
            bietet Stadler von Support-Funktionen über Flottenmanagement bis hin
            zu Ersatzteilen einen breiten Katalog an möglichen Dienstleistungen
            an. Gemeinsam mit den Kunden sorgt Stadler für maximale
            Verfügbarkeit und optimale Instandhaltung. Diese bestimmen den
            Leistungsumfang und profitieren von unserem bewährten Know-how.
          </p>
        </div>
      </div>
      <div className="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-12">
          <img
            className="h-auto max-w-full"
            src="/hero-tsssa-middle.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
