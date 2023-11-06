import ButtonPrimary from "@/components/elements/ButtonPrimary";
import H2 from "@/components/typography/H2";

export default function Career() {
  return (
    <section className="bg-white mt-12 mb-8 px-0 lg:px-20">
      <div className="max-w-full px-4 py-8  lg:px-6 sm:py-16 lg:py-20  mx-auto bg-primarySolid-50">
        <div className="mb-4 text-center tracking-tight dark:text-white ">
          <H2 titleH2=" Karriere bei Stadler" textColor="black"></H2>
        </div>
        <p className="mb-10 text-center text-base font-normal text-gray-500 dark:text-gray-500 md:max-w-3xl md:mx-auto sm:text-xl">
          Wer die besten Züge der Welt baut,
          <br /> braucht die besten Fachkräfte der Welt.
        </p>
        <div className="flex justify-center">
          <ButtonPrimary />
          {/* <a
            href="#"
            title=""
            className="px-5 py-3 text-base font-medium text-center text-white bg-primary-700 rounded-lg shrink-0 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            role="button"
          >
            Jetzt bewerben
          </a> */}
        </div>
      </div>
    </section>
  );
}
