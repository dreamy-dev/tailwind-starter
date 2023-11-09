import SmallWidth from "../layouts/SmallWidth";
import H2 from "../typography/H2";

export default function TeaserSuccessStories() {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <SmallWidth>
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <H2 titleH2={"Unsere Mitarbeiter machen uns aus"}></H2>
            <p className="mt-4 text-base font-normal text-black sm:text-xl dark:text-gray-400">
              Sie haben die Möglichkeit, mit einem Team talentierter Fachleute
              zusammenzuarbeiten, anspruchsvolle Probleme anzugehen und auf neue
              und kreative Weise zu denken.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-8 lg:mt-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3">
            <div className="relative overflow-hidden rounded-lg group">
              <img
                className="object-cover h-80 scale-100 ease-in duration-300 group-hover:scale-125"
                src="https://www.stadlerrail.com/media/img/c/produktionslogistik_studenten.jpg"
                alt=""
              />
              <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">Robert Meier</p>
                  <p className="text-base font-medium text-gray-300">
                    30 Jahre bei Stadler
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
                  <p className="text-xl font-bold text-white">Mario Steiner</p>
                  <p className="text-base font-medium text-gray-300">
                    10 Jahre bei Stadler
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
                  <p className="text-xl font-bold text-white">Kevin Kiehl</p>
                  <p className="text-base font-medium text-gray-300">
                    5 Jahre bei Stadler
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="max-w-3xl p-4 mx-auto mt-8 rounded-md lg:mt-16 bg-gray-50 dark:bg-gray-800">
          <div className="flex flex-col justify-between gap-3 md:gap-6 md:items-center md:flex-row">
            <div className="flex items-center gap-1.5">
              <svg
                aria-hidden="true"
                className="hidden w-5 h-5 text-gray-800 dark:text-gray-400 md:block shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
              <span className="text-base font-normal text-gray-700 dark:text-gray-400">
                <span className="font-semibold">
                  Want to join the Flowbite team?
                </span>
                We are growing our community.
              </span>
            </div>

            <a
              href="#"
              title=""
              className="inline-flex items-center text-base font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Join our team
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-1.5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div> */}
        </div>
      </SmallWidth>
    </section>
  );
}
