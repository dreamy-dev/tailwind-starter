import ContentWidth from "@/components/layouts/ContentWidth";
import HeroText from "@/components/sections/HeroText";
import Text from "@/components/typography/Text";
import H2 from "@/components/typography/H2";

export default function Publications() {
  return (
    <section>
      <ContentWidth>
        <div className="col-span-12 py-8">
          <H2 titleH2="Publikationen"></H2>
          <br />
          <Text>
            Bitte beachten Sie die neuesten Finanzberichte und erfahren Sie mehr
            über kommende Anlässe.
          </Text>
          <br />
          <div className="flex flex-row flex-wrap">
            <a
              href="#"
              className="flex flex-col mb-2 items-center bg-white border border-gray-200 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full h-96 md:h-auto md:w-48"
                src="/halbjahresbericht-2023.png"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Halbjahresbericht 2023
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col ml-2 mb-2 items-center bg-white border border-gray-200 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full h-96 md:h-auto md:w-48"
                src="/halbjahresbericht-2023.png"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Halbjahresbericht 2023
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col mb-2 items-center bg-white border border-gray-200 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full h-96 md:h-auto md:w-48"
                src="/halbjahresbericht-2023.png"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Halbjahresbericht 2023
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex flex-col mb-2 ml-2 items-center bg-white border border-gray-200 shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full h-96 md:h-auto md:w-48"
                src="/halbjahresbericht-2023.png"
                alt=""
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Halbjahresbericht 2023
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor invidunt ut labore et dolore magna
                  aliquyam erat, sed diam voluptua.
                </p>
              </div>
            </a>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
}
