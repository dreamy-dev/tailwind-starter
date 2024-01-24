import ButtonPrimary from "../../components/elements/ButtonPrimary";

export default function SuccessStories() {
  return (
    <section className="bg-white ">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Success Stories
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Crafted with skill and care to help our clients grow their business!
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <a href="#">
              <img
                src="/success-story.jpg"
                className="mb-2 w-full max-w-full rounded-lg"
                alt="Image 1"
              />
            </a>
            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Alphabet Inc.
            </span>
            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Official website
            </h3>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of
              people who share your interests.
            </p>
            <div className="justify-center inline-flex items-center">
              <ButtonPrimary>
                Find out more
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
            </div>
          </div>

          <div className="space-y-4">
            <a href="#">
              <img
                src="/success-story.jpg"
                className="mb-2 w-full max-w-full rounded-lg"
                alt="Image 1"
              />
            </a>
            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Microsoft Corp.
            </span>
            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Management system
            </h3>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of
              people who share your interests.
            </p>
            <div className="justify-center inline-flex items-center">
              <ButtonPrimary>
                Find out more
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
            </div>
          </div>

          <div className="space-y-4">
            <a href="#">
              <img
                src="/success-story.jpg"
                className="mb-2 w-full max-w-full rounded-lg"
                alt="Image 1"
              />
            </a>
            <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
              Adobe Inc.
            </span>
            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Logo design
            </h3>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Flowbite helps you connect with friends, family and communities of
              people who share your interests.
            </p>
            <div className="justify-center inline-flex items-center">
              <ButtonPrimary>
                Find out more
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
