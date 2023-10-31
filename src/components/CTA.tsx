export default function CTA() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="bg-primaryBgcGray py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight text-gray-900 dark:text-white">
            Karriere bei Stadler
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            Wer die besten Züge der Welt baut, braucht die besten Fachkräfte der
            Welt.
          </p>
          <a
            href="https://recruitingapp-2787.umantis.com/Vacancies/Choose/InitiativeApplication/1?lang=ger"
            className="text-white bg-primaryDarkBlue hover:bg-primary-900 focus:ring-4 focus:ring-primary-800 font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >
            Jetzt bewerben
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_5650_6261)">
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
          </a>
        </div>
      </div>
    </section>
  );
}
