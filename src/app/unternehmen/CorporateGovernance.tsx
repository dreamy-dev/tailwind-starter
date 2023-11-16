import ButtonPrimary from "@/components/elements/ButtonPrimary";
import H2 from "@/components/typography/H2";
import Text from "@/components/typography/Text";

export default function CorporateGorvernance() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <H2 titleH2="Corporate Governance"></H2>
          <Text>
            Als weltweit agierender Schienenfahrzeughersteller strebt Stadler
            nachhaltiges Wachstum an. Dabei setzen wir uns hohe Standards im
            Bereich der Corporate Governance. Wir kommunizieren offen mit all
            unseren Stakeholdern.
          </Text>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <a href="unternehmen/verwaltungsrat">
            <article className="p-4 h-full flex flex-col flex-wrap justify-between content-start bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Verwaltungsrat
              </h2>
              <p className="mb-4 font-normal text-black dark:text-gray-400">
                Lernen Sie die Verwaltungsräte von Stadler mit einem Blick auf
                die Porträts kennen.
              </p>
              <img className="w-8" src="/icons/arrow-blue.svg" alt="" />
            </article>
          </a>
          <a href="/unternehmen/konzernleitung">
            <article className="p-4 h-full flex flex-col flex-wrap justify-between content-start bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Konzernleitung
              </h2>
              <p className="mb-4 font-normal text-black dark:text-gray-400">
                Entdecken Sie, wer in der Konzernleitung von Stadler zugkräftig
                am Werk ist.
              </p>
              <img className="w-8" src="/icons/arrow-blue.svg" alt="" />
            </article>
          </a>
          <a href="/compliance">
            <article className="p-4 h-full flex flex-col flex-wrap justify-between content-start bg-white  border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Compliance
              </h2>
              <p className="mb-4 font-normal text-black dark:text-gray-400">
                Erfahren Sie, wie Stadler sicherstellt, dass juristische und
                ethische Regeln eingehalten werden.
              </p>
              <img className="w-8" src="/icons/arrow-blue.svg" alt="" />
            </article>
          </a>
        </div>
      </div>
    </section>
  );
}
