export default function CompanyTeaser() {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Warum STADLER?
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Weil wir Züge aus der Sicht unserer Kunden bauen. Stadler hört zu,
              entwickelt und baut das optimale Schienenfahrzeug nicht nur für
              Kunden, sondern gemeinsam mit ihnen. Jeder Auftrag ist für uns
              eine persönliche Angelegenheit.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img
                  className="lg:w-6 lg:h-6"
                  src="/icon-technology.png"
                  alt=""
                />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                SPITZEN&shy;TECHNOLOGIE
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Stadler steht nie still. Unsere Technologien entwickeln wir
                laufend weiter, damit alle Fahrzeuge jederzeit dem aktuellsten
                Stand entsprechen.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img className="lg:w-6 lg:h-6" src="/icon-economy.png" alt="" />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                WIRTSCHAFT­LICHKEIT
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Stadler steht für Rentabilität – dank hoher Verfügbarkeit,
                geringem Wartungsaufwand, Energieeffizienz und tiefen
                Life-Cycle-Costs.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img
                  className="lg:w-6 lg:h-6"
                  src="/icon-partnership.png"
                  alt=""
                />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                PARTNERSCHAFT
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Stadler steht Kunden als starker Partner zur Seite, vom ersten
                Kontakt bis zur Auslieferung und darüber hinaus. Unsere vielen
                langjährigen Beziehungen sind der Beweis.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img
                  className="lg:w-6 lg:h-6"
                  src="/icon-responsibility.png"
                  alt=""
                />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                VERANTWORTUNG
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Stadler ist sich der Verantwortung bewusst, welche das
                Unternehmen gegenüber seinen zahlreichen Stakeholdern, der
                Gesellschaft sowie der Umwelt trägt. Wir sind deshalb
                fortlaufend bestrebt, Nachhaltigkeit in unserem Unternehmen zu
                verankern und unser tägliches Handeln darauf abzustimmen.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img
                  className="lg:w-6 lg:h-6"
                  src="/icon-reliable.png"
                  alt=""
                />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                ZUVERLÄSSIGKEIT
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Auf Stadler ist Verlass. Als erfahrener und kompetenter Partner
                liefern wir in höchster Qualität – termingerecht zu den
                vereinbarten Konditionen.
              </p>
            </div>
            <div>
              <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <img
                  className="lg:w-6 lg:h-6"
                  src="/icon-flexibility.png"
                  alt=""
                />
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                FLEXIBILITÄT
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Stadler steht für die klare Haltung: Geht nicht, gibt’s nicht.
                Unsere Ingenieure und Konstrukteure setzen alles daran, die
                Wünsche der Kunden zu erfüllen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
