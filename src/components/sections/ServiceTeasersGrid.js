"use client";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

import ContentWidth from "../layouts/ContentWidth";
import H2 from "../typography/H2";
import Text from "../typography/Text";





const ServiceTeasersGrid= ({blok}) => {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased pb-24">
      <ContentWidth>
        <div className="col-span-12 pt-24">
     <H2>{blok?.title}</H2>
      <Text>{blok?.text}</Text>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 mb-6 mx-auto"
          {...storyblokEditable(blok)}>
          {blok.grid_container.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok?._uid} />
          ))}
        </div>
      </ContentWidth>
    </section>
  );
};

export default ServiceTeasersGrid;
