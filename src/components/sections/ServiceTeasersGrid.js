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
        <div 
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
