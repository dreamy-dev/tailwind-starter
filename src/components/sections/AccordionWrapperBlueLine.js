import { storyblokEditable } from "@storyblok/react/rsc";
import H4 from "../typography/H4";

const AccordionWrapperBlueLine = ({ blok }) => {
  return (
      <div>
        <div className="max-w-full col-span-12">
          <div className=" border-b-2 border-primary">
            <H4 styles="my-6">{blok?.title}</H4>
          </div>
          <div {...storyblokEditable(blok)}>
          {blok.accordion_item.map((nestedBlok) => (
           <StoryblokComponent blok={nestedBlok} key={nestedBlok?._uid} />
         ))}
        </div>
      </div>
    </div>
  );
};

export default AccordionWrapperBlueLine;
