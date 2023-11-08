"use client";
import H3 from "./typography/H3";
const FactsAndFigures = () => {
  return (
    <section className="bg-primarySolid-50 dark:bg-gray-900 antialiased">
      <div className="max-w-full px-4 py-8 mx-auto lg:px-20 sm:py-16 lg:py-20">
        <div className="first-level">
          <div className="border-b border-black border-solid">
            <H3>Wirtschaftliche Kennzahlen</H3>
          </div>
          <div className="bg-secondaryBgcGray py-8 sm:py-10">
            <div className="mx-auto max-w-full">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                  <dt className="text-xl leading-7 text-primaryDarkBlue">
                    Umsatz in CHF
                  </dt>
                  <dd className="order-first text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    3.8 Mia.
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                  <dt className="text-xl leading-7 text-primaryDarkBlue">
                    Auftragsbestand in CHF
                  </dt>
                  <dd className="order-first text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    25.4 Mia.
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                  <dt className="text-xl leading-7 text-primaryDarkBlue">
                    Auftragseingang CHF
                  </dt>
                  <dd className="order-first text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    8.6 Mia.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <div className="second-level">
          <div className=" border-b border-black border-solid">
            <H3>Allgemeine Kennzahlen</H3>
          </div>
          <div className="bg-secondaryBgcGray py-8 sm:py-10">
            <div className="mx-auto max-w-full">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                  <dt className="text-xl leading-7 text-primaryDarkBlue">
                    Mitarbeitende
                  </dt>
                  <dd className="order-first text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    13&apos;743
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-2 items-center">
                  <dt className="text-xl leading-7 text-primaryDarkBlue">
                    CO₂-Einsparungen weltweit dank unseren Schienenfahrzeugen
                  </dt>
                  <dt className="text-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_5650_36)">
                        <path
                          d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433284 8.00042 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C19.9971 7.34873 18.9426 4.80688 17.0679 2.93215C15.1931 1.05741 12.6513 0.0029116 10 0ZM9.5 4C9.79667 4 10.0867 4.08797 10.3334 4.25279C10.58 4.41762 10.7723 4.65188 10.8858 4.92597C10.9994 5.20006 11.0291 5.50166 10.9712 5.79263C10.9133 6.08361 10.7704 6.35088 10.5607 6.56066C10.3509 6.77044 10.0836 6.9133 9.79264 6.97118C9.50167 7.02905 9.20007 6.99935 8.92598 6.88582C8.65189 6.77229 8.41762 6.58003 8.2528 6.33335C8.08798 6.08668 8 5.79667 8 5.5C8 5.10217 8.15804 4.72064 8.43934 4.43934C8.72065 4.15803 9.10218 4 9.5 4ZM12 15H8C7.73479 15 7.48043 14.8946 7.2929 14.7071C7.10536 14.5196 7 14.2652 7 14C7 13.7348 7.10536 13.4804 7.2929 13.2929C7.48043 13.1054 7.73479 13 8 13H9V10H8C7.73479 10 7.48043 9.89464 7.2929 9.7071C7.10536 9.51957 7 9.26521 7 9C7 8.73478 7.10536 8.48043 7.2929 8.29289C7.48043 8.10535 7.73479 8 8 8H10C10.2652 8 10.5196 8.10535 10.7071 8.29289C10.8946 8.48043 11 8.73478 11 9V13H12C12.2652 13 12.5196 13.1054 12.7071 13.2929C12.8946 13.4804 13 13.7348 13 14C13 14.2652 12.8946 14.5196 12.7071 14.7071C12.5196 14.8946 12.2652 15 12 15Z"
                          fill="#1E5A9A"
                          fillOpacity="0.4"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_5650_36">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </dt>
                  <dd className="order-first text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    XXt
                  </dd>
                </div>
                <div className="mx-auto flex max-w-xs flex-col gap-y-2 items-center">
                  <dt className="text-xl leading-7 text-primaryDarkBlue">
                    Anzahl ausgelieferte Schienenfahrzeuge weltweit
                  </dt>
                  <dd className="order-first text-6xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    11&apos;749
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactsAndFigures;
