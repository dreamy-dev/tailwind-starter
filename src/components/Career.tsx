import ButtonPrimary from "@/components/elements/ButtonPrimary";
import H2 from "@/components/typography/H2";
import ContentWidth from "./layouts/ContentWidth";

export default function Career() {
  return (
    <section className="bg-white mt-16 mb-16">
      <ContentWidth>
        <div className="col-span-12 w-full  py-20 bg-bgcLightBlue">
          <div className="mb-4 text-center tracking-tight dark:text-white ">
            <H2 titleH2=" Karriere bei Stadler" textColor="black"></H2>
          </div>
          <p className="mb-10 text-center text-base font-normal text-gray-500 dark:text-gray-500 md:max-w-3xl md:mx-auto sm:text-xl">
            Wer die besten Züge der Welt baut,
            <br /> braucht die besten Fachkräfte der Welt.
          </p>
          <div className="flex justify-center">
            <ButtonPrimary />
          </div>
        </div>
      </ContentWidth>
    </section>
  );
}
