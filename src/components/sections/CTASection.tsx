"use client";

import Image from "next/image";
import ButtonPrimary from "../elements/ButtonPrimary";
import H2 from "../typography/H2";
import Text from "../typography/Text";

export default function CTASection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="bg-primaryBgcGray py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <H2 titleH2={"Send us your CV"}></H2>
          <Text styles="my-6">
            You haven`t found your job position yet? Send us your CV and be the
            first one to be considered when a new job opening is created.
          </Text>
          <ButtonPrimary
            position="center"
            href="https://recruitingapp-2787.umantis.com/Vacancies/Choose/InitiativeApplication/1?lang=ger"
          />
        </div>
      </div>
      <div className="gap-4 mt-8 sm:grid sm:grid-cols-4 sm:mt-12">
        <img
          className="col-span-2 mb-4 sm:block rounded-lg"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-1.png"
          alt="content gallery 1"
        />
        <img
          className="hidden col-span-1 sm:block rounded-lg"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-2.png"
          alt="content gallery 2"
        />
        <img
          className="hidden col-span-1 sm:block rounded-lg"
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
          alt="content gallery 3"
        />
      </div>
    </section>
  );
}
