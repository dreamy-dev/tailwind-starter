import H2 from "../../../../components/typography/H2";

export default function Description() {
  return (
    <section className="bg-white">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-24 lg:px-6">
        <img
          className="w-full"
          src="https://www.stadlerrail.com/media/img/c/drehgestellmechaniker_berufserfahrene.jpg"
          alt="full service"
        />
        <div className="mt-4 md:mt-0">
          <H2 styles="mb-8">
            Beschreibung des Full Service Angebots
          </H2>
          <p className="mb-6 font-normal text-black-500 md:text-lg">
            Der Full Service ist ein ganzheitliches Angebot, das die komplette
            Fahrzeuginstandhaltung umfasst. Es handelt sich um präventive und
            korrektive Instandhaltung, Revisionen, Condition-Based Maintenance,
            Balanced Maintenance, Asset Management und Entity in Charge of
            Maintenance (ECM). Sie profitieren von garantierter Verfügbarkeit,
            Qualität und Rundum-Kundenservice zu einem fixen Kilometerpreis über
            die Vertragsdauer.
          </p>
        </div>
      </div>
    </section>
  );
}
