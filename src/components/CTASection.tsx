"use client";

import Image from "next/image";

export default function CTASection() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="bg-primaryBgcGray py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            Send us your CV
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            You haven`t found your job position yet? Send us your CV and be the
            first one to be considered when a new job opening is created.
          </p>
          <a
            href="https://recruitingapp-2787.umantis.com/Vacancies/Choose/InitiativeApplication/1?lang=ger"
            className="text-white bg-primaryDarkBlue hover:bg-primary-900 focus:ring-4 focus:ring-primary-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Apply here
          </a>
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
