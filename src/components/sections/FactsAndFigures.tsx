import H2 from "../typography/H2";

import CountUp from "react-countup";
import ContentWidth from "../layouts/ContentWidth";

const FactsAndFigures = (props?: any) => {
  return (
    <section className="bg-primarySolid-50 dark:bg-gray-900 antialiased">
      <ContentWidth>
        <div className="col-span-12 px-4 py-8 mx-auto lg:px-20 sm:py-16 lg:py-20">
          <div className="text-center mb-4">
            <H2>{props.title ?? "Daten & Fakten"}</H2>
          </div>
          <div className="first-level">
            {/* <div className="border-b border-black border-solid">
            <H3 titleH3="Wirtschaftliche Kennzahlen"></H3>
          </div> */}
            <div className="bg-secondaryBgcGray py-8 sm:py-10">
              <div className="mx-auto max-w-full">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                  <div className="mx-auto flex max-w-[400]  flex-col gap-y-2">
                    <dt className="text-xl leading-7 text-black">
                      Nettoerlös in CHF
                    </dt>
                    <dd className="order-first text-6xl font-bold tracking-tight text-primary sm:text-5xl">
                      <CountUp
                        start={0}
                        end={3.8}
                        suffix=" Mrd."
                        duration={3}
                        separator=" "
                        decimals={1}
                        decimal="."
                        enableScrollSpy
                      ></CountUp>
                    </dd>
                  </div>

                  <div className="mx-auto flex max-w-[400]  flex-col gap-y-2">
                    <dt className="text-xl leading-7 text-black">
                      Auftragsbestand in CHF
                    </dt>
                    <dd className="order-first text-6xl font-bold tracking-tight text-primary sm:text-5xl">
                      <CountUp
                        start={0}
                        end={22}
                        suffix=" Mrd."
                        duration={3}
                        enableScrollSpy
                      ></CountUp>
                    </dd>
                  </div>
                  <div className="mx-auto flex max-w-[400]  flex-col gap-y-2">
                    <dt className="text-xl leading-7 text-black">
                      Auftragsbestand in CHF
                    </dt>
                    <dd className="order-first text-6xl font-bold tracking-tight text-primary sm:text-5xl">
                      <CountUp
                        start={0}
                        end={8.6}
                        suffix=" Mrd."
                        separator=" "
                        decimals={1}
                        decimal="."
                        duration={3}
                        enableScrollSpy
                      ></CountUp>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          {props.onlyOneRow ?? (
            <div className="second-level">
              {/* <div className=" border-b border-black border-solid">
            <H3 titleH3="Allgemeine Kennzahlen"></H3>
          </div> */}
              <div className="bg-secondaryBgcGray py-8 sm:py-10">
                <div className="mx-auto max-w-full">
                  <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-2">
                      <dt className="text-xl leading-7 text-black">
                        Anzahl Mitarbeitende
                      </dt>
                      <dd className="order-first text-6xl font-bold tracking-tight text-primary sm:text-5xl">
                        <CountUp
                          start={0}
                          end={13.743}
                          separator=" "
                          decimals={3}
                          decimal="'"
                          duration={3}
                          enableScrollSpy
                        ></CountUp>
                      </dd>
                    </div>
                    <div className="mx-auto flex max-w-[350px]  flex-col gap-y-2 items-center">
                      <dt className="text-xl leading-7 text-black">
                        Durchschnittliche Verfügbarkeit von Schienenfahrzeugen
                      </dt>
                      <dt className="text-center"></dt>
                      <dd className="order-first text-6xl font-bold tracking-tight text-primary sm:text-5xl">
                        <CountUp
                          start={0}
                          end={98}
                          suffix="%"
                          prefix="&gt;"
                          duration={3}
                          enableScrollSpy
                        ></CountUp>
                      </dd>
                    </div>
                    <div className="mx-auto flex max-w-xs  flex-col gap-y-2 items-center">
                      <dt className="text-xl leading-7 text-black">
                        Anzahl ausgelieferte Schienenfahrzeuge
                      </dt>
                      <dd className="order-first text-6xl font-bold tracking-tight text-primary sm:text-5xl">
                        <CountUp
                          start={0}
                          end={11.749}
                          separator=" "
                          decimals={3}
                          decimal="'"
                          duration={3}
                          enableScrollSpy
                        ></CountUp>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          )}
        </div>
      </ContentWidth>
    </section>
  );
};

export default FactsAndFigures;
