"use client";

import ButtonPrimary from "../elements/ButtonPrimary";
import H2 from "../typography/H2";

export default function Jobs() {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="flex flex-col gap-8 sm:gap-12 xl:gap-16 xl:flex-row xl:items-start">
          <div>
            <H2 titleH2={"Our people make us great"}></H2>
            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
              Here we focus on markets where technology, innovation, can unlock
              long-term value.
            </p>
            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
              Youll interact with talented professionals, will be challenged to
              solve difficult problems and think in new and creative ways.
            </p>
            <div className="mt-8">
              <ButtonPrimary position="left" buttonText="View all positions" />
            </div>
          </div>

          <div className="grid w-full grid-cols-1 gap-4 xl:max-w-3xl shrink-0 sm:grid-cols-2 md:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg group">
              <img
                className="object-cover h-80 scale-100 ease-in duration-300 group-hover:scale-125"
                src="https://www.stadlerrail.com/media/img/c/anlagenbauer_berufserfahrene.jpg"
                alt=""
              />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">Anlagenbauer</p>
                  <p className="text-base font-medium text-gray-300">
                    Engineering
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img
                className="object-cover h-80 scale-100 ease-in duration-300 group-hover:scale-125"
                src="https://www.stadlerrail.com/media/img/c/schweisser_berufserfahrene.jpg"
                alt=""
              />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">Schweisser</p>
                  <p className="text-base font-medium text-gray-300">
                    Engineering
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img
                className="object-cover h-80 scale-100 ease-in duration-300 group-hover:scale-125"
                src="https://www.stadlerrail.com/media/img/c/bild_075.jpg"
                alt=""
              />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">Anlagenbauer</p>
                  <p className="text-base font-medium text-gray-300">
                    Engineering
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img
                className="object-cover h-80 scale-100 ease-in duration-300 group-hover:scale-125"
                src="https://www.stadlerrail.com/media/img/c/interne_transporte_berufserfahrene.jpg"
                alt=""
              />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">Anlagenbauer</p>
                  <p className="text-base font-medium text-gray-300">
                    Transport
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img
                className="object-cover h-80 scale-100 ease-in duration-300 group-hover:scale-125"
                src="https://www.stadlerrail.com/media/img/c/elektro_vormontage_berufserfahrene.jpg"
                alt=""
              />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    Elektro Vormontage
                  </p>
                  <p className="text-base font-medium text-gray-300">
                    Engineering
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-lg group">
              <img
                className="object-cover h-80 scale-100 ease-in duration-300 group-hover:scale-125"
                src="https://www.stadlerrail.com/media/img/c/schreiner_berufserfahrene.jpg"
                alt=""
              />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">Schreiner</p>
                  <p className="text-base font-medium text-gray-300">
                    Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
