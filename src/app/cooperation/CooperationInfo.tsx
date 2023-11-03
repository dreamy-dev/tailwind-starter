export default function CooperationExisting() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 antialiased">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Information for existing
            </h2>
            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of
              people who share your interests.
            </p>
          </div>

          <div className="mt-12 space-y-16 sm:mt-16">
            <div className="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
              <div>
                <img
                  className="object-cover w-full rounded-lg shadow-lg dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/flowbite-dashboard.jpg"
                  alt=""
                />
                <img
                  className="object-cover w-full rounded-lg shadow-lg dark:block hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/flowbite-dashboard-dark.jpg"
                  alt=""
                />
              </div>

              <div className="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl">
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                    Flowbite's dashboard
                  </h3>

                  <p className="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                    Flowbite helps you connect with friends, family and
                    communities of people who share your interests. Connecting
                    with your friends and family as well as discovering new ones
                    is easy with features like Groups.
                  </p>
                  <p className="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                    Flowbite helps you connect with friends, family and
                    communities of people who share your interests. Connecting
                    with your friends and family as well as discovering new ones
                    is easy with features like Groups.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:items-center lg:flex-row gap-y-8 sm:gap-y-12 lg:gap-x-16 xl:gap-x-24">
              <div className="lg:order-2">
                <img
                  className="object-cover w-full rounded-lg shadow-lg dark:hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page.jpg"
                  alt=""
                />
                <img
                  className="object-cover w-full rounded-lg shadow-lg dark:block hidden"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/case-study/agency-landing-page-dark.jpg"
                  alt=""
                />
              </div>

              <div className="w-full space-y-6 lg:max-w-lg shrink-0 xl:max-w-2xl lg:order-1">
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl dark:text-white">
                    Agency Landing Page
                  </h3>

                  <p className="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                    Flowbite helps you connect with friends, family and
                    communities of people who share your interests. Connecting
                    with your friends and family as well as discovering new ones
                    is easy with features like Groups.
                  </p>
                  <p className="text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                    Flowbite helps you connect with friends, family and
                    communities of people who share your interests. Discovering
                    new ones is easy with features like Groups.
                  </p>
                </div>

                <a
                  href="#"
                  title=""
                  className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  role="button"
                >
                  Download Requirements
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
