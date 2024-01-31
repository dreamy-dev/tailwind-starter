import CardSimple from "@/components/elements/CardSimple";
import H2 from "@/components/typography/H2";

export default function History_Proposal() {
  return (
      <section className="bg-white dark:bg-gray-900 antialiased">
  <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
    <div className="max-w-3xl mx-auto space-y-4 text-center">
      <H2>Our History</H2>
    </div>
    <div className="grid grid-cols-1 mt-12 -mx-8 lg:mt-16 lg:grid-cols-3 gap-y-12">
      <div className="relative border-s border-gray-200 dark:border-gray-700">
        <div className="mb-10 ms-8">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <span className="mb-4 bg-primarySolid-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
            2023
          </span>
        <div>
        <CardSimple />
        </div>
    </div>
    <div className="mb-6 ms-8">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <span className="mb-4 bg-primarySolid-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
            2022
          </span>
    </div>
    <div className="mb-6 ms-8">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <span className="mb-4 bg-primarySolid-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
            2021
          </span>
    </div>
    <div className="mb-10 ms-8">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <span className="mb-4 bg-primarySolid-200 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
            2020
          </span>
        <div className="">
        <CardSimple />
        </div>
    </div>
    </div>
    </div>
  </div>
    </section>
  );
}
