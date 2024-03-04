"use client";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import H3 from "../typography/H3";
import Link from "next/link";
import Text from "../typography/Text";
import ContentWidth from "../layouts/ContentWidth";



const SuccessStoryContent = ({ blok }) => {
  return (
    <section {...storyblokEditable(blok)}  className="min-w-[100%] relative lg:min-w-[43%] md:flex-row">
        <ContentWidth>
        <div className="p-5 col-span-12">
        <div className="mb-4">
          <H3>{blok.title}</H3>
        </div>
        <div className="mb-14">
          <Text>{blok.teaser}</Text>
        </div>
      </div>
        </ContentWidth>        
    </section>
  );
};

export default SuccessStoryContent;
