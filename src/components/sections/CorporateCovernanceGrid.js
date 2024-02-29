import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

import SuperSmallWidth from "../layouts/SuperSmallWidth";
import H2 from "../typography/H2";
import Text from "../typography/Text";

const CorporateGorvernanceGrid = ({ blok}) => {
  return (
    <section className="bg-white dark:bg-gray-900 py-24">
      <SuperSmallWidth>
        <div className="">
          <div className="mx-auto text-center mb-2 lg:mb-4">
            <H2>{blok?.title}</H2>
          </div>
          <div className="mx-auto text-left mb-8 lg:mb-16">
            <Text>
             {blok?.text}
            </Text>
          </div>
          <div
            className={`grid gap-8 sm:grid-cols-2 lg:grid-cols-${numberOfColumns}`}
            {...storyblokEditable(blok)}  >
             {blok?.teaserCards.map((nestedBlok) => (
                  <StoryblokComponent
                    blok={nestedBlok}
                    key={nestedBlok?._uid}
                  />
                ))}
            {/* <a href="unternehmen/verwaltungsrat">
              <article className="p-4 h-full flex flex-col flex-wrap justify-between content-start bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Verwaltungsrat
                </h2>
                <p className="mb-4 font-normal text-black dark:text-gray-400">
                  Erfahren Sie mehr über den Verwaltungsrat von Stadler.
                </p>
                <img className="w-5" src="/icons/arrow-blue.svg" alt="" />
              </article>
            </a>
            <a href="/unternehmen/konzernleitung">
              <article className="p-4 h-full flex flex-col flex-wrap justify-between content-start bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Konzernleitung
                </h2>
                <p className="mb-4 font-normal text-black dark:text-gray-400">
                  Erfahren Sie mehr über die Konzernleitung von Stadler.
                </p>
                <img className="w-5" src="/icons/arrow-blue.svg" alt="" />
              </article>
            </a>
            {showThirdCard && (
              <a href="/compliance">
                <article className="p-4 h-full flex flex-col flex-wrap justify-between content-start bg-white  border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                  <h2 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Compliance
                  </h2>
                  <p className="mb-4 font-normal text-black dark:text-gray-400">
                    Erfahren Sie, wie Stadler sicherstellt, dass juristische und
                    ethische Regeln eingehalten werden.
                  </p>
                  <img className="w-5" src="/icons/arrow-blue.svg" alt="" />
                </article>
              </a>
            )} */}
          </div>
        </div>
      </SuperSmallWidth>
    </section>
  );
};
export default CorporateGorvernanceGrid;