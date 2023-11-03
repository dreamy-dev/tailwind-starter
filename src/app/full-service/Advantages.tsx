export default function Advantages() {
  return (
    <section className="bg-gray-50 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Die Vorteile auf einen Blick
          </h2>
        </div>

        <div className="py-4 mt-8 rounded-lg sm:py-12 lg:mt-16">
          <div className="grid grid-cols-1 gap-8 sm:gap-20 lg:grid-cols-2">
            <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                  Weltweit unterwegs, lokal verankert
                </h3>
                <p className="mt-2 text-base font-normal text-gray-500 sm:text-base dark:text-gray-400">
                  Die 80 Service Standorte weltweit stellen für eine lokale
                  Betreuung vor Ort sicher
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                  Aus einer Hand
                </h3>
                <p className="mt-2 text-base font-normal text-gray-500 sm:text-base dark:text-gray-400">
                  Individuelles Komplett-Angebot mit zentralem Ansprechpartner
                  für alle Anliegen betreffend Instandhaltung
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                  Kosten im Griff
                </h3>
                <p className="mt-2 text-base font-normal text-gray-500 sm:text-base dark:text-gray-400">
                  Mit der regelmässigen Wartung wird die Flotte zuverlässiger,
                  verfügbarer und sicherer. Fixe Kilometerpauschale und
                  definierte Zusatzarbeit sorgen für Kostensicherheit
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
              <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-10 lg:w-12 h-10 lg:h-12 text-primary-600 dark:text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                  Partner auf Augenhöhe
                </h3>
                <p className="mt-2 text-base font-normal text-gray-500 sm:text-base dark:text-gray-400">
                  Wir beteiligen uns bei der Risikoteilung und sorgen für
                  Garantie: Verfügbarkeits- und Zuverlässigkeitsgarantie sowie
                  Obsoleszenzmanagement ist im Full Service integriert
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
