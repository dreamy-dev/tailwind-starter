"use client";

export default function SustainableProcurement() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 xl:gap-16 sm:py-16 lg:px-6 ">
        <img
          className="mb-4 w-full lg:mb-0"
          src="/FLIRT_H2_Teaser.jpg"
          alt="feature image"
        />
        <div className="text-gray-500 dark:text-gray-400 sm:text-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Verantwortungsvolle Beschaffung
          </h2>
          <p className="mb-4 font-light lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            sit amet eros pulvinar, commodo augue ac, viverra justo. Vivamus a
            ultricies elit. Interdum et malesuada fames ac ante ipsum primis in
            faucibus. Phasellus a dapibus dolor.
          </p>
          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex">
              <div className="flex justify-center items-center mr-4 w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900 shrink-0">
                <svg
                  className="w-5 h-5 text-primary-600 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Lorem ipsum
                </h3>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                  Ut fringilla auctor dui, in vestibulum enim tempor ac. Nullam
                  et velit eu ante tincidunt fringilla nec id tortor. Mauris
                  venenatis justo magna.
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
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  Lorem ipsum
                </h3>
                <p className="mb-2 font-light text-gray-500 dark:text-gray-400">
                  Vestibulum sit amet libero ut tellus finibus lacinia. Sed
                  luctus libero eu fringilla finibus. Sed scelerisque facilisis
                  neque condimentum lacinia. Fusce est massa, viverra sit amet
                  risus eu, blandit tincidunt lacus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
