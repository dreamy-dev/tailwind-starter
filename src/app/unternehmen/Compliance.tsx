export default function Compliance() {
  return (
    <section className="bg-white mb-12">
      <div className="items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-16 lg:px-6">
        <div className="col-span-2">
          {/* <p className="text-lg font-medium text-primary-600 dark:text-primary-500">
            COMPLIANCE
          </p> */}
          <h2 className="mt-3 mb-8 text-3xl tracking-tight font-extrabold tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Compliance
          </h2>
          <p className="font-light mb-6 text-gray-500 sm:text-xl dark:text-gray-400">
            Der Erfolg und der gute Ruf unseres Unternehmens basieren auf dem
            Vertrauen, das Aktionäre, Mitarbeitende, beziehungsweise die mit
            ihnen in Geschäftsbeziehungen stehenden Personen.
          </p>
          <p className="font-light text-gray-500 mb-6">
            Dazu gehört auch das Vertrauen in unser Compliance Programm.
          </p>
          <p className="font-light text-gray-500 mb-6">
            Mit dem Stadler Compliance-Programm möchten wir vorbeugend und aktiv
            sicherstellen, dass unsere Geschäftspraktiken und diejenigen unserer
            Dienstleister stets mit den geltenden Gesetzen sowie unseren
            internen Weisungen in Einklang stehen.
          </p>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-1 md:gap-12 md:space-y-0">
          <div>
            <img
              className="mr-4 w-auto md:h-auto"
              src="/signature-spuhler.jpg"
              alt="office image"
            />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              Peter Spuhler
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Verwaltungsratspräsident
            </p>
          </div>
          <div>
            <img
              className="mr-4 w-42 md:h-auto"
              src="/signature-krapf.jpg"
              alt="office image"
            />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              Maja Krapf
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Chief Compliance Officer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
