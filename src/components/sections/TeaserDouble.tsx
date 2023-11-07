import ButtonPrimary from "../elements/ButtonPrimary";

export default function TeaserDouble() {
  return (
    <section className="bg-primaryTrans-50 dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
          <div>
            <div id="deviceTabContent" className="mt-8">
              <div className="">
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                  <div>
                    <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                      Procurement: Our standards
                    </h2>
                    <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                      Our app helps users easily track their expenses and create
                      a budget. With a user-friendly interface, the app allows
                      users to quickly input their income and expenses, and then
                      automatically categorizes them for easy tracking.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200 sm:pt-6 lg:pt-8 dark:border-gray-800">
                    <ul className="space-y-4">
                      <li className="flex items-center gap-2.5">
                        <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                          <svg
                            aria-hidden="true"
                            className="w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-base font-medium text-gray-900 dark:text-white">
                          Continuous integration and deployment
                        </span>
                      </li>

                      <li className="flex items-center gap-2.5">
                        <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                          <svg
                            aria-hidden="true"
                            className="w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-base font-medium text-gray-900 dark:text-white">
                          Development workflow
                        </span>
                      </li>

                      <li className="flex items-center gap-2.5">
                        <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                          <svg
                            aria-hidden="true"
                            className="w-3.5 h-3.5"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-base font-medium text-gray-900 dark:text-white">
                          Knowledge management
                        </span>
                      </li>
                    </ul>

                    <h3 className="mt-6 text-xl font-normal text-gray-500 dark:text-gray-400">
                      Flow Budget takes the hassle out of budgeting and empowers
                      users to take control of their finances
                    </h3>
                  </div>

                  <ButtonPrimary position="left" />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <img
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-2-light.png"
              className="dark:hidden w-[272px] h-[572px]"
              alt=""
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 mt-8 lg:mt-20 lg:gap-16 lg:grid-cols-2">
          <div className="hidden lg:block">
            <img
              className="object-cover w-full dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-tabs-1.png"
              alt="Feature illustration"
            />
            <img
              className="hidden object-cover w-full dark:block"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-tabs-2.png"
              alt="Feature illustration"
            />
          </div>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                Cooperation: Become a partner
              </h2>
              <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 sm:text-xl">
                With a user-friendly interface, the app allows users to quickly
                input their income and expenses, and then automatically
                categorizes them for easy tracking.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200 sm:pt-6 lg:pt-8 dark:border-gray-800">
              <ul className="space-y-4">
                <li className="flex items-center gap-2.5">
                  <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    Dynamic reports and dashboards
                  </span>
                </li>

                <li className="flex items-center gap-2.5">
                  <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    Templates for everyone
                  </span>
                </li>

                <li className="flex items-center gap-2.5">
                  <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    Development workflow
                  </span>
                </li>

                <li className="flex items-center gap-2.5">
                  <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    Limitless business automation
                  </span>
                </li>

                <li className="flex items-center gap-2.5">
                  <div className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-100 text-primary-600 shrink-0 dark:bg-primary-900 dark:text-primary-500">
                    <svg
                      aria-hidden="true"
                      className="w-3.5 h-3.5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-medium text-gray-900 dark:text-white">
                    Knowledge management
                  </span>
                </li>
              </ul>
            </div>

            <ButtonPrimary position="left" />
          </div>
        </div>
      </div>
    </section>
  );
}
