import Slider from "./Slider";

export default function Figures() {
  return (
    <section className="bg-white dark:bg-gray-900 lg:py-16 py-8">
      <div className="px-4 mx-auto mb-8 max-w-screen-md text-center md:mb-16 lg:px-0">
        <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 md:text-4xl dark:text-white">
          Unwavering in our commitment to trust
        </h2>
        <div>
          <a
            href="#"
            className="inline-flex justify-center items-center text-base font-medium text-primaryDarkBlue hover:text-primary-900 dark:text-primary-800 dark:hover:text-primary-700"
          >
            See open Jobs for Switzerland
            <svg
              className="ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <Slider />
      {/* <div className="mx-auto max-w-screen-xl">
        <div
          id="animation-carousel"
          className="relative px-16 sm:px-24"
          data-carousel="slide"
        >
          <div className="overflow-hidden relative h-48 rounded-lg sm:h-64 xl:h-80 2xl:h-80">
            <div
              className="grid hidden absolute inset-0 gap-8 transition-all duration-700 ease-linear transform lg:grid-cols-2"
              data-carousel-item=""
            >
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/office-work.png"
                className="block w-full h-full rounded-lg"
                alt="..."
              />
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/office.png"
                className="hidden w-full h-full rounded-lg lg:block"
                alt="..."
              />
            </div>
            <div
              className="grid hidden absolute inset-0 gap-8 transition-all duration-700 ease-linear transform lg:grid-cols-2"
              data-carousel-item=""
            >
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/conference.png"
                className="block w-full h-full rounded-lg"
                alt="..."
              />
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/girl-with-phone.png"
                className="hidden w-full h-full rounded-lg lg:block"
                alt="..."
              />
            </div>
            <div
              className="grid hidden absolute inset-0 gap-8 transition-all duration-700 ease-linear transform lg:grid-cols-2"
              data-carousel-item=""
            >
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/man-at-office.png"
                className="block w-full h-full rounded-lg"
                alt="..."
              />
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/meeting.png"
                className="hidden w-full h-full rounded-lg lg:block"
                alt="..."
              />
            </div>
            <div
              className="grid hidden absolute inset-0 gap-8 transition-all duration-700 ease-linear transform lg:grid-cols-2"
              data-carousel-item=""
            >
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/work-from-home.png"
                className="block w-full h-full rounded-lg"
                alt="..."
              />
              <img
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/social-proof/carousel-slider/workspace.png"
                className="hidden w-full h-full rounded-lg lg:block"
                alt="..."
              />
            </div>
          </div>
          <button
            type="button"
            className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-prev=""
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white/30 bg-gray-800/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
              <span className="hidden">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
            data-carousel-next=""
          >
            <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 dark:bg-white/30 bg-gray-800/30 dark:group-hover:bg-white/50 group-hover:bg-gray-800/60 group-focus:ring-4 dark:group-focus:ring-white group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-5 h-5 text-white sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
              <span className="hidden">Next</span>
            </span>
          </button>
        </div>
      </div> */}

      <dl className="grid grid-cols-2 gap-8 mx-auto mt-8 max-w-screen-xl text-gray-900 lg:mt-14 sm:grid-cols-3 xl:grid-cols-6 dark:text-white">
        <div className="flex flex-col justify-center items-center">
          <dt className="mb-2 text-3xl font-extrabold md:text-4xl">73M+</dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            Developers
          </dd>
        </div>
        <div className="flex flex-col justify-center items-center">
          <dt className="mb-2 text-3xl font-extrabold md:text-4xl">100M+</dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            Public repositories
          </dd>
        </div>
        <div className="flex flex-col justify-center items-center">
          <dt className="mb-2 text-3xl font-extrabold md:text-4xl">1000s</dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            Open source projects
          </dd>
        </div>
        <div className="flex flex-col justify-center items-center">
          <dt className="mb-2 text-3xl font-extrabold md:text-4xl">1B+</dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            Contributors
          </dd>
        </div>
        <div className="flex flex-col justify-center items-center">
          <dt className="mb-2 text-3xl font-extrabold md:text-4xl">90+</dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            Top Forbes companies
          </dd>
        </div>
        <div className="flex flex-col justify-center items-center">
          <dt className="mb-2 text-3xl font-extrabold md:text-4xl">4M+</dt>
          <dd className="font-light text-gray-500 dark:text-gray-400">
            Organizations
          </dd>
        </div>
      </dl>
    </section>
  );
}
