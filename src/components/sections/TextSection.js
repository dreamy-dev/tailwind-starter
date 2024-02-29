
import { storyblokEditable } from "@storyblok/react/rsc";
import SmallWidth from "../../components/layouts/SmallWidth";
import H2 from "../typography/H2";
import Text from "../typography/Text";
import { renderRichText } from "@storyblok/react";





export default function TextSection({ blok }) {
   const renderedRichText = renderRichText(blok.text);
  //console.log(renderedRichText);
  return (
    <section
      {...storyblokEditable(blok)}
      className="bg-white dark:bg-gray-900 py-24"
    >
      <SmallWidth>
        <H2>{blok?.title}</H2>
    
      <div  dangerouslySetInnerHTML={{    __html: renderedRichText  }}></div>
      </SmallWidth>
    </section>
  );
}
