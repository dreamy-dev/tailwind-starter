"use client";

import H2 from "@/components/typography/H2";
import ButtonPrimary from "@/components/elements/ButtonPrimary";



const SustainableProcurement = ({title, showButton}) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 sm:py-16 lg:px-6 ">
        <img
          className="mb-4 object-cover object-left h-[700px] lg:mb-0"
          src="/SMILE-am-Zugersee.jpg"
          alt="feature image"
        />
        <div className=" sm:text-lg">
          {/* Nachhaltigkeit in der Lieferkette */}
          <H2>{title}</H2>
          <p className="my-4 font-normal lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sit amet eros pulvinar, commodo augue ac, viverra justo. Vivamus a
            ultricies elit. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Phasellus a dapibus dolor.
          </p>
          <div className="py-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex">
              <div className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 shrink-0">
                <svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Lorem ipsum
                </h3>
                <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
                  Ut fringilla auctor dui, in vestibulum enim tempor ac. Nullam
                  et velit eu ante tincidunt fringilla nec id tortor.
                </p>
              </div>
            </div>
            <div className="flex pt-8">
              <div className="flex justify-center items-center mr-4 w-8 h-8 bg-purple-100 rounded-full dark:bg-purple-900 shrink-0">
                <svg
                  className="w-5 h-5 text-purple-600 dark:text-purple-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Lorem ipsum
                </h3>
                <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
                  Vestibulum sit amet libero ut tellus finibus lacinia. Sed
                  luctus libero eu fringilla finibus.
                </p>
              </div>
            </div>
          </div>
          {showButton && (
            <ButtonPrimary position="left" href="/nachhaltigkeit">
              Nachhaltigkeit
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_5650_6261)">
                  <path
                    d="M0.500001 8.33153L11.9366 8.33153L8.15071 13.5408L9.41267 14.5176L14.5 7.51758L9.41267 0.517578L8.15072 1.49432L11.9366 6.70362L0.500001 6.70362L0.500001 8.33153Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_5650_6261">
                    <rect
                      width="14"
                      height="14"
                      fill="white"
                      transform="translate(0.5 0.517578)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </ButtonPrimary>
          )}
        </div>
      </div>
    </section>
  );
}
export default SustainableProcurement;