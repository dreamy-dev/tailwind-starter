import ButtonPrimary from "@/components/elements/ButtonPrimary";
import H1 from "@/components/typography/H1";
import Lead from "@/components/typography/Lead";

export default function LieferantenHero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid grid-cols-12 lg:py-16 lg:px-6">
        <div className="col-span-12 md:col-span-10 font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <div className="flex font-normal">
            <p>Lösungen</p>
            <span className="px-3">|</span>
            <p>Schienenfahrzeuge</p>
          </div>
          <H1>
            Unsere Lieferanten:
            <br />
            Ein exzellentes Netzwerk
          </H1>
          <Lead />
          <ButtonPrimary />
        </div>
      </div>
    </section>
  );
}
