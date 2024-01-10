"use client";

export default function ProcurementCode() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="flex flex-col items-center gap-8 xl:gap-16 lg:flex-row">
            <div className="text-center md:max-w-3xl lg:text-left xl:shrink-0">
              <div>
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                  Code of Conduct
                </h2>
                <p className="mb-4 text-gray-500 sm:text-xl dark:text-gray-400">
                  Here we focus on markets where technology, innovation, and
                  capital can unlock long-term value and drive can unlock
                  long-term value and drive economic growth.
                </p>
                <p className="mb-4 text-gray-500 sm:text-xl dark:text-gray-400">
                  Here we focus on markets where technology.
                </p>
                <a
                  href="#"
                  className="flex justify-between items-center p-4 mb-6 bg-white rounded-lg border-l-8 shadow dark:bg-gray-800 dark:hover:bg-gray-700 border-primary-600 dark:border-primary-500 hover:bg-gray-50"
                >
                  <div>
                    <span className="block mb-1 text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                      Information for the Clients
                    </span>
                    <span className="text-xl font-semibold text-primary-600 dark:text-primary-500">
                      Download the Code
                    </span>
                  </div>
                  <svg
                    className="w-6 h-6 text-primary-600 dark:text-primary-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="max-w-md">
              <img
                className="object-contain w-auto rounded-[1rem] shadow-2xl"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/book.png"
                alt="Book cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
