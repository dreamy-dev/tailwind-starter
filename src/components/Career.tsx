import ButtonPrimary from "@/components/elements/ButtonPrimary";

export default function Career() {
  return (
    <section className="bg-white mt-12 mb-8">
      <div className="max-w-screen-xl px-16 py-20 mx-auto bg-bgcLightBlue">
        <h2 className="text-2xl mb-4 text-center font-extrabold leading-none tracking-tight text-black dark:text-white sm:text-3xl lg:text-4xl">
          Karriere bei Stadler
        </h2>
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
