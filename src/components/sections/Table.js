"use client";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import ContentWidth from "../layouts/ContentWidth";
import H4 from "../typography/H4";
import Text from "../typography/Text";


const TableGrid = ({ blok }) => {
  return (
    <section className="bg-white pb-5 lg:pb-24" {...storyblokEditable(blok)}>
      <ContentWidth>
        <div className="max-w-full col-span-12">
          <div className="text-start mb-8">
            <H4>{blok?.title}</H4>
          </div>
          <div className="text-start mb-8">
            <Text>{blok?.text}</Text>
          </div>
          {blok?.table_item.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok?._uid} />
          ))}
        </div>
      </ContentWidth>
    </section>
  );
};
export default TableGrid;
