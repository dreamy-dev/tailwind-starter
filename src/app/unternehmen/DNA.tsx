export default function DNA() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="text-center text-gray-900">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 lg:text-5xl dark:text-white">
            Die DNA von Stadler
          </h2>
        </div>
        <div className="grid gap-6 mt-12 lg:mt-14 lg:gap-12 md:grid-cols-3">
          <div className="flex mb-2 md:flex-col md:mb-0">
            <img
              className="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-1.png"
              alt="office image"
            />
            <div>
              <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">
                Build as one team
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Work seamlessly across your organization on a platform designed
                for collaboration.
              </p>
            </div>
          </div>
          <div className="flex mb-2 md:flex-col md:mb-0">
            <img
              className="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-2.png"
              alt="office image 2"
            />
            <div>
              <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">
                Transform your culture
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Embrace innersource, iterate faster, and ship more frequently
                using best tools from open source teams.
              </p>
            </div>
          </div>
          <div className="flex md:flex-col">
            <img
              className="mr-4 w-auto h-36 md:w-full md:h-auto rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-3.png"
              alt="office image 3"
            />
            <div>
              <h3 className="text-xl font-bold md:mt-4 mb-2.5 text-gray-900 dark:text-white">
                Learn as you build
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Get insight into how your team builds today with
                community-backed KPIs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
